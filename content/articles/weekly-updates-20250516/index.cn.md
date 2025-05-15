汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/cn/blog/v1.6.28)

*发布时间：2025-05-09*

#### 🐛 修复

- **[database]** 导入文本字段是数字值时失败 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
- **[client]** 被隐藏的字段，依然会显示出来 ([#6844](https://github.com/nocobase/nocobase/pull/6844)) by @zhangzhonghe
- **[操作：导出记录]** 修复导出长文本错误 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[工作流：操作后事件]** 修复操作后事件中当前操作者变量在 Handlebars 模板中无法访问属性的问题 ([#6837](https://github.com/nocobase/nocobase/pull/6837)) by @mytharcher
- **[区块：操作面板]** 操作面板在暗黑模式下颜色不对 ([#6842](https://github.com/nocobase/nocobase/pull/6842)) by @zhangzhonghe
- **[操作：导出记录 Pro]** 修复导出长文本错误 by @aaaaaajie

### [v1.6.29](https://www.nocobase.com/cn/blog/v1.6.29)

*发布时间：2025-05-13*

#### 🚀 优化

- **[工作流]** 支持复制任意多版本的草稿 ([#6851](https://github.com/nocobase/nocobase/pull/6851)) by @mytharcher

#### 🐛 修复

- **[操作：导出记录]** 导出多级关联关系和附件 URL 时的空值问题。 ([#6845](https://github.com/nocobase/nocobase/pull/6845)) by @aaaaaajie
- **[工作流：人工处理节点]** 修复待办中心计数错误问题 ([#6783](https://github.com/nocobase/nocobase/pull/6783)) by @mytharcher
- **[工作流：测试工具包]** 修复由于缺少必要插件造成失败的测试用例 ([#6839](https://github.com/nocobase/nocobase/pull/6839)) by @mytharcher
- **[数据可视化]** 修复筛选嵌套多对多字段报错 ([#6855](https://github.com/nocobase/nocobase/pull/6855)) by @2013xile
- **[工作流：子流程]** 修复不存在触发器时导致的页面崩溃 by @mytharcher
- **[文件存储：S3 (Pro)]** 访问地址有效期无效 by @jiannx
- **[工作流：审批]** 修复待办中心计数错误问题 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.30](https://www.nocobase.com/cn/blog/v1.7.0-beta.30)

*发布时间：2025-05-08*


## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/cn/blog/v1.7.0-alpha.13)

*发布时间：2025-05-08*


NocoBase 是一个极易扩展的开源无代码开发平台。完全掌控，无限扩展，助力你的开发团队快速响应变化，显著降低成本，不必投入几年时间和数百万资金研发，只需要花几分钟部署 NocoBase。

**[访问 NocoBase 官网](https://www.nocobase.com/cn)**

您可以在官网申请 Demo 演示，体验站点将在 1 分钟内创建完毕自动发送到您的邮箱。

**访问 NocoBase [GitHub](https://github.com/nocobase/nocobase) 和 [Gitee](https://gitee.com/nocobase/nocobase)**

下载 NocoBase 源码并安装。支持 Docker 安装、create-nocobase-app 安装和 Git 源码安装。

**[官方文档](https://docs-cn.nocobase.com/)持续更新中**
