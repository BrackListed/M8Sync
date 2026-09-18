const Form = {
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
        "123e4567-4a07-7d94-8a1e-10fd452fcd4b"
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
            ],
            "description": "`Text`"
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
        "123e4567-4a07-7d94-8a1f-945101c4490b"
      ]
    },
    "active": {
      "enum": [
        0,
        1
      ],
      "type": "integer",
      "default": 1,
      "description": "Record active/deleted flag.  Valid values are [0,1].  Valid values are [0,1]\n\n`0` `1`"
    },
    "edit_date": {
      "readOnly": true,
      "description": "Timestamp at which record was last modified"
    },
    "badge_name": {
      "type": "string",
      "maxLength": 12
    }
  },
  "title": "Form",
  "x-readme-ref-name": "Form"
} as const;
export default Form
