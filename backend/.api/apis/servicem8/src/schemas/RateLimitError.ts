const RateLimitError = {
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "number",
      "format": "int32",
      "examples": [
        "429"
      ]
    },
    "message": {
      "type": "string",
      "examples": [
        "Number of allowed API requests per minute exceeded"
      ]
    }
  },
  "title": "RateLimitError",
  "x-readme-ref-name": "RateLimitError",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default RateLimitError
