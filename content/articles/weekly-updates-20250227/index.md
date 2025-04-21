Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.11](https://www.nocobase.com/en/blog/v1.5.11)

*Release date: 2025-02-20*

#### 🎉 New Features

- **[Workflow]** Support to extend group of instruction in workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  Reference: [Extends Node Group](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)

#### 🐛 Bug Fixes

- **[client]**

  - association block associate action popup issue on mobile ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  - picker format mismatch in filter form field ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - Show `<Variable.TextArea />` component correctly in disabled mode ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  - Fix files missed after uploaded ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
- **[Workflow]**

  - Fix style details in workflow canvas ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - Support to trigger workflow when change password ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

### [v1.5.12](https://www.nocobase.com/en/blog/v1.5.12)

*Release date: 2025-02-21*

#### 🚀 Improvements

- **[Workflow]** Hide node id from node card in workflow canvas ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

#### 🐛 Bug Fixes

- **[File manager]** Upgrade AWS SDK version to fix MinIO upload bug ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

### [v1.5.13](https://www.nocobase.com/en/blog/v1.5.13)

*Release date: 2025-02-22*

#### 🐛 Bug Fixes

- **[client]** Fix uploaded file missed when one by one ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
- **[Workflow: Pre-action event]** Fix error message from response message node not shown by @mytharcher

### [v1.5.14](https://www.nocobase.com/en/blog/v1.5.14)

*Release date: 2025-02-24*

#### 🐛 Bug Fixes

- **[Backup manager]** The delete icon of the restore from local operation dialog is not working by @gchust

### [v1.5.15](https://www.nocobase.com/en/blog/v1.5.15)

*Release date: 2025-02-24*

#### 🚀 Improvements

- **[File manager]**

  - Increase URL length to 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - File names during upload will change from random to the original name with a random suffix. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
- **[Block: Action panel]** Optimize mobile styles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

#### 🐛 Bug Fixes

- **[cli]** Improve internal logic of nocobase upgrade command ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

### [v1.5.16](https://www.nocobase.com/en/blog/v1.5.16)

*Release date: 2025-02-26*

#### 🚀 Improvements

- **[Backup manager]** Allow restoring backup to an application even it is missing some plugins by @gchust

#### 🐛 Bug Fixes

- **[client]** rich text field component cannot be fully cleared ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
- **[File manager]**

  - Fix migration and add test cases ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - Fix `path` column type of file collection ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - Fix migration and add test cases ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.6.0-beta.11

*Release date: 2025-02-27*

#### 🎉 New Features

* [Workflow] Support to extend group of instruction in workflow ([#6237](https://github.com/nocobase/nocobase/pull/6237)) by @mytharcher
  Reference: [Extends Node Group](https://docs.nocobase.com/handbook/workflow/development/api#registerinstructiongroup)
* [Workflow: Custom action event] Support global or batch records triggering custom action event ([#272](https://github.com/nocobase/pro-plugins/pull/272)) by @mytharcher
* **[client]**

  * Support the extension of preset fields in collections ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  * Support extending frontend filter operators ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
  * Support setting description property in block ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
  * Add schemaSetting to show file name for attachments ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh
* **[Calendar]** Support for the extension of optional fields for Kanban, Calendar, and Formula Field plugins ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
* **[Localization]** Localization for desktop and mobile routes ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile
* **[Block: Action panel]** Support configuring the number of icons per row in the mobile action panel ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh
* **[WEB client]** Support permission configuration for page tabs and add route management page ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
  Reference: [Routes](https://docs.nocobase.com/handbook/routes)
* **[Authentication]** Support token security configuration ([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  Reference: [Token security policy](https://docs.nocobase.com/handbook/token-policy)
* **[Workflow: Manual node]** Add task title column in todo block ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher
* **[Variables and secrets]** Supports configuring dynamic environment variables and secrets ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 Improvements

* [Collection field: Markdown(Vditor)] Vditor CDN use local resources ([#6229](https://github.com/nocobase/nocobase/pull/6229)) by @chenos
* [Workflow] Hide node id from node card in workflow canvas ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
* **[client]** Expansion and improvement of user personal center ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
* **[client]**

  * Page title defaults to using the route's title ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
  * Add more icons to the IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
* **[server]**

  * Move AesEncryptor to the core ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos
  * 1. Add server middleware to extract the client's IP address.
    2. Resolve infinite reload issues when an IP is blocked.
    3. Add the `X-Forwarded-For` HTTP header in the proxy to enable forwarding for local debugging ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66
* **[Workflow]** Move bind workflow settings to plugin ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher
* **[Data source manager]** Modify the test function login to be asynchronous and update the relevant test cases ([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66

#### 🐛 Bug Fixes

* [client]

  * Can’t open field link popup in embed page ([#6222](https://github.com/nocobase/nocobase/pull/6222)) by @gchust
  * When closing the sub-page, multiple block data requests are triggered ([#6233](https://github.com/nocobase/nocobase/pull/6233)) by @zhangzhonghe
  * picker format mismatch in filter form field ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  * Missing unique key for association fields submenu in UI ([#6230](https://github.com/nocobase/nocobase/pull/6230)) by @gchust
  * Show `<Variable.TextArea />` component correctly in disabled mode ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
  * horizontal scrollbar issue on the page ([#6232](https://github.com/nocobase/nocobase/pull/6232)) by @katherinehhh
  * Fixed html tag character in the mail channel config form input field. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  * association block associate action popup issue on mobile ([#6235](https://github.com/nocobase/nocobase/pull/6235)) by @katherinehhh
  * Fix files missed after uploaded ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  * Skip auth error for CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
* [Workflow: Loop node] Fix loop exit earlier when node inside pending ([#6236](https://github.com/nocobase/nocobase/pull/6236)) by @mytharcher
* [File manager] Upgrade AWS SDK version to fix MinIO upload bug ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
* [Mobile] Mobile menu data is incomplete in permission configuration table ([#6219](https://github.com/nocobase/nocobase/pull/6219)) by @zhangzhonghe
* [Workflow]

  * Fix style details in workflow canvas ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  * Support to trigger workflow when change password ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
* [Data visualization] Filterting error occurs when the data source name contains a hyphen `-` ([#6231](https://github.com/nocobase/nocobase/pull/6231)) by @2013xile
* [Workflow: Pre-action event] Fix error message from response message node not shown ([#277](https://github.com/nocobase/pro-plugins/pull/277)) by @mytharcher
* **[client]** Fix uploaded file missed when one by one ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
* **[client]** Fix "Select from existing data" option still showing when disabling “Allow multiple” in to-many relation subform ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
* **[auth]** Update client auth middleware logic to prevent token update failure due to concurrency ([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66
* **[WEB client]**

  * Routing permissions abnormal after upgrade ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe
  * Remove default page tab title ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe
* **[Data source manager]** Use loginWithJti to update authentication-related test cases and prevent errors ([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
* **[Multi-app manager]** Only sub-apps that start with the main app are upgraded with it ([#6133](https://github.com/nocobase/nocobase/pull/6133)) by @chenos
* **[Authentication]** Update migration rules for issued tokens and token policy config ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66
* **[Workflow]** Fix value type for DatePicker component ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
