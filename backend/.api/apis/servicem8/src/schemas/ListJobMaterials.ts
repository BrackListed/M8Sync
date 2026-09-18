import JobMaterial from './JobMaterial.js';

const ListJobMaterials = {
  "metadata": {
    "allOf": [
      {
        "$schema": "https://json-schema.org/draft/2020-12/schema#",
        "type": "object",
        "properties": {
          "$filter": {
            "type": "string",
            "examples": [
              "active eq 1"
            ],
            "description": "Filter records using public API field names and the operators eq, ne, gt, or lt. Combine up to 10 conditions with and. Enclose string values in single quotes; numeric values do not need quotes. When using the SDK, pass an unencoded expression; the SDK handles URL encoding. See https://developer.servicem8.com/docs/filtering for details."
          }
        }
      }
    ]
  },
  "response": {
    "200": {
      "type": "array",
      "items": JobMaterial,
      "$schema": "https://json-schema.org/draft/2020-12/schema#"
    }
  }
} as const;
export default ListJobMaterials
