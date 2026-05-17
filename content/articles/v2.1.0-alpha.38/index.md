### 🐛 Bug Fixes

- **[client]**
  - Fixed an issue where current popup record variables could not be resolved in action button event flows. ([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust

  - Fixed an issue where JS field values in subforms were not correctly set during form submission. ([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust

- **[flow-engine]** Fixed incorrect error message in browser's console. ([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust

- **[Workflow: JavaScript]** Fixed workflow JavaScript QuickJS runtime package loading in production builds. ([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher

- **[Action: Import records]** Fix the issue where imported record on date-like fields shows wrong date ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher

- **[Action: Import records Pro]** fix timezone handling for pro xlsx imports by @mytharcher

- **[Action: Export records Pro]** Fix the issue where error thrown when export attachment from attachment url field by @mytharcher

