### 🎉 新特性

- **[test]** 筛选表单中的关系字段支持配置是否多选 ([#5451](https://github.com/nocobase/nocobase/pull/5451)) by @zhangzhonghe

- **[client]** 添加一个名为“上级对象”的变量 ([#5449](https://github.com/nocobase/nocobase/pull/5449)) by @zhangzhonghe
参考文档：[上级对象](https://docs-cn.nocobase.com/handbook/ui/variables#%E4%B8%8A%E7%BA%A7%E5%AF%B9%E8%B1%A1)
### 🐛 修复

- **[client]**
  - 修复 URL 查询参数变量不会被解析的问题 ([#5454](https://github.com/nocobase/nocobase/pull/5454)) by @zhangzhonghe

  - 多层关系下的子表格中关系字段设置数据范围后，选择关系数据后其他行记录被清空 ([#5441](https://github.com/nocobase/nocobase/pull/5441)) by @katherinehhh

  - 修复表格行选中时的背景颜色 ([#5445](https://github.com/nocobase/nocobase/pull/5445)) by @mytharcher

- **[区块：地图]** 表格中的地图字段不应该有缩放等级配置项 ([#5457](https://github.com/nocobase/nocobase/pull/5457)) by @katherinehhh

- **[文件管理器]** 屏蔽阅读模式下附件字段对存储规则不必要的查询 ([#5447](https://github.com/nocobase/nocobase/pull/5447)) by @mytharcher

- **[数据源：主数据库]** 修复由于更换组件导致的 E2E 测试不通过 ([#5437](https://github.com/nocobase/nocobase/pull/5437)) by @mytharcher

