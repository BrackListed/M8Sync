const ConvertToJobRequest = {
  "type": "object",
  "properties": {
    "template_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "note": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "title": "ConvertToJobRequest",
  "x-readme-ref-name": "ConvertToJobRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default ConvertToJobRequest
