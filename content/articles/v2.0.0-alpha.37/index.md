### 🚀 Improvements

- **[client]**
  - add page info version to flow engine context ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust

  - enhance Markdown Editor ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh

  - adapt to tableoid field in 2.0 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh

- **[Data visualization]** update alert tips and events code template annotations ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang

- **[Access control]** Optimize permission control logic for association field operations ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile

- **[Auth: OIDC]** Increase the request timeout by @2013xile

### 🐛 Bug Fixes

- **[server]** Fix an issue where, after enabling service-splitting mode, worker processes sending messages through the message queue would cause errors ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher

- **[client]**
  - current collection variable should not be selectable from filter component's variable selector ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust

  - Fix the error 'value.replace is not a function' in the filter form relationship field ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe

  - Fix incorrect parameters in the onChange callback ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe

- **[flow-engine]** Fix the issue where changes to the event flow would only take effect after refreshing the page. ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust

- **[Workflow]** Fix the issue where the workflow plugin still consumes the queue event when it is not in worker mode under the service splitting mode ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher

- **[Workflow: Approval]** Fix an issue where main collection fields were not excluded when reloading association data by @mytharcher

- **[Email manager]** Fix the issue of reserved images and synchronization in outlook by @jiannx

