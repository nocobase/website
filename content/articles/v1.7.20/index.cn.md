### 🐛 修复

- **[client]**
  - 字段变更后，依赖该字段的数据范围应自动清空已选值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) by @zhangzhonghe

  - 修复设置表格列宽度无效的问题 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) by @zhangzhonghe

  - 修复复制按钮弹窗中，筛选表单报错的问题 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) by @zhangzhonghe

  - 修复了保存一对一关系字段报错问题 ([#7153](https://github.com/nocobase/nocobase/pull/7153)) by @aaaaaajie

- **[undefined]** 修复 e2e CI 文件 ([#7160](https://github.com/nocobase/nocobase/pull/7160)) by @mytharcher

- **[文件管理器]**
  - 修复 mimetype 类型检测 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) by @mytharcher

  - 修复 ESM 引起的编译错误 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) by @mytharcher

- **[公开表单]** 修复公开表单中 Date Only 字段选择日期失败的问题 ([#7168](https://github.com/nocobase/nocobase/pull/7168)) by @katherinehhh

- **[工作流]** 修复移动端需要多次左滑才能返回上一页的问题 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) by @zhangzhonghe

- **[数据可视化]** 表格分页器问题 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile

- **[工作流：审批]**
  - 修复撤回后关系数据不全的问题 by @mytharcher

  - 移除因更新 schema 造成超时的事务 by @mytharcher

  - 修复审批被删除后的页面报错 by @mytharcher

  - 修复提交审批修改关系字段的参数 by @mytharcher

