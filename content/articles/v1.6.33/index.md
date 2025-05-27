### 🚀 Improvements

- **[undefined]** Build the full docker image ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos

- **[client]** Optimize the issue of pages becoming increasingly slow with use ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe

- **[Calendar]** support configurable refresh button in calendar block ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh

- **[Workflow: Custom action event]** Fix en-US locales based on zh-CN keys by @mytharcher

- **[Workflow: Approval]** Support to do all todos in workflow tasks center by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - rendering error caused by invalid style format when adding association field ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh

  - incorrect empty value check for toMany association field in linkage rule ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** markdown (Vditor) field not adapting to theme ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh

- **[Collection: Tree]** Avoid incorrect updates to similar path prefixes during path updates ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile

- **[File manager]**
  - Fix preview match rule ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher

  - Fix client collection injection and upload parameter ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher

  - Fix preview URL on non-image files ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher

- **[Workflow: mailer node]** Handle undefined 'to' field and improve email recipient processing. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66

- **[Workflow: Custom action event]**
  - Fix button perform incorrectly after a few clicks by @mytharcher

  - Fix error handler can not be matched by class by @mytharcher

- **[Workflow: Approval]** Fix association appends calculation by @mytharcher

