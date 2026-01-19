### 🚀 优化

- **[server]** 支持配置跨域 Origin 白名单 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile

- **[操作：导出记录]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh

- **[操作：导出记录 Pro]** 改进导出按钮数据范围：优先按选中记录，其次按前端筛选范围 by @katherinehhh

### 🐛 修复

- **[client]**
  - 修复自定义变量弹窗被遮挡的问题 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe

  - 修复数据表图形界面编辑数据表报错问题 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh

  - 修复数据表字段分组排序设置不生效问题 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh

  - 修复快捷便捷弹窗高度超出页面高度的问题 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe

  - 修复表格行按钮的联动规则会影响弹窗表单按钮状态的问题 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe

  - 修复切换分页时表格区块操作列状态污染的问题。 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust

  - 修复表格“列设置”按钮无效的问题 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe

  - 修复关系文件快速编辑，选择文件的弹窗层级错误，无法保存弹窗配置的问题。 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust

- **[flow-engine]**
  - 修复 runjs 相关代码在运行前变量就被解析的问题。 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust

  - 修复数据选择器快速新增弹窗中无法选择弹窗变量的问题。 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust

  - 修复能够重复点击配置菜单打开多个配置弹窗的问题。 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust

- **[移动端（已废弃）]** 弃用移动端插件（2.0 后将使用 ui-layout 插件代替） ([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

- **[前端流引擎]** 修复无法正确解析包含中划线字符的变量的问题。 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust

- **[邮件管理]** 修复邮箱配置弹窗被遮挡的问题 by @zhangzhonghe

