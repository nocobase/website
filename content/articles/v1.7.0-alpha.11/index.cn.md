### 🎉 新特性

- **[client]** 联动规则条件左侧支持变量 ([#6609](https://github.com/nocobase/nocobase/pull/6609)) by @katherinehhh

- **[部门]** 商业插件部门、附件 URL、工作流响应消息改为免费提供 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

- **[操作：批量更新]**
  - 支持在更新区块数据后刷新其它区块的数据 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

  - 支持在更新区块数据后刷新其它区块的数据 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

- **[UI schema 存储服务]** 新增UISchema 本地化模块，支持schema 中标题、描述自定义翻译 ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

- **[区块：操作面板]** 添加一个 onScanSuccess 回调函数，用于处理扫描成功事件并退出相机界面。 ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

- **[数据表字段：代码]** 增加代码字段 by @mytharcher

- **[工作流: 日期计算节点]** 增加 `changeTimezone` 函数以便在格式化前可以改变时区 by @mytharcher

- **[模板打印]** 文档模板支持动态图片和条形码渲染功能。 by @sheldon66

### 🚀 优化

- **[client]**
  - 为弹窗组件增加 delay API ([#6681](https://github.com/nocobase/nocobase/pull/6681)) by @mytharcher

  - 自定义请求支持表格选中记录 ([#6647](https://github.com/nocobase/nocobase/pull/6647)) by @katherinehhh

  - 为 `Variable.Input` 组件增加默认退避类型的 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher

  - 优化未配置页面时的提示 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe

  - 支持筛选组件中对字段进行搜索 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher

  - 为 `Input` 和 `Variable.TextArea` 组件增加 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher

  - 根据设备类型而非页面宽度来判断是否显示移动端组件 ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe

  - 根据设备类型而非页面宽度来判断是否显示移动端布局 ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe

  - 表单字段标题支持根据布局设置显示或隐藏冒号 ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh

- **[create-nocobase-app]** 升级部分依赖的版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

- **[utils]** 为 dayjs 包增加时长扩展 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher

- **[database]**
  - 为多行文本类型字段增加去除首尾空白字符的选项 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher

  - 为单行文本增加自动去除首尾空白字符的选项 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher

- **[工作流]**
  - 待办中心支持固定弹窗 URL ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

  - 优化执行记录写入逻辑 ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher

  - 优化代码 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher

- **[工作流：延时节点]** 支持延迟时间使用变量 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

- **[错误处理器]** 在 AppError 组件中支持自定义标题。 ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66

- **[文件管理器]** 为存储引擎表的文本字段增加去除首尾空白字符的选项 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher

- **[异步任务管理器]** 优化 Pro 导入导出按钮异步逻辑 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos

- **[工作流：自定义操作事件]** 为触发工作流按钮增加刷新配置项 by @mytharcher

- **[操作：导出记录 Pro]** 优化 Pro 导入导出按钮 by @katherinehhh

- **[IP 限制]** 更新 IP 限制消息内容。 by @sheldon66

- **[文件存储：S3 (Pro)]** 支持存储引擎的配置中使用全局变量 by @mytharcher

- **[备份管理器]** 允许子应用直接还原成主应用 by @gchust

- **[工作流：审批]** 支持审批表单使用区块模板 by @mytharcher

- **[迁移管理]** 允许执行迁移时跳过自动备份还原 by @gchust

### 🐛 修复

- **[client]**
  - 筛选按钮中日期字段，切换picker 异常 ([#6695](https://github.com/nocobase/nocobase/pull/6695)) by @katherinehhh

  - 子表格、子表单中左侧变量转换历史数据异常，应为「当前对象  」 ([#6702](https://github.com/nocobase/nocobase/pull/6702)) by @katherinehhh

  - 未设置导出权限时仍显示导出按钮 ([#6689](https://github.com/nocobase/nocobase/pull/6689)) by @katherinehhh

  - 通过外键连接后，点击触发筛选，筛选条件为空 ([#6634](https://github.com/nocobase/nocobase/pull/6634)) by @zhangzhonghe

  - 修复新增和更新节点字段赋值的报错 ([#6696](https://github.com/nocobase/nocobase/pull/6696)) by @mytharcher

  - 修复审批节点配置中引用模板区块的添加按钮报错问题 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher

  - 自定义的关系字段没有显示关系字段组件 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh

  - 联动规则兼容历史数据的问题 ([#6686](https://github.com/nocobase/nocobase/pull/6686)) by @katherinehhh

  - 懒加载组件不存在时界面报错 ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust

  - 修复上传组件语言问题 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher

  - 补全原生的 Password 组件到封装过的输入组件 ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher

  - 工作流中字段描述显示[object Object] ([#6680](https://github.com/nocobase/nocobase/pull/6680)) by @katherinehhh

  - 字段赋值本表字段列表中显示了继承表字段，应只显示本表字段 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh

  - 表单字段设置默认值，变量输入框样式显示异常 ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh

  - 切换到分组菜单时，不应该跳转到已经在菜单中被隐藏的页面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe

  - 筛选表单不应该显示“未保存修改”提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe

  - 筛选表单中，当点击筛选按钮时，如果有字段未校验通过，依然会触发筛选的问题 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe

  - 筛选表单中关系字段的“允许多选”设置项不生效 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh

  - 修复预览图片被遮挡的问题 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe

  - 表单区块中，字段配置的默认值会先显示为原始变量字符串然后再消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

  - 变量输入框样式不正确 ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust

  - 工作流节点编辑抽屉标题显示为 [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh

  - 子表格中描述信息与操作按钮遮挡 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh

  - 弹窗表单在 horizontal 布局下初始宽度计算错误，导致出现提示和 下划虚线 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh

  - 联动规则条件设置为任意且无条件内容时属性设置不生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh

  - 链接中中文参数变量值解析失败 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh

  - 区块模板配置页面标题与菜单存在空白区域 ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust

  - 筛选表单中的关系字段在刷新页面后，由于没有携带 x-data-source 而报错 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe

  - 树表使用甘特图区块时数据显示异常 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh

  - 表单字段标题因冒号导致的截断问题 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh

  - 表单字段设置不可编辑不起作用 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh

  - 修复 `SchemaInitializerItem` 配置了 `items` 时 `disabled` 属性无效的问题 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher

  - 关系字段（select）放出关系表字段时默认显示 N/A ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh

  - 提交、刷新按钮设置 仅显示图标不起作用 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh

  - 级联组件删除后重新选择时出现 'The value of xxx cannot be in array format' ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh

  - 同一表单中不同关系字段的同名关系字段的联动互相影响 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh

- **[database]**
  - 修复 CI 编译错误 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie

  - 删除一对多记录时，同时传递 `filter` 和 `filterByTk` 参数，`filter` 包含关系字段时，`filterByTk` 参数失效 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

  - 避免“日期时间（无时区）”字段在值未变动的更新时触发值改变 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher

- **[build]** 插件依赖 AMD 库时构建产物不正确 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust

- **[数据可视化]** 筛选区块的枚举字段选项为空 ([#6706](https://github.com/nocobase/nocobase/pull/6706)) by @2013xile

- **[操作：自定义请求]** 自定义请求的 data 参数必须为 JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) by @chenos

- **[工作流：人工处理节点]**
  - 修复待办中心的权限错误 ([#6693](https://github.com/nocobase/nocobase/pull/6693)) by @mytharcher

  - 修复人工节点任务状态常量 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher

- **[操作：导入记录]** 修复导入包含时间字段的 xlsx 错误 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie

- **[权限控制]**
  - 修复角色数据模型缓存序列化时的报错问题 ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher

  - 纠正角色并集计算逻辑 ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie

  - 设置当前登录角色不正确 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie

- **[区块：iframe]** iframe 区块设置全高时页面出现滚动条 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh

- **[工作流]**
  - 修复 MySQL 执行迁移脚本的报错 ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher

  - 修复应用启动时工作流统计信息未加载的问题 ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher

  - 修复创建执行记录使用非安全整型 ID 时内存溢出的问题 ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher

  - 修复同步选项展示问题 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher

- **[数据表字段：附件（URL）]** 附件 URL 字段中过滤掉不支持公共访问的文件表 ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh

- **[区块：模板]**
  - 当页面区块使用的引用模板已经被删除，保存为模板不成功 ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

  - 模板创建区块后，模板和区块修改删除同一个字段可能会造成渲染错误 ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust

- **[用户]** 用户个人资料表单 schema 的解析问题 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile

- **[操作：导出记录]** 筛选数据后切换分页再导出时筛选参数丢失 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh

- **[移动端]** 下拉单选字段在移动端设置筛选符为包含时组件未支持多选 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh

- **[数据表字段：多对多 (数组)]** 主表筛选带有多对多（数组）字段的关联表中的字段报错的问题 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile

- **[公开表单]** 查看权限包括 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos

- **[用户认证]** `AuthProvider` 中的 token 赋值 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile

- **[日历]** 日历区块以周为视图时，边界日期不显示数据 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh

- **[区块：地图]** 地图管理必填校验不应通过空格输入 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh

- **[操作：批量编辑]** 点击批量编辑按钮，配置完弹窗再打开，弹窗是空白的 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

- **[工作流：自定义操作事件]** 修复测试用例 by @mytharcher

- **[邮件管理]**
  - 修复无法同步，无标题显示等其他小问题 by @jiannx

  - 邮件管理权限无法查看邮件列表 by @jiannx

  - 修复next调用缺少await by @jiannx

- **[文件存储：S3 (Pro)]**
  - 修复next调用缺少await by @jiannx

  - baseurl 和 public 设置不再互相关联，改进 S3 pro 存储的配置交互体验 by @jiannx

  - 当用户上传 logo 失败时提示错误（设置为默认存储的 S3 Pro） by @mytharcher

  - 整理语言文案 by @jiannx

- **[认证：OIDC]** 回调路径是字符串'null'时导致跳转不正确 by @2013xile

- **[区块：分步表单]**
  - 提交按钮默认和高亮情况下颜色一样 by @jiannx

  - 修复当字段与其他表单字段存在关联时，表单重置无效 by @jiannx

- **[备份管理器]** 还原时若备份未设置密码，但用户输入了密码，还原会出现超时报错 by @gchust

- **[工作流：审批]**
  - 修复待办中心权限错误 by @mytharcher

  - 在待办中心支持审批项目的固定 URL by @mytharcher

  - 修复分支模式下配置拒绝则结束时的流程问题 by @mytharcher

  - 修复更新时间在迁移后变化 by @mytharcher

  - 修复审批节点界面配置变更后数据未同步的问题 by @mytharcher

  - 修复审批表单中的前端变量 by @mytharcher

- **[迁移管理]**
  - 部分服务器环境下迁移日志创建日期显示不正确 by @gchust

  - 迁移时若弹出环境变量弹窗，跳过自动备份选项会失效 by @gchust

