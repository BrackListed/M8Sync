import EmailRecord from './EmailRecord.js';

const EmailRecordList = {
  "type": "array",
  "items": EmailRecord,
  "title": "EmailRecordList",
  "x-readme-ref-name": "EmailRecordList",
  "$schema": "https://json-schema.org/draft/2020-12/schema#"
} as const;
export default EmailRecordList
