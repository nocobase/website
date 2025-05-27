### 🐛 修复

- **[client]**
  - 当改变筛选表单的关系字段组件为数据选择器时，没有“允许多选”配置项 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe

  - 筛选表单中的表格选择器，样式异常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe

  - 嵌套的子页面中，鼠标悬浮在“创建区块”按钮时不显示区块列表 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe

  - 表单中多个关系字段展示关系表字段时会导致关系字段不提交 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh

  - 表格行内按钮拖拽时无法将其他按钮拖动至「复制」按钮 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh

  - 阅读模式下子表格分页栏被遮住 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh

- **[database]** 修复多对一关系字段在 MariaDB 下外键为大整数配置了 appends 时无法加载的问题 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher

- **[数据表字段：附件（URL）]** 联动规则中附件（URL）字段不应支持配置 value ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

