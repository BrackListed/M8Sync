const SmsTemplate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "The name of the SMS template. This is a unique identifier for the template within the system. Examples include 'Tech Delayed Template', 'Parts Ordered Template', etc.",
      "type": "string",
      "maxLength": 50
    },
    "message": {
      "description": "The SMS message content that will be sent to recipients. Supports template variables like {job.contact_first}, {vendor.name}, {job.generated_job_id}, {job.total_price}, etc. Maximum length is determined by the SMS service provider's limit. Messages exceeding this limit will not be saved.",
      "type": "string",
      "maxLength": 612
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a53-7d94-8a1f-749f669b71cb"
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
    }
  },
  "required": [
    "name"
  ],
  "title": "SmsTemplate",
  "x-readme-ref-name": "SmsTemplate"
} as const;
export default SmsTemplate
