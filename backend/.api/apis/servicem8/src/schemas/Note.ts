const Note = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a4b-7d94-8a1f-ecf8456058bb"
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
    "related_object": {
      "type": "string"
    },
    "related_object_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a4b-7d94-8a1e-b4ce9e8dcffb"
      ]
    },
    "note": {
      "type": "string"
    },
    "action_required": {
      "type": "string"
    },
    "action_completed_by_staff_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a4b-7d94-8a1f-aa8bc4f4069b"
      ]
    },
    "edit_by_staff_uuid": {
      "format": "uuid",
      "readOnly": true,
      "description": "UUID of Staff Member who last modified record"
    },
    "create_date": {
      "description": "Timestamp at which record was last modified"
    }
  },
  "title": "Note",
  "x-readme-ref-name": "Note",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default Note
