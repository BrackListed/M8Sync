const NotFoundError = {
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "number",
      "format": "int32",
      "examples": [
        "404"
      ]
    },
    "message": {
      "type": "string",
      "examples": [
        "Resource not found. The requested record does not exist or has been deleted."
      ]
    }
  },
  "title": "NotFoundError",
  "x-readme-ref-name": "NotFoundError",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default NotFoundError
