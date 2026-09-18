const FormResponse = {
  "type": "object",
  "properties": {
    "form_uuid": {
      "description": "UUID of the form used to generate this form response. Links to a specific form in the system that defines the fields to be gathered.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1f-aa68b5718ffb"
      ]
    },
    "staff_uuid": {
      "description": "UUID of the staff member who completed this FormResponse.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1e-cb796ba69d4b"
      ]
    },
    "regarding_object": {
      "description": "The object type that this form response is associated with. Common values include 'job', 'asset', or 'company'. Works in conjunction with regarding_object_uuid to link this form response to a specific record in the system.",
      "type": "string"
    },
    "regarding_object_uuid": {
      "description": "UUID of the specific record this form response is linked to. For example, if regarding_object is 'job', this will be the UUID of the specific job. This creates a relationship between the form response and the object it refers to.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1e-014274d7e73b"
      ]
    },
    "field_data": {
      "description": "JSON array of form answers captured at submission time.",
      "type": "string"
    },
    "timestamp": {
      "description": "Date and time when the form was submitted/completed. Used for sorting and displaying form responses chronologically. Format is YYYY-MM-DD HH:MM:SS in UTC timezone.",
      "type": "string",
      "examples": [
        "2026-09-01 12:00:00"
      ]
    },
    "form_by_staff_uuid": {
      "description": "UUID of the staff member who completed or submitted this form. Identifies which user filled out the form. Used for tracking form submission history and staff accountability.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1e-7b5b91981f5b"
      ]
    },
    "document_attachment_uuid": {
      "description": "UUID of the document attachment generated from this form response. When a form is completed, it can generate a PDF document which is stored as an attachment. This field links to that generated document attachment.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1f-be02ec0fddfb"
      ]
    },
    "asset_uuid": {
      "description": "UUID of the Asset this form response is related to. Used when the FormResponsepertains to a specific asset, such as equipment inspections, maintenance checklists, or asset condition reports.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1f-4e3c363f3aeb"
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a0d-7d94-8a1e-c62bb46dd90b"
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
  "title": "FormResponse",
  "x-readme-ref-name": "FormResponse"
} as const;
export default FormResponse
