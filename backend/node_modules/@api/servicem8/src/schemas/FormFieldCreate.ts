const FormFieldCreate = {
  "type": "object",
  "properties": {
    "form_uuid": {
      "description": "The UUID of the form this field belongs to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0a-7d94-8a1f-edaeb070f8fb"
      ]
    },
    "name": {
      "description": "The name of the form field.",
      "type": "string"
    },
    "field_data_json": {
      "description": "JSON configuration for this question, including type, mandatory, choices and conditions.",
      "type": "string"
    },
    "sort_order": {
      "description": "The sort order of the form field.",
      "type": "integer"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a0a-7d94-8a1f-912438bde5db"
      ]
    }
  },
  "title": "FormFieldCreate",
  "x-readme-ref-name": "FormFieldCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default FormFieldCreate
