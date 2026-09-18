const SmsRecord = {
  "type": "object",
  "required": [
    "uuid",
    "related_object",
    "related_object_uuid",
    "timestamp",
    "direction",
    "message"
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
      "description": "Account-local MySQL datetime string.",
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
    "to_phone": {
      "type": [
        "string",
        "null"
      ]
    },
    "from_phone": {
      "type": [
        "string",
        "null"
      ]
    },
    "message": {
      "type": "string"
    }
  },
  "title": "SMSRecord",
  "x-readme-ref-name": "SMSRecord"
} as const;
export default SmsRecord
