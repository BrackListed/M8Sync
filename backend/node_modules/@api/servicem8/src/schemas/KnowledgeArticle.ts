const KnowledgeArticle = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a3d-7d94-8a1e-5a774154de5b"
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
    "name": {
      "type": "string",
      "description": "Title of the knowledge article. This is a mandatory field with a maximum length of 100 characters. Used for identifying and searching for articles in the knowledge base."
    },
    "content": {
      "type": "string",
      "description": "The main content of the knowledge article. For 'richtext', 'meeting', and 'pdf' articles, this contains HTML formatted text. For 'video' articles, this may contain supplementary information. Supports extended text length."
    },
    "article_type": {
      "type": "string",
      "description": "Type of knowledge article. Valid values are 'video', 'richtext', 'pdf', or 'meeting'. Meetings are created through the API. This determines how the article content is presented and processed in the system."
    },
    "tags": {
      "type": "string",
      "description": "Comma-separated list of tags associated with this knowledge article. Maximum length is 2000 characters. Tags are used for categorization, searching, and automatic relationship generation with other objects like Services, Materials, and Companies."
    },
    "relationships": {
      "type": "array",
      "description": "JSON array of manually created relationships between this knowledge article and other objects. Contains objects with properties: object_name (e.g., 'job'), object_uuid (the related object's UUID), object_description (a description of the related object), and create_date. Used to associate articles with specific jobs or other system objects.",
      "items": {
        "type": "object",
        "properties": {
          "object_name": {
            "type": "string",
            "enum": [
              "Job",
              "job"
            ],
            "description": "`Job` `job`"
          },
          "object_uuid": {
            "type": "string",
            "format": "uuid"
          },
          "object_description": {
            "type": "string"
          },
          "create_date": {
            "type": "string",
            "pattern": "^\\d{4}-\\d{2}-\\d{2}\\ \\d{2}:\\d{2}:\\d{2}$"
          }
        },
        "required": [
          "object_name",
          "object_uuid"
        ]
      }
    }
  },
  "required": [
    "name"
  ],
  "title": "KnowledgeArticle",
  "x-readme-ref-name": "KnowledgeArticle"
} as const;
export default KnowledgeArticle
