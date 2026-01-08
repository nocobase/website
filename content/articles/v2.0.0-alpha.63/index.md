### 🚀 Improvements

- **[client]**
  - prevent full table re-render when updating a cell ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh

  - Auto-resize textarea in AI edit task form. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang

- **[Workflow: Approval]**
  - Add repair logic for sync audiences after migration by @mytharcher

  - Simplify parameters in query, and improve performance by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where field and action permissions were not recalculated after pagination in details, list, and form blocks. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust

  - fix association fields from external data sources not loading association data in form blocks ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh

- **[sdk]** Improve token sharing implementation ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos

- **[Access control]** Allow association fields to associate using the target keys ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile

- **[Workflow: Loop node]** Fix the issue where failed node in condition branch cannot pass status to upper branching node ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher

- **[Workflow: Webhook]** Fix the issue where 404 error thrown when post to webhook URL in sub-app by @mytharcher

- **[Workflow: Approval]** Fix build error caused by missed dependencies by @mytharcher

- **[Email manager]** Fix Outlook reply link occasionally disconnected by @jiannx

