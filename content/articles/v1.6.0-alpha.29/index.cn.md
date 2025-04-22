### 🎉 新特性

- **[client]** 支持为按钮配置权限 ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh

- **[区块：模板]** 新增 `区块：模板` 插件，为区块提供基于继承机制的模板的功能。 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust

- **[工作流：自定义操作事件]** 触发工作流按钮支持权限控制 by @katherinehhh

### 🚀 优化

- **[client]**
  - 升级 react types 定义 ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust

  - 用户个人中心扩展改进 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh

- **[文件管理器]**
  - URL 字段长度增加为 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher

  - 后端添加生成preview地址代码 ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx

  - 文件上传时生成的文件名由随机改成文件名加随机后缀。 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos

  - 后端添加生成preview地址代码 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx

  - 调整存储引擎类型的 API 并增加插件的接口 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher

  - 调整存储引擎类型的 API 并增加插件的接口 ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher

- **[区块：操作面板]** 优化移动端样式 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

- **[工作流]** 在工作流画布的节点上隐藏节点 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

- **[文件存储：S3 (Pro)]**
  - 基于主仓库的变更调整存储引擎的 API by @mytharcher

  - 支持thumbnailRule选项配置 by @jiannx

- **[备份管理器]** 允许还原备份到缺少部分插件的应用 by @gchust

### 🐛 修复

- **[devtools]** 确保仅在 req.ip 不为 undefined 时，设置 X-Forwarded-For 头部。 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66

- **[client]**
  - 拖动菜单之后，位置不对 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe

  - 无评论表时点击创建评论区块报错 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh

  - 点击树区块节点时报错 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe

  - 点击左侧菜单后，子页面被异常关闭 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe

  - 当表达式的值为空时，不清空字段的值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe

  - 富文本字段组件无法删除清空所有内容 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh

  - 无法将页面移动到分组中 ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe

  - 跳过 CurrentUserProvider 中的认证错误。 ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66

  - 修复逐个上传文件后之前的文件消失的问题 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher

  - 修复邮件通道配置表单中输入标签的字符编码错误。 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66

  - 修复上传多个文件后文件丢失的问题 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher

  - 筛选表单字段的 Picker 与格式设置不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh

  - 在禁用状态下正确展示 `<Variable.TextArea />` 组件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher

- **[create-nocobase-app]** `create-nocobase-app` 后 `yarn dev` 网页端报错 ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust

- **[auth]** 当令牌是 API 密钥时跳过用户身份验证检查。 ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66

- **[cli]** 优化 nocobase upgrade 命令行 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

- **[文件管理器]**
  - 修复继承表的迁移问题 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher

  - 修复迁移脚本并补充测试用例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

  - 修复迁移脚本并补充测试用例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

  - 修复文件表 `path` 列的类型 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher

  - 升级 AWS SDK 版本以修复 MinIO 上传问题 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

- **[区块：模板]** 访问公开表单会重定向到登录界面 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust

- **[权限控制]** 配置数据表权限，使用多对多字段作为数据范围筛选条件，响应的数据记录不正确 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile

- **[区块：看板]** 弹窗中看板区块使用弹窗记录变量过滤数据不正确 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh

- **[数据表字段：自动编码]** 修复自动编号字段在只读模式下未禁用 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher

- **[工作流：测试工具包]** 修复新功能相关的 E2E 测试用例 ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher

- **[公开表单]** 公开表单里跳过 Auth 检查 ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos

- **[用户认证]** 移除 AdminProvider 不必要的 NavigateIfNotSignIn  组件。 ([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66

- **[工作流]**
  - 修复工作流画布的样式细节 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher

  - 支持修改密码时触发用户表的工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

- **[工作流：自定义操作事件]**
  - 修复编译错误 by @mytharcher

  - 修复 E2E 测试用例 by @mytharcher

  - 修复触发工作流初始化器 by @mytharcher

  - 修复编译错误 by @mytharcher

- **[工作流：操作前事件]** 修复响应消息节点的错误消息不显示的问题 by @mytharcher

- **[工作流：JavaScript 节点]** 支持导入 NocoBase 的模块 by @mytharcher

- **[邮件管理]** 公开邮件消息表和邮件接口导致的弹出表单数据丢失 by @jiannx

- **[文件存储：S3 (Pro)]**
  - 升级 AWS SDK 版本以修复 MinIO 上传问题 by @mytharcher

  - 设置强制路径式（访问）的默认值为 虚拟主机式 by @jiannx

- **[区块：分步表单]** 分步排序异常 by @jiannx

- **[区块：树]** 点击树区块节点时报错 by @zhangzhonghe

- **[备份管理器]** 在"从本地备份还原"操作弹窗中，点击删除图标不会清空文件列表 by @gchust

- **[工作流：审批]**
  - 修复由于版本号设置导致迁移脚本未执行 by @mytharcher

  - 修复新功能相关的 E2E 测试用例 by @mytharcher

