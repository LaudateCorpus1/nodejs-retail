// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


'use strict';

function main() {
  // [START retail_v2beta_generated_CatalogService_GetDefaultBranch_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The parent catalog resource name, such as
   *  `projects/* /locations/global/catalogs/default_catalog`.
   */
  // const catalog = 'abc123'

  // Imports the Retail library
  const {CatalogServiceClient} = require('@google-cloud/retail').v2beta;

  // Instantiates a client
  const retailClient = new CatalogServiceClient();

  async function callGetDefaultBranch() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await retailClient.getDefaultBranch(request);
    console.log(response);
  }

  callGetDefaultBranch();
  // [END retail_v2beta_generated_CatalogService_GetDefaultBranch_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
