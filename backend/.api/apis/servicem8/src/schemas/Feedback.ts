const Feedback = {
  "type": "object",
  "properties": {
    "timestamp": {
      "description": "Date and time when the feedback was submitted",
      "type": "string"
    },
    "related_object": {
      "description": "Type of object this feedback relates to (usually 'job' or 'vendor')",
      "type": "string"
    },
    "related_object_uuid": {
      "description": "UUID of the specific object this feedback is about, corresponding to the object type specified in related_object",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a04-7d94-8a1f-5326fdb9217b"
      ]
    },
    "rating": {
      "description": "Numeric rating value for the feedback, between 1-5 where higher values represent more positive feedback",
      "type": "string"
    },
    "comment": {
      "description": "Text comments provided with the feedback",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a04-7d94-8a1e-9d2ec0673dfb"
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
  "title": "Feedback",
  "x-readme-ref-name": "Feedback"
} as const;
export default Feedback
