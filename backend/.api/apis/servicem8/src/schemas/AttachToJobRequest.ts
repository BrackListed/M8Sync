const AttachToJobRequest = {
  "type": "object",
  "required": [
    "job_uuid"
  ],
  "properties": {
    "job_uuid": {
      "type": "string",
      "format": "uuid"
    }
  },
  "title": "AttachToJobRequest",
  "x-readme-ref-name": "AttachToJobRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AttachToJobRequest
