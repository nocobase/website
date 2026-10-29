### 🚀 Improvements

- **[acl]** Point NocoBase 2 documentation links to nocode.docs.nocobase.com ([#11163](https://github.com/nocobase/nocobase/pull/11163)) by @Molunerfinn

- **[AI employees]** Improved AI employee chat usability on mobile and in narrow blocks, with a compact toolbar, bottom-sheet options, touch-friendly selectors, and automatic options dismissal when picking a block. ([#11230](https://github.com/nocobase/nocobase/pull/11230)) by @cgyrock

- **[DingTalk]** Fix DingTalk Stream mode failing on file-based plugin installs; cut full-sync API calls ~90%; show DingTalk quota reset time on sync failure by @chenzhizdt

### 🐛 Bug Fixes

- **[client-v2]** Fixed V2 field assignment so multiple select fields use multiple mode and submit arrays, including submit, update record and bulk update actions ([#11112](https://github.com/nocobase/nocobase/pull/11112)) by @hongboji

- **[Authentication]** Fixed authenticator options being rendered before their auth type plugin finished loading, which made LDAP sign-in fail with "must either provide a buffer via raw or some value" after an application reload ([#11182](https://github.com/nocobase/nocobase/pull/11182)) by @hongboji

- **[Workflow: CC]** Restrict workflow task reads to assigned users and supported associations. ([#11097](https://github.com/nocobase/nocobase/pull/11097)) by @mytharcher

- **[AI employees]** Added an optional stateless request mode for OpenAI Responses services to avoid response-item errors when a gateway routes requests across Azure OpenAI resources. ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

