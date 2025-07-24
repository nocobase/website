汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/cn/blog/v1.8.10)

*发布时间：2025-07-24*


### [v1.8.7](https://www.nocobase.com/cn/blog/v1.8.7)

*发布时间：2025-07-18*

#### 🎉 新特性

- **[工作流: 日期计算节点]** 支持节点测试执行 by @mytharcher

#### 🚀 优化

- **[client]** 颜色选择器：新增四种推荐颜色 ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe
- **[工作流]** 改进比较逻辑以兼容日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复 表格中操作列的样式规则未生效问题 ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh
  - 删除菜单时，没有删除 uiSchemas 表中对应的数据 ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe
  - 避免非关系字段在预加载关系字段配置中被选择 ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher
- **[工作流：子流程]** 修复接收到召回信号时，待执行的计划不在当前实例时报错问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/cn/blog/v1.9.0-alpha.3)

*发布时间：2025-07-18*

#### 🎉 新特性

- **[数据源：主数据库]** 支持主数据源显示插件定义的表。 ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie
- **[工作流: 日期计算节点]** 支持节点测试执行 by @mytharcher

#### 🚀 优化

- **[client]** 颜色选择器：新增四种推荐颜色 ([#7226](https://github.com/nocobase/nocobase/pull/7226)) by @zhangzhonghe
- **[工作流]** 改进比较逻辑以兼容日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复 表格中操作列的样式规则未生效问题 ([#7225](https://github.com/nocobase/nocobase/pull/7225)) by @katherinehhh
  - 避免非关系字段在预加载关系字段配置中被选择 ([#7231](https://github.com/nocobase/nocobase/pull/7231)) by @mytharcher
  - 修复错误：Can't resolve 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe
  - 删除菜单时，没有删除 uiSchemas 表中对应的数据 ([#7232](https://github.com/nocobase/nocobase/pull/7232)) by @zhangzhonghe
- **[database]** 修复外部数据源表设置简单分页模式时的报错问题 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie
- **[数据表字段：排序]** 修复了在复制操作中缺少排序字段的问题 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh
- **[工作流：子流程]** 修复接收到召回信号时，待执行的计划不在当前实例时报错问题 by @mytharcher
- **[工作流：审批]**

  - 修复提交审批时的多级关系数据 by @mytharcher
  - 为审批记录列表增加审批已删除的容错 by @mytharcher
- **[邮件管理]** 邮件消息表格性能优化 by @jiannx
