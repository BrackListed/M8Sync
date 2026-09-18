const ListEmailMessages = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "Cursor value for merged email pagination. Use -1 to start a cursor walk."
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1000,
            "default": 1000,
            "description": "Maximum number of records to return."
          },
          "$filter": {
            "type": "string",
            "examples": [
              "direction eq inbound and related_object eq job"
            ],
            "description": "OData filter expression. Supports eq conditions for direction, related_object, and related_object_uuid joined with and."
          }
        }
      }
    ]
  }
} as const;
export default ListEmailMessages
