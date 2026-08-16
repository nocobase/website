### 🚀 Improvements

- **[lock-manager]** Added renewable local lock leases and ensured try-acquired locks are released safely across reuse and errors ([#10368](https://github.com/nocobase/nocobase/pull/10368)) by @jiannx

- **[Redis lock adapter]** Added renewable Redis lock leases and made reusable lock handles release safely during contention and errors by @jiannx

### 🐛 Bug Fixes

- **[File manager]** Fix the extra submit step when selecting an existing file in a single-value field ([#10372](https://github.com/nocobase/nocobase/pull/10372)) by @zhangzhonghe

- **[Collection field: Markdown(Vditor)]** Fix Markdown HTML previews in v2 details blocks under dark themes. ([#10370](https://github.com/nocobase/nocobase/pull/10370)) by @katherinehhh

- **[Collection field: Encryption]** Fixed bulk import failing with `model.changed is not a function` when the collection contains an encryption field by @cgyrock

- **[Workflow: Webhook]** Fixed a 400 error when manually executing a webhook workflow without request headers by @mytharcher

