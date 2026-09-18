import SmsRecord from './SmsRecord.js';

const SmsRecordList = {
  "type": "array",
  "items": SmsRecord,
  "title": "SMSRecordList",
  "x-readme-ref-name": "SMSRecordList",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default SmsRecordList
