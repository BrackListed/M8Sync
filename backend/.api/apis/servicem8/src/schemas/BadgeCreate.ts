const BadgeCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49f2-7d94-8a1f-215676bdd9db"
      ]
    },
    "name": {
      "type": "string",
      "description": "The display name of the badge. Used to identify the badge in the system. Examples include 'Warranty', 'VIP', 'Take Payment Facilities', etc.",
      "maxLength": 50
    },
    "automatically_allocated": {
      "type": "string"
    },
    "file_name": {
      "type": "string"
    },
    "regarding_form_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49f2-7d94-8a1e-5d2bb47d77fb"
      ]
    },
    "regarding_asset_type_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the asset type that this badge is associated with. Only applicable for asset-based badges. When set, the badge represents a specific asset type in the system and will appear on assets of this type.",
      "examples": [
        "123e4567-49f2-7d94-8a1e-4ecd1f1442eb"
      ]
    }
  },
  "required": [
    "name"
  ],
  "title": "BadgeCreate",
  "x-readme-ref-name": "BadgeCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default BadgeCreate
