const SupplierCreate = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a5f-7d94-8a1e-88ae708e95cb"
      ]
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
    }
  },
  "title": "SupplierCreate",
  "x-readme-ref-name": "SupplierCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default SupplierCreate
