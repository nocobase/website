### 🐛 修复

- **[client]** 修复字段赋值修改子表格里的值后出现数据污染的问题。 ([#9163](https://github.com/nocobase/nocobase/pull/9163)) by @gchust

- **[data-source-manager]** 修复数据库同步后 sequence 字段可能被改成 string 的问题 ([#9143](https://github.com/nocobase/nocobase/pull/9143)) by @2013xile

- **[文件管理器]** 当预览 URL 缺失时返回 null ([#9104](https://github.com/nocobase/nocobase/pull/9104)) by @gaston98765

- **[工作流：JavaScript 节点]** 修复 `node:vm` 模式下执行脚本的安全问题 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

- **[部门]**
  - 修复部门管理中的部门列表未按 `sort` 字段顺序显示的问题 ([#9150](https://github.com/nocobase/nocobase/pull/9150)) by @2013xile

  - 修复保存用户部门后主部门未同步或同步错误的问题 ([#9156](https://github.com/nocobase/nocobase/pull/9156)) by @2013xile

