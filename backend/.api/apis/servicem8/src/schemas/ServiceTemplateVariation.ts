import ServiceTemplateVariationData from './ServiceTemplateVariationData.js';

const ServiceTemplateVariation = {
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the ServiceVariation record."
    },
    "service_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Parent Service UUID."
    },
    "variation_type": {
      "type": "string",
      "description": "Variation category that determines which data fields are used.\n\n`time-period` `public-holiday` `customer-booking` `travel-distance` `maximum-travel-distance`",
      "enum": [
        "time-period",
        "public-holiday",
        "customer-booking",
        "travel-distance",
        "maximum-travel-distance"
      ]
    },
    "data": ServiceTemplateVariationData,
    "active": {
      "type": "integer",
      "enum": [
        0,
        1
      ],
      "description": "Soft-delete flag; 1 is active and 0 is inactive.\n\n`0` `1`"
    }
  },
  "title": "ServiceTemplateVariation",
  "x-readme-ref-name": "ServiceTemplateVariation"
} as const;
export default ServiceTemplateVariation
