const AssetCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49df-7d94-8a1e-877bbcf834bb"
      ]
    },
    "company_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the Client to which this Asset is attached",
      "examples": [
        "123e4567-49df-7d94-8a1f-71f33a06ea3b"
      ]
    },
    "name": {
      "type": "string",
      "description": "User-facing description of this asset",
      "maxLength": 100
    },
    "lat": {
      "type": "number",
      "format": "float",
      "description": "Latitude component of the Asset's location in degrees"
    },
    "lng": {
      "type": "number",
      "format": "float",
      "description": "Longitude component of the Asset's location in degrees"
    },
    "geo_timestamp": {
      "type": "string",
      "description": "Timestamp at which the Asset's location was last updated",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "altitude": {
      "type": "number",
      "description": "Altitude component of the Asset's location in metres"
    },
    "field_data": {
      "type": "array",
      "description": "JSON array containing field values for this asset. Each entry represents a field value defined by the associated AssetType, with field values stored as strings. Date fields use Y-m-d format. This field stores all custom fields defined in the asset type template.",
      "items": {
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "format": "uuid",
            "description": "Must be the UUID of an AssetTypeField"
          },
          "fieldType": {
            "type": "string"
          },
          "fieldName": {
            "type": "string"
          },
          "fieldValue": {
            "type": "string",
            "description": "Convert all values to string. Dates shall be in Y-m-d format."
          },
          "sortOrder": {
            "type": "number"
          }
        },
        "required": [
          "uuid",
          "fieldType",
          "fieldName",
          "fieldValue",
          "sortOrder"
        ]
      }
    }
  },
  "title": "AssetCreate",
  "x-readme-ref-name": "AssetCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AssetCreate
