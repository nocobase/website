### 🎉 New Features

- **[Backup manager]** Added backup and restore support for AI mode portals with an independent setting ([#10240](https://github.com/nocobase/nocobase/pull/10240)) by @2013xile

### 🚀 Improvements

- **[Portal manager]**
  - Use fixed Portal layouts, default AI Portals to Desktop without a layout option, allow cross-layout selection, and fix entry routing ([#10230](https://github.com/nocobase/nocobase/pull/10230)) by @zhangzhonghe

  - Improve Portal Manager form copy and descriptions. ([#10242](https://github.com/nocobase/nocobase/pull/10242)) by @katherinehhh

- **[Workflow]** Workflow create and update nodes now support combining text with variables when assigning string and text fields ([#10238](https://github.com/nocobase/nocobase/pull/10238)) by @mytharcher

- **[AI: Knowledge base]** Improved knowledge base page layouts, scrolling, loading states, empty states, and action alignment by @cgyrock

### 🐛 Bug Fixes

- **[cli]** Fixed portal CLI path resolution, deployment, and HTML build behavior for sub-app/custom-domain portals, and preserved existing portal HTML when a portal is disabled. ([#10244](https://github.com/nocobase/nocobase/pull/10244)) by @chenos

- **[Workflow]** Fixed an issue where manually executing a workflow with `autoRevision=0` could still create a new revision. ([#10243](https://github.com/nocobase/nocobase/pull/10243)) by @mytharcher

- **[UI templates]** Fix the issue where table blocks load data after returning to a page with empty filters ([#9890](https://github.com/nocobase/nocobase/pull/9890)) by @zhangzhonghe

- **[Users]** Preserve the originating no-code Portal when navigating between sign-in and sign-up. ([#10235](https://github.com/nocobase/nocobase/pull/10235)) by @katherinehhh

- **[Template print]** Fixed unwanted spacing between Latin and East Asian text in PDF files generated from DOCX templates. by @jiannx

- **[Workflow: Approval]** Fix missing external data source fields in approval views by @zhangzhonghe

