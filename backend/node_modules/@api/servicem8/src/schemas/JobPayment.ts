const JobPayment = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "UUID of the job this payment is associated with. Each payment must be linked to a valid job in the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1f-20dd9cb5694b"
      ]
    },
    "actioned_by_uuid": {
      "description": "UUID of the staff member who recorded or processed this payment. Used for tracking which staff member handled the transaction.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1e-b5c8c564d28b"
      ]
    },
    "timestamp": {
      "description": "The date and time when this payment was recorded or processed. Format is YYYY-MM-DD HH:MM:SS. Used for payment reconciliation and reporting.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "amount": {
      "description": "The payment amount in the account's currency.",
      "type": "string"
    },
    "method": {
      "description": "The payment method used for this transaction. Examples include 'Cash', 'Credit Card', 'Bank Transfer', 'Stripe', etc.",
      "type": "string"
    },
    "note": {
      "description": "Optional text field for storing additional information about the payment. Can be used to record reference numbers, transaction IDs, or other payment-specific details.",
      "type": "string"
    },
    "attachment_uuid": {
      "description": "UUID linking to a stored attachment related to this payment, such as a receipt image. This is an optional reference to an Attachment record.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1f-05057ac0383b"
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1f-d6f24d6e3c9b"
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
    "is_deposit": {
      "type": "integer",
      "description": "Boolean flag indicating whether this payment represents a deposit against future work (true) rather than a payment for completed work (false). Read-only in the API. (Read only).  Valid values are [0,1]\n\n`0` `1`",
      "enum": [
        0,
        1
      ]
    }
  },
  "title": "JobPayment",
  "x-readme-ref-name": "JobPayment"
} as const;
export default JobPayment
