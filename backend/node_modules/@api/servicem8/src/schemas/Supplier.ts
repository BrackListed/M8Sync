const Supplier = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a5f-7d94-8a1f-30b2a157d7ab"
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
      "description": "The name of the supplier company"
    },
    "business_number": {
      "type": "string",
      "description": "Business registration number (e.g., ABN, EIN)"
    },
    "address": {
      "type": "string",
      "description": "Physical address of the supplier store"
    },
    "email": {
      "format": "email",
      "type": "string",
      "description": "Primary contact email address"
    },
    "phone": {
      "type": "string",
      "description": "Primary contact phone number"
    },
    "account_number": {
      "type": "string",
      "description": "Your account number with this supplier"
    },
    "lng": {
      "type": "number",
      "format": "float",
      "description": "Longitude coordinate of the supplier's address (Read only)"
    },
    "lat": {
      "type": "number",
      "format": "float",
      "description": "Latitude coordinate of the supplier's address (Read only)"
    },
    "geo_is_valid": {
      "type": "integer",
      "description": "Whether the geocoded coordinates are valid (Read only).  Valid values are [0,1]\n\n`0` `1`",
      "enum": [
        0,
        1
      ]
    },
    "geo_country": {
      "type": "string",
      "description": "Country from geocoded address (Read only)"
    },
    "geo_postcode": {
      "type": "string",
      "description": "Postcode from geocoded address (Read only)"
    },
    "geo_state": {
      "type": "string",
      "description": "State from geocoded address (Read only)"
    },
    "geo_city": {
      "type": "string",
      "description": "City from geocoded address (Read only)"
    },
    "geo_street": {
      "type": "string",
      "description": "Street name from geocoded address (Read only)"
    },
    "geo_number": {
      "type": "string",
      "description": "Street number from geocoded address (Read only)"
    }
  },
  "title": "Supplier",
  "x-readme-ref-name": "Supplier"
} as const;
export default Supplier
