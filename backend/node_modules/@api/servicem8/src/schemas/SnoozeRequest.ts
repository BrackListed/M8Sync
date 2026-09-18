const SnoozeRequest = {
  "type": "object",
  "properties": {
    "snooze_until": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time",
      "description": "ISO 8601 datetime to snooze until, or null to unsnooze"
    },
    "note": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "title": "SnoozeRequest",
  "x-readme-ref-name": "SnoozeRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default SnoozeRequest
