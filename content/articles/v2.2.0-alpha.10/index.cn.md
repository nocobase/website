### 🎉 新特性

* **[Web 客户端]** 按需返回应用语言资源命名空间，减少不必要的语言数据。 ([#10175](https://github.com/nocobase/nocobase/pull/10175)) by @2013xile
* **[AI 员工]** JS 区块支持注册前端 AI 工具。 ([#10121](https://github.com/nocobase/nocobase/pull/10121)) by @2013xile
* **[工作流：审批]**
  * v2 客户端的审批发起列表新增使用提示，并将可发起审批调整为卡片式选择。 by @mytharcher

### 🚀 优化

* **[client-v2]**
  * 优化 v2 二维码和条形码的扫码识别、相机生命周期安全性及响应式预览体验。 ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh
  * 在系统设置的可选语言中新增缅甸语（`<span>my-MM</span>`）。 ([#10131](https://github.com/nocobase/nocobase/pull/10131)) by @hongboji
* **[client]** 在旧版系统设置的语言选择器中新增缅甸语（`<span>my-MM</span>`）。 ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji
* **[工作流]**
  * 改进工作流 pending 任务处理，将启动、继续和重跑任务持久化到事件队列中。 ([#9846](https://github.com/nocobase/nocobase/pull/9846)) by @mytharcher
* **[文件管理器]** 新增独立的存储配置，可分别控制是否返回原始文件 URL，以及是否允许公开访问文件 URL。 ([#10160](https://github.com/nocobase/nocobase/pull/10160)) by @mytharcher
* **[AI 员工]** 修复 AI 员工模型设置无法保存、已禁用的 AI 员工仍可创建会话，以及移动端聊天框布局异常的问题。 ([#10120](https://github.com/nocobase/nocobase/pull/10120)) by @cgyrock
* **[工作流：子流程]** 基于重构后的工作流引擎调整等待队列处理策略。 by @mytharcher
* **[文件存储：S3 (Pro)]** 新增独立的 S3 Pro 配置，可分别控制原始 URL、文件 URL 公开访问和无签名 URL。 by @mytharcher
* **[工作流：审批]**
  * 在审批发起列表中新增使用提示，并将可发起审批调整为卡片式选择。 by @mytharcher
  * 优化审批时间线的状态角标、时间信息、用户头像、响应式布局及多轮提交之间的连接展示。 by @mytharcher
  * 审批通知渠道支持按标题远程搜索。 by @mytharcher

### 🐛 修复

* **[文档]** 修正文档中的 `<span>PLUGIN_PACKAGE_PREFIX</span>` 示例，确保预设插件使用 `<span>@nocobase/preset-</span>` 前缀。 ([#10179](https://github.com/nocobase/nocobase/pull/10179)) by @hongboji
* **[flow-engine]**
  * 修复 v2 表格快捷编辑未根据记录级和字段级更新权限控制显示的问题。 ([#10182](https://github.com/nocobase/nocobase/pull/10182)) by @katherinehhh
  * 修复使用简体中文时，二次确认设置中的默认文本未翻译的问题。 ([#10149](https://github.com/nocobase/nocobase/pull/10149)) by @mytharcher
  * 修复 v2 区块配置下拉菜单在点击当前触发按钮时意外关闭的问题。 ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh
  * 修复移动端弹窗超出屏幕并遮挡关闭按钮的问题。 ([#10118](https://github.com/nocobase/nocobase/pull/10118)) by @zhangzhonghe
  * 修复搜索时添加区块菜单突然消失的问题。 ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust
* **[ai]** 改进文档加载可靠性，为受密码保护的 PDF 提供更清晰的错误提示并增加超时处理。 ([#10172](https://github.com/nocobase/nocobase/pull/10172)) by @cgyrock
* **[client-v2]**
  * 优化 `<span>/v/</span>` 分支中不支持的页面和不存在页面的错误提示。 ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe
  * 修复 v2 日期字段范围限制中 RunJS 值不生效的问题。 ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh
  * 修复 v2 表格操作被联动禁用后，操作标题在联动刷新或刷新页面后被旧标题覆盖的问题。 ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh
  * 修复弹窗子表格表单使用父级数据范围时，关系字段的选中值被清空并误触发必填校验的问题。 ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh
  * 修复 v2 客户端的数据选择弹窗在新增记录后列表不刷新的问题。 ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh
  * 修复 JS 区块以卡片形式显示时，全高和指定高度设置不生效的问题。 ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust
  * 修复可能导致审批页面无法加载的错误。 ([#10116](https://github.com/nocobase/nocobase/pull/10116)) by @zhangzhonghe
  * 修复页面启用标签页后立即改名可能导致路由状态不一致的问题。 ([#10117](https://github.com/nocobase/nocobase/pull/10117)) by @zhangzhonghe
  * 修复日期筛选默认值变为单个日期的问题。 ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe
  * 修复设备类型规则导致移动端菜单被错误隐藏的问题。 ([#10123](https://github.com/nocobase/nocobase/pull/10123)) by @zhangzhonghe
  * 移除 Markdown 二级标题中多余的边框和阴影样式。 ([#10107](https://github.com/nocobase/nocobase/pull/10107)) by @katherinehhh
* **[utils]** 确保服务端对外请求的重定向目标同样遵循 `<span>SERVER_REQUEST_WHITELIST</span>` 白名单。 ([#10109](https://github.com/nocobase/nocobase/pull/10109)) by @mytharcher
  参考文档：[环境变量](https://docs.nocobase.com/cn/get-started/installation/env#server_request_whitelist)
* **[resourcer]** 修复操作前事件与审批保存前模式同时使用时，操作前事件可能未触发的问题。 ([#10119](https://github.com/nocobase/nocobase/pull/10119)) by @mytharcher
* **[database]** 修复读取数据库视图元数据时存在的 SQL 注入风险。 ([#10115](https://github.com/nocobase/nocobase/pull/10115)) by @2013xile
* **[server]** 防止上传的 XML 等主动内容文件在应用同源环境中执行脚本。 ([#10104](https://github.com/nocobase/nocobase/pull/10104)) by @mytharcher
* **[备份管理器]**
  * 提升备份插件前端测试的稳定性和准确性。 ([#10184](https://github.com/nocobase/nocobase/pull/10184)) by @cgyrock
  * 修复 v2 客户端中备份管理器还原请求失败时没有可见错误提示的问题。 ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh
* **[AI 员工]**
  * 修复 AI 员工工作流节点中 Operator 变量选择器的二级菜单无法展开的问题，并移除必填字段中的 `<span>Null</span>` 选项。 ([#10167](https://github.com/nocobase/nocobase/pull/10167)) by @cgyrock
  * 修复 AI 表单上下文未使用表单项自定义标签的问题。 ([#10168](https://github.com/nocobase/nocobase/pull/10168)) by @cgyrock
  * 修复前端工具在对话中请求确认而未使用运行时审批的问题。 ([#10166](https://github.com/nocobase/nocobase/pull/10166)) by @2013xile
  * 修复从已有会话启动新会话时，AI 员工快捷方式丢失区块上下文的问题。 ([#10169](https://github.com/nocobase/nocobase/pull/10169)) by @cgyrock
  * 修复 Nathan 将格式错误或未产生变更的代码补丁误报为应用成功的问题。 ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile
* **[通知：站内信]** 修复站内信消息模板表单显示工作流画布变量，而非页面实际提供变量的问题。 ([#10180](https://github.com/nocobase/nocobase/pull/10180)) by @Molunerfinn
* **[用户认证]**
  * 修复使用自定义域名的子应用在 SSO 登录后跳转错误的问题。 ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile
  * 修复启用 Redis 缓存时，应用关闭过程中偶发的数据库连接错误。 ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher
* **[数据表字段：自动编码]** 修复 v2 自动编码规则选项无法保存输入值，以及填写固定文本后仍错误提示必填的问题。 ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh
* **[区块：看板]** 修复日历和看板区块使用复制的弹窗模板时，模板不生效或被错误清空的问题。 ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx
* **[变量和密钥]** 修复 v2 变量和密钥批量导入的校验提示问题，以及 Type 筛选失败的问题。 ([#10154](https://github.com/nocobase/nocobase/pull/10154)) by @katherinehhh
* **[工作流]** 完善永久文件 URL、附件缩略图、预览下载和本地存储安全响应头的回归测试覆盖。 ([#10148](https://github.com/nocobase/nocobase/pull/10148)) by @mytharcher
* **[日历]** 修复 v2 日历事项过多时浮层超出页面的问题，并增加滚动条。 ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh
* **[应用单点登录]** 修复子应用服务端无法访问公共 Issuer 时，应用单点登录失败的问题。 by @2013xile
* **[AI：知识库]** 改进 AI 知识库文档处理，提供更清晰的 PDF 错误提示、上传大小校验、超时保护和正确的分段列表分页。 by @cgyrock
* **[多空间]** 修复切换账号时，认证恢复请求携带旧空间请求头导致登录失败的问题。 by @jiannx
* **[迁移管理]** 改进 v2 迁移错误提示，禁止迁移规则重名，并修复环境检查弹窗溢出问题。 by @katherinehhh
* **[认证：OIDC]** 修复通过子应用自定义域名进行 OIDC 登录后跳转错误的问题。 by @2013xile
* **[工作流：审批]**
  * 修复审批消息模板中提供的部分系统变量渲染为空的问题。 by @Molunerfinn
  * 防止受限审批人从原始申请内容中查看未授权字段。 by @zhangzhonghe
  * 修复未启用退回操作时，审批人仍可退回申请的问题。 by @zhangzhonghe
  * 修复关闭 UI Editor 时审批配置缺少字段模板的问题。 by @zhangzhonghe
  * UI Editor 关闭时隐藏审批界面的配置入口。 by @zhangzhonghe
  * 修复直接打开审批待办详情时偶发报错的问题。 by @zhangzhonghe
  * 修复提交审批时的提示信息覆盖操作前事件消息的问题。 by @mytharcher
* **[数据表字段：手写签名]** 修复 client-v2 手写签名字段中文件数据表选择器的多语言显示和选项筛选问题。 by @katherinehhh
* **[钉钉]** 修复通过 v2 渠道表单保存钉钉通知渠道时，所选认证器丢失的问题。 by @jiannx
