const CompanyContactCreate = {
  "type": "object",
  "properties": {
    "company_uuid": {
      "description": "The UUID of the company this contact belongs to",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49fc-7d94-8a1e-ccdd21e0b45b"
      ]
    },
    "first": {
      "description": "First name of the company contact. Used for identifying and addressing the contact in communications.",
      "type": "string"
    },
    "last": {
      "description": "Last name of the company contact. Used together with the first name to identify the contact.",
      "type": "string"
    },
    "phone": {
      "description": "Primary phone number for the contact. Used for voice communications with the contact. Should include area code and can include international code.",
      "type": "string"
    },
    "mobile": {
      "description": "Mobile phone number for the contact. Used for SMS communications and alternative voice contact. Should include area code and can include international code.",
      "type": "string"
    },
    "email": {
      "description": "Email address of the contact. Used for sending email communications, quotes, invoices, and other electronic correspondence.",
      "format": "email",
      "type": "string"
    },
    "type": {
      "description": "Specifies the type of contact. Common values include 'BILLING' for billing contacts and 'JOB' for job contacts. This field determines how the contact is used in the system.",
      "type": "string"
    },
    "is_primary_contact": {
      "description": "Indicates whether this contact is the primary contact for the company. Value of 1 means this is the primary contact, 0 means it is not. A company should have only one active primary contact.",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49fc-7d94-8a1e-89ee45c0529b"
      ]
    }
  },
  "title": "CompanyContactCreate",
  "x-readme-ref-name": "CompanyContactCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default CompanyContactCreate
