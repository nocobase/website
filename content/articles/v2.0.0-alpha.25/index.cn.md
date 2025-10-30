### 🚀 优化

- **[server]** 增加 Gateway 层日志 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile
- **[flow-engine]** 支持在 flow step 中定义上下文变量 ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust
- **[数据可视化]**

  - 添加提示 请先点击”运行查询“后再配置图表选项 ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang
  - 图表配置面板点击公共预览按钮时刷新图表数据 ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang
- **[AI 员工]** 优化 AI 编程体验，包括使用 AI 员工审查、诊断并修复代码。 ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock
- **[数据源管理]** 调整字段类型和 interface 列顺序，修改时增加二次确认 ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile
- **[工作流]** 对更新记录操作按钮补全绑定工作流的配置项 ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher
- **[多应用管理器（已废弃）]** 改进 app supervisor ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

### 🐛 修复

- **[client]**

  - 修复了字段为只读模式时无法设置默认值的问题，确保在字段不可编辑时能够更顺畅地配置默认值。 ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust
  - 修复子表单联动规则的已知问题 ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe
  - 筛选表单中 JS 区块的字段无法被加载 ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust
- **[flow-engine]** 弹窗里编辑表单关联字段的数据范围中的当前弹窗记录上下文选择不正确 ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust
- **[工作流：人工处理节点]** 修复工作流停用后人工处理任务从待办中心消失的问题 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher
- **[AI 员工]** 修复了在选择包含 API 资源的区块时未正确获取对应数据的问题。 ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock
- **[工作流]** 修复开启分支的节点删除后，保留的分支内部第一个节点的 key 被改为新值的问题 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher
- **[数据表字段：中国行政区划]** 城市和县区相同时，无法导入数据 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile
- **[文件管理器]** 修复 `.msg` 文件无法正常上传的问题 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher
- **[前端流引擎]** 联动规则变量赋值无法正确解析变量 ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust
- **[数据可视化]** 图表初始化时使用 sql:runById 接口请求查询数据 ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang
- **[工作流：审批]** 修复审批完成通知中的状态文本的翻译问题，当用户未设置语言偏好时使用系统配置的默认语言进行翻译 by @mytharcher
