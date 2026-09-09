### 🚀 优化

- **[企业微信]** 优化企业微信插件的类型安全，并统一通知接收人选择控件。 by @chenzhizdt

### 🐛 修复

- **[client-v2]**
  - 支持在 v2 表单中将对多关联展示字段显示为只读子表格。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh

  - 修复 v2 字段配置中反向关系类型可被修改的问题。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh

  - 修复 V2 表单父级关系使用下拉选择时，嵌套关系字段显示为空的问题。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh

- **[cli]** 历史本地上传文件地址默认仅登录用户可访问，并提供显式开启公开访问的兼容开关。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher

- **[工作流：JavaScript 节点]** 修复 JavaScript 工作流节点超时时可能错误中止工作流、未遵循“出现异常时继续执行”配置的问题。 ([#10461](https://github.com/nocobase/nocobase/pull/10461)) by @mytharcher

- **[文件管理器]** 防止文件重定向复用已过期的存储签名 URL。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher

- **[通知：站内信]** 允许在站内信通知的标题和详情链接中使用所有类型的工作流变量。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher

- **[数据源管理]** 为 v2 权限数据范围新增当前用户和当前角色变量选择 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx

- **[区块：看板]** 修复了看板中新创建的记录无法立即显示的问题。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar

- **[钉钉]** 统一钉钉通知的接收人选择控件。 by @chenzhizdt

