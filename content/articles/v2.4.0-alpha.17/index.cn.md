### 🚀 优化

- **[部门]** 部门和部门角色关联表新增仅结构迁移选项，可保留目标环境已有记录。 ([#11343](https://github.com/nocobase/nocobase/pull/11343)) by @zhouyanliang

### 🐛 修复

- **[client-v2]**
  - 修复 v2 关联下拉选择和级联选择使用字符串结果的公式字段作为标签时，部分文本搜索失效的问题。 ([#11370](https://github.com/nocobase/nocobase/pull/11370)) by @hongboji

  - 修复旧版和 v2 客户端在窄屏下打开个人资料或修改密码后，顶部悬浮工具栏遮挡表单的问题。 ([#11347](https://github.com/nocobase/nocobase/pull/11347)) by @zhouyanliang

- **[通知管理]** 修复工作流通知节点无法搜索或选择第一页之后的通知渠道的问题。 ([#11317](https://github.com/nocobase/nocobase/pull/11317)) by @zhouyanliang

- **[数据源管理]** 修复外部数据源数据表列表在同一字段设置多个筛选条件时查不出数据的问题。 ([#11306](https://github.com/nocobase/nocobase/pull/11306)) by @zhouyanliang

- **[文件管理器]**
  - 修复 v2 文件管理器因缺少 JPEG2000 图片解码资源导致 PDF 预览空白的问题。 ([#11308](https://github.com/nocobase/nocobase/pull/11308)) by @mytharcher

  - 修复切换附件或关闭预览后打开另一文件时，音频预览仍播放之前文件的问题 ([#11328](https://github.com/nocobase/nocobase/pull/11328)) by @zhouyanliang

- **[认证：API 密钥]** 修复系统使用「仅角色并集」时 API 密钥获得创建者其他角色权限的问题，API 密钥现在始终遵循绑定角色的权限和数据范围。 ([#11316](https://github.com/nocobase/nocobase/pull/11316)) by @zhouyanliang

- **[工作流]** 修复工作流 v2 新增数据和更新数据节点无法配置密码字段赋值的问题。 ([#11318](https://github.com/nocobase/nocobase/pull/11318)) by @zhouyanliang

- **[AI 员工]** 修复 AI 员工读取 JavaScript 区块内容时提示工具执行被中断的问题 ([#11305](https://github.com/nocobase/nocobase/pull/11305)) by @zhouyanliang

- **[备份管理器]** 修复大文件备份下载缺少反馈的问题，使用短期凭证通过浏览器直接下载。 ([#11324](https://github.com/nocobase/nocobase/pull/11324)) by @gchust

