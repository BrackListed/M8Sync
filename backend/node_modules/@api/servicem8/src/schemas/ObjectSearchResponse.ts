import SearchResult from './SearchResult.js';

const ObjectSearchResponse = {
  "type": "object",
  "properties": {
    "results": {
      "type": "array",
      "items": SearchResult
    },
    "query": {
      "type": "string",
      "description": "The search query that was used"
    },
    "objectType": {
      "type": "string",
      "description": "The object type that was searched"
    },
    "count": {
      "type": "integer",
      "description": "Number of results returned"
    }
  },
  "required": [
    "results",
    "query",
    "objectType",
    "count"
  ],
  "title": "ObjectSearchResponse",
  "x-readme-ref-name": "ObjectSearchResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default ObjectSearchResponse
