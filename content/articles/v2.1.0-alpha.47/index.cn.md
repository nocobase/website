### 🎉 新特性

- **[undefined]** 完善了 CLI 中托管应用与插件管理能力，包括基于 appPath 的环境处理、插件导入、授权插件同步，以及相关文档更新。 ([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
参考文档：[CLI 文档](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/api/cli), [快速开始](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/cn/quickstart)
- **[区块：甘特图]** 为甘特图区块新增默认定位到今天的配置项 ([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx

- **[多空间]** 为多空间插件新增 client v2 支持，包括空间切换和空间管理。 by @jiannx

### 🚀 优化

- **[工作流]** 移除工作流执行历史与业务事务的耦合。 ([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher

- **[UI 模板]** 将 UI 模板迁移至 client v2。 ([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust

- **[多关键词筛选]** 迁移多关键词筛选至 client v2。 ([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust

- **[工作流：子流程]** 移除子流程工作流指令中的执行历史事务耦合。 by @mytharcher

- **[工作流：审批]** 移除审批工作流指令中的执行历史事务耦合。 by @mytharcher

### 🐛 修复

- **[client]** 修复联动隐藏字段后仍保留旧值的问题 ([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe

- **[操作：导入记录]** 修复导入记录生成重复排序值的问题 ([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile

- **[前端流引擎]** 修复将引用模板区块转换成复制时报错的问题。 ([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust

- **[区块：地图]** 修复详情页地图字段在文本和地图显示模式切换时原始值被错误转换，导致显示异常的问题 ([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji

- **[工作流]** 修复多工作节点并发时工作流执行可能被重复调度的问题。 ([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher

- **[工作流：审批]** 修复审批表单详情中不显示自定义字段标题的问题 by @zhangzhonghe

