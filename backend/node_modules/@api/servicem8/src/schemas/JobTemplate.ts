const JobTemplate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a3a-7d94-8a1f-796a56fb8e5b"
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
    "name": {
      "type": "string",
      "description": "Name of the job template. Read-only in API. (Read only)"
    }
  },
  "title": "JobTemplate",
  "x-readme-ref-name": "JobTemplate"
} as const;
export default JobTemplate
