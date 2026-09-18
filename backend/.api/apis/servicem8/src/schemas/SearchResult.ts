const SearchResult = {
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the found object"
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
      "description": "Title of the object"
    },
    "highlights": {
      "type": "object",
      "description": "Highlighted text snippets that matched the query",
      "additionalProperties": true
    }
  },
  "required": [
    "uuid",
    "type",
    "title"
  ],
  "title": "SearchResult",
  "x-readme-ref-name": "SearchResult"
} as const;
export default SearchResult
