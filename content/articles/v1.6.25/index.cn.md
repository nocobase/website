### 🎉 新特性

- **[undefined]** 添加 license kit 发包ci ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

- **[数据可视化：EChrats]** 条形图支持“y轴反向”设置 by @2013xile

### 🚀 优化

- **[utils]** 增加筛选按钮字段列表的高度，和对字段进行排序分类 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

- **[client]** 优化子表格添加按钮样式，并将分页器与按钮排列在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

- **[文件管理器]** 增加 OSS 存储引擎的超时时间配置项，且默认为 10 分钟 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[密码策略]** 默认密码过期时间修改为不过期 by @2013xile

- **[企业微信]** 更新用户邮箱时优先使用企业邮箱而不是个人邮箱 by @2013xile

### 🐛 修复

- **[client]**
  - 折叠面板区块中，当点击关系字段搜索框的清空按钮后，不应该删除数据范围 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe

  - 关系字段，在显示关系表下的字段数据时不提交数据 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - 禁止将菜单移动到页面 tab 的前面和后面 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

  - 表格区块在筛选时重复显示数据 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe

  - 筛选表单中，切换字段操作符后，刷新页面会报错 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe

- **[database]**
  - 避免文本类型输入数据不是字符串时的报错 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

  - 补充sql collection和view collection 的unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh

- **[create-nocobase-app]** 回退 mariadb 版本至 2.5.6，解决兼容性问题 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos

- **[用户认证]** 不允许修改认证器标识 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[模板打印]** 修复：修正权限校验逻辑，防止未授权操作。 by @sheldon66

- **[文件存储：S3 (Pro)]** 访问地址有效期无效 by @jiannx

- **[区块：树]** 通过外键连接后，点击触发筛选，筛选条件为空 by @zhangzhonghe

