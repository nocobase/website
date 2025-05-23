### 🚀 优化

- **[undefined]** 构建 Full 版本 Docker 镜像 ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos

- **[client]** 优化页面越用越卡的问题 ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe

- **[日历]** 日历区块支持配置刷新按钮 ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh

- **[工作流：自定义操作事件]** 基于中文语言的字典表修复英文翻译 by @mytharcher

- **[工作流：审批]** 支持在待办中心处理所有待办任务 by @mytharcher

### 🐛 修复

- **[client]**
  - 添加关联字段时因 style 字段格式导致的渲染报错 ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh

  - 联动规则中对多关系字段的为空判断不正确 ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh

- **[数据表字段：Markdown(Vditor)]** Markdown（Vditor）字段未适配主题 ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh

- **[数据表：树]** 更新路径表的时候避免由于匹配到相似前缀，导致错误更新 ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile

- **[文件管理器]**
  - 修复文件预览 URL 的生成匹配规则 ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher

  - 修复前端文件表注入和上传文件参数 ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher

  - 修复非图片文件的预览地址 ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher

- **[工作流：邮件发送节点]** 处理未定义的 'to' 字段并优化邮件收件人处理。 ([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66

- **[工作流：自定义操作事件]**
  - 修复自定义操作按钮点击几次后表现不正常 by @mytharcher

  - 修复错误处理函数无法通过类匹配的问题 by @mytharcher

- **[工作流：审批]** 修复关系追加参数计算 by @mytharcher

