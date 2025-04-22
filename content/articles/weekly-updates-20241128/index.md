Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*Release date: 2024-11-21*

### 🚀 Improvements

- **[Workflow]**

  - remove page limit in query node ([#5694](https://github.com/nocobase/nocobase/pull/5694)) by @mytharcher
  - change executions not to be deleted when workflow deleted ([#5666](https://github.com/nocobase/nocobase/pull/5666)) by @mytharcher
- **[Data source: REST API]** Optimize REST API plugin text descriptions by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*Release date: 2024-11-21*

### 🐛 Bug Fixes

- **[build]** Revert the client build tool from `rspack` back to `vite` to fix the issue where the `yarn dev` command reports an error after running the create-nocobase-app command ([#5697](https://github.com/nocobase/nocobase/pull/5697)) by @gchust
- **[client]** Fix  issue where right-fixed column does not align to the right when there are fewer columns ([#5690](https://github.com/nocobase/nocobase/pull/5690)) by @katherinehhh
- **[Mobile]** Fix the issue where the 'Assign field values' modal is obscured on the mobile configuration page ([#5701](https://github.com/nocobase/nocobase/pull/5701)) by @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*Release date: 2024-11-21*

### 🐛 Bug Fixes

- **[client]**

  - remove "Sync from Database" button in external data source view collection ([#5696](https://github.com/nocobase/nocobase/pull/5696)) by @katherinehhh
  - add fallback for non-string value used in `Variable.TextArea` ([#5704](https://github.com/nocobase/nocobase/pull/5704)) by @mytharcher
- **[Calendar]** Fix events not display in calendar block when start and end dates span across months ([#5699](https://github.com/nocobase/nocobase/pull/5699)) by @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*Release date: 2024-11-24*

### 🐛 Bug Fixes

- **[client]**
  - Fix issue of  label width for association fields in horizontal layouts ([#5709](https://github.com/nocobase/nocobase/pull/5709)) by @katherinehhh
  - Fix linkage of association data in nested sub-tables within multi-layer sub-form ([#5710](https://github.com/nocobase/nocobase/pull/5710)) by @katherinehhh
  - Fix issue of  label width for association fields in horizontal layouts ([#5709](https://github.com/nocobase/nocobase/pull/5709)) by @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*Release date: 2024-11-26*

### 🚀 Improvements

- **[client]** support bulk enabling of plugins in the interface ([#5730](https://github.com/nocobase/nocobase/pull/5730)) by @chenos

### 🐛 Bug Fixes

- **[client]** Fix subtable label minimum width issue in horizontal mode ([#5719](https://github.com/nocobase/nocobase/pull/5719)) by @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*Release date: 2024-11-27*

### 🎉 New Features

- **[Authentication]** Allows to add more fields of user collection in sign up form ([#5741](https://github.com/nocobase/nocobase/pull/5741)) by @2013xile

### 🐛 Bug Fixes

- **[client]** Fix selected option label not loaded on first render. ([#5736](https://github.com/nocobase/nocobase/pull/5736)) by @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*Release date: 2024-11-27*

### 🐛 Bug Fixes

- **[Notification: In-app message]** Remove in-app message title string slicing logic. ([#5728](https://github.com/nocobase/nocobase/pull/5728)) by @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*Release date: 2024-11-23*

### 🐛 Bug Fixes

- **[build]** Fix the issue executing `yarn dev` after create-nocobase-app results in an error ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
