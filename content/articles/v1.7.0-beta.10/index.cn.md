### 🎉 新特性

- **[client]** 提交成功后支持变量配置，支持带参数数跳转详情页 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh

- **[数据表字段：Markdown(Vditor)]** Vditor 支持 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

### 🚀 优化

- **[client]**
  - 仅支持纯文本文件预览 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher

  - 优化 502 错误提示 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos

  - 限制联动规则字段属性中不同字段可选的 Action ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh

- **[文件管理器]** 调整存储引擎的 `getFileData` 方法 API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher

- **[权限控制]** 优化切换角色顺序和样式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie

- **[数据表字段：自动编码]** 支持使用 sequence 作为日历区块的标题字段 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh

- **[工作流]** 将统计数据列拆分为独立表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher

- **[工作流：自定义操作事件]** 将统计数据列拆分为独立表 by @mytharcher

- **[工作流：审批]**
  - 将统计数据列拆分为独立表 by @mytharcher

  - 支持审批处理按钮跳过表单验证的设置 by @mytharcher

### 🐛 修复

- **[client]**
  - 旧版本的浏览器，页面会显示空白 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe

  - 选项“省略超出长度的内容”需要刷新页面，开关的状态才生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe

  - 数据范围中筛选日期字段显示异常 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh

  - 在弹窗中无法再次打开弹窗 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe

  - 存在关联字段的区块另存为模板报错 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

  - 页面顶部菜单显示空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe

  - 字段赋值对字段进行“空值”赋值无效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh

- **[工作流]**
  - 确保创建工作流之前 key 已生成 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher

  - 修复配置自动删除选项时报错问题 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher

- **[公开表单]** 公开表单页面标题不应该显示 Loading... ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

- **[移动端]** 调整在手机上显示的字体大小为 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe

- **[变量和密钥]** 变量密钥筛选按钮缺少 icon、筛选后不显示筛选个数、筛选后切换页面变量密钥数据不刷新 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh

- **[用户认证]** 注册页面字段的本地化问题 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile

- **[API 文档]** API 文档页面不能滚动 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe

- **[工作流：操作后事件]** 多行记录的批量操作需要触发多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher

- **[区块：模板]**
  - 表单联动规则未正确从模板同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust

  - 详情区块存在重复的另存为模板菜单 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust

- **[工作流：审批]** 修复审批表单提交值的问题 by @mytharcher

