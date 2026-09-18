const JobActivity = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "The UUID of the job this activity belongs to",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a22-7d94-8a1f-f9e41a3afcab"
      ]
    },
    "staff_uuid": {
      "description": "The UUID of the staff member assigned to this activity",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a22-7d94-8a1f-074488ad3b0b"
      ]
    },
    "start_date": {
      "description": "The scheduled start date and time of the activity",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "end_date": {
      "description": "The scheduled end date and time of the activity",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "activity_was_scheduled": {
      "description": "Boolean flag indicating whether this activity was scheduled in advance. Cannot be true if activity_was_recorded is true.",
      "type": "string"
    },
    "activity_was_recorded": {
      "description": "Boolean flag indicating whether this activity was recorded after completion rather than scheduled in advance. Cannot be true if activity_was_scheduled is true.",
      "type": "string"
    },
    "activity_was_automated": {
      "description": "Integer flag indicating if the activity was automated: 0",
      "type": "string"
    },
    "has_been_opened": {
      "description": "Boolean flag indicating whether the assigned staff member has viewed this job activity. Resets to false if the staff member or start time is changed. Only relevant when activity_was_scheduled is true.",
      "type": "string"
    },
    "has_been_opened_timestamp": {
      "description": "The date and time when the assigned staff member first viewed this job activity. Format is YYYY-MM-DD HH:MM:SS. Resets when staff member or start time is changed. Only relevant when activity_was_scheduled is true.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "travel_time_in_seconds": {
      "description": "The estimated travel time to reach this activity location in seconds",
      "type": "integer"
    },
    "travel_distance_in_meters": {
      "description": "The estimated travel distance to reach this activity location in meters",
      "type": "integer"
    },
    "allocated_by_staff_uuid": {
      "description": "DEPRECATED"
    },
    "allocated_timestamp": {
      "description": "DEPRECATED"
    },
    "material_uuid": {
      "description": "The UUID of the material associated with this activity. Used to determine the cost of the activity.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a22-7d94-8a1f-ceaa88c7f42b"
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a22-7d94-8a1e-8792ff2d145b"
      ]
    },
    "active": {
      "enum": [
        0,
        1
      ],
      "type": "integer",
      "default": 1,
      "description": "Record active/deleted flag.  Valid values are [0,1].  Valid values are [0,1]\n\n`0` `1`"
    },
    "edit_date": {
      "readOnly": true,
      "description": "Timestamp at which record was last modified"
    },
    "edit_by_staff_uuid": {
      "format": "uuid",
      "readOnly": true,
      "description": "UUID of Staff Member who last modified record"
    }
  },
  "title": "JobActivity",
  "x-readme-ref-name": "JobActivity"
} as const;
export default JobActivity
