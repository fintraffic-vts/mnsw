(() => {
    "use strict";

    const translations = {
        fi: {
            pageTitle: "NEMO-tukipyyntö",
            pageDescription: "Luo NEMO-tukipyynnön sähköpostiluonnos.",
            home: "NEMO Developer Hub -etusivu",
            language: "Kieli",
            backToGuide: "Takaisin oppaaseen",
            supportBadge: "NEMO-tuki",
            pageHeading: "Tukipyyntö",
            intro: "Kuvaa ongelma mahdollisimman tarkasti. Lomake avaa sähköpostiluonnoksen.",
            sendInstruction: "Tarkista viesti ja lähetä se sähköpostiohjelmastasi.",
            formHeading: "Ilmoituksen tiedot",
            formNotice: "Tähdellä (*) merkityt kentät ovat pakollisia. Älä lisää salasanoja, tunnuksia tai muita salassa pidettäviä tietoja.",
            reporterName: "Nimi *",
            reporterEmail: "Sähköpostiosoite *",
            organization: "Organisaatio",
            category: "Aihealue *",
            chooseCategory: "Valitse aihealue",
            categoryTechnical: "Tekninen ongelma",
            categoryAccess: "Käyttöoikeudet tai kirjautuminen",
            categoryReporting: "Ilmoittaminen tai ilmoituksen tiedot",
            categoryOnboarding: "Käyttöönotto tai neuvonta",
            categoryOther: "Muu asia",
            environment: "Ympäristö *",
            chooseEnvironment: "Valitse ympäristö",
            environmentStg: "Testiympäristö (STG)",
            environmentPrd: "Tuotantoympäristö (PRD)",
            environmentNotApplicable: "Ei koske ympäristöä",
            reference: "Viite, esimerkiksi request-id tai satamakäynnin tunniste",
            summary: "Lyhyt kuvaus *",
            description: "Ongelman kuvaus *",
            descriptionHelp: "Kerro mitä olit tekemässä, mitä tapahtui ja mitä odotit tapahtuvan.",
            markdownHelp: "Kuvauskenttä tulkitaan Markdown-muodossa. Voit käyttää esimerkiksi lihavointia, listoja ja koodia.",
            markdownToolbar: "Muotoilutyökalut",
            formatBold: "Lihavointi",
            formatItalic: "Kursivointi",
            formatCode: "Koodi",
            formatList: "Luettelo",
            listPlaceholder: "Kirjoita tähän",
            formatLengthError: "Muotoilu ylittäisi kuvauksen enimmäispituuden.",
            createEmail: "Luo sähköpostiluonnos",
            cancel: "Peruuta",
            fallback: "Jos sähköpostiluonnos ei avaudu, lähetä viesti osoitteeseen",
            required: "Täytä tämä kenttä.",
            tooLong: "Viesti on liian pitkä sähköpostiluonnoksen avaamiseen. Lyhennä kuvausta ja yritä uudelleen.",
            emailReady: "Sähköpostiluonnoksen pitäisi avautua sähköpostiohjelmassa. Tarkista tiedot ja lähetä viesti.",
            emailTitle: "NEMO-tukipyyntö",
            emailReporter: "Ilmoittaja",
            emailAddress: "Sähköposti",
            emailOrganization: "Organisaatio",
            emailCategory: "Aihealue",
            emailEnvironment: "Ympäristö",
            emailReference: "Viite",
            emailSummary: "Lyhyt kuvaus",
            emailRequestHeading: "PYYNNÖN TIEDOT",
            emailReporterHeading: "ILMOITTAJA",
            emailDescriptionHeading: "ONGELMAN KUVAUS"
        },
        sv: {
            pageTitle: "NEMO-supportförfrågan",
            pageDescription: "Skapa ett e-postutkast för en NEMO-supportförfrågan.",
            home: "NEMO Developer Hub",
            language: "Språk",
            backToGuide: "Tillbaka till guiden",
            supportBadge: "NEMO-support",
            pageHeading: "Supportförfrågan",
            intro: "Beskriv problemet så noggrant som möjligt. Formuläret öppnar ett e-postutkast.",
            sendInstruction: "Kontrollera meddelandet och skicka det från ditt e-postprogram.",
            formHeading: "Uppgifter om ärendet",
            formNotice: "Fält markerade med (*) är obligatoriska. Ange inte lösenord, autentiseringsuppgifter eller annan konfidentiell information.",
            reporterName: "Namn *",
            reporterEmail: "E-postadress *",
            organization: "Organisation",
            category: "Ämne *",
            chooseCategory: "Välj ämne",
            categoryTechnical: "Tekniskt problem",
            categoryAccess: "Behörigheter eller inloggning",
            categoryReporting: "Rapportering eller uppgifter i en anmälan",
            categoryOnboarding: "Introduktion eller rådgivning",
            categoryOther: "Annat",
            environment: "Miljö *",
            chooseEnvironment: "Välj miljö",
            environmentStg: "Testmiljö (STG)",
            environmentPrd: "Produktionsmiljö (PRD)",
            environmentNotApplicable: "Inte tillämpligt",
            reference: "Referens, till exempel request-id eller hamnanlöpets identifierare",
            summary: "Kort beskrivning *",
            description: "Beskrivning av problemet *",
            descriptionHelp: "Beskriv vad du gjorde, vad som hände och vad du förväntade dig skulle hända.",
            markdownHelp: "Beskrivningen tolkas som Markdown. Du kan till exempel använda fetstil, listor och kod.",
            markdownToolbar: "Formateringsverktyg",
            formatBold: "Fetstil",
            formatItalic: "Kursiv",
            formatCode: "Kod",
            formatList: "Punktlista",
            listPlaceholder: "Skriv här",
            formatLengthError: "Formateringen skulle överskrida den maximala längden för beskrivningen.",
            createEmail: "Skapa e-postutkast",
            cancel: "Avbryt",
            fallback: "Om e-postutkastet inte öppnas kan du skicka ett meddelande till",
            required: "Fyll i det här fältet.",
            tooLong: "Meddelandet är för långt för att öppna som e-postutkast. Förkorta beskrivningen och försök igen.",
            emailReady: "E-postutkastet bör öppnas i ditt e-postprogram. Kontrollera uppgifterna och skicka meddelandet.",
            emailTitle: "NEMO-supportförfrågan",
            emailReporter: "Anmälare",
            emailAddress: "E-post",
            emailOrganization: "Organisation",
            emailCategory: "Ämne",
            emailEnvironment: "Miljö",
            emailReference: "Referens",
            emailSummary: "Kort beskrivning",
            emailRequestHeading: "UPPGIFTER OM BEGÄRAN",
            emailReporterHeading: "ANMÄLARE",
            emailDescriptionHeading: "BESKRIVNING AV PROBLEMET"
        },
        en: {
            pageTitle: "NEMO support request",
            pageDescription: "Create an email draft for a NEMO support request.",
            home: "NEMO Developer Hub home",
            language: "Language",
            backToGuide: "Back to the guide",
            supportBadge: "NEMO support",
            pageHeading: "Support request",
            intro: "Describe the issue as clearly as possible. The form opens an email draft.",
            sendInstruction: "Review the message and send it from your email application.",
            formHeading: "Request details",
            formNotice: "Fields marked with (*) are required. Do not include passwords, credentials, or other confidential information.",
            reporterName: "Name *",
            reporterEmail: "Email address *",
            organization: "Organization",
            category: "Category *",
            chooseCategory: "Select a category",
            categoryTechnical: "Technical issue",
            categoryAccess: "Access or sign-in",
            categoryReporting: "Reporting or declaration data",
            categoryOnboarding: "Onboarding or guidance",
            categoryOther: "Other",
            environment: "Environment *",
            chooseEnvironment: "Select an environment",
            environmentStg: "Test environment (STG)",
            environmentPrd: "Production environment (PRD)",
            environmentNotApplicable: "Not applicable",
            reference: "Reference, such as a request ID or port call identifier",
            summary: "Short summary *",
            description: "Issue description *",
            descriptionHelp: "Describe what you were doing, what happened, and what you expected to happen.",
            markdownHelp: "The description is treated as Markdown. You can use formatting such as bold text, lists, and code.",
            markdownToolbar: "Formatting tools",
            formatBold: "Bold",
            formatItalic: "Italic",
            formatCode: "Code",
            formatList: "Bulleted list",
            listPlaceholder: "Type here",
            formatLengthError: "Formatting would exceed the maximum description length.",
            createEmail: "Create email draft",
            cancel: "Cancel",
            fallback: "If the email draft does not open, send a message to",
            required: "This field is required.",
            tooLong: "The message is too long to open as an email draft. Shorten the description and try again.",
            emailReady: "The email draft should open in your email application. Review the details and send the message.",
            emailTitle: "NEMO support request",
            emailReporter: "Reporter",
            emailAddress: "Email",
            emailOrganization: "Organization",
            emailCategory: "Category",
            emailEnvironment: "Environment",
            emailReference: "Reference",
            emailSummary: "Short summary",
            emailRequestHeading: "REQUEST DETAILS",
            emailReporterHeading: "REPORTER",
            emailDescriptionHeading: "ISSUE DESCRIPTION"
        }
    };

    const form = document.getElementById("support-form");
    const status = document.getElementById("form-status");
    const languageSelect = document.getElementById("lang-switch");
    const emailAddress = "nemo.support@emsw.fi";

    if (!(form instanceof HTMLFormElement) ||
        !(status instanceof HTMLElement) ||
        !(languageSelect instanceof HTMLSelectElement)) {
        console.error("Support form initialization failed: required page elements are missing.");
        return;
    }

    let language = "fi";

    const translate = (key) => translations[language][key] || translations.en[key] || key;

    const toEmailText = (markdown) => {
        const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
        const output = [];
        let fence = null;

        lines.forEach((sourceLine) => {
            const fenceMarker = sourceLine.match(/^\s*(`{3,}|~{3,})/);
            if (fenceMarker) {
                const marker = fenceMarker[1];
                if (!fence) {
                    fence = { character: marker[0], length: marker.length };
                    return;
                }
                if (marker[0] === fence.character && marker.length >= fence.length) {
                    fence = null;
                    return;
                }
            }

            if (fence) {
                output.push(`    ${sourceLine}`);
                return;
            }

            let line = sourceLine;
            const codeSpans = [];
            line = line.replace(/(`+)(.*?)\1/g, (_match, _ticks, content) => {
                const token = `\u0000${codeSpans.length}\u0000`;
                codeSpans.push(content);
                return token;
            });

            const heading = line.match(/^#{1,6}\s+(.+)$/);
            if (heading) {
                line = heading[1].toLocaleUpperCase(language);
            }

            if (!heading) {
                const quote = line.match(/^\s*>\s?(.*)$/);
                if (quote) {
                    line = `  | ${quote[1]}`;
                }
            }

            if (!heading && !line.startsWith("  | ")) {
                const bullet = line.match(/^(\s*)[-*+]\s+(.*)$/);
                if (bullet) {
                    line = `${bullet[1]}• ${bullet[2]}`;
                }
                line = line.replace(/^(\s*)\d+\.\s+/, "$1• ");
            }

            line = line.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1 ($2)");
            line = line.replace(/\*\*([^*]+)\*\*/g, "$1");
            line = line.replace(/__([^_]+)__/g, "$1");
            line = line.replace(/(^|[^\w])\*([^*\n]+)\*(?!\w)/g, "$1$2");
            line = line.replace(/(^|[^\w])_([^_\n]+)_(?!\w)/g, "$1$2");
            line = line.replace(/\u0000(\d+)\u0000/g, (_match, index) => codeSpans[Number(index)]);
            output.push(line);
        });

        return output.join("\r\n").trim();
    };

    const applyLanguage = (selectedLanguage) => {
        language = Object.hasOwn(translations, selectedLanguage) ? selectedLanguage : "en";
        document.documentElement.lang = language;
        document.title = translate("pageTitle");
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", translate("pageDescription"));
        }
        const homeLink = document.getElementById("hub-home");
        if (homeLink) {
            homeLink.setAttribute("aria-label", translate("home"));
        }
        languageSelect.value = language;
        languageSelect.setAttribute("aria-label", translate("language"));
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            element.textContent = translate(element.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
            const label = translate(element.dataset.i18nAria);
            element.setAttribute("aria-label", label);
            element.setAttribute("title", label);
        });
        status.textContent = "";
        status.classList.remove("error");
    };

    const fieldValue = (name) => {
        const field = form.elements.namedItem(name);
        return field instanceof HTMLInputElement ||
            field instanceof HTMLTextAreaElement ||
            field instanceof HTMLSelectElement
            ? field.value
            : "";
    };

    let savedLanguage = "";
    try {
        savedLanguage = localStorage.getItem("nemo.lang") || "";
    } catch (error) {
        console.warn("Could not read the saved language preference.", error);
    }
    const browserLanguage = (navigator.language || "").slice(0, 2).toLowerCase();
    applyLanguage(Object.hasOwn(translations, savedLanguage) ? savedLanguage : browserLanguage);

    languageSelect.addEventListener("change", () => {
        applyLanguage(languageSelect.value);
        try {
            localStorage.setItem("nemo.lang", language);
        } catch (error) {
            console.warn("Could not save the language preference.", error);
        }
    });

    const descriptionField = form.elements.namedItem("description");
    const supportFields = document.getElementById("support-fields");
    const markdownToolbar = document.querySelector(".markdown-toolbar");
    if (!(descriptionField instanceof HTMLTextAreaElement) ||
        !(supportFields instanceof HTMLFieldSetElement) ||
        !(markdownToolbar instanceof HTMLElement)) {
        console.error("Support form initialization failed: Markdown editor elements are missing.");
        return;
    }

    markdownToolbar.addEventListener("click", (event) => {
        const button = event.target instanceof Element ? event.target.closest("button[data-markdown]") : null;
        if (!(button instanceof HTMLButtonElement)) {
            return;
        }

        const start = descriptionField.selectionStart;
        const end = descriptionField.selectionEnd;
        const currentText = descriptionField.value;
        const selectedText = currentText.slice(start, end);
        const action = button.dataset.markdown;
        let replacement;
        let replaceStart = start;
        let replaceEnd = end;
        let selectionStart;
        let selectionEnd;

        if (action === "list") {
            if (selectedText) {
                replaceStart = currentText.lastIndexOf("\n", start - 1) + 1;
                const lastSelectedCharacter = Math.max(start, end - 1);
                replaceEnd = currentText.indexOf("\n", lastSelectedCharacter);
                if (replaceEnd === -1) {
                    replaceEnd = currentText.length;
                }
                const selectedLines = currentText.slice(replaceStart, replaceEnd);
                replacement = selectedLines.split("\n").map((line) => `- ${line}`).join("\n");
                selectionStart = replaceStart;
                selectionEnd = replaceStart + replacement.length;
            } else {
                replaceStart = currentText.lastIndexOf("\n", start - 1) + 1;
                replaceEnd = currentText.indexOf("\n", start);
                if (replaceEnd === -1) {
                    replaceEnd = currentText.length;
                }
                replacement = `- ${currentText.slice(replaceStart, replaceEnd)}`;
                selectionStart = replaceStart + 2;
                selectionEnd = selectionStart;
            }
        } else {
            const formats = {
                bold: { before: "**", after: "**", placeholder: translate("formatBold") },
                italic: { before: "*", after: "*", placeholder: translate("formatItalic") },
                code: { before: "`", after: "`", placeholder: translate("formatCode") }
            };
            const format = formats[action];
            if (!format) {
                return;
            }

            const content = selectedText || format.placeholder;
            replacement = `${format.before}${content}${format.after}`;
            selectionStart = start + format.before.length;
            selectionEnd = selectionStart + content.length;
        }

        const nextValue = currentText.slice(0, replaceStart) + replacement + currentText.slice(replaceEnd);
        if (nextValue.length > descriptionField.maxLength) {
            status.textContent = translate("formatLengthError");
            status.classList.add("error");
            return;
        }

        status.textContent = "";
        status.classList.remove("error");
        descriptionField.value = nextValue;
        descriptionField.focus();
        descriptionField.setSelectionRange(selectionStart, selectionEnd);
        descriptionField.dispatchEvent(new Event("input", { bubbles: true }));
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        status.textContent = "";
        status.classList.remove("error");

        ["reporterName", "reporterEmail", "category", "environment", "summary", "description"].forEach((name) => {
            const field = form.elements.namedItem(name);
            if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
                field.setCustomValidity(field.value.trim() ? "" : translate("required"));
            } else if (field instanceof HTMLSelectElement) {
                field.setCustomValidity(field.value ? "" : translate("required"));
            }
        });

        if (!form.reportValidity()) {
            return;
        }

        const request = {
            reporterName: fieldValue("reporterName").trim(),
            reporterEmail: fieldValue("reporterEmail").trim(),
            organization: fieldValue("organization").trim(),
            category: fieldValue("category"),
            environment: fieldValue("environment"),
            reference: fieldValue("reference").trim(),
            summary: fieldValue("summary").trim(),
            description: fieldValue("description").trim()
        };
        const subject = `[NEMO_SUPPORT][${request.category}] ${request.summary.replace(/[\r\n]+/g, " ")}`;
        const separator = "----------------------------------------";
        const categoryLabel = {
            technical_issue: translate("categoryTechnical"),
            access: translate("categoryAccess"),
            reporting: translate("categoryReporting"),
            onboarding: translate("categoryOnboarding"),
            other: translate("categoryOther")
        }[request.category] || request.category;
        const body = [
            translate("emailTitle"),
            "========================================",
            "",
            translate("emailRequestHeading"),
            separator,
            `${translate("emailSummary")}: ${request.summary}`,
            `${translate("emailCategory")}: ${categoryLabel} (${request.category})`,
            `${translate("emailEnvironment")}: ${request.environment}`,
            `${translate("emailReference")}: ${request.reference || "-"}`,
            "",
            translate("emailReporterHeading"),
            separator,
            `${translate("emailReporter")}: ${request.reporterName}`,
            `${translate("emailAddress")}: ${request.reporterEmail}`,
            `${translate("emailOrganization")}: ${request.organization || "-"}`,
            "",
            translate("emailDescriptionHeading"),
            separator,
            toEmailText(request.description)
        ].join("\r\n");
        const params = new URLSearchParams({subject, body}).toString().replace(/\+/g, "%20");
        const mailto = `mailto:${emailAddress}?${params}`;

        if (mailto.length > 8000) {
            status.textContent = translate("tooLong");
            status.classList.add("error");
            return;
        }

        window.location.href = mailto;
        status.textContent = translate("emailReady");
    });

    supportFields.disabled = false;
})();
