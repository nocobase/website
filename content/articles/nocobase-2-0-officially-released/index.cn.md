NocoBase 2.0 是一次面向 **复杂应用构建与规模化部署** 的重要升级。本次版本在 AI 能力、应用架构、数据编辑体验以及前端事件流等方面进行了系统性增强，同时全面推进 V2 页面与核心能力的适配。

## 新特性

### AI 员工

AI 能力正式下沉至内核，成为 NocoBase 的一等公民，支持通过插件体系持续扩展：

- 将 AI 移至内核，提供插件化扩展能力
- 升级并优化 LangChain 相关依赖，提升稳定性与可扩展性
- 简化 AI 员工的交互流程，降低配置与使用门槛

![20260214075059](https://static-docs.nocobase.com/20260214075059.png)

参考文档：

- [AI 员工](https://v2.docs.nocobase.com/cn/ai-employees)

### 应用监管器

应用监管器插件用于 **统一发现、调度与管理多个 NocoBase 应用实例**，适用于多应用与多环境部署场景。

- 支持应用自动发现与集中管理
- 通过共享内存机制提升实例间协作效率
- 支持多环境混合部署，满足复杂交付需求

共享内存
![20260214075803](https://static-docs.nocobase.com/20260214075803.png)

多环境混合部署
![20260214075815](https://static-docs.nocobase.com/20260214075815.png)

参考文档：

- [多应用管理](https://v2.docs.nocobase.com/cn/multi-app/multi-app)

### 工作流画布编排能力增强

#### 支持拖拽节点调整顺序

![image-8ajlez.png](https://static-docs.nocobase.com/image-8ajlez.png)

#### 支持复制粘贴节点

![image-nskgho.png](https://static-docs.nocobase.com/image-nskgho.png)

### 子表格（行内编辑 / 弹窗编辑）

为满足不同复杂度的关联数据编辑需求，NocoBase 提供两种子表格编辑模式，可按场景灵活选择：

- **子表格（行内编辑）**：直接在表格中编辑关联数据，操作高效，适合快速录入与批量修改
- **子表格（弹窗编辑）**：通过弹窗表单编辑数据，支持更复杂的字段类型与校验逻辑，适用于高复杂度场景

子表格（行内编辑）
![20260214080224](https://static-docs.nocobase.com/20260214080224.png)

子表格（弹窗编辑）
![20260214080233](https://static-docs.nocobase.com/20260214080233.png)

参考文档：

- [子表格（行内编辑）](https://v2.docs.nocobase.com/cn/interface-builder/fields/specific/sub-table)
- [子表格（弹窗编辑）](https://v2.docs.nocobase.com/cn/interface-builder/fields/specific/sub-table-popup)

### 字段赋值（新版）

全新的字段赋值对表单数据的 **初始化与写入逻辑** 进行了统一与强化，显著提升可理解性与一致性：

- 提供 **统一的字段赋值配置入口**，减少分散配置带来的理解成本
- 字段赋值逻辑 **不再依赖字段组件类型**，数据行为更加稳定、可预测
- 支持 **关系字段的字段级赋值配置**，满足复杂关联建模需求
- 同时支持 **默认值** 与 **固定值** 两种赋值方式，覆盖初始化与强制写入场景
- 旧版「字段默认值」已废弃，请使用新版字段赋值

![20260214080932](https://static-docs.nocobase.com/20260214080932.png)

参考文档：

- 字段赋值（文档即将上线）

### 事件流触发时机

事件流在执行时，严格按照 **Event → Flow → Step** 的层级顺序运行，并在各层级的执行前后触发对应 Hook，便于精细化控制与扩展。

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
    - name: flow3
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

- [区块高度](https://v2.docs.nocobase.com/cn/interface-builder/blocks/block-settings/block-height)

### 表格行拖拽排序

![20260214085152](https://static-docs.nocobase.com/20260214085152.png)

### 数据加载方式

![20260214083433](https://static-docs.nocobase.com/20260214083433.png)

参考文档：

- [数据加载方式](https://v2.docs.nocobase.com/cn/interface-builder/blocks/block-settings/data-loading-method)

### 表单支持展示关系字段的字段

![20260214083517](https://static-docs.nocobase.com/20260214083517.png)

参考文档：

- [表单](https://v2.docs.nocobase.com/cn/interface-builder/blocks/data-blocks/form)

### 页面（V2）本地化支持

V2 页面已全面支持本地化，覆盖 **页面、区块、操作、字段** 等多个层级。

启用本地化插件后，系统将自动收集缺失翻译词条，并集中展示于本地化管理列表，便于统一维护。

在 JS 区块中，可通过 `ctx.t()` 获取本地化文案，并支持变量插值：

```js
const label = ctx.t('Your name is {{name}}', {
  name: await ctx.getVar('ctx.user.nickname')
});
ctx.render(label);
```

### 审批 2.0

新创建的审批工作流均以 2.0 的区块编排界面。1.x 已配置的仍支持继续使用，如 1.x 已配置的审批希望使用 2.0 的界面编排，需要选择 v2 版本重新配置界面，且配置后不能再还原到 1.x。

#### 配置发起人的界面

![image-ba3ann.png](https://static-docs.nocobase.com/image-ba3ann.png)

#### 配置审批人的界面

![image-dl448q.png](https://static-docs.nocobase.com/image-dl448q.png)

### 抄送 2.0

新创建的抄送节点，被抄送人的查看界面均以 2.0 的区块编排，1.x 已配置的仍支持继续使用，如 1.x 已配置的抄送希望使用 2.0 的界面编排，需要选择 v2 版本重新配置界面，且配置后不能再还原到 1.x。

![image-z26oib.png](https://static-docs.nocobase.com/image-z26oib.png)

## 尚未适配的功能

以下功能模块尚未在 2.0 中完成适配，将在后续版本中逐步升级：


| 功能模块           | 当前替代方案   |
| ------------------ | -------------- |
| 自定义请求         | 工作流请求节点 |
| 浏览器打印         | JS 操作        |
| 分步表单           | JS 区块        |
| 树筛选区块         | JS 区块        |
| 日历区块           | JS 区块        |
| 自定义变量         | 事件流         |
| 甘特图区块         | JS 区块        |
| 看板区块           | JS 区块        |
| 文本复制           | 事件流         |
| 表格列设置         | JS 操作        |
| 样式联动规则       | 事件流         |
| 复制文本快捷键     | 事件流         |
| 二维码字段         | JS 字段        |
| 扫码录入           | 事件流         |
| 嵌入 NocoBase      | —             |
| 中国行政区字段     | —             |
| 编码字段           | —             |
| 公开表单           | —             |
| 工作流人工节点待办 | —             |
| 提交成功后         | 事件流         |
| 表单数据模板       | 事件流         |
