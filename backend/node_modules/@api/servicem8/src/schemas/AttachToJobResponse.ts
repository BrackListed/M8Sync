const AttachToJobResponse = {
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean"
    },
    "job": {
      "type": "object",
      "properties": {
        "uuid": {
          "type": "string",
          "format": "uuid"
        },
        "id": {
          "type": "integer"
        },
        "location": {
          "type": "string"
        }
      }
    },
    "message": {
      "type": "string"
    }
  },
  "title": "AttachToJobResponse",
  "x-readme-ref-name": "AttachToJobResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AttachToJobResponse
