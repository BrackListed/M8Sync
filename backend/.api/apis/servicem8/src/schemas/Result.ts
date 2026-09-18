const Result = {
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "number",
      "format": "int32",
      "examples": [
        "0"
      ]
    },
    "message": {
      "type": "string",
      "examples": [
        "OK"
      ]
    }
  },
  "title": "Result",
  "x-readme-ref-name": "Result",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default Result
