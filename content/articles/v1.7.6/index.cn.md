### 🚀 优化

- **[client]** 禁止将一个分组菜单移动到自己内部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

### 🐛 修复

- **[client]**
  - 修复了区块读取外部数据源视图数据时报错的问题。 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie

  - 修复筛选区块参数错误的问题 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe

  - 在联动规则中使用“当前对象”变量无效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe

  - 用联动规则无法清除子表格的必填标志 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe

- **[undefined]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 by @aaaaaajie

- **[移动端]** 优化移动端弹窗卡顿的问题 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe

- **[数据源管理]** 修复将 possibleTypes 从数据库固定值改为动态配置，解决应用升级后兼容性问题 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie

- **[操作：导入记录]** 修复导入XLSX树表格数据时批量编辑报错 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie

- **[工作流]** 修复工作流不存在时的页面报错 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher

- **[工作流：JavaScript 节点]** 修复相对路径引入包失败的问题 by @mytharcher

- **[工作流：审批]**
  - 修复工作流删除之后报错的问题 by @mytharcher

  - 审批详情中重新加载文件数据以避免链接失效 by @mytharcher

  - 修复触发器提供的变量 by @mytharcher

