const JobContact = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "UUID of the job this contact is associated with. Each job contact must be linked to a valid job in the system. This field cannot be changed once set.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a2f-7d94-8a1e-cd93f50bb1bb"
      ]
    },
    "first": {
      "description": "First name of the job contact. This information is synced with the job's contact information fields depending on the contact type.",
      "type": "string"
    },
    "last": {
      "description": "Last name of the job contact. This information is synced with the job's contact information fields depending on the contact type.",
      "type": "string"
    },
    "phone": {
      "description": "Landline or office phone number of the job contact. Format is flexible but should represent a valid phone number. This field syncs with the job's phone_1 field for job contacts or phone_2 field for billing contacts.",
      "type": "string"
    },
    "mobile": {
      "description": "Mobile phone number of the job contact. Format is flexible but should represent a valid mobile number. This field syncs with the job's mobile field for job contacts or billing_mobile field for billing contacts.",
      "type": "string"
    },
    "email": {
      "description": "Email address of the job contact. Should be a valid email format. Used for sending job-related communications. This field syncs with the job's email field for job contacts or billing_email field for billing contacts.",
      "format": "email",
      "type": "string"
    },
    "type": {
      "description": "Type of contact relationship to the job. Valid values are: 'JOB' (or 'Job Contact'), 'BILLING' (or 'Billing Contact'), or 'Property Manager'. Controls which job fields are updated when this contact record changes.",
      "type": "string"
    },
    "is_primary_contact": {
      "description": "DEPRECATED"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a2f-7d94-8a1f-25cd48f7732b"
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
  "title": "JobContact",
  "x-readme-ref-name": "JobContact"
} as const;
export default JobContact
