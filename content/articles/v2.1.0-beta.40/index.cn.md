### 🎉 新特性

- **[client-v2]** 支持表单的提交操作配置字段赋值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) by @katherinehhh
- **[Office 文件预览]** 将 Office 文件预览插件迁移到 v2（FlowEngine）版本。 ([#9620](https://github.com/nocobase/nocobase/pull/9620)) by @Molunerfinn

### 🚀 优化

- **[通知管理]** 通知管理相关插件迁移到 v2 版本。 ([#9597](https://github.com/nocobase/nocobase/pull/9597)) by @Molunerfinn

### 🐛 修复

- **[client]** 修复顶部导航栏数字徽标背景过宽的问题 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) by @zhangzhonghe
- **[区块：甘特图]** 修复 v2 甘特图 shared 文件夹路径，并添加斑马纹。 ([#9621](https://github.com/nocobase/nocobase/pull/9621)) by @jiannx
- **[授权设置]** 新增授权设置的 client-v2 支持，并支持商业授权逻辑注入 client-v2 插件入口。 ([#9555](https://github.com/nocobase/nocobase/pull/9555)) by @jiannx
- **[工作流：自定义操作事件]** 修复 v2 区块操作菜单重复显示触发工作流的问题 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) by @zhangzhonghe
- **[AI 员工]** 修复引用表格区块删除后 AI 快捷操作按钮上下文变成一个空区块的问题。 ([#9617](https://github.com/nocobase/nocobase/pull/9617)) by @cgyrock
- **[plugin-commercial]** 新增商业授权的 client-v2 组件和顶部授权状态入口。 by @jiannx
- **[迁移管理]** 修复 PostgreSQL 迁移差异计算，避免子表本地列转为继承列时错误生成删除列语句。 by @hongboji
