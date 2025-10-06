### 🚀 优化

- **[client]** 支持预览图片时旋转图片 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher

- **[工作流]** 将调度相关逻辑拆分为独立的调度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 修复

- **[client]** 修复左侧菜单栏子菜单不能正确高亮的问题 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu

- **[工作流：循环节点]** 修复了循环节点条件未满足时仍错误继续到下一项的问题 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher

- **[工作流]**
  - 修复由于队列处理不当导致的工作流重复执行问题 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher

  - 修复绑定工作流配置中加载关系字段上下文的工作流列表条件错误的问题 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher

  - 修复基于日期字段的定时任务到期后不触发的问题 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

