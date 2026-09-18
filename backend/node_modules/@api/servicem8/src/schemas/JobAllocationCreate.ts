const JobAllocationCreate = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "The UUID of the job that this allocation relates to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1f-ee10fe078e1b"
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
        "123e4567-4a28-7d94-8a1e-75daa3ecaffb"
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
        "123e4567-4a28-7d94-8a1e-8c5f3c8db92b"
      ]
    },
    "allocated_by_staff_uuid": {
      "description": "The UUID of the staff member who allocated the job.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a28-7d94-8a1f-96c4cd33ad6b"
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
        "123e4567-4a28-7d94-8a1f-7a3c14d5c53b"
      ]
    }
  },
  "title": "JobAllocationCreate",
  "x-readme-ref-name": "JobAllocationCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default JobAllocationCreate
