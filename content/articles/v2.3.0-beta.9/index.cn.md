### 🚀 优化

- **[utils]** 新增环境变量，支持禁止服务端直接请求或重定向到纯 IP 地址 ([#10490](https://github.com/nocobase/nocobase/pull/10490)) by @2013xile

- **[client-v2]** 提升 V2 表单在 iOS 上的二维码扫码可靠性。 ([#10456](https://github.com/nocobase/nocobase/pull/10456)) by @katherinehhh

- **[企业微信]** 优化企业微信插件的类型安全，并统一通知接收人选择控件。 by @chenzhizdt

### 🐛 修复

- **[client-v2]**
  - 在工作流新增、更新节点的字段赋值中隐藏服务端不支持的内置日期变量。 ([#10442](https://github.com/nocobase/nocobase/pull/10442)) by @mytharcher

  - 修复进入配置页面时整页刷新的问题 ([#10474](https://github.com/nocobase/nocobase/pull/10474)) by @zhangzhonghe

  - 修复 v2 更新数据动作中已配置字段被删除后字段设置无法打开的问题。 ([#10483](https://github.com/nocobase/nocobase/pull/10483)) by @katherinehhh

  - V2 历史字段赋值配置中的已删除字段展示统一的删除提示。 ([#10484](https://github.com/nocobase/nocobase/pull/10484)) by @katherinehhh

  - 修复筛选表单自定义单选框和复选框的选项值无法连续输入的问题 ([#10480](https://github.com/nocobase/nocobase/pull/10480)) by @zhangzhonghe

  - 支持在 v2 表单中将对多关联展示字段显示为只读子表格。 ([#10478](https://github.com/nocobase/nocobase/pull/10478)) by @katherinehhh

  - 修复 V2 表单父级关系使用下拉选择时，嵌套关系字段显示为空的问题。 ([#10477](https://github.com/nocobase/nocobase/pull/10477)) by @katherinehhh

  - 修复 v2 字段配置中反向关系类型可被修改的问题。 ([#10476](https://github.com/nocobase/nocobase/pull/10476)) by @katherinehhh

  - 修复移动端筛选表单点击折叠无效果的问题 ([#10479](https://github.com/nocobase/nocobase/pull/10479)) by @zhangzhonghe

- **[server]** 修复子应用部署环境不可用时错误显示准备中的问题 ([#10485](https://github.com/nocobase/nocobase/pull/10485)) by @2013xile

- **[cli]** 历史本地上传文件地址默认仅登录用户可访问，并提供显式开启公开访问的兼容开关。 ([#10471](https://github.com/nocobase/nocobase/pull/10471)) by @mytharcher

- **[工作流：延时节点]** 修复延时节点的时长变量校验，并在变量解析结果无效时直接报错，避免异常等待。 ([#10469](https://github.com/nocobase/nocobase/pull/10469)) by @mytharcher

- **[数据源管理]**
  - 修复 v2 关系字段编辑时反向字段选项未保持勾选的问题。 ([#10482](https://github.com/nocobase/nocobase/pull/10482)) by @katherinehhh

  - 为 v2 权限数据范围新增当前用户和当前角色变量选择 ([#10472](https://github.com/nocobase/nocobase/pull/10472)) by @jiannx

- **[通知：站内信]** 允许在站内信通知的标题和详情链接中使用所有类型的工作流变量。 ([#10470](https://github.com/nocobase/nocobase/pull/10470)) by @mytharcher

- **[权限控制]** 修复角色权限中勾选深层菜单时未自动选中全部上级菜单的问题 ([#10473](https://github.com/nocobase/nocobase/pull/10473)) by @zhangzhonghe

- **[区块：看板]** 修复了看板中新创建的记录无法立即显示的问题。 ([#10463](https://github.com/nocobase/nocobase/pull/10463)) by @gaurangagar

- **[文件管理器]** 防止文件重定向复用已过期的存储签名 URL。 ([#10475](https://github.com/nocobase/nocobase/pull/10475)) by @mytharcher

- **[前端流引擎]** 修复非管理员用户在表单联动规则、引用模板及脚本中的变量解析问题。 ([#10467](https://github.com/nocobase/nocobase/pull/10467)) by @gchust

- **[工作流：审批]** 修复审批草稿编辑保存后申请卡片仍显示旧内容的问题 by @zhangzhonghe

- **[应用监管器]** 修复滚动更新或切换部署环境后子应用无法访问的问题 by @2013xile

