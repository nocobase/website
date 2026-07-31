### 🎉 New Features

- **[Portal manager]** Support configuring and routing to an application-wide default Portal. ([#10225](https://github.com/nocobase/nocobase/pull/10225)) by @katherinehhh

- **[AI employees]** Added UI navigation for supported LLM service CLI commands, including provider preselection when creating a service. ([#10210](https://github.com/nocobase/nocobase/pull/10210)) by @cgyrock

- **[AI: Knowledge base]** Added UI navigation for creating and editing vector databases from CLI commands, with provider preselection for new databases. by @cgyrock

- **[Multi-space]** Added default-space configuration so newly created users automatically join the selected default space. by @jiannx

### 🚀 Improvements

- **[undefined]** Added a multilingual plugin development guide for defining AI employee Tools, Skills, built-in employees, and frontend interactions ([#10226](https://github.com/nocobase/nocobase/pull/10226)) by @cgyrock
Reference: [AI employee plugin development](https://github.com/nocobase/nocobase/blob/docs/add-custom-ai-employee-skill/docs/docs/en/ai-employees/dev/ai-employee/index.md)
- **[Portal manager]** Portal cards become compact rows grouped by build mode, the settings header drops its white band, and switches, alerts and the API documentation page follow the neutral theme ([#10233](https://github.com/nocobase/nocobase/pull/10233)) by @Albert-mah

- **[AI: Knowledge base]**
  - Aligned the vector database list styling with other settings tables by @cgyrock

  - Improved the knowledge base detail page with breadcrumb navigation, tab-based sections, and more responsive content layouts. by @cgyrock

### 🐛 Bug Fixes

- **[server]** Removed the obsolete knowledge base detail redirect that forced legacy Admin URLs into the Settings application. ([#10232](https://github.com/nocobase/nocobase/pull/10232)) by @cgyrock

- **[client-v2]**
  - Change the settings search shortcut to avoid conflicts with version control shortcuts ([#10222](https://github.com/nocobase/nocobase/pull/10222)) by @zhangzhonghe

  - Fixed Kanban column quick create records not inheriting the selected group value ([#10215](https://github.com/nocobase/nocobase/pull/10215)) by @jiannx

  - Fix the issue where the Settings header appears on the OAuth device verification page ([#10228](https://github.com/nocobase/nocobase/pull/10228)) by @zhangzhonghe

  - Clarify Settings access messages and prevent menus from flashing for unauthorized roles ([#10219](https://github.com/nocobase/nocobase/pull/10219)) by @zhangzhonghe

- **[UI layout]** Fix desktop pages using mobile styles on narrow screens ([#10229](https://github.com/nocobase/nocobase/pull/10229)) by @zhangzhonghe

- **[Block: Gantt]** Fixed custom record colors not being applied to short Gantt task bars ([#10217](https://github.com/nocobase/nocobase/pull/10217)) by @jiannx

- **[AI employees]**
  - Fixed the untranslated Settings tab in the AI plugin's client-v2 settings pages ([#10234](https://github.com/nocobase/nocobase/pull/10234)) by @cgyrock

  - Fix the theme mismatch in unsaved changes confirmation dialogs ([#10223](https://github.com/nocobase/nocobase/pull/10223)) by @zhangzhonghe

- **[Block: Tree]** Fixed Tree block searches showing placeholder nodes when no business-field records matched ([#10218](https://github.com/nocobase/nocobase/pull/10218)) by @jiannx

- **[Portal manager]** Reject duplicate Portal names with a localized conflict response. ([#10231](https://github.com/nocobase/nocobase/pull/10231)) by @katherinehhh

- **[AI: Knowledge base]** Fixed knowledge base detail navigation and aligned the hit-tests page width across Admin and Settings. by @cgyrock

