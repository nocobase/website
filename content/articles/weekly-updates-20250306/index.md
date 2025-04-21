Summarize the weekly product update logs, and the latest releases can be checked on [our blog](https://www.nocobase.com/en/blog/timeline).

**NocoBase is currently updated with three branches: `main` , `next` and `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：The most stable version to date, recommended for installation;
* `next`：Beta version, contains upcoming new features and has been preliminarily tested. There might be some known or unknown issues. It's mainly for test users to collect feedback and optimize functions further. Ideal for test users who want to experience new features early and give feedback;
* `develop`：Alpha version, contains the latest feature code, may be incomplete or unstable, mainly for internal dev and rapid iteration. Suited for tech users interested in product's cutting-edge, but with potential issues and incomplete functions. Not for production use.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*Release date: 2025-02-27*

#### 🐛 Bug Fixes

- **[client]**

  - error when creating comment block without comment collection ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - Error occurs when clicking tree block node ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - After clicking the left menu, the sub-page is abnormally closed ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - Do not clear field value when the expression value is empty ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
- **[Collection field: Sequence]** Fix sequence field not disabled when on read-only mode ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[File manager]** Fix migration for inherited collection ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
- **[Access control]** Incorrect data records when using many to many fields as data scope in collection permissions ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[Block: Kanban]** Incorrect data filtering in popup Kanban block using popup record variables ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[Block: Tree]** Error occurs when clicking tree block node by @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*Release date: 2025-02-27*

#### 🐛 Bug Fixes

- **[Block: Action panel]** Setting the height of the action panel is invalid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*Release date: 2025-03-01*

#### 🐛 Bug Fixes

- **[client]** add new button appears on hover in association field read-only mode ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[Action: Export records Pro]** remove 'add block' option in export attachment button settings by @katherinehhh
- **[Action: Import records Pro]** association block import button duplicate record detection shows no data in field dropdown by @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*Release date: 2025-03-03*

#### 🐛 Bug Fixes

- **[client]** Pages with custom favicon briefly flash the NocoBase favicon during loading ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
- **[Block: Map]** Configuration settings for map field are missing/not visible ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[Custom brand]** Pages with custom favicon briefly flash the NocoBase favicon during loading by @zhangzhonghe
- **[Template print]** Restore from local failed when action template print and backup manager plugins were both enabled by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*Release date: 2025-02-27*

#### 🐛 Bug Fixes

- **[client]**

  - error when creating comment block without comment collection ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - Incorrect position after dragging the menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
- **[Workflow: Custom action event]** Fix build error by @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*Release date: 2025-03-04*

#### 🎉 New Features

- **[client]** time field support time format ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

#### 🚀 Improvements

- **[server]** Upgrade koa to 2.15.4; upgrade @koa/cors to 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[Workflow]** Lazy load job result for better performance ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

#### 🐛 Bug Fixes

- **[auth]** Avoid renewing the token during WebSocket authorization. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[client]**

  - Pages with custom favicon briefly flash the NocoBase favicon during loading ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - add new button appears on hover in association field read-only mode ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[devtools]** Ensure X-Forwarded-For header is set only if req.ip is not undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[Block: Map]** Configuration settings for map field are missing/not visible ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[Mobile]** Page error: Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[Users]** An error UI briefly flashes when the user permission management table loads for the first time ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[Block: Action panel]** Setting the height of the action panel is invalid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[Action: Import records Pro]** association block import button duplicate record detection shows no data in field dropdown by @katherinehhh
- **[Action: Export records Pro]** remove 'add block' option in export attachment button settings by @katherinehhh
- **[Workflow: Custom action event]** Fix migration for legacy buttons bound with custom action workflow by @mytharcher
- **[Custom brand]** Pages with custom favicon briefly flash the NocoBase favicon during loading by @zhangzhonghe
- **[Template print]** Restore from local failed when action template print and backup manager plugins were both enabled by @gchust
- **[Workflow: Approval]**

  - Fix `.toJSON()` caused error by @mytharcher
  - Fix migration not run because version number by @mytharcher
  - Fix migration for legacy blocks by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*Release date: 2025-02-27*

#### 🎉 New Features

- **[client]** support permission configuration for action ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh
- **[Block: template]** Add `Block: template` plugin, providing template support for blocks based on inheritance mechanism. ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[Workflow: Custom action event]** trigger workflow action support access control by @katherinehhh

#### 🚀 Improvements

- **[client]**

  - Upgrade react types definition ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust
  - Expansion and improvement of user personal center ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
- **[File manager]**

  - Increase URL length to 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - add backend code to generate file preview url ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx
  - File names during upload will change from random to the original name with a random suffix. ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
  - add backend code to generate file preview url ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - Change storage type api and add plugin api ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
  - Change storage type api and add plugin api ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[Block: Action panel]** Optimize mobile styles ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe
- **[Workflow]** Hide node id from node card in workflow canvas ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
- **[File storage: S3(Pro)]**

  - Adjust storage API based on main repository by @mytharcher
  - Support thumbnailRule option configuration by @jiannx
- **[Backup manager]** Allow restoring backup to an application even it is missing some plugins by @gchust

#### 🐛 Bug Fixes

- **[devtools]** Ensure X-Forwarded-For header is set only if req.ip is not undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[client]**

  - Incorrect position after dragging the menu ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
  - error when creating comment block without comment collection ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - Error occurs when clicking tree block node ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - After clicking the left menu, the sub-page is abnormally closed ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - Do not clear field value when the expression value is empty ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
  - rich text field component cannot be fully cleared ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
  - Unable to move the page into a group ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe
  - Skip auth error for CurrentUserProvider. ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
  - Fix uploaded file missed when one by one ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
  - Fixed html tag character in the mail channel config form input field. ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  - Fix files missed after uploaded ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  - picker format mismatch in filter form field ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - Show `<Variable.TextArea />` component correctly in disabled mode ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
- **[create-nocobase-app]** Error occurs on web client after running `create-nocobase-app` followed by `yarn dev` ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust
- **[auth]** Skip user auth check when token is api key ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66
- **[cli]** Improve internal logic of nocobase upgrade command ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos
- **[File manager]**

  - Fix migration for inherited collection ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
  - Fix migration and add test cases ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - Fix migration and add test cases ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - Fix `path` column type of file collection ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - Upgrade AWS SDK version to fix MinIO upload bug ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
- **[Block: template]** Require login when accessing public form ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[Access control]** Incorrect data records when using many to many fields as data scope in collection permissions ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[Block: Kanban]** Incorrect data filtering in popup Kanban block using popup record variables ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[Collection field: Sequence]** Fix sequence field not disabled when on read-only mode ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[Workflow: test kit]** Fix E2E test cases based on new features ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher
- **[Public forms]** Skip auth check in the public form ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos
- **[Authentication]** Remove unnecessary NavigateIfNotSignIn wrapper from AdminProvider. ([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66
- **[Workflow]**

  - Fix style details in workflow canvas ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - Support to trigger workflow when change password ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
- **[Workflow: Custom action event]**

  - Fix build error by @mytharcher
  - Fix E2E test cases by @mytharcher
  - Fix trigger workflow initializer by @mytharcher
  - Fix build error by @mytharcher
- **[Workflow: Pre-action event]** Fix error message from response message node not shown by @mytharcher
- **[Workflow: JavaScript]** Support to require NocoBase modules by @mytharcher
- **[Email manager]** public mailmessage collection and fix modal data lost by @jiannx
- **[File storage: S3(Pro)]**

  - Upgrade AWS SDK version to fix MinIO upload bug. by @mytharcher
  - set the default value of forcePathStyleForAccess to virtual by @jiannx
- **[Block: Multi-step form]** items sort error after drag by @jiannx
- **[Block: Tree]** Error occurs when clicking tree block node by @zhangzhonghe
- **[Backup manager]** The delete icon of the restore from local operation dialog is not working by @gchust
- **[Workflow: Approval]**

  - Fix migration not run because version number by @mytharcher
  - Fix E2E test cases based on new features by @mytharcher

## About NocoBase

NocoBase is a private, open-source, no-code platform offering total control and infinite scalability. It empowers teams to adapt quickly to changes while significantly reducing costs. Avoid years of development and substantial investment by deploying NocoBase in minutes.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Discover NocoBase in 3 Minutes!

## 👇 Get NocoBase

[**Homepage**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Documentation**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
