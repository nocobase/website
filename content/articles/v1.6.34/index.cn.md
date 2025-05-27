### 🎉 新特性

- **[操作：导入记录 Pro]**
  - 导入配置支持多字段定唯一记录 by @aaaaaajie

  - 导入配置支持设置空白单元格覆盖和忽略模式 by @aaaaaajie

### 🚀 优化

- **[undefined]** CI 环境升级 Node 版本至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

### 🐛 修复

- **[client]**
  - 联动规则条件不包含任意一个判断逻辑错误 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh

  - 区块高度设置未实时生效 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh

- **[undefined]** 根据 commander 包的需求改用 Node 20 版本 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher

- **[database]** 修复在多对多关系中，UUID 或nanoid 自动生成功能无法正常工作 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie

- **[操作：导出记录]** 修复导出嵌套关系时失败的问题。 ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie

- **[数据源管理]** 解决无法拖拽排序的问题 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos

- **[API 文档]** 补全 req.headers 中的子应用信息 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos

- **[通知：站内信]** 修复了在应用内消息中“全部标为已读”操作可能影响其他用户数据的问题。 ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66

- **[工作流：自定义操作事件]** 避免插件加载顺序导致的错误 by @mytharcher

- **[文件存储：S3 (Pro)]**
  - 修复预览地址和上传参数 by @mytharcher

  - 修复重复的上传参数 by @mytharcher

- **[区块：分步表单]** 修复类型错误 by @mytharcher

- **[工作流：审批]**
  - 修复查看我的申请详情中 id 取值问题 by @mytharcher

  - 修复提交审批前 appends 和提交数据的计算 by @mytharcher

