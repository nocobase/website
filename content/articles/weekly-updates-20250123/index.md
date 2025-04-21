Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*Release date: 2025-01-16*

#### 🚀 Improvements

- **[client]** Improve the extensibility of file-storage ([#6071](https://github.com/nocobase/nocobase/pull/6071)) by @chenos
- **[Workflow]** Fix repeat field component in schedule configuration ([#6067](https://github.com/nocobase/nocobase/pull/6067)) by @mytharcher

#### 🐛 Bug Fixes

- **[Mobile]** Fix the issue of bottom buttons being obscured on mobile devices ([#6068](https://github.com/nocobase/nocobase/pull/6068)) by @zhangzhonghe
- **[Workflow: Custom action event]** Fix context for http collection by @mytharcher
- **[Backup manager]** Fixed a possible backup error when the collection-fdw plugin is not enabled by @gchust
- **[Departments]** Fix custom action event cannot be triggered on departments collection by @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*Release date: 2025-01-16*

#### 🚀 Improvements

- **[client]** Allows to add descriptions for SQL collections ([#6081](https://github.com/nocobase/nocobase/pull/6081)) by @2013xile
- **[resourcer]** Allow empty object as values in action ([#6070](https://github.com/nocobase/nocobase/pull/6070)) by @mytharcher

#### 🐛 Bug Fixes

- **[Localization]** Avoid API request when attempting to delete an empty translation ([#6078](https://github.com/nocobase/nocobase/pull/6078)) by @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*Release date: 2025-01-18*

#### 🐛 Bug Fixes

- **[client]** Fix the issue where block data is empty in the popup window on the embedded page ([#6086](https://github.com/nocobase/nocobase/pull/6086)) by @zhangzhonghe
- **[Workflow]** Fix dispatch not process in preparing phase ([#6087](https://github.com/nocobase/nocobase/pull/6087)) by @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*Release date: 2025-01-21*

#### 🐛 Bug Fixes

- **[client]** The default value of the assocation field has not been updated ([#6103](https://github.com/nocobase/nocobase/pull/6103)) by @chenos
- **[Action: Batch edit]** Remove form data template from bulk edit action form  settings ([#6098](https://github.com/nocobase/nocobase/pull/6098)) by @katherinehhh
- **[Verification]** Fix provider ID could be edit ([#6097](https://github.com/nocobase/nocobase/pull/6097)) by @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*Release date: 2025-01-21*

#### 🎉 New Features

- **[Block: Action panel]** Support configuring  the number of icons per row in the mobile  action penal ([#6106](https://github.com/nocobase/nocobase/pull/6106)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*Release date: 2025-01-16*

#### 🚀 Improvements

- **[Backup manager]** Improved error messages for restore failures by @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*Release date: 2025-01-16*

#### 🐛 Bug Fixes

- **[client]** Fix the issue where default values for association fields are not taking effect in Easy-reading mode ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*Release date: 2025-01-17*

#### 🐛 Bug Fixes

- **[User data synchronization]** Fix the issue where the "retry" button is not displayed in the task list ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*Release date: 2025-01-17*

#### 🚀 Improvements

- **[Workflow]** Change API name to reasonable ones ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*Release date: 2025-01-21*

#### 🎉 New Features

- **[Workflow]** Add stack limit configuration for workflows ([#6077](https://github.com/nocobase/nocobase/pull/6077)) by @citlalinda

#### 🚀 Improvements

- **[Workflow: Loop node]** Fix styles ([#6095](https://github.com/nocobase/nocobase/pull/6095)) by @mytharcher
- **[File manager]** support for other storage plugins ([#6096](https://github.com/nocobase/nocobase/pull/6096)) by @jiannx
  Reference: [File Storage: S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[Workflow: test kit]** adjust style of workflow canvas, to make content compacted ([#6088](https://github.com/nocobase/nocobase/pull/6088)) by @mytharcher
- **[Workflow: JSON query node]** Add icon to nodes by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*Release date: 2025-01-19*

#### 🎉 New Features

- **[client]** Support setting description property in block ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
- **[Authentication]** Support token security configuration. ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  Reference: [Token security policy](https://docs.nocobase.com/handbook/token-policy)
- **[Workflow: Manual node]** Add task title column in todo block ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher

#### 🚀 Improvements

- **[Workflow: Custom action event]** Change API of manually execute by @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*Release date: 2025-01-19*

#### 🎉 New Features

- **[Block: Action panel]** Support configuring  the number of icons per row in the mobile  action penal ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
