### 🎉 新特性

- **[client-v2]** 支持文本字段使用扫码录入 ([#9599](https://github.com/nocobase/nocobase/pull/9599)) by @katherinehhh

- **[异步任务管理器]** 为异步任务管理器顶部栏入口增加 v2 客户端支持。 ([#9707](https://github.com/nocobase/nocobase/pull/9707)) by @jiannx

- **[备份管理器]** 为备份管理器插件新增 v2 客户端运行时支持。 ([#9712](https://github.com/nocobase/nocobase/pull/9712)) by @katherinehhh

- **[数据源：外部 NocoBase]** 新增数据源插件：外部 NocoBase by @2013xile

### 🚀 优化

- **[client-v2]** 支持在 v2 弹窗选择关系字段中关闭多选。 ([#9730](https://github.com/nocobase/nocobase/pull/9730)) by @katherinehhh

- **[文件管理器]** 为文件管理器内部上传接口增加 `subPath` 支持。 ([#9731](https://github.com/nocobase/nocobase/pull/9731)) by @mytharcher

- **[变量和密钥]** 环境变量（`$env`）现在在 v1 运行时能被基于 flow-engine 的变量选择器选取。 ([#9728](https://github.com/nocobase/nocobase/pull/9728)) by @Molunerfinn

### 🐛 修复

- **[database]** 修复密码字段在批量更新时未正确加密的问题。 ([#9736](https://github.com/nocobase/nocobase/pull/9736)) by @mytharcher

- **[client]** 修复弹窗子表格行按钮通过联动规则隐藏时误隐藏整个子表格字段的问题 ([#9717](https://github.com/nocobase/nocobase/pull/9717)) by @katherinehhh

- **[AI 员工]** 优化 AI 员工数据查询提示词，引导其先加载所需技能再使用查询工具。 ([#9725](https://github.com/nocobase/nocobase/pull/9725)) by @cgyrock

- **[数据源管理]** 修复 v2 数据源字段配置抽屉修改标题字段后，关闭再打开仍显示旧标题字段的问题。 ([#9720](https://github.com/nocobase/nocobase/pull/9720)) by @katherinehhh

- **[区块：地图]**
  - 修复启用地图插件后，v2 数据源管理的添加字段菜单中缺少地图几何字段的问题。 ([#9715](https://github.com/nocobase/nocobase/pull/9715)) by @katherinehhh

  - 修复 v1 谷歌地图区块中 DrawingManager 不可用的问题 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) by @katherinehhh

- **[日历]** 修复 v2 日历区块详情弹窗中无法添加详情和编辑区块的问题 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) by @jiannx

