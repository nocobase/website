Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://nocode.nocobase.com/en/blog/timeline).

**NocoBase is currently updated across three branches: `main`, `next`, and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: The most stable version to date, recommended for installation.
* `next`: Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It is mainly used to collect feedback from test users and further optimize features. Ideal for test users who want to experience new features early and provide feedback.
* `develop`: Alpha version, contains the latest feature code, may be incomplete or unstable, and is mainly used for internal development and rapid iteration. Suited for technical users interested in cutting-edge product capabilities, but not recommended for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.2.36

*Release date: 2026-10-29*

### 🚀 Improvements

- **[AI employees]** Improved AI employee chat usability on mobile and in narrow blocks, with a compact toolbar, bottom-sheet options, touch-friendly selectors, and automatic options dismissal when picking a block. ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock

### 🐛 Bug Fixes

- **[Feishu / Lark]** Fix the Feishu workflow notification form not rendering on legacy URLs (no `/v`), and message fields being dropped from the saved node config on modern URLs by @chenzhizdt

### v2.2.35

*Release date: 2026-10-28*

### 🐛 Bug Fixes

- **[Authentication]** Fixed authenticator options being rendered before their auth type plugin finished loading, which made LDAP sign-in fail with “must either provide a buffer via raw or some value” after an application reload ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

### v2.2.34

*Release date: 2026-10-27*

### 🚀 Improvements

- **[DingTalk]** Fix DingTalk Stream mode failing on file-based plugin installs; cut full-sync API calls ~90%; show DingTalk quota reset time on sync failure by @chenzhizdt

### 🐛 Bug Fixes

- **[AI employees]** Added an optional stateless request mode for OpenAI Responses services to avoid response-item errors when a gateway routes requests across Azure OpenAI resources. ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock
- **[Feishu / Lark]** Fix Feishu OAuth callback URLs missing the `APP_PUBLIC_PATH` prefix; fix automatic login not triggering and landing on a 404 in the v2 client by @chenzhizdt

### v2.2.33

*Release date: 2026-10-25*

### 🐛 Bug Fixes

- **[Workflow: CC]** Restrict workflow task reads to assigned users and supported associations. ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher

### v2.2.32

*Release date: 2026-10-25*

### 🚀 Improvements

- **[DingTalk]** Add configurable Max QPS throttling for DingTalk API calls and retry flow-control errors with backoff by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]** Fixed V2 field assignment so multiple select fields use multiple mode and submit arrays, including submit, update record and bulk update actions ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v2.3.0-beta.19

*Release date: 2026-10-29*

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
- **[Authentication]** Fixed authenticator options being rendered before their auth type plugin finished loading, which made LDAP sign-in fail with “must either provide a buffer via raw or some value” after an application reload ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### v2.4.0-alpha.14

*Release date: 2026-10-29*

### 🚀 Improvements

- **[acl]** Point NocoBase 2 documentation links to nocode.docs.nocobase.com ([#11163](https://github.com/nocobase/nocobase/pull/11163)) by @Molunerfinn
- **[AI employees]** Improved AI employee chat usability on mobile and in narrow blocks, with a compact toolbar, bottom-sheet options, touch-friendly selectors, and automatic options dismissal when picking a block. ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock
- **[DingTalk]** Fix DingTalk Stream mode failing on file-based plugin installs; cut full-sync API calls ~90%; show DingTalk quota reset time on sync failure by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]** Fixed V2 field assignment so multiple select fields use multiple mode and submit arrays, including submit, update record and bulk update actions ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji
- **[Authentication]** Fixed authenticator options being rendered before their auth type plugin finished loading, which made LDAP sign-in fail with “must either provide a buffer via raw or some value” after an application reload ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji
- **[Workflow: CC]** Restrict workflow task reads to assigned users and supported associations. ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher
- **[AI employees]** Added an optional stateless request mode for OpenAI Responses services to avoid response-item errors when a gateway routes requests across Azure OpenAI resources. ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

### v2.4.0-alpha.13

*Release date: 2026-10-24*

### 🚀 Improvements

- **[server]** Allow the snowflake worker id to be rebound while the application is running. ([#11076](https://github.com/nocobase/nocobase/pull/11076)) by @2013xile
- **[Workflow]** Improved workflow execution detail performance by loading only the latest job per node and loading node history on demand with cursor pagination and lightweight fields. ([#11094](https://github.com/nocobase/nocobase/pull/11094)) by @mytharcher
- **[DingTalk]** Add configurable Max QPS throttling for DingTalk API calls and retry flow-control errors with backoff by @chenzhizdt

### 🐛 Bug Fixes

- **[AI employees]**

  - Fixed the page freeze when opening the UI Editor while an AI employee button is hidden by a linkage rule ([#11100](https://github.com/nocobase/nocobase/pull/11100)) by @hongboji
  - Fixed embedding response encoding compatibility with Qwen/DashScope endpoints to prevent document and query vector dimension mismatches. Previously affected knowledge bases require re-vectorization. ([#11074](https://github.com/nocobase/nocobase/pull/11074)) by @cgyrock
