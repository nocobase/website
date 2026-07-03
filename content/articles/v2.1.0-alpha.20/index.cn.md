### 🎉 新特性

- **[工作流]** 为节点任务增加日志字段，以支持某些节点调试时展示日志内容 ([#9165](https://github.com/nocobase/nocobase/pull/9165)) by @mytharcher

### 🚀 优化

- **[undefined]** 新增阿拉伯语指南及导航翻译 ([#9141](https://github.com/nocobase/nocobase/pull/9141)) by @saraTabbane

- **[cli]** 优化生成式 API CLI 的帮助输出和 ACL 命令分组 ([#9166](https://github.com/nocobase/nocobase/pull/9166)) by @2013xile

### 🐛 修复

- **[client]** 修复字段赋值修改子表格里的值后出现数据污染的问题。 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust

- **[data-source-manager]** 修复数据库同步后 sequence 字段可能被改成 string 的问题 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile

- **[cli]** 修复 Windows 上 CLI OAuth 登录可能因授权链接过长而失败的问题 ([#9159](https://github.com/nocobase/nocobase/pull/9159)) by @2013xile

- **[部门]** 修复保存用户部门后主部门未同步或同步错误的问题 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

- **[数据源：主数据库]** 修复连接数据库视图时集合名称与数据库视图名称不一致导致的字段同步失败问题 ([#9155](https://github.com/nocobase/nocobase/pull/9155)) by @2013xile

- **[文件管理器]** 当预览 URL 缺失时返回 null ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

