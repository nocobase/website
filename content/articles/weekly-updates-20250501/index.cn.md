汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/cn/blog/v1.6.23)

*发布时间：2025-04-23*

#### 🚀 优化

- **[cli]** 优化 `nocobase upgrade` 命令的内部实现逻辑 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
- **[模板打印]** 用客户端角色访问控制替换了数据源操作权限控制。 by @sheldon66

#### 🐛 修复

- **[cli]** 升级时自动更新项目的 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
- **[client]**

  - 添加关联表格时未过滤已关联的数据 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
  - 树表格中添加子记录按钮的联动规则缺失「当前记录」变量 ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
- **[操作：导入记录]** 修复设置字段权限时出现的导入导出异常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
- **[区块：甘特图]** 甘特图区块设置月份视图时，日历头部月份重叠 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
- **[操作：导出记录 Pro]**

  - pro导出按钮在点击表格排序后丢失过滤参数 by @katherinehhh
  - 修复设置字段权限时出现的导入导出异常。 by @aaaaaajie
- **[文件存储：S3 (Pro)]** 修复已上传文件的响应数据 by @mytharcher
- **[工作流：审批]** 修复预加载审批记录数据的关系字段 by @mytharcher

### [v1.6.24](https://www.nocobase.com/cn/blog/v1.6.24)

*发布时间：2025-04-24*

#### 🚀 优化

- **[client]** 调整上传文件的提示信息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

#### 🐛 修复

- **[client]**
  - 视图表，无编辑权限时允许显示导出按钮 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - 新增表单中显示关系字段子表格/子表单时关系数据也被新增 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh
  - 在表单中获取关联表中的多对多数组字段数据不正确 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile

### [v1.6.25](https://www.nocobase.com/cn/blog/v1.6.25)

*发布时间：2025-04-29*

#### 🎉 新特性

- **[undefined]** 添加 license kit 发包ci ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx
- **[数据可视化：EChrats]** 条形图支持“y轴反向”设置 by @2013xile

#### 🚀 优化

- **[utils]** 增加筛选按钮字段列表的高度，和对字段进行排序分类 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe
- **[client]** 优化子表格添加按钮样式，并将分页器与按钮排列在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[文件管理器]** 增加 OSS 存储引擎的超时时间配置项，且默认为 10 分钟 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[密码策略]** 默认密码过期时间修改为不过期 by @2013xile
- **[企业微信]** 更新用户邮箱时优先使用企业邮箱而不是个人邮箱 by @2013xile

#### 🐛 修复

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

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/cn/blog/v1.7.0-beta.22)

*发布时间：2025-04-24*

#### 🚀 优化

- **[cli]** 优化 `nocobase upgrade` 命令的内部实现逻辑 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos

#### 🐛 修复

- **[client]** 多层级关系数据中联动规则未正确显示 ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/cn/blog/v1.7.0-beta.23)

*发布时间：2025-04-24*

#### 🎉 新特性

- **[操作：自定义请求]** 自定义请求按钮的提交成功提示支持响应结果值 ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh

#### 🚀 优化

- **[client]** 调整上传文件的提示信息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

#### 🐛 修复

- **[client]**
  - 在表单中获取关联表中的多对多数组字段数据不正确 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile
  - 视图表，无编辑权限时允许显示导出按钮 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - 新增表单中显示关系字段子表格/子表单时关系数据也被新增 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/cn/blog/v1.7.0-beta.24)

*发布时间：2025-04-25*

#### 🎉 新特性

- **[client]** 支持在区块中配置联动规则，实现动态显示区块 ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh

#### 🚀 优化

- **[client]** 保留引用模板功能 ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust
- **[数据可视化]** 增加字段 interface 配置的扩展  API ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile

#### 🐛 修复

- **[create-nocobase-app]** 回退 mariadb 版本至 2.5.6，解决兼容性问题 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[database]** 补充sql collection和view collection 的unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[client]** URL 查询参数作为左侧变量操作符 异常 ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh
- **[区块：操作面板]** 操作面板 icon-only 配置下图标未显示 ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh
- **[工作流: 日期计算节点]** 修复没有 `Intl` API 的旧浏览器页面报错 by @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/cn/blog/v1.7.0-beta.25)

*发布时间：2025-04-28*

#### 🎉 新特性

- **[文件管理器]** 新增：添加 `getFileStream` API 支持文件流式处理。 ([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66

#### 🚀 优化

- **[client]** 区块操作按钮增加 Tooltip，悬停在图标上时显示按钮名称 ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh
- **[企业微信]** 更新用户邮箱时优先使用企业邮箱而不是个人邮箱 by @2013xile

#### 🐛 修复

- **[文件存储：S3 (Pro)]** 访问地址有效期无效 by @jiannx
- **[模板打印]** 修复：修正权限校验逻辑，防止未授权操作。 by @sheldon66
- **[区块：树]** 通过外键连接后，点击触发筛选，筛选条件为空 by @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/cn/blog/v1.7.0-beta.26)

*发布时间：2025-04-28*

#### 🎉 新特性

- **[undefined]** 添加 license kit 发包ci ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

#### 🚀 优化

- **[utils]** 增加筛选按钮字段列表的高度，和对字段进行排序分类 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

#### 🐛 修复

- **[client]**
  - 折叠面板区块中，当点击关系字段搜索框的清空按钮后，不应该删除数据范围 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - 筛选表单中，切换字段操作符后，刷新页面会报错 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
  - 表格区块在筛选时重复显示数据 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - 树表中添加子记录按钮未与其他按钮对齐 ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh
  - 禁止将菜单移动到页面 tab 的前面和后面 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/cn/blog/v1.7.0-alpha.12)

*发布时间：2025-04-24*

#### 🚀 优化

- **[cli]** 优化 `nocobase upgrade` 命令的内部实现逻辑 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
- **[create-nocobase-app]** 更新依赖，移除 SQLite 支持 ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos
- **[移动端]** 优化移动端日期选择弹窗的打开速度 ([#6735](https://github.com/nocobase/nocobase/pull/6735)) by @zhangzhonghe
- **[区块：模板]** 支持将模板区块转换成普通区块 ([#6662](https://github.com/nocobase/nocobase/pull/6662)) by @gchust
- **[文件管理器]** 暴露公共包 API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher
- **[主题编辑器]** 主题支持设置侧边栏宽度 ([#6720](https://github.com/nocobase/nocobase/pull/6720)) by @chenos
- **[工作流]** 为变量的类型集合增加日期相关类型 ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher
- **[模板打印]** 用客户端角色访问控制替换了数据源操作权限控制。 by @sheldon66

#### 🐛 修复

- **[client]**

  - 多层级关系数据中联动规则未正确显示 ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh
  - 树表格中添加子记录按钮的联动规则缺失「当前记录」变量 ([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
  - 修复提交成功后，刷新数据区块无效的问题 ([#6748](https://github.com/nocobase/nocobase/pull/6748)) by @zhangzhonghe
  - 左侧菜单的收起按钮会被绑定工作流弹窗遮挡的问题 ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe
  - 移动端顶部的导航栏图标很难被删除的问题 ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe
  - 启用序号列设置后回显错误 ([#6724](https://github.com/nocobase/nocobase/pull/6724)) by @katherinehhh
  - 联动规则中时间字段作为判断条件无效 ([#6728](https://github.com/nocobase/nocobase/pull/6728)) by @katherinehhh
  - 重新打开联动规则时缺少操作选项约束 ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh
  - 被联动规则隐藏的必填字段，不应该影响表单的提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe
  - 添加关联表格时未过滤已关联的数据 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
- **[server]** create-migration 命令生成的 appVersion 不准确 ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos
- **[cli]** 升级时自动更新项目的 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
- **[build]** 修复 tar 命令报错的问题 ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher
- **[区块：甘特图]** 甘特图区块设置月份视图时，日历头部月份重叠 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
- **[操作：导入记录]** 修复设置字段权限时出现的导入导出异常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
- **[区块：模板]** mysql 环境下无法使用区块模板 ([#6726](https://github.com/nocobase/nocobase/pull/6726)) by @gchust
- **[工作流]** 修复子流程执行定时任务报错的问题 ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher
- **[工作流：自定义操作事件]** 支持多行记录模式的手动执行 by @mytharcher
- **[操作：导出记录 Pro]**

  - 修复设置字段权限时出现的导入导出异常。 by @aaaaaajie
  - pro导出按钮在点击表格排序后丢失过滤参数 by @katherinehhh
- **[文件存储：S3 (Pro)]**

  - 修复已上传文件的响应数据 by @mytharcher
  - 增加 multer 逻辑用于服务端上传 by @mytharcher
- **[工作流：审批]** 修复预加载审批记录数据的关系字段 by @mytharcher
