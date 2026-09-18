import SDK from './sdk.js';

/**
 * ServiceM8 API
 *
 * Move your app forward with the ServiceM8 API
 *
 *
 *
 * ## Limits and Throttling
 * To ensure continuous quality of service, API usage can be subject to throttling. The
 * throttle will be applied once an API consumer reaches a certain 
 * threshold in terms of a maximum number of requests per minute. Most clients will never
 * hit this threshold, but those that do, will get met by a 
 * HTTP 429 Too Many Requests response code. 
 *  
 * There is a limit of 180 requests per minute, if you reach this you will receive a HTTP
 * 429 with a text body of "Number of allowed API requests per minute exceeded".
 * There is a limit of 20000 requests per day, if you reach this you will receive a HTTP
 * 429 with a text body of "Number of allowed API requests per day exceeded".
 *
 * We encourage all API developers to anticipate this error, and take appropriate measures
 * like e.g. using a cached value from a previous call, or passing on a message to the end
 * user that gets subjected to this behaviour (if any).
 *
 * Limits are per Addon per account.
 *
 *
 * ## Opening Records in ServiceM8
 * When you need to send a staff member from an external app to a ServiceM8 record in the
 * web app, build the URL using the record UUID on the primary app domain:
 *
 * * Job: `https://go.servicem8.com/OpenJob/{job_uuid}`
 * * Client: `https://go.servicem8.com/OpenClient/{company_uuid}`
 *
 * Client records are exposed by the Company endpoint in the REST API, so use the Company
 * record `uuid` as `{company_uuid}`. These URLs are web app links, not REST API endpoints,
 * and do not use API authentication. Users who are not signed in are redirected through
 * login and then back to the requested record. The signed-in staff member must have access
 * to the record and the relevant ServiceM8 menu permission.
 *
 *
 * @see {@link https://www.servicem8.com/terms-of-service Terms of Service}
 */
const createSDK = (() => { return new SDK(); })();

export default createSDK;
