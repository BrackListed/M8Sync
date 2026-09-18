const ServiceTemplateVariationData = {
  "description": "Decoded variation data stored internally in ServiceVariation.json_data.",
  "type": "object",
  "title": "ServiceTemplateVariationData",
  "x-readme-ref-name": "ServiceTemplateVariationData",
  "properties": {
    "variation_amount": {
      "type": "number",
      "description": "Amount applied by time-period or public-holiday variations."
    },
    "variation_units": {
      "type": "string",
      "enum": [
        "PERCENT",
        "CURRENCY"
      ],
      "description": "Whether variation_amount is a percentage or currency value.\n\n`PERCENT` `CURRENCY`"
    },
    "variation_applicability": {
      "type": "array",
      "description": "Line item categories affected by the variation.",
      "items": {
        "type": "string",
        "enum": [
          "materials",
          "labour",
          "callout",
          "callout_fee"
        ],
        "description": "`materials` `labour` `callout` `callout_fee`"
      }
    },
    "tag": {
      "type": "string",
      "description": "Caller-defined tag used to identify managed variation records."
    },
    "time_period_start": {
      "oneOf": [
        {
          "type": "integer"
        },
        {
          "type": "string",
          "enum": [
            "OPEN",
            "CLOSE"
          ],
          "description": "`OPEN` `CLOSE`"
        }
      ],
      "description": "Start of a time-period variation, as seconds from midnight or a business-hours marker."
    },
    "time_period_end": {
      "oneOf": [
        {
          "type": "integer"
        },
        {
          "type": "string",
          "enum": [
            "OPEN",
            "CLOSE"
          ],
          "description": "`OPEN` `CLOSE`"
        }
      ],
      "description": "End of a time-period variation, as seconds from midnight or a business-hours marker."
    },
    "free_threshold_km": {
      "type": "number",
      "description": "Travel distance included before travel-distance pricing applies."
    },
    "price_per_km": {
      "type": "number",
      "description": "Travel-distance surcharge amount per kilometre after the free threshold."
    },
    "maximum_distance_km": {
      "type": "number",
      "description": "Maximum travel distance before manual approval is required."
    }
  }
} as const;
export default ServiceTemplateVariationData
