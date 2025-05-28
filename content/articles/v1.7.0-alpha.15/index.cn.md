### 🎉 新特性

- **[client]** 支持自定义聚合变量 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
参考文档：[自定义变量](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** 日期字段筛选支持自定义偏移 ([#6854](https://github.com/nocobase/nocobase/pull/6854)) by @katherinehhh

- **[数据表字段：代码]** 为代码编辑器字段增加高度设置项 by @mytharcher

- **[操作：导入记录 Pro]**
  - 导入配置支持多字段定唯一记录 by @aaaaaajie

  - 导入配置支持设置空白单元格覆盖和忽略模式 by @aaaaaajie

- **[自定义变量]** 支持自定义聚合变量 by @zhangzhonghe
参考文档：[自定义变量](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[邮件管理]**
  - 邮件支持标记为待办和添加备注 by @jiannx

  - 支持标签和设置功能合并 by @jiannx

### 🚀 优化

- **[client]** 调整日期字段筛选器的选项 ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh

- **[undefined]** CI 环境升级 Node 版本至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

- **[日历]** 日历区块支持配置刷新按钮 ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh

- **[操作：导入记录]**
  - 导入 xlsx 性能优化 ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie

  - 导入 xlsx 性能优化 ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie

- **[操作：导出记录]** 导出xlsx性能优化 ([#6729](https://github.com/nocobase/nocobase/pull/6729)) by @aaaaaajie

- **[区块：iframe]** 日期变量赋值逻辑改进 ([#6828](https://github.com/nocobase/nocobase/pull/6828)) by @katherinehhh

- **[工作流：自定义操作事件]** 基于中文语言的字典表修复英文翻译 by @mytharcher

- **[操作：导出记录 Pro]** 导出性能优化 by @aaaaaajie

- **[工作流：审批]** 支持在待办中心处理所有待办任务 by @mytharcher

- **[邮件管理]** 重构基于schema实现邮件发送，支持ai by @jiannx

### 🐛 修复

- **[database]** 修复在多对多关系中，UUID 或nanoid 自动生成功能无法正常工作 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie

- **[client]**
  - 联动规则条件不包含任意一个判断逻辑错误 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh

  - 区块高度设置未实时生效 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh

  - 联动规则中嵌套的条件变量未正确回显 ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh

  - 日期变量在日期范围限制中的解析错误 ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh

  - 联动规则中对多关系字段的为空判断不正确 ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh

  - 添加关联字段时因 style 字段格式导致的渲染报错 ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh

  - 子表格中联动规则缺少当前对象变量 ([#6907](https://github.com/nocobase/nocobase/pull/6907)) by @katherinehhh

- **[undefined]** 根据 commander 包的需求改用 Node 20 版本 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher

- **[数据源管理]** 解决无法拖拽排序的问题 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos

- **[API 文档]** 补全 req.headers 中的子应用信息 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos

- **[通知：站内信]** 修复了在应用内消息中“全部标为已读”操作可能影响其他用户数据的问题。 ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66

- **[操作：导出记录]** 修复导出嵌套关系时失败的问题。 ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie

- **[数据表字段：Markdown(Vditor)]** Markdown（Vditor）字段未适配主题 ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh

- **[数据表：树]** 更新路径表的时候避免由于匹配到相似前缀，导致错误更新 ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile

- **[工作流：邮件发送节点]** 处理未定义的 'to' 字段并优化邮件收件人处理。 ([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66

- **[验证]** 修复错误的英文命名 “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) by @2013xile

- **[文件管理器]**
  - 修复前端文件表注入和上传文件参数 ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher

  - 修复文件预览 URL 的生成匹配规则 ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher

- **[工作流：自定义操作事件]**
  - 避免插件加载顺序导致的错误 by @mytharcher

  - 修复错误处理函数无法通过类匹配的问题 by @mytharcher

  - 修复自定义操作按钮点击几次后表现不正常 by @mytharcher

- **[多关键词筛选]** 去除每个关键词两边的空白符 by @zhangzhonghe

- **[双因素身份认证 (2FA)]** 开启 2FA 时要求配置验证器 by @2013xile

- **[文件存储：S3 (Pro)]**
  - 修复重复的上传参数 by @mytharcher

  - 修复预览地址和上传参数 by @mytharcher

- **[模板打印]** 增强 useFieldsTree 中的 hasChildren 逻辑，以包含对 uiSchema 枚举的检查。 by @sheldon66

- **[区块：分步表单]** 修复类型错误 by @mytharcher

- **[工作流：审批]**
  - 修复语言 by @mytharcher

  - 修复提交审批前 appends 和提交数据的计算 by @mytharcher

  - 修复关系追加参数计算 by @mytharcher

  - 修复查看我的申请详情中 id 取值问题 by @mytharcher

- **[邮件管理]**
  - 修复 mailMessageNotes 和 mailMessageLabels 表接口权限 by @jiannx

  - 修复备注弹窗错误 by @jiannx

  - 移除action列 by @jiannx

