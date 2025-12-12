### 🚀 Improvements

- **[Workflow]**
  - Add fault-tolerant logic for data missing in the processor preparation, to avoid execution hang ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher

  - Use lazy load for association data on workflow canvas to improve performance ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

### 🐛 Bug Fixes

- **[acl]** Fix the issue where the API `acl.can` return `null` when role is `root` ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher

- **[Workflow: Manual node]** Fix the issue manual todo list is using incorrect API ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher

- **[HTTP request encryption]** Use brackets for array format in qs parsing by @chenos

- **[Workflow: Approval]** Fix the issue where error thrown when cancel a execution when its workflow is deleted by @mytharcher

- **[Migration manager]** Fix an issue where line breaks in data were lost during migration. by @cgyrock

