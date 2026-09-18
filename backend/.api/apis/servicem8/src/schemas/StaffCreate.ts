const StaffCreate = {
  "type": "object",
  "properties": {
    "first": {
      "description": "Staff First Name",
      "type": "string",
      "maxLength": 30
    },
    "last": {
      "description": "Staff Last Name",
      "type": "string",
      "maxLength": 30
    },
    "email": {
      "description": "Staff Email Address. This is also your login name.",
      "format": "email",
      "type": "string"
    },
    "mobile": {
      "description": "Mobile phone number of the staff member. Used for SMS communications and identification when calling.",
      "type": "string"
    },
    "lng": {
      "description": "Longitude coordinate of the staff member's current or last known location. Used for tracking staff locations and calculating routes and travel distances.",
      "type": "number",
      "format": "float"
    },
    "lat": {
      "description": "Latitude coordinate of the staff member's current or last known location. Used for tracking staff locations and calculating routes and travel distances.",
      "type": "number",
      "format": "float"
    },
    "geo_timestamp": {
      "description": "The date and time when the staff member's geographic location (lat/lng) was last updated. Format is YYYY-MM-DD HH:MM:SS. Used to determine how recent the location data is.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "job_title": {
      "description": "The staff member's job title or role within the organization. Used for organizational purposes and displayed in various places throughout the system.",
      "type": "string"
    },
    "navigating_to_job_uuid": {
      "description": "UUID of the job the staff member is currently navigating to. Used to track which job a staff member is traveling toward.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a58-7d94-8a1f-65143b5592bb"
      ]
    },
    "navigating_timestamp": {
      "description": "The date and time when the staff member started navigating to a job. Format is YYYY-MM-DD HH:MM:SS. Used to track when navigation began.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "navigating_expiry_timestamp": {
      "description": "The date and time when navigation to a job is expected to complete or expire. Format is YYYY-MM-DD HH:MM:SS. Used to determine if navigation is still active.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "color": {
      "description": "The color assigned to this staff member, represented as a hex color code. Used for visual identification in the schedule, dispatch board, and other interfaces.",
      "type": "string"
    },
    "custom_icon_url": {
      "readOnly": true,
      "description": "URL for the staff member's custom icon image. This is served by CustomStaffSprite and returns the uploaded PNG custom image when one has been set, otherwise it falls back to the generated staff icon. Uploaded custom icons must be 512x512 pixels or smaller.",
      "type": "string"
    },
    "status_message": {
      "description": "Short message summarising the staff's current status.",
      "type": "string"
    },
    "status_message_timestamp": {
      "description": "The date and time when the staff member's status message was last updated. Format is YYYY-MM-DD HH:MM:SS. Used to determine how recent the status message is.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "hide_from_schedule": {
      "description": "Boolean flag controlling whether this staff member appears in the schedule view. When true (1), the staff member is hidden from the schedule. When false (0), they appear normally in scheduling interfaces..  Valid values are [0,1]",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a58-7d94-8a1e-56fba394d42b"
      ]
    },
    "can_receive_push_notification": {
      "type": "string"
    },
    "security_role_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a58-7d94-8a1e-ae70dc74038b"
      ]
    },
    "labour_material_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "The default labour rate to apply to job time recorded by this staff member.",
      "examples": [
        "123e4567-4a59-7d94-8a1f-506e342ddf4b"
      ]
    }
  },
  "required": [
    "first",
    "last"
  ],
  "title": "StaffCreate",
  "x-readme-ref-name": "StaffCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default StaffCreate
