const UpdateCategories = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "format": "uuid",
            "description": "UUID of the Category"
          }
        },
        "required": [
          "uuid"
        ]
      }
    ]
  }
} as const;
export default UpdateCategories
