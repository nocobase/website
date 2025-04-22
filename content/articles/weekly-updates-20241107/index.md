Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase is currently updated with two branches: `main` and `next`.

* `main`：The most stable version to date, recommended for installation;
* `next`：Alpha version, including some unreleased new features. This version may not be completely stable and is suitable for developers or testers to experience new features in advance or conduct compatibility testing.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*Release date: 2024-11-05*

### 🚀 Improvements

- **[client]** numeric precision can be configured to 8 digits ([#5552](https://github.com/nocobase/nocobase/pull/5552)) by @chenos

### 🐛 Bug Fixes

- **[client]** Fix linkage style not updating in form. ([#5539](https://github.com/nocobase/nocobase/pull/5539)) by @sheldon66
- **[Auth: API keys]** Fix the URL path for API keys settings page ([#5562](https://github.com/nocobase/nocobase/pull/5562)) by @2013xile
- **[Mobile]** Fix the issue of preview images being covered by page ([#5535](https://github.com/nocobase/nocobase/pull/5535)) by @zhangzhonghe
- **[Block: Map]** resolve map rendering in sub-details and incorrect value display for empty fields ([#5526](https://github.com/nocobase/nocobase/pull/5526)) by @katherinehhh
- **[Collection: Tree]** Fix errors when updating path collection ([#5551](https://github.com/nocobase/nocobase/pull/5551)) by @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*Release date: 2024-11-05*

### 🎉 New Features

- **[Auth: OIDC]** Add an option "enable RP-initiated logout" by @2013xile

### 🐛 Bug Fixes

- **[client]** Fix filter issue when setting single-select field as title field in association select ([#5581](https://github.com/nocobase/nocobase/pull/5581)) by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*Release date: 2024-10-31*

### 🎉 New Features

- **[WeCom]** Add WeCom notification channel by @chenzhizdt

### 🚀 Improvements

- **[client]** restore default value when field title is cleared ([#5549](https://github.com/nocobase/nocobase/pull/5549)) by @katherinehhh
- **[Notification manager]**

  - Add UserSelect and UserAddition components to streamline the development of notification channels ([#5553](https://github.com/nocobase/nocobase/pull/5553)) by @2013xile
  - add API for getting channel types registry of notification plugin ([#5531](https://github.com/nocobase/nocobase/pull/5531)) by @mytharcher
  - adjust channel types registry name of notification plugin ([#5532](https://github.com/nocobase/nocobase/pull/5532)) by @mytharcher
  - add API of notification manager plugin for getting all registered types ([#5529](https://github.com/nocobase/nocobase/pull/5529)) by @mytharcher
- **[Notification: In-app message]** Improve in-app message UI and add some logs. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) by @sheldon66

### 🐛 Bug Fixes

- **[database]**

  - fix  update collection options with filter target key ([#5558](https://github.com/nocobase/nocobase/pull/5558)) by @chareice
  - fix wrong primaryKeyField value in sequelize when works with multi filter target keys ([#5556](https://github.com/nocobase/nocobase/pull/5556)) by @chareice
- **[client]**

  - Fix the issue where skeleton components in table blocks do not disappear ([#5548](https://github.com/nocobase/nocobase/pull/5548)) by @zhangzhonghe
  - Fix  issues with deletion action , text ellipsis, and new data display in sub-table ([#5523](https://github.com/nocobase/nocobase/pull/5523)) by @katherinehhh
- **[Data source manager]** Fix remove data source in failed status ([#5554](https://github.com/nocobase/nocobase/pull/5554)) by @chareice
- **[Notification: Email]**

  - fix the query for users by ids in email notification ([#5533](https://github.com/nocobase/nocobase/pull/5533)) by @mytharcher
  - fix missed subject in email notification based on user ids ([#5534](https://github.com/nocobase/nocobase/pull/5534)) by @mytharcher
  - fix reaction field path in dynamic form of email notification ([#5527](https://github.com/nocobase/nocobase/pull/5527)) by @mytharcher
- **[Collection field: Many to many (array)]** Fix the issue where select component for a many to many (array) field has only one option ([#5544](https://github.com/nocobase/nocobase/pull/5544)) by @2013xile
- **[Notification manager]** fix page crash due to wrong channel type ([#5528](https://github.com/nocobase/nocobase/pull/5528)) by @mytharcher
- **[Workflow: SQL node]** Fix sse causing “waitForLoadState(‘networkidle’)” to timeout ([#5524](https://github.com/nocobase/nocobase/pull/5524)) by @hongboji
- **[Field component: mask]** Fixed original data cannot be shown by clicking if the component is in readonly state by @gchust
- **[Workflow: Custom action event]** Fix sse causing “waitForLoadState(‘networkidle’)” to timeout by @hongboji
- **[WeCom]** Fix the issue of 404 not found response when entering the application from WeCom workbench by @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*Release date: 2024-11-04*

### 🎉 New Features

- **[client]**
  - [table] Add 'popup' action to configure actions ([#5580](https://github.com/nocobase/nocobase/pull/5580)) by @bignof
  - "Configuration fields" support filtering fields ([#5471](https://github.com/nocobase/nocobase/pull/5471)) by @katherinehhh

### 🚀 Improvements

- **[client]** add support for Layout parameters (labelAlign, labelWidth, labelWrap) ([#5521](https://github.com/nocobase/nocobase/pull/5521)) by @katherinehhh
- **[Multi-app manager]** sub-app asynchronous quick start ([#5571](https://github.com/nocobase/nocobase/pull/5571)) by @chenos
- **[Collection: Tree]** Improve load logic of collection with schema attribute ([#5541](https://github.com/nocobase/nocobase/pull/5541)) by @chareice

### 🐛 Bug Fixes

- **[client]**
  - search field should be searched based on the translated text ([#5572](https://github.com/nocobase/nocobase/pull/5572)) by @katherinehhh
  - Fix issue with adding data to sub-table after deletion ([#5566](https://github.com/nocobase/nocobase/pull/5566)) by @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*Release date: 2024-11-05*

### 🐛 Bug Fixes

- **[client]** remove search box  when adding block to page ([#5577](https://github.com/nocobase/nocobase/pull/5577)) by @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*Release date: 2024-11-06*

### 🐛 Bug Fixes

- **[client]** Fix resolve error when configuring fields after adding a new data source ([#5576](https://github.com/nocobase/nocobase/pull/5576)) by @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*Release date: 2024-11-06*

### 🎉 New Features

- **[utils]** support to use handlebars in message content ([#5559](https://github.com/nocobase/nocobase/pull/5559)) by @mytharcher
- **[client]** table block support size settings ([#5563](https://github.com/nocobase/nocobase/pull/5563)) by @katherinehhh
- **[Notification: In-app message]** support in-app messages for mobile client ([#5560](https://github.com/nocobase/nocobase/pull/5560)) by @sheldon66

### 🚀 Improvements

- **[Notification manager]** Add receivers to notification logs ([#5561](https://github.com/nocobase/nocobase/pull/5561)) by @sheldon66

### 🐛 Bug Fixes

- **[client]** Fix error when opening popup in kanban ([#5592](https://github.com/nocobase/nocobase/pull/5592)) by @zhangzhonghe
- **[Access control]** Fix acl meta with multi filter target keys ([#5598](https://github.com/nocobase/nocobase/pull/5598)) by @chareice

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
