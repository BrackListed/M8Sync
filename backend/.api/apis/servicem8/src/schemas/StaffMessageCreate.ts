const StaffMessageCreate = {
  "type": "object",
  "properties": {
    "from_staff_uuid": {
      "description": "Unique identifier (UUID) of the staff member who sent this message. Identifies the sender of the communication within the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a5c-7d94-8a1f-806e6ce5637b"
      ]
    },
    "to_staff_uuid": {
      "description": "Unique identifier (UUID) of the staff member who received this message. Identifies the intended recipient of the communication.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a5c-7d94-8a1e-aaff477ab47b"
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
        "123e4567-4a5c-7d94-8a1e-fcded62d5c8b"
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
        "123e4567-4a5c-7d94-8a1f-0da7783a638b"
      ]
    },
    "attachment_uuids": {
      "type": "array",
      "description": "References to existing, fully-uploaded attachments.",
      "items": {
        "type": "string",
        "format": "uuid"
      }
    }
  },
  "required": [
    "from_staff_uuid",
    "to_staff_uuid"
  ],
  "title": "StaffMessageCreate",
  "x-readme-ref-name": "StaffMessageCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default StaffMessageCreate
