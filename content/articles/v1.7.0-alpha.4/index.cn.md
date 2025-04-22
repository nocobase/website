### 🎉 新特性

- **[client]**
  - 支持长文本字段作为关系字段的标题字段 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh

  - 支持字段 Style 设置 font-size、font-weight、font-style ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh

- **[变量和密钥]** 支持链接按钮的 URL 中使用环境变量 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

- **[工作流：聚合查询节点]** 支持为聚合结果配置精度选项 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

### 🚀 优化

- **[client]** 支持筛选按钮中选择字段的模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh

- **[通知：电子邮件]** 增加安全字段配置描述。 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66

- **[工作流：邮件发送节点]** 增加安全字段配置描述。 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66

- **[日历]** 日历插件添加开启或关闭快速创建事件可选设置 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

- **[WEB 客户端]** 增加 Clear Cache 操作的二次确认提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh

- **[邮件管理]** 支持重新授权和发件时自动选中账号 by @jiannx

### 🐛 修复

- **[client]**
  - 操作按钮透明状态导致 hover 时按钮 setting 显示异常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

  - 时间字段在中文语言下提交时报错 invalid input syntax for type time ([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh

  - 表单中的子表格高度会随主表单高度一同设置 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh

  - 联动规则字段默认设置为 隐藏保留值 不生效 ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh

  - 添加子记录按钮设置只显示图标不生效 ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh

- **[server]** Upgrade 命令可能造成工作流报错 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust

- **[utils]** 已知桌面端响应式的 BUG ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe

- **[evaluators]** 将表达式计算保留小数调整回 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher

- **[用户认证]**
  - 移除认证器配置项前后的空格、换行符 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile

  - X-Authenticator 缺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos

- **[区块：地图]**
  - 地图区块 密钥管理中不可见字符导致的密钥请求失败的问题 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh

  - 地图管理中密钥必填校验失败 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh

- **[文件管理器]**
  - COS 存储的文件无法访问 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos

  - URL 转义 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos

- **[WEB 客户端]** 路由管理表格中的路径与实际路径不一样 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe

- **[区块：操作面板]** 移动端操作面板按钮权限隐藏后的排版问题 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh

- **[数据源：主数据库]** 无法创建 MySQL 视图 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie

- **[工作流]** 修复历史遗留任务数量工作流删除后统计错误 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher

- **[操作：导出记录 Pro]** 无法导出附件 by @chenos

- **[备份管理器]**
  - 通过多应用模板创建子应用时备份中的上传文件未被正确还原 by @gchust

  - 还原过程中可能引起工作流执行报错 by @gchust

  - 还原 MySQL 数据库备份时由于 GTID 集合重叠导致的失败 by @gchust

- **[企业微信]** 获取通知配置时需要解析环境变量和密钥 by @2013xile

- **[工作流：审批]**
  - 修复审批流程表格因执行记录删除后报错 by @mytharcher

  - 将退回的审批单据列入待办 by @mytharcher

  - 修复审批人界面配置添加查询节点时的页面崩溃 by @mytharcher

  - 修复审批过程表格中发起人查看按钮消失的问题 by @mytharcher

  - “发起新申请”弹窗的样式问题 by @zhangzhonghe

