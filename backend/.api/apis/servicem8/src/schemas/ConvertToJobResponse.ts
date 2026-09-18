const ConvertToJobResponse = {
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
        "job_number": {
          "type": "string"
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
  "title": "ConvertToJobResponse",
  "x-readme-ref-name": "ConvertToJobResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default ConvertToJobResponse
