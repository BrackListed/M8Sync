const LocationCreate = {
  "type": "object",
  "properties": {
    "name": {
      "description": "Location's name",
      "type": "string",
      "maxLength": 50
    },
    "line1": {
      "description": "First line of the location's address. Contains the street number and street name.",
      "type": "string",
      "maxLength": 100
    },
    "line2": {
      "description": "Second line of the location's address. Used for additional address information such as building/suite numbers or street details.",
      "type": "string",
      "maxLength": 100
    },
    "line3": {
      "description": "Third line of the location's address. Used for additional address details when line1 and line2 are not sufficient.",
      "type": "string",
      "maxLength": 100
    },
    "city": {
      "description": "City, town, or suburb of the location's address.",
      "type": "string",
      "maxLength": 50
    },
    "country": {
      "description": "Country of the location's address. Country names are sanitized through the RegionsanitiseCountryName function.",
      "type": "string",
      "maxLength": 100
    },
    "post_code": {
      "description": "Postal code or ZIP code of the location's address. Format varies by country.",
      "type": "string",
      "maxLength": 100
    },
    "phone_1": {
      "description": "Primary contact phone number for the location. Can include formatting characters.",
      "type": "string",
      "maxLength": 100
    },
    "state": {
      "description": "Address State",
      "type": "string"
    },
    "lng": {
      "description": "Longitude coordinate of the location in decimal degrees format. Used for geolocation and distance calculations. Expected range is between -180 and 180 degrees.",
      "type": "number",
      "format": "float"
    },
    "lat": {
      "description": "Latitude coordinate of the location in decimal degrees format. Used for geolocation and distance calculations. Expected range is between -90 and 90 degrees.",
      "type": "number",
      "format": "float"
    },
    "uuid": {
      "format": "uuid",
      "description": "Unique identifier for this record",
      "type": "string",
      "examples": [
        "123e4567-4a41-7d94-8a1f-f742041120eb"
      ]
    }
  },
  "required": [
    "name",
    "state"
  ],
  "title": "LocationCreate",
  "x-readme-ref-name": "LocationCreate",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default LocationCreate
