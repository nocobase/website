Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase is currently updated with two branches: `main` and `next`.

* `main`：The most stable version to date, recommended for installation;
* `next`：Alpha version, including some unreleased new features. This version may not be completely stable and is suitable for developers or testers to experience new features in advance or conduct compatibility testing.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*Release date: 2024-11-06*

### 🐛 Bug Fixes

- **[client]** permission for the association table field in the table is based on the permission of the corresponding association field ([#5569](https://github.com/nocobase/nocobase/pull/5569)) by @katherinehhh
- **[Action: Export records]** Fix export with i18n ([#5591](https://github.com/nocobase/nocobase/pull/5591)) by @chareice
- **[Action: Import records]** fix issue with import belongs to association ([#5417](https://github.com/nocobase/nocobase/pull/5417)) by @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*Release date: 2024-11-08*

### 🚀 Improvements

- **[Authentication]** Optimize error message for sign in and sign up ([#5612](https://github.com/nocobase/nocobase/pull/5612)) by @2013xile

### 🐛 Bug Fixes

- **[client]**

  - Fix default value issues in subtable ([#5607](https://github.com/nocobase/nocobase/pull/5607)) by @zhangzhonghe
  - Fix issue with fuzzy search support for association fields with string type title field ([#5611](https://github.com/nocobase/nocobase/pull/5611)) by @katherinehhh
- **[Authentication]** Fix the issue where users can't change password when signing in with a non-password authenticator ([#5609](https://github.com/nocobase/nocobase/pull/5609)) by @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*Release date: 2024-11-11*

### 🚀 Improvements

- **[client]** support hiding menu items ([#5624](https://github.com/nocobase/nocobase/pull/5624)) by @chenos
- **[server]** add  DB_SQL_BENCHMARK  environment variable ([#5615](https://github.com/nocobase/nocobase/pull/5615)) by @chareice

### 🐛 Bug Fixes

- **[client]** support file collection as target of one-to-many association ([#5619](https://github.com/nocobase/nocobase/pull/5619)) by @mytharcher
- **[Action: Import records]** Fixed the issue that many-to-many relationship data cannot be imported through the id field ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*Release date: 2024-11-13*

### 🚀 Improvements

- **[client]** support one-to-one and many-to-many (array) field to use file collection ([#5637](https://github.com/nocobase/nocobase/pull/5637)) by @mytharcher
- **[evaluators]** use Formula.js as default evaluator in calculation node ([#5626](https://github.com/nocobase/nocobase/pull/5626)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix  reset issue that reverts filter button title to default ([#5635](https://github.com/nocobase/nocobase/pull/5635)) by @katherinehhh
- **[Action: Import records]** Fixed the issue that many-to-many relationship data cannot be imported through the id field ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*Release date: 2024-11-07*

### 🎉 New Features

- **[client]** Support configuration options for hiding table columns ([#5597](https://github.com/nocobase/nocobase/pull/5597)) by @zhangzhonghe

### 🚀 Improvements

- **[Data source manager]** Adjust table categories to be loaded from the main data source and remove from global ([#5602](https://github.com/nocobase/nocobase/pull/5602)) by @katherinehhh
- **[Notification manager]** update message structure to include receivers in notification log data ([#5603](https://github.com/nocobase/nocobase/pull/5603)) by @sheldon66

### 🐛 Bug Fixes

- **[client]** Fix table scrollbar issue in non-config mode ([#5599](https://github.com/nocobase/nocobase/pull/5599)) by @katherinehhh
- **[Action: Import records]** fix import with date field ([#5606](https://github.com/nocobase/nocobase/pull/5606)) by @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*Release date: 2024-11-11*

### 🎉 New Features

- **[client]** support delimiters properties for variable expression component ([#5620](https://github.com/nocobase/nocobase/pull/5620)) by @mytharcher
- **[Workflow]** support to move downstream nodes into new branches when creating node with branches ([#5570](https://github.com/nocobase/nocobase/pull/5570)) by @mytharcher

### 🚀 Improvements

- **[client]**

  - optimize field list: remove relation fields and Duplicate tag ([#5616](https://github.com/nocobase/nocobase/pull/5616)) by @katherinehhh
  - support `getFilterTargetKey()` from `Collection` class ([#5617](https://github.com/nocobase/nocobase/pull/5617)) by @mytharcher
- **[Data source: Main]** refactor the collections:list api  to improve performance ([#5610](https://github.com/nocobase/nocobase/pull/5610)) by @chareice
- **[Notification manager]** improve notification channel manager UI ([#5621](https://github.com/nocobase/nocobase/pull/5621)) by @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*Release date: 2024-11-11*

### 🎉 New Features

- **[WeCom]**
  - Support for signing in automatically when visiting application pages in WeCom browser by @chenzhizdt
  - Support for using Markdown and template card in notification by @chenzhizdt

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
