const refsCache = new Map();
let interestingRows = [];
let deEnrichmentIndex = {};
let currentSchemaCode = "";
let rulesByFormality = {};
let rulesById = {};
let codeListModalCounter = 0;
const codeListModalStore = new Map();
let rulesModalCounter = 0;
const rulesModalStore = new Map();
let codeDescriptionsById = {};
let codeListEntriesByListName = {};
let codeListNameOverrides = { byDe: {}, byFormalityDe: {}, byCodeListLabel: {} };
let formalityConfigIndex = {};
let displayMode = "narrow";
let currentLanguage = "fi";
let currentSchemaUrl = "";
let currentRootLabel = "";
let structureMapRows = [];
const UN_LOCODE_BROWSER_URL = "https://fintraffic-vts.github.io/mnsw/location/index.html";

const DE_ID_PATTERN = /\bDE-\d{3}-\d{2}\b/gi;
const COMPLIANCE_NOTE_DISMISSED_KEY = "formalities-compliance-note-dismissed-v1";

function getComplianceDismissed() {
    try {
        if (window.localStorage.getItem(COMPLIANCE_NOTE_DISMISSED_KEY) === "1") return true;
    } catch {
        // Ignore storage failures and try fallbacks.
    }

    try {
        if (window.sessionStorage.getItem(COMPLIANCE_NOTE_DISMISSED_KEY) === "1") return true;
    } catch {
        // Ignore storage failures and try cookie fallback.
    }

    return document.cookie.split(";").some((part) => part.trim() === `${COMPLIANCE_NOTE_DISMISSED_KEY}=1`);
}

function setComplianceDismissed() {
    let stored = false;

    try {
        window.localStorage.setItem(COMPLIANCE_NOTE_DISMISSED_KEY, "1");
        stored = true;
    } catch {
        // Ignore storage failures and try next fallback.
    }

    if (!stored) {
        try {
            window.sessionStorage.setItem(COMPLIANCE_NOTE_DISMISSED_KEY, "1");
            stored = true;
        } catch {
            // Ignore and continue to cookie fallback.
        }
    }

    // 365 day cookie fallback when storage APIs are blocked.
    if (!stored) {
        document.cookie = `${COMPLIANCE_NOTE_DISMISSED_KEY}=1; path=/; max-age=31536000; samesite=lax`;
    }
}

const UI_STRINGS = {
    fi: {
        schema: "Skeema",
        search: "Haku",
        searchPlaceholder: "kentt\u00e4, kuvaus, tyyppi, viite...",
        language: "Kieli",
        displayMode: "Sis\u00e4lt\u00f6laajuus",
        modeNarrow: "Suppeat (FI)",
        modeAll: "Laaja",
        expandAll: "Laajenna kaikki",
        collapseAll: "Supista kaikki",
        interestingTitle: "Kiinnostavat elementit",
        interestingFilterPlaceholder: "Suodata elementtej\u00e4...",
        allDataGroups: "Kaikki tietoryhm\u00e4t",
        requiredOnly: "Vaatimusstatus",
        requiredFilterAll: "Kaikki",
        requiredFilterRequired: "Pakolliset",
        requiredFilterOptional: "Valinnaiset",
        filterHelpText: "Sis\u00e4lt\u00f6laajuus valitsee datan m\u00e4\u00e4r\u00e4n. Vaatimusstatus suodattaa n\u00e4ytett\u00e4v\u00e4\u00e4 listaa.",
        thNameTree: "Nimi / Puu",
        thDataGroup: "Tietoryhm\u00e4",
        thDataElement: "Dataelementti",
        thDescription: "Kuvaus",
        thCondition: "Ehto",
        thCodeList: "Koodilista",
        thRules: "S\u00e4\u00e4nn\u00f6t / Ohjeistus",
        rulesModalTitle: "S\u00e4\u00e4nn\u00f6t ja ohjeistus",
        emsaLabel: "EMSA",
        nationalLabel: "Kansallinen",
        sourceLabel: "L\u00e4hde",
        notesLabel: "Huomiot",
        noMatches: "Ei osumia.",
        codeListValues: "Koodilistan arvot",
        emsaCodeLists: "EMSA-koodilistat",
        close: "Sulje",
        required: "Pakollinen",
        optional: "Valinnainen",
        booleanIndicatorHint: "Boolean-indikaattori (1=kyll\u00e4, 0=ei)",
        showAll: "N\u00e4yt\u00e4 kaikki",
        view: "N\u00e4yt\u00e4",
        items: "arvoa",
        schemaMetaSchema: "Schema",
        schemaMetaDescription: "Kuvaus",
        schemaMetaRootType: "Juurityyppi",
        schemaMetaDefinitions: "M\u00e4\u00e4ritelmi\u00e4",
        migDocs: "MIG-dokumentaatio",
        migDetails: "tiedot",
        migIndex: "EMSA MIG -indeksi",
        elementsCount: "elementti\u00e4",
        summaryFormality: "Formality",
        summaryVisible: "N\u00e4kyviss\u00e4",
        summaryRequired: "Pakolliset",
        summaryOptional: "Valinnaiset",
        summaryCodeLists: "Koodilistat",
        summaryRules: "S\u00e4\u00e4nt\u00f6j\u00e4",
        guideText: "Aloita pakollisista kentist\u00e4. Avaa Koodilista- ja S\u00e4\u00e4nn\u00f6t-painikkeet, jotta n\u00e4et tarkan sis\u00e4ll\u00f6n ennen l\u00e4hetyst\u00e4.",
        openMap: "Rakennekartta",
        mapTitle: "Rakennekartta",
        mapFilterPlaceholder: "Suodata rakennetta...",
        mapReset: "Tyhjenn\u00e4",
        mapNoResults: "Karttaan ei l\u00f6ytynyt osumia.",
        mapElements: "elementti\u00e4",
        mapRequiredShort: "pak.",
        repeatable: "Toistuva",
        occurrenceLabel: "Toistuvuus",
        expandAllText: "Laajenna tekstit",
        collapseAllText: "Supista tekstit",
        complianceNote: "T\u00e4m\u00e4 palvelu on kehitysvaiheessa, eik\u00e4 v\u00e4ltt\u00e4m\u00e4tt\u00e4 viel\u00e4 t\u00e4yt\u00e4 kaikkia saavutettavuusdirektiivin vaatimuksia. Jos et voi k\u00e4ytt\u00e4\u00e4 jotain toimintoa, voit jatkaa selausta ja olla tarvittaessa yhteydess\u00e4 tukeen: nemo.support@siili.com.",
        dismissNote: "Ymm\u00e4rsin",
        failedInit: "N\u00e4kym\u00e4\u00e4 ei voitu alustaa"
        ,
        appSubtitle: "Staattinen katselu schemas-kansiossa oleville JSON-skeemoille."
    },
    sv: {
        schema: "Schema",
        search: "S\u00f6k",
        searchPlaceholder: "f\u00e4lt, beskrivning, typ, referens...",
        language: "Spr\u00e5k",
        displayMode: "Inneh\u00e5llsomf\u00e5ng",
        modeNarrow: "Begr\u00e4nsad (FI)",
        modeAll: "Ut\u00f6kad",
        expandAll: "Expandera alla",
        collapseAll: "Falla ihop alla",
        interestingTitle: "Intressanta element",
        interestingFilterPlaceholder: "Filtrera element...",
        allDataGroups: "Alla datagrupper",
        requiredOnly: "Kravstatus",
        requiredFilterAll: "Alla",
        requiredFilterRequired: "Obligatoriska",
        requiredFilterOptional: "Valfria",
        filterHelpText: "Inneh\u00e5llsomf\u00e5ng v\u00e4ljer datam\u00e4ngden. Kravstatus filtrerar den visade listan.",
        thNameTree: "Namn / Tr\u00e4d",
        thDataGroup: "Datagrupp",
        thDataElement: "Dataelement",
        thDescription: "Beskrivning",
        thCondition: "Villkor",
        thCodeList: "Kodlista",
        thRules: "Regler / V\u00e4gledning",
        rulesModalTitle: "Regler och v\u00e4gledning",
        emsaLabel: "EMSA",
        nationalLabel: "Nationell",
        sourceLabel: "K\u00e4lla",
        notesLabel: "Noteringar",
        noMatches: "Inga tr\u00e4ffar.",
        codeListValues: "Kodlistans v\u00e4rden",
        emsaCodeLists: "EMSA-kodlistor",
        close: "St\u00e4ng",
        required: "Obligatorisk",
        optional: "Valfri",
        booleanIndicatorHint: "Boolean-indikator (1=ja, 0=nej)",
        showAll: "Visa alla",
        view: "Visa",
        items: "v\u00e4rden",
        schemaMetaSchema: "Schema",
        schemaMetaDescription: "Beskrivning",
        schemaMetaRootType: "Rottyp",
        schemaMetaDefinitions: "Definitioner",
        migDocs: "MIG-dokumentation",
        migDetails: "detaljer",
        migIndex: "EMSA MIG-index",
        elementsCount: "element",
        summaryFormality: "Formality",
        summaryVisible: "Visas",
        summaryRequired: "Obligatoriska",
        summaryOptional: "Valfria",
        summaryCodeLists: "Kodlistor",
        summaryRules: "Regler",
        guideText: "B\u00f6rja med obligatoriska f\u00e4lt. \u00d6ppna Kodlista och Regler f\u00f6r exakt inneh\u00e5ll innan rapportering.",
        openMap: "Strukturkarta",
        mapTitle: "Strukturkarta",
        mapFilterPlaceholder: "Filtrera struktur...",
        mapReset: "Rensa",
        mapNoResults: "Inga tr\u00e4ffar i kartan.",
        mapElements: "element",
        mapRequiredShort: "obl.",
        repeatable: "Upprepbar",
        occurrenceLabel: "F\u00f6rekomst",
        expandAllText: "Expandera texter",
        collapseAllText: "F\u00e4ll ihop texter",
        complianceNote: "Tj\u00e4nsten \u00e4r i utvecklingsfas och uppfyller eventuellt inte alla krav i tillg\u00e4nglighetsdirektivet \u00e4nnu. Om n\u00e5gon funktion inte fungerar f\u00f6r dig kan du forts\u00e4tta och vid behov kontakta support: nemo.support@siili.com.",
        dismissNote: "Jag f\u00f6rst\u00e5r",
        failedInit: "Visaren kunde inte initieras"
        ,
        appSubtitle: "Statisk visare f\u00f6r JSON-scheman i schemas-mappen."
    },
    en: {
        schema: "Schema",
        search: "Search",
        searchPlaceholder: "field, description, type, ref...",
        language: "Language",
        displayMode: "Content scope",
        modeNarrow: "Narrow (FI)",
        modeAll: "Extended",
        expandAll: "Expand all",
        collapseAll: "Collapse all",
        interestingTitle: "Interesting elements",
        interestingFilterPlaceholder: "Filter elements...",
        allDataGroups: "All data groups",
        requiredOnly: "Requirement status",
        requiredFilterAll: "All",
        requiredFilterRequired: "Required only",
        requiredFilterOptional: "Optional only",
        filterHelpText: "Content scope selects the amount of data. Requirement status filters the visible list.",
        thNameTree: "Name / Tree",
        thDataGroup: "Data group",
        thDataElement: "Data element",
        thDescription: "Description",
        thCondition: "Condition",
        thCodeList: "Code list",
        thRules: "Rules / Guidance",
        rulesModalTitle: "Rules and guidance",
        emsaLabel: "EMSA",
        nationalLabel: "National",
        sourceLabel: "Source",
        notesLabel: "Notes",
        noMatches: "No matching elements.",
        codeListValues: "Code list values",
        emsaCodeLists: "EMSA code lists",
        close: "Close",
        required: "Required",
        optional: "Optional",
        booleanIndicatorHint: "Boolean indicator (1=yes, 0=no)",
        showAll: "Show all",
        view: "View",
        items: "items",
        schemaMetaSchema: "Schema",
        schemaMetaDescription: "Description",
        schemaMetaRootType: "Root type",
        schemaMetaDefinitions: "Definitions",
        migDocs: "MIG docs",
        migDetails: "details",
        migIndex: "EMSA MIG index",
        elementsCount: "elements",
        summaryFormality: "Formality",
        summaryVisible: "Visible",
        summaryRequired: "Required",
        summaryOptional: "Optional",
        summaryCodeLists: "Code lists",
        summaryRules: "Rules",
        guideText: "Start from required fields. Open Code list and Rules to confirm exact allowed values before sending.",
        openMap: "Structure map",
        mapTitle: "Structure map",
        mapFilterPlaceholder: "Filter structure...",
        mapReset: "Reset",
        mapNoResults: "No map matches.",
        mapElements: "elements",
        mapRequiredShort: "req.",
        repeatable: "Repeatable",
        occurrenceLabel: "Occurrence",
        expandAllText: "Expand all text",
        collapseAllText: "Collapse all text",
        complianceNote: "This service is under active development and may not yet meet all accessibility directive requirements. If a feature is not usable for you, you can continue browsing and contact support when needed: nemo.support@siili.com.",
        dismissNote: "I understand",
        failedInit: "Failed to initialize viewer"
        ,
        appSubtitle: "Static viewer for JSON Schemas stored in the schemas folder."
    }
};

const FORMALITY_TITLE_BY_CODE = {
    ABS: "Absentee declaration",
    ACT: "Expected activities declaration",
    ATA: "Notification of actual arrival",
    ATD: "Notification of actual departure",
    BKA: "Bunkers at arrival",
    BKD: "Bunkers at departure",
    BLU: "Safe loading and unloading of bulk carriers",
    BWA: "Ballast water",
    CGA: "Cargo declaration at arrival",
    CGD: "Cargo declaration at departure",
    CGM: "Customs goods manifest",
    COA: "Cancellation of port call",
    CRT: "Ship certificates",
    CWA: "Crew list at arrival",
    CWD: "Crew list at departure",
    DUE: "Fairway and port dues declaration",
    EFF: "Crew's effects declaration",
    EXP: "Notification of expanded inspection",
    EXS: "Exit summary declaration",
    EXT: "Exit notification",
    HOS: "Hospitalised crew member declaration",
    HZA: "Notification of hazardous materials (dangerous and polluting goods) on board at arrival",
    HZD: "Notification of hazardous materials (dangerous and polluting goods) on board at departure",
    HZS: "Notification of hazardous materials (dangerous and polluting goods) on board during a shift",
    MDD: "Maritime declaration of health details",
    MDH: "Maritime declaration of health",
    MFX: "Manifest at exit",
    MTS: "Maritime transport statistics",
    NAC: "Notification of arrival to the customs office of first entry",
    NAV: "Navigation report",
    NOA: "Notice of pre arrival",
    NOD: "Notice of pre departure",
    NOS: "Notification of shift in port",
    PBK: "Passenger booking",
    PNO: "Presentation notification",
    PPA: "Presentation of the proof (at arrival)",
    PXA: "Passenger list at arrival",
    PXD: "Passenger list at departure",
    REN: "Re-export notification",
    SEC: "Notification of security information",
    SHP: "Ship information",
    SID: "Ship identifiers notification",
    SRV: "Request for service",
    SSA: "Ship to ship activity declaration",
    STA: "Declaration of stores on board at arrival",
    STD: "Declaration of stores on board at departure",
    STW: "Stowaways notification",
    TRA: "Electronic transport documents used for transit at arrival",
    TRD: "Electronic transport documents used for transit at departure",
    TSD: "Temporary storage declaration",
    TSR: "Temporary storage declaration with reduced data set",
    VID: "Request for Visit ID",
    VIS: "Ship visitors declaration",
    WAR: "Waste delivery receipt",
    WAS: "Advance notification for waste delivery to port reception facilities"
};

function t(key) {
    return UI_STRINGS[currentLanguage]?.[key] || UI_STRINGS.en[key] || key;
}

function clearCodeListModalStore() {
    codeListModalCounter = 0;
    codeListModalStore.clear();
}

function clearRulesModalStore() {
    rulesModalCounter = 0;
    rulesModalStore.clear();
}

function registerCodeListModalEntry(title, values, externalUrl = "", listNameHints = []) {
    const id = `code-list-${++codeListModalCounter}`;
    codeListModalStore.set(id, { title, values, externalUrl, listNameHints });
    return id;
}

function registerRulesModalEntry(title, rules) {
    const id = `rules-${++rulesModalCounter}`;
    rulesModalStore.set(id, { title, rules });
    return id;
}

function pickLocalizedValue(localized, fallback = "") {
    if (!localized || typeof localized !== "object") return fallback;
    return localized[currentLanguage] || localized.en || fallback;
}

function normalizeListName(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replaceAll(/\s+/g, "_")
        .replaceAll(/[^a-z0-9_./-]/g, "")
        .replaceAll(/_+/g, "_")
        .replaceAll(/^_+|_+$/g, "");
}

function deriveCodeListNameHints(codeListLabel) {
    const raw = String(codeListLabel || "").trim();
    if (!raw) return [];

    const withoutPrefix = raw
        .replace(/^refer\s+to\s+code\s+list\s*/i, "")
        .replace(/^code\s+list\s*/i, "")
        .replace(/\(.*?\)/g, "")
        .trim();

    const candidates = [raw, withoutPrefix]
        .map((value) => normalizeListName(value))
        .filter(Boolean);

    return [...new Set(candidates)];
}

function applyUiLanguage() {
    const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    setText("label-language", t("language"));
    setText("label-display-mode", t("displayMode"));
    setText("schema-interesting-empty", t("noMatches"));
    setText("th-name-tree", t("thNameTree"));
    setText("th-data-group", t("thDataGroup"));
    setText("th-data-element", t("thDataElement"));
    setText("th-description", t("thDescription"));
    setText("th-condition", t("thCondition"));
    setText("th-code-list", t("thCodeList"));
    setText("th-rules", t("thRules"));
    setText("label-required-only", t("requiredOnly"));
    setText("schema-expand-all-text", t("expandAllText"));
    setText("schema-collapse-all-text", t("collapseAllText"));
    setText("schema-open-map", t("openMap"));
    setText("schema-map-title", t("mapTitle"));
    setText("schema-map-close", t("close"));
    setText("schema-map-reset", t("mapReset"));
    setText("code-list-modal-emsa-link", t("emsaCodeLists"));
    setText("code-list-modal-close", t("close"));
    setText("rules-modal-close", t("close"));
    setText("rules-modal-title", t("rulesModalTitle"));
    setText("app-subtitle", t("appSubtitle"));
    setText("schema-guide-text", t("guideText"));
    setText("schema-compliance-text", t("complianceNote"));
    setText("schema-compliance-dismiss", t("dismissNote"));
    setText("schema-filter-help", t("filterHelpText"));

    const interestingFilter = document.getElementById("schema-interesting-filter");
    if (interestingFilter) interestingFilter.placeholder = t("interestingFilterPlaceholder");

    const mapFilter = document.getElementById("schema-map-filter");
    if (mapFilter) mapFilter.placeholder = t("mapFilterPlaceholder");

    const modeSelect = document.getElementById("display-mode");
    if (modeSelect) {
        const narrow = modeSelect.querySelector('option[value="narrow"]');
        const all = modeSelect.querySelector('option[value="all"]');
        if (narrow) narrow.textContent = t("modeNarrow");
        if (all) all.textContent = t("modeAll");
    }

    const requiredOnlySelect = document.getElementById("schema-required-only");
    if (requiredOnlySelect) {
        const all = requiredOnlySelect.querySelector('option[value="all"]');
        const required = requiredOnlySelect.querySelector('option[value="required"]');
        const optional = requiredOnlySelect.querySelector('option[value="optional"]');
        if (all) all.textContent = t("requiredFilterAll");
        if (required) required.textContent = t("requiredFilterRequired");
        if (optional) optional.textContent = t("requiredFilterOptional");
    }

    const languageSelect = document.getElementById("ui-language");
    if (languageSelect) {
        const fi = languageSelect.querySelector('option[value="fi"]');
        const sv = languageSelect.querySelector('option[value="sv"]');
        const en = languageSelect.querySelector('option[value="en"]');
        if (fi) fi.textContent = "Suomi";
        if (sv) sv.textContent = "Svenska";
        if (en) en.textContent = "English";
    }

    renderStructureMapRows(document.getElementById("schema-map-filter")?.value || "");
}

function getRequiredFilterMode() {
    const control = document.getElementById("schema-required-only");
    if (!control) return "all";

    if (control.tagName === "SELECT") {
        const v = String(control.value || "all");
        return ["all", "required", "optional"].includes(v) ? v : "all";
    }

    return control.checked ? "required" : "all";
}

function buildStructureMapRows(rows) {
    const root = {
        label: currentSchemaCode || "ROOT",
        path: currentSchemaCode || "ROOT",
        level: 0,
        count: 0,
        required: 0,
        children: new Map()
    };

    for (const row of rows) {
        const parts = String(row.tree || "").split(" > ").map((part) => part.trim()).filter(Boolean);
        let node = root;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (!node.children.has(part)) {
                const path = node.path ? `${node.path} > ${part}` : part;
                node.children.set(part, {
                    label: part,
                    path,
                    level: i + 1,
                    count: 0,
                    required: 0,
                    children: new Map()
                });
            }

            node = node.children.get(part);
            node.count += 1;
            if (row.isRequired) node.required += 1;
        }
    }

    const out = [];
    const walk = (node) => {
        const children = [...node.children.values()].sort((a, b) => a.label.localeCompare(b.label));
        for (const child of children) {
            out.push({
                label: child.label,
                path: child.path,
                level: child.level,
                count: child.count,
                required: child.required
            });
            walk(child);
        }
    };

    walk(root);
    return out;
}

function renderStructureMapRows(term = "") {
    const host = document.getElementById("schema-map-list");
    if (!host) return;

    const q = String(term || "").trim().toLowerCase();
    const filtered = structureMapRows.filter((row) => {
        if (!q) return true;
        return row.label.toLowerCase().includes(q) || row.path.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
        host.innerHTML = `<p class="schema-interesting-empty">${escapeHtml(t("mapNoResults"))}</p>`;
        return;
    }

    host.innerHTML = filtered.map((row) => `
        <button type="button" class="schema-map-item" data-map-path="${escapeHtml(row.path)}">
            <span class="schema-map-item-label" style="--level:${Math.max(0, row.level - 1)}">${escapeHtml(row.label)}</span>
            <span class="schema-map-item-meta">${row.count} ${escapeHtml(t("mapElements"))} | ${row.required} ${escapeHtml(t("mapRequiredShort"))}</span>
        </button>
    `).join("");
}

function openStructureMapModal() {
    const modal = document.getElementById("schema-map-modal");
    const filter = document.getElementById("schema-map-filter");
    if (!modal) return;

    renderStructureMapRows(filter?.value || "");

    if (typeof modal.showModal === "function") {
        modal.showModal();
    } else {
        modal.setAttribute("open", "open");
    }

    if (filter) filter.focus();
}

function closeStructureMapModal() {
    const modal = document.getElementById("schema-map-modal");
    if (!modal) return;
    if (typeof modal.close === "function") {
        modal.close();
    } else {
        modal.removeAttribute("open");
    }
}

function initComplianceNote() {
    const note = document.getElementById("schema-compliance-note");
    const dismiss = document.getElementById("schema-compliance-dismiss");
    if (!note || !dismiss) return;

    const hideNote = () => {
        note.hidden = true;
        note.classList.add("is-hidden");
        note.setAttribute("aria-hidden", "true");
        setComplianceDismissed();
    };

    if (getComplianceDismissed()) {
        note.hidden = true;
        note.classList.add("is-hidden");
        note.setAttribute("aria-hidden", "true");
        return;
    }

    note.hidden = false;
    note.classList.remove("is-hidden");
    note.removeAttribute("aria-hidden");

    // Use onclick so repeated inits cannot accidentally stack listeners.
    dismiss.onclick = hideNote;
}

function updateInterestingTitle(filteredRows) {
    const titleEl = document.getElementById("schema-interesting-title");
    if (!titleEl) return;

    const rows = Array.isArray(filteredRows) ? filteredRows : [];
    const requiredCount = rows.filter((row) => row.isRequired).length;
    const optionalCount = rows.length - requiredCount;
    const codeListCount = rows.filter((row) => String(row.codeList || "").trim()).length;
    const rulesCount = rows.reduce((sum, row) => sum + (Array.isArray(row.relatedRules) ? row.relatedRules.length : 0), 0);

    const rootLabel = currentRootLabel || currentSchemaCode || "ROOT";
    const modeLabel = displayMode === "all" ? t("modeAll") : t("modeNarrow");
    const requiredMode = getRequiredFilterMode();
    const requiredModeLabel = requiredMode === "required"
        ? t("requiredFilterRequired")
        : (requiredMode === "optional" ? t("requiredFilterOptional") : t("requiredFilterAll"));

    titleEl.textContent = `${rootLabel} - ${rows.length} ${t("elementsCount")} (${modeLabel}, ${requiredModeLabel}) | ${t("summaryRequired")}: ${requiredCount} | ${t("summaryOptional")}: ${optionalCount} | ${t("summaryCodeLists")}: ${codeListCount} | ${t("summaryRules")}: ${rulesCount}`;
}

function openCodeListModal(title, values, externalUrl = "", listNameHints = []) {
    const modal = document.getElementById("code-list-modal");
    const titleEl = document.getElementById("code-list-modal-title");
    const emsaLinkEl = document.getElementById("code-list-modal-emsa-link");
    const valuesEl = document.getElementById("code-list-modal-values");
    const externalWrapEl = document.getElementById("code-list-modal-external");
    const externalFrameEl = document.getElementById("code-list-modal-iframe");
    const externalLinkEl = document.getElementById("code-list-modal-external-link");

    titleEl.textContent = title || t("codeListValues");
    valuesEl.innerHTML = "";

    const external = String(externalUrl || "").trim();
    const showExternal = external.length > 0;

    if (externalWrapEl) {
        externalWrapEl.hidden = !showExternal;
    }
    if (valuesEl) {
        valuesEl.hidden = showExternal;
    }
    if (emsaLinkEl) {
        emsaLinkEl.hidden = showExternal;
    }

    if (showExternal) {
        if (externalFrameEl) {
            externalFrameEl.src = external;
        }
        if (externalLinkEl) {
            externalLinkEl.href = external;
            externalLinkEl.textContent = external;
        }
    }

    if (!showExternal) {
        if (externalFrameEl) {
            externalFrameEl.removeAttribute("src");
        }

        values.forEach((value) => {
            const raw = String(value);
            const codeKey = raw.trim().toUpperCase();
            const detailsList = codeDescriptionsById[codeKey] || [];
            const normalizedHints = new Set((listNameHints || []).map(normalizeListName).filter(Boolean));
            const listScopedDetails = normalizedHints.size > 0
                ? detailsList.filter((item) => normalizedHints.has(normalizeListName(item?.listName)))
                : detailsList;
            const formalityScopedDetails = listScopedDetails.filter((item) =>
                Array.isArray(item.formality) && item.formality.some((f) => String(f).toUpperCase() === currentSchemaCode)
            );
            const details = formalityScopedDetails[0] || listScopedDetails[0] || null;

            const li = document.createElement("li");
            li.textContent = raw;

            const localizedDescription = details ? pickLocalizedValue(details.labels, "") : "";
            if (localizedDescription) {
                const info = document.createElement("div");
                info.className = "schema-modal-value-description";
                info.innerHTML = [
                    `<div>${escapeHtml(localizedDescription)}</div>`,
                    details.source ? `<div class="schema-modal-value-source">${escapeHtml(details.source)}</div>` : ""
                ].join("");
                li.appendChild(info);
            }

            valuesEl.appendChild(li);
        });
    }

    if (typeof modal.showModal === "function") {
        modal.showModal();
        return;
    }

    modal.setAttribute("open", "open");
}

function closeCodeListModal() {
    const modal = document.getElementById("code-list-modal");
    if (typeof modal.close === "function") {
        modal.close();
        return;
    }
    modal.removeAttribute("open");
}

function openRulesModal(title, rules) {
    const modal = document.getElementById("rules-modal");
    const titleEl = document.getElementById("rules-modal-title");
    const bodyEl = document.getElementById("rules-modal-body");

    titleEl.textContent = title || t("rulesModalTitle");
    bodyEl.innerHTML = "";

    rules.forEach((rule) => {
        const card = document.createElement("article");
        card.className = "schema-rule-card";

        const localized = pickLocalizedValue(
            { en: rule.description || "", fi: rule.fi || "", sv: rule.sv || "" },
            rule.description || ""
        );

        card.innerHTML = `
            <h4>${escapeHtml(rule.id || "-")} - ${escapeHtml(rule.type || "Rule")}</h4>
            <p>${escapeHtml(localized || "")}</p>
            <div class="schema-rule-meta">${escapeHtml(t("sourceLabel"))}: ${escapeHtml(rule.source || "Unspecified")} | ${escapeHtml(rule.national ? t("nationalLabel") : t("emsaLabel"))}</div>
            ${rule.notes ? `<div class="schema-rule-notes"><strong>${escapeHtml(t("notesLabel"))}:</strong> ${escapeHtml(rule.notes)}</div>` : ""}
        `;

        bodyEl.appendChild(card);
    });

    if (typeof modal.showModal === "function") {
        modal.showModal();
        return;
    }
    modal.setAttribute("open", "open");
}

function closeRulesModal() {
    const modal = document.getElementById("rules-modal");
    if (typeof modal.close === "function") {
        modal.close();
        return;
    }
    modal.removeAttribute("open");
}

async function loadJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

async function loadText(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
    }
    return response.text();
}

function buildCodeDescriptionIndexFromHtml(html) {
    const map = {};
    if (typeof html !== "string" || !html) return map;

    const rowRegex = /<tr>\s*<td>([^<]+)<\/td>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>\s*<td>([^<]*)<\/td>\s*<\/tr>/gim;
    let match;
    while ((match = rowRegex.exec(html)) !== null) {
        const id = String(match[1] || "").trim();
        if (!id || id === "ID") continue;

        map[id.toUpperCase()] = [
            {
                labels: {
                    en: String(match[2] || "").trim(),
                    fi: String(match[3] || "").trim(),
                    sv: String(match[4] || "").trim()
                },
                source: "National/Nemo codelist",
                formality: []
            }
        ];
    }

    return map;
}

function buildCodeDescriptionIndexFromJson(payload) {
    const out = {};
    const byCode = payload?.byCode || {};

    Object.entries(byCode).forEach(([code, entries]) => {
        if (!Array.isArray(entries)) return;
        out[String(code).toUpperCase()] = entries.map((entry) => ({
            labels: entry?.labels || { en: "", fi: "", sv: "" },
            source: entry?.source || "Unspecified",
            formality: Array.isArray(entry?.formality) ? entry.formality : [],
            listName: entry?.listName || ""
        }));
    });

    return out;
}

function buildCodeListEntriesByListNameFromJson(payload) {
    const byListName = {};
    const byCode = payload?.byCode || {};

    Object.entries(byCode).forEach(([code, entries]) => {
        if (!Array.isArray(entries)) return;

        entries.forEach((entry) => {
            const listName = normalizeListName(entry?.listName);
            if (!listName) return;

            if (!byListName[listName]) byListName[listName] = [];
            byListName[listName].push({
                code: String(code || "").trim(),
                labels: entry?.labels || { en: "", fi: "", sv: "" },
                source: entry?.source || "Unspecified",
                formality: Array.isArray(entry?.formality) ? entry.formality : []
            });
        });
    });

    return byListName;
}

function dedupeCodeListEntries(entries) {
    const seen = new Set();
    return entries.filter((entry) => {
        const code = String(entry?.code || "").trim().toUpperCase();
        if (!code || seen.has(code)) return false;
        seen.add(code);
        return true;
    });
}

function buildCodeListNameOverrides(payload) {
    const out = { byDe: {}, byFormalityDe: {}, byCodeListLabel: {} };

    const normalizeDe = (value) => String(value || "").trim().toUpperCase();
    const normalizeFormality = (value) => String(value || "").trim().toUpperCase();
    const normalizeList = (value) => normalizeListName(value);

    const assign = (deId, listName, formality = "") => {
        const de = normalizeDe(deId);
        const list = normalizeList(listName);
        const form = normalizeFormality(formality);
        if (!de || !list) return;

        if (form) {
            if (!out.byFormalityDe[form]) out.byFormalityDe[form] = {};
            out.byFormalityDe[form][de] = list;
            return;
        }

        out.byDe[de] = list;
    };

    const entries = Array.isArray(payload?.entries) ? payload.entries : [];
    entries.forEach((entry) => {
        assign(entry?.deId, entry?.listName, entry?.formality);
    });

    Object.entries(payload?.byDe || {}).forEach(([deId, listName]) => {
        assign(deId, listName, "");
    });

    Object.entries(payload?.byFormalityDe || {}).forEach(([formality, byDe]) => {
        if (!byDe || typeof byDe !== "object") return;
        Object.entries(byDe).forEach(([deId, listName]) => {
            assign(deId, listName, formality);
        });
    });

    Object.entries(payload?.byCodeListLabel || {}).forEach(([label, listName]) => {
        const key = normalizeListName(label);
        const list = normalizeListName(listName);
        if (!key || !list) return;
        out.byCodeListLabel[key] = list;
    });

    return out;
}

function resolveMappedListNameForElement(node, formalityCode, codeListLabel = "") {
    const deId = String(node?.dataElementId || "").trim().toUpperCase();
    const formality = String(formalityCode || "").trim().toUpperCase();
    if (deId) {
        const byFormality = codeListNameOverrides?.byFormalityDe?.[formality] || {};
        if (byFormality[deId]) return byFormality[deId];

        const byDe = codeListNameOverrides?.byDe?.[deId] || "";
        if (byDe) return byDe;
    }

    const labelKey = normalizeListName(codeListLabel);
    if (labelKey) {
        return codeListNameOverrides?.byCodeListLabel?.[labelKey] || "";
    }

    return "";
}

function resolveCodeListEntriesForLabel(codeListLabel, formalityCode, mappedListName = "") {
    const hints = [
        ...deriveCodeListNameHints(codeListLabel),
        normalizeListName(mappedListName)
    ].map(normalizeListName).filter(Boolean);
    if (!hints.length) return [];

    const candidates = hints.flatMap((hint) => codeListEntriesByListName[hint] || []);
    if (!candidates.length) return [];

    const targetFormality = String(formalityCode || "").toUpperCase();
    const scoped = targetFormality
        ? candidates.filter((entry) => {
            const list = Array.isArray(entry?.formality) ? entry.formality : [];
            return list.length === 0 || list.some((code) => String(code).toUpperCase() === targetFormality);
        })
        : candidates;

    const picked = scoped.length > 0 ? scoped : candidates;
    return dedupeCodeListEntries(picked)
        .sort((a, b) => String(a.code).localeCompare(String(b.code), undefined, { numeric: true }));
}

function buildFormalityConfigIndex(payload) {
    const out = {};
    const formalities = payload?.formalities || {};

    Object.entries(formalities).forEach(([code, item]) => {
        const elements = item?.elements || {};
        const byPath = {};
        const byDe = {};
        const wantedByDe = new Set();

        Object.values(elements).forEach((elem) => {
            const path = String(elem?.path || "").trim();
            if (path) byPath[path] = elem;

            const deId = String(elem?.emsweDataElementId || "").trim().toUpperCase();
            if (deId) {
                const existing = byDe[deId];
                if (!existing || (!!elem?.finlandWanted && !existing?.finlandWanted)) {
                    byDe[deId] = elem;
                }
            }
            if (deId && elem?.finlandWanted) wantedByDe.add(deId);
        });

        out[String(code).toUpperCase()] = { byPath, byDe, wantedByDe };
    });

    return out;
}

function lineageToXsdPath(lineage) {
    const parts = lineage.filter((part) => part && part !== "[items]");
    if (!parts.length) return "";
    return `/env:Envelope/${parts.join("/")}`;
}

function isRepeatableOccurrence(occurrence) {
    const value = String(occurrence || "").trim().toLowerCase().replaceAll(/\s+/g, "");
    if (!value) return false;

    const parts = value.split("..");
    if (parts.length !== 2) return false;

    const upper = parts[1];
    if (["x", "n", "*", "unbounded"].includes(upper)) return true;

    const upperNum = Number(upper);
    return Number.isFinite(upperNum) && upperNum > 1;
}

function markFinlandWanted(node, schemaCode, lineage = [node.name]) {
    const idx = formalityConfigIndex[String(schemaCode || "").toUpperCase()];
    if (!idx) {
        node.finlandWanted = true;
    } else {
        const xsdPath = lineageToXsdPath(lineage);
        const byPath = idx.byPath[xsdPath];
        const deId = String(node.dataElementId || "").toUpperCase();
        const byDeEntry = deId ? idx.byDe[deId] : null;
        const byDe = !!deId && idx.wantedByDe.has(deId);
        const entry = byPath || byDeEntry || null;

        node.finlandWanted = byPath ? !!byPath.finlandWanted : byDe;
        node.localizedLabel = pickLocalizedValue(entry?.labels, "");
        node.localizedDescription = pickLocalizedValue(entry?.descriptions, "");
        node.configRuleRefs = Array.isArray(entry?.ruleRefs) ? entry.ruleRefs : [];
        node.configCodeList = String(entry?.codeList || entry?.raw?.["Code list"] || "").trim();
        node.configOccurrence = String(entry?.occurrence || entry?.raw?.Occurrence || "").trim();
    }

    node.children.forEach((child) => {
        markFinlandWanted(child, schemaCode, [...lineage, child.name]);
    });
}

function filterTreeByDisplayMode(node, mode) {
    if (mode !== "narrow") {
        return node;
    }

    const filteredChildren = node.children
        .map((child) => filterTreeByDisplayMode(child, mode))
        .filter(Boolean);

    const keepSelf = !!node.finlandWanted || filteredChildren.length > 0;
    if (!keepSelf) {
        return null;
    }

    return { ...node, children: filteredChildren };
}

function detectType(schemaNode) {
    if (!schemaNode || typeof schemaNode !== "object") return "unknown";
    if (schemaNode.type) return schemaNode.type;
    if (schemaNode.properties) return "object";
    if (schemaNode.items) return "array";
    if (schemaNode.oneOf) return "oneOf";
    if (schemaNode.anyOf) return "anyOf";
    if (schemaNode.allOf) return "allOf";
    if (schemaNode.enum) return "enum";
    return "unknown";
}

function getNodeNamePresentation(name) {
    const rawName = String(name || "");

    if (rawName.startsWith("@xmlns")) {
        return { displayName: rawName, kind: "xml-namespace", includeInInteresting: false };
    }

    if (rawName.startsWith("$")) {
        return { displayName: rawName, kind: "schema-meta", includeInInteresting: false };
    }

    if (rawName.startsWith("@")) {
        return { displayName: rawName.slice(1) || rawName, kind: "xml-attribute", includeInInteresting: true };
    }

    return { displayName: rawName, kind: "field", includeInInteresting: true };
}

function collectConstraints(schemaNode) {
    const keys = [
        "minLength",
        "maxLength",
        "minimum",
        "maximum",
        "exclusiveMinimum",
        "exclusiveMaximum",
        "minItems",
        "maxItems",
        "pattern",
        "format",
        "default"
    ];

    return keys
        .filter((key) => schemaNode[key] !== undefined)
        .map((key) => ({ key, value: schemaNode[key] }));
}

function resolveRef(ref, defs) {
    if (refsCache.has(ref)) return refsCache.get(ref);
    if (!ref.startsWith("#/$defs/")) return null;

    const key = ref.replace("#/$defs/", "");
    const resolved = defs[key] || null;
    refsCache.set(ref, resolved);
    return resolved;
}

function resolveSchema(schemaNode, defs, visitedRefs) {
    if (!schemaNode || typeof schemaNode !== "object") {
        return { schema: schemaNode || {}, refInfo: null, visitedRefs };
    }

    let current = schemaNode;
    let refInfo = null;
    const nextVisited = new Set(visitedRefs);

    while (current?.$ref && typeof current.$ref === "string") {
        const ref = current.$ref;
        refInfo = ref;

        if (nextVisited.has(ref)) {
            return {
                schema: { description: `Circular reference: ${ref}`, type: "object" },
                refInfo: ref,
                visitedRefs: nextVisited
            };
        }

        const target = resolveRef(ref, defs);
        if (!target) {
            return {
                schema: { description: `Unresolved reference: ${ref}` },
                refInfo: ref,
                visitedRefs: nextVisited
            };
        }

        nextVisited.add(ref);
        const merged = { ...target, ...current };
        delete merged.$ref;
        current = merged;
    }

    return { schema: current, refInfo, visitedRefs: nextVisited };
}

function applyDeEnrichment(node, schemaCode, lineage = [node.name]) {
    const formalityMap = deEnrichmentIndex[schemaCode] || {};
    const key = lineage.join(" > ");
    const mapped = formalityMap[key];

    if (mapped?.id) {
        node.dataElementId = mapped.id;
        node.dataElementName = mapped.name || node.dataElementName;
    }

    node.children.forEach((child) => {
        applyDeEnrichment(child, schemaCode, [...lineage, child.name]);
    });
}

function buildNode(name, schemaNode, ctx) {
    const resolved = resolveSchema(schemaNode, ctx.defs, ctx.visitedRefs);
    const effective = resolved.schema;
    const dataElement = extractDataElement(effective.description || "");
    const namePresentation = getNodeNamePresentation(name);

    const node = {
        name,
        displayName: namePresentation.displayName,
        nameKind: namePresentation.kind,
        includeInInteresting: namePresentation.includeInInteresting,
        path: ctx.path,
        description: dataElement.cleanDescription,
        dataElementId: dataElement.id,
        dataElementName: dataElement.name,
        required: !!ctx.required,
        type: detectType(effective),
        ref: resolved.refInfo,
        enumValues: Array.isArray(effective.enum) ? effective.enum : [],
        constraints: collectConstraints(effective),
        children: []
    };

    if (effective.properties && typeof effective.properties === "object") {
        const requiredSet = new Set(effective.required || []);
        for (const [propName, propSchema] of Object.entries(effective.properties)) {
            node.children.push(
                buildNode(propName, propSchema, {
                    defs: ctx.defs,
                    path: `${ctx.path}/properties/${propName}`,
                    required: requiredSet.has(propName),
                    visitedRefs: new Set(resolved.visitedRefs)
                })
            );
        }
    }

    if (effective.items) {
        node.children.push(
            buildNode("[items]", effective.items, {
                defs: ctx.defs,
                path: `${ctx.path}/items`,
                required: true,
                visitedRefs: new Set(resolved.visitedRefs)
            })
        );
    }

    for (const keyword of ["oneOf", "anyOf", "allOf"]) {
        if (Array.isArray(effective[keyword])) {
            effective[keyword].forEach((subSchema, index) => {
                node.children.push(
                    buildNode(`${keyword}[${index}]`, subSchema, {
                        defs: ctx.defs,
                        path: `${ctx.path}/${keyword}/${index}`,
                        required: true,
                        visitedRefs: new Set(resolved.visitedRefs)
                    })
                );
            });
        }
    }

    return node;
}


function extractDataElement(descriptionText) {
    const description = String(descriptionText || "").trim();
    if (!description) {
        return { id: "", name: "", cleanDescription: "" };
    }

    const lines = description
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);

    const lineWithDe = lines.find((line) => /\bDE-\d{3}-\d{2}\b/i.test(line)) || "";
    const match = lineWithDe.match(/\b(DE-\d{3}-\d{2})\b(?:\s*[:;-]?\s*(.+))?/i);

    const id = (match?.[1] || "").toUpperCase();
    const name = (match?.[2] || "").trim();

    const cleanLines = lines.filter((line) => !/\bDE-\d{3}-\d{2}\b/i.test(line));
    const cleanDescription = (cleanLines.join(" ").trim() || description);

    return { id, name, cleanDescription };
}

function formatConstraintSummary(node) {
    return node.constraints
        .filter((constraint) => constraint.key !== "default")
        .map((constraint) => `${constraint.key}=${String(constraint.value)}`)
        .join(", ");
}

function isBooleanIndicatorNode(node) {
    const enumSet = new Set((node.enumValues || []).map((value) => String(value).trim().toLowerCase()));
    const has01Enum = enumSet.size === 2 && enumSet.has("0") && enumSet.has("1");
    const hasBooleanEnum = enumSet.size === 2 && enumSet.has("false") && enumSet.has("true");

    if (node.type === "boolean" || has01Enum || hasBooleanEnum) {
        return true;
    }

    const indicatorText = [node.name, node.displayName, node.description, node.ref]
        .filter(Boolean)
        .join(" ");

    if (!/indicator/i.test(indicatorText)) {
        return false;
    }

    // IndicatorType is often represented as 0/1 even when type is numeric.
    return /indicatortype/i.test(node.ref || "") || has01Enum;
}

function getBooleanIndicatorHint(node) {
    return isBooleanIndicatorNode(node)
        ? t("booleanIndicatorHint")
        : "";
}

function hasZeroOneIndicatorValues(enumValues = []) {
    const enumSet = new Set((enumValues || []).map((value) => String(value).trim().toLowerCase()));
    return enumSet.size === 2 && enumSet.has("0") && enumSet.has("1");
}

function buildRulesIndex(rules) {
    const index = {};
    rulesById = {};

    if (!Array.isArray(rules)) {
        return index;
    }

    for (const rule of rules) {
        const normalizedRule = {
            id: rule?.id || "",
            type: rule?.type || "Rule",
            formality: rule?.formality || "",
            seq: rule?.seq || "",
            description: rule?.description || "",
            fi: rule?.fi || "",
            sv: rule?.sv || "",
            notes: rule?.notes || "",
            ui: rule?.ui || "",
            source: rule?.source || "Unspecified",
            national: !!rule?.national,
            backend: !!rule?.backend
        };

        if (normalizedRule.id) {
            rulesById[normalizedRule.id.toUpperCase()] = normalizedRule;
        }

        const formality = String(rule?.formality || "GENERAL").toUpperCase();
        const searchableText = [rule?.description, rule?.fi, rule?.sv, rule?.notes]
            .filter(Boolean)
            .join("\n");
        const matches = [...new Set((searchableText.match(DE_ID_PATTERN) || []).map((item) => item.toUpperCase()))];

        if (!matches.length) continue;

        for (const deId of matches) {
            if (!index[formality]) index[formality] = {};
            if (!index[formality][deId]) index[formality][deId] = [];

            index[formality][deId].push(normalizedRule);
        }
    }

    return index;
}

function getRulesForElement(node, formalityCode, deId) {
    const refs = (node?.configRuleRefs || [])
        .map((ref) => String(ref || "").toUpperCase())
        .filter(Boolean);

    if (refs.length > 0) {
        const fromRefs = refs
            .map((ref) => rulesById[ref])
            .filter(Boolean);

        if (fromRefs.length > 0) {
            return fromRefs;
        }
    }

    if (!deId) return [];

    const formality = String(formalityCode || "").toUpperCase();
    const key = deId.toUpperCase();
    const specific = rulesByFormality[formality]?.[key] || [];
    const general = rulesByFormality.GENERAL?.[key] || [];

    const merged = [...specific, ...general];
    const seen = new Set();
    return merged.filter((item) => {
        if (!item?.id || seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
    });
}

function formatCodeList(node) {
    // 0/1 indicators are already explained in the condition column.
    if (hasZeroOneIndicatorValues(node.enumValues)) {
        return "";
    }

    const configuredCodeList = String(node.configCodeList || "").trim();
    if (configuredCodeList) {
        return configuredCodeList;
    }

    const booleanHint = getBooleanIndicatorHint(node);
    if (booleanHint) {
        return booleanHint;
    }

    if (node.enumValues.length > 0) {
        if (node.enumValues.length > 8) {
            return `${node.enumValues.slice(0, 8).join(", ")} (+${node.enumValues.length - 8} more)`;
        }
        return node.enumValues.join(", ");
    }

    return "";
}

function resolveCodeListExternalUrl(codeListLabel) {
    const normalized = String(codeListLabel || "").trim().toUpperCase();
    if (normalized === "UN/LOCODE" || normalized.includes("UN/LOCODE")) {
        return UN_LOCODE_BROWSER_URL;
    }
    return "";
}

function buildCodeListModalValues(node, codeListLabel = "") {
    if (hasZeroOneIndicatorValues(node.enumValues)) {
        return [];
    }

    if (node.enumValues.length > 0) {
        return node.enumValues.map(String);
    }

    const mappedListName = resolveMappedListNameForElement(node, currentSchemaCode, codeListLabel || node.configCodeList || "");
    const fromList = resolveCodeListEntriesForLabel(
        codeListLabel || node.configCodeList || "",
        currentSchemaCode,
        mappedListName
    );
    if (fromList.length > 0) {
        return fromList.map((entry) => String(entry.code));
    }


    return [];
}

function collectInterestingRows(node, rows = [], lineage = [], state = { order: 0 }) {
    for (const child of node.children) {
        const childLineage = [...lineage, child.name];
        const depth = Math.max(0, childLineage.length - 1);
        const isStructural = /^(oneOf|anyOf|allOf)\[(\d+)]$/.test(child.name);
        const isLeaf = child.children.length === 0;
        const hasDetail = !!child.description || !!child.dataElementId || child.constraints.length > 0 || child.enumValues.length > 0;

        if (child.includeInInteresting && !isStructural && (isLeaf || hasDetail)) {
            const conditionParts = [child.required ? t("required") : t("optional")];
            const constraintSummary = formatConstraintSummary(child);
            if (constraintSummary) conditionParts.push(constraintSummary);

            const booleanHint = getBooleanIndicatorHint(child);
            if (booleanHint) conditionParts.push(booleanHint);

            const codeList = formatCodeList(child);
            const mappedListName = resolveMappedListNameForElement(child, currentSchemaCode, codeList);
            const codeListValues = buildCodeListModalValues(child, codeList || mappedListName);
            const codeListLabel = codeList || mappedListName;
            const codeListExternalUrl = resolveCodeListExternalUrl(codeList);
            const codeListNameHints = deriveCodeListNameHints(codeListLabel);
            const relatedRules = getRulesForElement(child, currentSchemaCode, child.dataElementId);
            const relatedRulesSummary = relatedRules.length > 0
                ? `${relatedRules.slice(0, 3).map((rule) => rule.id).join(", ")}${relatedRules.length > 3 ? ` (+${relatedRules.length - 3})` : ""}`
                : "";

            const row = {
                name: child.name,
                displayName: child.localizedLabel || child.displayName || child.name,
                technicalName: child.name,
                nameKind: child.nameKind,
                tree: childLineage.join(" > "),
                depth,
                order: state.order++,
                isRequired: !!child.required,
                branchRoot: childLineage[1] || childLineage[0],
                dataGroup: childLineage.slice(0, -1).join(" > "),
                dataGroupShort: childLineage[childLineage.length - 2] || childLineage[0],
                dataElementId: child.dataElementId || "",
                dataElementName: child.dataElementName || "",
                occurrence: child.configOccurrence || "",
                isRepeatable: isRepeatableOccurrence(child.configOccurrence || ""),
                description: child.localizedDescription || child.description || "",
                condition: conditionParts.join("; "),
                codeList: codeListLabel,
                codeListValues,
                codeListExternalUrl,
                codeListNameHints,
                relatedRules,
                relatedRulesSummary,
                search: [
                    child.name,
                    child.displayName || "",
                    childLineage.join(" > "),
                    childLineage.slice(0, -1).join(" > "),
                    child.dataElementId || "",
                    child.dataElementName || "",
                    child.description || "",
                    conditionParts.join(" "),
                    codeList,
                    relatedRules.map((rule) => `${rule.id} ${rule.type} ${rule.description} ${rule.fi || ""} ${rule.sv || ""} ${rule.notes || ""} ${rule.source || ""}`).join(" "),
                    child.path,
                    child.ref || ""
                ].join(" ").toLowerCase()
            };

            rows.push(row);
        }

        collectInterestingRows(child, rows, childLineage, state);
    }

    return rows;
}

function refreshGroupFilterOptions() {
    const select = document.getElementById("schema-group-filter");
    const current = select.value;
    const groups = [...new Set(interestingRows.map((row) => row.dataGroup).filter(Boolean))].sort();

    select.innerHTML = "";
    const allOpt = document.createElement("option");
    allOpt.value = "";
    allOpt.textContent = t("allDataGroups");
    select.appendChild(allOpt);

    groups.forEach((group) => {
        const opt = document.createElement("option");
        opt.value = group;
        opt.textContent = group;
        select.appendChild(opt);
    });

    select.value = groups.includes(current) ? current : "";
}

function renderInterestingRows(term = "") {
    const tbody = document.getElementById("schema-interesting-body");
    const empty = document.getElementById("schema-interesting-empty");
    const selectedGroup = document.getElementById("schema-group-filter").value;
    const requiredFilterMode = getRequiredFilterMode();
    const q = term.trim().toLowerCase();

    const filtered = interestingRows
        .filter((row) => !selectedGroup || row.dataGroup === selectedGroup)
        .filter((row) => {
            if (requiredFilterMode === "required") return row.isRequired;
            if (requiredFilterMode === "optional") return !row.isRequired;
            return true;
        })
        .filter((row) => !q || row.search.includes(q))
        .sort((a, b) => a.order - b.order);

    tbody.innerHTML = "";
    clearCodeListModalStore();
    clearRulesModalStore();

    if (filtered.length > 0) {
        const rootRow = document.createElement("tr");
        rootRow.className = "schema-interesting-tree-root-row";
        rootRow.innerHTML = `
            <td colspan="7" class="schema-tree-cell" style="--level:0">
                <div class="schema-tree-node-line schema-tree-node-root" style="--level:0">
                    <span class="schema-tree-glyph schema-tree-glyph-root" aria-hidden="true"></span>
                    <span class="schema-tree-chain-label">${escapeHtml(currentSchemaCode || "ROOT")}</span>
                </div>
            </td>
        `;
        tbody.appendChild(rootRow);
    }

    for (const row of filtered) {
        const hasCodeListModal = !!row.codeListExternalUrl || row.codeListValues.length > 0;
        const openLabel = row.codeListValues.length > 8 ? t("showAll") : t("view");
        const codeListModalTitle = row.codeListExternalUrl
            ? `${row.displayName || row.name} (${row.codeList || t("thCodeList")})`
            : `${row.displayName || row.name} (${row.codeListValues.length} ${t("items")})`;
        const codeListCell = hasCodeListModal
            ? `${escapeHtml(row.codeList || "-")} <button type="button" class="schema-code-list-open" data-code-list-id="${registerCodeListModalEntry(codeListModalTitle, row.codeListValues, row.codeListExternalUrl, row.codeListNameHints)}">${openLabel}</button>`
            : escapeHtml(row.codeList || "-");

        const hasRules = row.relatedRules.length > 0;
        const rulesCell = hasRules
            ? `${escapeHtml(row.relatedRulesSummary || "-")} <button type="button" class="schema-rules-open" data-rules-id="${registerRulesModalEntry(`${row.displayName || row.name} - ${t("thRules")}`, row.relatedRules)}">${t("view")}</button>`
            : "-";
        const dataElementCell = row.dataElementId
            ? `<div class="schema-data-element"><span class="schema-data-element-id">${escapeHtml(row.dataElementId)}</span>${row.dataElementName ? `<span class="schema-data-element-name" title="${escapeHtml(row.dataElementName)}">${escapeHtml(row.dataElementName)}</span>` : ""}</div>`
            : "-";
        const descriptionRaw = row.description || "-";
        const descriptionIsCollapsible = descriptionRaw !== "-";
        const descriptionCell = descriptionRaw === "-"
            ? "-"
            : `<div class="schema-description-text">${formatMultilineText(descriptionRaw)}</div>`;
        const conditionRaw = row.condition || "-";
        const conditionIsCollapsible = conditionRaw !== "-";
        const conditionCell = conditionRaw === "-"
            ? "-"
            : `<div class="schema-condition-text">${formatMultilineText(conditionRaw)}</div>`;

        const tr = document.createElement("tr");
        if (row.isRepeatable) tr.classList.add("schema-row-repeatable");
        tr.innerHTML = `
            <td class="schema-tree-cell" style="--level:${row.depth}">
                <div class="schema-tree-node-line">
                    <span class="schema-tree-glyph" aria-hidden="true"></span>
                    <span class="schema-tree-chain-label">${escapeHtml(row.displayName || row.name)}</span>
                    ${row.nameKind === "xml-attribute" ? '<span class="schema-pill schema-pill-name-kind">@attr</span>' : ""}
                    ${row.isRepeatable ? `<span class="schema-pill schema-pill-repeatable" title="${escapeHtml(t("occurrenceLabel"))}: ${escapeHtml(row.occurrence || "")}">${escapeHtml(t("repeatable"))}${row.occurrence ? ` ${escapeHtml(row.occurrence)}` : ""}</span>` : ""}
                </div>
                ${(row.displayName || row.name) !== row.technicalName ? `<div class="schema-row-tech-name">${escapeHtml(row.technicalName)}</div>` : ""}
            </td>
            <td>${escapeHtml(row.dataGroupShort || "-")}</td>
            <td>${dataElementCell}</td>
            <td class="schema-description-cell${descriptionIsCollapsible ? " is-collapsible" : ""}">${descriptionCell}</td>
            <td class="schema-condition-cell${conditionIsCollapsible ? " is-collapsible" : ""}">${conditionCell}</td>
            <td>${codeListCell}</td>
            <td>${rulesCell}</td>
        `;
        tbody.appendChild(tr);
    }

    empty.hidden = filtered.length !== 0;
    updateInterestingTitle(filtered);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function formatMultilineText(value) {
    return escapeHtml(value).replaceAll("\n", "<br>");
}

function toggleAllExpandableTextCells(expand) {
    const body = document.getElementById("schema-interesting-body");
    if (body) {
        body.classList.toggle("is-all-text-expanded", !!expand);
    }

    const selector = ".schema-description-cell.is-collapsible, .schema-condition-cell.is-collapsible";
    document.querySelectorAll(selector).forEach((cell) => {
        cell.classList.toggle("is-expanded", !!expand);
    });

    const expandBtn = document.getElementById("schema-expand-all-text");
    const collapseBtn = document.getElementById("schema-collapse-all-text");
    if (expandBtn) expandBtn.setAttribute("aria-pressed", expand ? "true" : "false");
    if (collapseBtn) collapseBtn.setAttribute("aria-pressed", expand ? "false" : "true");
}

async function renderSchema(schemaUrl) {
    refsCache.clear();

    const schema = await loadJson(schemaUrl);
    const defs = schema.$defs || {};

    const schemaCode = getSchemaCode(schemaUrl);
    currentSchemaCode = schemaCode;

    const focusedRoot = pickBusinessRoot(schema, defs, schemaUrl);

    const tree = buildNode(focusedRoot.name, focusedRoot.schemaNode, {
        defs,
        path: focusedRoot.path,
        required: focusedRoot.required,
        visitedRefs: new Set()
    });

    applyDeEnrichment(tree, schemaCode);
    markFinlandWanted(tree, schemaCode);
    const visibleTree = filterTreeByDisplayMode(tree, displayMode);


    interestingRows = visibleTree ? collectInterestingRows(visibleTree, [], [visibleTree.name]) : [];
    structureMapRows = buildStructureMapRows(interestingRows);
    refreshGroupFilterOptions();
    currentRootLabel = focusedRoot.name;
    renderInterestingRows(document.getElementById("schema-interesting-filter").value);
}

function toSchemaUrl(fileEntry) {
    if (typeof fileEntry !== "string") return "";

    const trimmed = fileEntry.trim();
    if (!trimmed) return "";

    // Keep explicit URLs and explicit relative paths as-is.
    if (/^[a-z]+:\/\//i.test(trimmed) || trimmed.startsWith("/") || trimmed.startsWith("./") || trimmed.startsWith("../")) {
        return trimmed;
    }

    // Backward-compatible shorthand: treat plain filenames as entries in ./schemas.
    return `./schemas/${trimmed}`;
}

function getSchemaCode(schemaUrl) {
    const baseName = String(schemaUrl || "").split("/").pop() || "";
    return (baseName.split("_")[0] || "").toUpperCase();
}

function getSchemaNavLabel(schema) {
    const code = getSchemaCode(toSchemaUrl(schema?.file));
    const title = FORMALITY_TITLE_BY_CODE[code] || "";
    return title ? `${code} - ${title}` : code;
}

function orderSchemasForColumnReading(schemas, columns = 3) {
    const list = Array.isArray(schemas) ? [...schemas] : [];
    const safeColumns = Math.max(1, Number(columns) || 1);
    if (safeColumns === 1 || list.length <= safeColumns) return list;

    const rows = Math.ceil(list.length / safeColumns);
    const ordered = [];

    // Convert column-first reading order into DOM order for CSS grid row placement.
    for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < safeColumns; col += 1) {
            const sourceIndex = col * rows + row;
            if (sourceIndex < list.length) ordered.push(list[sourceIndex]);
        }
    }

    return ordered;
}

function setActiveNavButton(schemaUrl) {
    document.querySelectorAll(".schema-nav-button").forEach((button) => {
        button.classList.toggle("is-active", button.dataset.schemaUrl === schemaUrl);
    });
}

function pickBusinessRoot(schema, defs, schemaUrl) {
    const envelopeNode = schema?.properties?.["env:Envelope"];
    if (!envelopeNode) {
        return { name: "ROOT", schemaNode: schema, path: "#", required: true };
    }

    const resolvedEnvelope = resolveSchema(envelopeNode, defs, new Set()).schema;
    const envelopeProps = resolvedEnvelope?.properties || {};
    const businessEntries = Object.entries(envelopeProps).filter(([name]) => !/:MAI$/i.test(name));

    if (!businessEntries.length) {
        return { name: "ROOT", schemaNode: schema, path: "#", required: true };
    }

    const schemaCode = getSchemaCode(schemaUrl);
    const selected =
        businessEntries.find(([name]) => (name.split(":").pop() || "").toUpperCase() === schemaCode) ||
        businessEntries[0];

    const [selectedName, selectedSchema] = selected;
    return {
        name: selectedName,
        schemaNode: selectedSchema,
        path: `#/properties/env:Envelope/properties/${selectedName}`,
        required: true
    };
}

async function main() {
    const manifest = await loadJson("./schemas/index.json");

    try {
        const deIndexPayload = await loadJson("./schemas/de-index.json");
        deEnrichmentIndex = deIndexPayload?.formalities || {};
    } catch {
        deEnrichmentIndex = {};
    }

    try {
        const rulesPayload = await loadJson("./schemas/rcg.json");
        rulesByFormality = buildRulesIndex(rulesPayload);
    } catch {
        try {
            const fallbackRulesPayload = await loadJson("../rcg/dist/rules.json");
            rulesByFormality = buildRulesIndex(fallbackRulesPayload);
        } catch {
            rulesByFormality = {};
        }
    }

    try {
        const formalityConfigPayload = await loadJson("./schemas/config.json");
        formalityConfigIndex = buildFormalityConfigIndex(formalityConfigPayload);
    } catch {
        formalityConfigIndex = {};
    }

    try {
        const overridePayload = await loadJson("./schemas/codelist-to-formality.json");
        codeListNameOverrides = buildCodeListNameOverrides(overridePayload);
    } catch {
        codeListNameOverrides = { byDe: {}, byFormalityDe: {}, byCodeListLabel: {} };
    }

    try {
        const codeListPayload = await loadJson("./schemas/codelist.json");
        codeDescriptionsById = buildCodeDescriptionIndexFromJson(codeListPayload);
        codeListEntriesByListName = buildCodeListEntriesByListNameFromJson(codeListPayload);
    } catch {
        try {
            const codeListHtml = await loadText("../code%20list/codelists.html");
            codeDescriptionsById = buildCodeDescriptionIndexFromHtml(codeListHtml);
            codeListEntriesByListName = {};
        } catch {
            codeDescriptionsById = {};
            codeListEntriesByListName = {};
        }
    }

    const appTitle = document.getElementById("app-title");
    const nav = document.getElementById("schema-nav");
    const interestingFilter = document.getElementById("schema-interesting-filter");
    const groupFilter = document.getElementById("schema-group-filter");
    const requiredOnlyToggle = document.getElementById("schema-required-only");
    const expandAllTextButton = document.getElementById("schema-expand-all-text");
    const collapseAllTextButton = document.getElementById("schema-collapse-all-text");
    const displayModeToggle = document.getElementById("display-mode");
    const languageToggle = document.getElementById("ui-language");
    const interestingBody = document.getElementById("schema-interesting-body");
    const openMapButton = document.getElementById("schema-open-map");
    const mapModalClose = document.getElementById("schema-map-close");
    const mapFilter = document.getElementById("schema-map-filter");
    const mapReset = document.getElementById("schema-map-reset");
    const mapList = document.getElementById("schema-map-list");
    const codeListModalClose = document.getElementById("code-list-modal-close");
    const rulesModalClose = document.getElementById("rules-modal-close");

    const clearForcedNavCollapse = () => {
        nav?.classList.remove("is-force-collapsed");
    };

    appTitle.textContent = manifest.title || "JSON Schema Tree Viewer";
    currentLanguage = languageToggle?.value || "fi";
    applyUiLanguage();
    initComplianceNote();

    const sortedSchemas = [...(manifest.schemas || [])].sort((a, b) => {
        const aLabel = getSchemaNavLabel(a);
        const bLabel = getSchemaNavLabel(b);
        return aLabel.localeCompare(bLabel, undefined, { sensitivity: "base", numeric: true });
    });

    const navSchemas = orderSchemasForColumnReading(sortedSchemas, 3);

    for (const schema of navSchemas) {
        const schemaUrl = toSchemaUrl(schema.file);

        const navButton = document.createElement("button");
        navButton.type = "button";
        navButton.className = "schema-nav-button";
        navButton.dataset.schemaUrl = schemaUrl;
        navButton.textContent = getSchemaNavLabel(schema);
        navButton.title = schema.label || schema.file;

        navButton.addEventListener("click", async () => {
            nav?.classList.add("is-force-collapsed");
            navButton.blur();
            if (currentSchemaUrl === schemaUrl) return;
            interestingFilter.value = "";
            groupFilter.value = "";
            if (requiredOnlyToggle) {
                if (requiredOnlyToggle.tagName === "SELECT") requiredOnlyToggle.value = "all";
                else requiredOnlyToggle.checked = false;
            }
            currentSchemaUrl = schemaUrl;
            setActiveNavButton(schemaUrl);
            await renderSchema(schemaUrl);
        });

        nav.appendChild(navButton);
    }

    nav?.addEventListener("mouseleave", clearForcedNavCollapse);

    if (!manifest.schemas || manifest.schemas.length === 0) {
        throw new Error("schemas/index.json does not contain any schemas");
    }

    const defaultSchema = (manifest.schemas || []).find((schema) =>
        schema.file === manifest.defaultFile ||
        schema.label === manifest.defaultFile ||
        schema.file?.split("/").pop() === manifest.defaultFile
    ) || sortedSchemas[0];

    currentSchemaUrl = toSchemaUrl(defaultSchema.file);
    setActiveNavButton(currentSchemaUrl);
    await renderSchema(currentSchemaUrl);

    interestingFilter.addEventListener("input", () => {
        renderInterestingRows(interestingFilter.value);
    });

    groupFilter.addEventListener("change", () => {
        renderInterestingRows(interestingFilter.value);
    });

    if (requiredOnlyToggle) {
        requiredOnlyToggle.addEventListener("change", () => {
            renderInterestingRows(interestingFilter.value);
        });
    }

    if (expandAllTextButton) {
        expandAllTextButton.addEventListener("click", () => {
            toggleAllExpandableTextCells(true);
        });
    }

    if (collapseAllTextButton) {
        collapseAllTextButton.addEventListener("click", () => {
            toggleAllExpandableTextCells(false);
        });
    }

    if (openMapButton) {
        openMapButton.addEventListener("click", openStructureMapModal);
    }

    if (mapModalClose) {
        mapModalClose.addEventListener("click", closeStructureMapModal);
    }

    if (mapFilter) {
        mapFilter.addEventListener("input", () => {
            renderStructureMapRows(mapFilter.value);
        });
    }

    if (mapReset && mapFilter) {
        mapReset.addEventListener("click", () => {
            mapFilter.value = "";
            renderStructureMapRows("");
            mapFilter.focus();
        });
    }

    if (mapList) {
        mapList.addEventListener("click", (event) => {
            const button = event.target.closest(".schema-map-item");
            if (!button) return;

            const path = String(button.dataset.mapPath || "").trim();
            if (!path) return;

            interestingFilter.value = path;
            renderInterestingRows(path);
            closeStructureMapModal();
        });
    }

    displayModeToggle.addEventListener("change", async () => {
        displayMode = displayModeToggle.value;
        await renderSchema(currentSchemaUrl);
    });

    languageToggle.addEventListener("change", async () => {
        currentLanguage = languageToggle.value;
        applyUiLanguage();
        refreshGroupFilterOptions();
        await renderSchema(currentSchemaUrl);
    });

    interestingBody.addEventListener("click", (event) => {
        const button = event.target.closest(".schema-code-list-open");
        if (button) {
            const payload = codeListModalStore.get(button.dataset.codeListId || "");
            if (!payload) return;
            openCodeListModal(payload.title, payload.values, payload.externalUrl, payload.listNameHints);
            return;
        }

        const rulesButton = event.target.closest(".schema-rules-open");
        if (rulesButton) {
            const payload = rulesModalStore.get(rulesButton.dataset.rulesId || "");
            if (!payload) return;

            openRulesModal(payload.title, payload.rules);
            return;
        }

        const expandableCell = event.target.closest(".schema-description-cell.is-collapsible, .schema-condition-cell.is-collapsible");
        if (!expandableCell || !interestingBody.contains(expandableCell)) return;

        expandableCell.classList.toggle("is-expanded");
    });

    codeListModalClose.addEventListener("click", closeCodeListModal);
    rulesModalClose.addEventListener("click", closeRulesModal);
}

main().catch((error) => {
    const host = document.getElementById("schema-interesting-title") || document.body;
    host.innerHTML = `<div><strong>${escapeHtml(t("failedInit"))}:</strong> ${escapeHtml(error.message)}</div>`;
});