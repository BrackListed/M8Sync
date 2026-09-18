const Job = {
  "type": "object",
  "properties": {
    "created_by_staff_uuid": {
      "description": "UUID of the staff member who created this job. Records which staff member initially added the job to the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1d-7d94-8a1f-149dbb20de6b"
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
        "123e4567-4a1d-7d94-8a1e-d8700242571b"
      ]
    },
    "billing_address": {
      "description": "The address where invoices and billing information should be sent. If not specified, defaults to the job address.",
      "type": "string",
      "maxLength": 500
    },
    "status": {
      "description": "Current status of the job. Controls where the Job appears in the Dispatch Board..  Valid values are [Quote,Work Order,Unsuccessful,Completed]\n\n`Quote` `Work Order` `Unsuccessful` `Completed`",
      "enum": [
        "Quote",
        "Work Order",
        "Unsuccessful",
        "Completed"
      ],
      "type": "string"
    },
    "lng": {
      "description": "The longitude coordinate of the job location. (Read only)",
      "type": "number",
      "format": "float"
    },
    "lat": {
      "description": "The latitude coordinate of the job location. (Read only)",
      "type": "number",
      "format": "float"
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
        "123e4567-4a1d-7d94-8a1f-e6064ebac33b"
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
        "123e4567-4a1e-7d94-8a1f-7b7145c1f5bb"
      ]
    },
    "payment_note": {
      "description": "Not used. Refer to JobPayment endpoint.",
      "type": "string"
    },
    "geo_is_valid": {
      "description": "Indicates whether the geocoding for the job address is valid. If this is false, the lat, lng, and other geo_ fields should not be used. (Read only).  Valid values are [0,1]\n\n`0` `1`",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "purchase_order_number": {
      "description": "Client purchase order reference number for this job. Used for cross-referencing with external accounting or order management systems.",
      "type": "string",
      "maxLength": 100
    },
    "invoice_sent": {
      "description": "Indicates whether an invoice has been sent for this job..  Valid values are [0,1]\n\n`0` `1`",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "invoice_sent_stamp": {
      "description": "The date and time when the invoice was sent. (Read only)",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
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
      "description": "The country field of the job address. (Read only)",
      "type": "string"
    },
    "geo_postcode": {
      "description": "The postcode/ZIP code field of the job address. (Read only)",
      "type": "string"
    },
    "geo_state": {
      "description": "The state/province field of the job address. (Read only)",
      "type": "string"
    },
    "geo_city": {
      "description": "The city/suburb field of the job address. (Read only)",
      "type": "string"
    },
    "geo_street": {
      "description": "The street name field of the job address. (Read only)",
      "type": "string"
    },
    "geo_number": {
      "description": "The street number field of the job address. (Read only)",
      "type": "string"
    },
    "queue_uuid": {
      "description": "The UUID of the queue this job belongs to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a1e-7d94-8a1f-3cd0bbd51e8b"
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
        "123e4567-4a1e-7d94-8a1f-ebaaa777753b"
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
      "description": "Boolean flag indicating whether a quote has been sent to the client for this job..  Valid values are [0,1]\n\n`0` `1`",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "quote_sent_stamp": {
      "description": "Timestamp when the quote was sent to the client. Format is YYYY-MM-DD HH:MM:SS. (Read only)",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
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
        "123e4567-4a1d-7d94-8a1e-992d257844ab"
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
    "generated_job_id": {
      "type": "string",
      "description": "System-generated unique job identifier. This is read-only and automatically assigned when a job is created. (Read only)"
    },
    "total_invoice_amount": {
      "type": "string",
      "description": "The total amount to be invoiced for this job. (Read only)"
    },
    "payment_processed": {
      "type": "integer",
      "description": "Indicates whether the job has been exported to the connected Accounting Package..  Valid values are [0,1]\n\n`0` `1`",
      "enum": [
        0,
        1
      ]
    },
    "payment_processed_stamp": {
      "type": "string",
      "description": "The date and time the job has been exported to the connected Accounting Package. (Read only)",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "payment_received": {
      "type": "integer",
      "description": "Indicates whether full payment has been received for this job..  Valid values are [0,1]\n\n`0` `1`",
      "enum": [
        0,
        1
      ]
    },
    "payment_received_stamp": {
      "type": "string",
      "description": "The date and time when full payment was received. (Read only)",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "completion_date": {
      "type": "string",
      "description": "The date and time that the job status was changed to Completed.",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "completion_actioned_by_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the staff member who marked this job as completed. References a staff record in the system. (Read only)",
      "examples": [
        "123e4567-4a1e-7d94-8a1e-db5b5abcab1b"
      ]
    },
    "unsuccessful_date": {
      "type": "string",
      "description": "The date and time that the job status was changed to Unsuccessful.",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "job_is_scheduled_until_stamp": {
      "type": "string",
      "description": "The end date/time of the last scheduled activity for this job. After this date, the job is considered Unscheduled. (Read only)",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    }
  },
  "required": [
    "status"
  ],
  "title": "Job",
  "x-readme-ref-name": "Job"
} as const;
export default Job
