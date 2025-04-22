### 🎉 新特性

- **[client]**
  - 日期字段组件添加日期限定范围 ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038

  - 支持子表格的添加和选择按钮配置文字、图标和类型 ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh

  - 支持在阅读态字段字段上启用链接打开弹窗 ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh

  - 支持关系区块中配置关联和取消关联操作 ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh

- **[server]** 新增接口审计管理模块 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt

- **[工作流]**
  - 新增了两种序列号生成规则：定长随机数字和随机字符串 ([#5959](https://github.com/nocobase/nocobase/pull/5959)) by @kennnnnnnnnn

  - 对工作流增加堆栈限制的配置项 ([#6077](https://github.com/nocobase/nocobase/pull/6077)) by @citlalinda

  - 支持手动触发工作流 ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher

- **[移动端]** 移动端增加全局开关控制所有返回按钮（默认开启） ([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh

- **[日历]** 日历插件添加事项打开模式 ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038

- **[数据表：树]** 支持在树表格区块中筛选子节点 ([#4770](https://github.com/nocobase/nocobase/pull/4770)) by @jimmy201602

- **[工作流：操作前事件]** 支持手动触发工作流 by @mytharcher

- **[Redis 发布订阅适配器]** 添加基于 Redis 的同步适配器插件 by @mytharcher

### 🚀 优化

- **[client]**
  - Associate按钮去掉联动规则设置项 ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh

  - 去除表格行的骨架屏组件 ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe

  - 优化 useMenuSearch 递归逻辑，提升性能 ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh

  - 去除表格的 Formily 组件，以提高切换表格分页时的性能 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

  - 提升页面的渲染性能，和支持页面的 keep-alive 功能 ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe

  - 实现前端组件的按需加载 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust

- **[通知：电子邮件]** 在通知插件的 package.json 中添加主页链接。 ([#6150](https://github.com/nocobase/nocobase/pull/6150)) by @sheldon66

- **[工作流：循环节点]** 修复工作流画布的样式问题 ([#6095](https://github.com/nocobase/nocobase/pull/6095)) by @mytharcher

- **[文件管理器]** 支持其他存储插件 ([#6096](https://github.com/nocobase/nocobase/pull/6096)) by @jiannx
参考文档：[文件存储：S3 (Pro)](https://docs-cn.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[工作流：测试工具包]** 调整工作流画布样式，使内容更紧凑 ([#6088](https://github.com/nocobase/nocobase/pull/6088)) by @mytharcher

- **[工作流]** 将部分 API 调整为更合理的名称 ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher

- **[数据可视化]** 图表查询增加 offset 参数 ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah

- **[移动端]** 优化移动端日期和时间、日期范围选择组件交互体验 ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh

- **[用户认证]** 优化获取审计操作的 metadata 的逻辑 ([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt

- **[公开表单]** 操作面板、公开表单组件优化适配移动端 ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh

- **[数据表字段：排序]** 补充插件描述 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher

- **[工作流：自定义操作事件]** 调整手动执行工作流的 API by @mytharcher

- **[工作流：JSON 计算]**
  - 修改 JSON 解析的节点名称为 JSON 计算，并调整分组 by @mytharcher

  - 为节点增加类型图标 by @mytharcher

- **[嵌入 NocoBase]** 提升页面的渲染性能 by @zhangzhonghe

- **[备份管理器]** 优化还原失败时的错误消息 by @gchust

### 🐛 修复

- **[client]**
  - 按钮的联动规则因顺序问题导致的不能正常工作 ([#6147](https://github.com/nocobase/nocobase/pull/6147)) by @zhangzhonghe

  - 删除区块或者字段后，布局异常 ([#6139](https://github.com/nocobase/nocobase/pull/6139)) by @zhangzhonghe

  - 修复筛选按钮中非筛选字段设置影响同一数据表的其他表格区块的筛选按钮 ([#6121](https://github.com/nocobase/nocobase/pull/6121)) by @katherinehhh

  - 子详情中添加关系字段不显示数据 ([#6117](https://github.com/nocobase/nocobase/pull/6117)) by @zhangzhonghe

  - 修复切换页面后“数据加载方式”失效的问题 ([#6115](https://github.com/nocobase/nocobase/pull/6115)) by @zhangzhonghe

  - 修复切换页面后，不刷新关系字段默认值的问题 ([#6114](https://github.com/nocobase/nocobase/pull/6114)) by @zhangzhonghe

  - 修复 Easy-reading 模式的关系字段默认值不生效的问题 ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe

  - 修复工作流人工节点的表单按钮的字段赋值无效的问题 ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe

  - 修复 字段启用连接的弹窗中缺少当前弹窗变量 ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh

  - 认证检查请求完成后才继续渲染页面 ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile

  - 修复表格行无法拖拽排序的问题 ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe

  - 修复在 IOS 中，空的子表格会显示一行空数据的问题 ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe

  - 修复点击关系字段无法打开弹窗的问题 ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe

  - 修 复 筛选表单/筛选操作中日期范围选择器设置 showTime=true 时未显示时间 ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh

  - 修复在第三方插件中，表格单元格的显示不符合预期的问题 ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe

  - 修复区块模板管理页面中，删除按钮被禁用的问题 ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe

  - 修复在表单联动规则中，如果依赖了子表格中的字段值，而导致的联动规则失效的问题 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe

  - 修复子表格翻页后，数据不变的问题 ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe

  - 修复切换页面后，浏览器标签名称未更新的问题 ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe

  - 修复在数据源管理页面刷新页面后，会跳转到首页的问题 ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe

  - 修复在引用模板中的关系字段，有时会不显示数据的问题 ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe

  - 修复用户管理表格中，不显示角色数据的问题 ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe

  - 修复添加“自定义请求”按钮后，不会立即显示的问题 ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe

  - 修复在弹窗中增加区块后，再次打开不显示区块的问题 ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe

  - 避免已隐藏的页面影响其它页面的交互 ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe

  - 修复在详情区块中，更改关系字段的值，不会立即刷新的问题 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe

  - 修复在子表单中添加字段后，不显示字段的问题 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe

  - 修复首次开启“启用链接”后，点击链接打不开弹窗的问题 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe

  - 修复在移动端登录后，会跳转到桌面端页面的问题 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe

  - 修复操作配置按钮未左对齐的问题 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh

  - 关闭弹窗时，防止触发多次 API 请求 ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe

  - 修复一些变量在第三方数据源区块中无法正常使用的问题 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe

  - 修复区块模板中，关系字段值为空的问题。修复第三方数据源的区块数据范围，使用变量时，不能正常工作的问题 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe

  - 修复懒加载组件时组件的动态属性不起作用的问题 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust

  - 修复开发环境中动态加载 hook 时会出现 React 告警消息 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust

- **[build]**
  - 修复设置环境变量 `APP_PUBLIC_PATH` 后无法加载的问题 ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust

  - 修复插件构建后前端 js 文件错误缓存的问题 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

  - 修复 `create-nocobase-app` 后执行 `yarn dev` 报错的问题 ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust

- **[server]** 为 ACL 设置默认的可用操作 ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos

- **[公开表单]** 无法在公开表单的`子表单(弹窗)`中新增字段 ([#6157](https://github.com/nocobase/nocobase/pull/6157)) by @gchust

- **[数据表: SQL]** 修复设置了 `DB_TABLE_PREFIX` 时过滤 SQL Collection 报错的问题 ([#6156](https://github.com/nocobase/nocobase/pull/6156)) by @2013xile

- **[工作流]**
  - 为“移动”操作可触发工作流增加测试用例 ([#6145](https://github.com/nocobase/nocobase/pull/6145)) by @mytharcher

  - 修复手动执行未启用工作流在异步节点报错的问题 ([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher

- **[用户数据同步]**
  - 修复同步任务列表中“重试”按钮不显示的问题 ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile

  - 修复同步和任务按钮的显示问题。 ([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile

- **[验证码]** 修复在验证码配置页面，打开编辑弹窗，弹窗中的表单不显示值的问题 ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos

- **[数据源：主数据库]** 修复筛选表单中的系统字段无法编辑的问题 ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe

- **[数据可视化]**
  - 修复图表区块的初始高度 ([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile

  - 修复图表区块的筛选字段组件没有渲染的问题 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile

- **[移动端]**
  - 修复 移动端子页面日期组件未适配为移动端组件 ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh

  - 修复 移动端筛选操作缺少日期输入框 ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh

- **[工作流：自定义操作事件]**
  - 修复自定义操作事件的测试用例 by @mytharcher

  - 修复 SQLite 下的测试用例 by @mytharcher

- **[工作流：操作前事件]** 修复请求拦截器的测试用例 by @mytharcher

- **[工作流：响应消息]** 修复错误的参数名 by @mytharcher

