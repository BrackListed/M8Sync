const NoteCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a4b-7d94-8a1f-d27a43e3fccb"
      ]
    },
    "related_object": {
      "type": "string"
    },
    "related_object_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a4b-7d94-8a1f-2d4e90fb9ceb"
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
        "123e4567-4a4b-7d94-8a1f-33fde07bf70b"
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
  "title": "NoteCreate",
  "x-readme-ref-name": "NoteCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default NoteCreate
