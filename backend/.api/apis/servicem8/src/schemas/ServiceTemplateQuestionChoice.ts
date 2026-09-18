const ServiceTemplateQuestionChoice = {
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the ServiceQuestionChoice record."
    },
    "name": {
      "type": "string",
      "description": "Choice label shown to staff or customers."
    },
    "description": {
      "type": "string",
      "description": "Additional explanatory text for the choice."
    },
    "minimum_quantity": {
      "type": "integer",
      "description": "Minimum quantity selectable for this choice."
    },
    "maximum_quantity": {
      "type": "integer",
      "description": "Maximum quantity selectable for this choice."
    },
    "work_done_description_line": {
      "type": "string",
      "description": "Line added to the work done description when this choice is selected."
    },
    "sort_order": {
      "type": "integer",
      "description": "Display order within the parent question."
    },
    "active": {
      "type": "integer",
      "enum": [
        0,
        1
      ],
      "description": "Soft-delete flag; 1 is active and 0 is inactive.\n\n`0` `1`"
    },
    "image_url": {
      "type": "string",
      "description": "Thumbnail URL resolved from image_attachment_uuid."
    }
  },
  "title": "ServiceTemplateQuestionChoice",
  "x-readme-ref-name": "ServiceTemplateQuestionChoice"
} as const;
export default ServiceTemplateQuestionChoice
