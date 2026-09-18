const JobMaterialBundle = {
  "type": "object",
  "properties": {
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a35-7d94-8a1f-8fe61df4fa4b"
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
    "item_number": {
      "type": "string",
      "description": "Unique identifier for the material bundle within the job. Displayed on the Quote/Invoice in the same way as for JobMaterials."
    },
    "name": {
      "type": "string",
      "description": "Descriptive name of the job material bundle. Displayed on the Quote/Invoice in the same way as for JobMaterials."
    },
    "quantity": {
      "type": "string",
      "description": "The quantity shown for the bundle line item on the invoice. Must be greater than zero. The quantity of each JobMaterial within the bundle is determined by dividing by this value."
    },
    "sort_order": {
      "type": "integer",
      "description": "Defines the display order of the JobMaterialBundle relative to other JobMaterials and JobMaterialBundles on the Job. Lower values are displayed first."
    },
    "material_bundle_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the MaterialBundle which this JobMaterialBundle was originally created from.",
      "examples": [
        "123e4567-4a35-7d94-8a1e-7b8c87667efb"
      ]
    },
    "job_uuid": {
      "format": "uuid",
      "type": "string",
      "description": "UUID of the job that this material bundle is associated with. Links the bundle to a specific job record.",
      "examples": [
        "123e4567-4a35-7d94-8a1f-bf0e4c61419b"
      ]
    }
  },
  "title": "JobMaterialBundle",
  "x-readme-ref-name": "JobMaterialBundle"
} as const;
export default JobMaterialBundle
