### 🐛 修复

- **[client]**
  - 修复 关系字段 record picker 中配置的筛选表单出现数据模板缺陷 ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh

  - 修复 Markdown string template 关系变量没有按需加载的问题（外部数据源） ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh

- **[用户数据同步]** 同步数据时跳过不支持的数据类型，而不是直接报错。 ([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt

- **[备份管理器]**
  - 修复备份文件较大时下载窗口弹出过慢的问题 by @gchust

  - 修复备份还原子应用时会引起所有应用重启的问题 by @gchust

