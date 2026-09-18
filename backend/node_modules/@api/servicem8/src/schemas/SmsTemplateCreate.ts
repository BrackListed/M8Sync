const SmsTemplateCreate = {
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
        "123e4567-4a53-7d94-8a1e-a07e7cfbd9cb"
      ]
    }
  },
  "required": [
    "name"
  ],
  "title": "SmsTemplateCreate",
  "x-readme-ref-name": "SmsTemplateCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default SmsTemplateCreate
