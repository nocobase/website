### 🎉 新特性

- **[多应用管理器]** 支持为子应用配置独立的认证密钥 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher

- **[工作流：抄送]** 工作流新增抄送节点 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher

- **[工作流：审批]** 为触发器增加区块初始化器 by @mytharcher

### 🚀 优化

- **[通知：站内信]** 优化移动端消息页面的字体大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe

- **[工作流]** 字符串比较运算前将操作数转换为字符串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher

- **[多应用管理器]**
  - 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher

  - 为子应用增加数据库和认证的独立配置 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher

- **[数据表字段：代码]** 增加字段缩进配置 by @mytharcher

- **[认证：钉钉]** 支持配置回调 URL 协议和端口号 by @2013xile

### 🐛 修复

- **[client]**
  - 修复联动规则左侧变量无法选中附件字段的问题 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe

  - 修复列表区块字段赋值操作中选用看板排序字段时报错的问题 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh

  - 筛选折叠面板：字段设置默认值后页面初始化没有触发筛选 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe

  - 修复编辑表单中联动规则为选项字段同时设置赋值和选项内容时赋值失效的问题 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh

  - 打开弹窗操作：切换 Tab 标签之后页面显示不符合预期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe

  - 子菜单切换时浏览器标签标题未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe

  - 修复在 IOS 中下拉选择组件被键盘遮挡的问题 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe

- **[acl]** 修复在使用包含 root 角色的并集模式下删除角色时报错的问题。 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie

- **[用户认证]** 修复登录页面不能滚动的问题 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe

- **[多应用管理器]** 修复认证选项出现在意外的位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher

- **[通知：站内信]** 修复字符串格式的大整型时间戳导致的 dayjs 问题 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher

- **[操作：自定义请求]** 修复自定义请求操作成功后，跳转路由时链接地址变量解析错误的问题 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh

- **[区块：看板]** 修复看板中子表格 UI 异常 & 支持设置看板每列宽度 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh

- **[工作流：审批]**
  - 迁移脚本中更新 UI schema 时加入 `try/catch` by @mytharcher

  - 修复区块和关系数据问题 by @mytharcher

  - 重新加载审批记录上的关系数据 by @mytharcher

  - 避免用户不存在时的报错 by @mytharcher

