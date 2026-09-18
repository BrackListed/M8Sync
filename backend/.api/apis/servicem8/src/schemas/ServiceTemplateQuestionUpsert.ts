import ServiceTemplateQuestionChoice from './ServiceTemplateQuestionChoice.js';

const ServiceTemplateQuestionUpsert = {
  "title": "ServiceTemplateQuestionUpsert",
  "x-readme-ref-name": "ServiceTemplateQuestionUpsert",
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "Unique identifier for the ServiceQuestion record."
    },
    "name": {
      "type": "string",
      "description": "Question title shown to staff or customers."
    },
    "question_description": {
      "type": "string",
      "description": "Additional explanatory text for the question."
    },
    "question_type": {
      "type": "string",
      "description": "Question input or action type stored on the ServiceQuestion DBO."
    },
    "reveal_question_with_question_choice_uuid": {
      "type": [
        "string",
        "null"
      ],
      "format": "uuid",
      "description": "Choice UUID that reveals this question when selected."
    },
    "sort_order": {
      "type": "integer",
      "description": "Display order within the parent Service."
    },
    "active": {
      "type": "integer",
      "enum": [
        0,
        1
      ],
      "description": "Soft-delete flag; 1 is active and 0 is inactive."
    },
    "choices": {
      "type": "array",
      "description": "Choices linked to this question, including inactive records.",
      "items": ServiceTemplateQuestionChoice
    }
  }
} as const;
export default ServiceTemplateQuestionUpsert
