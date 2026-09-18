const EmailTemplate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "Unique name of the email template. Used to identify and select the template in the system. This field is mandatory and must be unique among all email templates in the account.",
      "type": "string",
      "maxLength": 50
    },
    "subject": {
      "description": "Subject line for the email template. Supports variable placeholders like {job.job_address} which are replaced with actual values when the email is generated. This field defines what appears in the subject line of emails sent using this template.",
      "type": "string",
      "maxLength": 100
    },
    "message": {
      "description": "The HTML body content of the email template. Supports rich text formatting and variable placeholders like {job.contact_first}, {document}, {vendor.name}, etc., which are replaced with actual values when the email is generated.",
      "type": "string",
      "maxLength": 1000
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a02-7d94-8a1f-f9a8adfad22b"
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
  "title": "EmailTemplate",
  "x-readme-ref-name": "EmailTemplate"
} as const;
export default EmailTemplate
