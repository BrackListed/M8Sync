const CategoryCreate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "The name of the job category. Used to classify and organize jobs.",
      "type": "string"
    },
    "colour": {
      "description": "The colour associated with this job category. This colour is used to visually identify the category on the dispatch board and in calendar views. The value is a hexadecimal colour code (6 characters 0-9a-f).",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49f4-7d94-8a1e-c11aad91c33b"
      ]
    }
  },
  "required": [
    "name"
  ],
  "title": "CategoryCreate",
  "x-readme-ref-name": "CategoryCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default CategoryCreate
