const AddonDiaryItemCreateResponse = {
  "type": "object",
  "required": [
    "created",
    "uuid"
  ],
  "properties": {
    "created": {
      "type": "boolean",
      "examples": [
        true
      ]
    },
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the created immutable Diary item."
    }
  },
  "title": "AddonDiaryItemCreateResponse",
  "x-readme-ref-name": "AddonDiaryItemCreateResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AddonDiaryItemCreateResponse
