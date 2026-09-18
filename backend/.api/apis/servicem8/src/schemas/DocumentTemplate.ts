const DocumentTemplate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49ff-7d94-8a1f-676c8ac4ecfb"
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
    },
    "template_type": {
      "type": "string",
      "description": "(Read only)"
    },
    "related_object": {
      "type": "string",
      "description": "(Read only)"
    },
    "name": {
      "type": "string"
    }
  },
  "title": "DocumentTemplate",
  "x-readme-ref-name": "DocumentTemplate"
} as const;
export default DocumentTemplate
