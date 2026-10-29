const SUPPORTED_LANGUAGES = ["fi", "sv", "en"];
const MAX_CODELIST_ROWS = 150;
const LOCATION_PAGE_SIZE = 100;
const MAX_SCHEMA_DEPTH = 4;
const LOCATION_CODE_DATA_ELEMENT_IDS = new Set(["DE-015-01", "DE-015-04"]);
const API_SPECIFICATIONS = {
    declarant: {
        path: "./declarant/openapi.json",
    },
    port: {
        path: "./port/openapi.json",
    },
};
const SUPPRESSED_RULE_REFS_BY_FORMALITY = {
    SEC: new Set(["R-GENERAL-040"]),
    HZA: new Set(["R-HZA-008"]),
    HZD: new Set(["R-HZA-008"]),
};

let content = {};
let language = "fi";
let schemaIndex;
let codeListData;
let codeListsByName;
let webinarData;
let narrowDataElements;
let technicalDataElements;
let technicalCodeLists;
let technicalCodeListMappings;
let rulesConditionsGuidelines;
let locationRecords;
let locationSearchIndex;
let locationLoadPromise;
let locationVisibleCount = LOCATION_PAGE_SIZE;
const apiSpecifications = new Map();
let activeApiSpecification;
let activeApiService;
let activeApiServerUrl = "";
let apiRequestId = 0;
let codeListModalMode = "codes";
let codeListModalRequestId = 0;
let schemaRequestId = 0;
let rulesModalRequestId = 0;
let activeRoute = "home";

const elements = {};

function translate(key, replacements = {}) {
    const dictionary = content[language] || content.en || {};
    let text = dictionary[key] ?? content.en?.[key] ?? key;
    for (const [name, value] of Object.entries(replacements)) {
        text = text.replaceAll(`{${name}}`, String(value));
    }
    return text;
}

function normalizeCodeListName(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_./-]/g, "")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");
}

function setStatus(message = "") {
    elements.status.textContent = message;
    elements.status.hidden = !message;
}

async function fetchJsonResponse(url) {
    const requestUrl = new URL(url, import.meta.url);
    const response = await fetch(requestUrl);
    if (!response.ok) {
        throw new Error(`Failed to load ${requestUrl}: HTTP ${response.status}`);
    }
    return response;
}

async function fetchJson(url) {
    const response = await fetchJsonResponse(url);
    return response.json();
}

function applyTranslations() {
    document.documentElement.lang = language;
    document.title = `${translate("home.title")} – NEMO`;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = translate(element.dataset.i18n);
        element.lang = language;
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
        element.setAttribute("aria-label", translate(element.dataset.i18nAria));
    });
    const portGuideIndex = {
        fi: "index.html",
        sv: "index-sv.html",
        en: "index-en.html",
    }[language];
    document.querySelectorAll("[data-port-guide-link]").forEach((link) => {
        link.href = `./ports/user-guide/${portGuideIndex}`;
    });
    renderHotTopics();

    const navigationLabels = {
        home: translate("nav.home"),
        formalities: translate("nav.formalities"),
        codelists: translate("nav.codelists"),
        locations: translate("nav.locations"),
        integration: translate("nav.integration"),
        webinars: translate("nav.webinars"),
    };
    document.querySelectorAll(".spa-nav button").forEach((button) => {
        button.setAttribute("aria-label", navigationLabels[button.dataset.route]);
    });
    document.querySelector(".spa-nav").setAttribute("aria-label", translate("nav.label"));
    document.querySelector(".language-picker select").setAttribute("aria-label", translate("language.label"));
    if (schemaIndex) {
        populateFormalitySelect();
    }
    renderRoute();
    if (elements.codeListModal?.open) {
        updateCodeListSearchLabel();
        if (codeListModalMode === "locations" && locationRecords) {
            renderLocationCodeList();
        } else if (Array.isArray(elements.codeListModalEntries)) {
            renderTechnicalCodeList(
                elements.codeListModalEntries,
                document.getElementById("technical-code-list-title").textContent,
            );
        }
    }
}

function renderHotTopics() {
    const container = document.getElementById("home-hot-topics-list");
    if (!container) {
        return;
    }

    const items = content[language]?.["home.hotTopics.items"] ?? content.en?.["home.hotTopics.items"] ?? [];
    const fragment = document.createDocumentFragment();
    const linkLabels = {
        formality: translate("home.hotTopics.formalityLink"),
        rules: translate("home.hotTopics.rulesLink"),
    };

    items.forEach((item) => {
        const card = document.createElement("article");
        card.className = "home-hot-topic";

        const heading = document.createElement("h3");
        heading.textContent = `${item.formality} · ${item.rule}`;

        const version = document.createElement("span");
        version.className = "home-hot-topic__version";
        version.textContent = item.version;

        const description = document.createElement("p");
        description.textContent = item.description;
        card.append(version, heading, description);

        if (Array.isArray(item.links) && item.links.length) {
            const links = document.createElement("div");
            links.className = "home-hot-topic__links";
            item.links.forEach((link) => {
                const label = linkLabels[link.type];
                if (!label || !link.href) {
                    return;
                }
                const anchor = document.createElement("a");
                anchor.href = link.href;
                anchor.target = "_blank";
                anchor.rel = "noopener noreferrer";
                anchor.textContent = label;
                links.append(anchor);
            });
            if (links.childElementCount) {
                card.append(links);
            }
        }

        fragment.append(card);
    });
    container.replaceChildren(fragment);
}

function detectInitialLanguage() {
    let saved = null;
    try {
        saved = localStorage.getItem("nemo.lang");
    } catch (error) {
        console.warn("Saved language preference is unavailable.", error);
    }
    if (SUPPORTED_LANGUAGES.includes(saved)) {
        return saved;
    }
    const browserLanguage = (navigator.language || "fi").slice(0, 2).toLowerCase();
    return SUPPORTED_LANGUAGES.includes(browserLanguage) ? browserLanguage : "fi";
}

function renderRoute() {
    const [route, section] = window.location.hash.replace(/^#\/?/, "").split("/", 2);
    const previousRoute = activeRoute;
    const previousApiService = activeApiService;
    activeApiService = route === "api" && ["declarant", "port"].includes(section) ? section : null;
    if (previousApiService !== activeApiService) {
        activeApiSpecification = undefined;
        activeApiServerUrl = "";
        elements.apiOverview?.removeAttribute("open");
        elements.apiTitle.textContent = "";
        elements.apiIntro.textContent = "";
        elements.apiDescription.textContent = "";
        elements.apiVersion.textContent = "";
        elements.apiServerSelect.replaceChildren();
        elements.apiServerUrl.textContent = "";
        elements.apiSummary.textContent = "";
        elements.apiOperations.replaceChildren();
        elements.apiSchemaList.replaceChildren();
        if (activeApiService) {
            elements.apiSearch.value = "";
        }
    }
    activeRoute = route === "formalities" && section === "data-elements"
        ? "data-elements"
        : ["formalities", "codelists", "locations", "integration", "quickstart", "webinars", "data-elements"].includes(route)
            ? route
            : activeApiService
                ? "api"
            : "home";
    const routeChanged = previousRoute !== activeRoute || previousApiService !== activeApiService;
    const activeNavigationRoute = ["data-elements"].includes(activeRoute) ? "formalities"
        : ["api", "quickstart"].includes(activeRoute) ? "integration" : activeRoute;

    document.querySelectorAll(".spa-view").forEach((view) => {
        view.hidden = view.id !== `view-${activeRoute}`;
    });
    document.querySelectorAll(".spa-nav [data-route]").forEach((button) => {
        if (button.dataset.route === activeNavigationRoute) {
            button.setAttribute("aria-current", "page");
        } else {
            button.removeAttribute("aria-current");
        }
    });
    if (routeChanged && !(["integration", "quickstart"].includes(activeRoute) && section)) {
        const activeView = document.getElementById(`view-${activeRoute}`);
        if (activeView) {
            activeView.tabIndex = -1;
            activeView.focus({ preventScroll: true });
        }
        window.scrollTo(0, 0);
    }

    setStatus("");
    if (activeRoute === "formalities") {
        loadFormalities().catch((error) => showDataError(error, "formalities.error", elements.schemaResult));
    } else if (activeRoute === "codelists") {
        loadCodeLists().catch((error) => showDataError(error, "codelists.error", elements.codeListResult));
    } else if (activeRoute === "locations") {
        if (locationRecords) {
            renderLocations();
        } else {
            setStatus(translate("locations.loading"));
            loadLocationRecords().then(() => {
                if (activeRoute !== "locations") {
                    return;
                }
                setStatus("");
                renderLocations();
                if (routeChanged) {
                    window.scrollTo(0, 0);
                }
            }).catch((error) => {
                if (activeRoute !== "locations") {
                    return;
                }
                setStatus("");
                showDataError(error, "locations.error", elements.locationResults);
            });
        }
    } else if (activeRoute === "api") {
        const service = activeApiService;
        loadApiSpecification(service).catch((error) => {
            if (activeRoute === "api" && activeApiService === service) {
                setStatus("");
                showDataError(error, "apiDocs.error", elements.apiOperations);
            }
        });
    } else if (activeRoute === "webinars") {
        loadWebinars().catch((error) => showDataError(error, "webinars.error", elements.webinarUpcoming));
    } else if (activeRoute === "data-elements") {
        loadDataElements().catch((error) => showDataError(error, "dataElements.error", elements.dataElementsResult));
    } else if (section && ["integration", "quickstart"].includes(activeRoute)) {
        const targetId = activeRoute === "quickstart" ? `quickstart-${section}` : section;
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    }
}

function showDataError(error, messageKey, target) {
    console.error(error);
    target.replaceChildren();
    const message = document.createElement("p");
    message.className = "error-message";
    message.textContent = `${translate(messageKey)} ${error.message}`;
    target.append(message);
}

function apiSchemaName(schema) {
    return typeof schema?.$ref === "string" ? schema.$ref.split("/").at(-1) : "";
}

function apiSchemaType(schema) {
    if (!schema || typeof schema !== "object") {
        return translate("apiDocs.unknownType");
    }
    if (schema.$ref) {
        return apiSchemaName(schema);
    }
    if (Array.isArray(schema.enum)) {
        return `${schema.type || "string"} · ${schema.enum.join(", ")}`;
    }
    if (Array.isArray(schema.oneOf)) {
        return schema.oneOf.map(apiSchemaType).join(" | ");
    }
    if (Array.isArray(schema.anyOf)) {
        return schema.anyOf.map(apiSchemaType).join(" | ");
    }
    if (Array.isArray(schema.allOf)) {
        return schema.allOf.map(apiSchemaType).join(" & ");
    }
    return [schema.type, schema.format].filter(Boolean).join(" · ") || translate("apiDocs.unknownType");
}

function appendApiParagraph(container, text, className = "") {
    if (!text) {
        return;
    }
    const paragraph = document.createElement("p");
    if (className) {
        paragraph.className = className;
    }
    paragraph.textContent = text;
    container.append(paragraph);
}

function formatApiDescription(value) {
    return String(value || "")
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/(?:p|div|li)\s*>/gi, "\n")
        .replace(/<(?:p|div|li|strong|b|em|code)(?:\s[^>]*)?>/gi, "")
        .replace(/<\/(?:strong|b|em|code)\s*>/gi, "")
        .replace(/```[\w-]*/g, "")
        .replace(/```/g, "")
        .replace(/\\\s*-(?=[A-Z])/g, "\n-")
        .replace(/\\\s*-\s+/g, "\n• ")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
}

function apiOperations(specification) {
    const methodNames = new Set(["get", "post", "put", "patch", "delete", "options", "head", "trace"]);
    return Object.entries(specification.paths || {}).flatMap(([path, pathItem]) =>
        Object.entries(pathItem || {})
            .filter(([method, operation]) => methodNames.has(method.toLowerCase()) && operation && typeof operation === "object")
            .map(([method, operation]) => ({ path, method: method.toUpperCase(), operation })));
}

function appendApiSchemaReference(container, schema) {
    const name = apiSchemaName(schema);
    if (!name) {
        return;
    }
    const link = document.createElement("a");
    link.href = `#api-schema-${encodeURIComponent(name)}`;
    link.textContent = name;
    link.className = "api-schema-reference";
    container.append(link);
}

function renderApiParameters(container, parameters) {
    if (!Array.isArray(parameters) || !parameters.length) {
        return;
    }
    const heading = document.createElement("h4");
    heading.textContent = translate("apiDocs.parameters");
    const table = document.createElement("table");
    table.className = "data-table api-detail-table";
    const head = document.createElement("thead");
    const header = document.createElement("tr");
    ["apiDocs.name", "apiDocs.location", "apiDocs.type", "apiDocs.required", "apiDocs.description"].forEach((key) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = translate(key);
        header.append(cell);
    });
    head.append(header);
    const body = document.createElement("tbody");
    parameters.forEach((parameter) => {
        const row = document.createElement("tr");
        const values = [
            parameter.name || "",
            parameter.in || "",
            apiSchemaType(parameter.schema),
            parameter.required ? translate("apiDocs.yes") : translate("apiDocs.no"),
            parameter.description || "",
        ];
        values.forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.append(cell);
        });
        body.append(row);
    });
    table.append(head, body);
    container.append(heading, table);
}

function renderApiRequestBody(container, requestBody, specification) {
    if (!requestBody) {
        return;
    }
    const heading = document.createElement("h4");
    heading.textContent = translate("apiDocs.requestBody");
    container.append(heading);
    appendApiParagraph(container, requestBody.description);
    if (requestBody.required) {
        appendApiParagraph(container, translate("apiDocs.bodyRequired"), "api-detail-note");
    }
    Object.entries(requestBody.content || {}).forEach(([mediaType, media]) => {
        const item = document.createElement("div");
        item.className = "api-media-type";
        const type = document.createElement("code");
        type.textContent = mediaType;
        item.append(type);
        const schema = document.createElement("span");
        schema.textContent = apiSchemaType(media.schema);
        item.append(schema);
        appendApiSchemaReference(item, media.schema);
        const schemaObject = specification.components?.schemas?.[apiSchemaName(media.schema)];
        if (schemaObject?.properties) {
            const properties = document.createElement("ul");
            Object.entries(schemaObject.properties).forEach(([name, property]) => {
                const propertyItem = document.createElement("li");
                const code = document.createElement("code");
                code.textContent = name;
                propertyItem.append(code, document.createTextNode(` · ${apiSchemaType(property)}`));
                if (property.description) {
                    propertyItem.append(document.createTextNode(` — ${property.description}`));
                }
                properties.append(propertyItem);
            });
            item.append(properties);
        }
        container.append(item);
    });
}

function renderApiResponses(container, responses) {
    const entries = Object.entries(responses || {});
    if (!entries.length) {
        return;
    }
    const heading = document.createElement("h4");
    heading.textContent = translate("apiDocs.responses");
    const list = document.createElement("ul");
    list.className = "api-response-list";
    entries.forEach(([status, response]) => {
        const item = document.createElement("li");
        const code = document.createElement("code");
        code.textContent = status;
        const description = document.createElement("span");
        description.textContent = response.description || "";
        item.append(code, description);
        const mediaTypes = Object.entries(response.content || {});
        mediaTypes.forEach(([mediaType, mediaTypeDefinition]) => {
            const mediaLabel = document.createElement("small");
            mediaLabel.textContent = `${mediaType} · ${apiSchemaType(mediaTypeDefinition.schema)}`;
            item.append(mediaLabel);
            appendApiSchemaReference(item, mediaTypeDefinition.schema);
        });
        list.append(item);
    });
    container.append(heading, list);
}

function renderApiOperation(operationEntry, specification) {
    const details = document.createElement("details");
    details.className = "api-operation";
    const summary = document.createElement("summary");
    const method = document.createElement("span");
    method.className = `api-method api-method--${operationEntry.method.toLowerCase()}`;
    method.textContent = operationEntry.method;
    const path = document.createElement("code");
    path.textContent = operationEntry.path;
    const title = document.createElement("span");
    title.textContent = operationEntry.operation.summary || operationEntry.operation.operationId || "";
    summary.append(method, path, title);
    details.append(summary);

    const body = document.createElement("div");
    body.className = "api-operation__body";
    appendApiParagraph(body, operationEntry.operation.description);
    renderApiParameters(body, [
        ...(specification.paths[operationEntry.path].parameters || []),
        ...(operationEntry.operation.parameters || []),
    ]);
    renderApiRequestBody(body, operationEntry.operation.requestBody, specification);
    renderApiResponses(body, operationEntry.operation.responses);
    details.append(body);
    return details;
}

function renderApiSchemas(specification) {
    const schemas = Object.entries(specification.components?.schemas || {});
    const fragment = document.createDocumentFragment();
    schemas.sort(([left], [right]) => left.localeCompare(right)).forEach(([name, schema]) => {
        const details = document.createElement("details");
        details.className = "api-schema";
        details.id = `api-schema-${encodeURIComponent(name)}`;
        const summary = document.createElement("summary");
        const schemaName = document.createElement("code");
        schemaName.textContent = name;
        const type = document.createElement("span");
        type.className = "technical-badge";
        type.textContent = apiSchemaType(schema);
        summary.append(schemaName, type);
        details.append(summary);
        const body = document.createElement("div");
        body.className = "api-schema__body";
        appendApiParagraph(body, schema.description);
        const required = new Set(Array.isArray(schema.required) ? schema.required : []);
        const properties = Object.entries(schema.properties || {});
        if (properties.length) {
            const list = document.createElement("dl");
            properties.forEach(([propertyName, property]) => {
                const term = document.createElement("dt");
                const propertyCode = document.createElement("code");
                propertyCode.textContent = propertyName;
                term.append(propertyCode);
                if (required.has(propertyName)) {
                    const badge = document.createElement("span");
                    badge.className = "api-required";
                    badge.textContent = translate("apiDocs.required");
                    term.append(badge);
                }
                const description = document.createElement("dd");
                const propertyType = document.createElement("span");
                propertyType.className = "api-schema__type";
                propertyType.textContent = apiSchemaType(property);
                description.append(propertyType);
                appendApiParagraph(description, property.description);
                appendApiSchemaReference(description, property);
                list.append(term, description);
            });
            body.append(list);
        }
        details.append(body);
        fragment.append(details);
    });
    elements.apiSchemaList.replaceChildren(fragment);
}

function renderApiSpecification(specification, service) {
    if (activeRoute !== "api" || activeApiService !== service) {
        return;
    }
    const titleKey = service === "declarant"
        ? "integration.onboarding.declarant.title"
        : "integration.onboarding.port.title";
    const introKey = service === "declarant"
        ? "integration.serviceDocs.declarant.intro"
        : "integration.serviceDocs.portApi.intro";
    elements.apiTitle.textContent = translate(titleKey);
    elements.apiIntro.textContent = translate(introKey);
    elements.apiDescription.textContent = formatApiDescription(specification.info?.description);
    elements.apiVersion.textContent = `${translate("apiDocs.version")} ${specification.info?.version || translate("apiDocs.unknownType")}`;

    const servers = (specification.servers || []).filter((server) =>
        typeof server.url === "string" && /^https:\/\//i.test(server.url));
    elements.apiServerSelect.replaceChildren();
    servers.forEach((server) => {
        const option = document.createElement("option");
        option.value = server.url;
        option.textContent = server.description || server.url;
        elements.apiServerSelect.append(option);
    });
    if (servers.length) {
        if (!servers.some((server) => server.url === activeApiServerUrl)) {
            activeApiServerUrl = servers.find((server) => /^(STG|PRD)$/i.test(server.description || ""))?.url
                || servers[0].url;
        }
        elements.apiServerSelect.value = activeApiServerUrl;
        elements.apiServerUrl.textContent = activeApiServerUrl;
    } else {
        elements.apiServerUrl.textContent = translate("apiDocs.noServers");
    }
    elements.apiServerSelect.disabled = servers.length < 2;

    const query = elements.apiSearch.value.trim().toLocaleLowerCase(language);
    const operations = apiOperations(specification).filter(({ path, method, operation }) =>
        `${path} ${method} ${operation.summary || ""} ${operation.description || ""} ${operation.operationId || ""} ${(operation.tags || []).join(" ")}`
            .toLocaleLowerCase(language)
            .includes(query));
    elements.apiSummary.textContent = translate("apiDocs.operationCount", { count: operations.length });
    if (!operations.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate("apiDocs.empty");
        elements.apiOperations.replaceChildren(empty);
    } else {
        const groups = new Map();
        operations.forEach((entry) => {
            const tag = entry.operation.tags?.[0] || translate("apiDocs.otherOperations");
            if (!groups.has(tag)) {
                groups.set(tag, []);
            }
            groups.get(tag).push(entry);
        });
        const fragment = document.createDocumentFragment();
        groups.forEach((entries, tag) => {
            const group = document.createElement("section");
            group.className = "api-operation-group";
            const heading = document.createElement("h2");
            heading.textContent = tag;
            group.append(heading);
            entries.forEach((entry) => group.append(renderApiOperation(entry, specification)));
            fragment.append(group);
        });
        elements.apiOperations.replaceChildren(fragment);
    }
    renderApiSchemas(specification);
}

async function loadApiSpecification(service) {
    const requestId = ++apiRequestId;
    if (!API_SPECIFICATIONS[service]) {
        throw new Error(`Unknown API specification: ${service}`);
    }
    setStatus(translate("apiDocs.loading"));
    let specification = apiSpecifications.get(service);
    if (!specification) {
        specification = await fetchJson(API_SPECIFICATIONS[service].path);
        if (!specification.info || !specification.paths || typeof specification.paths !== "object") {
            throw new Error("OpenAPI specification has an unexpected structure.");
        }
        apiSpecifications.set(service, specification);
    }
    if (requestId !== apiRequestId || activeRoute !== "api" || activeApiService !== service) {
        return;
    }
    activeApiSpecification = specification;
    setStatus("");
    renderApiSpecification(specification, service);
}

async function loadFormalities() {
    if (!schemaIndex) {
        setStatus(translate("formalities.loading"));
        schemaIndex = await fetchJson("./data/schema-index.json");
        populateFormalitySelect();
    }
    setStatus("");
    await renderSelectedSchema();
}

function populateFormalitySelect() {
    const selectedFile = elements.formalitySelect.value;
    const options = schemaIndex.schemas
        .map((schema) => {
            const match = schema.label.match(/^([A-Z0-9]+)\s+(.+)$/);
            if (!match) {
                return null;
            }
            return {
                code: match[1],
                label: `${match[1]} · ${match[2]}`,
                file: schema.file,
            };
        })
        .filter(Boolean);
    options.sort((left, right) => left.code.localeCompare(right.code));
    elements.formalitySelect.replaceChildren();
    options.forEach((entry) => {
        const option = document.createElement("option");
        option.value = entry.file;
        option.textContent = entry.label;
        elements.formalitySelect.append(option);
    });
    if (!options.length) {
        throw new Error("Schema index does not contain any formalities.");
    }
    elements.formalitySelect.value = options.some((entry) => entry.file === selectedFile)
        ? selectedFile
        : options.find((entry) => entry.code === "NOA")?.file ?? options[0].file;
}

function resolveSchemaReference(schema, reference) {
    if (!reference.startsWith("#/")) {
        return null;
    }
    return reference.slice(2).split("/").reduce((value, segment) => {
        const key = segment.replace(/~1/g, "/").replace(/~0/g, "~");
        return value?.[key];
    }, schema);
}

function resolveSchemaNode(schema, rawNode, references) {
    let node = rawNode;
    const resolvedReferences = new Set(references);
    while (node?.$ref) {
        if (!node.$ref.startsWith("#/") || resolvedReferences.has(node.$ref)) {
            break;
        }

        resolvedReferences.add(node.$ref);
        const resolved = resolveSchemaReference(schema, node.$ref);
        if (!resolved) {
            break;
        }
        node = resolved;
    }
    return { node, references: resolvedReferences };
}

function isSuppressedRuleReference(formalityCode, ruleId) {
    const formality = String(formalityCode || "").toUpperCase();
    const normalizedRuleId = String(ruleId || "").toUpperCase();
    return Boolean(SUPPRESSED_RULE_REFS_BY_FORMALITY[formality]?.has(normalizedRuleId));
}

function filterSuppressedRuleReferences(formalityCode, rules) {
    return String(rules || "")
        .split(/\s+/)
        .filter((ruleId) => ruleId && !isSuppressedRuleReference(formalityCode, ruleId))
        .join("\n");
}

function schemaType(node) {
    if (node.type) {
        return Array.isArray(node.type) ? node.type.join(" | ") : node.type;
    }
    if (node.$ref) {
        return node.$ref.split("/").at(-1);
    }
    if (node.oneOf) {
        return "oneOf";
    }
    if (node.anyOf) {
        return "anyOf";
    }
    return "object";
}

function schemaNodeElement(name, rawNode, schema, required, depth, references = new Set()) {
    const item = document.createElement("li");
    const resolved = resolveSchemaNode(schema, rawNode, references);
    const { node, references: nextReferences } = resolved;

    const summary = document.createElement("div");
    summary.className = "schema-node";
    const nameCell = document.createElement("div");
    const nameCode = document.createElement("code");
    nameCode.textContent = name;
    nameCell.append(nameCode);
    if (required) {
        const badge = document.createElement("span");
        badge.className = "required-badge";
        badge.textContent = translate("formalities.required");
        nameCell.append(badge);
    }
    const typeCell = document.createElement("span");
    typeCell.className = "schema-node__type";
    typeCell.textContent = `${translate("formalities.type")}: ${schemaType(node)}`;
    const descriptionCell = document.createElement("span");
    descriptionCell.className = "schema-node__description";
    descriptionCell.textContent = rawNode.description || node.description || translate("formalities.noDescription");
    summary.append(nameCell, typeCell, descriptionCell);
    item.append(summary);

    if (node?.$ref && nextReferences.has(node.$ref)) {
        return item;
    }
    if (depth >= MAX_SCHEMA_DEPTH) {
        const note = document.createElement("small");
        note.textContent = translate("formalities.depthLimit");
        item.append(note);
        return item;
    }

    const properties = node.properties || {};
    const propertyEntries = Object.entries(properties);
    if (propertyEntries.length) {
        const list = document.createElement("ul");
        const requiredProperties = new Set(node.required || []);
        propertyEntries.slice(0, 40).forEach(([propertyName, property]) => {
            list.append(schemaNodeElement(
                propertyName,
                property,
                schema,
                requiredProperties.has(propertyName),
                depth + 1,
                nextReferences,
            ));
        });
        item.append(list);
    }
    if (node.items) {
        const list = document.createElement("ul");
        list.append(schemaNodeElement("[items]", node.items, schema, false, depth + 1, nextReferences));
        item.append(list);
    }
    const branches = node.oneOf || node.anyOf || [];
    if (branches.length) {
        const list = document.createElement("ul");
        branches.slice(0, 10).forEach((branch, index) => {
            list.append(schemaNodeElement(
                `${node.oneOf ? "oneOf" : "anyOf"} · ${index + 1}`,
                branch,
                schema,
                false,
                depth + 1,
                nextReferences,
            ));
        });
        item.append(list);
    }
    return item;
}

async function renderSelectedSchema() {
    const schemaPath = elements.formalitySelect.value;
    if (!schemaPath) {
        return;
    }
    const requestId = ++schemaRequestId;
    const schemaUrl = schemaPath.startsWith("http")
        ? new URL(new URL(schemaPath).pathname, window.location.origin)
        : new URL(schemaPath, window.location.href);
    elements.schemaDownload.href = schemaUrl.href;
    elements.schemaResult.replaceChildren();
    const loading = document.createElement("p");
    loading.textContent = translate("formalities.loading");
    elements.schemaResult.append(loading);

    let schema;
    let schemaResponse;
    try {
        schemaResponse = await fetchJsonResponse(schemaUrl);
        schema = await schemaResponse.json();
    } catch (error) {
        if (requestId !== schemaRequestId || elements.formalitySelect.value !== schemaPath) {
            return;
        }
        showDataError(error, "formalities.error", elements.schemaResult);
        return;
    }
    if (requestId !== schemaRequestId || elements.formalitySelect.value !== schemaPath) {
        return;
    }
    elements.schemaDownload.href = schemaResponse.url;
    const title = document.createElement("p");
    title.className = "result-summary";
    title.textContent = schema.description || elements.formalitySelect.selectedOptions[0].textContent;
    const tree = document.createElement("ul");
    tree.className = "schema-tree";
    Object.entries(schema.properties || {}).forEach(([name, property]) => {
        tree.append(schemaNodeElement(
            name,
            property,
            schema,
            (schema.required || []).includes(name),
            0,
        ));
    });

    const rawDetails = document.createElement("details");
    rawDetails.className = "schema-json";
    const rawSummary = document.createElement("summary");
    rawSummary.textContent = translate("formalities.fullJson");
    const rawSchema = document.createElement("pre");
    rawSchema.textContent = JSON.stringify(schema, null, 2);
    rawDetails.append(rawSummary, rawSchema);
    elements.schemaResult.replaceChildren(title, tree, rawDetails);
}

async function loadCodeLists() {
    if (!codeListData) {
        setStatus(translate("codelists.loading"));
        codeListData = await fetchJson("./data/codelist.json");
        codeListsByName = new Map(codeListData.listNames.map((name) => [name, []]));
        Object.entries(codeListData.byCode).forEach(([code, entries]) => {
            entries.forEach((entry) => codeListsByName.get(entry.listName)?.push({ code, ...entry }));
        });
        populateCodeListSelect();
    }
    setStatus("");
    renderSelectedCodeList();
}

function populateCodeListSelect() {
    elements.codeListSelect.replaceChildren();
    [...codeListsByName.keys()].sort().forEach((name) => {
        const option = document.createElement("option");
        option.value = name;
        option.textContent = `${name} (${codeListsByName.get(name).length})`;
        elements.codeListSelect.append(option);
    });
}

function renderSelectedCodeList() {
    const listName = elements.codeListSelect.value;
    const query = elements.codeListSearch.value.trim().toLocaleLowerCase(language);
    const entries = (codeListsByName.get(listName) || []).filter((entry) => {
        const label = entry.labels?.[language] || entry.labels?.en || "";
        return `${entry.code} ${label} ${entry.source || ""} ${(entry.formality || []).join(" ")}`
            .toLocaleLowerCase(language)
            .includes(query);
    });
    const count = document.createElement("p");
    count.className = "result-summary";
    count.textContent = translate("codelists.count", { count: entries.length });
    const table = document.createElement("table");
    table.className = "data-table";
    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["codelists.code", "codelists.label", "codelists.source", "codelists.formality"].forEach((key) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = translate(key);
        headerRow.append(cell);
    });
    header.append(headerRow);
    const body = document.createElement("tbody");
    entries.slice(0, MAX_CODELIST_ROWS).forEach((entry) => {
        const row = document.createElement("tr");
        const values = [
            entry.code,
            entry.labels?.[language] || entry.labels?.en || "",
            entry.source || "",
            (entry.formality || []).join(", "),
        ];
        values.forEach((value, index) => {
            const cell = document.createElement("td");
            if (index === 0) {
                const code = document.createElement("code");
                code.textContent = value;
                cell.append(code);
            } else {
                cell.textContent = value;
            }
            row.append(cell);
        });
        body.append(row);
    });
    table.append(header, body);

    const wrapper = document.createElement("div");
    wrapper.className = "table-scroll";
    wrapper.append(table);
    const shown = Math.min(entries.length, MAX_CODELIST_ROWS);
    const footer = document.createElement("p");
    footer.className = "result-summary";
    footer.textContent = entries.length
        ? translate("codelists.showing", { shown, total: entries.length })
        : translate("codelists.empty");
    elements.codeListResult.replaceChildren(count, wrapper, footer);
}

function webinarDate(dateValue) {
    if (typeof dateValue !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
        return null;
    }
    const [year, month, day] = dateValue.split("-").map(Number);
    const date = new Date(year, month - 1, day, 12);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
        ? date
        : null;
}

function localDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function safeWebinarUrl(value) {
    if (typeof value !== "string" || !value.trim()) {
        return null;
    }
    try {
        const url = new URL(value, window.location.href);
        return ["https:", "http:"].includes(url.protocol) ? url.href : null;
    } catch {
        return null;
    }
}

function populateWebinarFilters() {
    const selectedYear = elements.webinarYear.value;
    const selectedAudience = elements.webinarAudience.value;
    const years = [...new Set(webinarData.map((webinar) => webinar.date.slice(0, 4)))].sort().reverse();
    const audiences = [...new Set(webinarData.flatMap((webinar) => webinar.audience || []))]
        .filter((audience) => typeof audience === "string" && audience)
        .sort((left, right) => left.localeCompare(right, language));

    elements.webinarYear.replaceChildren();
    const allYears = document.createElement("option");
    allYears.value = "";
    allYears.textContent = translate("webinars.allYears");
    elements.webinarYear.append(allYears);
    years.forEach((year) => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        elements.webinarYear.append(option);
    });
    elements.webinarYear.value = years.includes(selectedYear) ? selectedYear : "";

    elements.webinarAudience.replaceChildren();
    const allAudiences = document.createElement("option");
    allAudiences.value = "";
    allAudiences.textContent = translate("webinars.allAudiences");
    elements.webinarAudience.append(allAudiences);
    audiences.forEach((audience) => {
        const option = document.createElement("option");
        option.value = audience;
        option.textContent = audience;
        elements.webinarAudience.append(option);
    });
    elements.webinarAudience.value = audiences.includes(selectedAudience) ? selectedAudience : "";
}

async function loadWebinars() {
    if (!webinarData) {
        setStatus(translate("webinars.loading"));
        const data = await fetchJson("./data/webinars.json");
        if (!Array.isArray(data)) {
            throw new Error("Webinar data must be a JSON array.");
        }
        webinarData = data.filter((webinar) => {
            if (!webinar || typeof webinar.id !== "string" || typeof webinar.title !== "string" || !webinarDate(webinar.date)) {
                console.warn("Skipping webinar with invalid required fields.", webinar);
                return false;
            }
            return true;
        });
    }
    populateWebinarFilters();
    setStatus("");
    renderWebinars();
}

function webinarCard(webinar) {
    const card = document.createElement("article");
    card.className = "webinar-card";

    const date = webinarDate(webinar.date);
    const meta = document.createElement("div");
    meta.className = "webinar-card__meta";
    const time = document.createElement("time");
    time.dateTime = webinar.date;
    time.textContent = new Intl.DateTimeFormat(language, {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
    meta.append(time);
    if (Number.isFinite(webinar.durationMin) && webinar.durationMin > 0) {
        const duration = document.createElement("span");
        duration.textContent = translate("webinars.duration", { minutes: webinar.durationMin });
        meta.append(document.createTextNode(" · "), duration);
    }

    const title = document.createElement("h3");
    title.textContent = webinar.title;
    card.append(meta, title);

    if (typeof webinar.summary === "string" && webinar.summary.trim()) {
        const summary = document.createElement("p");
        summary.textContent = webinar.summary;
        card.append(summary);
    }

    const audiences = Array.isArray(webinar.audience) ? webinar.audience : [];
    const tags = Array.isArray(webinar.tags) ? webinar.tags : [];
    const badges = document.createElement("div");
    badges.className = "webinar-badges";
    audiences.filter((tag) => typeof tag === "string" && tag.trim())
        .forEach((tag) => {
            const badge = document.createElement("span");
            badge.className = "webinar-badge";
            badge.textContent = tag;
            badges.append(badge);
        });
    tags.filter((tag) => typeof tag === "string" && tag.trim())
        .forEach((tag) => {
            const badge = document.createElement("span");
            badge.className = "webinar-badge webinar-badge--tag";
            badge.textContent = `#${tag}`;
            badges.append(badge);
        });
    if (badges.childElementCount) {
        card.append(badges);
    }

    const documents = Array.isArray(webinar.materials?.docs) ? webinar.materials.docs : [];
    const materialLinks = [
        ["webinars.recording", webinar.materials?.recording],
        ["webinars.slides", webinar.materials?.slides],
        ...documents.map((document) => [
            typeof document?.label === "string" && document.label.trim() ? document.label : "webinars.material",
            document?.url,
        ]),
    ].filter(([, url]) => safeWebinarUrl(url));
    const materials = document.createElement("div");
    materials.className = "webinar-card__materials";
    if (materialLinks.length) {
        const heading = document.createElement("h4");
        heading.textContent = translate("webinars.materials");
        const links = document.createElement("ul");
        materialLinks.forEach(([label, url]) => {
            const item = document.createElement("li");
            const link = document.createElement("a");
            link.href = safeWebinarUrl(url);
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = label.startsWith("webinars.") ? translate(label) : label;
            item.append(link);
            links.append(item);
        });
        materials.append(heading, links);
    } else {
        const note = document.createElement("p");
        note.className = "webinar-card__no-materials";
        note.textContent = translate("webinars.noMaterials");
        materials.append(note);
    }
    card.append(materials);
    return card;
}

function renderWebinarList(target, webinars, countTarget, emptyKey) {
    countTarget.textContent = translate(webinars.length === 1 ? "webinars.countOne" : "webinars.count", { count: webinars.length });
    if (!webinars.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate(emptyKey);
        target.replaceChildren(empty);
        return;
    }
    target.replaceChildren(...webinars.map(webinarCard));
}

function renderWebinars() {
    const query = elements.webinarSearch.value.trim().toLocaleLowerCase(language);
    const year = elements.webinarYear.value;
    const audience = elements.webinarAudience.value;
    const today = localDateKey();
    const filtered = webinarData.filter((webinar) => {
        const searchable = [
            webinar.title,
            webinar.summary || "",
            ...(webinar.tags || []),
            ...(webinar.audience || []),
        ].join(" ").toLocaleLowerCase(language);
        return (!query || searchable.includes(query))
            && (!year || webinar.date.startsWith(`${year}-`))
            && (!audience || (webinar.audience || []).includes(audience));
    });
    const upcoming = filtered.filter((webinar) => webinar.date >= today)
        .sort((left, right) => left.date.localeCompare(right.date));
    const past = filtered.filter((webinar) => webinar.date < today)
        .sort((left, right) => right.date.localeCompare(left.date));

    renderWebinarList(elements.webinarUpcoming, upcoming, elements.webinarUpcomingCount, "webinars.emptyUpcoming");
    renderWebinarList(elements.webinarPast, past, elements.webinarPastCount, "webinars.emptyPast");
}

async function loadDataElements() {
    if (!narrowDataElements || !technicalDataElements) {
        setStatus(translate("dataElements.loading"));
        const [narrowData, technicalData] = await Promise.all([
            fetchJson("./data/suppeat-data.json"),
            fetchJson("./formalities/schemas/config.json"),
        ]);
        if (!Array.isArray(narrowData.formalities) || !technicalData.formalities || typeof technicalData.formalities !== "object") {
            throw new Error("Data-element sources have an unexpected structure.");
        }
        narrowDataElements = narrowData.formalities;
        technicalDataElements = technicalData.formalities;
        populateDataElementFormalities();
    }
    setStatus("");
    renderDataElements();
}

function getTechnicalFormalityName(code) {
    const elements = technicalDataElements?.[code]?.elements || {};
    const root = Object.values(elements).find((element) => element?.level === "0");
    return root?.labels?.[language] || root?.baseName || code;
}

function populateDataElementFormalities() {
    const selected = elements.dataElementsFormality.value;
    const labels = new Map();
    (narrowDataElements || []).forEach((formality) => {
        if (formality?.id) {
            labels.set(formality.id, formality.name || formality.id);
        }
    });
    Object.keys(technicalDataElements || {}).forEach((code) => {
        if (!labels.has(code)) {
            labels.set(code, getTechnicalFormalityName(code));
        }
    });
    elements.dataElementsFormality.replaceChildren();
    [...labels.entries()]
        .sort(([left], [right]) => left.localeCompare(right))
        .forEach(([code, name]) => {
            const option = document.createElement("option");
            option.value = code;
            option.textContent = `${code} · ${name}`;
            elements.dataElementsFormality.append(option);
        });
    if (!labels.size) {
        throw new Error("No formalities were found in the data-element sources.");
    }
    elements.dataElementsFormality.value = labels.has(selected)
        ? selected
        : labels.has("NOA") ? "NOA" : labels.keys().next().value;
}

function getDataElementRows(formalityCode) {
    const formality = narrowDataElements.find((item) => item.id === formalityCode);
    return (formality?.rows || []).map((row) => ({
        id: row.id || "",
        name: language === "fi" ? row.nameFi || row.name || ""
            : language === "sv" ? row.nameSv || row.name || row.nameFi || ""
                : row.name || row.nameFi || "",
        nameFi: row.nameFi || "",
        nameSecondary: language === "fi" ? row.name || "" : row.nameFi || "",
        description: language === "fi" ? row.descFi || row.desc || ""
            : language === "sv" ? row.descSv || row.desc || row.descFi || ""
                : row.desc || row.descFi || "",
        descriptionFi: row.descFi || "",
        descriptionSecondary: language === "fi" ? row.desc || "" : row.descFi || "",
        condition: filterSuppressedRuleReferences(formalityCode, row.condition),
        codeList: row.codelist || "",
    }));
}

function getTechnicalDataElementTree(formalityCode) {
    const records = Object.values(technicalDataElements?.[formalityCode]?.elements || {});
    const stack = [];
    const roots = [];
    records.forEach((record) => {
        const level = Number.parseInt(record?.level, 10);
        if (!Number.isInteger(level) || level < 0) {
            return;
        }
        const node = {
            id: record.emsweDataElementId || "",
            technicalName: record.path?.split("/").at(-1) || "",
            name: record.labels?.[language] || record.name || record.baseName || "",
            nameFi: record.labels?.fi || "",
            description: record.descriptions?.[language] || record.descriptions?.en || "",
            descriptionFi: record.descriptions?.fi || "",
            condition: filterSuppressedRuleReferences(formalityCode, record.rulesConditionsGuidelinesRaw),
            codeList: LOCATION_CODE_DATA_ELEMENT_IDS.has(record.emsweDataElementId)
                ? "UN/LOCODE"
                : record.codeList || "",
            path: record.path || "",
            mmtPath: record.mmtPath || "",
            type: record.type || "",
            format: record.format || "",
            occurrence: record.occurrence || "",
            status: record.status || "",
            objectType: record.objectType || "",
            listName: LOCATION_CODE_DATA_ELEMENT_IDS.has(record.emsweDataElementId)
                ? "UN/LOCODE"
                : record.codeList || "",
            level,
            flags: record.flags || {},
            finlandWanted: Boolean(record.finlandWanted),
            children: [],
        };
        const parent = level > 0 ? stack[level - 1] : null;
        if (parent) {
            parent.children.push(node);
        } else {
            roots.push(node);
        }
        stack.length = level + 1;
        stack[level] = node;
    });
    return roots;
}

function appendDataElementCell(row, value, className = "") {
    const cell = document.createElement("td");
    if (className) {
        cell.className = className;
    }
    cell.textContent = value || "—";
    row.append(cell);
}

function appendLocalizedDataElementCell(row, primary, secondary) {
    const cell = document.createElement("td");
    cell.textContent = primary;
    if (secondary && secondary !== primary) {
        const localized = document.createElement("small");
        localized.textContent = secondary;
        cell.append(document.createElement("br"), localized);
    }
    row.append(cell);
}

function createDataElementReferenceButton(value, type, formalityCode, dataElementId) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "data-element-reference-open";
    button.dataset.referenceType = type;
    button.dataset.referenceLabel = value;
    button.dataset.formality = formalityCode;
    button.dataset.elementId = dataElementId;
    button.textContent = translate(type === "rules" ? "dataElements.showRules" : "dataElements.showCodeList");
    return button;
}

function appendDataElementReferenceCell(row, value, type, formalityCode, dataElementId) {
    const cell = document.createElement("td");
    if (!value) {
        cell.textContent = "—";
        row.append(cell);
        return;
    }
    cell.append(document.createTextNode(value));
    const button = createDataElementReferenceButton(value, type, formalityCode, dataElementId);
    cell.append(document.createElement("br"), button);
    row.append(cell);
}

async function openDataElementRules(ruleReferences, formalityCode, dataElementId) {
    const requestId = ++rulesModalRequestId;
    const modal = elements.rulesModal;
    const title = document.getElementById("data-element-rules-title");
    const body = document.getElementById("data-element-rules-body");
    const references = String(ruleReferences || "")
        .split(/\s+/)
        .filter((ruleId) => ruleId && !isSuppressedRuleReference(formalityCode, ruleId));
    title.textContent = translate("dataElements.rulesTitle", { id: dataElementId });
    const loading = document.createElement("p");
    loading.className = "status";
    loading.textContent = translate("dataElements.rulesLoading");
    body.replaceChildren(loading);
    modal.showModal();
    try {
        if (!rulesConditionsGuidelines) {
            rulesConditionsGuidelines = await fetchJson(
                "./formalities/schemas/rcg.json",
            );
            if (!Array.isArray(rulesConditionsGuidelines)) {
                throw new Error("Rules, Conditions and Guidelines data has an unexpected structure.");
            }
        }
        if (requestId !== rulesModalRequestId || !modal.open) {
            return;
        }
        const rulesById = new Map(rulesConditionsGuidelines.map((rule) => [String(rule.id).toUpperCase(), rule]));
        const matchedRules = references.map((reference) => rulesById.get(reference.toUpperCase())).filter(Boolean);
        if (!matchedRules.length) {
            const message = document.createElement("p");
            message.className = "webinar-empty";
            message.textContent = translate("dataElements.rulesEmpty");
            body.replaceChildren(message);
        } else {
            const fragment = document.createDocumentFragment();
            const localizedTypes = {
                Rule: translate("dataElements.ruleType.rule"),
                Condition: translate("dataElements.ruleType.condition"),
                Guideline: translate("dataElements.ruleType.guideline"),
            };
            matchedRules.forEach((rule) => {
                const card = document.createElement("article");
                card.className = "data-element-rule-card";
                const heading = document.createElement("h3");
                heading.textContent = `${rule.id} · ${localizedTypes[rule.type] || rule.type || translate("dataElements.rule")}`;
                const description = document.createElement("p");
                description.textContent = rule[language] || rule.description || "";
                card.append(heading, description);
                if (rule.notes?.trim() && rule.notes.trim().toLowerCase() !== "x") {
                    const notes = document.createElement("p");
                    const label = document.createElement("strong");
                    label.textContent = `${translate("dataElements.ruleNotes")}: `;
                    notes.append(label, document.createTextNode(rule.notes));
                    card.append(notes);
                }
                const metadata = document.createElement("p");
                metadata.className = "data-element-rule-card__meta";
                const origin = rule.national ? translate("dataElements.nationalRule") : translate("dataElements.emsaRule");
                const sourceValue = String(rule.source || "");
                const source = sourceValue && !["national", "emsa"].includes(sourceValue.toLowerCase())
                    ? `${sourceValue} · ${origin}`
                    : origin;
                metadata.textContent = `${translate("dataElements.ruleSource")}: ${source}`;
                card.append(metadata);
                fragment.append(card);
            });
            body.replaceChildren(fragment);
        }
        const missingReferences = references.filter((reference) => !rulesById.has(reference.toUpperCase()));
        if (missingReferences.length) {
            const warning = document.createElement("p");
            warning.className = "result-summary";
            warning.textContent = translate("dataElements.rulesMissing", {
                references: missingReferences.join(", "),
            });
            body.append(warning);
        }
    } catch (error) {
        if (requestId !== rulesModalRequestId || !modal.open) {
            return;
        }
        console.error(error);
        const message = document.createElement("p");
        message.className = "error-message";
        message.textContent = `${translate("dataElements.rulesError")} ${error.message}`;
        body.replaceChildren(message);
    }
}

function matchesTechnicalElement(element, query) {
    return [
        element.id, element.technicalName, element.name, element.nameFi, element.description,
        element.descriptionFi, element.condition, element.codeList, element.path, element.mmtPath,
        element.type, element.format, element.occurrence, element.objectType,
    ].join(" ").toLocaleLowerCase(language).includes(query);
}

function filterTechnicalTree(nodes, query) {
    return nodes.flatMap((node) => {
        const children = filterTechnicalTree(node.children, query);
        const matches = !query || matchesTechnicalElement(node, query);
        if (!node.finlandWanted && !children.length) {
            return [];
        }
        if (query && !matches && !children.length) {
            return [];
        }
        return [{ ...node, children, matches }];
    });
}

function countTechnicalNodes(nodes) {
    return nodes.reduce((count, node) => count + (node.finlandWanted ? 1 : 0) + countTechnicalNodes(node.children), 0);
}

function technicalGroupElement(node) {
    const group = document.createElement("details");
    group.className = "technical-group";
    group.open = node.level < 2;

    const heading = document.createElement("summary");
    const name = document.createElement("span");
    name.className = "technical-group__name";
    name.textContent = node.name;
    const kind = document.createElement("span");
    kind.className = "technical-badge technical-badge--group";
    kind.textContent = translate("dataElements.group");
    heading.append(name, kind);
    if (node.occurrence) {
        const occurrence = document.createElement("span");
        occurrence.className = "technical-badge";
        occurrence.textContent = node.occurrence;
        heading.append(occurrence);
    }
    group.append(heading);

    if (node.finlandWanted) {
        const flag = document.createElement("p");
        flag.className = "technical-group__requirement";
        flag.textContent = translate("dataElements.inFinlandProfile");
        group.append(flag);
    }
    if (node.path) {
        const path = document.createElement("code");
        path.className = "technical-path";
        path.textContent = node.path;
        group.append(path);
    }
    if (node.condition) {
        const condition = document.createElement("p");
        condition.className = "technical-group__condition";
        condition.append(
            document.createTextNode(`${translate("dataElements.condition")}: ${node.condition} `),
            createDataElementReferenceButton(
                node.condition,
                "rules",
                elements.dataElementsFormality.value,
                node.id,
            ),
        );
        group.append(condition);
    }

    const children = document.createElement("div");
    children.className = "technical-group__children";
    node.children.forEach((child) => children.append(technicalNodeElement(child)));
    group.append(children);
    return group;
}

function technicalLeafElement(node) {
    const article = document.createElement("article");
    article.className = `technical-element${node.matches === false ? " technical-element--context" : ""}`;
    const heading = document.createElement("div");
    heading.className = "technical-element__heading";
    const name = document.createElement("h3");
    name.textContent = node.name || node.technicalName;
    heading.append(name);
    if (node.id) {
        const identifier = document.createElement("code");
        identifier.textContent = node.id;
        heading.append(identifier);
    }
    article.append(heading);

    const metadata = document.createElement("div");
    metadata.className = "technical-element__metadata";
    const kind = document.createElement("span");
    kind.className = "technical-badge technical-badge--element";
    kind.textContent = translate("dataElements.element");
    metadata.append(kind);
    [
        node.type,
        node.format,
        node.occurrence,
        node.codeList,
    ].filter(Boolean).forEach((value) => {
        const badge = document.createElement("span");
        badge.className = "technical-badge";
        badge.textContent = value;
        metadata.append(badge);
    });
    if (node.finlandWanted) {
        const requirement = document.createElement("span");
        requirement.className = "technical-badge technical-badge--profile";
        requirement.textContent = translate("dataElements.inFinlandProfile");
        metadata.append(requirement);
    }
    article.append(metadata);
    if (node.listName) {
        const codeList = document.createElement("div");
        codeList.className = "technical-element__codelist";
        const label = document.createElement("span");
        label.textContent = `${translate("dataElements.codeList")}: ${node.listName}`;
        const open = document.createElement("button");
        open.type = "button";
        open.className = "technical-code-list-open";
        open.dataset.codeList = node.listName;
        open.dataset.formality = elements.dataElementsFormality.value;
        open.dataset.elementId = node.id;
        open.textContent = translate("dataElements.showCodeList");
        codeList.append(label, open);
        article.append(codeList);
    }

    const details = document.createElement("details");
    details.className = "technical-element__details";
    const summary = document.createElement("summary");
    summary.textContent = translate("dataElements.details");
    const list = document.createElement("dl");
    const fields = [
        ["dataElements.path", node.path],
        ["dataElements.mmtPath", node.mmtPath],
        ["dataElements.description", node.description],
        ["dataElements.status", node.status],
        ["dataElements.flags", Object.entries(node.flags)
            .filter(([, enabled]) => enabled)
            .map(([flag]) => flag)
            .join(", ")],
    ].filter(([, value]) => value);
    fields.forEach(([label, value]) => {
        const term = document.createElement("dt");
        term.textContent = translate(label);
        const description = document.createElement("dd");
        description.textContent = value;
        list.append(term, description);
    });
    if (node.condition) {
        const term = document.createElement("dt");
        term.textContent = translate("dataElements.condition");
        const description = document.createElement("dd");
        description.append(
            document.createTextNode(node.condition),
            document.createElement("br"),
            createDataElementReferenceButton(
                node.condition,
                "rules",
                elements.dataElementsFormality.value,
                node.id,
            ),
        );
        list.append(term, description);
    }
    details.append(summary, list);
    article.append(details);
    return article;
}

async function loadTechnicalCodeLists() {
    if (technicalCodeLists && technicalCodeListMappings) {
        return;
    }
    const [codeLists, mappings] = await Promise.all([
        fetchJson("./data/codelist.json"),
        fetchJson("./formalities/schemas/codelist-to-formality.json"),
    ]);
    if (!Array.isArray(codeLists.listNames) || !codeLists.byCode || !mappings.byCodeListLabel) {
        throw new Error("Code-list data has an unexpected structure.");
    }
    technicalCodeLists = codeLists;
    technicalCodeListMappings = mappings;
}

function codeListNameHints(label, formalityCode, dataElementId) {
    const hints = new Set();
    const elementIds = String(dataElementId || "").split(/\r?\n/).map((value) => value.trim().toUpperCase());
    const normalizedFormality = String(formalityCode || "").toUpperCase();
    const byFormality = technicalCodeListMappings.byFormalityDe?.[normalizedFormality] || {};
    elementIds.forEach((id) => {
        const override = byFormality[id] || technicalCodeListMappings.byDe?.[id];
        if (override) {
            hints.add(normalizeCodeListName(override));
        }
    });

    String(label || "").split(/\r?\n/).forEach((entry) => {
        const value = entry.trim();
        if (!value) {
            return;
        }
        const normalized = normalizeCodeListName(value);
        const mapped = Object.entries(technicalCodeListMappings.byCodeListLabel || {})
            .find(([key]) => normalizeCodeListName(key) === normalized)?.[1];
        if (mapped) {
            hints.add(normalizeCodeListName(mapped));
        }
        const withoutPrefix = value
            .replace(/^refer\s+to\s+code\s+list\s*/i, "")
            .replace(/^code\s+list\s*/i, "")
            .replace(/\(.*?\)/g, "")
            .trim();
        [value, withoutPrefix].forEach((hint) => {
            const normalizedHint = normalizeCodeListName(hint);
            if (technicalCodeLists.listNames.some((name) => normalizeCodeListName(name) === normalizedHint)) {
                hints.add(normalizedHint);
            }
        });
    });
    return hints;
}

function getIntrinsicIndicatorEntries(label) {
    if (/yes\s*\/\s*no indicator\s*\(\s*1\s*=\s*yes\s*,\s*0\s*=\s*no\s*\)/i.test(label)) {
        return [
            { code: "1", valueKey: "dataElements.indicatorYes" },
            { code: "0", valueKey: "dataElements.indicatorNo" },
        ].map(({ code, valueKey }) => ({
            code,
            labels: Object.fromEntries(SUPPORTED_LANGUAGES.map((locale) => [
                locale,
                content[locale]?.[valueKey] || content.en?.[valueKey] || valueKey,
            ])),
            source: "EMSWe",
            listName: label,
        }));
    }
    const fixedValue = String(label || "").match(/^\s*Always set to\s+(\d+)\s*\((.+)\)\s*$/i);
    if (fixedValue) {
        return [
            {
                code: fixedValue[1],
                labels: Object.fromEntries(SUPPORTED_LANGUAGES.map((locale) => [
                    locale,
                    locale === "en"
                        ? fixedValue[2]
                        : content[locale]?.["dataElements.maritimeTransport"] || fixedValue[2],
                ])),
                source: "EMSWe",
                listName: label,
            },
        ];
    }
    return null;
}

function getTechnicalCodeListEntries(label, formalityCode, dataElementId) {
    const intrinsicEntries = getIntrinsicIndicatorEntries(label);
    if (intrinsicEntries) {
        return intrinsicEntries;
    }
    const hints = codeListNameHints(label, formalityCode, dataElementId);
    const candidates = [];
    Object.entries(technicalCodeLists.byCode).forEach(([code, entries]) => {
        if (!Array.isArray(entries)) {
            return;
        }
        entries.forEach((entry) => {
            if (hints.has(normalizeCodeListName(entry.listName))) {
                candidates.push({ code, ...entry });
            }
        });
    });
    const normalizedFormality = String(formalityCode || "").toUpperCase();
    const scoped = candidates.filter((entry) => {
        const formalities = Array.isArray(entry.formality) ? entry.formality : [];
        return !formalities.length || formalities.some((code) => String(code).toUpperCase() === normalizedFormality);
    });
    const entries = scoped.length ? scoped : candidates;
    const seen = new Set();
    return entries
        .filter((entry) => {
            const key = `${entry.listName}:${entry.code}`;
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        })
        .sort((left, right) => String(left.code).localeCompare(String(right.code), undefined, { numeric: true }));
}

async function loadLocationRecords() {
    if (locationRecords) {
        return;
    }
    if (!locationLoadPromise) {
        locationLoadPromise = fetchJson("./location/locations.json")
            .then((data) => {
                if (!Array.isArray(data.locodes)) {
                    throw new Error("Location data has an unexpected structure.");
                }
                locationRecords = data.locodes.filter((entry) =>
                    typeof entry?.locode === "string" && typeof entry?.locationName === "string");
                locationSearchIndex = locationRecords.map((location) => ({
                    location,
                    searchText: locationSearchText(location),
                }));
            })
            .catch((error) => {
                locationLoadPromise = null;
                throw error;
            });
    }
    await locationLoadPromise;
}

function locationSearchText(location) {
    return [
        location.locode,
        location.locationName,
        ...(Array.isArray(location.portAreas) ? location.portAreas : []).flatMap((area) => [
            area.code,
            area.portName,
            area.portAreaName,
            area.gisisCode,
            ...(Array.isArray(area.portFacilityCodes) ? area.portFacilityCodes : []),
            ...(Array.isArray(area.berths) ? area.berths : []).flatMap((berth) => [berth.code, berth.name]),
            ...(Array.isArray(area.anchorages) ? area.anchorages : []).flatMap((anchorage) => [anchorage.code, anchorage.name]),
        ]),
        ...(Array.isArray(location.portFacilityCodes) ? location.portFacilityCodes : []),
        ...(Array.isArray(location.anchorages) ? location.anchorages : []).flatMap((anchorage) => [anchorage.code, anchorage.name]),
    ].filter(Boolean).join(" ").toLocaleLowerCase(language);
}

function hasNationalLocationData(location) {
    return Array.isArray(location.portAreas) && location.portAreas.length > 0;
}

function renderLocations() {
    if (!locationSearchIndex) {
        return;
    }
    const query = elements.locationSearch.value.trim().toLocaleLowerCase(language);
    const nationalOnly = elements.locationNationalOnly.checked;
    const candidates = locationSearchIndex.filter(({ location, searchText }) =>
        (!query || searchText.includes(query))
        && (!nationalOnly || hasNationalLocationData(location)));
    const visible = candidates.slice(0, locationVisibleCount);

    elements.locationSummary.textContent = translate("locations.count", {
        shown: visible.length,
        count: candidates.length,
        total: locationRecords.length,
    });
    if (!visible.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate("locations.empty");
        elements.locationResults.replaceChildren(empty);
        return;
    }

    const fragment = document.createDocumentFragment();
    visible.forEach(({ location }) => {
        const card = document.createElement("article");
        card.className = "location-result-card";
        const heading = document.createElement("div");
        heading.className = "location-result-card__heading";
        const identity = document.createElement("div");
        const name = document.createElement("h2");
        name.textContent = location.locationName;
        const code = document.createElement("code");
        code.textContent = location.locode;
        identity.append(name, code);
        heading.append(identity);
        if (hasNationalLocationData(location)) {
            const badge = document.createElement("span");
            badge.className = "technical-badge technical-badge--profile";
            badge.textContent = translate("locations.nationalBadge");
            heading.append(badge);
        }
        card.append(heading);

        const details = document.createElement("details");
        details.className = "location-result-card__details";
        const summary = document.createElement("summary");
        summary.textContent = translate("locations.details");
        const content = document.createElement("div");
        content.className = "location-result-card__content";
        if (hasNationalLocationData(location)) {
            appendLocationNationalDetails(content, location);
        } else {
            content.textContent = translate("locations.noNationalData");
        }
        details.append(summary, content);
        card.append(details);
        fragment.append(card);
    });

    if (candidates.length > visible.length) {
        const more = document.createElement("button");
        more.type = "button";
        more.className = "spa-button spa-button--outline location-results-more";
        more.dataset.locationMore = "";
        more.textContent = translate("locations.showMore", {
            count: Math.min(LOCATION_PAGE_SIZE, candidates.length - visible.length),
        });
        fragment.append(more);
    }
    elements.locationResults.replaceChildren(fragment);
}

function appendLocationNationalDetails(cell, location) {
    const portAreas = Array.isArray(location.portAreas) ? location.portAreas : [];
    const areaFacilities = new Set(portAreas.flatMap((area) =>
        Array.isArray(area.portFacilityCodes) ? area.portFacilityCodes : []));
    const facilities = (Array.isArray(location.portFacilityCodes) ? location.portFacilityCodes : [])
        .filter((facility) => !areaFacilities.has(facility));
    const anchorages = Array.isArray(location.anchorages) ? location.anchorages : [];
    if (!portAreas.length && !facilities.length && !anchorages.length) {
        cell.textContent = "—";
        return;
    }
    portAreas.forEach((area) => {
        const section = document.createElement("div");
        section.className = "location-code-list__area";
        const heading = document.createElement("strong");
        heading.textContent = [area.portName, area.portAreaName].filter(Boolean).join(" · ") || area.code || "";
        section.append(heading);
        if (area.code) {
            const code = document.createElement("code");
            code.textContent = area.code;
            section.append(document.createTextNode(" "), code);
        }
        const metadata = [
            area.gisisCode ? `GISIS ${area.gisisCode}` : "",
            area.isps ? translate("dataElements.isps") : "",
        ].filter(Boolean);
        if (metadata.length) {
            const note = document.createElement("small");
            note.textContent = metadata.join(" · ");
            section.append(document.createElement("br"), note);
        }
        const codes = [
            ...(Array.isArray(area.portFacilityCodes) ? area.portFacilityCodes : []).map((code) => `${translate("dataElements.facility")}: ${code}`),
            ...(Array.isArray(area.berths) ? area.berths : []).map((berth) => `${translate("dataElements.berth")}: ${berth.code}${berth.name && berth.name !== berth.code ? ` · ${berth.name}` : ""}`),
            ...(Array.isArray(area.anchorages) ? area.anchorages : []).map((anchorage) => `${translate("dataElements.anchorage")}: ${anchorage.code}${anchorage.name && anchorage.name !== anchorage.code ? ` · ${anchorage.name}` : ""}`),
        ];
        if (codes.length) {
            const list = document.createElement("ul");
            codes.forEach((value) => {
                const item = document.createElement("li");
                item.textContent = value;
                list.append(item);
            });
            section.append(list);
        }
        cell.append(section);
    });
    facilities.forEach((facility) => {
        const item = document.createElement("div");
        item.textContent = `${translate("dataElements.facility")}: ${facility}`;
        cell.append(item);
    });
    anchorages.forEach((anchorage) => {
        const item = document.createElement("div");
        item.textContent = `${translate("dataElements.anchorage")}: ${anchorage.code}${anchorage.name && anchorage.name !== anchorage.code ? ` · ${anchorage.name}` : ""}`;
        cell.append(item);
    });
}

function appendLocationBrowserLink(results) {
    const link = document.createElement("a");
    link.href = "#/locations";
    link.textContent = translate("locations.openBrowser");
    results.append(link);
}

function updateCodeListSearchLabel() {
    const label = elements.codeListModalSearch?.closest(".search-field")?.querySelector("span");
    if (label) {
        const key = codeListModalMode === "locations"
            ? "locations.search"
            : "dataElements.codeListSearch";
        label.textContent = translate(key);
    }
}

function renderLocationCodeList() {
    const results = elements.codeListModal.querySelector(".technical-code-list-results");
    const query = elements.codeListModalSearch.value.trim().toLocaleLowerCase(language);
    const candidates = query
        ? locationSearchIndex.filter(({ searchText }) => searchText.includes(query)).map(({ location }) => location)
        : locationRecords.filter(hasNationalLocationData);
    const summary = document.createElement("p");
    summary.className = "result-summary";
    summary.textContent = translate("dataElements.locationCount", {
        count: candidates.length,
        total: locationRecords.length,
    });
    if (!candidates.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate("dataElements.locationEmpty");
        results.replaceChildren(summary, empty);
        appendLocationBrowserLink(results);
        return;
    }
    const table = document.createElement("table");
    table.className = "data-table location-code-list-table";
    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["dataElements.locode", "dataElements.locationName", "dataElements.nationalLocation"].forEach((key) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = translate(key);
        headerRow.append(cell);
    });
    header.append(headerRow);
    const body = document.createElement("tbody");
    candidates.slice(0, MAX_CODELIST_ROWS).forEach((location) => {
        const row = document.createElement("tr");
        const codeCell = document.createElement("td");
        const code = document.createElement("code");
        code.textContent = location.locode;
        codeCell.append(code);
        row.append(codeCell);
        const nameCell = document.createElement("td");
        nameCell.textContent = location.locationName;
        row.append(nameCell);
        const nationalCell = document.createElement("td");
        appendLocationNationalDetails(nationalCell, location);
        row.append(nationalCell);
        body.append(row);
    });
    table.append(header, body);
    const wrapper = document.createElement("div");
    wrapper.className = "technical-code-list-table";
    wrapper.append(table);
    results.replaceChildren(summary, wrapper);
    if (candidates.length > MAX_CODELIST_ROWS) {
        const limit = document.createElement("p");
        limit.className = "result-summary";
        limit.textContent = translate("codelists.showing", {
            shown: MAX_CODELIST_ROWS,
            total: candidates.length,
        });
        results.append(limit);
    }
    appendLocationBrowserLink(results);
}

function renderTechnicalCodeList(entries, label) {
    const results = elements.codeListModal.querySelector(".technical-code-list-results");
    const query = elements.codeListModalSearch.value.trim().toLocaleLowerCase(language);
    const filtered = entries.filter((entry) => {
        const label = entry.labels?.[language] || entry.labels?.en || "";
        return `${entry.code} ${label} ${entry.listName} ${entry.source || ""}`
            .toLocaleLowerCase(language)
            .includes(query);
    });
    const summary = document.createElement("p");
    summary.className = "result-summary";
    summary.textContent = translate("dataElements.codeListCount", {
        count: filtered.length,
        total: entries.length,
    });
    const table = document.createElement("table");
    table.className = "data-table";
    const header = document.createElement("thead");
    const headerRow = document.createElement("tr");
    ["codelists.code", "codelists.label", "codelists.source"].forEach((key) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = translate(key);
        headerRow.append(cell);
    });
    header.append(headerRow);
    const body = document.createElement("tbody");
    filtered.slice(0, MAX_CODELIST_ROWS).forEach((entry) => {
        const row = document.createElement("tr");
        [entry.code, entry.labels?.[language] || entry.labels?.en || "", entry.source || ""].forEach((value, index) => {
            const cell = document.createElement("td");
            if (index === 0) {
                const code = document.createElement("code");
                code.textContent = value;
                cell.append(code);
            } else {
                cell.textContent = value;
            }
            row.append(cell);
        });
        body.append(row);
    });
    table.append(header, body);
    const wrapper = document.createElement("div");
    wrapper.className = "technical-code-list-table";
    wrapper.append(table);
    if (!filtered.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate("dataElements.codeListEmpty");
        results.replaceChildren(summary, empty);
        if (String(label).toUpperCase().includes("UN/LOCODE")) {
            const link = document.createElement("a");
            link.href = "#/locations";
            link.textContent = translate("locations.openBrowser");
            results.append(link);
        }
        return;
    }
    results.replaceChildren(summary, wrapper);
    if (filtered.length > MAX_CODELIST_ROWS) {
        const limit = document.createElement("p");
        limit.className = "result-summary";
        limit.textContent = translate("codelists.showing", {
            shown: MAX_CODELIST_ROWS,
            total: filtered.length,
        });
        results.append(limit);
    }
}

async function openTechnicalCodeList(label, formalityCode, dataElementId) {
    const requestId = ++codeListModalRequestId;
    const title = document.getElementById("technical-code-list-title");
    title.textContent = label;
    elements.codeListModalSearch.value = "";
    elements.codeListModalEntries = null;
    elements.codeListModalResults.replaceChildren();
    codeListModalMode = String(label).toUpperCase().includes("UN/LOCODE") ? "locations" : "codes";
    updateCodeListSearchLabel();
    elements.codeListModal.showModal();
    const loading = document.createElement("p");
    loading.className = "status";
    loading.textContent = translate(codeListModalMode === "locations"
        ? "dataElements.locationLoading"
        : "dataElements.codeListLoading");
    elements.codeListModalResults.append(loading);
    try {
        if (codeListModalMode === "locations") {
            await loadLocationRecords();
            if (requestId !== codeListModalRequestId || !elements.codeListModal.open) {
                return;
            }
            renderLocationCodeList();
            return;
        }
        const intrinsicEntries = getIntrinsicIndicatorEntries(label);
        if (intrinsicEntries) {
            if (requestId !== codeListModalRequestId || !elements.codeListModal.open) {
                return;
            }
            elements.codeListModalEntries = intrinsicEntries;
            renderTechnicalCodeList(intrinsicEntries, label);
            return;
        }
        await loadTechnicalCodeLists();
        if (requestId !== codeListModalRequestId || !elements.codeListModal.open) {
            return;
        }
        const entries = getTechnicalCodeListEntries(label, formalityCode, dataElementId);
        elements.codeListModalEntries = entries;
        renderTechnicalCodeList(entries, label);
    } catch (error) {
        if (requestId !== codeListModalRequestId || !elements.codeListModal.open) {
            return;
        }
        console.error(error);
        const message = document.createElement("p");
        message.className = "error-message";
        const errorKey = codeListModalMode === "locations"
            ? "dataElements.locationError"
            : "dataElements.codeListError";
        message.textContent = `${translate(errorKey)} ${error.message}`;
        elements.codeListModalEntries = null;
        elements.codeListModalResults.replaceChildren(message);
        if (codeListModalMode === "locations") {
            appendLocationBrowserLink(elements.codeListModalResults);
        }
    }
}

function technicalNodeElement(node) {
    return node.children.length || ["ABIE", "ASBIE"].includes(node.objectType)
        ? technicalGroupElement(node)
        : technicalLeafElement(node);
}

function renderTechnicalDataElements(code, query) {
    const allTree = getTechnicalDataElementTree(code);
    const tree = filterTechnicalTree(allTree, query);
    const count = countTechnicalNodes(tree);
    const technicalCount = countTechnicalNodes(allTree);
    elements.dataElementsSummary.textContent = translate("dataElements.count", {
        count,
        total: technicalCount,
    });
    if (!tree.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate("dataElements.empty");
        elements.dataElementsResult.replaceChildren(empty);
        return;
    }
    const hierarchy = document.createElement("div");
    hierarchy.className = "technical-tree";
    tree.forEach((node) => hierarchy.append(technicalNodeElement(node)));
    elements.dataElementsResult.replaceChildren(hierarchy);
}

function renderDataElements() {
    if (!narrowDataElements || !technicalDataElements) {
        return;
    }
    const code = elements.dataElementsFormality.value;
    const mode = elements.dataElementsMode.value;
    const query = elements.dataElementsSearch.value.trim().toLocaleLowerCase(language);
    if (mode === "technical") {
        renderTechnicalDataElements(code, query);
        return;
    }
    const allRows = getDataElementRows(code);
    const rows = allRows.filter((row) => [
        row.id, row.name, row.nameFi, row.description, row.descriptionFi, row.condition,
        row.codeList, row.path, row.mmtPath, row.type, row.format, row.occurrence,
    ].join(" ").toLocaleLowerCase(language).includes(query));

    elements.dataElementsSummary.textContent = translate("dataElements.count", {
        count: rows.length,
        total: allRows.length,
    });

    const table = document.createElement("table");
    table.className = "data-elements-table";
    const headers = [
        "dataElements.id",
        "dataElements.name",
        "dataElements.description",
        "dataElements.condition",
        "dataElements.codeList",
    ];
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    headers.forEach((key) => {
        const cell = document.createElement("th");
        cell.scope = "col";
        cell.textContent = translate(key);
        headRow.append(cell);
    });
    head.append(headRow);
    const body = document.createElement("tbody");
    rows.forEach((element) => {
        const row = document.createElement("tr");
        appendDataElementCell(row, element.id || element.technicalName, "data-elements-id");
        appendLocalizedDataElementCell(row, element.name, element.nameSecondary || element.nameFi);

        appendLocalizedDataElementCell(
            row,
            element.description,
            element.descriptionSecondary || element.descriptionFi,
        );
        appendDataElementReferenceCell(row, element.condition, "rules", code, element.id);
        appendDataElementReferenceCell(row, element.codeList, "codelist", code, element.id);
        body.append(row);
    });
    table.append(head, body);
    const wrapper = document.createElement("div");
    wrapper.className = "data-elements-table-wrap";
    wrapper.append(table);
    if (!rows.length) {
        const empty = document.createElement("p");
        empty.className = "webinar-empty";
        empty.textContent = translate("dataElements.empty");
        elements.dataElementsResult.replaceChildren(empty);
    } else {
        elements.dataElementsResult.replaceChildren(wrapper);
    }
}

async function init() {
    elements.mainContent = document.getElementById("main-content");
    elements.status = document.getElementById("app-status");
    elements.schemaResult = document.getElementById("schema-result");
    elements.formalitySelect = document.getElementById("formality-select");
    elements.schemaDownload = document.getElementById("schema-download");
    elements.codeListResult = document.getElementById("codelist-result");
    elements.codeListSelect = document.getElementById("codelist-select");
    elements.codeListSearch = document.getElementById("codelist-search");
    elements.webinarSearch = document.getElementById("webinar-search");
    elements.webinarYear = document.getElementById("webinar-year");
    elements.webinarAudience = document.getElementById("webinar-audience");
    elements.webinarUpcoming = document.getElementById("webinar-upcoming");
    elements.webinarUpcomingCount = document.getElementById("webinar-upcoming-count");
    elements.webinarPast = document.getElementById("webinar-past");
    elements.webinarPastCount = document.getElementById("webinar-past-count");
    elements.dataElementsMode = document.getElementById("data-elements-mode");
    elements.dataElementsFormality = document.getElementById("data-elements-formality");
    elements.dataElementsSearch = document.getElementById("data-elements-search");
    elements.dataElementsSummary = document.getElementById("data-elements-summary");
    elements.dataElementsResult = document.getElementById("data-elements-result");
    elements.locationSearch = document.getElementById("location-search");
    elements.locationNationalOnly = document.getElementById("location-national-only");
    elements.locationSummary = document.getElementById("location-summary");
    elements.locationResults = document.getElementById("location-results");
    elements.apiTitle = document.getElementById("api-title");
    elements.apiIntro = document.getElementById("api-intro");
    elements.apiOverview = document.getElementById("api-overview");
    elements.apiDescription = document.getElementById("api-description");
    elements.apiServerSelect = document.getElementById("api-server-select");
    elements.apiServerUrl = document.getElementById("api-server-url");
    elements.apiSearch = document.getElementById("api-search");
    elements.apiVersion = document.getElementById("api-version");
    elements.apiSummary = document.getElementById("api-summary");
    elements.apiOperations = document.getElementById("api-operations");
    elements.apiSchemaList = document.getElementById("api-schema-list");
    elements.codeListModal = document.getElementById("technical-code-list-modal");
    elements.codeListModalSearch = document.getElementById("technical-code-list-search");
    elements.codeListModalResults = elements.codeListModal.querySelector(".technical-code-list-results");
    elements.rulesModal = document.getElementById("data-element-rules-modal");
    elements.webinarSearch = document.getElementById("webinar-search");
    elements.webinarYear = document.getElementById("webinar-year");
    elements.webinarAudience = document.getElementById("webinar-audience");
    elements.webinarUpcoming = document.getElementById("webinar-upcoming");
    elements.webinarUpcomingCount = document.getElementById("webinar-upcoming-count");
    elements.webinarPast = document.getElementById("webinar-past");
    elements.webinarPastCount = document.getElementById("webinar-past-count");

    try {
        content = await fetchJson("./data/content.json");
        language = detectInitialLanguage();
        const languageSelect = document.getElementById("language-select");
        languageSelect.value = language;
        languageSelect.addEventListener("change", () => {
            if (!SUPPORTED_LANGUAGES.includes(languageSelect.value)) {
                return;
            }
            language = languageSelect.value;
            try {
                localStorage.setItem("nemo.lang", language);
            } catch (error) {
                console.error("Failed to save language preference.", error);
            }
            applyTranslations();
        });

        document.querySelectorAll("[data-route]").forEach((button) => {
            button.addEventListener("click", () => {
                window.location.hash = `/${button.dataset.route}`;
            });
        });
        window.addEventListener("hashchange", renderRoute);
        elements.formalitySelect.addEventListener("change", () => {
            renderSelectedSchema().catch((error) => showDataError(error, "formalities.error", elements.schemaResult));
        });
        document.querySelector(".spa-skip-link").addEventListener("click", (event) => {
            event.preventDefault();
            elements.mainContent.focus();
            elements.mainContent.scrollIntoView({ block: "start" });
        });
        elements.codeListSelect.addEventListener("change", renderSelectedCodeList);
        elements.codeListSearch.addEventListener("input", renderSelectedCodeList);
        elements.webinarSearch.addEventListener("input", renderWebinars);
        elements.webinarYear.addEventListener("change", renderWebinars);
        elements.webinarAudience.addEventListener("change", renderWebinars);
        document.getElementById("webinar-clear").addEventListener("click", () => {
            elements.webinarSearch.value = "";
            elements.webinarYear.value = "";
            elements.webinarAudience.value = "";
            renderWebinars();
        });
        elements.dataElementsMode.addEventListener("change", renderDataElements);
        elements.dataElementsFormality.addEventListener("change", renderDataElements);
        elements.dataElementsSearch.addEventListener("input", renderDataElements);
        elements.locationSearch.addEventListener("input", () => {
            locationVisibleCount = LOCATION_PAGE_SIZE;
            renderLocations();
        });
        elements.locationNationalOnly.addEventListener("change", () => {
            locationVisibleCount = LOCATION_PAGE_SIZE;
            renderLocations();
        });
        elements.apiSearch.addEventListener("input", () => {
            if (activeApiSpecification && activeApiService) {
                renderApiSpecification(activeApiSpecification, activeApiService);
            }
        });
        elements.apiServerSelect.addEventListener("change", () => {
            activeApiServerUrl = elements.apiServerSelect.value;
            if (activeApiSpecification && activeApiService) {
                renderApiSpecification(activeApiSpecification, activeApiService);
            }
        });
        elements.mainContent.addEventListener("click", (event) => {
            const link = event.target.closest(".api-schema-reference");
            if (!link) {
                return;
            }
            event.preventDefault();
            const schema = document.getElementById(link.getAttribute("href").slice(1));
            if (schema) {
                schema.open = true;
                schema.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
        elements.locationResults.addEventListener("click", (event) => {
            if (event.target.closest("[data-location-more]")) {
                locationVisibleCount += LOCATION_PAGE_SIZE;
                renderLocations();
            }
        });
        elements.codeListModalResults.addEventListener("click", (event) => {
            if (event.target.closest('a[href="#/locations"]')) {
                elements.codeListModal.close();
            }
        });
        elements.codeListModalSearch.addEventListener("input", () => {
            if (codeListModalMode === "locations" && locationRecords) {
                renderLocationCodeList();
                return;
            }
            if (Array.isArray(elements.codeListModalEntries)) {
                renderTechnicalCodeList(
                    elements.codeListModalEntries,
                    document.getElementById("technical-code-list-title").textContent,
                );
            }
        });
        document.getElementById("technical-code-list-close").addEventListener("click", () => {
            elements.codeListModal.close();
        });
        elements.codeListModal.addEventListener("close", () => {
            codeListModalRequestId += 1;
        });
        document.getElementById("data-element-rules-close").addEventListener("click", () => {
            elements.rulesModal.close();
        });
        elements.rulesModal.addEventListener("close", () => {
            rulesModalRequestId += 1;
        });
        elements.dataElementsResult.addEventListener("click", (event) => {
            const technicalButton = event.target.closest(".technical-code-list-open");
            if (technicalButton) {
                openTechnicalCodeList(
                    technicalButton.dataset.codeList,
                    technicalButton.dataset.formality,
                    technicalButton.dataset.elementId,
                );
                return;
            }
            const referenceButton = event.target.closest(".data-element-reference-open");
            if (!referenceButton) {
                return;
            }
            if (referenceButton.dataset.referenceType === "rules") {
                openDataElementRules(
                    referenceButton.dataset.referenceLabel,
                    referenceButton.dataset.formality,
                    referenceButton.dataset.elementId,
                );
            } else {
                openTechnicalCodeList(
                    referenceButton.dataset.referenceLabel,
                    referenceButton.dataset.formality,
                    referenceButton.dataset.elementId,
                );
            }
        });
        elements.webinarSearch.addEventListener("input", renderWebinars);
        elements.webinarYear.addEventListener("change", renderWebinars);
        elements.webinarAudience.addEventListener("change", renderWebinars);
        document.getElementById("webinar-clear").addEventListener("click", () => {
            elements.webinarSearch.value = "";
            elements.webinarYear.value = "";
            elements.webinarAudience.value = "";
            renderWebinars();
        });

        applyTranslations();
    } catch (error) {
        console.error(error);
        setStatus(content.en?.["error.data"] ?? "Failed to load application data. Please reload the page.");
    }
}

init();
