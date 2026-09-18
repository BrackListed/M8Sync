const JobAdminActivity = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a25-7d94-8a1e-e009d1b7f1bb"
      ]
    },
    "job_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "The UUID of the job this admin activity belongs to (Read only)",
      "examples": [
        "123e4567-4a25-7d94-8a1e-b9edda71896b"
      ]
    },
    "staff_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "The UUID of the staff member who recorded this admin activity (Read only)",
      "examples": [
        "123e4567-4a25-7d94-8a1e-a8ff2125ce2b"
      ]
    },
    "activity_date": {
      "type": "string",
      "description": "The raw database date and time this admin activity was recorded for (Read only)",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "activity_seconds": {
      "type": "integer",
      "description": "The duration of the admin activity in seconds (Read only)"
    }
  },
  "title": "JobAdminActivity",
  "x-readme-ref-name": "JobAdminActivity"
} as const;
export default JobAdminActivity
