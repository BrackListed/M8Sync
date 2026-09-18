const NotificationCreateRequest = {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "recipient_staff_uuids",
    "message"
  ],
  "properties": {
    "recipient_staff_uuids": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string",
        "format": "uuid"
      }
    },
    "message": {
      "type": "string",
      "description": "Notification message. Supports a limited HTML subset: b, i, br."
    },
    "title": {
      "type": "string",
      "description": "Optional notification title. HTML is not supported."
    },
    "destination_url": {
      "type": "string",
      "description": "Supported servicem8:// route: job/{uuid}, job/{uuid}/diary, or inbox/{uuid}.",
      "examples": [
        "servicem8://job/550e8400-e29b-41d4-a716-446655440001"
      ]
    },
    "urgency": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    }
  },
  "title": "NotificationCreateRequest",
  "x-readme-ref-name": "NotificationCreateRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default NotificationCreateRequest
