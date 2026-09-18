const AttachmentCreate = {
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
        "123e4567-49ea-7d94-8a1f-ff99d6fbf75b"
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
      "description": "Width of the image in pixels. Only applicable for image attachments. Read-only in the API."
    },
    "photo_height": {
      "description": "Height of the image in pixels. Only applicable for image attachments. Read-only in the API."
    },
    "extracted_info": {
      "description": "Additional information extracted from the file, such as form responses or OCR text. Read-only in the API."
    },
    "is_favourite": {
      "description": "Flag indicating whether this attachment has been marked as a favorite. Used for filtering and displaying attachments..  Valid values are [0,1]",
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
      "description": "Additional structured data associated with the attachment in JSON format. The schema varies depending on attachment type and source. Used to store extended information that doesn't fit into standard fields."
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49ea-7d94-8a1e-c60601a83c7b"
      ]
    },
    "created_by_staff_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-49ea-7d94-8a1f-b25bbaa0b8fb"
      ]
    },
    "timestamp": {
      "type": "string"
    }
  },
  "title": "AttachmentCreate",
  "x-readme-ref-name": "AttachmentCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AttachmentCreate
