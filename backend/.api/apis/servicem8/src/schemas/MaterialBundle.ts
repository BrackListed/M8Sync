const MaterialBundle = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a48-7d94-8a1f-d8c93ba456fb"
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
    "item_number": {
      "type": "string",
      "description": "Unique identifier for this bundle. Must be 30 characters or less and unique across both Materials and Bundles. Used when adding bundles to jobs.",
      "maxLength": 30
    },
    "name": {
      "type": "string",
      "description": "The display name of the bundle. Used for identification in the system and shows on documents when the bundle is added to a job."
    },
    "material_list": {
      "type": "array",
      "description": "A JSON array containing the materials that make up this bundle. Each item includes the material's UUID, quantity, and optional sort_order. Limited to between 1 and 50 items, with all quantities being positive numbers.",
      "items": {
        "type": "object",
        "properties": {
          "uuid": {
            "type": "string",
            "format": "uuid",
            "description": "Must be the UUID of a Material record"
          },
          "quantity": {
            "type": "number",
            "minimum": 0
          },
          "sort_order": {
            "type": "integer",
            "description": "Optional sort order for materials in the bundle"
          }
        },
        "required": [
          "uuid",
          "quantity"
        ]
      },
      "minItems": 1,
      "maxItems": 50
    }
  },
  "required": [
    "item_number"
  ],
  "title": "MaterialBundle",
  "x-readme-ref-name": "MaterialBundle"
} as const;
export default MaterialBundle
