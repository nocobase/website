汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/cn/blog/v1.7.16)

*发布时间：2025-06-26*

#### 🚀 优化

- **[工作流]** 优化移动端样式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
- **[公开表单]** 优化公开表单中日期组件的性能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe

#### 🐛 修复

- **[工作流]** 修复待办中心加载记录的参数 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
- **[WEB 客户端]** 修复设置角色菜单权限后页面下区块不显示的问题 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[工作流：审批]**

  - 修复审批触发器中申请人变量名的问题 by @mytharcher
  - 修复移动端样式 by @mytharcher
  - 修复审批关联表被删除后的报错 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/cn/blog/v1.8.0-beta.11)

*发布时间：2025-06-27*

#### 🎉 新特性

- **[工作流：HTTP 请求节点]** 支持 `multipart/form-data` 类型的请求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

#### 🚀 优化

- **[工作流]**

  - 优化移动端样式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
  - 调整 `getCollectionFieldOptions` 方法的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher
- **[公开表单]** 优化公开表单中日期组件的性能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe
- **[工作流：操作前事件]** 调整变量 API by @mytharcher
- **[工作流：审批]** 调整变量 API by @mytharcher

#### 🐛 修复

- **[client]**

  - 修复日期字段在含时间格式下的范围约束错误 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
  - URL 查询参数变量为空时，数据范围的条件没有被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
- **[工作流]**

  - 修复待办中心加载记录的参数 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
  - 修复已执行数在大整型数时检查错误的问题 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - 修复统计数据被不是主版本的工作流级联删除的问题 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
- **[移动端]** 修复移动端弹窗的层级问题 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[WEB 客户端]** 修复设置角色菜单权限后页面下区块不显示的问题 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[日历]** 修复日历区块快速创建事项时，表单日期字段异常问题 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh
- **[操作：导入记录]** 修复批量导入用户名和密码后无法登录的问题 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[工作流：审批]**

  - 修复审批关联表被删除后的报错 by @mytharcher
  - 修复移动端样式 by @mytharcher
  - 修复审批触发器中申请人变量名的问题 by @mytharcher
  - 限制只有参与者可以查看审批详情 by @mytharcher
  - 修复变量历史遗留 API 导致的错误 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/cn/blog/v1.8.0-alpha.12)

*发布时间：2025-07-02*

#### 🚀 优化

- **[database]** 支持从环境变量配置连接池的选项 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[工作流]**

  - 排除 JSON 字段加载以改进执行计划列表加载性能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - 为节点测试运行增加日志 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[工作流：审批]** 将时间线中的时间调整为绝对时间 by @mytharcher

#### 🐛 修复

- **[utils]** 修复使用 Exact day 变量过滤 DateOnly 或 Datetime (without time zone) 字段时筛选错误的问题 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[cli]**

  - 下载插件异常时 undefined 报错 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
  - 安装插件时授权文案调整 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
- **[client]**

  - 对基于 'x-acl-action' 的表单配置项容错 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
  - 在连接视图中设置字段显示名称（displayName）未生效的问题 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - 工作流人工节点的 UI 配置，设置联动规则不能选择当前表单变量 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
- **[工作流]** 修复循环引用导致的报错 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[plugin-commercial]**

  - 开发模式不显示授权弹窗 by @jiannx
  - 临时关闭授权校验弹窗 by @jiannx
  - 调整授权校验逻辑，支持泛域名匹配 by @jiannx
- **[密码策略]** 支持永久锁定用户 by @2013xile
- **[工作流：子流程]** 修复集群模式下的问题 by @mytharcher
- **[工作流：审批]**

  - 补充表单的布局配置项 by @mytharcher
  - 从申请列表的筛选项中移除不可筛选的字段 by @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/cn/blog/v1.8.0-alpha.11)

*发布时间：2025-06-27*

#### 🎉 新特性

- **[授权设置]** 添加授权设置和下载商业插件前授权校验 ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx

#### 🚀 优化

- **[多应用管理器]** 多应用管理支持筛选操作 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[工作流]** 优化移动端样式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
- **[公开表单]** 优化公开表单中日期组件的性能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe
- **[plugin-commercial]** 加密日志发送，授权信息显示优化 by @jiannx

#### 🐛 修复

- **[client]** 修复 编辑表单中子表格的关系字段设置的默认值覆盖已有数据的问题 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
- **[工作流]** 修复待办中心加载记录的参数 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
- **[WEB 客户端]** 修复设置角色菜单权限后页面下区块不显示的问题 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[工作流：审批]** 修复审批触发器中申请人变量名的问题 by @mytharcher
