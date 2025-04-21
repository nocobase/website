### 🎉 新特性

- **[sdk]** 支持通过设置环境变量 `API_CLIENT_STORAGE_TYPE` 将客户端信息存储到 sessionStorage ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[数据表字段：附件（URL）]** 新增 附件（URL）字段 by @katherinehhh

### 🚀 优化

- **[client]**

  - 优化远程调试 ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - 操作按钮单独使用图标时，图标居中 ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - 更新数据操作，操作成功后，提示信息默认自动关闭 ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[工作流：HTTP 请求节点]** 支持服务器发送事件（SSE） ([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 修复

- **[公开表单]** 修复 公开表单的设置点击缺陷 ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[client]**

  - 修复默认值输入框中不显示值的问题 ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - 修复当子表格设置了联动规则后，报找不到关系字段的错误 ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - 修复上传文件中非默认支持的文件类型缩略图显示异常的问题 ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[本地化]** 修复本地化插件中的翻译发布后不生效的问题 ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile
