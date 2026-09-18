const AllocationWindow = {
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
        "123e4567-49db-7d94-8a1f-fa967b6a0f4b"
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
    }
  },
  "title": "AllocationWindow",
  "x-readme-ref-name": "AllocationWindow"
} as const;
export default AllocationWindow
