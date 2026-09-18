const JobCreate = {
  "type": "object",
  "properties": {
    "created_by_staff_uuid": {
      "description": "UUID of the staff member who created this job. Records which staff member initially added the job to the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1f-87f07b4a2a1b"
      ]
    },
    "date": {
      "description": "The date the job was created or scheduled. Used for organizing jobs chronologically and for reference in reports.",
      "type": "string",
      "examples": [
        "YYYY-MM-DD"
      ]
    },
    "company_uuid": {
      "description": "UUID reference to the client/company record associated with this job. Links the job to a client in the system, establishing the client-job relationship for billing and contact purposes.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1e-42223413e73b"
      ]
    },
    "billing_address": {
      "description": "The address where invoices and billing information should be sent. If not specified, defaults to the job address.",
      "type": "string",
      "maxLength": 500
    },
    "status": {
      "description": "Current status of the job. Controls where the Job appears in the Dispatch Board..  Valid values are [Quote,Work Order,Unsuccessful,Completed]",
      "enum": [
        "Quote",
        "Work Order",
        "Unsuccessful",
        "Completed"
      ],
      "type": "string"
    },
    "lng": {
      "description": "Longitude coordinate of the job location. Used for mapping and geolocation features. This is automatically populated based on the job address through geocoding."
    },
    "lat": {
      "description": "Latitude coordinate of the job location. Used for mapping and geolocation features. This is automatically populated based on the job address through geocoding."
    },
    "payment_date": {
      "description": "Not used. Refer to JobPayment endpoint.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "payment_actioned_by_uuid": {
      "description": "Not used. Refer to JobPayment endpoint.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1f-b968d99f41cb"
      ]
    },
    "payment_method": {
      "description": "Not used. Refer to JobPayment endpoint.",
      "type": "string"
    },
    "payment_amount": {
      "description": "Not used. Refer to JobPayment endpoint.",
      "type": "string"
    },
    "category_uuid": {
      "description": "UUID reference to the job category this job belongs to. Categories help organize jobs by type of work or department.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1e-2042abb9df3b"
      ]
    },
    "payment_note": {
      "description": "Not used. Refer to JobPayment endpoint.",
      "type": "string"
    },
    "geo_is_valid": {
      "description": "Indicates whether the geocoding for the job address was successful. When true, the latitude and longitude coordinates are considered accurate for mapping and location-based features."
    },
    "purchase_order_number": {
      "description": "Client purchase order reference number for this job. Used for cross-referencing with external accounting or order management systems.",
      "type": "string",
      "maxLength": 100
    },
    "invoice_sent": {
      "description": "Indicates whether an invoice has been sent for this job..  Valid values are [0,1]",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "invoice_sent_stamp": {
      "description": "Timestamp when the invoice was sent to the client. Format is YYYY-MM-DD HH:MM:SS."
    },
    "invoice_date": {
      "description": "The date the invoice was issued. This determines when payment is due based on the client's payment terms. Automatically set when a job is completed or manually when invoice is created.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "ready_to_invoice": {
      "description": "DEPRECATED"
    },
    "ready_to_invoice_stamp": {
      "description": "DEPRECATED"
    },
    "geo_country": {
      "description": "The country component extracted from the geocoded job address. Automatically populated when an address is geocoded."
    },
    "geo_postcode": {
      "description": "The postal/zip code component extracted from the geocoded job address. Automatically populated when an address is geocoded."
    },
    "geo_state": {
      "description": "The state/province component extracted from the geocoded job address. Automatically populated when an address is geocoded."
    },
    "geo_city": {
      "description": "The city/locality component extracted from the geocoded job address. Automatically populated when an address is geocoded."
    },
    "geo_street": {
      "description": "The street name component extracted from the geocoded job address. Automatically populated when an address is geocoded."
    },
    "geo_number": {
      "description": "The street number component extracted from the geocoded job address. Automatically populated when an address is geocoded."
    },
    "queue_uuid": {
      "description": "The UUID of the queue this job belongs to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1e-cf06f6eaeedb"
      ]
    },
    "queue_expiry_date": {
      "description": "The date and time when the job expires from the queue.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "queue_assigned_staff_uuid": {
      "description": "The UUID of the staff member assigned to this job in the queue.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1e-309a3439e7db"
      ]
    },
    "badges": {
      "description": "JSON Array of Badge UUIDs",
      "type": "string"
    },
    "quote_date": {
      "description": "The date and time that the job status was changed to Quote.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "quote_sent": {
      "description": "Boolean flag indicating whether a quote has been sent to the client for this job..  Valid values are [0,1]",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "quote_sent_stamp": {
      "description": "Timestamp when the quote was sent to the client. Format is YYYY-MM-DD HH:MM:SS."
    },
    "work_order_date": {
      "description": "The date and time that the job status was changed to Work Order.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "active_network_request_uuid": {
      "description": "DEPRECATED"
    },
    "related_knowledge_articles": {
      "description": "DEPRECATED"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1e-4438e673c76b"
      ]
    },
    "job_address": {
      "type": "string",
      "description": "Physical address where the job is to be performed. This address is used for geocoding to place the job on the map.",
      "maxLength": 500
    },
    "job_description": {
      "type": "string"
    },
    "work_done_description": {
      "type": "string"
    },
    "payment_processed": {
      "type": "integer",
      "description": "Indicates whether the job has been exported to the connected Accounting Package..  Valid values are [0,1]",
      "enum": [
        0,
        1
      ]
    },
    "payment_received": {
      "type": "integer",
      "description": "Indicates whether full payment has been received for this job..  Valid values are [0,1]",
      "enum": [
        0,
        1
      ]
    },
    "completion_date": {
      "type": "string",
      "description": "The date and time that the job status was changed to Completed.",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "unsuccessful_date": {
      "type": "string",
      "description": "The date and time that the job status was changed to Unsuccessful.",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    }
  },
  "required": [
    "status"
  ],
  "title": "JobCreate",
  "x-readme-ref-name": "JobCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default JobCreate
