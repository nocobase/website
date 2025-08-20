### 🎉 新特性

- **[client]**

  - 支持外部数据源中的 SQL Server BIT 字段 ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
  - 支持自定义聚合变量 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
    参考文档：[自定义变量](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[build]** 支持商业授权 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[数据源管理]** ✨ 支持外部数据源按需加载数据表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[授权设置]** 添加授权设置和下载商业插件前授权校验 ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx
- **[用户认证]** 支持“忘记密码”的功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  参考文档：[忘记密码](https://docs-cn.nocobase.com/handbook/auth/user#%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81)
- **[操作：批量更新]** 支持在更新区块数据后刷新其它区块的数据 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe
- **[数据源：外部 SQL Server]**

  - 支持外部数据源中的 SQL Server BIT 字段 by @aaaaaajie
  - 支持外部数据源按需加载数据表 by @aaaaaajie
- **[自定义变量]** 支持自定义聚合变量 by @zhangzhonghe
  参考文档：[自定义变量](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[邮件管理]**

  - 支持邮件删除 by @jiannx
  - 支持邮件同步间隔设置 by @jiannx
  - 支持批量发送 by @jiannx

### 🚀 优化

- **[client]**

  - 支持在输入框中扫码填充数据 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - 根据设备类型而非页面宽度来判断是否显示移动端组件 ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe
  - 支持Markdown 中使用 {{t 'xxx'}} 进行本地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - 根据设备类型而非页面宽度来判断是否显示移动端布局 ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe
- **[异步任务管理器]** 优化导出创建任务响应慢 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[移动端]** 适配通知弹窗移动端的样式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[邮件管理]**

  - 支持同主题内邮件单独回复和转发 by @jiannx
  - 重构基于schema实现邮件发送，支持ai by @jiannx
  - 支持弹窗内的发件默认值，支持收件人模糊搜索，问题修复 by @jiannx
  - 批量发送功能完善 by @jiannx
  - 功能完善及问题修复 by @jiannx

### 🐛 修复

- **[cli]**

  - 安装插件时授权文案调整 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
  - 下载插件异常时 undefined 报错 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
- **[client]**

  - 清空徽标值后，界面没有更新 ([#7055](https://github.com/nocobase/nocobase/pull/7055)) by @zhangzhonghe
  - 点击筛选按钮报错 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
  - 修复当前用户数据为空的问题 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - 通过弹窗链接打开的页面，内容显示的不对 ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
  - 将其他属性传递给组件 Variable.Input。 ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - 存在关联字段的区块另存为模板报错 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
- **[database]** string 类型字段的 eq 操作符兼容 number 类型 ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[build]** 修复plugin-workflow-javascript前端运行，process undefine 错误 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[数据可视化]** 表格分页器问题 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[数据源管理]** 修复了按需加载数据源与表前缀配置冲突导致的 “ConnectionManager.getConnection was called after the connection manager was closed” 错误。 ([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
- **[plugin-service-platform]** 调整授权文案 by @jiannx
- **[自定义变量]** 清空徽标值后，界面没有更新 by @zhangzhonghe
- **[邮件管理]**

  - 附件不显示 by @jiannx
  - 邮件删除报错 by @jiannx
  - 邮件删除失败 by @jiannx
  - 设置弹窗不显示 by @jiannx
  - 回复抽屉不显示 by @jiannx
  - 收件人模糊搜素支持关联字段 by @jiannx
  - mailmessagelabelsMailmessages 表中添加id字段 by @jiannx
  - 邮件模糊搜索后做唯一过滤 by @jiannx
  - mailmessagelabels_mailmessages 存在重复主键 by @jiannx
