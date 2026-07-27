汇总一周产品更新日志，最新发布可前往[我们的博客](https://www.nocobase.com/cn/blog/timeline)查看。

**NocoBase 目前更新包括三个分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main`：截至目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户，用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### v2.1.30

*发布日期: 2026-07-24*

### 🚀 优化

- **[client-v2]** 优化 v2 二维码和条形码扫码识别、相机生命周期安全及响应式预览体验。 ([#10145](https://github.com/nocobase/nocobase/pull/10145)) by @katherinehhh
- **[client]** 在旧版系统设置的语言选择器中增加缅甸语（`my-MM`）。 ([#10153](https://github.com/nocobase/nocobase/pull/10153)) by @hongboji
- **[工作流：审批]**

  - 审批发起列表新增使用提示，并将可发起审批调整为卡片式选择 by @mytharcher
  - 优化审批时间线的状态脚标、时间信息、用户头像、响应式布局和多轮提交连接展示 by @mytharcher

### 🐛 修复

- **[client-v2]**

  - 修复 v2 日期字段限定范围中 RunJS 值不生效的问题。 ([#10157](https://github.com/nocobase/nocobase/pull/10157)) by @katherinehhh
  - 优化 `/v/` 分支中旧版页面和不存在页面的错误提示 ([#10159](https://github.com/nocobase/nocobase/pull/10159)) by @zhangzhonghe
  - 修复 v2 表格操作被联动禁用后，编辑操作标题在联动刷新或刷新页面后被旧标题覆盖。 ([#10140](https://github.com/nocobase/nocobase/pull/10140)) by @katherinehhh
  - 修复弹窗子表格表单中，关系字段使用父级数据范围时选中值被清空并误触发必填校验的问题。 ([#10146](https://github.com/nocobase/nocobase/pull/10146)) by @katherinehhh
  - 修复客户端 v2 数据选择弹窗新增记录后列表不刷新的问题。 ([#10142](https://github.com/nocobase/nocobase/pull/10142)) by @katherinehhh
- **[flow-engine]** 修复 v2 区块配置下拉菜单在点击当前触发按钮时意外关闭的问题。 ([#10143](https://github.com/nocobase/nocobase/pull/10143)) by @katherinehhh
- **[用户认证]**

  - 修复启用 Redis 缓存时应用关闭过程中偶发的数据库连接错误 ([#10151](https://github.com/nocobase/nocobase/pull/10151)) by @mytharcher
  - 修复使用自定义域名的子应用 SSO 登录后跳转错误的问题 ([#10170](https://github.com/nocobase/nocobase/pull/10170)) by @2013xile
- **[AI 员工]** 修复 Nathan 将格式错误或未产生变更的代码补丁误报为应用成功的问题 ([#10174](https://github.com/nocobase/nocobase/pull/10174)) by @2013xile
- **[数据表字段：自动编码]** 修复 v2 自动编码规则选项无法保存输入值，以及固定文本填写后仍错误提示必填的问题。 ([#10156](https://github.com/nocobase/nocobase/pull/10156)) by @katherinehhh
- **[备份管理器]** 修复 v2 备份管理器还原请求失败时没有可见错误提示的问题。 ([#10158](https://github.com/nocobase/nocobase/pull/10158)) by @katherinehhh
- **[区块：看板]** 修复日历和看板区块使用复制的弹窗模板时模板不生效或被错误清空的问题 ([#9856](https://github.com/nocobase/nocobase/pull/9856)) by @jiannx
- **[应用单点登录]** 修复子应用服务端无法访问公共 Issuer 时应用单点登录失败的问题 by @2013xile
- **[认证：OIDC]** 修复通过子应用自定义域名进行 OIDC 登录后跳转错误的问题 by @2013xile
- **[工作流：审批]** UI Editor 关闭时隐藏审批界面的配置入口 by @zhangzhonghe

### v2.1.29

*发布日期: 2026-07-21*

### 🚀 优化

- **[工作流：审批]** 审批通知渠道现支持按标题远程搜索 by @mytharcher

### 🐛 修复

- **[flow-engine]** 修复添加区块菜单搜索时会突然消失的问题。 ([#10097](https://github.com/nocobase/nocobase/pull/10097)) by @gchust
- **[client-v2]**

  - 修复 JS Block 显示卡片时全高和指定高度设置不生效的问题 ([#10126](https://github.com/nocobase/nocobase/pull/10126)) by @gchust
  - 修复日期筛选默认值变成单个日期的问题 ([#9854](https://github.com/nocobase/nocobase/pull/9854)) by @zhangzhonghe
- **[日历]** 修复 v2 日历事项过多时浮层超出页面的问题，增加滚动条。 ([#10138](https://github.com/nocobase/nocobase/pull/10138)) by @katherinehhh
- **[多空间]** 修复切换账号时认证恢复请求携带旧空间请求头导致登录失败的问题 by @jiannx
