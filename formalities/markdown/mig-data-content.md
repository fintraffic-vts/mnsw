# MIG Root Note: Data content (MIG-P31 to MIG-P35)

Source reference:
- EMSA MIG: https://emsa.europa.eu/emswe-mig/index.htm
- Chapter: **3.6 Data content**

## Rule summary for implementers and declarants

- **MIG-P31 Date-time information**: Date-time values must follow EMSWe dataset format and include UTC or explicit time zone information.
- **MIG-P32 Unit information**: Measure values must be reported together with DE-001-01 (Measurement unit, coded), using the unit required by the element rule (for example, cargo item net mass with `KGM`).
- **MIG-P33 Unknown data**: For optional elements with unknown value, omit the element completely. Do not use empty string, `0`, or `NULL` as unknown markers.
- **MIG-P34 Use of uppercase and lowercase**:
  - Type `Code`: case sensitive
  - Type `Identifier`: case insensitive
  - Other reported data: case sensitive
- **MIG-P35 Empty strings**: Empty string values (`""`) are not allowed.

## Repository implementation note

- Treat these as validation-level constraints for both XML (AS4/RIM) and JSON (National Declarant API) payloads.
- Build payload generators so unknown optional values are omitted, not serialized as placeholders.
- Ensure code-list value casing is preserved exactly as published.
- Ensure identifier comparisons are case insensitive in matching and correlation logic.

## AI and declarant checklist

1. Serialize all date-time values in EMSWe-compatible format with UTC or explicit offset.
2. Include unit code DE-001-01 whenever reporting a measure.
3. Omit optional elements when value is unknown.
4. Never send empty strings (`""`).
5. Keep code values case exact and treat identifiers as case insensitive.

