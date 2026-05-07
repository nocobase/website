### 🚀 Improvements

- **[undefined]** add Feishu failure notification for manual release workflows ([#9349](https://github.com/nocobase/nocobase/pull/9349)) by @Molunerfinn
- **[IdP: OAuth]** OAuth sessions now use the same expiration settings as the system token policy ([#9345](https://github.com/nocobase/nocobase/pull/9345)) by @2013xile

### 🐛 Bug Fixes

- **[client-v2]** Fixed remote plugin loading so plugin URLs that already end with `.js` are not resolved to duplicate `.js.js` paths. ([#9336](https://github.com/nocobase/nocobase/pull/9336)) by @Molunerfinn
- **[cli]** Fixed CLI boolean options so they can be disabled with negated flags ([#9337](https://github.com/nocobase/nocobase/pull/9337)) by @2013xile
- **[AI employees]**

  - Fix the issue of occasional errors when AI employee use the DeepSeek v4 model ([#9348](https://github.com/nocobase/nocobase/pull/9348)) by @cgyrock
  - Fix the issue where the workflow AI employee node  clears skills after switching AI employees ([#9342](https://github.com/nocobase/nocobase/pull/9342)) by @cgyrock
- **[Data source: Main]** Prevent crash when fields is undefined during collection loading ([#9174](https://github.com/nocobase/nocobase/pull/9174)) by @saraTabbane
- **[UI templates]** Fixed an issue where the popup template list failed to correctly load available templates. ([#9332](https://github.com/nocobase/nocobase/pull/9332)) by @gchust
- **[Block: Kanban]** Fixed kanban associated blocks using unresolved runtime resource params in popup or secondary-page contexts. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[Workflow: Approval]** Fix the issue where filter and other query parameters now work in API of listing available approval workflows by @mytharcher
