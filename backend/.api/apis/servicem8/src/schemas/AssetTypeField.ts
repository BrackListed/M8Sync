const AssetTypeField = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49e4-7d94-8a1e-291d783af91b"
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
    "asset_type_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the Asset Type to which this field belongs. This field is read-only in the API. (Read only)",
      "examples": [
        "123e4567-49e4-7d94-8a1e-8c654c7b1a5b"
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
          ],
          "description": "`Text` `Number` `Date` `Multiple Choice`"
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
  "title": "AssetTypeField",
  "x-readme-ref-name": "AssetTypeField"
} as const;
export default AssetTypeField
