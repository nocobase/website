### 🎉 新特性

- **[client]** 联动规则条件左侧支持变量 ([#6609](https://github.com/nocobase/nocobase/pull/6609)) by @katherinehhh

- **[工作流: 日期计算节点]** 增加 `changeTimezone` 函数以便在格式化前可以改变时区 by @mytharcher

### 🚀 优化

- **[client]**
  - 自定义请求支持表格选中记录 ([#6647](https://github.com/nocobase/nocobase/pull/6647)) by @katherinehhh

  - 为弹窗组件增加 delay API ([#6681](https://github.com/nocobase/nocobase/pull/6681)) by @mytharcher

### 🐛 修复

- **[database]** 修复 CI 编译错误 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie

- **[client]**
  - 修复审批节点配置中引用模板区块的添加按钮报错问题 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher

  - 工作流中字段描述显示[object Object] ([#6680](https://github.com/nocobase/nocobase/pull/6680)) by @katherinehhh

  - 修复上传组件语言问题 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher

  - 自定义的关系字段没有显示关系字段组件 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh

  - 联动规则兼容历史数据的问题 ([#6686](https://github.com/nocobase/nocobase/pull/6686)) by @katherinehhh

  - 懒加载组件不存在时界面报错 ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust

  - 补全原生的 Password 组件到封装过的输入组件 ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher

- **[工作流：人工处理节点]** 修复人工节点任务状态常量 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher

- **[操作：导入记录]** 修复导入包含时间字段的 xlsx 错误 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie

- **[工作流：自定义操作事件]** 修复测试用例 by @mytharcher

- **[备份管理器]** 还原时若备份未设置密码，但用户输入了密码，还原会出现超时报错 by @gchust

