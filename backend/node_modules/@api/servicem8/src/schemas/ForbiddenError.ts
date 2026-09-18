const ForbiddenError = {
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "number",
      "format": "int32",
      "examples": [
        "403"
      ]
    },
    "message": {
      "type": "string",
      "examples": [
        "Access forbidden. You don't have permission to access this resource."
      ]
    }
  },
  "title": "ForbiddenError",
  "x-readme-ref-name": "ForbiddenError",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default ForbiddenError
