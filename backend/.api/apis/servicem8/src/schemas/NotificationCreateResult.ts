const NotificationCreateResult = {
  "type": "object",
  "required": [
    "uuid",
    "recipient_staff_uuid"
  ],
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid"
    },
    "recipient_staff_uuid": {
      "type": "string",
      "format": "uuid"
    }
  },
  "title": "NotificationCreateResult",
  "x-readme-ref-name": "NotificationCreateResult"
} as const;
export default NotificationCreateResult
