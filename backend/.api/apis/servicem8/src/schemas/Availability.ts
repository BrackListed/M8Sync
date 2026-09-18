const Availability = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49ee-7d94-8a1e-f59d74a9dd2b"
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
    "regarding_object": {
      "type": "string"
    },
    "regarding_object_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49ee-7d94-8a1f-2cc6742116cb"
      ]
    },
    "name": {
      "type": "string"
    },
    "availability_type": {
      "type": "string"
    },
    "start_timestamp": {
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "end_timestamp": {
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "source": {
      "type": "string",
      "description": "Origin of this availability record. (Read only)"
    }
  },
  "title": "Availability",
  "x-readme-ref-name": "Availability"
} as const;
export default Availability
