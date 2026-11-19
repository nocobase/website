### 🚀 Improvements

- **[undefined]** NocoBase Docker images with built-in Nginx now include Nginx 1.30.7. ([#11620](https://github.com/nocobase/nocobase/pull/11620))

- **[AI employees]** Hid Datasource from AI employee settings and the chat context menu. ([#11621](https://github.com/nocobase/nocobase/pull/11621))

### 🐛 Bug Fixes

- **[cli]** You can now list records in a single space with `nb api resource list --space <name>`. ([#11599](https://github.com/nocobase/nocobase/pull/11599))
Reference: [Resource list](https://github.com/nocobase/nocobase/pull/11615)
- **[client]** Newly created aggregate variables can be selected and inserted in the same legacy iframe HTML editor dialog. ([#11607](https://github.com/nocobase/nocobase/pull/11607))

- **[File manager]** Expanded file storage records retain ordinary fields such as file rules and base URLs while hiding engine options and server-side request settings. ([#11611](https://github.com/nocobase/nocobase/pull/11611))

- **[Public forms]** Public forms now accept submissions only for their configured data source and collection. ([#11536](https://github.com/nocobase/nocobase/pull/11536))

- **[UI templates]** Creating, editing, or deleting UI templates and accessing template usage records now require the template management permission. Signed-in users can still read templates. ([#11537](https://github.com/nocobase/nocobase/pull/11537))

- **[Form drafts]** Forms now show a warning and remain available for editing and submission when the browser cannot open draft storage. ([#11625](https://github.com/nocobase/nocobase/pull/11625))

