const JobChecklist = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a2c-7d94-8a1e-1e6ab215f25b"
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
    "job_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the job this checklist item belongs to. This links the checklist item to a specific job in the system.",
      "examples": [
        "123e4567-4a2c-7d94-8a1e-e75edaa1898b"
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
        "123e4567-4a2c-7d94-8a1f-a51ed6d11c8b"
      ]
    },
    "completed_during_checkin_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the job check-in during which this checklist item was completed. This links the checklist completion to a specific check-in event in the job history.",
      "examples": [
        "123e4567-4a2c-7d94-8a1e-02a478b7bdeb"
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
                  ],
                  "description": "`JOB_CREATE_TIME` `NEXT_BOOKING_TIME`"
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "DAY",
                    "HOUR",
                    "MINUTE"
                  ],
                  "description": "`DAY` `HOUR` `MINUTE`"
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
        "123e4567-4a2c-7d94-8a1f-5cd9ba922cdb"
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
        "123e4567-4a2c-7d94-8a1f-e0daf1be591b"
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
        "123e4567-4a2c-7d94-8a1f-d07d508ce2fb"
      ]
    },
    "is_locked": {
      "type": "integer",
      "description": "If this checklist item is locked (read-only) and cannot be modified. This is set by the system when the checklist item is created from a Task or Network Request. (Read only).  Valid values are [0,1]\n\n`0` `1`",
      "enum": [
        0,
        1
      ]
    },
    "assigned_timestamp": {
      "type": "string",
      "description": "The timestamp when the checklist item was assigned to the staff member. (Read only)",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "assigned_by_staff_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "The UUID of the staff member who assigned the checklist item to the staff member. (Read only)",
      "examples": [
        "123e4567-4a2c-7d94-8a1e-e6997afbdc6b"
      ]
    }
  },
  "title": "JobChecklist",
  "x-readme-ref-name": "JobChecklist"
} as const;
export default JobChecklist
