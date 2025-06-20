### 🚀 优化

- **[client]**
  - 网格卡片区块操作栏为空时自动隐藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe

  - Logo 容器宽度根据内容类型自适应（图片固定 168px，文本自动宽度） ([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038

- **[验证]** 移除 `verifiers:listByUser` 接口中响应的认证器配置信息 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

### 🐛 修复

- **[client]**
  - 修复子表格字段切换页面后必填提示不消失的问题 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh

  - 修复 子表格列字段 style 条件判断无效的问题 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh

  - 修复金额字段组件从掩码改为数字后小数点丢失的问题 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh

  - 修复公开表单字段默认值中 URL 查询参数变量无效的问题 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh

  - 筛选表单中，通过关系表字段筛选无效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe

  - 修复子表格中 Markdown（Vditor）字段组件渲染不正确的问题 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh

- **[database]** 修复 updateOrCreate 和 firstOrCreate 不支持关系更新的问题 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos

- **[数据表字段：多对多 (数组)]** 存在 `updatedBy` 字段的时，更新多对多（数组）字段报错 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile

- **[数据表字段：自动编码]** 修复基于字符串的大整数序列计算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher

- **[公开表单]** 公开表单：修复提交表单时报无权限的问题 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

