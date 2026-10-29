### 🚀 Improvements

- **[server]** Allow the snowflake worker id to be rebound while the application is running. ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile

- **[AI employees]** Improved AI employee chat usability on mobile and in narrow blocks, with a compact toolbar, bottom-sheet options, touch-friendly selectors, and automatic options dismissal when picking a block. ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock

- **[Workflow]** Improved workflow execution detail performance by loading only the latest job per node and loading node history on demand with cursor pagination and lightweight fields. ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher

- **[DingTalk]**
  - Add configurable Max QPS throttling for DingTalk API calls and retry flow-control errors with backoff by @chenzhizdt

  - Fix DingTalk Stream mode failing on file-based plugin installs; cut full-sync API calls ~90%; show DingTalk quota reset time on sync failure by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]** Fixed V2 field assignment so multiple select fields use multiple mode and submit arrays, including submit, update record and bulk update actions ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji

- **[Workflow: CC]** Restrict workflow task reads to assigned users and supported associations. ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher

- **[AI employees]**
  - Added an optional stateless request mode for OpenAI Responses services to avoid response-item errors when a gateway routes requests across Azure OpenAI resources. ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

  - Fixed the page freeze when opening the UI Editor while an AI employee button is hidden by a linkage rule ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji

  - Fixed embedding response encoding compatibility with Qwen/DashScope endpoints to prevent document and query vector dimension mismatches. Previously affected knowledge bases require re-vectorization. ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock

- **[Authentication]** Fixed authenticator options being rendered before their auth type plugin finished loading, which made LDAP sign-in fail with "must either provide a buffer via raw or some value" after an application reload ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

