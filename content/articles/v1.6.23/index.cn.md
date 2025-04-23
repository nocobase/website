### 🚀 优化

- **[cli]** 优化 `nocobase upgrade` 命令的内部实现逻辑 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos

- **[模板打印]** 用客户端角色访问控制替换了数据源操作权限控制。 by @sheldon66

### 🐛 修复

- **[cli]** 升级时自动更新项目的 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos

- **[client]**
  - 添加关联表格时未过滤已关联的数据 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh

  - 树表格中添加子记录按钮的联动规则缺失「当前记录」变量 ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh

- **[操作：导入记录]** 修复设置字段权限时出现的导入导出异常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie

- **[区块：甘特图]** 甘特图区块设置月份视图时，日历头部月份重叠 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh

- **[操作：导出记录 Pro]**
  - pro导出按钮在点击表格排序后丢失过滤参数 by @katherinehhh

  - 修复设置字段权限时出现的导入导出异常。 by @aaaaaajie

- **[文件存储：S3 (Pro)]** 修复已上传文件的响应数据 by @mytharcher

- **[工作流：审批]** 修复预加载审批记录数据的关系字段 by @mytharcher

