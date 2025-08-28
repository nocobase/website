Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.22](https://www.nocobase.com/en/blog/v1.8.22)

*Release date: 2025-08-27*

#### 🐛 Bug Fixes

- **[Workflow]** Fix the issue where the detail popup was not displayed due to an incorrect route configuration in the tasks center ([#7452](https://github.com/nocobase/nocobase/pull/7452)) by @mytharcher

### [v1.8.21](https://www.nocobase.com/en/blog/v1.8.21)

*Release date: 2025-08-26*

#### 🐛 Bug Fixes

- **[File manager]** Fix the error when editing the `storage` field in the file collection. ([#7393](https://github.com/nocobase/nocobase/pull/7393)) by @mytharcher
- **[Workflow: Parallel node]** Fix the issue where incorrect status determination in parallel branch nodes under the "Run all branch" mode caused premature completion ([#7445](https://github.com/nocobase/nocobase/pull/7445)) by @mytharcher
- **[Workflow: Approval]** Add the status variable for custom templates in approval completion notifications by @mytharcher

### [v1.8.20](https://www.nocobase.com/en/blog/v1.8.20)

*Release date: 2025-08-25*

#### 🚀 Improvements

- **[Workflow]** Adjust the workflow variable API to support presetting an additional variable list ([#7439](https://github.com/nocobase/nocobase/pull/7439)) by @mytharcher
- **[Workflow: Approval]**

  - Support using approval-related variables in custom notifications by @mytharcher
  - Support updating the approval status after the end node terminates the execution by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Fix an issue where, in certain scenarios, editing a record in the mobile record picker popup causes an error ([#7444](https://github.com/nocobase/nocobase/pull/7444)) by @zhangzhonghe
  - required validation not working for attachment fields in subtable ([#7431](https://github.com/nocobase/nocobase/pull/7431)) by @katherinehhh
  - Fix the issue where the icon was displayed incorrectly when the URL in the attachment URL field contained query parameters ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher
- **[database]**

  - Fixed a MySQL syntax error that occurred when loading more in-app messages. ([#7438](https://github.com/nocobase/nocobase/pull/7438)) by @aaaaaajie
  - Fixed precision issue for exported Number fields ([#7421](https://github.com/nocobase/nocobase/pull/7421)) by @aaaaaajie
- **[undefined]** Fixed issue with filtering by date field only in MySQL external source ([#7422](https://github.com/nocobase/nocobase/pull/7422)) by @aaaaaajie
- **[Action: Import records]** Fixed an issue where import failed when the table primary key was a single-line text ([#7416](https://github.com/nocobase/nocobase/pull/7416)) by @aaaaaajie
- **[Workflow]**

  - Complete the options for automatically deleting workflow execution status ([#7436](https://github.com/nocobase/nocobase/pull/7436)) by @mytharcher
  - Fix issues related to the mobile menu in the workflow tasks ([#7419](https://github.com/nocobase/nocobase/pull/7419)) by @mytharcher
- **[Action: Import records Pro]** Fixed unexpected update result when using string primary key in xlsx import. by @aaaaaajie

### [v1.8.19](https://www.nocobase.com/en/blog/v1.8.19)

*Release date: 2025-08-22*

#### 🎉 New Features

- **[Workflow: Approval]** Add inline template type for notification configuration by @mytharcher

#### 🚀 Improvements

- **[client]** Support displaying icons identified by strings in the Select component when in read-only mode ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
- **[database]** Optimized ACL Meta query performance ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[Mobile]** Optimize the mobile popup component ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[database]** Fixed issue where Postgres external table reads included views from other schemas ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[Block: template]** Resolved an issue where mail blocks were not visible when placed inside an inherited template block ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[Action: Import records Pro]** Disallow assigning relation fields during import duplicate detection. by @aaaaaajie
- **[Workflow: Approval]** Fix the issue where the user list was empty during countersigning by @mytharcher
- **[Migration manager]** Skip the `\restrict` and `\unrestrict` commands generated by the latest pg_dump when creating migration files to resolve restore errors. by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Release date: 2025-07-24*


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Release date: 2025-07-18*
