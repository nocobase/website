### 🎉 New Features

- **[client]** Support variable configuration after submission, enabling redirection with current data ID ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh

- **[Collection field: Markdown(Vditor)]** Vditor supports S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

### 🚀 Improvements

- **[client]**
  - Only support plain text file to preview ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher

  - Optimize 502 error message ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos

  - Restrict available actions for different field properties in linkage rules ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh

- **[Workflow]** Split executed columns to stats tables ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher

- **[Mobile]** Adapt the style of the notification pop-up for mobile devices ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe

- **[Collection field: Sequence]** support setting sequence as the title field for calendar block ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh

- **[File manager]** Adjust `getFileData` API of storage ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher

- **[Access control]** Optimize the order and style of role switching ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie

- **[Public forms]** set public form page title to the configured title upon creation ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh

- **[Workflow: Custom action event]** Split executed columns to stats tables by @mytharcher

- **[Workflow: Approval]**
  - Support to skip validator in settings by @mytharcher

  - Split executed columns to stats tables by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Older versions of browsers will display a blank page ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe

  - Unable to open another modal within a modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe

  - The 'Ellipsis overflow content' option requires a page refresh for the toggle state to take effect ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe

  - issue with date field display in data scope filtering ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh

  - The top menu of the page is displaying blank ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe

  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

  - Unable to use 'Current User' variable when adding a link page ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe

  - field assignment with null value is ineffective ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh

  - Save as template action will be failed if containing association field ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

  - Remove the 'Allow multiple selection' option from dropdown single-select fields in filter forms ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe

  - Relational field's data range linkage is not effective ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe

  - `yarn doc` command error ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust

  - table row button drag-and-drop issue ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh

- **[Mobile]** Adjust the font size displayed on the phone to 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe

- **[Workflow]**
  - Fix error thrown when configure auto delete options ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher

  - Make sure workflow key is generated before save ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher

- **[Variables and secrets]** missing icon filter button, filter count not displaying, and data not refreshing after filtering when switching pages ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh

- **[Public forms]** issue with public form page title displaying 'Loading...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

- **[API documentation]** API document page cannot scroll ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe

- **[Workflow: Post-action event]** Multiple records in bulk action should trigger multiple times ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher

- **[Block: template]**
  - duplicate save as template menu in the details block ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust

  - linkage rules of the form block have not been synced from template correctly ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust

- **[Authentication]** Localization issue for fields of sign up page ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile

- **[Action: Custom request]** Unable to download UTF-8 encoded files ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

- **[Collection: Tree]** Migration issue for plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile

- **[Block: Multi-step form]** the submit button has the same color in its default and highlighted by @jiannx

- **[Workflow: Approval]** Fix approval form values to submit by @mytharcher

