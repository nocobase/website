### 🎉 New Features

- **[DingTalk]** Added DingTalk Stream mode support for organization event synchronization. by @chenzhizdt

- **[Auth: LDAP]** Added LDAP user data sync source support, including optional AD department synchronization. by @chenzhizdt

### 🚀 Improvements

- **[ai]** Reduced main-process memory usage when parsing uploaded knowledge base documents. ([#10083](https://github.com/nocobase/nocobase/pull/10083)) by @cgyrock

- **[undefined]**
  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

  - File URLs now use stable NocoBase access URLs so permissions can be checked before redirecting to storage. ([#10047](https://github.com/nocobase/nocobase/pull/10047)) by @mytharcher

- **[File storage: S3(Pro)]** S3 Pro uploads now return the created file record with permanent file URLs. by @mytharcher

- **[RabbitMQ queue adapter]** Enhance the channel management and error recovery capabilities of the RabbitMQ adapter by @sdp-ncd

### 🐛 Bug Fixes

- **[User data synchronization]** Fixed external department sync order so child departments can be reparented correctly when their parent is synced later. ([#10028](https://github.com/nocobase/nocobase/pull/10028)) by @chenzhizdt

- **[Collection field: Markdown(Vditor)]** Fixed iframe sanitization for v1 Markdown rendering and editing. ([#10096](https://github.com/nocobase/nocobase/pull/10096)) by @katherinehhh

- **[Workflow]** Fixed hidden fields being included when workflow serializes appended association data ([#10086](https://github.com/nocobase/nocobase/pull/10086)) by @mytharcher

- **[AI employees]** Fixed AI tool-call approvals to authorize against the message's owning conversation before updating decisions. ([#10077](https://github.com/nocobase/nocobase/pull/10077)) by @cgyrock

- **[Data source: External NocoBase]**
  - Fixed file preview, permanent URL handling, and upload routing for external NocoBase file collections, including S3 Pro uploads by @mytharcher

  - Fixed workflow AI employees being unable to read attachments from External NocoBase data sources by @2013xile

