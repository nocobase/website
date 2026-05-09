### 🎉 新特性

- **[client]** 关系区块增加关联/取消关联操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[文本复制]** 阅读态文本字段支持“启用复制”配置项 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 优化

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

- **[client]** 支持字段赋值中使用自动编码字段 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复 v2 Flow 表单中数据表字段校验提示未翻译的问题 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx

- **[client]**
  - 修复表单区块中设置为 `隐藏并保留值` 的字段在页面编辑模式下不显示的问题，并恢复在字段赋值中为这类字段设置值的输入能力 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx

  - 修复 AttachmentURL 字段在缺少文件元数据时下载文件名异常的问题。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher

  - 修复 v2 表格批量触发工作流在跳转到其他 tab 后返回原 tab 时选中状态不同步，且返回后可再次勾选记录的问题 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx

  - 修复筛选表单无法折叠的问题 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe

  - 修复 v1 子表格联动规则错误改变字段必填样式的问题 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe

  - 修复网格卡片区块更新数据后刷新未正确显示数据的问题 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh

  - 修复子表格中选项字段必填在移动端需选择两次才生效的问题 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh

  - 修复缓存页面切换后 URL 查询参数变量失效的问题 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe

  - 修复 v2 DividerItem 未适配主题的问题 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh

  - 修复 v2 子表格中关系字段下拉选项组件错误显示快捷编辑配置项的问题 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh

  - 修复区表单值改变时联动规则不自动运行的问题。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust

  - 修复自定义下拉多选筛选标量字段时报错的问题 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe

- **[server]** 验证插件包名称 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos

- **[数据源管理]** 修复角色权限配置中外部数据源自定义范围允许编辑删除所有数据的问题 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh

- **[数据源：主数据库]** 修复启用表前缀时导入数据库表后错误使用带前缀表名的问题 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile

- **[通知：站内信]** 修复收到实时站内信后通知列表未及时刷新的问题 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher

- **[区块：看板]** 修复 v1 看板区块长文本字段中单个单词被换行的问题 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh

- **[数据表字段：公式]** 修复 v2 子表格中公式字段未触发自动计算值的问题 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

