const AssetTypeFieldCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49e4-7d94-8a1e-78286c7fc99b"
      ]
    },
    "name": {
      "type": "string",
      "description": "Name of the field that will be displayed to users. Used as a label for the input field when managing assets."
    },
    "field_data": {
      "type": "object",
      "description": "Configuration data for the field",
      "properties": {
        "fieldType": {
          "type": "string",
          "enum": [
            "Text",
            "Number",
            "Date",
            "Multiple Choice"
          ]
        },
        "mandatory": {
          "type": "boolean"
        },
        "choices": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "fieldType",
        "mandatory"
      ]
    },
    "sort_order": {
      "type": "integer",
      "description": "The order in which this field should be displayed relative to other fields of the same asset type. Lower values display first."
    }
  },
  "required": [
    "name"
  ],
  "title": "AssetTypeFieldCreate",
  "x-readme-ref-name": "AssetTypeFieldCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AssetTypeFieldCreate
