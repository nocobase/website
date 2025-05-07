Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*Release date: 2025-04-23*


## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*Release date: 2025-05-04*

#### 🎉 New Features

- **[client]** support variables in secondary confirmation title and content ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh
- **[Template print]**

  - Support for dynamic images and barcode rendering in document templates. by @sheldon66
  - Feature: Support `{ label, value }` Select options in template printing. by @sheldon66
- **[Block: Tree]** filter tree block support linkage rule by @katherinehhh
- **[Data visualization: ECharts]** Add "Y-Axis inverse" setting for bar charts by @2013xile

#### 🚀 Improvements

- **[client]** optimize subtable add button style and align paginator on the  same row ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[File manager]** Add OSS timeout option default to 10min ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[Password policy]** Change default password expiration to never expire by @2013xile

#### 🐛 Bug Fixes

- **[database]**

  - Fix test cases ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
  - Avoid error thrown when data type is not string ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
- **[client]**

  - when variable selection requires async loading, the last selected menu is lost. ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust
  - Fix the issue where one-to-many field sub-fields cannot be selected as filtering options in filter forms ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - issue with configuring linkage rules in subform (popup) within subtable ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - multiple error messages displayed when validation rule is violated in form fields ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - association field not submitting data when displaying field from related collection ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - 子表格中子表单（弹窗）联动规则缺少字段属性设置 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh
- **[Authentication]** Disallow changing authenticator name ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[Action: Custom request]** custom request response set to variable not displaying correctly ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*Release date: 2025-05-06*

#### 🚀 Improvements

- **[client]** RichText component support modules and formats props ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx

#### 🐛 Bug Fixes

- **[Verification]** Fix issues of migration script ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile
- **[Workflow: Custom action event]** triggered workflow action linkage issue by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*Release date: 2025-04-24*


## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
