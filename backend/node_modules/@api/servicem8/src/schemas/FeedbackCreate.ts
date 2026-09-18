const FeedbackCreate = {
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
        "123e4567-4a04-7d94-8a1f-1f387c97087b"
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
        "123e4567-4a04-7d94-8a1e-014d935a6b6b"
      ]
    }
  },
  "title": "FeedbackCreate",
  "x-readme-ref-name": "FeedbackCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default FeedbackCreate
