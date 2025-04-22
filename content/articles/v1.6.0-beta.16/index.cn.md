### 🎉 新特性

- **[client]** 时间字段支持格式化 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

### 🚀 优化

- **[server]** 更新 koa 至 2.15.4；更新 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile

- **[工作流]** 后置节点结果加载以提升执行记录画布性能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

### 🐛 修复

- **[auth]** 在 WebSocket 授权过程中避免刷新令牌。 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66

- **[client]**
  - 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe

  - 关系字段阅读模式下hover时出现新增按钮 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh

- **[devtools]** 确保仅在 req.ip 不为 undefined 时，设置 X-Forwarded-For 头部。 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66

- **[区块：地图]** 地图字段不显示配置项 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe

- **[移动端]** 页面报错：Cannot read properties of null (reading 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe

- **[用户]** 用户权限管理表格在首次加载页面时，有一个报错的 UI 一闪而过 ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe

- **[区块：操作面板]** 设置操作面板的高度无效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

- **[操作：导入记录 Pro]** 关系区块导入按钮的识别重复记录依据字段下拉无内容 by @katherinehhh

- **[操作：导出记录 Pro]** 导出附件按钮setting多了添加区块 by @katherinehhh

- **[工作流：自定义操作事件]** 修复自定义操作事件已绑定工作流的旧按钮的迁移脚本 by @mytharcher

- **[自定义品牌]** 已经自定义 favicon 的页面，在页面加载时会闪一下 NocoBase 的 favicon by @zhangzhonghe

- **[模板打印]** 模板打印插件和备份管理器插件都开启时，无法上传本地备份还原应用 by @gchust

- **[工作流：审批]**
  - 修复 `.toJSON()` 导致的错误 by @mytharcher

  - 修复由于版本号设置导致迁移脚本未执行 by @mytharcher

  - 修复旧区块的迁移脚本 by @mytharcher

