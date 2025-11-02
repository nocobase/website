### 🐛 修复

- **[client]**
  - 解决了当前表单中关联字段变量无法正确识别的情况，确保表单中的数据处理更准确。 ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust

  - 当变量解析结果为数组并被设置为“对一”字段的值或默认值时会导致错误的问题现已修复。此修复确保了对变量解析结果的正确处理，提高了系统的稳定性和准确性。 ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust

- **[权限控制]** 修复 `resourceManager` 的中间件顺序 ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

