### 🎉 新特性

- **[部门]** 商业插件部门、附件 URL、工作流响应消息改为免费提供 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

- **[操作：批量更新]** 支持在更新区块数据后刷新其它区块的数据 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

### 🚀 优化

- **[工作流]** 待办中心支持固定弹窗 URL ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

### 🐛 修复

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

