# MIG Root Note: Data Structures of Formalities

Source reference:
- EMSA MIG: https://emsa.europa.eu/emswe-mig/index.htm
- Chapter: **6. Data structures of formalities**

## Important envelope rule (applies to XML and JSON)

The descriptions of the data structure of each formality and of the header MAI are provided in page "Formalities". Each formality message must include the header MAI and the formality content (e.g. NOA, HZA). Messages may include as well one or several binary attachment files, if this is allowed by the MNSW for the specified formality. An exception is the case of withdrawal of a formality, where the formality message only includes the header MAI.

## Repository implementation note

- This rule is treated as protocol-level behavior for both payload formats:
  - XML transport path: AS4/RIM
  - JSON transport path: National Declarant API
- JSON schemas and XSD references include MAI as part of the message structure.
- For withdrawal messages, only MAI is included in the formality message content.

## AI and declarant checklist

1. Always start from MAI + target formality content for normal submissions.
2. Add attachments only when allowed by MNSW for that formality.
3. For withdrawal handling, build message content as MAI-only.
4. Validate envelope behavior consistently in both JSON and XML flows.
