import NotificationCreateResult from './NotificationCreateResult.js';

const NotificationCreateResponse = {
  "type": "object",
  "required": [
    "created",
    "notifications"
  ],
  "properties": {
    "created": {
      "type": "boolean"
    },
    "notifications": {
      "type": "array",
      "items": NotificationCreateResult
    }
  },
  "title": "NotificationCreateResponse",
  "x-readme-ref-name": "NotificationCreateResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default NotificationCreateResponse
