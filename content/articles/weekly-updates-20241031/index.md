Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

NocoBase is currently updated with two branches: `main` and `next`.

* `main`：The most stable version to date, recommended for installation;
* `next`：Alpha version, including some unreleased new features. This version may not be completely stable and is suitable for developers or testers to experience new features in advance or conduct compatibility testing.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*Release date: 2024-10-24*

### 🐛 Bug Fixes

- **[client]**

  - pagination issue in list block with simple pagination collection ([#5500](https://github.com/nocobase/nocobase/pull/5500)) by @katherinehhh
  - In non-config mode, display only the current collection  in the edit form. ([#5499](https://github.com/nocobase/nocobase/pull/5499)) by @katherinehhh
- **[Workflow: HTTP request node]** fix special white space appears when paste content into variable textarea caused issue ([#5497](https://github.com/nocobase/nocobase/pull/5497)) by @mytharcher
- **[Departments]** Fix the issue of incorrect external data source permissions check under the department role by @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*Release date: 2024-10-24*

### 🐛 Bug Fixes

- **[client]** Fix the issue where filter blocks cannot be added in the popup ([#5502](https://github.com/nocobase/nocobase/pull/5502)) by @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*Release date: 2024-10-25*

### 🎉 New Features

- **[Auth: OIDC]** Add an option for allowing skip ssl verification by @2013xile

### 🚀 Improvements

- **[client]** show disabled unchecked checkbox for unselected fields ([#5503](https://github.com/nocobase/nocobase/pull/5503)) by @katherinehhh

### 🐛 Bug Fixes

- **[database]** Fix the issue where string operators "contains" and "does not contain do not properly handle `null` values ([#5509](https://github.com/nocobase/nocobase/pull/5509)) by @2013xile
- **[client]** Fix linkage rule to correctly evaluate URL parameter variables ([#5504](https://github.com/nocobase/nocobase/pull/5504)) by @katherinehhh
- **[Block: Map]** Fixed the issue where some maps are displayed incorrectly when multiple maps exist due to multiple calls to the `load` method of AMap ([#5490](https://github.com/nocobase/nocobase/pull/5490)) by @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*Release date: 2024-10-27*

### 🚀 Improvements

- **[Access control]** Optimize performance for large tables in acl ([#5496](https://github.com/nocobase/nocobase/pull/5496)) by @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*Release date: 2024-10-28*

### 🐛 Bug Fixes

- **[Collection: Tree]** Fix the issue where node paths are not updated when disassociate children ([#5522](https://github.com/nocobase/nocobase/pull/5522)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*Release date: 2024-10-24*

### 🎉 New Features

- **[client]** Support adding groups on forms and detail blocks ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh
- **[Calendar]** plugin-calendar add default view settings and internationalization configurations ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038
- **[Data source: KingbaseES]** Support for using Kingbase database as main or external data source (pg mode) by @chareice
  Reference: [Data source - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 Improvements

- **[database]** Support for static loading logic of plugins ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice
- **[client]** Improve rendering performance of table blocks (first rendering time reduced by about 50%) ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe
- **[Mobile]** mobile client support filter form block ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh
- **[Backup manager]**

  - change `Backup local storage files` default setting to true by @gchust
  - Revert the database data if restoring action failed by @gchust

### 🐛 Bug Fixes

- **[server]** App's afterLoad event wasn't triggered after installation ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos
- **[Public forms]** registration ACL snippet for public form ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh
- **[Backup manager]** fixed after restoring sub app, the main app will crash if sub app was using different schema by @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*Release date: 2024-10-24*

### 🎉 New Features

- **[Block: Action panel]** Add title setting for action panel block ([#5492](https://github.com/nocobase/nocobase/pull/5492)) by @Cyx649312038

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
