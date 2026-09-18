const ListSmsMessages = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "cursor": {
            "type": "string",
            "description": "Cursor value for merged SMS pagination. Use -1 to start a cursor walk."
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
              "direction eq inbound and related_object_uuid eq 5a2b1c0d-1234-4abc-9def-000000000001"
            ],
            "description": "Limited OData filter. Supported fields: direction, related_object (job only), related_object_uuid. Conditions must use eq and may be joined with and."
          }
        }
      }
    ]
  }
} as const;
export default ListSmsMessages
