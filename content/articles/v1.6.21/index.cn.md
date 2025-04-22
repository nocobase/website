### 🚀 优化

- **[client]** 为弹窗组件增加 delay API ([#6681](https://github.com/nocobase/nocobase/pull/6681)) by @mytharcher

- **[create-nocobase-app]** 升级部分依赖的版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

### 🐛 修复

- **[client]**
  - 修复审批节点配置中引用模板区块的添加按钮报错问题 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher

  - 自定义的关系字段没有显示关系字段组件 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh

  - 修复上传组件语言问题 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher

  - 懒加载组件不存在时界面报错 ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust

  - 补全原生的 Password 组件到封装过的输入组件 ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher

  - 字段赋值本表字段列表中显示了继承表字段，应只显示本表字段 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh

- **[database]** 修复 CI 编译错误 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie

- **[build]** 插件依赖 AMD 库时构建产物不正确 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust

- **[操作：导入记录]** 修复导入包含时间字段的 xlsx 错误 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie

- **[工作流：人工处理节点]** 修复人工节点任务状态常量 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher

- **[区块：iframe]** iframe 区块设置全高时页面出现滚动条 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh

- **[工作流：自定义操作事件]** 修复测试用例 by @mytharcher

- **[备份管理器]** 还原时若备份未设置密码，但用户输入了密码，还原会出现超时报错 by @gchust

