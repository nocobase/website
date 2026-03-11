### 🚀 优化

- **[迁移管理]** 优化迁移检查、迁移 SQL 下载、迁移日志格式及迁移执行过程的可视化体验 by @cgyrock

### 🐛 修复

- **[client]**
  - 修复筛选表单 Field values 中自定义字段的值输入框类型不正确的问题 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe

  - 修复 v2 筛选表单字段排序后折叠按钮失效的问题 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe

  - 修复引用模板（v1）管理页面缺少筛选和刷新按钮的问题。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust

  - 修复因权限判断导致子表单子表格不显示数据的问题 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos

- **[权限控制]** 使用  collection.filterTargetKey 代替  Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos

- **[UI 模板]**
  - 修复引用操作面板区块模板报错的问题。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust

  - 修复详情区块保存为模板后关系数据无法正确加载的问题。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust

- **[工作流：审批]**
  - 修复审批人未按照配置顺序生成记录的问题 by @mytharcher

  - 修复审批办理详情中部分标签未翻译的问题 by @zhangzhonghe

- **[迁移管理]**
  - 修复编译错误 by @mytharcher

  - 修复用户输入的迁移描述丢失问题，并使用当前时间作为默认迁移描述 by @cgyrock

  - 修复迁移异常后打印异常对象所包含sql过大容易卡死进程的问题 by @cgyrock

  - 调整临时文件的存放位置以支持集群模式 by @mytharcher

