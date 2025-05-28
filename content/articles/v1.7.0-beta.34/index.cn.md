### 🎉 新特性

- **[undefined]** 新增gitpod的支持，可以一键启动开发环境，快速开始开发 ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612
- **[操作：导入记录 Pro]**

  - 导入配置支持多字段定唯一记录 by @aaaaaajie
  - 导入配置支持设置空白单元格覆盖和忽略模式 by @aaaaaajie
- **[数据表字段：代码]** 为代码编辑器字段增加高度设置项 by @mytharcher
- **[邮件管理]**

  - 邮件支持标记为待办和添加备注 by @jiannx
  - 支持标签和设置功能合并 by @jiannx

### 🚀 优化

- **[client]**

  - 优化日期范围筛选组件样式 ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh
  - 解决表单隐藏控件也捕获了tab键的问题，极大提高了表单操作效率 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 弹出二次确认对话框之前先验证字段必填项 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh
  - 调整日期字段筛选器的选项 ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh
- **[undefined]** CI 环境升级 Node 版本至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复表单标签隐藏冒号设置无效的问题 ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh
  - 区块拖拽调整宽度失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
  - 字段赋值组件多语言不生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 联动规则条件不包含任意一个判断逻辑错误 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh
  - 联动规则中嵌套的条件变量未正确回显 ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh
  - 区块高度设置未实时生效 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh
  - 修复错误弹窗里的复制按钮复制出来是[object Object]的问题 ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
  - 日期变量在日期范围限制中的解析错误 ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh
- **[database]** 修复在多对多关系中，UUID 或nanoid 自动生成功能无法正常工作 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie
- **[undefined]** 根据 commander 包的需求改用 Node 20 版本 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher
- **[数据表字段：Markdown(Vditor)]** 修复 markdown-vditor 组件缩放后宽度异常 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[API 文档]** 补全 req.headers 中的子应用信息 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos
- **[通知：站内信]** 修复了在应用内消息中“全部标为已读”操作可能影响其他用户数据的问题。 ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66
- **[数据源管理]** 解决无法拖拽排序的问题 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos
- **[操作：导出记录]** 修复导出嵌套关系时失败的问题。 ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie
- **[工作流：自定义操作事件]** 避免插件加载顺序导致的错误 by @mytharcher
- **[文件存储：S3 (Pro)]**

  - 修复重复的上传参数 by @mytharcher
  - 修复预览地址和上传参数 by @mytharcher
- **[区块：分步表单]** 修复类型错误 by @mytharcher
- **[工作流：审批]**

  - 修复查看我的申请详情中 id 取值问题 by @mytharcher
  - 修复语言 by @mytharcher
  - 修复提交审批前 appends 和提交数据的计算 by @mytharcher
- **[邮件管理]**

  - 移除action列 by @jiannx
  - 修复备注弹窗错误 by @jiannx
  - 修复 mailMessageNotes 和 mailMessageLabels 表接口权限 by @jiannx
