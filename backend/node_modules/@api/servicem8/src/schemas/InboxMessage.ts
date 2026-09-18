const InboxMessage = {
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid"
    },
    "active": {
      "type": "boolean"
    },
    "edit_date": {
      "type": "string",
      "format": "date-time"
    },
    "timestamp": {
      "type": "string",
      "format": "date-time"
    },
    "read_timestamp": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "last_reply_timestamp": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "snooze_until_timestamp": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "read_by_staff_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "from_name": {
      "type": "string"
    },
    "from_email": {
      "type": "string"
    },
    "to_email": {
      "type": "string"
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
    "is_archived": {
      "type": "boolean"
    },
    "archived_timestamp": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "archived_by_staff_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "regarding_company_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "converted_to_job_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "job_template_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid"
    },
    "message_type": {
      "type": "string",
      "enum": [
        "email",
        "sms",
        "online_booking",
        "phone_call",
        "reminder",
        "form",
        "network_request",
        "supplier_invoice",
        "asset",
        "partner_lead",
        "automation"
      ],
      "description": "`email` `sms` `online_booking` `phone_call` `reminder` `form` `network_request` `supplier_invoice` `asset` `partner_lead` `automation`"
    }
  },
  "title": "InboxMessage",
  "x-readme-ref-name": "InboxMessage"
} as const;
export default InboxMessage
