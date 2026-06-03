### 🚀 优化

- **[工作流：审批]** 调整审批触发器和节点配置的验证规则，确保 UI 相关字段存在 by @mytharcher

### 🐛 修复

- **[client]** 修复移动端关系字段选择数据后不显示的问题 ([#9665](https://github.com/nocobase/nocobase/pull/9665)) by @zhangzhonghe

- **[client-v2]**
  - 修复菜单联动规则保存报错的问题 ([#9666](https://github.com/nocobase/nocobase/pull/9666)) by @zhangzhonghe

  - 修复 v2 页面区块上方间距过大的问题 ([#9647](https://github.com/nocobase/nocobase/pull/9647)) by @zhangzhonghe

- **[flow-engine]** 修复为子表单设置字段值时页面卡死的问题。 ([#9598](https://github.com/nocobase/nocobase/pull/9598)) by @gchust

- **[AI 员工]**
  - 修复 AI 提供商 base URL 校验问题。 ([#9667](https://github.com/nocobase/nocobase/pull/9667)) by @cgyrock

  - 修复工作流 AI 员工节点调用`ctx.get`报错问题 ([#9661](https://github.com/nocobase/nocobase/pull/9661)) by @cgyrock

- **[通知：站内信]** 修复站内消息频道时间戳过滤条件中的 SQL 注入风险。 ([#9630](https://github.com/nocobase/nocobase/pull/9630)) by @mytharcher

- **[操作：复制记录]** 修复复制操作提交失败未重置按钮状态的问题 ([#9676](https://github.com/nocobase/nocobase/pull/9676)) by @katherinehhh

- **[日历]** 修复 v2 页面中日历事件未按配置的颜色字段显示颜色的问题。 ([#9677](https://github.com/nocobase/nocobase/pull/9677)) by @jiannx

- **[前端流引擎]**
  - 修复复制模板后修改区块内容可能会影响原始区块内容的问题。 ([#9664](https://github.com/nocobase/nocobase/pull/9664)) by @gchust

  - 修复弹窗标签页拖动调整位置不生效的问题。 ([#9602](https://github.com/nocobase/nocobase/pull/9602)) by @gchust

