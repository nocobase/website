### 🎉 新特性

- **[client]** 支持触发工作流按钮配置操作成功后的流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher

- **[数据表字段：代码]** 编码字段支持 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx

- **[工作流：自定义操作事件]** 支持自定义上下文数据，以供自定义操作事件作为子流程调用时传递任意变量 ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher

### 🚀 优化

- **[client]** 当编辑表单区块和详情区块无可用数据时给出提示信息。 ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust

- **[flow-engine]** 修复新 runjs 代码会在运行前解析变量表达式的问题。 ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust

- **[工作流]** 在添加节点的菜单中展示所有节点类型，即使该节点不可用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher

- **[操作：自定义请求]** 事件流支持自定义请求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx

- **[AI: 知识库]** 重构知识库文档加载逻辑 by @cgyrock

- **[Redis 分布式锁适配器]** 基于主仓库 LockManager 接口变更重构 by @mytharcher

- **[备份管理器]** 为定时备份增加分布式锁，避免重复备份 by @mytharcher

- **[迁移管理]** 优化迁移检查、迁移 SQL 下载、迁移日志格式及迁移执行过程的可视化体验 by @cgyrock

### 🐛 修复

- **[client]**
  - 修复因权限判断导致子表单子表格不显示数据的问题 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos

  - 修复 v2 筛选表单字段排序后折叠按钮失效的问题 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe

  - 修复筛选表单 Field values 中自定义字段的值输入框类型不正确的问题 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe

  - 修复引用模板（v1）管理页面缺少筛选和刷新按钮的问题。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust

  - 修复 SQL 数据表的详情区块数据加载报错的问题。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust

  - 修复详情区块字段联动规则在首次渲染时不生效的问题。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust

  - 修复 v2 子页面返回按钮样式异常的问题 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe

  - v2 区块现在只会显示当前数据源支持的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe

  - 修复配置模式下联动隐藏必填字段仍被校验的问题 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe

  - 修复 tab 遮挡并保证配置模式下标签最小宽度 ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe

  - 修复子表格列隐藏切换与连续删除列后界面延迟生效的问题 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe

  - 隐藏多对多（数组）关系记录区块添加，防止报错。 ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust

  - 修复弹窗详情中 Link 跳转结果被关闭视图回滚的问题 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe

  - 修复关系字段弹窗里编辑数据后原区块不刷新的问题。 ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust

  - 修复更新记录表单出现两次必填校验 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx

- **[server]** 修复非数据库类数据源表格查询报错问题 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock

- **[lock-manager]** 修复锁管理器的竞态问题 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher

- **[database]**
  - 修复数据表的视图模板缺少`简单分页`选项问题 ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock

  - 设置数字字段精度验证规则无效 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile

- **[undefined]** 修复升级后提示无法找到plugin-block-reference的问题。 ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust

- **[权限控制]**
  - 使用  collection.filterTargetKey 代替  Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos

  - 修复 Restful API 数据源数据修改操作报错问题 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock

- **[UI 模板]**
  - 修复详情区块保存为模板后关系数据无法正确加载的问题。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust

  - 修复引用操作面板区块模板报错的问题。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust

  - 修复表格区块的引用模板事件流无法配置行点击事件流的问题。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust

  - 修复详情当前记录的区块模板和编辑表单区块模板复用可能出现数据无法正确加载的问题。 ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust

  - 修复模板区块事件流修改props时不生效的问题。 ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust

- **[Office 文件预览]** 将弹窗高度调整为更合适的值以展示更多文件内容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher

- **[操作：导出记录]**
  - 修复多对多数组字段导出后空白的问题 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock

  - 修复导出excel文件中数字类型字段展示位字符串的问题 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock

- **[区块：列表]** 修复列表区块字段无法使用当前记录变量的问题。 ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust

- **[数据源：主数据库]**
  - 更新 JSON 字段默认值不生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile

  - 字段同步错误 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile

- **[工作流]** 修复在审批节点中拖动区块时显示了错误的节点拖动占位效果 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher

- **[AI 员工]**
  - 修复使用 deepseek reasoning 模型时候 tool call 异常 ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock

  - 修复 qwen/deepseek/kimi 不能读取上传文档的问题 ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock

- **[多空间]** 修复数据表主键创建数据时空间权限报错 by @jiannx

- **[工作流：审批]**
  - 修复审批办理详情中部分标签未翻译的问题 by @zhangzhonghe

  - 修复审批人未按照配置顺序生成记录的问题 by @mytharcher

- **[迁移管理]**
  - 修复迁移异常后打印异常对象所包含sql过大容易卡死进程的问题 by @cgyrock

  - 修复编译错误 by @mytharcher

  - 修复用户输入的迁移描述丢失问题，并使用当前时间作为默认迁移描述 by @cgyrock

  - 调整临时文件的存放位置以支持集群模式 by @mytharcher

