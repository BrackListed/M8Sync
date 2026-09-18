const DocumentTemplateCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49ff-7d94-8a1e-7b4e495f40eb"
      ]
    },
    "name": {
      "type": "string"
    }
  },
  "title": "DocumentTemplateCreate",
  "x-readme-ref-name": "DocumentTemplateCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default DocumentTemplateCreate
