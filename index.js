let I18N = {};
let SITE_DATA = {};

function t(key, lang) {
    const fallback = I18N.en || {};
    const dict = I18N[lang] || fallback;
    return dict[key] || fallback[key] || key;
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderSchemaLinks() {
    const container = document.getElementById("schema-links");
    if (!container) return;
    container.innerHTML = "";

    (SITE_DATA.schemaLinks || []).forEach((entry) => {
        const link = document.createElement("a");
        link.className = "chip";
        link.href = entry.href;
        link.textContent = entry.code;
        container.appendChild(link);
    });
}

function renderEnvironmentRows(lang) {
    const tbody = document.getElementById("env-rows");
    if (!tbody) return;
    tbody.innerHTML = "";

    (SITE_DATA.environments || []).forEach((env) => {
        const tr = document.createElement("tr");
        tr.innerHTML = [
            `<td><strong>${escapeHtml(env.name)}</strong></td>`,
            `<td><code>${escapeHtml(env.baseUrl)}</code></td>`,
            `<td>${escapeHtml(env.auth)}</td>`,
            `<td><span class="pill warn">${escapeHtml(t(env.statusI18n, lang))}</span></td>`,
            `<td>${escapeHtml(t(env.notesI18n, lang))}</td>`
        ].join("");
        tbody.appendChild(tr);
    });
}

function renderChangelog(lang) {
    const container = document.getElementById("changelog-items");
    if (!container) return;
    container.innerHTML = "";

    (SITE_DATA.changelog || []).forEach((entry) => {
        if (entry.itemsI18n && entry.itemsI18n.length) {
            const wrapper = document.createElement("div");
            wrapper.className = "changelog-flex-row";

            const date = document.createElement("strong");
            date.style.marginTop = "0.2em";
            date.textContent = entry.date;

            const list = document.createElement("ul");
            list.className = "changelogList";
            list.style.margin = "0";

            entry.itemsI18n.forEach((key) => {
                const item = document.createElement("li");
                item.textContent = t(key, lang);
                list.appendChild(item);
            });

            wrapper.appendChild(date);
            wrapper.appendChild(list);
            container.appendChild(wrapper);
            return;
        }

        const row = document.createElement("div");
        const date = document.createElement("strong");
        date.textContent = entry.date;
        row.appendChild(date);
        row.appendChild(document.createTextNode(" - " + t(entry.textI18n, lang)));
        container.appendChild(row);
    });
}

function applyTranslations(lang) {
    document.documentElement.lang = lang;
    document.title = t("pageTitle", lang);

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", t("pageDescription", lang));
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = t(key, lang);
        const allowHtml = el.hasAttribute("data-i18n-html");
        if (allowHtml) {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    });

    renderEnvironmentRows(lang);
    renderChangelog(lang);
}

async function loadJson(path) {
    const response = await fetch(path, {cache: "no-cache"});
    if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status}`);
    }
    return response.json();
}

async function initPage() {
    document.getElementById("y").textContent = new Date().getFullYear();

    try {
        const [i18nData, siteData] = await Promise.all([
            loadJson("i18n.json"),
            loadJson("site-data.json")
        ]);
        I18N = i18nData;
        SITE_DATA = siteData;
    } catch (error) {
        console.error("Failed to initialize page data", error);
        return;
    }

    renderSchemaLinks();

    const langSelect = document.getElementById("lang-switch");
    const supported = Object.keys(I18N);
    const savedLang = localStorage.getItem("nemo.lang");
    const browserLang = (navigator.language || "en").slice(0, 2).toLowerCase();
    const initialLang = supported.includes(savedLang)
        ? savedLang
        : (supported.includes(browserLang) ? browserLang : "en");

    langSelect.value = initialLang;
    applyTranslations(initialLang);

    langSelect.addEventListener("change", (event) => {
        const lang = event.target.value;
        localStorage.setItem("nemo.lang", lang);
        applyTranslations(lang);
    });
}

initPage();

