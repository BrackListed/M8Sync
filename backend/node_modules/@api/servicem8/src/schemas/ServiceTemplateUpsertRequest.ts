import ServiceTemplateQuestionUpsert from './ServiceTemplateQuestionUpsert.js';
import ServiceTemplateStaffCapabilityUpsert from './ServiceTemplateStaffCapabilityUpsert.js';
import ServiceTemplateVariationUpsert from './ServiceTemplateVariationUpsert.js';

const ServiceTemplateUpsertRequest = {
  "type": "object",
  "description": "Sparse upsert body. Omitted fields are preserved; omitted child records are untouched.",
  "properties": {
    "name": {
      "type": "string",
      "description": "Customer-visible service name."
    },
    "service_type": {
      "type": "string",
      "description": "Service workflow type stored on the Service DBO."
    },
    "booking_type": {
      "type": "string",
      "description": "How bookings for this service are scheduled."
    },
    "pricing_method": {
      "type": "string",
      "description": "Pricing model used when quoting or booking this service."
    },
    "service_description": {
      "type": "string",
      "description": "Customer-facing description shown before booking."
    },
    "job_description": {
      "type": "string",
      "description": "Default job description copied onto jobs created from this service."
    },
    "work_done_description": {
      "type": "string",
      "description": "Default work done description copied onto completed jobs."
    },
    "job_category_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Job category UUID assigned to jobs created from this service."
    },
    "job_badges_json": {
      "type": "string",
      "description": "JSON-encoded badge configuration stored on the Service DBO."
    },
    "payment_terms": {
      "type": "object",
      "additionalProperties": true,
      "description": "Payment terms object stored as payment_terms_json."
    },
    "is_available_for_customer_booking": {
      "type": "integer",
      "description": "Whether this service is available through customer booking flows."
    },
    "minimum_customer_booking_lead_time_minutes": {
      "type": "integer",
      "description": "Minimum lead time before a customer can book this service."
    },
    "maximum_customer_booking_lead_time_minutes": {
      "type": "integer",
      "description": "Maximum lead time ahead that a customer can book this service."
    },
    "active": {
      "type": "integer",
      "enum": [
        0,
        1
      ],
      "description": "Soft-delete flag; set to 0 to deactivate the service."
    },
    "questions": {
      "type": "array",
      "description": "Sparse question changes; omitted existing questions are untouched.",
      "items": ServiceTemplateQuestionUpsert
    },
    "variations": {
      "type": "array",
      "description": "Sparse variation changes; omitted existing variations are untouched.",
      "items": ServiceTemplateVariationUpsert
    },
    "staffCapabilities": {
      "type": "array",
      "description": "Sparse staff capability changes; omitted existing capabilities are untouched.",
      "items": ServiceTemplateStaffCapabilityUpsert
    }
  },
  "additionalProperties": false,
  "title": "ServiceTemplateUpsertRequest",
  "x-readme-ref-name": "ServiceTemplateUpsertRequest",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default ServiceTemplateUpsertRequest
