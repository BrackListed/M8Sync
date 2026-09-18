const TaxRateCreate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the tax rate used for identification. Examples include 'GST', 'VAT', 'Sales Tax', etc. ",
      "type": "string",
      "maxLength": 50
    },
    "amount": {
      "description": "The tax rate percentage value (stored as a decimal value). For example, 10 for a 10% tax rate. Used in calculations to determine tax amounts for invoices and quotes.",
      "type": "string"
    },
    "is_default_tax_rate": {
      "description": "Boolean flag indicating whether this tax rate is the system default (true) or not (false). Only one tax rate can be marked as default at any time. The default tax rate is automatically applied to new line items when no specific tax rate is selected..  Valid values are [0,1]",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a65-7d94-8a1f-8fa324b5b71b"
      ]
    }
  },
  "required": [
    "name"
  ],
  "title": "TaxRateCreate",
  "x-readme-ref-name": "TaxRateCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default TaxRateCreate
