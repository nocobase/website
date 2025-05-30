汇总一周产品更新日志，最新发布可以[前往我们的博客查看](https://www.nocobase.com/cn/blog/timeline)。

**NocoBase 目前更新包括的版本更新包括三个分支：`main` ，`next`和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

`main` ：截止目前最稳定的版本，推荐安装此版本。

`next`：包含即将发布的新功能，经过初步测试的版本，可能存在部分已知或未知问题。主要面向测试用户,用于收集反馈和进一步优化功能。适合愿意提前体验新功能并提供反馈的测试用户。

`develop`：开发中的版本，包含最新的功能代码，可能尚未完成或存在较多不稳定因素，主要用于内部开发和快速迭代。适合对产品功能前沿发展感兴趣的技术用户，但可能存在较多问题或不完整功能，不建议在生产环境中使用。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/cn/blog/v1.6.18)

*发布时间：2025-04-11*

#### 🚀 优化

- **[client]**

  - 为 `Variable.Input` 组件增加默认退避类型的 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - 优化未配置页面时的提示 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[工作流：延时节点]** 支持延迟时间使用变量 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher
- **[工作流：自定义操作事件]** 为触发工作流按钮增加刷新配置项 by @mytharcher

#### 🐛 修复

- **[client]**

  - 子表格中描述信息与操作按钮遮挡 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - 弹窗表单在 horizontal 布局下初始宽度计算错误，导致出现提示和 下划虚线 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[文件存储：S3 (Pro)]** 修复next调用缺少await by @jiannx
- **[邮件管理]** 修复next调用缺少await by @jiannx

### [v1.6.19](https://www.nocobase.com/cn/blog/v1.6.19)

*发布时间：2025-04-14*

#### 🐛 修复

- **[client]**
  - 修复预览图片被遮挡的问题 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  - 表单区块中，字段配置的默认值会先显示为原始变量字符串然后再消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/cn/blog/v1.6.20)

*发布时间：2025-04-14*

#### 🎉 新特性

- **[部门]** 商业插件部门、附件 URL、工作流响应消息改为免费提供 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

#### 🐛 修复

- **[client]**

  - 筛选表单不应该显示“未保存修改”提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  - 筛选表单中关系字段的“允许多选”设置项不生效 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  - 筛选表单中，当点击筛选按钮时，如果有字段未校验通过，依然会触发筛选的问题 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  - 切换到分组菜单时，不应该跳转到已经在菜单中被隐藏的页面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
- **[文件存储：S3 (Pro)]**

  - 整理语言文案 by @jiannx
  - baseurl 和 public 设置不再互相关联，改进 S3 pro 存储的配置交互体验 by @jiannx
- **[迁移管理]** 迁移时若弹出环境变量弹窗，跳过自动备份选项会失效 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/cn/blog/v1.7.0-beta.15)

*发布时间：2025-04-10*

#### 🚀 优化

- **[工作流：延时节点]** 支持延迟时间使用变量 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

#### 🐛 修复

- **[工作流]** 修复创建执行记录使用非安全整型 ID 时内存溢出的问题 ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher
- **[区块：模板]** 当页面区块使用的引用模板已经被删除，保存为模板不成功 ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/cn/blog/v1.7.0-beta.16)

*发布时间：2025-04-12*

#### 🚀 优化

- **[client]**

  - 为 `Variable.Input` 组件增加默认退避类型的 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - 优化未配置页面时的提示 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[工作流：自定义操作事件]** 为触发工作流按钮增加刷新配置项 by @mytharcher

#### 🐛 修复

- **[client]**

  - 工作流节点编辑抽屉标题显示为 [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh
  - 子表格中描述信息与操作按钮遮挡 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - 变量输入框样式不正确 ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust
  - 弹窗表单在 horizontal 布局下初始宽度计算错误，导致出现提示和 下划虚线 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[工作流]** 修复应用启动时工作流统计信息未加载的问题 ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/cn/blog/v1.7.0-beta.17)

*发布时间：2025-04-15*

#### 🎉 新特性

- **[部门]** 商业插件部门、附件 URL、工作流响应消息改为免费提供 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos
- **[操作：批量更新]** 支持在更新区块数据后刷新其它区块的数据 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

#### 🚀 优化

- **[工作流]** 待办中心支持固定弹窗 URL ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

#### 🐛 修复

- **[client]**

  - 切换到分组菜单时，不应该跳转到已经在菜单中被隐藏的页面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
  - 筛选表单不应该显示“未保存修改”提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  - 修复预览图片被遮挡的问题 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  - 筛选表单中，当点击筛选按钮时，如果有字段未校验通过，依然会触发筛选的问题 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  - 筛选表单中关系字段的“允许多选”设置项不生效 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  - 表单区块中，字段配置的默认值会先显示为原始变量字符串然后再消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe
- **[数据表字段：附件（URL）]** 附件 URL 字段中过滤掉不支持公共访问的文件表 ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh
- **[文件存储：S3 (Pro)]**

  - baseurl 和 public 设置不再互相关联，改进 S3 pro 存储的配置交互体验 by @jiannx
  - 整理语言文案 by @jiannx
- **[工作流：审批]** 在待办中心支持审批项目的固定 URL by @mytharcher
- **[迁移管理]** 迁移时若弹出环境变量弹窗，跳过自动备份选项会失效 by @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/cn/blog/v1.7.0-beta.18)

*发布时间：2025-04-16*

#### 🎉 新特性

- **[数据表字段：代码]** 增加代码字段 by @mytharcher

#### 🚀 优化

- **[create-nocobase-app]** 升级部分依赖的版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

#### 🐛 修复

- **[client]**

  - 字段赋值本表字段列表中显示了继承表字段，应只显示本表字段 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh
  - 表单字段设置默认值，变量输入框样式显示异常 ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh
- **[build]** 插件依赖 AMD 库时构建产物不正确 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust
- **[区块：iframe]** iframe 区块设置全高时页面出现滚动条 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh
- **[权限控制]** 修复角色数据模型缓存序列化时的报错问题 ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher
- **[工作流]** 修复 MySQL 执行迁移脚本的报错 ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher
- **[邮件管理]** 修复无法同步，无标题显示等其他小问题 by @jiannx
