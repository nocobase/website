Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**This week we released [NocoBase 1.4.0 version](https://www.nocobase.com/en/blog/nocobase-1-4-0), which brings several new features and improvements, including simplified plugin management, enhanced notification functions, user data synchronization, and backup manager.**

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*Release date: 2024-11-28*

### 🚀 Improvements

- **[client]**

  - export essential hook ([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher
  - china region field plugin remove from built-in plugins ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh
- **[Workflow: Pre-action event]** remove waring log in request interceptor by @mytharcher

### 🐛 Bug Fixes

- **[cli]** Daemon mode does not delete sock files ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos
- **[client]**

  - Fix issue with association fields affecting each other when  multiple association fields has the same target collection ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh
  - Fix issue with checkbox alignment in sub-table ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh
  - Fix foreign key field display issue in the data selector ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh
  - Fix adjust feedbackLayout to improve validation messaging in sub-table ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh
- **[server]** Load plugins in dependency order ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos
- **[Block: Map]** Fix error when changing zoom levels in Google Maps ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh
- **[Data source: Main]** Fix infer field name in view collection ([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice
- **[File manager]** when the endpoint is not empty, forcePathStyle is set to true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*Release date: 2024-12-03*

### 🚀 Improvements

- **[client]** To use icons with more accurate meanings for block initializers ([#5757](https://github.com/nocobase/nocobase/pull/5757)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**

  - Fix E2E cases based on changed icons ([#5768](https://github.com/nocobase/nocobase/pull/5768)) by @mytharcher
  - Fix select field to display blank when data is empty ([#5762](https://github.com/nocobase/nocobase/pull/5762)) by @katherinehhh
- **[database]** Fix update hasOne/belongsTo association values without foreign key ([#5754](https://github.com/nocobase/nocobase/pull/5754)) by @chareice
- **[Data source manager]** Fix  incorrect display of source key ([#5771](https://github.com/nocobase/nocobase/pull/5771)) by @katherinehhh
- **[Workflow: Custom action event]**

  - Allow all roles to triggering custom action event in external data sources by @mytharcher
  - Fix default data source as main by @mytharcher
  - Fix data source error when not matched by @mytharcher
  - Fix custom action trigger not triggering on association by @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*Release date: 2024-12-04*

### 🚀 Improvements

- **[cli]** optimize the pkg command ([#5785](https://github.com/nocobase/nocobase/pull/5785)) by @chenos

### 🐛 Bug Fixes

- **[Mobile]** Fix missing date input field in filter operation on mobile ([#5786](https://github.com/nocobase/nocobase/pull/5786)) by @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*Release date: 2024-12-04*

### 🐛 Bug Fixes

- **[Workflow]** Fix async workflow tag disappeared in workflow table ([#5787](https://github.com/nocobase/nocobase/pull/5787)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*Release date: 2024-11-28*

### 🚀 Improvements

- **[Mobile]** optimize compact theme for mobile ([#5723](https://github.com/nocobase/nocobase/pull/5723)) by @katherinehhh

### 🐛 Bug Fixes

- **[Data visualization]** Fix the issue where getting timezone from `context` incorrectly ([#5743](https://github.com/nocobase/nocobase/pull/5743)) by @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*Release date: 2024-11-28*

### 🚀 Improvements

- **[client]** support variable input component to use custom component when `nullable` is set to `false` ([#5746](https://github.com/nocobase/nocobase/pull/5746)) by @mytharcher

### 🐛 Bug Fixes

- **[client]** Fix scrollbar issue when table has few columns with medium size ([#5745](https://github.com/nocobase/nocobase/pull/5745)) by @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*Release date: 2024-12-02*

### 🚀 Improvements

- **[client]** Support attachment file fields in public forms ([#5749](https://github.com/nocobase/nocobase/pull/5749)) by @katherinehhh
- **[cli]** Restart the process when plugins are added or removed ([#5761](https://github.com/nocobase/nocobase/pull/5761)) by @chenos
- **[Calendar]** Support quick schedule creation by clicking date on calendar block ([#5733](https://github.com/nocobase/nocobase/pull/5733)) by @katherinehhh

### 🐛 Bug Fixes

- **[client]** Fix field width issue in sub table in horizontal layout ([#5763](https://github.com/nocobase/nocobase/pull/5763)) by @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*Release date: 2024-12-03*

### 🐛 Bug Fixes

- **[client]** Fix  record picker not displaying selected items when selecting across pages ([#5770](https://github.com/nocobase/nocobase/pull/5770)) by @katherinehhh
- **[Mobile]** Fix missing date input field in filter operation on mobile ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh
- **[Workflow]** Fix variable not showing in nodes test modal ([#5766](https://github.com/nocobase/nocobase/pull/5766)) by @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*Release date: 2024-12-03*

### 🎉 New Features

- **[client]**

  - Support enabling link opening pop ups on readPretty field ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh
  - Support associate and disassociate action in association block ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh
- **[server]** Add audit manager ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt
- **[Workflow]** support manually triggering workflow ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher
- **[Workflow: Pre-action event]** support manually triggering workflow by @mytharcher

### 🚀 Improvements

- **[client]**

  - implement on-demand loading for front-end components ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust
  - Improve page rendering performance and support page keep-alive functionality ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe
- **[Collection field: Sort]** add plugin description ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher
- **[Embed NocoBase]** Improve page rendering performance by @zhangzhonghe

### 🐛 Bug Fixes

- **[client]**

  - Fix issues where variables cannot be properly used in third-party data source blocks ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe
  - Fix the issue where association field values are empty in block templates. Fix the problem where block data scope using variables don't work properly in third-party data sources ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe
  - Fix the issue where component's dynamic props do not work with lazy loading ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust
  - fixed the warning message in React when dynamically loading hooks in the development environment ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust
- **[Data visualization]** Fix the issue where filter field components of chart blocks not rendering ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
