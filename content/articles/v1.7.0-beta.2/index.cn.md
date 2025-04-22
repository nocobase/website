### 🎉 新特性

- **[client]**
  - 表格区块支持配置隐藏最左侧序号和选择列（默认显示） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh

  - 支持在联动规则配置可选项字段选项 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh

  - 联动规则支持配置时间字段的日期范围 (min/max) ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[区块：操作面板]** 支持操作面板按钮标题换行或省略 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

### 🐛 修复

- **[client]**
  - 子表格切换分页数后新增数据页码显示错误 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh

  - Logo 的样式与之前的不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

  - 子表格删除记录的时候多选字段值错误且选项缺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh

  - 表单日期字段日期范围，最大日期可选范围少一天 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh

  - 使用“$anyOf”操作符时，联动规则无效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe

  - 使用链接按钮打开的弹窗，数据不更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[操作：批量编辑]** 修复批量编辑提交时未能触发工作流的问题 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[数据可视化]** 添加自定义筛选字段时会出现已移除字段 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[数据源管理]** 角色管理中切换数据源没有加载对应数据表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[操作：自定义请求]** 自定义请求的服务端权限校验错误 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[文件管理器]** 修复文件管理一些问题 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[通知：站内信]**
  - 避免错误的接收人配置导致查询出全部用户 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

  - 在站内信列表中，将背景颜色与消息卡片的颜色区分开，以提升视觉层次感和可读性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

- **[工作流：人工处理节点]**
  - 调整迁移脚本版本范围限制为 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

  - 修复遗漏表前缀和 schema 的迁移脚本 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

