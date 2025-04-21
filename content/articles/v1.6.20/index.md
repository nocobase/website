### 🎉 New Features

- **[Departments]** Make Department, Attachment URL, and Workflow response message plugins free ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

### 🐛 Bug Fixes

- **[client]**
  - The filter form should not display the "Unsaved changes" prompt ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe

  - "allow multiple" option not working for relation field ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh

  - In the filter form, when the filter button is clicked, if there are fields that have not passed validation, the filtering is still triggered ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe

  - Switching to the group menu should not jump to a page that has already been hidden in menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe

- **[File storage: S3(Pro)]**
  - Organize language by @jiannx

  - Individual baseurl and public settings, improve S3 pro storage config UX by @jiannx

- **[Migration manager]** the skip auto backup option becomes invalid if environment variable popup appears during migration by @gchust

