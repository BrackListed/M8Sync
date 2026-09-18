const DeleteServiceTemplate = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "format": "uuid",
            "description": "Service UUID"
          }
        },
        "required": [
          "uuid"
        ]
      }
    ]
  }
} as const;
export default DeleteServiceTemplate
