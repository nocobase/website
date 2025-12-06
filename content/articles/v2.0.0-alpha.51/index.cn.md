### 🎉 新特性

- **[client]**
  - 支持在主题编辑器中自定义全局样式 ([#7960](https://github.com/nocobase/nocobase/pull/7960)) by @ljmiaoo

  - 支持在详情区块中配置默认排序规则 ([#8070](https://github.com/nocobase/nocobase/pull/8070)) by @katherinehhh

  - 支持设置数字字段的数据类型，可选项包括 double、float 和 decimal ([#8058](https://github.com/nocobase/nocobase/pull/8058)) by @chenos

- **[数据表字段：自动编码]** 数据迁移后自动更新'自动编码'字段 ([#8063](https://github.com/nocobase/nocobase/pull/8063)) by @cgyrock

### 🚀 优化

- **[client]**
  - 修复子表格删除行后跳至最后分页的问题，并支持列级验证规则配置 ([#8094](https://github.com/nocobase/nocobase/pull/8094)) by @katherinehhh

  - 调整编辑态子表格中大字段的展示 ([#8078](https://github.com/nocobase/nocobase/pull/8078)) by @katherinehhh

  - JSON 字段内容超出时支持省略显示 ([#8067](https://github.com/nocobase/nocobase/pull/8067)) by @katherinehhh

- **[flow-engine]**
  - 为 FlowModelRenderer 添加 useCache 选项 ([#8072](https://github.com/nocobase/nocobase/pull/8072)) by @zhangzhonghe

  - 新增 `removeModelWithSubModels` 方法，用于递归移除模型及其子模型 ([#8064](https://github.com/nocobase/nocobase/pull/8064)) by @zhangzhonghe

- **[区块：网格卡片]** 网格卡片新增一页显示的行数配置，移除 pageSize 配置，改为自动计算 pageSize ([#8055](https://github.com/nocobase/nocobase/pull/8055)) by @katherinehhh

- **[审计日志]** 更新唯一标识字段为 `text` 类型，避免批量编辑时记录标识长度超出的问题 by @2013xile

- **[迁移管理]** 数据迁移后自动更新'自动编码'字段 by @cgyrock

### 🐛 修复

- **[client]**
  - 修复移除区块后筛选区块里已经配置的该区块的字段未删除的问题。 ([#8098](https://github.com/nocobase/nocobase/pull/8098)) by @gchust

  - 修复按钮隐藏后在非配置模式下出现多余间距的问题 ([#8092](https://github.com/nocobase/nocobase/pull/8092)) by @katherinehhh

  - 修复无法修改筛选表单中的重制按钮文字的问题。 ([#8089](https://github.com/nocobase/nocobase/pull/8089)) by @gchust

  - 修复字段筛选操作符为 $in 和 $notIn 时字段输入框不支持多个输入值的问题。 ([#8081](https://github.com/nocobase/nocobase/pull/8081)) by @gchust

  - 修复添加数据区块后不会自动出现在筛选表单的字段菜单中的问题。 ([#8085](https://github.com/nocobase/nocobase/pull/8085)) by @gchust

  - 筛选表单中的关系字段的配置菜单不应该显示快捷创建。 ([#8083](https://github.com/nocobase/nocobase/pull/8083)) by @gchust

  - 修复列表区块中关系子表格数据错误的问题 ([#8082](https://github.com/nocobase/nocobase/pull/8082)) by @katherinehhh

  - 修复数据表中设置的数值字段验证规则，在表单中未生效的问题 ([#8025](https://github.com/nocobase/nocobase/pull/8025)) by @katherinehhh

  - 修复筛选表单中的字段被字段后端验证规则限制的问题。 ([#8074](https://github.com/nocobase/nocobase/pull/8074)) by @gchust

  - 修复 json 字段快捷编辑报错 ([#8059](https://github.com/nocobase/nocobase/pull/8059)) by @katherinehhh

  - 修复子表格中大字段编辑回显异常问题 ([#8069](https://github.com/nocobase/nocobase/pull/8069)) by @katherinehhh

  - 修复对多关系下拉组件在关闭允许多选时快捷新增报错的问题 ([#8034](https://github.com/nocobase/nocobase/pull/8034)) by @katherinehhh

  - json 字段提交时应为对象 ([#8057](https://github.com/nocobase/nocobase/pull/8057)) by @katherinehhh

  - 修复无法使用回车按键触发筛选操作的问题。 ([#8056](https://github.com/nocobase/nocobase/pull/8056)) by @gchust

- **[flow-engine]**
  - 修复切换字段组件后旧组件的配置项还会显示在菜单里的问题。 ([#8095](https://github.com/nocobase/nocobase/pull/8095)) by @gchust

  - 将 useEffect 移至 FlowModelRenderer 中的条件返回之前 ([#8088](https://github.com/nocobase/nocobase/pull/8088)) by @zhangzhonghe

  - 修复筛选操作字段里出现不支持筛选的关系字段的问题。 ([#8086](https://github.com/nocobase/nocobase/pull/8086)) by @gchust

- **[acl]** 修复 acl.allow 被提前执行的问题 ([#8065](https://github.com/nocobase/nocobase/pull/8065)) by @chenos

- **[文件管理器]**
  - 修复List 区块、Grid card 区块中子详情数据展示错误问题 ([#8087](https://github.com/nocobase/nocobase/pull/8087)) by @katherinehhh

  - 修复阅读态子表格中 Attachment 字段数据未正常加载问题 ([#8073](https://github.com/nocobase/nocobase/pull/8073)) by @katherinehhh

- **[工作流]**
  - 修复执行记录画布中节点被删除后导致的报错 ([#8090](https://github.com/nocobase/nocobase/pull/8090)) by @mytharcher

  - 修复执行历史页面中当节点上的执行记录不存在时的报错 ([#8066](https://github.com/nocobase/nocobase/pull/8066)) by @mytharcher

- **[数据表字段：公式]** 修复无法将公式字段添加到筛选表单的问题。 ([#8071](https://github.com/nocobase/nocobase/pull/8071)) by @gchust

- **[区块：操作面板]** 优化操作面板 List 布局间距 ([#8084](https://github.com/nocobase/nocobase/pull/8084)) by @katherinehhh

- **[AI 员工]**
  - 修复AI添加数据源角色名称未被编译的问题 ([#8076](https://github.com/nocobase/nocobase/pull/8076)) by @heziqiang

  - 修复部分当前记录字段无法展示在变量选择列表里的问题。 ([#8053](https://github.com/nocobase/nocobase/pull/8053)) by @gchust

- **[操作：导入记录]** 导入的字段和导入权限设置的字段不匹配 ([#8075](https://github.com/nocobase/nocobase/pull/8075)) by @2013xile

- **[权限控制]** 给外部数据源添加数据表关联操作的权限判断中间件 ([#8062](https://github.com/nocobase/nocobase/pull/8062)) by @2013xile

- **[工作流：审批]**
  - 修复权限范围中包含变量时加载相关审批无数据的问题 by @mytharcher

  - 修复审批人提交表单中已填写的内容消失的问题 by @mytharcher

  - 修复在数据详情弹窗中加载相关审批时的权限报错 by @mytharcher

  - 修复分支模式和顺序会签时流程处理错误的问题 by @mytharcher

  - 修复加载审批列表时内存溢出的问题 by @mytharcher

  - 修复退回分支中无法使用审批节点结果中的审批记录数据的问题 by @mytharcher

  - 修复审批人弹窗不显示标题的问题 by @zhangzhonghe

  - 修复在仅角色并集模式下加载相关审批报错和无数据的问题 by @mytharcher

- **[邮件管理]**
  - 对异常数据进行兜底处理 by @jiannx

  - 不同步gmail的定时状态 by @jiannx

