const AllocationWindowCreate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "Name of the allocation window that defines a time period for job scheduling. Common examples include 'Morning', 'Afternoon', 'Business Hours', etc.",
      "type": "string"
    },
    "start_time": {
      "description": "Start time of the allocation window measured in minutes from midnight. For example, 800 AM would be represented as 480 (8 hours × 60 minutes).",
      "type": "integer"
    },
    "end_time": {
      "description": "End time of the allocation window measured in minutes from midnight. For example, 1700 (500 PM) would be represented as 1020 (17 hours × 60 minutes).",
      "type": "integer"
    },
    "sort_priority": {
      "description": "Numeric value determining the display order of allocation windows. Lower values indicate higher priority. System automatically sets this to match the start_time in minutes, unless it's an urgent priority window which gets priority 0.",
      "type": "integer"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-49db-7d94-8a1e-f88f455e22db"
      ]
    }
  },
  "title": "AllocationWindowCreate",
  "x-readme-ref-name": "AllocationWindowCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default AllocationWindowCreate
