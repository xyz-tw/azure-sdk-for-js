/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureMLWebServicesManagementClientContext } from "./azureMLWebServicesManagementClientContext";


class AzureMLWebServicesManagementClient extends AzureMLWebServicesManagementClientContext {
  // Operation groups
  operations: operations.Operations;
  webServices: operations.WebServices;

  /**
   * Initializes a new instance of the AzureMLWebServicesManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The Azure subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AzureMLWebServicesManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.webServices = new operations.WebServices(this);
  }
}

// Operation Specifications

export {
  AzureMLWebServicesManagementClient,
  AzureMLWebServicesManagementClientContext,
  Models as AzureMLWebServicesManagementModels,
  Mappers as AzureMLWebServicesManagementMappers
};
export * from "./operations";
