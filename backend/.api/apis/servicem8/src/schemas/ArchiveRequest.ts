const ArchiveRequest = {
  "type": "object",
  "properties": {
    "archived": {
      "type": "boolean",
      "default": true
    },
    "reason": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "title": "ArchiveRequest",
  "x-readme-ref-name": "ArchiveRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default ArchiveRequest
