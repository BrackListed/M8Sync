const Category = {
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
        "123e4567-49f4-7d94-8a1f-61a00db4059b"
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
  "required": [
    "name"
  ],
  "title": "Category",
  "x-readme-ref-name": "Category"
} as const;
export default Category
