### 🎉 新特性

- **[client]** v2 表单中日期字段增加日期范围限制设置项 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

- **[flow-engine]** 将 `plugin-environment-variables` 迁移到 client-v2，提供基于 React 的设置页与全局注册的 `$env` 运行时变量；为 `plugin-file-manager` 新增 client-v2 入口，提供基于 React 的存储配置页面以及基于 FlowModel 的上传字段、上传动作和预览能力。 ([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🐛 修复

- **[client]**
  - 修复 JS field 改为只读后 js 代码无法再次被修改的问题。 ([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust

  - 修复路由管理页的配置不和页面标签页的配置同步的问题 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe

  - 修复字段联动规则中子表格字段赋值不生效的问题。 ([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust

  - 修复新增弹窗关系字段默认值弹窗不正确的问题。 ([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust

- **[数据表字段：Markdown(Vditor)]** 修复 markdown 字段在表单水平布局时提示信息被遮挡的问题 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh

- **[移动端（已废弃）]** 修复移动端消息弹窗无法关闭和滑动的问题 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe

- **[WEB 客户端]** 修复使用翻译后的路由类型筛选不到数据的问题 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe

- **[工作流：审批]** 修复审批处理设置中显示 JS field 的问题 by @zhangzhonghe

