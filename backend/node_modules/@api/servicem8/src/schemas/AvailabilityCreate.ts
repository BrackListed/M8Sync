const AvailabilityCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49ee-7d94-8a1e-0e1ebd8c351b"
      ]
    },
    "regarding_object": {
      "type": "string"
    },
    "regarding_object_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49ee-7d94-8a1e-b0f23cfab8fb"
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
    }
  },
  "title": "AvailabilityCreate",
  "x-readme-ref-name": "AvailabilityCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AvailabilityCreate
