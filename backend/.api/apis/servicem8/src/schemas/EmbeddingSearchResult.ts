const EmbeddingSearchResult = {
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the found job"
    },
    "type": {
      "type": "string",
      "description": "Type of the object",
      "examples": [
        "job"
      ]
    },
    "title": {
      "type": "string",
      "description": "Title of the job"
    },
    "description": {
      "type": "string",
      "description": "Job description"
    },
    "status": {
      "type": "string",
      "description": "Current job status"
    },
    "similarity_score": {
      "type": "number",
      "format": "float",
      "description": "Similarity score between 0.0 and 1.0",
      "minimum": 0,
      "maximum": 1
    },
    "matched_content": {
      "type": "string",
      "description": "The content that was matched in the embedding search"
    }
  },
  "required": [
    "uuid",
    "type",
    "title",
    "similarity_score"
  ],
  "title": "EmbeddingSearchResult",
  "x-readme-ref-name": "EmbeddingSearchResult"
} as const;
export default EmbeddingSearchResult
