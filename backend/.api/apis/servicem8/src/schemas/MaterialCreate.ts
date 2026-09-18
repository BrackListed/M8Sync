const MaterialCreate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the material, product or labour rate. The maximum length varies based on accounting package integration 30-100 characters for standard mode, up to 2000 characters for description billing mode. Required field that identifies the material in inventory lists, job forms, and invoices.",
      "type": "string"
    },
    "item_number": {
      "description": "Unique identifier code for the material. max length. Must be unique within an account.",
      "type": "string",
      "maxLength": 30
    },
    "price": {
      "description": "The selling price of the material. May include or exclude tax based on the price_includes_taxes field. Used as the default price when adding this material to jobs and generating invoices.",
      "type": "string"
    },
    "cost": {
      "description": "The purchase cost of the material. May include or exclude tax depending on the price_includes_taxes setting. Used for profit calculations and reporting. This field may be hidden from users without appropriate permissions.",
      "type": "string"
    },
    "quantity_in_stock": {
      "description": "The current inventory quantity of this material available in stock. Stored as a numeric value with decimal support. Updated automatically when materials are used in jobs or when inventory is manually adjusted. Only tracked if item_is_inventoried is enabled.",
      "type": "number"
    },
    "price_includes_taxes": {
      "description": "Boolean flag indicating whether the price and cost values include tax (1/true) or exclude tax (0/false). Controls tax calculations when determining final pricing. New materials inherit this setting from the account's default tax display preference..  Valid values are [0,1]",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "barcode": {
      "description": "The barcode identifier for the material.  Can store UPC, EAN, or other barcode formats. Used for inventory scanning and quick material lookup in the mobile app.",
      "type": "string"
    },
    "item_is_inventoried": {
      "description": "Boolean flag indicating whether inventory tracking is enabled for this material (1/true) or disabled (0/false). When enabled, the quantity_in_stock is tracked and updated automatically when the material is used in jobs. Only physical products typically have this enabled..  Valid values are [0,1]",
      "type": "integer",
      "enum": [
        0,
        1
      ]
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a45-7d94-8a1f-b839eca496bb"
      ]
    },
    "item_description": {
      "type": "string"
    },
    "use_description_for_invoicing": {
      "type": "string"
    },
    "tax_rate_uuid": {
      "format": "uuid",
      "type": "string",
      "examples": [
        "123e4567-4a45-7d94-8a1e-51eb258bb3cb"
      ]
    }
  },
  "required": [
    "name"
  ],
  "title": "MaterialCreate",
  "x-readme-ref-name": "MaterialCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default MaterialCreate
