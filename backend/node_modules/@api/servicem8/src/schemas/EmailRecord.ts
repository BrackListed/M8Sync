const EmailRecord = {
  "type": "object",
  "required": [
    "uuid",
    "related_object",
    "related_object_uuid",
    "timestamp",
    "direction",
    "sent_by_staff_uuid",
    "opened",
    "first_opened_at",
    "bounced",
    "to_email",
    "cc_email",
    "bcc_email",
    "from_email",
    "subject",
    "message_text",
    "message_html",
    "attachment_uuids"
  ],
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid"
    },
    "related_object": {
      "type": "string",
      "enum": [
        "job"
      ],
      "description": "`job`"
    },
    "related_object_uuid": {
      "type": "string",
      "format": "uuid"
    },
    "timestamp": {
      "type": "string",
      "description": "Account-local datetime string in YYYY-MM-DD HH:MM:SS format.",
      "examples": [
        "2026-04-20 14:32:11"
      ]
    },
    "direction": {
      "type": "string",
      "enum": [
        "inbound",
        "outbound"
      ],
      "description": "`inbound` `outbound`"
    },
    "sent_by_staff_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "opened": {
      "type": [
        "boolean",
        "null"
      ],
      "description": "Whether an outbound email has been opened. Null for inbound email records."
    },
    "first_opened_at": {
      "type": [
        "string",
        "null"
      ],
      "description": "Account-local datetime string in YYYY-MM-DD HH:MM:SS format for the first tracked open of an outbound email. Null when unopened or not applicable.",
      "examples": [
        "2026-04-20 14:35:02"
      ]
    },
    "bounced": {
      "type": [
        "boolean",
        "null"
      ],
      "description": "Whether an outbound email has bounced. Null for inbound email records."
    },
    "to_email": {
      "type": [
        "array",
        "null"
      ],
      "items": {
        "type": "string",
        "format": "email"
      }
    },
    "cc_email": {
      "type": [
        "array",
        "null"
      ],
      "items": {
        "type": "string",
        "format": "email"
      }
    },
    "bcc_email": {
      "type": [
        "array",
        "null"
      ],
      "items": {
        "type": "string",
        "format": "email"
      }
    },
    "from_email": {
      "type": [
        "string",
        "null"
      ]
    },
    "subject": {
      "type": "string"
    },
    "message_text": {
      "type": "string"
    },
    "message_html": {
      "type": "string"
    },
    "attachment_uuids": {
      "type": "array",
      "items": {
        "type": "string",
        "format": "uuid"
      }
    }
  },
  "title": "EmailRecord",
  "x-readme-ref-name": "EmailRecord"
} as const;
export default EmailRecord
