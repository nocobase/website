## New features

### Blocks support height settings ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

Reference document:

* [set block height](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### Link action: navigate to the specified URL ([#4506](https://github.com/nocobase/nocobase/pull/4506))

Support configuring variables in the URL or search params.

<video controls="" height="250" width="100%"></video>

Reference document:

* [Link action](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Add a new variable called “URL search params” ([#4506](https://github.com/nocobase/nocobase/pull/4506))

The variable is only available when there is a query string in the page URL, making it more convenient to use in conjunction with [link action](https://docs.nocobase.com/handbook/ui/actions/types/link).

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

Reference document:

* [URL search params](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [Link action](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe support variables ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

Reference document:

* [iframe block](https://docs.nocobase.com/handbook/block-iframe)

### File storages support configuring file size and file type ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

Reference document:

* [File Storage](https://docs.nocobase.com/handbook/file-manager/storage)

### Workflow: variable nodes support selecting partial path of data objects as the value of variables

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### URL fields support preview ([#4559](https://github.com/nocobase/nocobase/pull/4559))

Currently only support image preview.

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### Data visualization: Support for “URL query parameters” and “current role” variables ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## Improvements

### Import and export function optimization ([#4468](https://github.com/nocobase/nocobase/pull/4468))

Improved the stability of import and export function, increased the limit of import and export to 2000 records. Supports extended import and export logic of custom field types.

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### Avoid misoperation by disabling the date variable option ([#4452](https://github.com/nocobase/nocobase/pull/4452))

Except for the “current time”, the variables representing dates are intervals (arrays) rather than moments (strings). They can be used for filtering, but cannot be directly used as default values.

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### Linkage rule assignment interaction optimization ([#4492](https://github.com/nocobase/nocobase/pull/4492))

Multi-select fields do not show assignment options. If a single-select field is selected and assigned, then switching to a multi-select field will clear the configuration

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### Adjust the top-right icon of the action column in the table block ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### ErrorFallback ([#4459](https://github.com/nocobase/nocobase/pull/4459))

Refining error fallback for different components in the frontend to prevent the entrie page from becoming unusable due to a frontend error.

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### Collect debug information and quickly download logs when a frontend error occurs（[#4524](https://github.com/nocobase/nocobase/pull/4524)）

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### Others

* Modify character length limit of username to 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* Do not hide foreign key fields（[#4499](https://github.com/nocobase/nocobase/pull/4499)）

## Bug fixes

### The data scope in the permission configuration dialog should not support the “Current form” and “Current popup record” variables ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### Support selecting the value of a variable directly as the default value for a association field ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### Fix the issue of error when adding “Custom request” action multiple times ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### Others

* Fix the issue of content in the sub-table not being cleared after form submission. ([#4475](https://github.com/nocobase/nocobase/pull/4475))
* Fix the issue of abnormal use of the “Current object” variable in the sub-table. ([#4521](https://github.com/nocobase/nocobase/pull/4521))
* add ‘Set default zoom level’ option for map fields. ([#4527](https://github.com/nocobase/nocobase/pull/4527))
* Fix the issue of block not being displayed when adding a block using block templates in a popup window. ([#4531](https://github.com/nocobase/nocobase/pull/4531))
* Fix the style issue of form data templates. ([#4536](https://github.com/nocobase/nocobase/pull/4536))
* Workflow: expression box style disappeared in calculation node. ([#4513](https://github.com/nocobase/nocobase/pull/4513))
* Workflow: field type incorrect when created in custom form of manual node. ([#4519](https://github.com/nocobase/nocobase/pull/4519))
* Workflow: permission issue of triggering custom action event. ([#4522](https://github.com/nocobase/nocobase/pull/4522))
* Workflow: incorrect depth configuration of preloading assoacition for multiple data source. ([#4526](https://github.com/nocobase/nocobase/pull/4526))
* `json-templates` library bug. ([#4525](https://github.com/nocobase/nocobase/pull/4525))
* File manager: error when uploading or deleting file on COS. ([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* Form linkage rule displays [object Object] when assigning a value of 0.00 to a numeric field. ([#4482](https://github.com/nocobase/nocobase/pull/4482))
* Subtable is missing the control setting item for the add new button. ([#4498](https://github.com/nocobase/nocobase/pull/4498))
* Submit button in the table edit form is missing the linkage rule setting item. ([#4515](https://github.com/nocobase/nocobase/pull/4515))
* Data-visualization: fix the issue of field components invisible when setting default values for chart filter fields ([#4509](https://github.com/nocobase/nocobase/pull/4509))
* Authentication: fix the issue where the sign up page is not found for newly created basic authenticator. ([#4556](https://github.com/nocobase/nocobase/pull/4556))
* Localization: fix the issue where the page titles is not translated when translating the menu texts. ([#4557](https://github.com/nocobase/nocobase/pull/4557))
* Map: fix the issue where AMap shows a key error despite correct configuration. ([#4574](https://github.com/nocobase/nocobase/pull/4574))
