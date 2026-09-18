const AddonDiaryItemCreateRequest = {
  "type": "object",
  "additionalProperties": false,
  "required": [
    "job_uuid",
    "content"
  ],
  "properties": {
    "job_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the Job whose Diary receives the item."
    },
    "content": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1000,
      "description": "Plaintext Diary item content. Markup is displayed literally."
    }
  },
  "title": "AddonDiaryItemCreateRequest",
  "x-readme-ref-name": "AddonDiaryItemCreateRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AddonDiaryItemCreateRequest
