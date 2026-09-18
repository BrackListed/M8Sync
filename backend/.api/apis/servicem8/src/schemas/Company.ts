const Company = {
  "type": "object",
  "properties": {
    "name": {
      "description": "Company Name",
      "type": "string",
      "maxLength": 100
    },
    "abn_number": {
      "description": "Australian Business Number. A unique 11-digit identifier issued by the Australian Taxation Office to businesses. Required for tax compliance and validation of business identity in Australia.",
      "type": "string"
    },
    "address": {
      "description": "The complete address of the company in a single text field. Supports up to 500 characters and may contain multiple lines. Used when individual address components (street, city, etc.) are not available or when displaying the full address in a single field.",
      "type": "string",
      "maxLength": 500
    },
    "billing_address": {
      "description": "The complete billing address for the company in a single text field. Supports up to 500 characters and may contain multiple lines. Used for invoicing and financial transactions when the billing address differs from the primary company address.",
      "type": "string",
      "maxLength": 500
    },
    "is_individual": {
      "description": "Derived flag indicating whether the client is an individual. This value is set automatically based on the company name and contact first/last name, and cannot be set via the API..  Valid values are [0,1]\n\n`0` `1`",
      "readOnly": true,
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "parent_company_uuid": {
      "description": "If provided, specifies the UUID of this Site's parent Company. If blank, this record is a Head Office rather than a Site. This field is only present on ServiceM8 Accounts with the Company Sites addon activated.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49f9-7d94-8a1e-b50ac4054f8b"
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49f9-7d94-8a1f-9010f147213b"
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
    "website": {
      "type": "string"
    },
    "address_street": {
      "type": "string",
      "maxLength": 500
    },
    "address_city": {
      "type": "string"
    },
    "address_state": {
      "type": "string"
    },
    "address_postcode": {
      "type": "string"
    },
    "address_country": {
      "type": "string"
    },
    "fax_number": {
      "type": "string"
    },
    "badges": {
      "type": "string",
      "description": "JSON Array of Badge UUIDs"
    },
    "tax_rate_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49f9-7d94-8a1f-f220010731ab"
      ]
    },
    "billing_attention": {
      "type": "string"
    },
    "payment_terms": {
      "type": "string"
    },
    "deposit_percent": {
      "type": "integer"
    }
  },
  "required": [
    "name"
  ],
  "title": "Company",
  "x-readme-ref-name": "Company"
} as const;
export default Company
