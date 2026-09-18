const CreateJobFromTemplate = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "format": "uuid",
            "examples": [
              "550e8400-e29b-41d4-a716-446655440000"
            ],
            "description": "UUID of the job template to clone from"
          }
        },
        "required": [
          "uuid"
        ]
      }
    ]
  },
  "response": {
    "201": {
      "type": "object",
      "properties": {
        "jobUUID": {
          "type": "string",
          "format": "uuid",
          "description": "UUID of the created job"
        },
        "location": {
          "type": "string",
          "description": "API path to the created job resource"
        },
        "message": {
          "type": "string",
          "description": "Success message"
        }
      },
      "required": [
        "jobUUID",
        "location",
        "message"
      ],
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default CreateJobFromTemplate
