const ListInboxMessages = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 500,
            "default": 50,
            "description": "Maximum number of messages to return (1-500)"
          },
          "offset": {
            "type": "integer",
            "minimum": 0,
            "default": 0,
            "description": "Number of messages to skip for pagination"
          },
          "filter": {
            "type": "string",
            "enum": [
              "all",
              "unread",
              "archived",
              "snoozed"
            ],
            "default": "all",
            "description": "Filter messages by status"
          },
          "search": {
            "type": "string",
            "description": "Search messages by subject, from name, or from email"
          }
        }
      }
    ]
  }
} as const;
export default ListInboxMessages
