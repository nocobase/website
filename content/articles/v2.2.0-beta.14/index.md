### 🎉 New Features

- **[Auth: LDAP]** Added LDAP user data sync source support, including optional AD department synchronization. by @chenzhizdt

### 🚀 Improvements

- **[ai]** Reduced main-process memory usage when parsing uploaded knowledge base documents. ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock

- **[undefined]** File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

- **[Flow engine]** Support multi portals for ui build apis. ([#10072](https://github.com/nocobase/nocobase/pull/10072)) by @gchust

- **[File storage: S3(Pro)]** S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher

- **[RabbitMQ queue adapter]** Enhance the channel management and error recovery capabilities of the RabbitMQ adapter by @sdp-ncd

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed other column content showing through fixed v2 table columns when quick edit is enabled. ([#10076](https://github.com/nocobase/nocobase/pull/10076)) by @katherinehhh

  - Fixed v2 scan input camera preview layout issues on iOS Chrome. ([#10081](https://github.com/nocobase/nocobase/pull/10081)) by @katherinehhh

- **[Workflow]**
  - Fixed hidden fields being included when workflow serializes appended association data ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher

  - Fixed manual workflow execution returning an error when a valid request does not start an execution. ([#10049](https://github.com/nocobase/nocobase/pull/10049)) by @mytharcher

- **[Collection field: Markdown(Vditor)]** Fixed iframe sanitization for v1 Markdown rendering and editing. ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh

- **[Action: Batch edit]** Fixed Markdown editor initialization failure when a V2 form includes a `process` field. ([#10080](https://github.com/nocobase/nocobase/pull/10080)) by @katherinehhh

- **[UI layout]** Fixed the Mobile settings link opening the main application from a sub-application. ([#10075](https://github.com/nocobase/nocobase/pull/10075)) by @katherinehhh

- **[AI employees]**
  - Fixed AI tool-call approvals to authorize against the message's owning conversation before updating decisions. ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock

  - Fixed AI attachment handling to avoid trusting client-provided file paths or URLs. ([#10037](https://github.com/nocobase/nocobase/pull/10037)) by @cgyrock

- **[User data synchronization]** Fixed external department sync order so child departments can be reparented correctly when their parent is synced later. ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt

- **[Data source: External NocoBase]**
  - Fixed workflow AI employees being unable to read attachments from External NocoBase data sources by @2013xile

  - Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher

- **[Workflow: Approval]** Filter approval file associations by current user ownership when the temporary switch is enabled. by @mytharcher

