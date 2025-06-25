汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/cn/blog/v1.7.17)

*发布时间：2025-06-24*

#### 🐛 修复

- **[client]**

  - 修复日期字段在含时间格式下的范围约束错误 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
  - URL 查询参数变量为空时，数据范围的条件没有被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
- **[移动端]** 修复移动端弹窗的层级问题 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[日历]** 修复日历区块快速创建事项时，表单日期字段异常问题 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

### [v1.7.16](https://www.nocobase.com/cn/blog/v1.7.16)

*发布时间：2025-06-20*

#### 🐛 修复

- **[工作流]**

  - 修复已执行数在大整型数时检查错误的问题 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - 修复统计数据被不是主版本的工作流级联删除的问题 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
- **[操作：导入记录]** 修复批量导入用户名和密码后无法登录的问题 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[工作流：审批]** 限制只有参与者可以查看审批详情 by @mytharcher

### [v1.7.15](https://www.nocobase.com/cn/blog/v1.7.15)

*发布时间：2025-06-18*

#### 🐛 修复

- **[client]**

  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - 字段赋值：关系字段无法被清空数据 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - 表格列的文本对齐功能无效 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
- **[工作流]** 修复已执行数在大整型数时检查错误的问题 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[文件管理器]** 修复审批处理中附件字段无法被更新的问题 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[工作流：审批]** 使用比较代替隐式逻辑以避免类型问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/cn/blog/v1.8.0-beta.10)

*发布时间：2025-06-19*

#### 🎉 新特性

- **[工作流：审批]** 审批节点结果中增加审批记录变量 by @mytharcher

#### 🐛 修复

- **[client]**

  - 表格列的文本对齐功能无效 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
  - 字段赋值：关系字段无法被清空数据 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[文件管理器]** 修复审批处理中附件字段无法被更新的问题 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[工作流]** 修复已执行数在大整型数时检查错误的问题 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[工作流：审批]** 使用比较代替隐式逻辑以避免类型问题 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/cn/blog/v1.8.0-alpha.10)

*发布时间：2025-06-25*

#### 🎉 新特性

- **[数据源管理]** ✨ 支持外部数据源按需加载数据表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[工作流：HTTP 请求节点]** 支持 `multipart/form-data` 类型的请求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992
- **[数据源：外部 SQL Server]** 支持外部数据源按需加载数据表 by @aaaaaajie

#### 🐛 修复

- **[client]**

  - URL 查询参数变量为空时，数据范围的条件没有被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
  - 修复日期字段在含时间格式下的范围约束错误 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
- **[移动端]** 修复移动端弹窗的层级问题 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[日历]** 修复日历区块快速创建事项时，表单日期字段异常问题 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh
- **[工作流：审批]**

  - 修复变量历史遗留 API 导致的错误 by @mytharcher
  - 修复移动端样式 by @mytharcher
  - 修复审批关联表被删除后的报错 by @mytharcher
- **[邮件管理]** 附件不显示 by @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/cn/blog/v1.8.0-alpha.9)

*发布时间：2025-06-20*

#### 🎉 新特性

- **[client]** 支持外部数据源中的 SQL Server BIT 字段 ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
- **[数据源：外部 SQL Server]** Added support for SQL Server BIT field in external data sources by @aaaaaajie
- **[工作流：审批]** 审批节点结果中增加审批记录变量 by @mytharcher

#### 🚀 优化

- **[client]** 网格卡片区块操作栏为空时自动隐藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
- **[验证]** 移除 `verifiers:listByUser` 接口中响应的认证器配置信息 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile
- **[工作流]** 调整 `getCollectionFieldOptions` 方法的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher
- **[工作流：操作前事件]** 调整变量 API by @mytharcher
- **[工作流：审批]** 调整变量 API by @mytharcher

#### 🐛 修复

- **[client]**

  - 表格列的文本对齐功能无效 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
  - 字段赋值：关系字段无法被清空数据 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - 对每个字段使用独立的变量范围 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - 修复 子表格列字段 style 条件判断无效的问题 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - 筛选表单中，通过关系表字段筛选无效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
  - 修复公开表单字段默认值中 URL 查询参数变量无效的问题 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - 修复子表格字段切换页面后必填提示不消失的问题 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - 点击筛选按钮报错 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
- **[database]** 修复 updateOrCreate 和 firstOrCreate 不支持关系更新的问题 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[工作流]**

  - 修复统计数据被不是主版本的工作流级联删除的问题 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
  - 修复已执行数在大整型数时检查错误的问题 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - 修复已执行数在大整型数时检查错误的问题 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[操作：导入记录]** 修复批量导入用户名和密码后无法登录的问题 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[数据表字段：多对多 (数组)]** 存在 `updatedBy` 字段的时，更新多对多（数组）字段报错 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[文件管理器]** 修复审批处理中附件字段无法被更新的问题 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[公开表单]** 公开表单：修复提交表单时报无权限的问题 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe
- **[数据表字段：自动编码]** 修复基于字符串的大整数序列计算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[工作流：审批]**

  - 使用比较代替隐式逻辑以避免类型问题 by @mytharcher
  - 限制只有参与者可以查看审批详情 by @mytharcher
- **[邮件管理]** 邮件删除报错 by @jiannx
