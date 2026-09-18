const GeneralSearch = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "q": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "examples": [
              "plumbing repair"
            ],
            "description": "Search query string"
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 50,
            "default": 20,
            "description": "Maximum number of results to return (max 50)"
          }
        },
        "required": [
          "q"
        ]
      }
    ]
  }
} as const;
export default GeneralSearch
