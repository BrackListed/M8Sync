const JobEmbeddingSearch = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "q": {
            "type": "string",
            "minLength": 1,
            "examples": [
              "replace hot water system"
            ],
            "description": "Search query string"
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 50,
            "default": 10,
            "description": "Maximum number of results to return (max 50)"
          },
          "similarity_threshold": {
            "type": "number",
            "format": "float",
            "minimum": 0,
            "maximum": 1,
            "default": 0.7,
            "description": "Minimum similarity score (0.0 to 1.0)"
          }
        },
        "required": [
          "q"
        ]
      }
    ]
  }
} as const;
export default JobEmbeddingSearch
