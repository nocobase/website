### 🚀 优化

- **[数据源管理]** v2 数据源管理中添加关系字段时，外键支持像 v1 一样从所属数据表的已有字段中下拉选择。 ([#10526](https://github.com/nocobase/nocobase/pull/10526)) by @katherinehhh

### 🐛 修复

- **[flow-engine]** 修复 V2 表单数字精度校验未拦截超出小数位数限制的值的问题。 ([#10512](https://github.com/nocobase/nocobase/pull/10512)) by @katherinehhh

- **[client-v2]** 修复 v2 子表格添加字段前后行高不一致的问题。 ([#10520](https://github.com/nocobase/nocobase/pull/10520)) by @katherinehhh

- **[文件管理器]** 支持知识库文档下载复用文件管理器的统一下载处理逻辑。 ([#10513](https://github.com/nocobase/nocobase/pull/10513)) by @cgyrock

- **[数据源管理]**
  - 修复 v2 数据源管理中编辑已有反向字段的关系字段时提交报错的问题。 ([#10521](https://github.com/nocobase/nocobase/pull/10521)) by @katherinehhh

  - 修复 v2 数据源编辑器为已有关系字段补建反向字段时，反向关系类型为空导致无法提交的问题。 ([#10511](https://github.com/nocobase/nocobase/pull/10511)) by @katherinehhh

  - 修复 v2 数据源设置中删除字段后，再添加同名字段时错误提示字段名称已存在的问题。 ([#10509](https://github.com/nocobase/nocobase/pull/10509)) by @katherinehhh

- **[AI 员工]**
  - 固定 AI 会话的时间上下文，改善前端工具执行完成后继续对话时的提示词缓存复用率。 ([#10517](https://github.com/nocobase/nocobase/pull/10517)) by @cgyrock

  - 修复知识库开关关闭且检索字段为空时，AI 员工配置无法保存的问题 ([#10507](https://github.com/nocobase/nocobase/pull/10507)) by @cgyrock

- **[工作流]** 修复 v2 工作流更新节点重新打开后多关系字段赋值消失的问题；关系选择改为保存关联键，并按键加载记录用于回显。 ([#10523](https://github.com/nocobase/nocobase/pull/10523)) by @mytharcher

- **[AI: 知识库]** 优化知识库文档删除操作，使用展示文件名和本地化按钮的模态确认框，并统一使用文件管理器的文档下载逻辑。 by @cgyrock

- **[工作流：审批]** 修复 V2 原生页面中点击相关审批区块的审批任务无法打开审批弹窗的问题。 by @mytharcher

- **[企业微信]** 修复 Origin 末尾带斜杠时，企微授权及回调地址出现重复斜杠的问题。 by @chenzhizdt

