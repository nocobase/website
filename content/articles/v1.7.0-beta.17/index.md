### 🎉 New Features

- **[Departments]** Make Department, Attachment URL, and Workflow response message plugins free ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

- **[Action: Batch update]** Support refreshing data in other data blocks after updating data in a block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

### 🚀 Improvements

- **[Workflow]** Support fixed popup URL for workflow tasks ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Switching to the group menu should not jump to a page that has already been hidden in menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe

  - The filter form should not display the "Unsaved changes" prompt ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe

  - Fix the issue of preview images being obscured ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe

  - In the filter form, when the filter button is clicked, if there are fields that have not passed validation, the filtering is still triggered ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe

  - "allow multiple" option not working for relation field ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh

  - In the form block, the default value of the field configuration will first be displayed as the original variable string and then disappear ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

- **[Collection field: Attachment(URL)]** only allow file collections with public URL access ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh

- **[File storage: S3(Pro)]**
  - Individual baseurl and public settings, improve S3 pro storage config UX by @jiannx

  - Organize language by @jiannx

- **[Workflow: Approval]** Support fixed URL for approval items in tasks center by @mytharcher

- **[Migration manager]** the skip auto backup option becomes invalid if environment variable popup appears during migration by @gchust

