const AuthenticationError = {
  "type": "object",
  "properties": {
    "errorCode": {
      "type": "number",
      "format": "int32",
      "examples": [
        "401"
      ]
    },
    "message": {
      "type": "string",
      "examples": [
        "Authentication failed. Please check your API key or OAuth token."
      ]
    }
  },
  "title": "AuthenticationError",
  "x-readme-ref-name": "AuthenticationError",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AuthenticationError
