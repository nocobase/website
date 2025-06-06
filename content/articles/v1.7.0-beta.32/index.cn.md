### 🎉 新特性

- **[client]** 单行文本字段支持输入多个关键词进行筛选 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
  参考文档：[多关键词筛选](https://docs-cn.nocobase.com/handbook/multi-keyword-filter)
- **[多关键词筛选]** 单行文本字段支持输入多个关键词进行筛选 by @zhangzhonghe
  参考文档：[多关键词筛选](https://docs-cn.nocobase.com/handbook/multi-keyword-filter)
- **[模板打印]** 模板打印新增批量打印功能支持。 by @sheldon66

### 🚀 优化

- **[工作流]** 补全英文语言内容 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

### 🐛 修复

- **[client]**

  - 关系字段使用级联组件时，在弹窗首次打开未显示数据 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 子表单中放出关联字段时未提交关联数据 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 拖拽排序字段未正确显示所有可选字段 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 表单中数据选择器表格的数据范围应支持当前表单变量 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 添加关联表格时未全部过滤已关联的数据 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
- **[database]** 处理导入字段是字符串类型的空白单元格报错 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[工作流：人工处理节点]** 修复展示未处理待办时的渲染错误 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[文件管理器]** 修复类型 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
- **[区块：操作面板]** 读取扫码器中的路由 basename，以适配桌面端。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[AI 集成]** 修复 LLM 服务配置页面和验证配置页面切换不显示内容的问题 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流]** 修复循环触发限制更新后数据表事件触发不正确 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[工作流：审批]** 修复转签和加签时选择指派人的列表加载问题 by @mytharcher
- **[备份管理器]** 修复编译时的类型错误 by @mytharcher
