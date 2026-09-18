const SecurityRole = {
  "type": "object",
  "properties": {
    "name": {
      "description": "The name given to the security role",
      "type": "string",
      "maxLength": 50
    },
    "role_description": {
      "description": "A detailed description of the security role's purpose and permissions. This field provides information about what access and capabilities are granted to users assigned this role.",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a50-7d94-8a1e-9c52e626bceb"
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
  "title": "SecurityRole",
  "x-readme-ref-name": "SecurityRole"
} as const;
export default SecurityRole
