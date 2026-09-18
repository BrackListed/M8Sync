const JobPaymentCreate = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "UUID of the job this payment is associated with. Each payment must be linked to a valid job in the system.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1f-9f7f34c0f38b"
      ]
    },
    "actioned_by_uuid": {
      "description": "UUID of the staff member who recorded or processed this payment. Used for tracking which staff member handled the transaction.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1f-68821fc08c0b"
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
        "123e4567-4a38-7d94-8a1e-b6579b3269ab"
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a38-7d94-8a1f-d5624201fd8b"
      ]
    }
  },
  "title": "JobPaymentCreate",
  "x-readme-ref-name": "JobPaymentCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default JobPaymentCreate
