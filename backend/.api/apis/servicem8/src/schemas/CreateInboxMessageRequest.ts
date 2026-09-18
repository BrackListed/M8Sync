const CreateInboxMessageRequest = {
  "type": "object",
  "required": [
    "subject",
    "message_text"
  ],
  "properties": {
    "subject": {
      "type": "string",
      "description": "Subject of the message"
    },
    "message_text": {
      "type": "string",
      "description": "Plain text content of the message"
    },
    "from_name": {
      "type": "string",
      "description": "Name of the sender"
    },
    "from_email": {
      "type": "string",
      "format": "email",
      "description": "Email address of the sender"
    },
    "json_data": {
      "type": "object",
      "description": "Additional data to be used when converting the message to a job",
      "additionalProperties": true
    },
    "jobData": {
      "type": "object",
      "description": "Structured job data that will be merged into json_data when converting the message to a job",
      "properties": {
        "contact_first": {
          "type": "string",
          "description": "Job contact first name"
        },
        "contact_last": {
          "type": "string",
          "description": "Job contact last name"
        },
        "company_name": {
          "type": "string",
          "description": "Company/customer name"
        },
        "email": {
          "type": "string",
          "format": "email",
          "description": "Primary email address"
        },
        "mobile": {
          "type": "string",
          "description": "Mobile phone number"
        },
        "phone_1": {
          "type": "string",
          "description": "Primary phone number"
        },
        "phone_2": {
          "type": "string",
          "description": "Secondary phone number"
        },
        "billing_contact_first": {
          "type": "string",
          "description": "Billing contact first name"
        },
        "billing_contact_last": {
          "type": "string",
          "description": "Billing contact last name"
        },
        "billing_email": {
          "type": "string",
          "format": "email",
          "description": "Billing email address"
        },
        "billing_mobile": {
          "type": "string",
          "description": "Billing mobile number"
        },
        "billing_attention": {
          "type": "string",
          "description": "Billing attention line"
        },
        "job_description": {
          "type": "string",
          "description": "Description of the job/work to be done"
        },
        "job_address": {
          "type": "string",
          "description": "Service location address"
        },
        "billing_address": {
          "type": "string",
          "description": "Billing address"
        },
        "work_done_description": {
          "type": "string",
          "description": "Description of completed work"
        }
      },
      "additionalProperties": false
    },
    "regarding_company_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the company this message is regarding"
    }
  },
  "title": "CreateInboxMessageRequest",
  "x-readme-ref-name": "CreateInboxMessageRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default CreateInboxMessageRequest
