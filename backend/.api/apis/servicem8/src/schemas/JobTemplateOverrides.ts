const JobTemplateOverrides = {
  "type": "object",
  "description": "Optional field overrides when creating a job from a template. Only the following fields can be overridden: job_description, company_uuid, company_name, and job_address. Note: You cannot specify both company_uuid and company_name.",
  "properties": {
    "job_description": {
      "type": "string",
      "description": "Job description"
    },
    "company_uuid": {
      "type": "string",
      "format": "uuid",
      "description": "UUID of the company/client. Cannot be used together with company_name.",
      "examples": [
        "550e8400-e29b-41d4-a716-446655440001"
      ]
    },
    "company_name": {
      "type": "string",
      "description": "Name of the company/client. If a company with this name exists, it will be used. Otherwise, a new company will be created. Cannot be used together with company_uuid."
    },
    "job_address": {
      "type": "string",
      "description": "Street address for the job"
    }
  },
  "additionalProperties": false,
  "title": "JobTemplateOverrides",
  "x-readme-ref-name": "JobTemplateOverrides",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default JobTemplateOverrides
