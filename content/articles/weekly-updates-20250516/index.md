Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Release date: 2025-05-09*

#### 🐛 Bug Fixes

- **[database]** Import failed due to text field values. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
- **[client]** The hidden fields are still displayed ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
- **[Action: Export records]** Fix the error of exporting long texts. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[Workflow: Post-action event]** Fix user acted variable not accessible in Hanldebars template ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[Block: Action panel]** The color of the Action panel is incorrect in dark mode ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[Action: Export records Pro]** Fix the error of exporting long texts. by @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Release date: 2025-05-13*

#### 🚀 Improvements

- **[Workflow]** Allow to revision more than one draft ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

#### 🐛 Bug Fixes

- **[Action: Export records]** Fixed   exporting empty values in nested associations and attachment url ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[Workflow: Manual node]** Fix stats number count wrong on tasks ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[Workflow: test kit]** Fix failed test cases due to required preset plugin ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[Data visualization]** Fix error when filtering nested m2m fields ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[Workflow: Subflow]** Fix undefined trigger caused page crash by @mytharcher
- **[File storage: S3(Pro)]** access url expiration invalid by @jiannx
- **[Workflow: Approval]** Fix stats number count wrong on tasks by @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Release date: 2025-05-15*

#### 🚀 Improvements

- **[client]** add more built-in size settings for read status image ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh

#### 🐛 Bug Fixes

- **[File manager]**

  - Fix types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
  - Fix create file record without foreign key permission ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[Action: Export records]** improve performance when deleting fields in import/export field settings ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
- **[Data visualization]** Chart blocks do not display when added to popups triggered from block-level actions ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
- **[Action: Export records Pro]** improve performance when deleting fields in import/export pro field settings by @katherinehhh
- **[File storage: S3(Pro)]** Change to use collection field to locate storage by @mytharcher
- **[Backup manager]** Fix type error in build by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Release date: 2025-05-15*

#### 🎉 New Features

- **[client]** action linkage rule support 'current form' variables ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh
- **[undefined]** Add the log of the import plugin by @aaaaaajie
- **[Action: Import records]** Add the log of the import plugin ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie

#### 🚀 Improvements

- **[client]** add more built-in size settings for read status image ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh
- **[Collection field: Attachment(URL)]** add more built-in sizes to the attachment URL field for read status ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh
- **[Workflow]** Allow to revision more than one draft ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - button linkage issue  in detail block ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh
  - clear right-hand value when operator changes in linkage rule ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh
  - incorrect evaluation of operators for date variables in linkage conditions ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh
  - operator missing when switching in linkage rules ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh
  - variable parsing incompatibility with {{title}} data in secondary confirm ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - linkage rule value component style improve ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh
  - variable parsing incompatibility with {{title}} data in secondary confirm ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - The hidden fields are still displayed ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
- **[database]** Import failed due to text field values. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
- **[Data visualization]**

  - Chart blocks do not display when added to popups triggered from block-level actions ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
  - Fix error when filtering nested m2m fields ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[Action: Export records]**

  - improve performance when deleting fields in import/export field settings ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
  - Fixed   exporting empty values in nested associations and attachment url ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
  - Fix the error of exporting long texts. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[File manager]** Fix create file record without foreign key permission ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[Workflow]** Fix navigating back not works when directly open popup link in tasks center ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher
- **[Action: Duplicate record]** modal closes on first input click when editing duplicated data ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh
- **[Block: template]** After saving as an inherited template, error when opening the popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust
- **[Workflow: test kit]** Fix failed test cases due to required preset plugin ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[Workflow: Post-action event]** Fix user acted variable not accessible in Hanldebars template ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[Workflow: Manual node]** Fix stats number count wrong on tasks ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[Block: Action panel]** The color of the Action panel is incorrect in dark mode ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[Action: Export records Pro]**

  - improve performance when deleting fields in import/export pro field settings by @katherinehhh
  - Fix the error of exporting long texts. by @aaaaaajie
- **[Workflow: Subflow]** Fix undefined trigger caused page crash by @mytharcher
- **[Template print]**

  - Fix formatters not found issue. by @sheldon66
  - Fix formatter not found by @sheldon66
- **[File storage: S3(Pro)]**

  - Change to use collection field to locate storage by @mytharcher
  - access url expiration invalid by @jiannx
- **[Workflow: Approval]** Fix stats number count wrong on tasks by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
