const Task = {
  "type": "object",
  "properties": {
    "due_date": {
      "description": "The date by which the task should be completed. Format is YYYY-MM-DD. For mobile app compatibility, may be returned with time component (HHMMSS) in some contexts.",
      "type": "string",
      "examples": [
        "YYYY-MM-DD"
      ]
    },
    "task_details": {
      "description": "Detailed description of the task. Contains more comprehensive information about what needs to be done, how to complete the task, or any other relevant notes.",
      "type": "string"
    },
    "name": {
      "description": "The name or title of the task. This field is mandatory and used to identify the task in listings and the user interface.",
      "type": "string"
    },
    "related_object": {
      "description": "The name of the object class this task is related to. Must be a valid object class name in the system (e.g., 'job', 'client', etc.). The value is always stored as lowercase regardless of input case.",
      "type": "string"
    },
    "related_object_uuid": {
      "description": "UUID of the specific object instance this task is related to. Must be a valid UUID corresponding to an existing object of the type specified in related_object.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a62-7d94-8a1f-dc2ab15ea97b"
      ]
    },
    "task_complete": {
      "description": "Boolean flag indicating whether the task has been completed (1) or is still pending (0). When set to 1, the completed_timestamp and completed_by_staff_uuid fields are automatically populated.",
      "type": "string"
    },
    "completed_timestamp": {
      "description": "The date and time when the task was marked as complete. Format is YYYY-MM-DD HH:MM:SS. Automatically set when task_complete is changed to 1.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "completed_by_staff_uuid": {
      "description": "UUID of the staff member who marked the task as complete. Automatically set to the current staff member's UUID when task_complete is changed to 1.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a62-7d94-8a1e-0dc47964ae0b"
      ]
    },
    "assigned_to_staff_uuid": {
      "description": "UUID of the staff member assigned to complete this task. Must be a valid staff UUID in the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a62-7d94-8a1f-bd7ba7199acb"
      ]
    },
    "lng": {
      "description": "DEPRECATED"
    },
    "lat": {
      "description": "DEPRECATED"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a62-7d94-8a1f-f55ad59f03eb"
      ]
    },
    "active": {
      "enum": [
        0,
        1
      ],
      "type": "integer",
      "default": 1,
      "description": "Record active/deleted flag.  Valid values are [0,1]\n\n`0` `1`"
    },
    "edit_date": {
      "readOnly": true,
      "description": "Timestamp at which record was last modified"
    },
    "created_by_staff_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a62-7d94-8a1f-c386d92a50fb"
      ]
    },
    "create_date": {
      "description": "Timestamp at which record was last modified"
    }
  },
  "required": [
    "name"
  ],
  "title": "Task",
  "x-readme-ref-name": "Task"
} as const;
export default Task
