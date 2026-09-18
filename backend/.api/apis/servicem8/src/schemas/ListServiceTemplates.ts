import ServiceTemplate from './ServiceTemplate.js';

const ListServiceTemplates = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "Set to -1 on the first request to enable cursor pagination. Use the x-next-cursor response header value for the next page."
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 999,
            "description": "Maximum records to return when cursor pagination is enabled."
          },
          "$filter": {
            "type": "string",
            "description": "OData-style filter on top-level Service fields."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": ServiceTemplate,
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListServiceTemplates
