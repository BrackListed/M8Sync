const ObjectSearch = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "objectType": {
            "type": "string",
            "enum": [
              "job",
              "company",
              "material",
              "knowledgearticle",
              "attachment",
              "formresponse",
              "asset",
              "materialbundle"
            ],
            "description": "Type of object to search"
          }
        },
        "required": [
          "objectType"
        ]
      },
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "q": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100,
            "examples": [
              "emergency repair"
            ],
            "description": "Search query string"
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100,
            "default": 50,
            "description": "Maximum number of results to return (max 100)"
          }
        },
        "required": [
          "q"
        ]
      }
    ]
  }
} as const;
export default ObjectSearch
