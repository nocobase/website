### 🎉 New Features

- **[client]** Single-line text fields support entering multiple keywords for filtering ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
  Reference: [Multi-keyword filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Multi-keyword filter]** Single-line text fields support entering multiple keywords for filtering by @zhangzhonghe
  Reference: [Multi-keyword filter](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Template print]** Add support for bulk printing in template printing. by @sheldon66

### 🚀 Improvements

- **[Workflow]** Add all missed en-US locale keys ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - cascade component in modal not loading association data initially ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - association data not submitted when exposing association fields  in subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - draggable sort fields not displaying available options correctly ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - missing current form variables in data scope of data selector table ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - association select record table did not filter already associate record ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
- **[database]** handle empty string cells during field import to prevent errors ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[Workflow: Manual node]** Fix render error when show unprocessed item ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[File manager]** Fix types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
- **[Block: Action panel]** Read the route basename from the scanner to adapt for the desktop environment. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[AI integration]** Content is not displayed when switching between LLM service config and validation config pages ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[Workflow]** Fix stack limit works incorrectly for collection event ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[Workflow: Approval]** Fix assignees scope of delegate and add to other assignees by @mytharcher
- **[Backup manager]** Fix type error in build by @mytharcher
