const FormField = {
  "type": "object",
  "properties": {
    "form_uuid": {
      "description": "The UUID of the form this field belongs to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0a-7d94-8a1f-218a7307a93b"
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
        "123e4567-4a0a-7d94-8a1e-079ab784076b"
      ]
    },
    "active": {
      "enum": [
        0,
        1
      ],
      "type": "integer",
      "default": 1,
      "description": "Record active/deleted flag.  Valid values are [0,1]\n\n`0` `1`"
    },
    "edit_date": {
      "readOnly": true,
      "description": "Timestamp at which record was last modified"
    }
  },
  "title": "FormField",
  "x-readme-ref-name": "FormField"
} as const;
export default FormField
