# 新特性

### AI 员工

- 将 AI 移至内核，提供相关插件扩展
- 升级 langchain 相关依赖
- 简化 AI 员工的交互流程

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

参考文档：

- [AI 员工](https://v2.docs.nocobase.com/cn/ai-employees)

### 应用监管器

应用监管器插件用于统一监管和调度多个 NocoBase 应用实例，提供应用发现和应用运行管理能力。

共享内存

![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

多环境混合部署

![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

参考文档：

- [多应用管理](https://v2.docs.nocobase.com/cn/multi-app/multi-app)

### 子表格（行内编辑）和子表格（弹窗编辑）

为满足不同复杂度的关系数据编辑需求，NocoBase 提供了两种子表格编辑模式：

- 子表格（行内编辑）：支持在表格中直接编辑关联数据，操作高效、体验流畅，适合快速录入和批量修改场景。
- 子表格（弹窗编辑）：通过弹窗表单编辑关系数据，支持更丰富的字段类型和更复杂的表单配置，适用于对数据结构和校验要求较高的场景。

子表格（行内编辑）

![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

子表格（弹窗编辑）

![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

参考文档：

- [子表格（行内编辑）](https://v2.docs.nocobase.com/cn/interface-builder/fields/specific/sub-table)
- [子表格（弹窗编辑）](https://v2.docs.nocobase.com/cn/interface-builder/fields/specific/sub-table-popup)

### 字段赋值（新版）

全新的字段赋值机制对表单数据的初始化与写入逻辑进行了统一与增强，配置更集中、行为更清晰，适用于更复杂的数据建模场景。

- 提供**全局统一**的表单字段赋值配置入口，避免分散配置带来的理解成本
- 字段赋值逻辑**不再受字段组件类型影响**，数据行为更加一致、可预测
- 支持**关系字段的字段级赋值配置**，满足多表关联场景下的数据联动需求
- 同时支持**默认值**与**固定值**两种赋值方式，覆盖初始化与强制赋值两类常见场景
- 旧版“字段默认值”配置方式已废弃，请使用新的字段赋值机制进行替代

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

参考文档：

- [字段赋值](#)

### 事件流触发时机

事件触发时，按 Event → Flow → Step 的层级顺序执行，并在各层级的执行前后触发对应的 Hook。

```yml
event:
  before:
    - track_event_start
  flows:
    - name: flow1
      before:
        - track_flow_start
      steps:
        - name: step1
          before: [track_step_start]
          run: do_something
          after: [track_step_done]
      after:
        - track_flow_end
    - name: flow2
      ...
  after:
    - track_event_end
```

![20260214081527](https://static-docs.nocobase.com/20260214081527.png)

参考文档：

- [事件流](https://v2.docs.nocobase.com/cn/interface-builder/event-flow)

## 新增 2.0 适配

### 批量编辑

![20260214083041](https://static-docs.nocobase.com/20260214083041.png)

参考文档：

- [批量编辑](https://v2.docs.nocobase.com/cn/interface-builder/actions/types/bulk-edit)

### 复制

![20260214083146](https://static-docs.nocobase.com/20260214083146.png)

参考文档：

- [复制](https://v2.docs.nocobase.com/cn/interface-builder/actions/types/duplicate)

### 区块高度

![20260214083319](https://static-docs.nocobase.com/20260214083319.png)

参考文档：

- [复制](https://v2.docs.nocobase.com/cn/interface-builder/blocks/block-settings/block-height)

### 表格行拖拽排序

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

### 数据加载方式

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

参考文档：

- [复数据加载方式制](https://v2.docs.nocobase.com/cn/interface-builder/blocks/block-settings/data-loading-method)

### 表单支持展示关系字段的字段

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

参考文档：

- [表单](https://v2.docs.nocobase.com/cn/interface-builder/blocks/data-blocks/form)

### 页面（V2）本地化支持

V2 页面已全面支持本地化能力，覆盖 页面、区块、操作、字段 等多个层级。

如需对文案进行翻译，请先 启用本地化插件。系统会自动识别并收集缺失翻译的词条，将其统一汇总至本地化管理列表，方便集中维护与翻译。

在 JS 区块中，可通过 `ctx.t()` 方法获取本地化文案，并支持变量插值：

```js
const label = ctx.t('Your name is {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

ctx.t() 会根据当前语言环境返回对应翻译内容；若翻译缺失，将自动进入本地化管理列表。

### 审批 2.0

参考文档：

- [审批](https://v2.docs.nocobase.com/cn/workflow/nodes/approval)

### 抄送 2.0

参考文档：

- [抄送](https://v2.docs.nocobase.com/cn/workflow/nodes/cc)

### Office 文件预览

参考文档：

- [Office 文件预览](https://v2.docs.nocobase.com/cn/file-manager/file-preview/ms-office)

### 其他

以下为 2.0 未适配的功能模块，将在 2.0 发布后持续升级。

| 功能模块           | 代替方案                   |
| ------------------ | -------------------------- |
| 自定义请求         | 可以使用工作流请求节点代替 |
| 浏览器打印         | 可以使用 JS 操作代替       |
| 分步表单           | 可以使用 JS 区块代替       |
| 树筛选区块         | 可以使用 JS 区块代替       |
| 日历区块           | 可以使用 JS 区块代替       |
| 自定义变量         | 可以使用事件流代替         |
| 嵌入 NocoBase      | —                         |
| 中国行政区字段     | —                         |
| 编码字段           | —                         |
| 甘特图区块         | 可以使用 JS 区块代替       |
| 看板区块           | 可以使用 JS 区块代替       |
| 公开表单           | —                         |
| 文本复制           | 可以使用事件流代替         |
| 工作流人工节点待办 | —                         |
| 提交成功后         | 可以使用事件流代替         |
| 表单数据模板       | 可以使用事件流代替         |
| 表格列设置         | 可以使用 JS 操作代替       |
| 样式联动规则       | 可以使用事件流代替         |
| 复制文本快捷键     | 可以使用事件流代替         |
| 二维码字段         | 可以使用 JS 字段代替       |
| 扫码录入           | 可以使用事件流代替         |
