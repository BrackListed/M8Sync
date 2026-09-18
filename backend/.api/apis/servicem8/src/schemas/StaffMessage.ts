const StaffMessage = {
  "type": "object",
  "properties": {
    "from_staff_uuid": {
      "description": "Unique identifier (UUID) of the staff member who sent this message. Identifies the sender of the communication within the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a5b-7d94-8a1f-9fd917d63f1b"
      ]
    },
    "to_staff_uuid": {
      "description": "Unique identifier (UUID) of the staff member who received this message. Identifies the intended recipient of the communication.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a5b-7d94-8a1f-d8ca704fed9b"
      ]
    },
    "sent_timestamp": {
      "description": "The date and time when the message was sent. Format is YYYY-MM-DD HH:MM:SS. This field is automatically set to the current time when a new message is created.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "delivered_timestamp": {
      "description": "The date and time when the message was delivered to the recipient's device. Format is YYYY-MM-DD HH:MM:SS. This field may be null if delivery confirmation is not available.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "read_timestamp": {
      "description": "The date and time when the message was read by the recipient. Format is YYYY-MM-DD HH:MM:SS. This field may be null if the message has not been read or if read receipts are not available.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "message": {
      "description": "The text content of the message. Supports Unicode characters for international language support. This field contains the actual message being sent between staff members.",
      "type": "string"
    },
    "regarding_job_uuid": {
      "description": "Unique identifier (UUID) of the job this message is related to. Optional field that links the message to a specific job for context. This field may be null if the message is not related to a specific job.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a5c-7d94-8a1e-0093242dcc0b"
      ]
    },
    "attached_json": {
      "description": "JSON metadata associated with the message (e.g., attachments, extra context).",
      "contentMediaType": "application/json",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a5b-7d94-8a1f-87c41b9eba3b"
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
    "attachments": {
      "type": "array",
      "readOnly": true,
      "description": "Read-only metadata for attachments included with the staff message.",
      "items": {
        "type": "object",
        "properties": {
          "attachment_uuid": {
            "type": "string",
            "format": "uuid"
          },
          "type": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "size": {
            "type": "integer"
          }
        },
        "required": [
          "attachment_uuid"
        ]
      }
    }
  },
  "required": [
    "from_staff_uuid",
    "to_staff_uuid"
  ],
  "title": "StaffMessage",
  "x-readme-ref-name": "StaffMessage"
} as const;
export default StaffMessage
