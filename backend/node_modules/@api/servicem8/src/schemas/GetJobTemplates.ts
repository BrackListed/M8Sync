const GetJobTemplates = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "format": "uuid",
            "description": "UUID of the Job Template"
          }
        },
        "required": [
          "uuid"
        ]
      }
    ]
  }
} as const;
export default GetJobTemplates
