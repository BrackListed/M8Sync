const AddNoteRequest = {
  "type": "object",
  "required": [
    "note"
  ],
  "properties": {
    "note": {
      "type": "string",
      "minLength": 1
    }
  },
  "title": "AddNoteRequest",
  "x-readme-ref-name": "AddNoteRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AddNoteRequest
