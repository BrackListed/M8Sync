const Vendor = {
  "type": "object",
  "properties": {
    "business_number": {
      "description": "The company's business identification number as required by the local tax authority. For example, ABN in Australia, EIN in the USA, VAT number in the EU, or business registration number. Format varies by country/region.",
      "type": "string"
    },
    "email": {
      "description": "Primary email address for the company. Used for system notifications, customer communications, and as the default sender address for emails sent from the system.",
      "format": "email",
      "type": "string"
    },
    "email_accounts": {
      "description": "Accounts/billing email accounts configured for the company.",
      "type": "string"
    },
    "billing_address": {
      "description": "The company's billing address where invoices and financial correspondence should be sent.",
      "type": "string"
    },
    "accepted_payment_methods": {
      "description": "DEPRECATED"
    },
    "default_region": {
      "description": "Default geographic region for the company. Affects currency, tax calculations, date formats, and other region-specific behaviors in the system.",
      "type": "string"
    },
    "currency": {
      "description": "Three-letter ISO currency code (e.g., 'USD', 'AUD', 'EUR') representing the company's primary currency. Used for all financial calculations and displays in the system.",
      "type": "string"
    },
    "opening_time_monday": {
      "description": "The minute of the day (from midnight) when the business opens on Monday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_monday": {
      "description": "The minute of the day (from midnight) when the business closes on Monday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "opening_time_tuesday": {
      "description": "The minute of the day (from midnight) when the business opens on Tuesday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_tuesday": {
      "description": "The minute of the day (from midnight) when the business closes on Tuesday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "opening_time_wednesday": {
      "description": "The minute of the day (from midnight) when the business opens on Wednesday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_wednesday": {
      "description": "The minute of the day (from midnight) when the business closes on Wednesday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "opening_time_thursday": {
      "description": "The minute of the day (from midnight) when the business opens on Thursday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_thursday": {
      "description": "The minute of the day (from midnight) when the business closes on Thursday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "opening_time_friday": {
      "description": "The minute of the day (from midnight) when the business opens on Friday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_friday": {
      "description": "The minute of the day (from midnight) when the business closes on Friday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "opening_time_saturday": {
      "description": "The minute of the day (from midnight) when the business opens on Saturday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_saturday": {
      "description": "The minute of the day (from midnight) when the business closes on Saturday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "opening_time_sunday": {
      "description": "The minute of the day (from midnight) when the business opens on Sunday. For example, 480 represents 8:00 AM (8 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "closing_time_sunday": {
      "description": "The minute of the day (from midnight) when the business closes on Sunday. For example, 1020 represents 5:00 PM (17 hours × 60 minutes). Used for scheduling and availability calculations.",
      "type": "string"
    },
    "timezone_name": {
      "description": "IANA timezone name (e.g., 'America/New_York', 'Australia/Sydney') for the company's primary location. Used for date/time calculations, scheduling, and display of times across the system.",
      "type": "string"
    },
    "invoice_terms": {
      "description": "Text describing the payment terms that appear on invoices. For example, '14 days', 'Net 30', etc. Used to communicate payment expectations to customers on invoices and financial documents.",
      "type": "string"
    },
    "job_default_status": {
      "description": "Default status for new jobs created in the system. Valid values are 'Quote' or 'Work Order'. Controls the initial state of newly created jobs.",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a6b-7d94-8a1f-b2ad0aea988b"
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
      "description": "Company Name",
      "maxLength": 200
    },
    "abn_number": {
      "type": "string",
      "description": "Company ABN Number (Australian Accounts Only)"
    },
    "website": {
      "type": "string",
      "description": "Company Website address",
      "maxLength": 100
    }
  },
  "required": [
    "name"
  ],
  "title": "Vendor",
  "x-readme-ref-name": "Vendor"
} as const;
export default Vendor
