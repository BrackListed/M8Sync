import InboxMessage from './InboxMessage.js';

const InboxMessagesResponse = {
  "type": "object",
  "properties": {
    "messages": {
      "type": "array",
      "items": InboxMessage
    },
    "pagination": {
      "type": "object",
      "properties": {
        "offset": {
          "type": "integer"
        },
        "limit": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        },
        "has_more": {
          "type": "boolean"
        }
      }
    }
  },
  "title": "InboxMessagesResponse",
  "x-readme-ref-name": "InboxMessagesResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default InboxMessagesResponse
