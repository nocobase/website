### 🎉 新特性

- **[client]** 关系区块增加关联/取消关联操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[数据可视化]** 新增区块插件的 client-v2 支持 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 优化

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 修复

- **[client-v2]**
  - 修复部分 v2 页面加载远程插件失败的问题 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe

  - 修复 v2 页面区块拖拽时占位高亮和落点错误的问题 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe

- **[client]**
  - 修复区表单值改变时联动规则不自动运行的问题。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust

  - 修复子表格中选项字段必填在移动端需选择两次才生效的问题 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh

  - 修复 v2 子表格中关系字段下拉选项组件错误显示快捷编辑配置项的问题 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh

  - 修复缓存页面切换后 URL 查询参数变量失效的问题 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe

  - 修复网格卡片区块更新数据后刷新未正确显示数据的问题 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh

- **[server]** 验证插件包名称 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos

- **[undefined]** 修复多语言文档中的死链，并默认开启文档构建时的死链检测。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn

- **[AI 员工]**
  - 修复工作流 AI 员工节点读取关系字段附件报错问题 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock

  - 修复工作流 AI 员工节点指定使用工具后无法正常结束节点调用 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock

- **[区块：看板]**
  - 优化看板卡片紧凑样式，优化快速创建弹窗模板选择。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx

  - 修复 v1 看板区块长文本字段中单个单词被换行的问题 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh

  - 修复弹窗或二级页面中关联看板区块使用未解析运行时资源参数的问题。 ([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx

- **[操作：自定义请求]** 升级 koa 到 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos

- **[数据表字段：公式]** 修复 v2 子表格中公式字段未触发自动计算值的问题 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

- **[邮件管理]** 修复邮箱别名标题显示问题 by @jiannx

