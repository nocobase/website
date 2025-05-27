### 🎉 新特性

- **[client]**
  - 支持二次确认中使用变量 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh

  - 支持在区块中配置联动规则，实现动态显示区块 ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh

- **[undefined]** 添加 license kit 发包ci ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

- **[区块：iframe]** Iframe 区块支持配置 allow 属性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe

- **[用户认证]** 支持“忘记密码”的功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
参考文档：[忘记密码](https://docs-cn.nocobase.com/handbook/auth/user#%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81)
- **[文件管理器]** 新增：添加 `getFileStream` API 支持文件流式处理。 ([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66

- **[操作：自定义请求]** 自定义请求按钮的提交成功提示支持响应结果值 ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh

- **[模板打印]** 新增：模板打印中 Option 字段支持 `{ label, value }` 结构的下拉选项。 by @sheldon66

- **[区块：树]** 树结构的筛选区块支持区块联动规则 by @katherinehhh

- **[数据可视化：EChrats]** 条形图支持“y轴反向”设置 by @2013xile

### 🚀 优化

- **[client]**
  - RichText组件支持modules和formats参数 ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx

  - 优化子表格添加按钮样式，并将分页器与按钮排列在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

  - 区块操作按钮增加 Tooltip，悬停在图标上时显示按钮名称 ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh

  - 保留引用模板功能 ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust

  - 调整上传文件的提示信息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

- **[utils]** 增加筛选按钮字段列表的高度，和对字段进行排序分类 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

- **[文件管理器]** 增加 OSS 存储引擎的超时时间配置项，且默认为 10 分钟 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[数据可视化]** 增加字段 interface 配置的扩展  API ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile

- **[密码策略]** 默认密码过期时间修改为不过期 by @2013xile

- **[企业微信]** 更新用户邮箱时优先使用企业邮箱而不是个人邮箱 by @2013xile

### 🐛 修复

- **[database]**
  - 导入文本字段是数字值时失败 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie

  - 修复多对一关系字段在 MariaDB 下外键为大整数配置了 appends 时无法加载的问题 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher

  - 修复测试用例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher

  - 避免文本类型输入数据不是字符串时的报错 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

  - 补充sql collection和view collection 的unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh

- **[client]**
  - 表单中多个关系字段展示关系表字段时会导致关系字段不提交 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh

  - 表格行内按钮拖拽时无法将其他按钮拖动至「复制」按钮 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh

  - 筛选表单中的表格选择器，样式异常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe

  - 当改变筛选表单的关系字段组件为数据选择器时，没有“允许多选”配置项 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe

  - 嵌套的子页面中，鼠标悬浮在“创建区块”按钮时不显示区块列表 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe

  - 阅读模式下子表格分页栏被遮住 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh

  - 子表格中子表单（弹窗）无法配置联动规则的 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh

  - 变量选择时，若需要异步加载，则会丢失最后选中的菜单 ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust

  - 表单字段验证规则违反时错误信息多次显示 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh

  - 修复无法在筛选表单中选择一对多字段的子字段作为筛选项的问题 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe

  - 将其他属性传递给组件 Variable.Input。 ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66

  - missing field property settings in field linkage rules for subform (popup) in subtable ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh

  - 关系字段，在显示关系表下的字段数据时不提交数据 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - 筛选表单中，切换字段操作符后，刷新页面会报错 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe

  - 折叠面板区块中，当点击关系字段搜索框的清空按钮后，不应该删除数据范围 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe

  - 树表中添加子记录按钮未与其他按钮对齐 ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh

  - 禁止将菜单移动到页面 tab 的前面和后面 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

  - 表格区块在筛选时重复显示数据 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe

  - URL 查询参数作为左侧变量操作符 异常 ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh

  - 视图表，无编辑权限时允许显示导出按钮 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh

  - 在表单中获取关联表中的多对多数组字段数据不正确 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile

  - 新增表单中显示关系字段子表格/子表单时关系数据也被新增 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh

- **[create-nocobase-app]** 回退 mariadb 版本至 2.5.6，解决兼容性问题 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos

- **[操作：导出记录]** 修复导出长文本错误 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie

- **[数据表字段：附件（URL）]** 联动规则中附件（URL）字段不应支持配置 value ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

- **[验证]** 修复升级脚本的问题 ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile

- **[用户认证]** 不允许修改认证器标识 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[操作：自定义请求]** 自定义请求成功后返回信息设置为变量未正确显示 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh

- **[区块：操作面板]** 操作面板 icon-only 配置下图标未显示 ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh

- **[工作流：自定义操作事件]** 触发工作流按钮联动规则不正常 by @katherinehhh

- **[工作流: 日期计算节点]** 修复没有 `Intl` API 的旧浏览器页面报错 by @mytharcher

- **[模板打印]** 修复：修正权限校验逻辑，防止未授权操作。 by @sheldon66

- **[文件存储：S3 (Pro)]** 访问地址有效期无效 by @jiannx

- **[区块：树]** 通过外键连接后，点击触发筛选，筛选条件为空 by @zhangzhonghe

