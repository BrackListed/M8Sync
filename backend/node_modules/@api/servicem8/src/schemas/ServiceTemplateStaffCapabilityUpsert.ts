const ServiceTemplateStaffCapabilityUpsert = {
  "title": "ServiceTemplateStaffCapabilityUpsert",
  "x-readme-ref-name": "ServiceTemplateStaffCapabilityUpsert",
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the StaffCapability record."
    },
    "service_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Editable parent Service UUID."
    },
    "staff_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Staff member UUID that can perform this service."
    },
    "sort_order": {
      "type": "integer",
      "description": "Display order for capability records."
    },
    "active": {
      "type": "integer",
      "enum": [
        0,
        1
      ],
      "description": "Soft-delete flag; 1 is active and 0 is inactive."
    }
  }
} as const;
export default ServiceTemplateStaffCapabilityUpsert
