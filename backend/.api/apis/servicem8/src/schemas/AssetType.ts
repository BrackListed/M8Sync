const AssetType = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49e2-7d94-8a1f-a656370cf2bb"
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
    "name": {
      "type": "string",
      "description": "The name of the asset type. Used to identify different categories of assets that can be tracked in the system. Examples might include 'Air Conditioner', 'Fire Extinguisher', etc."
    }
  },
  "title": "AssetType",
  "x-readme-ref-name": "AssetType"
} as const;
export default AssetType
