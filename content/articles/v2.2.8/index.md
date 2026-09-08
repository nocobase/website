### 🚀 Improvements

- **[WeCom]** Improved type safety and unified the notification recipient selector in the WeCom plugin. by @chenzhizdt

### 🐛 Bug Fixes

- **[server]** Fixed applications unexpectedly starting in environments where they were not deployed ([#10464](https://github.com/nocobase/nocobase/pull/10464)) by @2013xile

- **[Notification: In-app message]** Allow all workflow variable types in in-app notification titles and detail links. ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher

- **[File manager]** Prevent file redirects from reusing expired signed storage URLs. ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher

- **[Data source manager]** Added current user and current role variable selection to v2 permission data scopes ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx

- **[Workflow: JavaScript]** Fixed an issue where a timed-out JavaScript workflow node could incorrectly abort the workflow instead of respecting "Continue when exception thrown". ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher

- **[AI employees]** Fixed AI employees repeatedly querying knowledge bases when the Knowledge Base Prompt omitted the retrieved-content placeholder, and added clear validation guidance when saving the configuration. ([#10413](https://github.com/nocobase/nocobase/pull/10413)) by @cgyrock

- **[AI: Knowledge base]** Fixed PGVector connection testing, ZIP import result display, document segment-setting inheritance, and validation for chunk overlap values in AI knowledge bases. by @cgyrock

- **[App supervisor]** Fixed exposure of sub-application authentication secrets in application management responses by @2013xile

- **[DingTalk]** Unified the DingTalk notification recipient selector. by @chenzhizdt

