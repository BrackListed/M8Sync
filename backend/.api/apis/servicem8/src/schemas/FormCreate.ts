const FormCreate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "The name of the form. Used to identify the form in the system and displayed to users in the form selector. Must be unique within an account. Maximum length is 255 characters.",
      "type": "string"
    },
    "document_template_uuid": {
      "description": "UUID of the document template associated with this form. The template defines the layout and appearance of the form when it's generated as a document. References a document template object in the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a08-7d94-8a1e-2576ff3ee93b"
      ]
    },
    "can_be_used_independently": {
      "description": "Boolean flag indicating whether this form can be used independently of a job. When set to true (1), the form can be filled out as a standalone form. When false (0), the form must be associated with a job to be completed.",
      "type": "string"
    },
    "badge_mandatory_state": {
      "description": "Controls when badge completion is mandatory for this form. Valid values are: 0 (not mandatory), 1 (mandatory on check-in), 2 (mandatory on check-out). This determines at which stage in the job lifecycle a staff member must complete this form.",
      "type": "string"
    },
    "template_fields": {
      "description": "JSON array of template fields that are used when generating form documents. Each field contains a name, fieldType, value, and sortOrder. Maximum of 10 fields allowed.",
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "fieldType": {
            "type": "string",
            "enum": [
              "Text"
            ]
          },
          "value": {
            "type": "string"
          },
          "sortOrder": {
            "type": "integer"
          }
        },
        "required": [
          "name",
          "fieldType",
          "value",
          "sortOrder"
        ]
      },
      "minItems": 0,
      "maxItems": 10
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a08-7d94-8a1e-4dc8ba474f4b"
      ]
    },
    "badge_name": {
      "type": "string",
      "maxLength": 12
    }
  },
  "title": "FormCreate",
  "x-readme-ref-name": "FormCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default FormCreate
