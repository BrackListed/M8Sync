const Error = {
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "number",
      "format": "int32",
      "examples": [
        "1000"
      ]
    },
    "message": {
      "type": "string",
      "examples": [
        "An error occurred completing your request"
      ]
    }
  },
  "title": "Error",
  "x-readme-ref-name": "Error",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default Error
