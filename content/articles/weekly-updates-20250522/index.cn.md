汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.31](https://www.nocobase.com/cn/blog/v1.6.31)

*发布时间：2025-05-18*

#### 🚀 优化

- **[工作流]** 补全英文语言内容 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

#### 🐛 修复

- **[database]** 处理导入字段是字符串类型的空白单元格报错 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[client]**

  - 添加关联表格时未全部过滤已关联的数据 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - 子表单中放出关联字段时未提交关联数据 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 拖拽排序字段未正确显示所有可选字段 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
- **[工作流]** 修复循环触发限制更新后数据表事件触发不正确 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[区块：操作面板]** 读取扫码器中的路由 basename，以适配桌面端。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[工作流：人工处理节点]** 修复展示未处理待办时的渲染错误 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[工作流：审批]** 修复转签和加签时选择指派人的列表加载问题 by @mytharcher

### [v1.6.32](https://www.nocobase.com/cn/blog/v1.6.32)

*发布时间：2025-05-20*

#### 🐛 修复

- **[client]**
  - 删除表格数据后分页未正确跳转 ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - 关系字段使用级联组件时，在弹窗首次打开未显示数据 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.32](https://www.nocobase.com/cn/blog/v1.7.0-beta.32)

*发布时间：2025-05-19*

#### 🎉 新特性

- **[client]** 单行文本字段支持输入多个关键词进行筛选 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
  参考文档：[多关键词筛选](https://pr-366.docs-cn.nocobase.com/handbook/multi-keyword-filter)
- **[多关键词筛选]** 单行文本字段支持输入多个关键词进行筛选 by @zhangzhonghe
  参考文档：[多关键词筛选](https://pr-366.docs-cn.nocobase.com/handbook/multi-keyword-filter)
- **[模板打印]** 模板打印新增批量打印功能支持。 by @sheldon66

#### 🚀 优化

- **[工作流]** 补全英文语言内容 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 关系字段使用级联组件时，在弹窗首次打开未显示数据 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 子表单中放出关联字段时未提交关联数据 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 拖拽排序字段未正确显示所有可选字段 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 表单中数据选择器表格的数据范围应支持当前表单变量 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 添加关联表格时未全部过滤已关联的数据 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
- **[database]** 处理导入字段是字符串类型的空白单元格报错 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[工作流：人工处理节点]** 修复展示未处理待办时的渲染错误 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[文件管理器]** 修复类型 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
- **[区块：操作面板]** 读取扫码器中的路由 basename，以适配桌面端。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[AI 集成]** 修复 LLM 服务配置页面和验证配置页面切换不显示内容的问题 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流]** 修复循环触发限制更新后数据表事件触发不正确 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[工作流：审批]** 修复转签和加签时选择指派人的列表加载问题 by @mytharcher
- **[备份管理器]** 修复编译时的类型错误 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.14](https://www.nocobase.com/cn/blog/v1.7.0-alpha.14)

*发布时间：2025-05-21*

#### 🎉 新特性

- **[client]**

  - 单行文本字段支持输入多个关键词进行筛选 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
    参考文档：[多关键词筛选](https://pr-366.docs-cn.nocobase.com/handbook/multi-keyword-filter)
  - 表单中的操作按钮联动规则 支持「当前表单」变量 ([#6810](https://github.com/nocobase/nocobase/pull/6810)) by @katherinehhh
- **[build]** 支持商业授权 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[undefined]** 添加导入插件日志 by @aaaaaajie
- **[操作：导入记录]** 添加导入插件日志 ([#6841](https://github.com/nocobase/nocobase/pull/6841)) by @aaaaaajie
- **[plugin-commercial]** 支持商业授权 by @jiannx
- **[多关键词筛选]** 单行文本字段支持输入多个关键词进行筛选 by @zhangzhonghe
  参考文档：[多关键词筛选](https://pr-366.docs-cn.nocobase.com/handbook/multi-keyword-filter)
- **[模板打印]**

  - 模板打印新增批量打印功能支持。 by @sheldon66
  - 模板打印新增批量打印功能支持。 by @sheldon66

#### 🚀 优化

- **[undefined]** 构建 Full 版本 Docker 镜像 ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos
- **[client]**

  - 优化页面越用越卡的问题 ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe
  - 增加阅读状态图片的内置尺寸选项 ([#6868](https://github.com/nocobase/nocobase/pull/6868)) by @katherinehhh
- **[工作流]**

  - 补全英文语言内容 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher
  - 支持复制任意多版本的草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher
- **[数据表字段：附件（URL）]** attachment URL 字段支持更多阅读状态的内置尺寸 ([#6871](https://github.com/nocobase/nocobase/pull/6871)) by @katherinehhh
- **[邮件管理]**

  - 修复同步异常及其他不好用问题 by @jiannx
  - 添加草稿管理，支持下属邮件查看 by @jiannx

#### 🐛 修复

- **[client]**

  - 操作按钮禁用联动规则未生效 ([#6896](https://github.com/nocobase/nocobase/pull/6896)) by @katherinehhh
  - 删除表格数据后分页未正确跳转 ([#6892](https://github.com/nocobase/nocobase/pull/6892)) by @katherinehhh
  - 关系字段使用级联组件时，在弹窗首次打开未显示数据 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 添加关联表格时未全部过滤已关联的数据 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
  - 子表单中放出关联字段时未提交关联数据 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 表单中数据选择器表格的数据范围应支持当前表单变量 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 拖拽排序字段未正确显示所有可选字段 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 联动规则切换操作符时应清空右侧变量值 ([#6862](https://github.com/nocobase/nocobase/pull/6862)) by @katherinehhh
  - 联动规则中切换操作符时操作符缺失 ([#6857](https://github.com/nocobase/nocobase/pull/6857)) by @katherinehhh
  - 详情区块联动规则按钮缺陷 ([#6867](https://github.com/nocobase/nocobase/pull/6867)) by @katherinehhh
  - 联动规则中对日期变量的操作符判断逻辑错误 ([#6825](https://github.com/nocobase/nocobase/pull/6825)) by @katherinehhh
  - 被隐藏的字段，依然会显示出来 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
  - 二次确认变量解析不兼容{{title}}数据 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 二次确认变量解析不兼容{{title}}数据 ([#6838](https://github.com/nocobase/nocobase/pull/6838)) by @katherinehhh
  - 改进联动规则表达式赋值组件样式 ([#6836](https://github.com/nocobase/nocobase/pull/6836)) by @katherinehhh
- **[database]** 处理导入字段是字符串类型的空白单元格报错 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[build]** 修复plugin-workflow-javascript前端运行，process undefine 错误 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[文件管理器]**

  - 修复非图片文件的预览地址 ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher
  - 修复类型 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
  - 修复无外键权限时创建文件记录 URL 无效的问题 ([#6863](https://github.com/nocobase/nocobase/pull/6863)) by @mytharcher
- **[区块：操作面板]**

  - 读取扫码器中的路由 basename，以适配桌面端。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
  - 操作面板在暗黑模式下颜色不对 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[AI 集成]** 修复 LLM 服务配置页面和验证配置页面切换不显示内容的问题 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流：人工处理节点]**

  - 修复由于插件移出默认开启列表导致的测试用例问题 ([#6895](https://github.com/nocobase/nocobase/pull/6895)) by @mytharcher
  - 修复展示未处理待办时的渲染错误 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
  - 修复待办中心计数错误问题 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[工作流]**

  - 修复循环触发限制更新后数据表事件触发不正确 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
  - 修复直接打开待办中心弹窗链接后无法后退关闭的问题 ([#6853](https://github.com/nocobase/nocobase/pull/6853)) by @mytharcher
- **[数据可视化]**

  - 在区块级别操作中打开弹窗，添加图表不显示 ([#6864](https://github.com/nocobase/nocobase/pull/6864)) by @2013xile
  - 修复筛选嵌套多对多字段报错 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[操作：导出记录]**

  - 导入导出字段配置中删除字段严重卡顿 ([#6861](https://github.com/nocobase/nocobase/pull/6861)) by @katherinehhh
  - 导出多级关联关系和附件 URL 时的空值问题。 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[区块：模板]** 保存为继承模版后弹窗渲染错误 ([#6840](https://github.com/nocobase/nocobase/pull/6840)) by @gchust
- **[操作：复制记录]** 复制数据后编辑时，首次点击字段输入会关闭弹窗的问题 ([#6848](https://github.com/nocobase/nocobase/pull/6848)) by @katherinehhh
- **[工作流：测试工具包]** 修复由于缺少必要插件造成失败的测试用例 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[工作流：操作后事件]** 修复操作后事件中当前操作者变量在 Handlebars 模板中无法访问属性的问题 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[plugin-commercial]**

  - 修复商业授权日志上报到crm和文案翻译 by @jiannx
  - use prototype to implement withCommercial function by @jiannx
- **[操作：导出记录 Pro]**

  - pro 导入导出字段配置中删除字段卡顿 by @katherinehhh
  - 修复导出长文本错误 by @aaaaaajie
- **[工作流：子流程]** 修复不存在触发器时导致的页面崩溃 by @mytharcher
- **[模板打印]**

  - 修复格式化器找不到问题。 by @sheldon66
  - 修复格式化器未找到 by @sheldon66
- **[文件存储：S3 (Pro)]**

  - 访问地址有效期无效 by @jiannx
  - 变更为使用数据表字段来定位存储引擎 by @mytharcher
- **[工作流：审批]**

  - 修复待办中心计数错误问题 by @mytharcher
  - 修复转签和加签时选择指派人的列表加载问题 by @mytharcher
- **[邮件管理]**

  - 修复ts错误 by @jiannx
  - 列表接口支持主题合并 by @jiannx
- **[备份管理器]** 修复编译时的类型错误 by @mytharcher

NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
