### 🎉 新特性

- **[client]** 给菜单项和表格表头添加提示信息配置 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038

- **[数据可视化]** 支持在图表查询中设置 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

- **[AI 集成]** 新插件：AI 集成 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
参考文档：[AI 集成](https://docs-cn.nocobase.com/handbook/ai/service)
- **[AI 集成 (企业版)]** 新插件：AI 集成（企业版） by @2013xile
参考文档：[AI 集成](https://docs-cn.nocobase.com/handbook/ai/service)
### 🚀 优化

- **[client]**
  - 按钮添加防双击处理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

  - 菜单改为可自适应屏幕宽度 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe

- **[工作流]** 支持在数据表事件中不触发工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

- **[工作流：聚合查询节点]** 对聚合后的数字进行小数四舍五入的处理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

- **[操作：导入记录 Pro]** Pro 导入按钮改进 by @katherinehhh

- **[工作流：JavaScript 节点]** 支持使用绝对路径引入包 by @mytharcher

- **[文件存储：S3 (Pro)]** 如果找不到存储时重新加载一次 by @jiannx

### 🐛 修复

- **[client]**
  - 菜单标题的自定义翻译无效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe

  - 日期组件缺陷，选择的日期时间会少一个小时 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh

  - 继承父表的字段在表格中缺少排序设置项 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

  - 附件字段存储空间设置下拉不显示选项 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh

  - 子表单隐藏字段标题时字段组件与主表单中的组件未对齐 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh

  - 数据表继承模型中关系区块在弹窗中未显示 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh

  - 页面开启标签页时区块全高出现滚动条 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh

  - 修复创建文件表时的报错 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher

- **[database]** 修复当关系字段的源表标识字段值为数字型字符串时，获取关系数据记录报错的问题 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

- **[WEB 客户端]**
  - 在路由管理表格中添加 tab 页面不生效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe

  - 在路由表中添加一个页面后，页面显示空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe

- **[用户]**
  - 没有用户管理权限的用户访问自己的个人资料时提示无权限 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile

  - 在用户管理里更新系统设置时出现 "No permissions" 报错 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile

- **[权限控制]** 权限管理表格中，tab 页的名称为空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe

- **[AI 集成]** LLM 服务默认 `baseURL` 为空的问题 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile

- **[工作流]** 修复加载节点结果的权限问题 ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

- **[工作流：自定义操作事件]** 修复语言并在执行后禁用数据表的修改 by @mytharcher

- **[操作：导入记录 Pro]** 使用额外的选项来觉得是否在导入时触发工作流的数据表事件 by @mytharcher

- **[操作：导出记录 Pro]** pro 导出按钮导出数据时缺失sort 参数 by @katherinehhh

