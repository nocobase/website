### 🚀 优化

- **[企业微信]** 支持配置企微同步邮箱类型，统一全量同步与增量回调的邮箱字段映射。 by @chenzhizdt

### 🐛 修复

- **[server]** 防止通过自定义请求 URL泄露敏感环境变量 ([#10503](https://github.com/nocobase/nocobase/pull/10503)) by @2013xile

- **[数据表字段：自动编码]** 修复自动编码字段配置多个字符集的随机字符模式时校验失败的问题。 ([#10504](https://github.com/nocobase/nocobase/pull/10504)) by @mytharcher

- **[文件管理器]** 将 v2 附件和附件（URL）卡片的删除按钮移至右上角，减少预览时误删附件。 ([#10508](https://github.com/nocobase/nocobase/pull/10508)) by @katherinehhh

- **[AI 员工]** 修复当数据表的角色权限配置了基于当前用户的数据范围时，AI 员工数据查询工具查不到任何记录的问题 ([#10501](https://github.com/nocobase/nocobase/pull/10501)) by @cgyrock

- **[工作流：审批]** 顺序会签中排队等待的审批人不再显示审批处理按钮，并展示等待提示。 by @mytharcher

