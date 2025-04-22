### 🚀 优化

- **[create-nocobase-app]** 更新依赖，移除 SQLite 支持 ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos

- **[文件管理器]** 暴露公共包 API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher

- **[工作流]** 为变量的类型集合增加日期相关类型 ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher

### 🐛 修复

- **[client]**
  - 移动端顶部的导航栏图标很难被删除的问题 ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe

  - 通过外键连接后，点击触发筛选，筛选条件为空 ([#6634](https://github.com/nocobase/nocobase/pull/6634)) by @zhangzhonghe

  - 筛选按钮中日期字段，切换picker 异常 ([#6695](https://github.com/nocobase/nocobase/pull/6695)) by @katherinehhh

  - 左侧菜单的收起按钮会被绑定工作流弹窗遮挡的问题 ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe

  - 重新打开联动规则时缺少操作选项约束 ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh

  - 未设置导出权限时仍显示导出按钮 ([#6689](https://github.com/nocobase/nocobase/pull/6689)) by @katherinehhh

  - 被联动规则隐藏的必填字段，不应该影响表单的提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe

- **[server]** create-migration 命令生成的 appVersion 不准确 ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos

- **[build]** 修复 tar 命令报错的问题 ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher

- **[工作流]** 修复子流程执行定时任务报错的问题 ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher

- **[工作流：自定义操作事件]** 支持多行记录模式的手动执行 by @mytharcher

- **[文件存储：S3 (Pro)]** 增加 multer 逻辑用于服务端上传 by @mytharcher

