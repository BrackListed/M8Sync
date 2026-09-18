const JobChecklistCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a2c-7d94-8a1e-7a7b0e32ef6b"
      ]
    },
    "job_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the job this checklist item belongs to. This links the checklist item to a specific job in the system.",
      "examples": [
        "123e4567-4a2c-7d94-8a1f-a17a0b5b5fdb"
      ]
    },
    "name": {
      "type": "string",
      "description": "The name or description of the checklist item. This is displayed to users in the mobile app and web interface.",
      "maxLength": 512
    },
    "section_name": {
      "type": "string",
      "description": "The section or category name under which this checklist item is grouped. This helps organize related checklist items together.",
      "maxLength": 256
    },
    "item_type": {
      "type": "string",
      "description": "The type of checklist item. Valid values are: 'Todo', 'Asset', 'Photo', 'Form', and 'Document'. Defaults to 'Todo' if not specified. This determines the functionality and appearance of the checklist item."
    },
    "sort_order": {
      "type": "integer",
      "description": "A numeric value determining the order in which checklist items appear in the user interface. Lower values appear first. Used to customize the display sequence of items."
    },
    "completed_timestamp": {
      "type": "string",
      "description": "The date and time when the checklist item was marked as completed. Empty or '0000-00-00 00:00:00' indicates the item is not completed.",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "completed_by_staff_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the staff member who completed this checklist item. References a Staff object. Empty if the item is not completed.",
      "examples": [
        "123e4567-4a2c-7d94-8a1f-38faf5eb6f4b"
      ]
    },
    "completed_during_checkin_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the job check-in during which this checklist item was completed. This links the checklist completion to a specific check-in event in the job history.",
      "examples": [
        "123e4567-4a2c-7d94-8a1e-a084244c771b"
      ]
    },
    "reminder_type": {
      "type": "string",
      "description": "The type of reminder associated with this checklist item. Valid values are: '' (no reminder), 'CHECK_IN', 'NAVIGATE', 'CHECK_OUT', 'ABSOLUTE_DATETIME', or 'RELATIVE_DATETIME'. Determines when the system will remind users about this checklist item."
    },
    "reminder_data": {
      "type": "string",
      "description": "JSON data containing additional information for the reminder. Format depends on the reminder_type. For ABSOLUTE_DATETIME, includes 'absoluteDateTime'. For RELATIVE_DATETIME, includes 'relativeDateTime' with 'baseDate', 'unit', and 'quantity'. Exposed via API as 'reminder_data'.",
      "oneOf": [
        {
          "type": "object",
          "properties": {
            "absoluteDateTime": {
              "type": "string",
              "pattern": "^\\d{4}-\\d{2}-\\d{2}\\ \\d{2}:\\d{2}:\\d{2}$"
            }
          },
          "required": [
            "absoluteDateTime"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "relativeDateTime": {
              "type": "object",
              "properties": {
                "baseDate": {
                  "type": "string",
                  "enum": [
                    "JOB_CREATE_TIME",
                    "NEXT_BOOKING_TIME"
                  ]
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "DAY",
                    "HOUR",
                    "MINUTE"
                  ]
                },
                "quantity": {
                  "type": "integer",
                  "description": "Number of units to add/subtract from base date. Negative quantities mean the reminder occurs before the base date. Reminders scheduled into the past will not occur."
                }
              },
              "required": [
                "baseDate",
                "unit",
                "quantity"
              ]
            }
          },
          "required": [
            "relativeDateTime"
          ],
          "additionalProperties": false
        }
      ]
    },
    "regarding_object": {
      "type": "string",
      "description": "The type of object which this checklist item is related to. For example, for Form checklists, this will be 'Form'."
    },
    "regarding_object_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "The UUID of the object which this checklists item is related to. For example, for Form checklists, this is the UUID of the Form that must be completed to complete the checklist item.",
      "examples": [
        "123e4567-4a2d-7d94-8a1e-553178b8149b"
      ]
    },
    "fulfilled_by_object_name": {
      "type": "string",
      "description": "The type of object which completes this checklist item. For example, for Form checklists, this will be 'FormResponse'."
    },
    "fulfilled_by_object_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "The UUID of the object which completes this checklist item. For example, for Form checklists, this references the UUID of a FormResponse record.",
      "examples": [
        "123e4567-4a2d-7d94-8a1f-9c633748a4db"
      ]
    },
    "assigned_to_staff_uuids": {
      "format": "uuid",
      "type": "array",
      "description": "JSON array of staff UUIDs to whom this checklist item is assigned. Determines which staff members are responsible for completing this checklist item. Currently limited to a maximum of 1 staff member.",
      "items": {
        "type": "string",
        "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$",
        "description": "Must be the UUID of a Staff record"
      },
      "maxItems": 1,
      "examples": [
        "123e4567-4a2d-7d94-8a1f-c4c46f1b41ab"
      ]
    }
  },
  "title": "JobChecklistCreate",
  "x-readme-ref-name": "JobChecklistCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default JobChecklistCreate
