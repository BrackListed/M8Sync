const JobMaterialCreate = {
  "type": "object",
  "properties": {
    "job_uuid": {
      "description": "The UUID of the job this material is associated with. This is a required field that establishes the relationship between the job material and its parent job.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a32-7d94-8a1f-2424e305fffb"
      ]
    },
    "material_uuid": {
      "description": "The UUID of the material catalog item this job material is based on. Links the job material to the corresponding material in the materials catalog.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a32-7d94-8a1f-3673ccff10bb"
      ]
    },
    "name": {
      "description": "The name of the material item used on the job. This is displayed on invoices and is used to identify the material to the customer. The name typically comes from the associated material object but can be customized per job.",
      "type": "string"
    },
    "quantity": {
      "description": "The quantity of this material used on the job. This field is mandatory and cannot be empty.",
      "type": "string"
    },
    "price": {
      "description": "The unit price of the material excluding tax. Used in calculations to determine the total price for this line item on the job. The system may automatically adjust this value to maintain consistency with tax-inclusive pricing.",
      "type": "string"
    },
    "displayed_amount": {
      "description": "The unit price amount as displayed on invoices and quotes. This can be either tax-inclusive or tax-exclusive depending on the displayed_amount_is_tax_inclusive field value. Used for presentation to customers.",
      "type": "string"
    },
    "displayed_amount_is_tax_inclusive": {
      "description": "Boolean flag indicating whether the displayed_amount includes tax (true) or excludes tax (false). This controls how prices are presented to customers and determines which price value (inclusive or exclusive) is used in calculations.",
      "type": "string"
    },
    "tax_rate_uuid": {
      "description": "The UUID of the tax rate applied to this job material. Determines how tax is calculated for this specific line item.",
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a32-7d94-8a1e-b670756c5dfb"
      ]
    },
    "sort_order": {
      "description": "Integer value controlling the display order of materials on a job. Lower values appear first in lists. Used to customize the presentation order of materials on quotes, invoices and job forms.",
      "type": "string"
    },
    "cost": {
      "description": "The cost of the material for this job. This is the ex-tax amount.",
      "type": "string"
    },
    "displayed_cost": {
      "description": "The cost of the material for this job, displayed as inc-tax or ex-tax depending on jobMaterial.displayed_amount_is_tax_inclusive.",
      "type": "string"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a32-7d94-8a1f-19bc67f13a3b"
      ]
    },
    "job_material_bundle_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of a JobMaterialBundle which this JobMaterial belongs to. The default value is blank, which means that the JobMaterial is not part of a JobMaterialBundle.",
      "examples": [
        "123e4567-4a32-7d94-8a1f-eedc334640eb"
      ]
    }
  },
  "required": [
    "quantity"
  ],
  "title": "JobMaterialCreate",
  "x-readme-ref-name": "JobMaterialCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default JobMaterialCreate
