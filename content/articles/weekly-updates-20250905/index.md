Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Release date: 2025-09-03*

#### 🚀 Improvements

- **[database]** Optimized list API count query to reduce resource consumption. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) by @aaaaaajie
- **[Notification: In-app message]** Support configuring the auto-close delay for in-app message notifications ([#7472](https://github.com/nocobase/nocobase/pull/7472)) by @mytharcher
- **[Workflow: notification node]** Support to test the node of notification ([#7470](https://github.com/nocobase/nocobase/pull/7470)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - association field render error when switched to tag component in edit form block ([#7468](https://github.com/nocobase/nocobase/pull/7468)) by @katherinehhh
  - time limit issue when selected date equals minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) by @katherinehhh
- **[Mobile]** mobile date field without timezone not showing date time correctly ([#7473](https://github.com/nocobase/nocobase/pull/7473)) by @katherinehhh
- **[Public forms]** public form field default value not applied when using variables ([#7467](https://github.com/nocobase/nocobase/pull/7467)) by @katherinehhh
- **[Action: Import records]** Fix incorrect row number displayed when duplicate data is imported ([#7440](https://github.com/nocobase/nocobase/pull/7440)) by @aaaaaajie
- **[Collection: Tree]** Remove database events related to the collection after deleting a tree collection ([#7459](https://github.com/nocobase/nocobase/pull/7459)) by @2013xile
- **[Workflow: Custom action event]** Fix the issue where custom action events cannot be manually executed immediately after initialization by @mytharcher
- **[Workflow: Subflow]** Fix the issue of subprocesses being resumed and executed multiple times by @mytharcher
- **[Workflow: Approval]** For users who are not the current approver, the corresponding view button in the process flow table will not be displayed by @mytharcher
