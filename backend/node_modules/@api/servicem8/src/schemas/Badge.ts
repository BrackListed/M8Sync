const Badge = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49f1-7d94-8a1e-ed2ef014977b"
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
        "123e4567-49f1-7d94-8a1e-f28f1086e95b"
      ]
    },
    "regarding_asset_type_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the asset type that this badge is associated with. Only applicable for asset-based badges. When set, the badge represents a specific asset type in the system and will appear on assets of this type.",
      "examples": [
        "123e4567-49f1-7d94-8a1e-b42a5ae40a3b"
      ]
    }
  },
  "required": [
    "name"
  ],
  "title": "Badge",
  "x-readme-ref-name": "Badge"
} as const;
export default Badge
