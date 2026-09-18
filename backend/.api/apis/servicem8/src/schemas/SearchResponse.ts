import SearchResult from './SearchResult.js';

const SearchResponse = {
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
    "count": {
      "type": "integer",
      "description": "Number of results returned"
    }
  },
  "required": [
    "results",
    "query",
    "count"
  ],
  "title": "SearchResponse",
  "x-readme-ref-name": "SearchResponse",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default SearchResponse
