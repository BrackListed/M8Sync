const Attachment = {
  "type": "object",
  "properties": {
    "related_object": {
      "description": "The type of object this attachment is related to (e.g., 'job', 'company', 'staff'). Must be a valid object type. Always stored in lowercase.",
      "type": "string"
    },
    "related_object_uuid": {
      "description": "UUID of the related object to which this attachment belongs. Must be a valid UUID of an existing object of the type specified in the related_object field.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49ea-7d94-8a1e-38b9fc72c5db"
      ]
    },
    "attachment_name": {
      "description": "Name of the attachment file. Used for display purposes and for naming the file when downloaded. Does not need to include file extension as this is determined by the file_type field.",
      "type": "string"
    },
    "file_type": {
      "description": "File extension including the leading dot (e.g., '.pdf', '.jpg'). Determines how the file is processed and displayed. Always stored in lowercase.",
      "type": "string"
    },
    "attachment_source": {
      "description": "Indicates the source or type of the attachment (e.g., 'INVOICE', 'QUOTE'). Used for filtering and determining how to display the attachment.",
      "type": "string"
    },
    "tags": {
      "description": "Comma-separated list of tags associated with the attachment. Used for categorization and filtering of attachments.",
      "type": "string"
    },
    "lng": {
      "description": "Longitude coordinate where the attachment was created. Used for geolocation of photos and other attachments. Decimal degrees format.",
      "type": "number",
      "format": "float"
    },
    "lat": {
      "description": "Latitude coordinate where the attachment was created. Used for geolocation of photos and other attachments. Decimal degrees format.",
      "type": "number",
      "format": "float"
    },
    "photo_width": {
      "description": "Width of the image in pixels. Only applicable for image attachments. Read-only in the API. (Read only)",
      "type": "integer"
    },
    "photo_height": {
      "description": "Height of the image in pixels. Only applicable for image attachments. Read-only in the API. (Read only)",
      "type": "integer"
    },
    "extracted_info": {
      "description": "Additional information extracted from the file, such as form responses or OCR text. Read-only in the API. (Read only)",
      "type": "string"
    },
    "is_favourite": {
      "description": "Flag indicating whether this attachment has been marked as a favorite. Used for filtering and displaying attachments..  Valid values are [0,1]\n\n`0` `1`",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "class_name": {
      "description": "The specific class type of the attachment. Used for specialized attachment types that extend the base dboAttachment class. Read-only in the API."
    },
    "metadata": {
      "description": "Additional structured data associated with the attachment in JSON format. The schema varies depending on attachment type and source. Used to store extended information that doesn't fit into standard fields. (Read only)",
      "type": "object",
      "additionalProperties": true
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49ea-7d94-8a1f-3829953ceb3b"
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
    "created_by_staff_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49ea-7d94-8a1f-3cc76da00efb"
      ]
    },
    "timestamp": {
      "type": "string"
    },
    "signature_data": {
      "type": "object",
      "description": "(Read only)",
      "properties": {
        "templateSupportsSignature": {
          "type": "boolean",
          "description": "True if the template from which this document was produced supports signing"
        },
        "documentSnapshotUUID": {
          "type": "string",
          "format": "uuid",
          "description": "The template mergefield snapshot which captured the unsigned document state"
        },
        "documentSnapshotExpiresUnixtime": {
          "type": "number",
          "description": "The unixtime at which the snapshot expires"
        },
        "signedDocumentAttachmentUUID": {
          "type": "string",
          "format": "uuid",
          "description": "If a signed version of this document exists, references the UUID of the attachment"
        },
        "unsignedDocumentAttachmentUUID": {
          "type": "string",
          "format": "uuid",
          "description": "References the UUID of the unsigned version of this document"
        },
        "signatureDetails": {
          "type": "object",
          "properties": {
            "signatureText": {
              "type": "string",
              "description": "Text entered by the signer as the electronic representation of thier signature"
            },
            "signatureUnixtime": {
              "type": "number",
              "description": "Unixtime at which the document was signed"
            },
            "metadata": {
              "type": "object",
              "description": "Optional additional data regarding the signature event",
              "additionalProperties": true
            }
          },
          "required": [
            "signatureText",
            "signatureUnixtime"
          ]
        }
      },
      "required": [
        "templateSupportsSignature"
      ]
    }
  },
  "title": "Attachment",
  "x-readme-ref-name": "Attachment"
} as const;
export default Attachment
