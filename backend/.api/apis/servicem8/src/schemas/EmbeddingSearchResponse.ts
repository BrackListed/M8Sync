import EmbeddingSearchResult from './EmbeddingSearchResult.js';

const EmbeddingSearchResponse = {
  "type": "object",
  "properties": {
    "results": {
      "type": "array",
      "items": EmbeddingSearchResult
    },
    "query": {
      "type": "string",
      "description": "The search query that was used"
    },
    "count": {
      "type": "integer",
      "description": "Number of results returned"
    },
    "searchType": {
      "type": "string",
      "description": "Type of search performed",
      "examples": [
        "embedding"
      ]
    }
  },
  "required": [
    "results",
    "query",
    "count",
    "searchType"
  ],
  "title": "EmbeddingSearchResponse",
  "x-readme-ref-name": "EmbeddingSearchResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default EmbeddingSearchResponse
