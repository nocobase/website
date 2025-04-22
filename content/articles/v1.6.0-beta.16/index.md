### 🎉 New Features

- **[client]** time field support time format ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

### 🚀 Improvements

- **[server]** Upgrade koa to 2.15.4; upgrade @koa/cors to 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile

- **[Workflow]** Lazy load job result for better performance ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

### 🐛 Bug Fixes

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

