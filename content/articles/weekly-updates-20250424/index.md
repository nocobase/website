Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Release date: 2025-04-11*

#### 🚀 Improvements

- **[client]**

  - Add default type fallback API for `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - Optimize prompts for unconfigured pages ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[Workflow: Delay node]** Support to use variable for duration ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher
- **[Workflow: Custom action event]** Add refresh settings for trigger workflow button by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - subtable description overlapping with add new button ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - dashed underline caused by horizontal form layout in modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[File storage: S3(Pro)]** Fix missing await for next call. by @jiannx
- **[Email manager]** Fix missing await for next call. by @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Release date: 2025-04-14*

#### 🐛 Bug Fixes

- **[client]**
  - Fix the issue of preview images being obscured ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  - In the form block, the default value of the field configuration will first be displayed as the original variable string and then disappear ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Release date: 2025-04-14*

#### 🎉 New Features

- **[Departments]** Make Department, Attachment URL, and Workflow response message plugins free ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

#### 🐛 Bug Fixes

- **[client]**

  - The filter form should not display the "Unsaved changes" prompt ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  - "allow multiple" option not working for relation field ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  - In the filter form, when the filter button is clicked, if there are fields that have not passed validation, the filtering is still triggered ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  - Switching to the group menu should not jump to a page that has already been hidden in menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
- **[File storage: S3(Pro)]**

  - Organize language by @jiannx
  - Individual baseurl and public settings, improve S3 pro storage config UX by @jiannx
- **[Migration manager]** the skip auto backup option becomes invalid if environment variable popup appears during migration by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Release date: 2025-04-10*

#### 🚀 Improvements

- **[Workflow: Delay node]** Support to use variable for duration ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

#### 🐛 Bug Fixes

- **[Workflow]** Fix OOM when create job with unsafe integer id ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher
- **[Block: template]** when the referenced template used by the page block has been deleted, saving as a template fails ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Release date: 2025-04-12*

#### 🚀 Improvements

- **[client]**

  - Add default type fallback API for `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - Optimize prompts for unconfigured pages ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[Workflow: Custom action event]** Add refresh settings for trigger workflow button by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - workflow node edit drawer title display [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh
  - subtable description overlapping with add new button ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - incorrect variable input style ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust
  - dashed underline caused by horizontal form layout in modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[Workflow]** Fix stats information of workflows not loaded when app started ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Release date: 2025-04-15*

#### 🎉 New Features

- **[Departments]** Make Department, Attachment URL, and Workflow response message plugins free ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos
- **[Action: Batch update]** Support refreshing data in other data blocks after updating data in a block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

#### 🚀 Improvements

- **[Workflow]** Support fixed popup URL for workflow tasks ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

#### 🐛 Bug Fixes

- **[client]**

  - Switching to the group menu should not jump to a page that has already been hidden in menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
  - The filter form should not display the "Unsaved changes" prompt ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  - Fix the issue of preview images being obscured ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  - In the filter form, when the filter button is clicked, if there are fields that have not passed validation, the filtering is still triggered ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  - "allow multiple" option not working for relation field ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  - In the form block, the default value of the field configuration will first be displayed as the original variable string and then disappear ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe
- **[Collection field: Attachment(URL)]** only allow file collections with public URL access ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh
- **[File storage: S3(Pro)]**

  - Individual baseurl and public settings, improve S3 pro storage config UX by @jiannx
  - Organize language by @jiannx
- **[Workflow: Approval]** Support fixed URL for approval items in tasks center by @mytharcher
- **[Migration manager]** the skip auto backup option becomes invalid if environment variable popup appears during migration by @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Release date: 2025-04-16*

#### 🎉 New Features

- **[Collection field: Code]** Add code interface by @mytharcher

#### 🚀 Improvements

- **[create-nocobase-app]** Upgrade some dependencies to latest versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

#### 🐛 Bug Fixes

- **[client]**

  - inherited fields shown in current collection  field assignment list ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh
  - style issue in variable input when setting default value ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh
- **[build]** build output is incorrect when plugin depends on some AMD libraries ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust
- **[Block: iframe]** vertical scrollbar appears when iframe block is set to full height ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh
- **[Access control]** Fix error thrown when serializing role model to cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher
- **[Workflow]** Fix migration error thrown from MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher
- **[Email manager]** fix can't synn, no subject display and other small bugs by @jiannx

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
