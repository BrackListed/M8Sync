const JobAllocation = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "The UUID of the job that this allocation relates to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1e-a6a0df01b2ab"
      ]
    },
    "queue_uuid": {
      "description": "DEPRECATED"
    },
    "staff_uuid": {
      "description": "The UUID of the staff member this job is allocated to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1e-a4981abb3f6b"
      ]
    },
    "allocation_date": {
      "description": "The minimum start date for a job allocation to be completed by a staff member. Setting this date will ensure the job allocation appears in the future on staff schedules.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "allocation_window_uuid": {
      "description": "The UUID of the allocation window that defines when the job should be completed (e.g. Urgent, Early Morning, During Business Hours).",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1e-ec9ad0b20d7b"
      ]
    },
    "allocated_by_staff_uuid": {
      "description": "The UUID of the staff member who allocated the job.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1f-fc57491493bb"
      ]
    },
    "allocated_timestamp": {
      "description": "The timestamp when the job was allocated.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "expiry_timestamp": {
      "description": "The timestamp when the job allocation expires.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "read_timestamp": {
      "description": "The timestamp when the job allocation was read by the staff member.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "completion_timestamp": {
      "description": "The timestamp when the job allocation was marked as completed.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "estimated_duration": {
      "description": "DEPRECATED"
    },
    "revised_duration": {
      "description": "DEPRECATED"
    },
    "sort_priority": {
      "description": "The sort priority for displaying this job allocation.",
      "type": "string"
    },
    "requires_acceptance": {
      "description": "DEPRECATED"
    },
    "acceptance_status": {
      "description": "DEPRECATED"
    },
    "acceptance_timestamp": {
      "description": "DEPRECATED"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1f-3ba43990584b"
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
    }
  },
  "title": "JobAllocation",
  "x-readme-ref-name": "JobAllocation"
} as const;
export default JobAllocation
