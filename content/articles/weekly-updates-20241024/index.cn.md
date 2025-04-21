汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/tags/release-notes)。

NocoBase 目前更新包括两个分支：`main*` 和 `next` 。

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：内测版，包含一些未发布的新特性，这个版本可能还不完全稳定，适用于开发者或测试人员，用于提前体验新功能或进行兼容性测试。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/cn/blog/v1.3.32-beta)

*发布时间：2024-10-13*

### 🐛 修复

- **[client]** 关系字段设置必填，数据范围中设置变量后，选中值却报字段必填不通过 ([#5399](https://github.com/nocobase/nocobase/pull/5399)) by @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/cn/blog/v1.3.33-beta)

*发布时间：2024-10-17*

### 🚀 优化

- **[工作流]** 对更新数据节点的批量模式增加关于关系字段的提示 ([#5426](https://github.com/nocobase/nocobase/pull/5426)) by @mytharcher

### 🐛 修复

- **[client]**

  - 修复个人资料配置弹窗被子页面遮挡住的问题 ([#5409](https://github.com/nocobase/nocobase/pull/5409)) by @zhangzhonghe
  - 工作流节点变量不显示继承表字段 ([#5415](https://github.com/nocobase/nocobase/pull/5415)) by @chenos
  - 使用筛选区块筛选表格数据时，清空筛选数据查询数据分页器没有跟着调整 ([#5411](https://github.com/nocobase/nocobase/pull/5411)) by @katherinehhh
- **[文件管理器]** 移除文件表选择存储空间时仅加载 20 个的限制 ([#5430](https://github.com/nocobase/nocobase/pull/5430)) by @mytharcher
- **[操作：复制记录]** 修复批量编辑弹窗不显示内容的问题 ([#5412](https://github.com/nocobase/nocobase/pull/5412)) by @zhangzhonghe
- **[数据可视化]** 修复图表筛选区块中不显示默认值的问题 ([#5405](https://github.com/nocobase/nocobase/pull/5405)) by @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/cn/blog/v1.3.34-beta)

*发布时间：2024-10-21*

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

## [v1.3.35-beta](https://www.nocobase.com/cn/blog/v1.3.35-beta)

*发布时间：2024-10-21*

### 🚀 优化

- **[工作流：邮件发送节点]** 为邮件节点的表单项增加占位提示内容 ([#5470](https://github.com/nocobase/nocobase/pull/5470)) by @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/cn/blog/v1.3.36-beta)

*发布时间：2024-10-22*

### 🐛 修复

- **[数据表：树]** 修复继承的树表没有自动创建路径表的问题 ([#5486](https://github.com/nocobase/nocobase/pull/5486)) by @2013xile
- **[日历]** 当表格有数据时分页器应该显示 ([#5480](https://github.com/nocobase/nocobase/pull/5480)) by @katherinehhh
- **[文件管理器]** 修复由于上传规则 hook 改动导致文件无法上传的问题 ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher
- **[数据表字段：公式]** 修复 多层子表格嵌套时，公式计算结果的错误 ([#5469](https://github.com/nocobase/nocobase/pull/5469)) by @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/cn/blog/v1.3.37-beta)

*发布时间：2024-10-23*

### 🚀 优化

- **[client]** 调整绑定工作流配置面板中的提示文案 ([#5494](https://github.com/nocobase/nocobase/pull/5494)) by @mytharcher

### 🐛 修复

- **[文件管理器]** 修复文件表在关联区块内无法上传和删除记录的问题 ([#5493](https://github.com/nocobase/nocobase/pull/5493)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241016035453)

*发布时间：2024-10-16*

### 🎉 新特性

- **[sdk]** 支持通过设置环境变量 `API_CLIENT_STORAGE_TYPE` 将客户端信息存储到 sessionStorage ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[数据表字段：附件（URL）]** 新增 附件（URL）字段 by @katherinehhh

### 🚀 优化

- **[client]**

  - 优化远程调试 ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - 操作按钮单独使用图标时，图标居中 ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - 更新数据操作，操作成功后，提示信息默认自动关闭 ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[工作流：HTTP 请求节点]** 支持服务器发送事件（SSE） ([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 修复

- **[公开表单]** 修复 公开表单的设置点击缺陷 ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[client]**

  - 修复默认值输入框中不显示值的问题 ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - 修复当子表格设置了联动规则后，报找不到关系字段的错误 ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - 修复上传文件中非默认支持的文件类型缩略图显示异常的问题 ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[本地化]** 修复本地化插件中的翻译发布后不生效的问题 ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241017164316)

*发布时间：2024-10-18*

### 🎉 新特性

- **[工作流：循环节点]** 对循环节点增加更多控制选项 ([#5342](https://github.com/nocobase/nocobase/pull/5342)) by @mytharcher
  参考文档：[循环节点](https://docs-cn.nocobase.com/handbook/workflow-loop)
- **[工作流]** 为工作流的节点增加测试执行按钮，及实现测试功能的接口 ([#5407](https://github.com/nocobase/nocobase/pull/5407)) by @mytharcher
- **[字段组件: 掩码]** 新增掩码字段组件，支持将字段数据显示为掩码字符串 by @gchust
  参考文档：[掩码](https://docs-cn.nocobase.com/handbook/field-component-mask)

### 🚀 优化

- **[client]** 表格列标题一旦自定义之后，清空后恢复默认值 ([#5439](https://github.com/nocobase/nocobase/pull/5439)) by @katherinehhh

### 🐛 修复

- **[client]** 修复字段组件选项未被正确翻译的问题 ([#5442](https://github.com/nocobase/nocobase/pull/5442)) by @gchust
- **[工作流：HTTP 请求节点]** 修复请求节点测试功能中的错误消息 ([#5443](https://github.com/nocobase/nocobase/pull/5443)) by @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/cn/blog/v1.4.0-alpha.20241023053303)

*发布时间：2024-10-23*

### 🚀 优化

- **[client]** 子表格支持分页 ([#5450](https://github.com/nocobase/nocobase/pull/5450)) by @katherinehhh
- **[区块：看板]** 看板区块支持启用或禁用拖拽排序功能 ([#5468](https://github.com/nocobase/nocobase/pull/5468)) by @katherinehhh
- **[日历]** 日历控件，选择slot时展示 Add New 界面 ([#5483](https://github.com/nocobase/nocobase/pull/5483)) by @gu-zhichao
- **[多应用管理器]** 支持 USE_DB_SCHEMA_IN_SUBAPP 环境变量 ([#5481](https://github.com/nocobase/nocobase/pull/5481)) by @chenos
- **[工作流]** 增加卡片式表单域集合组件 ([#5464](https://github.com/nocobase/nocobase/pull/5464)) by @mytharcher

### 🐛 修复

- **[client]** markdown 区块弹窗刷新后变量值丢失的问题 ([#5478](https://github.com/nocobase/nocobase/pull/5478)) by @katherinehhh
- **[数据可视化]** 修复在数据可视化插件中使用外部 Oracle 数据源的若干问题，例如：日期格式化问题 ([#5436](https://github.com/nocobase/nocobase/pull/5436)) by @2013xile
- **[文件管理器]** 修复由于上传规则 hook 改动导致文件无法上传的问题 ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher

---

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
