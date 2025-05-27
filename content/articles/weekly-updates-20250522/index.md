Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/en/blog/v1.6.31)

*Release date: 2025-05-18*

#### 🚀 Improvements

- **[Workflow]** Add all missed en-US locale keys ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

#### 🐛 Bug Fixes

- **[database]** handle empty string cells during field import to prevent errors ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[client]**

  - association select record table did not filter already associate record ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - association data not submitted when exposing association fields  in subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - draggable sort fields not displaying available options correctly ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
- **[Workflow]** Fix stack limit works incorrectly for collection event ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[Block: Action panel]** Read the route basename from the scanner to adapt for the desktop environment. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[Workflow: Manual node]** Fix render error when show unprocessed item ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[Workflow: Approval]** Fix assignees scope of delegate and add to other assignees by @mytharcher

### [v1.6.32](https://www.nocobase.com/en/blog/v1.6.32)

*Release date: 2025-05-20*

#### 🐛 Bug Fixes

- **[client]**
  - page not redirected correctly after deleting last item ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - cascade component in modal not loading association data initially ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/en/blog/v1.7.0-beta.32)

*Release date: 2025-05-19*

#### 🎉 New Features

- **[client]** Single-line text fields support entering multiple keywords for filtering ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
  Reference: [Multi-keyword filter](https://pr-366.docs.nocobase.com/handbook/multi-keyword-filter)
- **[Multi-keyword filter]** Single-line text fields support entering multiple keywords for filtering by @zhangzhonghe
  Reference: [Multi-keyword filter](https://pr-366.docs.nocobase.com/handbook/multi-keyword-filter)
- **[Template print]** Add support for bulk printing in template printing. by @sheldon66

#### 🚀 Improvements

- **[Workflow]** Add all missed en-US locale keys ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - cascade component in modal not loading association data initially ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - association data not submitted when exposing association fields  in subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - draggable sort fields not displaying available options correctly ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - missing current form variables in data scope of data selector table ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - association select record table did not filter already associate record ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
- **[database]** handle empty string cells during field import to prevent errors ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[Workflow: Manual node]** Fix render error when show unprocessed item ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[File manager]** Fix types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
- **[Block: Action panel]** Read the route basename from the scanner to adapt for the desktop environment. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[AI integration]** Content is not displayed when switching between LLM service config and validation config pages ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[Workflow]** Fix stack limit works incorrectly for collection event ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[Workflow: Approval]** Fix assignees scope of delegate and add to other assignees by @mytharcher
- **[Backup manager]** Fix type error in build by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/en/blog/v1.7.0-alpha.14)

*Release date: 2025-05-21*

#### 🎉 New Features

- **[client]**

  - Single-line text fields support entering multiple keywords for filtering ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
    Reference: [Multi-keyword filter](https://pr-366.docs.nocobase.com/handbook/multi-keyword-filter)
  - action linkage rule support 'current form' variables ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh
- **[build]** support commercial authorization ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[undefined]** Add the log of the import plugin by @aaaaaajie
- **[Action: Import records]** Add the log of the import plugin ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie
- **[plugin-commercial]** support commercial by @jiannx
- **[Multi-keyword filter]** Single-line text fields support entering multiple keywords for filtering by @zhangzhonghe
  Reference: [Multi-keyword filter](https://pr-366.docs.nocobase.com/handbook/multi-keyword-filter)
- **[Template print]**

  - Add support for bulk printing in template printing. by @sheldon66
  - Add support for bulk printing in template printing. by @sheldon66

#### 🚀 Improvements

- **[undefined]** Build the full docker image ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos
- **[client]**

  - Optimize the issue of pages becoming increasingly slow with use ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe
  - add more built-in size settings for read status image ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh
- **[Workflow]**

  - Add all missed en-US locale keys ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher
  - Allow to revision more than one draft ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher
- **[Collection field: Attachment(URL)]** add more built-in sizes to the attachment URL field for read status ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh
- **[Email manager]**

  - fix sync error and other not easy use issues by @jiannx
  - add draft manage, support subordinates email viewing by @jiannx

#### 🐛 Bug Fixes

- **[client]**

  - disable linkage rule not working for action button ([#6896](https://github.com/nocobase/nocobase/pull/6896)) by @katherinehhh
  - page not redirected correctly after deleting last item ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - cascade component in modal not loading association data initially ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - association select record table did not filter already associate record ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - association data not submitted when exposing association fields  in subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - missing current form variables in data scope of data selector table ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - draggable sort fields not displaying available options correctly ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - clear right-hand value when operator changes in linkage rule ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh
  - operator missing when switching in linkage rules ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh
  - button linkage issue  in detail block ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh
  - incorrect evaluation of operators for date variables in linkage conditions ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh
  - The hidden fields are still displayed ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
  - variable parsing incompatibility with {{title}} data in secondary confirm ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - variable parsing incompatibility with {{title}} data in secondary confirm ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - linkage rule value component style improve ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh
- **[database]** handle empty string cells during field import to prevent errors ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[build]** fix the client runtime error in plugin-workflow-javascript, process undefine error ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[File manager]**

  - Fix preview URL on non-image files ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher
  - Fix types ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
  - Fix create file record without foreign key permission ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[Block: Action panel]**

  - Read the route basename from the scanner to adapt for the desktop environment. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
  - The color of the Action panel is incorrect in dark mode ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[AI integration]** Content is not displayed when switching between LLM service config and validation config pages ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[Workflow: Manual node]**

  - Fix test case due to plugin removed from built-in list ([#6895](https://github.com/nocobase/nocobase/pull/6895)) by @mytharcher
  - Fix render error when show unprocessed item ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
  - Fix stats number count wrong on tasks ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[Workflow]**

  - Fix stack limit works incorrectly for collection event ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
  - Fix navigating back not works when directly open popup link in tasks center ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher
- **[Data visualization]**

  - Chart blocks do not display when added to popups triggered from block-level actions ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
  - Fix error when filtering nested m2m fields ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[Action: Export records]**

  - improve performance when deleting fields in import/export field settings ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
  - Fixed   exporting empty values in nested associations and attachment url ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[Block: template]** After saving as an inherited template, error when opening the popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust
- **[Action: Duplicate record]** modal closes on first input click when editing duplicated data ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh
- **[Workflow: test kit]** Fix failed test cases due to required preset plugin ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[Workflow: Post-action event]** Fix user acted variable not accessible in Hanldebars template ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[plugin-commercial]**

  - fix commerical log send to crm and text translation by @jiannx
  - 使用原型链实现 withCommercial 函数 by @jiannx
- **[Action: Export records Pro]**

  - improve performance when deleting fields in import/export pro field settings by @katherinehhh
  - Fix the error of exporting long texts. by @aaaaaajie
- **[Workflow: Subflow]** Fix undefined trigger caused page crash by @mytharcher
- **[Template print]**

  - Fix formatters not found issue. by @sheldon66
  - Fix formatter not found by @sheldon66
- **[File storage: S3(Pro)]**

  - access url expiration invalid by @jiannx
  - Change to use collection field to locate storage by @mytharcher
- **[Workflow: Approval]**

  - Fix stats number count wrong on tasks by @mytharcher
  - Fix assignees scope of delegate and add to other assignees by @mytharcher
- **[Email manager]**

  - fix ts error by @jiannx
  - list api support subject merge by @jiannx
- **[Backup manager]** Fix type error in build by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
