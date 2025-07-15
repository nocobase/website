### 🚀 优化

- **[数据表字段：公式]** 增加更多可计算的字段类型 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher

- **[工作流]** 在执行计划由于状态不可执行时用日志替代抛错 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher

- **[工作流：审批]** 支持当关联业务数据删除时，同时删除审批数据 by @mytharcher

### 🐛 修复

- **[client]**
  - 修复联动规则左侧变量无法选中附件字段的问题 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe

  - 修复在 IOS 中下拉选择组件被键盘遮挡的问题 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe

  - 修复编辑表单中联动规则为选项字段同时设置赋值和选项内容时赋值失效的问题 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh

  - 筛选折叠面板：字段设置默认值后页面初始化没有触发筛选 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe

  - 修复列表区块字段赋值操作中选用看板排序字段时报错的问题 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh

  - 子菜单切换时浏览器标签标题未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe

  - 打开弹窗操作：切换 Tab 标签之后页面显示不符合预期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe

- **[acl]** 修复在使用包含 root 角色的并集模式下删除角色时报错的问题。 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie

- **[多应用管理器]** 修复认证选项出现在意外的位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher

- **[用户认证]** 修复登录页面不能滚动的问题 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe

- **[工作流：审批]** 修复提交审批时的关系数据 by @mytharcher

