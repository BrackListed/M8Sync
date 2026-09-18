const QueueCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a4e-7d94-8a1e-1fb1afca58ab"
      ]
    },
    "name": {
      "type": "string",
      "description": "Name of the job queue. Used to identify the queue in the system. Examples include 'Workshop', 'Pending Quotes', etc."
    },
    "default_timeframe": {
      "type": "integer",
      "description": "Default number of days that jobs should remain in this queue before requiring attention. Common values are 7 days (1 week) or 14 days (2 weeks)."
    },
    "subscribed_staff": {
      "type": "string",
      "description": "Semicolon-delimited list of staff UUIDs who are subscribed to receive notifications for this queue."
    },
    "requires_assignment": {
      "type": "integer",
      "description": "Determines if jobs in this queue require assignment to staff members. If true, jobs must be explicitly assigned to staff. If false, jobs are visible to all staff..  Valid values are [0,1]",
      "enum": [
        0,
        1
      ]
    }
  },
  "title": "QueueCreate",
  "x-readme-ref-name": "QueueCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default QueueCreate
