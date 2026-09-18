import type * as types from './types.js';
import type { ConfigOptions, FetchResponse } from '@readme/api-core/types';
import APICore from '@readme/api-core';
import definition from '../openapi.json' with {
  type: 'json'
};

export default class SDK {
  core: APICore;

  constructor() {
    this.core = new APICore(definition, 'servicem8/1.0.0 (api/7.0.2)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * Lists editable and published Service records, including inactive records. Filtering
   * applies to top-level Service fields only.
   *
   * @summary List ServiceTemplates
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   */
  listServiceTemplates(metadata?: types.ListServiceTemplatesMetadataParam): Promise<FetchResponse<200, types.ListServiceTemplatesResponse200>> {
    return this.core.fetch('/ServiceTemplate.json', 'get', metadata);
  }

  /**
   * Retrieves one editable or published Service record by UUID.
   *
   * @summary Get a ServiceTemplate
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<404, types.Error> Record not found
   */
  getServiceTemplate(metadata: types.GetServiceTemplateMetadataParam): Promise<FetchResponse<200, types.ServiceTemplate>> {
    return this.core.fetch('/ServiceTemplate/{uuid}.json', 'get', metadata);
  }

  /**
   * Creates or sparsely updates an editable Service record. Published-copy UUIDs and
   * publishing fields are rejected.
   *
   * @summary Create or update a ServiceTemplate
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   */
  upsertServiceTemplate(body: types.ServiceTemplateUpsertRequest, metadata: types.UpsertServiceTemplateMetadataParam): Promise<FetchResponse<200, types.ServiceTemplate> | FetchResponse<201, types.ServiceTemplate>> {
    return this.core.fetch('/ServiceTemplate/{uuid}.json', 'post', body, metadata);
  }

  /**
   * Sets active=0. Deleting an editable row also soft-deletes its published copy via the
   * existing Service postCommit cascade; deleting a published-copy UUID only deactivates
   * that published row.
   *
   * @summary Soft-delete a ServiceTemplate
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   * @throws FetchError<404, types.Error> Record not found
   */
  deleteServiceTemplate(metadata: types.DeleteServiceTemplateMetadataParam): Promise<FetchResponse<200, types.EmptyObject>> {
    return this.core.fetch('/ServiceTemplate/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary List all Allocation Windows
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listAllocationWindows(metadata?: types.ListAllocationWindowsMetadataParam): Promise<FetchResponse<200, types.ListAllocationWindowsResponse200>> {
    return this.core.fetch('/allocationwindow.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Allocation Window
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createAllocationWindows(body: types.AllocationWindowCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/allocationwindow.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary Retrieve an Allocation Window
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getAllocationWindows(metadata: types.GetAllocationWindowsMetadataParam): Promise<FetchResponse<200, types.AllocationWindow>> {
    return this.core.fetch('/allocationwindow/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Update an Allocation Window
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateAllocationWindows(body: types.AllocationWindowCreate, metadata: types.UpdateAllocationWindowsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/allocationwindow/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Delete an Allocation Window
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteAllocationWindows(metadata: types.DeleteAllocationWindowsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/allocationwindow/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_assets**.
   *
   * 			
   *
   * @summary List all Assets
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listAssets(metadata?: types.ListAssetsMetadataParam): Promise<FetchResponse<200, types.ListAssetsResponse200>> {
    return this.core.fetch('/asset.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_assets**.
   *
   * 			
   *
   * @summary Retrieve an Asset
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getAssets(metadata: types.GetAssetsMetadataParam): Promise<FetchResponse<200, types.Asset>> {
    return this.core.fetch('/asset/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   *
   * @summary Update an Asset
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateAssets(body: types.AssetCreate, metadata: types.UpdateAssetsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/asset/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   *
   * @summary Delete an Asset
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteAssets(metadata: types.DeleteAssetsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/asset/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_assets**.
   *
   * 			
   *
   * @summary List all Asset Types
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listAssetTypes(metadata?: types.ListAssetTypesMetadataParam): Promise<FetchResponse<200, types.ListAssetTypesResponse200>> {
    return this.core.fetch('/assettype.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Asset Type
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createAssetTypes(body: types.AssetTypeCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/assettype.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_assets**.
   *
   * 			
   *
   * @summary Retrieve an Asset Type
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getAssetTypes(metadata: types.GetAssetTypesMetadataParam): Promise<FetchResponse<200, types.AssetType>> {
    return this.core.fetch('/assettype/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   *
   * @summary Update an Asset Type
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateAssetTypes(body: types.AssetTypeCreate, metadata: types.UpdateAssetTypesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/assettype/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   *
   * @summary Delete an Asset Type
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteAssetTypes(metadata: types.DeleteAssetTypesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/assettype/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_assets**.
   *
   * 			
   *
   * @summary List all Asset Type Fields
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listAssetTypeFields(metadata?: types.ListAssetTypeFieldsMetadataParam): Promise<FetchResponse<200, types.ListAssetTypeFieldsResponse200>> {
    return this.core.fetch('/assettypefield.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Asset Type Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createAssetTypeFields(body: types.AssetTypeFieldCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/assettypefield.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_assets**.
   *
   * 			
   *
   * @summary Retrieve an Asset Type Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getAssetTypeFields(metadata: types.GetAssetTypeFieldsMetadataParam): Promise<FetchResponse<200, types.AssetTypeField>> {
    return this.core.fetch('/assettypefield/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   *
   * @summary Update an Asset Type Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateAssetTypeFields(body: types.AssetTypeFieldCreate, metadata: types.UpdateAssetTypeFieldsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/assettypefield/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_assets**.
   *
   * 			
   *
   * @summary Delete an Asset Type Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteAssetTypeFields(metadata: types.DeleteAssetTypeFieldsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/assettypefield/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_attachments**.
   *
   * 			
   *
   * @summary List all Attachments
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listAttachments(metadata?: types.ListAttachmentsMetadataParam): Promise<FetchResponse<200, types.ListAttachmentsResponse200>> {
    return this.core.fetch('/attachment.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_attachments**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Attachment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<413, types.Error> Uploaded file is too large
   * @throws FetchError<415, types.Error> Unsupported upload media type
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createAttachments(body: types.AttachmentCreate): Promise<FetchResponse<200, types.Result> | FetchResponse<201, types.Attachment>> {
    return this.core.fetch('/attachment.json', 'post', body);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary List all Availabilities
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listAvailabilities(metadata?: types.ListAvailabilitiesMetadataParam): Promise<FetchResponse<200, types.ListAvailabilitiesResponse200>> {
    return this.core.fetch('/availability.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Availability
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createAvailabilities(body: types.AvailabilityCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/availability.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary Retrieve an Availability
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getAvailabilities(metadata: types.GetAvailabilitiesMetadataParam): Promise<FetchResponse<200, types.Availability>> {
    return this.core.fetch('/availability/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Update an Availability
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateAvailabilities(body: types.AvailabilityCreate, metadata: types.UpdateAvailabilitiesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/availability/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Delete an Availability
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteAvailabilities(metadata: types.DeleteAvailabilitiesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/availability/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_badges**.
   *
   * 			
   *
   * @summary List all Badges
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listBadges(metadata?: types.ListBadgesMetadataParam): Promise<FetchResponse<200, types.ListBadgesResponse200>> {
    return this.core.fetch('/badge.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_badges**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Badge
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createBadges(body: types.BadgeCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/badge.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_badges**.
   *
   * 			
   *
   * @summary Retrieve a Badge
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getBadges(metadata: types.GetBadgesMetadataParam): Promise<FetchResponse<200, types.Badge>> {
    return this.core.fetch('/badge/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_badges**.
   *
   * 			
   *
   * @summary Update a Badge
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateBadges(body: types.BadgeCreate, metadata: types.UpdateBadgesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/badge/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_badges**.
   *
   * 			
   *
   * @summary Delete a Badge
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteBadges(metadata: types.DeleteBadgesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/badge/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_categories**.
   *
   * 			
   *
   * @summary List all Categories
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listCategories(metadata?: types.ListCategoriesMetadataParam): Promise<FetchResponse<200, types.ListCategoriesResponse200>> {
    return this.core.fetch('/category.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_categories**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Category
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createCategories(body: types.CategoryCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/category.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_categories**.
   *
   * 			
   *
   * @summary Retrieve a Category
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getCategories(metadata: types.GetCategoriesMetadataParam): Promise<FetchResponse<200, types.Category>> {
    return this.core.fetch('/category/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_categories**.
   *
   * 			
   *
   * @summary Update a Category
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateCategories(body: types.CategoryCreate, metadata: types.UpdateCategoriesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/category/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_categories**.
   *
   * 			
   *
   * @summary Delete a Category
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteCategories(metadata: types.DeleteCategoriesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/category/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_customers**.
   *
   * 			
   *
   * @summary List all Clients
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listClients(metadata?: types.ListClientsMetadataParam): Promise<FetchResponse<200, types.ListClientsResponse200>> {
    return this.core.fetch('/company.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_customers**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Client
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createClients(body: types.CompanyCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/company.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_customers**.
   *
   * 			
   * 			
   * #### Open in ServiceM8
   * Use `https://go.servicem8.com/OpenClient/{uuid}` to open this Client in the ServiceM8
   * web app. This is a web app URL, not a REST API endpoint. Users who are not signed in are
   * redirected through login and then back to the requested Client. The signed-in staff
   * member must have access to Clients.
   *
   * 			
   *
   * @summary Retrieve a Client
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getClients(metadata: types.GetClientsMetadataParam): Promise<FetchResponse<200, types.Company>> {
    return this.core.fetch('/company/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_customers**.
   *
   * 			
   *
   * @summary Update a Client
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateClients(body: types.CompanyCreate, metadata: types.UpdateClientsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/company/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_customers**.
   *
   * 			
   *
   * @summary Delete a Client
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteClients(metadata: types.DeleteClientsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/company/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_customer_contacts**.
   *
   * 			
   *
   * @summary List all Company Contacts
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listCompanyContacts(metadata?: types.ListCompanyContactsMetadataParam): Promise<FetchResponse<200, types.ListCompanyContactsResponse200>> {
    return this.core.fetch('/companycontact.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_customer_contacts**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Company Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createCompanyContacts(body: types.CompanyContactCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/companycontact.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_customer_contacts**.
   *
   * 			
   *
   * @summary Retrieve a Company Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getCompanyContacts(metadata: types.GetCompanyContactsMetadataParam): Promise<FetchResponse<200, types.CompanyContact>> {
    return this.core.fetch('/companycontact/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_customer_contacts**.
   *
   * 			
   *
   * @summary Update a Company Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateCompanyContacts(body: types.CompanyContactCreate, metadata: types.UpdateCompanyContactsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/companycontact/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_customer_contacts**.
   *
   * 			
   *
   * @summary Delete a Company Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteCompanyContacts(metadata: types.DeleteCompanyContactsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/companycontact/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_attachments**.
   *
   * 			
   *
   * @summary Retrieve an Attachment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getAttachments(metadata: types.GetAttachmentsMetadataParam): Promise<FetchResponse<200, types.Attachment>> {
    return this.core.fetch('/dboattachment/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_attachments**.
   *
   * 			
   *
   * @summary Update an Attachment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateAttachments(body: types.AttachmentCreate, metadata: types.UpdateAttachmentsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/dboattachment/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_attachments**.
   *
   * 			
   *
   * @summary Delete an Attachment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteAttachments(metadata: types.DeleteAttachmentsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/dboattachment/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_notes**.
   *
   * 			
   *
   * @summary Retrieve a Note
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getNotes(metadata: types.GetNotesMetadataParam): Promise<FetchResponse<200, types.Note>> {
    return this.core.fetch('/dbonote/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **publish_job_notes**.
   *
   * 			
   *
   * @summary Update a Note
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateNotes(body: types.NoteCreate, metadata: types.UpdateNotesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/dbonote/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **publish_job_notes**.
   *
   * 			
   *
   * @summary Delete a Note
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteNotes(metadata: types.DeleteNotesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/dbonote/{uuid}.json', 'delete', metadata);
  }

  /**
   * Creates an immutable plaintext item in a Job Diary, attributed to the authenticated
   * Add-on. Add-ons cannot read, update, or delete Diary items through this endpoint.
   *
   * @summary Create an Add-on Job Diary item
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   * @throws FetchError<405, types.Error> Method not allowed
   * @throws FetchError<500, types.Error> Internal server error
   */
  createAddonDiaryItem(body: types.AddonDiaryItemCreateRequest): Promise<FetchResponse<201, types.AddonDiaryItemCreateResponse>> {
    return this.core.fetch('/diary.json', 'post', body);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary List all Document Templates
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listDocumentTemplates(metadata?: types.ListDocumentTemplatesMetadataParam): Promise<FetchResponse<200, types.ListDocumentTemplatesResponse200>> {
    return this.core.fetch('/documenttemplate.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Document Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createDocumentTemplates(body: types.DocumentTemplateCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/documenttemplate.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Retrieve a Document Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getDocumentTemplates(metadata: types.GetDocumentTemplatesMetadataParam): Promise<FetchResponse<200, types.DocumentTemplate>> {
    return this.core.fetch('/documenttemplate/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Update a Document Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateDocumentTemplates(body: types.DocumentTemplateCreate, metadata: types.UpdateDocumentTemplatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/documenttemplate/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Delete a Document Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteDocumentTemplates(metadata: types.DeleteDocumentTemplatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/documenttemplate/{uuid}.json', 'delete', metadata);
  }

  /**
   * Returns merged inbound and outbound email history for jobs in the account.
   *
   * @summary List job email history
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   */
  listEmailMessages(metadata?: types.ListEmailMessagesMetadataParam): Promise<FetchResponse<200, types.EmailRecordList>> {
    return this.core.fetch('/email.json', 'get', metadata);
  }

  /**
   * Returns a single job email record by UUID.
   *
   * @summary Get one job email record
   * @throws FetchError<403, types.Error> Forbidden
   * @throws FetchError<404, types.Error> Record not found
   */
  getEmailMessage(metadata: types.GetEmailMessageMetadataParam): Promise<FetchResponse<200, types.EmailRecord>> {
    return this.core.fetch('/email/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary List all Email Templates
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listEmailTemplates(metadata?: types.ListEmailTemplatesMetadataParam): Promise<FetchResponse<200, types.ListEmailTemplatesResponse200>> {
    return this.core.fetch('/emailtemplate.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Email Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createEmailTemplates(body: types.EmailTemplateCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/emailtemplate.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Retrieve an Email Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getEmailTemplates(metadata: types.GetEmailTemplatesMetadataParam): Promise<FetchResponse<200, types.EmailTemplate>> {
    return this.core.fetch('/emailtemplate/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Update an Email Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateEmailTemplates(body: types.EmailTemplateCreate, metadata: types.UpdateEmailTemplatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/emailtemplate/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Delete an Email Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteEmailTemplates(metadata: types.DeleteEmailTemplatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/emailtemplate/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_feedback**.
   *
   * 			
   *
   * @summary List all Feedback
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listFeedback(metadata?: types.ListFeedbackMetadataParam): Promise<FetchResponse<200, types.ListFeedbackResponse200>> {
    return this.core.fetch('/feedback.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_feedback**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Feedback
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createFeedback(body: types.FeedbackCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/feedback.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_feedback**.
   *
   * 			
   *
   * @summary Retrieve a Feedback
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getFeedback(metadata: types.GetFeedbackMetadataParam): Promise<FetchResponse<200, types.Feedback>> {
    return this.core.fetch('/feedback/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_feedback**.
   *
   * 			
   *
   * @summary Update a Feedback
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateFeedback(body: types.FeedbackCreate, metadata: types.UpdateFeedbackMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/feedback/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_feedback**.
   *
   * 			
   *
   * @summary Delete a Feedback
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteFeedback(metadata: types.DeleteFeedbackMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/feedback/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_forms**.
   *
   * 			
   *
   * @summary List all Forms
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listForms(metadata?: types.ListFormsMetadataParam): Promise<FetchResponse<200, types.ListFormsResponse200>> {
    return this.core.fetch('/form.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Form
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createForms(body: types.FormCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/form.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_forms**.
   *
   * 			
   *
   * @summary Retrieve a Form
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getForms(metadata: types.GetFormsMetadataParam): Promise<FetchResponse<200, types.Form>> {
    return this.core.fetch('/form/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   *
   * @summary Update a Form
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateForms(body: types.FormCreate, metadata: types.UpdateFormsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/form/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   *
   * @summary Delete a Form
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteForms(metadata: types.DeleteFormsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/form/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_forms**.
   *
   * 			
   *
   * @summary List all Form Fields
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listFormFields(metadata?: types.ListFormFieldsMetadataParam): Promise<FetchResponse<200, types.ListFormFieldsResponse200>> {
    return this.core.fetch('/formfield.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Form Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createFormFields(body: types.FormFieldCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/formfield.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_forms**.
   *
   * 			
   *
   * @summary Retrieve a Form Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getFormFields(metadata: types.GetFormFieldsMetadataParam): Promise<FetchResponse<200, types.FormField>> {
    return this.core.fetch('/formfield/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   *
   * @summary Update a Form Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateFormFields(body: types.FormFieldCreate, metadata: types.UpdateFormFieldsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/formfield/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   *
   * @summary Delete a Form Field
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteFormFields(metadata: types.DeleteFormFieldsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/formfield/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_forms**.
   *
   * 			
   *
   * @summary List all Form Responses
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listFormResponses(metadata?: types.ListFormResponsesMetadataParam): Promise<FetchResponse<200, types.ListFormResponsesResponse200>> {
    return this.core.fetch('/formresponse.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Form Response
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createFormResponses(body: types.FormResponseCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/formresponse.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_forms**.
   *
   * 			
   *
   * @summary Retrieve a Form Response
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getFormResponses(metadata: types.GetFormResponsesMetadataParam): Promise<FetchResponse<200, types.FormResponse>> {
    return this.core.fetch('/formresponse/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   *
   * @summary Update a Form Response
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateFormResponses(body: types.FormResponseCreate, metadata: types.UpdateFormResponsesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/formresponse/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_forms**.
   *
   * 			
   *
   * @summary Delete a Form Response
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteFormResponses(metadata: types.DeleteFormResponsesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/formresponse/{uuid}.json', 'delete', metadata);
  }

  /**
   * Retrieves a paginated list of inbox messages with optional filtering
   *
   * @summary List inbox messages
   * @throws FetchError<400, types.Error> Service Unavailable - Inbox not enabled
   * @throws FetchError<403, types.Error> Forbidden - Missing permission or OAuth scope
   */
  listInboxMessages(metadata?: types.ListInboxMessagesMetadataParam): Promise<FetchResponse<200, types.InboxMessagesResponse>> {
    return this.core.fetch('/inboxmessage.json', 'get', metadata);
  }

  /**
   * Creates a new inbox message that will appear in the inbox
   *
   * @summary Create a new inbox message
   * @throws FetchError<400, types.Error> Bad request - Invalid input
   * @throws FetchError<403, types.Error> Forbidden - Missing permission or OAuth scope
   * @throws FetchError<404, types.Error> Not found - Related entity not found
   * @throws FetchError<500, types.Error> Internal server error
   */
  createInboxMessage(body: types.CreateInboxMessageRequest): Promise<FetchResponse<201, types.InboxMessageDetail>> {
    return this.core.fetch('/inboxmessage.json', 'post', body);
  }

  /**
   * Retrieves detailed information about a specific inbox message including attachments and
   * conversation history
   *
   * @summary Get inbox message details
   * @throws FetchError<404, types.Error> Message not found
   */
  getInboxMessage(metadata: types.GetInboxMessageMetadataParam): Promise<FetchResponse<200, types.InboxMessageDetail>> {
    return this.core.fetch('/inboxmessage/{uuid}.json', 'get', metadata);
  }

  /**
   * Archives or unarchives an inbox message
   *
   * @summary Archive or unarchive message
   */
  archiveInboxMessage(body: types.ArchiveRequest, metadata: types.ArchiveInboxMessageMetadataParam): Promise<FetchResponse<200, types.SuccessResponse>> {
    return this.core.fetch('/inboxmessage/{uuid}/archive.json', 'put', body, metadata);
  }

  /**
   * Attaches an inbox message to an existing job
   *
   * @summary Attach message to existing job
   * @throws FetchError<404, types.Error> Job not found
   */
  attachInboxMessageToJob(body: types.AttachToJobRequest, metadata: types.AttachInboxMessageToJobMetadataParam): Promise<FetchResponse<200, types.AttachToJobResponse>> {
    return this.core.fetch('/inboxmessage/{uuid}/attach-to-job.json', 'post', body, metadata);
  }

  /**
   * Converts an inbox message into a new job, optionally using a job template
   *
   * @summary Convert message to job
   */
  convertInboxMessageToJob(body: types.ConvertToJobRequest, metadata: types.ConvertInboxMessageToJobMetadataParam): Promise<FetchResponse<201, types.ConvertToJobResponse>> {
    return this.core.fetch('/inboxmessage/{uuid}/convert-to-job.json', 'post', body, metadata);
  }

  /**
   * Adds a note to an inbox message
   *
   * @summary Add note to message
   * @throws FetchError<400, types.Error> Bad request - Empty note
   */
  addNoteToInboxMessage(body: types.AddNoteRequest, metadata: types.AddNoteToInboxMessageMetadataParam): Promise<FetchResponse<201, types.SuccessResponse>> {
    return this.core.fetch('/inboxmessage/{uuid}/notes.json', 'post', body, metadata);
  }

  /**
   * Marks an inbox message as read
   *
   * @summary Mark message as read
   * @throws FetchError<404, types.Error> Message not found
   */
  markInboxMessageAsRead(metadata: types.MarkInboxMessageAsReadMetadataParam): Promise<FetchResponse<200, types.SuccessResponse>> {
    return this.core.fetch('/inboxmessage/{uuid}/read.json', 'put', metadata);
  }

  /**
   * Snoozes a message until a specified date/time or unsnoozes it
   *
   * @summary Snooze or unsnooze message
   * @throws FetchError<400, types.Error> Bad request - Invalid snooze date
   */
  snoozeInboxMessage(body: types.SnoozeRequest, metadata: types.SnoozeInboxMessageMetadataParam): Promise<FetchResponse<200, types.SuccessResponse>> {
    return this.core.fetch('/inboxmessage/{uuid}/snooze.json', 'put', body, metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_jobs**.
   *
   * 			
   *
   * @summary List all Jobs
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobs(metadata?: types.ListJobsMetadataParam): Promise<FetchResponse<200, types.ListJobsResponse200>> {
    return this.core.fetch('/job.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **create_jobs**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobs(body: types.JobCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/job.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_jobs**.
   *
   * 			
   * 			
   * #### Open in ServiceM8
   * Use `https://go.servicem8.com/OpenJob/{uuid}` to open this Job in the ServiceM8 web app.
   * This is a web app URL, not a REST API endpoint. Users who are not signed in are
   * redirected through login and then back to the requested Job. The signed-in staff member
   * must have access to the Job and Dispatch Board.
   *
   * 			
   *
   * @summary Retrieve a Job
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobs(metadata: types.GetJobsMetadataParam): Promise<FetchResponse<200, types.Job>> {
    return this.core.fetch('/job/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_jobs**.
   *
   * 			
   *
   * @summary Update a Job
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobs(body: types.JobCreate, metadata: types.UpdateJobsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/job/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_jobs**.
   *
   * 			
   *
   * @summary Delete a Job
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobs(metadata: types.DeleteJobsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/job/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary List all Job Activities
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobActivities(metadata?: types.ListJobActivitiesMetadataParam): Promise<FetchResponse<200, types.ListJobActivitiesResponse200>> {
    return this.core.fetch('/jobactivity.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Activity
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobActivities(body: types.JobActivityCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobactivity.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary Retrieve a Job Activity
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobActivities(metadata: types.GetJobActivitiesMetadataParam): Promise<FetchResponse<200, types.JobActivity>> {
    return this.core.fetch('/jobactivity/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Update a Job Activity
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobActivities(body: types.JobActivityCreate, metadata: types.UpdateJobActivitiesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobactivity/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Delete a Job Activity
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobActivities(metadata: types.DeleteJobActivitiesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobactivity/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_admin_activity**.
   *
   * 			
   *
   * @summary List all Job Activities
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobAdminActivities(metadata?: types.ListJobAdminActivitiesMetadataParam): Promise<FetchResponse<200, types.ListJobAdminActivitiesResponse200>> {
    return this.core.fetch('/jobadminactivity.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_admin_activity**.
   *
   * 			
   *
   * @summary Retrieve a Job Activity
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobAdminActivities(metadata: types.GetJobAdminActivitiesMetadataParam): Promise<FetchResponse<200, types.JobAdminActivity>> {
    return this.core.fetch('/jobadminactivity/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary List all Job Allocations
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobAllocations(metadata?: types.ListJobAllocationsMetadataParam): Promise<FetchResponse<200, types.ListJobAllocationsResponse200>> {
    return this.core.fetch('/joballocation.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Allocation
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobAllocations(body: types.JobAllocationCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/joballocation.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_schedule**.
   *
   * 			
   *
   * @summary Retrieve a Job Allocation
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobAllocations(metadata: types.GetJobAllocationsMetadataParam): Promise<FetchResponse<200, types.JobAllocation>> {
    return this.core.fetch('/joballocation/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Update a Job Allocation
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobAllocations(body: types.JobAllocationCreate, metadata: types.UpdateJobAllocationsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/joballocation/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_schedule**.
   *
   * 			
   *
   * @summary Delete a Job Allocation
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobAllocations(metadata: types.DeleteJobAllocationsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/joballocation/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_checklists**.
   *
   * 			
   *
   * @summary List all Job Checklists
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobChecklists(metadata?: types.ListJobChecklistsMetadataParam): Promise<FetchResponse<200, types.ListJobChecklistsResponse200>> {
    return this.core.fetch('/jobchecklist.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_checklists**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Checklist
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobChecklists(body: types.JobChecklistCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobchecklist.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_checklists**.
   *
   * 			
   *
   * @summary Retrieve a Job Checklist
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobChecklists(metadata: types.GetJobChecklistsMetadataParam): Promise<FetchResponse<200, types.JobChecklist>> {
    return this.core.fetch('/jobchecklist/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_checklists**.
   *
   * 			
   *
   * @summary Update a Job Checklist
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobChecklists(body: types.JobChecklistCreate, metadata: types.UpdateJobChecklistsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobchecklist/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_checklists**.
   *
   * 			
   *
   * @summary Delete a Job Checklist
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobChecklists(metadata: types.DeleteJobChecklistsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobchecklist/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_contacts**.
   *
   * 			
   *
   * @summary List all Job Contacts
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobContacts(metadata?: types.ListJobContactsMetadataParam): Promise<FetchResponse<200, types.ListJobContactsResponse200>> {
    return this.core.fetch('/jobcontact.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_contacts**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobContacts(body: types.JobContactCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobcontact.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_contacts**.
   *
   * 			
   *
   * @summary Retrieve a Job Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobContacts(metadata: types.GetJobContactsMetadataParam): Promise<FetchResponse<200, types.JobContact>> {
    return this.core.fetch('/jobcontact/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_contacts**.
   *
   * 			
   *
   * @summary Update a Job Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobContacts(body: types.JobContactCreate, metadata: types.UpdateJobContactsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobcontact/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_contacts**.
   *
   * 			
   *
   * @summary Delete a Job Contact
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobContacts(metadata: types.DeleteJobContactsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobcontact/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_materials**.
   *
   * 			
   *
   * @summary List all Job Materials
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobMaterials(metadata?: types.ListJobMaterialsMetadataParam): Promise<FetchResponse<200, types.ListJobMaterialsResponse200>> {
    return this.core.fetch('/jobmaterial.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_materials**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobMaterials(body: types.JobMaterialCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobmaterial.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_materials**.
   *
   * 			
   *
   * @summary Retrieve a Job Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobMaterials(metadata: types.GetJobMaterialsMetadataParam): Promise<FetchResponse<200, types.JobMaterial>> {
    return this.core.fetch('/jobmaterial/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_materials**.
   *
   * 			
   *
   * @summary Update a Job Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobMaterials(body: types.JobMaterialCreate, metadata: types.UpdateJobMaterialsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobmaterial/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_materials**.
   *
   * 			
   *
   * @summary Delete a Job Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobMaterials(metadata: types.DeleteJobMaterialsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobmaterial/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_materials**.
   *
   * 			
   *
   * @summary List all Job Material Bundles
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobMaterialBundles(metadata?: types.ListJobMaterialBundlesMetadataParam): Promise<FetchResponse<200, types.ListJobMaterialBundlesResponse200>> {
    return this.core.fetch('/jobmaterialbundle.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_materials**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Material Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobMaterialBundles(body: types.JobMaterialBundleCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobmaterialbundle.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_materials**.
   *
   * 			
   *
   * @summary Retrieve a Job Material Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobMaterialBundles(metadata: types.GetJobMaterialBundlesMetadataParam): Promise<FetchResponse<200, types.JobMaterialBundle>> {
    return this.core.fetch('/jobmaterialbundle/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_materials**.
   *
   * 			
   *
   * @summary Update a Job Material Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobMaterialBundles(body: types.JobMaterialBundleCreate, metadata: types.UpdateJobMaterialBundlesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobmaterialbundle/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_materials**.
   *
   * 			
   *
   * @summary Delete a Job Material Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobMaterialBundles(metadata: types.DeleteJobMaterialBundlesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobmaterialbundle/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_payments**.
   *
   * 			
   *
   * @summary List all Job Payments
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobPayments(metadata?: types.ListJobPaymentsMetadataParam): Promise<FetchResponse<200, types.ListJobPaymentsResponse200>> {
    return this.core.fetch('/jobpayment.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_payments**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Payment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobPayments(body: types.JobPaymentCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobpayment.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_payments**.
   *
   * 			
   *
   * @summary Retrieve a Job Payment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobPayments(metadata: types.GetJobPaymentsMetadataParam): Promise<FetchResponse<200, types.JobPayment>> {
    return this.core.fetch('/jobpayment/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_payments**.
   *
   * 			
   *
   * @summary Update a Job Payment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobPayments(body: types.JobPaymentCreate, metadata: types.UpdateJobPaymentsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobpayment/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_payments**.
   *
   * 			
   *
   * @summary Delete a Job Payment
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobPayments(metadata: types.DeleteJobPaymentsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/jobpayment/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_jobs**.
   *
   * 			
   *
   * @summary List all Job Templates
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobTemplates(metadata?: types.ListJobTemplatesMetadataParam): Promise<FetchResponse<200, types.ListJobTemplatesResponse200>> {
    return this.core.fetch('/jobtemplate.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_jobs**.
   *
   * 			
   *
   * @summary Retrieve a Job Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobTemplates(metadata: types.GetJobTemplatesMetadataParam): Promise<FetchResponse<200, types.JobTemplate>> {
    return this.core.fetch('/jobtemplate/{uuid}.json', 'get', metadata);
  }

  /**
   * Creates a new job by cloning an existing job template. All template entities (tasks,
   * materials, checklists, quotes, custom fields) are cloned to the new job.
   *
   * #### Field Overrides
   * Only the following fields can be overridden when creating a job from a template:
   * - `job_description` - Job description
   * - `company_uuid` - UUID of the company/client
   * - `company_name` - Name of the company/client (will lookup existing or create new)
   * - `job_address` - Street address for the job
   *
   * **Note:** You cannot specify both `company_uuid` and `company_name`. If `company_name`
   * is provided, the system will first search for an existing company with that name. If
   * found, it will use that company's UUID. If not found, a new company will be created.
   *
   * Any other fields in the request body will be ignored.
   *
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **create_jobs**.
   *
   * @summary Create a job from a template
   * @throws FetchError<400, types.Error> Bad request - Invalid input data
   * @throws FetchError<403, types.Error> Forbidden - Missing required OAuth scope
   * @throws FetchError<404, types.Error> Not Found - Template UUID not found or inactive
   * @throws FetchError<405, types.Error> Method Not Allowed
   * @throws FetchError<500, types.Error> Internal Server Error
   */
  createJobFromTemplate(body: types.JobTemplateOverrides, metadata: types.CreateJobFromTemplateMetadataParam): Promise<FetchResponse<201, types.CreateJobFromTemplateResponse201>> {
    return this.core.fetch('/jobtemplate/{uuid}/job.json', 'post', body, metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_knowledge**.
   *
   * 			
   *
   * @summary List all Knowledge Articles
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listKnowledgeArticles(metadata?: types.ListKnowledgeArticlesMetadataParam): Promise<FetchResponse<200, types.ListKnowledgeArticlesResponse200>> {
    return this.core.fetch('/knowledgearticle.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_knowledge**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Knowledge Article
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createKnowledgeArticles(body: types.KnowledgeArticleCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/knowledgearticle.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_knowledge**.
   *
   * 			
   *
   * @summary Retrieve a Knowledge Article
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getKnowledgeArticles(metadata: types.GetKnowledgeArticlesMetadataParam): Promise<FetchResponse<200, types.KnowledgeArticle>> {
    return this.core.fetch('/knowledgearticle/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_knowledge**.
   *
   * 			
   *
   * @summary Update a Knowledge Article
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateKnowledgeArticles(body: types.KnowledgeArticleCreate, metadata: types.UpdateKnowledgeArticlesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/knowledgearticle/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_knowledge**.
   *
   * 			
   *
   * @summary Delete a Knowledge Article
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteKnowledgeArticles(metadata: types.DeleteKnowledgeArticlesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/knowledgearticle/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_locations**.
   *
   * 			
   *
   * @summary List all Locations
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listLocations(metadata?: types.ListLocationsMetadataParam): Promise<FetchResponse<200, types.ListLocationsResponse200>> {
    return this.core.fetch('/location.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_locations**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Location
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createLocations(body: types.LocationCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/location.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_locations**.
   *
   * 			
   *
   * @summary Retrieve a Location
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getLocations(metadata: types.GetLocationsMetadataParam): Promise<FetchResponse<200, types.Location>> {
    return this.core.fetch('/location/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_locations**.
   *
   * 			
   *
   * @summary Update a Location
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateLocations(body: types.LocationCreate, metadata: types.UpdateLocationsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/location/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_locations**.
   *
   * 			
   *
   * @summary Delete a Location
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteLocations(metadata: types.DeleteLocationsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/location/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_inventory**.
   *
   * 			
   *
   * @summary List all Materials
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listMaterials(metadata?: types.ListMaterialsMetadataParam): Promise<FetchResponse<200, types.ListMaterialsResponse200>> {
    return this.core.fetch('/material.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_inventory**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createMaterials(body: types.MaterialCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/material.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_inventory**.
   *
   * 			
   *
   * @summary Retrieve a Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getMaterials(metadata: types.GetMaterialsMetadataParam): Promise<FetchResponse<200, types.Material>> {
    return this.core.fetch('/material/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_inventory**.
   *
   * 			
   *
   * @summary Update a Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateMaterials(body: types.MaterialCreate, metadata: types.UpdateMaterialsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/material/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_inventory**.
   *
   * 			
   *
   * @summary Delete a Material
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteMaterials(metadata: types.DeleteMaterialsMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/material/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_inventory**.
   *
   * 			
   *
   * @summary List all Bundles
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listBundles(metadata?: types.ListBundlesMetadataParam): Promise<FetchResponse<200, types.ListBundlesResponse200>> {
    return this.core.fetch('/materialbundle.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_inventory**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createBundles(body: types.MaterialBundleCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/materialbundle.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_inventory**.
   *
   * 			
   *
   * @summary Retrieve a Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getBundles(metadata: types.GetBundlesMetadataParam): Promise<FetchResponse<200, types.MaterialBundle>> {
    return this.core.fetch('/materialbundle/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_inventory**.
   *
   * 			
   *
   * @summary Update a Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateBundles(body: types.MaterialBundleCreate, metadata: types.UpdateBundlesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/materialbundle/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_inventory**.
   *
   * 			
   *
   * @summary Delete a Bundle
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteBundles(metadata: types.DeleteBundlesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/materialbundle/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_notes**.
   *
   * 			
   *
   * @summary List all Notes
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listNotes(metadata?: types.ListNotesMetadataParam): Promise<FetchResponse<200, types.ListNotesResponse200>> {
    return this.core.fetch('/note.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **publish_job_notes**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Note
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createNotes(body: types.NoteCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/note.json', 'post', body);
  }

  /**
   * Sends a notification from the calling add-on to each supplied staff recipient.
   *
   * @summary Create add-on notifications
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   * @throws FetchError<405, types.Error> Method not allowed
   * @throws FetchError<500, types.Error> Internal server error
   */
  createNotification(body: types.NotificationCreateRequest): Promise<FetchResponse<201, types.NotificationCreateResponse>> {
    return this.core.fetch('/notification.json', 'post', body);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_queues**.
   *
   * 			
   *
   * @summary List all Job Queues
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listJobQueues(metadata?: types.ListJobQueuesMetadataParam): Promise<FetchResponse<200, types.ListJobQueuesResponse200>> {
    return this.core.fetch('/queue.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_queues**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Job Queue
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createJobQueues(body: types.QueueCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/queue.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_job_queues**.
   *
   * 			
   *
   * @summary Retrieve a Job Queue
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getJobQueues(metadata: types.GetJobQueuesMetadataParam): Promise<FetchResponse<200, types.Queue>> {
    return this.core.fetch('/queue/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_queues**.
   *
   * 			
   *
   * @summary Update a Job Queue
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateJobQueues(body: types.QueueCreate, metadata: types.UpdateJobQueuesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/queue/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_job_queues**.
   *
   * 			
   *
   * @summary Delete a Job Queue
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteJobQueues(metadata: types.DeleteJobQueuesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/queue/{uuid}.json', 'delete', metadata);
  }

  /**
   * Performs a text search across jobs, companies, and materials. Returns combined results
   * sorted by relevance.
   *
   * @summary Search across multiple object types
   * @throws FetchError<400, types.Error> Bad request - Missing query parameter
   * @throws FetchError<500, types.Error> Internal server error
   */
  generalSearch(metadata: types.GeneralSearchMetadataParam): Promise<FetchResponse<200, types.SearchResponse>> {
    return this.core.fetch('/search.json', 'get', metadata);
  }

  /**
   * Harness the power of advanced AI embeddings to revolutionise how you search through job
   * data. This endpoint transforms your search query into high-dimensional vector
   * embeddings, then intelligently matches it against our entire job database using semantic
   * similarity algorithms.
   *
   * How it works:
   * 1. AI Query Understanding - Your search terms are processed through neural embedding
   * models that understand context, intent, and meaning
   * 2. Vector-Based Matching - The system compares your query against vector representations
   * of all job content in real-time
   * 3. Intelligent Ranking - Returns results ranked by semantic similarity, not just keyword
   * matching
   *
   * Why this matters:
   * - Find jobs about "plumbing repairs" even when searching for "fixing pipes"
   * - Discover relevant work orders that use different terminology but share the same intent
   * - Uncover hidden patterns and connections in your job data that traditional search would
   * miss
   *
   * This isn't just search—it's AI that truly understands what you're looking for and
   * delivers the most relevant results, even when the exact words don't match.
   *
   * @summary Semantic search for jobs
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<500, types.Error> Internal server error
   * @throws FetchError<503, types.Error> Service unavailable - Embedding search not available
   */
  jobEmbeddingSearch(metadata: types.JobEmbeddingSearchMetadataParam): Promise<FetchResponse<200, types.EmbeddingSearchResponse>> {
    return this.core.fetch('/search/job/embedding.json', 'get', metadata);
  }

  /**
   * Performs a text search within a specific object type. Supported types: job, company,
   * material, knowledgearticle, attachment, formresponse, asset, materialbundle
   *
   * @summary Search within a specific object type
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<429, types.Error> Too many requests - Search throttled
   * @throws FetchError<500, types.Error> Internal server error
   */
  objectSearch(metadata: types.ObjectSearchMetadataParam): Promise<FetchResponse<200, types.ObjectSearchResponse>> {
    return this.core.fetch('/search/{objectType}.json', 'get', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_security_roles**.
   *
   * 			
   *
   * @summary List all Security Roles
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listSecurityRoles(metadata?: types.ListSecurityRolesMetadataParam): Promise<FetchResponse<200, types.ListSecurityRolesResponse200>> {
    return this.core.fetch('/securityrole.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_security_roles**.
   *
   * 			
   *
   * @summary Retrieve a Security Role
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getSecurityRoles(metadata: types.GetSecurityRolesMetadataParam): Promise<FetchResponse<200, types.SecurityRole>> {
    return this.core.fetch('/securityrole/{uuid}.json', 'get', metadata);
  }

  /**
   * Returns merged inbound and outbound SMS history for jobs in the account.
   *
   * @summary List job SMS history
   * @throws FetchError<400, types.Error> Bad request
   * @throws FetchError<403, types.Error> Forbidden
   */
  listSMSMessages(metadata?: types.ListSmsMessagesMetadataParam): Promise<FetchResponse<200, types.SmsRecordList>> {
    return this.core.fetch('/sms.json', 'get', metadata);
  }

  /**
   * Returns a single merged job SMS record by UUID.
   *
   * @summary Get one job SMS record
   * @throws FetchError<403, types.Error> Forbidden
   * @throws FetchError<404, types.Error> Record not found
   */
  getSMSMessage(metadata: types.GetSmsMessageMetadataParam): Promise<FetchResponse<200, types.SmsRecord>> {
    return this.core.fetch('/sms/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary List all SMS Templates
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listSMSTemplates(metadata?: types.ListSmsTemplatesMetadataParam): Promise<FetchResponse<200, types.ListSmsTemplatesResponse200>> {
    return this.core.fetch('/smstemplate.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new SMS Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createSMSTemplates(body: types.SmsTemplateCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/smstemplate.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Retrieve a SMS Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getSMSTemplates(metadata: types.GetSmsTemplatesMetadataParam): Promise<FetchResponse<200, types.SmsTemplate>> {
    return this.core.fetch('/smstemplate/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Update a SMS Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateSMSTemplates(body: types.SmsTemplateCreate, metadata: types.UpdateSmsTemplatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/smstemplate/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_templates**.
   *
   * 			
   *
   * @summary Delete a SMS Template
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteSMSTemplates(metadata: types.DeleteSmsTemplatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/smstemplate/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_staff**.
   *
   * 			
   *
   * @summary List all Staff Members
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listStaffMembers(metadata?: types.ListStaffMembersMetadataParam): Promise<FetchResponse<200, types.ListStaffMembersResponse200>> {
    return this.core.fetch('/staff.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_staff**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Staff Member
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createStaffMembers(body: types.StaffCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/staff.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_staff**.
   *
   * 			
   *
   * @summary Retrieve a Staff Member
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getStaffMembers(metadata: types.GetStaffMembersMetadataParam): Promise<FetchResponse<200, types.Staff>> {
    return this.core.fetch('/staff/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_staff**.
   *
   * 			
   *
   * @summary Update a Staff Member
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateStaffMembers(body: types.StaffCreate, metadata: types.UpdateStaffMembersMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/staff/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_staff**.
   *
   * 			
   *
   * @summary Delete a Staff Member
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteStaffMembers(metadata: types.DeleteStaffMembersMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/staff/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_messages**.
   *
   * 			
   *
   * @summary List all Staff Messages
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listStaffMessages(metadata?: types.ListStaffMessagesMetadataParam): Promise<FetchResponse<200, types.ListStaffMessagesResponse200>> {
    return this.core.fetch('/staffmessage.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **publish_messages**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header. Existing attachment UUIDs require the read_attachments OAuth scope; multipart
   * file uploads additionally require manage_attachments.
   *
   * @summary Create a new Staff Message
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<413, types.Error> Uploaded files are too large
   * @throws FetchError<415, types.Error> Unsupported multipart upload filename
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createStaffMessages(body: types.StaffMessageCreate): Promise<FetchResponse<200, types.Result> | FetchResponse<201, types.StaffMessage>> {
    return this.core.fetch('/staffmessage.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_messages**.
   *
   * 			
   *
   * @summary Retrieve a Staff Message
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getStaffMessages(metadata: types.GetStaffMessagesMetadataParam): Promise<FetchResponse<200, types.StaffMessage>> {
    return this.core.fetch('/staffmessage/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **publish_messages**.
   *
   * 			
   *
   * @summary Update a Staff Message
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateStaffMessages(body: types.StaffMessageCreate, metadata: types.UpdateStaffMessagesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/staffmessage/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **publish_messages**.
   *
   * 			
   *
   * @summary Delete a Staff Message
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteStaffMessages(metadata: types.DeleteStaffMessagesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/staffmessage/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_suppliers**.
   *
   * 			
   *
   * @summary List all Suppliers
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listSuppliers(metadata?: types.ListSuppliersMetadataParam): Promise<FetchResponse<200, types.ListSuppliersResponse200>> {
    return this.core.fetch('/supplier.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_suppliers**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Supplier
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createSuppliers(body: types.SupplierCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/supplier.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_suppliers**.
   *
   * 			
   *
   * @summary Retrieve a Supplier
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getSuppliers(metadata: types.GetSuppliersMetadataParam): Promise<FetchResponse<200, types.Supplier>> {
    return this.core.fetch('/supplier/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_suppliers**.
   *
   * 			
   *
   * @summary Update a Supplier
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateSuppliers(body: types.SupplierCreate, metadata: types.UpdateSuppliersMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/supplier/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_suppliers**.
   *
   * 			
   *
   * @summary Delete a Supplier
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteSuppliers(metadata: types.DeleteSuppliersMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/supplier/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_tasks**.
   *
   * 			
   *
   * @summary List all Tasks
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listTasks(metadata?: types.ListTasksMetadataParam): Promise<FetchResponse<200, types.ListTasksResponse200>> {
    return this.core.fetch('/task.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_tasks**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Task
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createTasks(body: types.TaskCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/task.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_tasks**.
   *
   * 			
   *
   * @summary Retrieve a Task
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getTasks(metadata: types.GetTasksMetadataParam): Promise<FetchResponse<200, types.Task>> {
    return this.core.fetch('/task/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_tasks**.
   *
   * 			
   *
   * @summary Update a Task
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateTasks(body: types.TaskCreate, metadata: types.UpdateTasksMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/task/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_tasks**.
   *
   * 			
   *
   * @summary Delete a Task
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteTasks(metadata: types.DeleteTasksMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/task/{uuid}.json', 'delete', metadata);
  }

  /**
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_tax_rates**.
   *
   * 			
   *
   * @summary List all Tax Rates
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listTaxRates(metadata?: types.ListTaxRatesMetadataParam): Promise<FetchResponse<200, types.ListTaxRatesResponse200>> {
    return this.core.fetch('/taxrate.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_tax_rates**.
   *
   * 			
   * 			
   * #### Record UUID
   * UUID is optional for record creation. If no UUID is supplied, a UUID will be
   * automatically generated for the new record and returned in the `x-record-uuid` response
   * header.
   *
   * 			
   *
   * @summary Create a new Tax Rate
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to create this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  createTaxRates(body: types.TaxRateCreate): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/taxrate.json', 'post', body);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **read_tax_rates**.
   *
   * 			
   *
   * @summary Retrieve a Tax Rate
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getTaxRates(metadata: types.GetTaxRatesMetadataParam): Promise<FetchResponse<200, types.TaxRate>> {
    return this.core.fetch('/taxrate/{uuid}.json', 'get', metadata);
  }

  /**
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_tax_rates**.
   *
   * 			
   *
   * @summary Update a Tax Rate
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to update this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to update does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  updateTaxRates(body: types.TaxRateCreate, metadata: types.UpdateTaxRatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/taxrate/{uuid}.json', 'post', body, metadata);
  }

  /**
   * 			
   * In ServiceM8, deleting a record sets its `active` field to `0`. Inactive records are
   * still accessible on the API, but are hidden in the UI. Inactive records can be restored
   * by setting their `active` field to `1`.
   *
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **manage_tax_rates**.
   *
   * 			
   *
   * @summary Delete a Tax Rate
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to delete this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The record to delete does not exist or has already been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  deleteTaxRates(metadata: types.DeleteTaxRatesMetadataParam): Promise<FetchResponse<200, types.Result>> {
    return this.core.fetch('/taxrate/{uuid}.json', 'delete', metadata);
  }

  /**
   * Vendor account information
   *
   *
   * 			
   * #### Filtering
   * This endpoint supports result filtering using the `$filter` query parameter. For more
   * information on how to filter this request, [go
   * here](https://developer.servicem8.com/docs/filtering).
   * 			
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **vendor**.
   *
   * 			
   *
   * @summary List all Vendors
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  listVendors(metadata?: types.ListVendorsMetadataParam): Promise<FetchResponse<200, types.ListVendorsResponse200>> {
    return this.core.fetch('/vendor.json', 'get', metadata);
  }

  /**
   * Vendor account information
   *
   *
   * 			
   * #### OAuth Scope
   * This endpoint requires the following OAuth scope **vendor**.
   *
   * 			
   *
   * @summary Retrieve a Vendor
   * @throws FetchError<400, types.Error> Bad Request - The request is malformed or contains invalid parameters
   * @throws FetchError<401, types.AuthenticationError> Unauthorized - Authentication credentials are missing or invalid
   * @throws FetchError<403, types.ForbiddenError> Forbidden - You don't have permission to access this resource
   * @throws FetchError<404, types.NotFoundError> Not Found - The requested record does not exist or has been deleted
   * @throws FetchError<429, types.RateLimitError> Too Many Requests - You have exceeded the rate limit
   * @throws FetchError<500, types.Error> Internal Server Error - An unexpected error occurred on the server
   */
  getVendors(metadata: types.GetVendorsMetadataParam): Promise<FetchResponse<200, types.Vendor>> {
    return this.core.fetch('/vendor/{uuid}.json', 'get', metadata);
  }
}
