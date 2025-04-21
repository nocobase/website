### 🎉 新特性

- **[client]** 添加 app.getHref() 方法 ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

### 🚀 优化

- **[client]**
  - 支持绑定工作流时进行排序 ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher

  - 将运算引擎的说明文档链接修改为指向文档站 ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher

  - 下拉多选组件支持 maxTagCount: 'responsive' ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh

  - 筛选区块中时间范围的结束时分秒默认到 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh

- **[操作：批量编辑]** 批量编辑中提交按钮移除字段赋值和联动规则配置项 ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

### 🐛 修复

- **[client]**
  - 修复 富文本字段设置必填后，填写数据删除后，必填无效 ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh

  - 修复 操作列按钮隐藏时没有左对齐的问题 ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh

  - 修复 在 REST API 配置页面点击 Collections 标签导致 Create Collections 按钮异常的问题 ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh

  - 修复一对多关联的 targetKey 无法选择 NanoID 字段 ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh

  - 修复紧凑模式下配置按钮错位问题 ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh

  - 修复列表组件样式 ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher

  - 修复客户端请求中携带的 headers 被覆盖的问题 ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile

  - 修复外键、目标数据表标识字段 和源数据表标识字段 不支持中文检索的问题 ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh

- **[操作：导入记录]** 修复无法导入使用不同 target key 的多对多关联的问题 ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice

- **[区块：地图]** 详情区块中的地图字段，应显示地图 ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh

- **[嵌入 NocoBase]** Embed 的 token 与 auth 存在冲突 by @chenos

