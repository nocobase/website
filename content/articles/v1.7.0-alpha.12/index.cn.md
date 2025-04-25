### 🚀 优化

- **[cli]** 优化 `nocobase upgrade` 命令的内部实现逻辑 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos

- **[create-nocobase-app]** 更新依赖，移除 SQLite 支持 ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos

- **[移动端]** 优化移动端日期选择弹窗的打开速度 ([#6735](https://github.com/nocobase/nocobase/pull/6735)) by @zhangzhonghe

- **[区块：模板]** 支持将模板区块转换成普通区块 ([#6662](https://github.com/nocobase/nocobase/pull/6662)) by @gchust

- **[文件管理器]** 暴露公共包 API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher

- **[主题编辑器]** 主题支持设置侧边栏宽度 ([#6720](https://github.com/nocobase/nocobase/pull/6720)) by @chenos

- **[工作流]** 为变量的类型集合增加日期相关类型 ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher

- **[模板打印]** 用客户端角色访问控制替换了数据源操作权限控制。 by @sheldon66

### 🐛 修复

- **[client]**
  - 多层级关系数据中联动规则未正确显示 ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh

  - 树表格中添加子记录按钮的联动规则缺失「当前记录」变量 ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh

  - 修复提交成功后，刷新数据区块无效的问题 ([#6748](https://github.com/nocobase/nocobase/pull/6748)) by @zhangzhonghe

  - 左侧菜单的收起按钮会被绑定工作流弹窗遮挡的问题 ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe

  - 移动端顶部的导航栏图标很难被删除的问题 ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe

  - 启用序号列设置后回显错误 ([#6724](https://github.com/nocobase/nocobase/pull/6724)) by @katherinehhh

  - 联动规则中时间字段作为判断条件无效 ([#6728](https://github.com/nocobase/nocobase/pull/6728)) by @katherinehhh

  - 重新打开联动规则时缺少操作选项约束 ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh

  - 被联动规则隐藏的必填字段，不应该影响表单的提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe

  - 添加关联表格时未过滤已关联的数据 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh

- **[server]** create-migration 命令生成的 appVersion 不准确 ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos

- **[cli]** 升级时自动更新项目的 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos

- **[build]** 修复 tar 命令报错的问题 ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher

- **[区块：甘特图]** 甘特图区块设置月份视图时，日历头部月份重叠 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh

- **[操作：导入记录]** 修复设置字段权限时出现的导入导出异常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie

- **[区块：模板]** mysql 环境下无法使用区块模板 ([#6726](https://github.com/nocobase/nocobase/pull/6726)) by @gchust

- **[工作流]** 修复子流程执行定时任务报错的问题 ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher

- **[工作流：自定义操作事件]** 支持多行记录模式的手动执行 by @mytharcher

- **[操作：导出记录 Pro]**
  - 修复设置字段权限时出现的导入导出异常。 by @aaaaaajie

  - pro导出按钮在点击表格排序后丢失过滤参数 by @katherinehhh

- **[文件存储：S3 (Pro)]**
  - 修复已上传文件的响应数据 by @mytharcher

  - 增加 multer 逻辑用于服务端上传 by @mytharcher

- **[工作流：审批]** 修复预加载审批记录数据的关系字段 by @mytharcher

