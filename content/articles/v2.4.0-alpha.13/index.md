### 🚀 Improvements

- **[server]** Allow the snowflake worker id to be rebound while the application is running. ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile

- **[Workflow]** Improved workflow execution detail performance by loading only the latest job per node and loading node history on demand with cursor pagination and lightweight fields. ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher

- **[DingTalk]** Add configurable Max QPS throttling for DingTalk API calls and retry flow-control errors with backoff by @chenzhizdt

### 🐛 Bug Fixes

- **[AI employees]**
  - Fixed the page freeze when opening the UI Editor while an AI employee button is hidden by a linkage rule ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji

  - Fixed embedding response encoding compatibility with Qwen/DashScope endpoints to prevent document and query vector dimension mismatches. Previously affected knowledge bases require re-vectorization. ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock

