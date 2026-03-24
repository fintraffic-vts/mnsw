function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createHeading(level, text) {
    const heading = document.createElement(level);
    heading.textContent = text;
    return heading;
}

function createList(items, itemRenderer) {
    const list = document.createElement("ul");
    items.forEach(item => {
        const li = document.createElement("li");
        li.appendChild(itemRenderer(item));
        list.appendChild(li);
    });
    return list;
}

function createTextNode(text) {
    return document.createTextNode(text ?? "");
}

function createStrongParagraph(label, value) {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = `${label}:`;
    paragraph.appendChild(strong);
    paragraph.appendChild(createTextNode(` ${value ?? ""}`));
    return paragraph;
}

function renderNavigation(locodes, container) {
    clearElement(container);

    const nav = document.createElement("nav");
    nav.setAttribute("aria-label", "UN/LOCODE navigation");

    const list = document.createElement("ul");

    locodes.forEach(loc => {
        const li = document.createElement("li");
        li.dataset.locodeLink = loc.locode;

        const link = document.createElement("a");
        link.href = `#locode-${loc.locode}`;
        link.textContent = loc.locode;

        li.appendChild(link);
        list.appendChild(li);
    });

    nav.appendChild(list);
    container.appendChild(nav);
}

function renderAreaArticle(area) {
    const article = document.createElement("article");

    article.appendChild(createHeading("h3", area.portAreaName || area.code || "Unnamed area"));
    article.appendChild(createStrongParagraph("Port area code", area.code || ""));
    article.appendChild(createStrongParagraph("Port name", area.portName || ""));
    article.appendChild(createStrongParagraph("GISIS", area.gisisCode || "-"));
    article.appendChild(createStrongParagraph("ISPS", area.isps || "-"));

    article.appendChild(createHeading("h4", "Port facility codes"));
    if ((area.portFacilityCodes ?? []).length) {
        article.appendChild(
            createList(area.portFacilityCodes, code => {
                const span = document.createElement("span");
                span.textContent = code;
                return span;
            })
        );
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = "No port facility codes.";
        article.appendChild(paragraph);
    }

    article.appendChild(createHeading("h4", "Berths"));
    if ((area.berths ?? []).length) {
        article.appendChild(
            createList(area.berths, berth => {
                const span = document.createElement("span");
                span.textContent = berth.name || berth.code || "";
                return span;
            })
        );
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = "No berths.";
        article.appendChild(paragraph);
    }

    article.appendChild(createHeading("h4", "Anchorages"));
    if ((area.anchorages ?? []).length) {
        article.appendChild(
            createList(area.anchorages, anchorage => {
                const span = document.createElement("span");
                span.textContent = anchorage.name || anchorage.code || "";
                return span;
            })
        );
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = "No anchorages.";
        article.appendChild(paragraph);
    }

    const backToTop = document.createElement("p");
    const link = document.createElement("a");
    link.href = "#top";
    link.textContent = "Back to top";
    backToTop.appendChild(link);
    article.appendChild(backToTop);

    return article;
}

function renderLocationLevelDetails(loc, section) {
    section.appendChild(createHeading("h3", "Location-level details"));

    section.appendChild(createHeading("h4", "Port facility codes"));
    if ((loc.portFacilityCodes ?? []).length) {
        section.appendChild(
            createList(loc.portFacilityCodes, code => {
                const span = document.createElement("span");
                span.textContent = code;
                return span;
            })
        );
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = "No port facility codes.";
        section.appendChild(paragraph);
    }

    section.appendChild(createHeading("h4", "Anchorages"));
    if ((loc.anchorages ?? []).length) {
        section.appendChild(
            createList(loc.anchorages, anchorage => {
                const span = document.createElement("span");
                span.textContent = anchorage.name || anchorage.code || "";
                return span;
            })
        );
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = "No anchorages.";
        section.appendChild(paragraph);
    }
}

function renderContent(locodes, container) {
    clearElement(container);

    locodes.forEach(loc => {
        const section = document.createElement("section");
        section.id = `locode-${loc.locode}`;
        section.dataset.locodeSection = loc.locode;

        section.appendChild(createHeading("h2", loc.locode));
        if (loc.locationName) {
            section.appendChild(createStrongParagraph("Location", loc.locationName));
        }

        if ((loc.portAreas ?? []).length) {
            loc.portAreas.forEach(area => {
                section.appendChild(renderAreaArticle(area));
            });
        } else {
            const paragraph = document.createElement("p");
            paragraph.textContent = "No national port area data available for this UN/LOCODE.";
            section.appendChild(paragraph);
            renderLocationLevelDetails(loc, section);
        }

        container.appendChild(section);
    });
}

function getLocodeSearchTerms(loc) {
    const terms = [loc?.locode, loc?.locationName];

    (loc?.portAreas ?? []).forEach(area => {
        terms.push(area?.code, area?.portName, area?.portAreaName, area?.gisisCode, area?.isps);

        (area?.berths ?? []).forEach(berth => {
            terms.push(berth?.code, berth?.name);
        });

        (area?.anchorages ?? []).forEach(anchorage => {
            terms.push(anchorage?.code, anchorage?.name);
        });
    });

    (loc?.anchorages ?? []).forEach(anchorage => {
        terms.push(anchorage?.code, anchorage?.name);
    });

    (loc?.portFacilityCodes ?? []).forEach(code => {
        terms.push(code);
    });

    return terms
        .filter(Boolean)
        .map(value => String(value).toLowerCase());
}

function matchesLocodeSearch(loc, query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return true;

    return getLocodeSearchTerms(loc).some(term => term.includes(normalized));
}

function renderSingleLocode(query, locodes, contentContainer, status) {
    const normalized = query.trim().toLowerCase();

    if (!normalized) {
        clearElement(contentContainer);
        status.textContent = "Data loaded. Search UN/LOCODE, port area, berth or anchorage to show details.";
        return;
    }

    const exactMatch = locodes.find(loc => (loc.locode ?? "").toLowerCase() === normalized);

    if (exactMatch) {
        renderContent([exactMatch], contentContainer);
        status.textContent = `Showing UN/LOCODE ${exactMatch.locode}.`;
        return;
    }

    const partialMatches = locodes.filter(loc => matchesLocodeSearch(loc, query));

    if (partialMatches.length === 1) {
        renderContent([partialMatches[0]], contentContainer);
        status.textContent = `Showing only match ${partialMatches[0].locode} for "${query}".`;
        return;
    }

    clearElement(contentContainer);

    if (!partialMatches.length) {
        status.textContent = `No match for "${query}" in UN/LOCODE, port area, berth or anchorage.`;
        return;
    }

    status.textContent = `${partialMatches.length} matches found. Narrow search to one UN/LOCODE.`;
}

function attachFilter(locodes, contentContainer, status) {
    const input = document.getElementById("locodeFilter");
    if (!input) return;

    const locodeMap = new Map(locodes.map(loc => [loc.locode, loc]));

    input.addEventListener("input", () => {
        const value = input.value.trim().toLowerCase();

        document.querySelectorAll("[data-locode-link]").forEach(item => {
            const locode = item.dataset.locodeLink ?? "";
            const loc = locodeMap.get(locode);
            item.style.display = matchesLocodeSearch(loc, value) ? "" : "none";
        });

        renderSingleLocode(input.value, locodes, contentContainer, status);
    });

    document.querySelectorAll("[data-locode-link] a").forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const locode = link.textContent ?? "";
            input.value = locode;
            renderSingleLocode(locode, locodes, contentContainer, status);
        });
    });
}

function createLoadingIndicator(container) {
    clearElement(container);

    const row = document.createElement("div");
    row.className = "loading-row";

    const spinner = document.createElement("span");
    spinner.className = "loading-spinner";
    spinner.setAttribute("aria-hidden", "true");

    const text = document.createElement("p");
    text.id = "loadingIndicator";
    text.setAttribute("role", "status");
    text.setAttribute("aria-live", "polite");
    text.textContent = "Loading location data";

    row.appendChild(spinner);
    row.appendChild(text);
    container.appendChild(row);

    return text;
}

function startLoadingAnimation(indicator, baseText) {
    let dots = 0;
    indicator.textContent = baseText;

    const timerId = setInterval(() => {
        dots = (dots + 1) % 4;
        indicator.textContent = `${baseText}${".".repeat(dots)}`;
    }, 300);

    return () => clearInterval(timerId);
}

async function loadAndRender() {
    const status = document.getElementById("status");
    const navigationContainer = document.getElementById("navigation");
    const contentContainer = document.getElementById("content");
    const input = document.getElementById("locodeFilter");

    const loadingText = createLoadingIndicator(contentContainer);
    const stopLoading = startLoadingAnimation(loadingText, "Loading location data");

    if (input) {
        input.disabled = true;
        input.placeholder = "Loading UN/LOCODE data...";
    }

    status.textContent = "Loading UN/LOCODE data from JSON...";

    try {
        const response = await fetch("./locations.json", { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`Failed to load JSON (${response.status})`);
        }

        status.textContent = "Processing loaded UN/LOCODE data...";

        const model = await response.json();
        const locodes = Array.isArray(model?.locodes) ? model.locodes : [];

        renderNavigation(locodes, navigationContainer);
        attachFilter(locodes, contentContainer, status);

        clearElement(contentContainer);
        status.textContent = `Loaded ${locodes.length} UN/LOCODEs. Search UN/LOCODE, port area, berth or anchorage to load one.`;
    } catch (error) {
        clearElement(contentContainer);
        status.textContent = `Failed to load location data: ${error.message}`;
    } finally {
        stopLoading();

        if (input) {
            input.disabled = false;
            input.placeholder = "Filter UN/LOCODE...";
        }
    }
}

loadAndRender();
