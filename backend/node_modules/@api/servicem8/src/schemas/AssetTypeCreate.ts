const AssetTypeCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49e2-7d94-8a1e-94adcb813e1b"
      ]
    },
    "name": {
      "type": "string",
      "description": "The name of the asset type. Used to identify different categories of assets that can be tracked in the system. Examples might include 'Air Conditioner', 'Fire Extinguisher', etc."
    }
  },
  "title": "AssetTypeCreate",
  "x-readme-ref-name": "AssetTypeCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AssetTypeCreate
