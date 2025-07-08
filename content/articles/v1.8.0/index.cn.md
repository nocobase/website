## [v1.8.0](https://github.com/nocobase/nocobase/compare/v1.7.20...v1.8.0) - 2025-07-07

## 新特性

### 新增「忘记密码」功能，支持邮箱找回

支持通过邮件找回密码。在「设置 > 用户认证 > 忘记密码」中启用该功能，配置邮件通知渠道，并自定义重置密码邮件内容（支持变量与 HTML 格式）。

![20250707104631_rec_-ihynhs.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

参考文档：[忘记密码](https://docs-cn.nocobase.com/handbook/auth/user#%E5%BF%98%E8%AE%B0%E5%AF%86%E7%A0%81)

### 自定义聚合变量

支持创建计数、求和、平均值等统计变量，可用于菜单徽章、页面标签等位置，让界面展示更加直观、信息更丰富。

![20250707110736_rec_-fzpk98.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

参考文档：[自定义变量](https://docs-cn.nocobase.com/handbook/custom-variables)

### 邮件管理

邮件管理模块全面升级，支持邮件删除、批量发送、同步设置、AI 生成内容及多项体验优化。

![image-fyxonb.png](https://static-docs.nocobase.com/image-fyxonb.png)

### 数据源

支持外部数据源中的 SQL Server BIT 字段，支持外部数据源按需加载数据表

![image-h3tk70.png](https://static-docs.nocobase.com/image-h3tk70.png)

### 文本复制

支持一键复制文本字段内容

![20250707105447_rec_-m25b6x.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [工作流：HTTP 请求节点] 支持 `multipart/form-data` 类型

在工作流中配置 HTTP 请求节点时，现已支持选择 `multipart/form-data` 类型。启用该类型后，可在请求 Body 中以 `form-data` 方式传递数据，支持包含 `file` 类型字段，实现文件上传等场景。

![image-gutu74.png](https://static-docs.nocobase.com/image-gutu74.png)

### [工作流：审批] 审批节点结果支持生成审批记录变量

审批节点执行结果可作为变量供后续节点使用，支持状态与数据自动记录

![20250614095052](https://static-docs.nocobase.com/20250614095052.png)

参考文档：[节点结果](https://docs-cn.nocobase.com/handbook/workflow-approval/node#%E8%8A%82%E7%82%B9%E7%BB%93%E6%9E%9C)

## 优化

### 支持在输入框中扫码填充数据

通用文本输入框组件新增 Enable Scan 配置项，启用后将在输入框右侧显示扫码按钮，支持扫码设备录入，并可配置是否允许手动输入。

![image-u7gfro.png](https://static-docs.nocobase.com/image-u7gfro.png)

参考文档：[扫码录入](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Markdown 中支持本地化

Markdown 内容现已支持本地化，可使用 `{{t 'xxx'}}` 语法插入多语言文本。

![20250707132207_rec_-a1fu68.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

参考文档：[本地化](https://docs-cn.nocobase.com/handbook/ui/blocks/other-blocks/markdown#%E6%9C%AC%E5%9C%B0%E5%8C%96)

### 菜单链接支持新窗口打开

菜单链接新增“Open in new window”配置项，支持自定义链接的打开方式。

![image-x0qfsq.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### 日历区块支持设置周起始日

可自定义日历视图的周起始日，支持选择「周日」或「周一」，满足不同地区和使用习惯。

![image-uu5ubi.png](https://static-docs.nocobase.com/image-uu5ubi.png)

### Markdown（Vditor）查看模式支持图片点击放大

在查看模式下，支持点击 Markdown 内容中的图片进行放大预览，提升阅读体验。

![20250707134351_rec_-zd0mvw.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### 工作流模块功能与性能全面提升

- 支持使用更多字段进行工作流筛选，提升查找效率
- 优化移动端展示样式，提升操作体验
- 排除 JSON 字段加载，显著提升执行计划列表加载性能
- 节点测试运行新增日志 API
- 调整 `getCollectionFieldOptions` 方法的 API 接口，增强灵活性

![image-5b3byb.png](https://static-docs.nocobase.com/image-5b3byb.png)

### 审批流程功能增强与体验提升

- 转签、加签人员选择列表新增配置项，支持显示更多字段信息，辅助更精准选人
- 时间线中的时间显示调整为绝对时间，提升可读性
- 从工作流插件中导入审批相关数据表，避免本地表被重写
- 调整变量 API 接口结构，提升灵活性与一致性

![20250707141716_rec_-v2nc4q.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### 支持通过环境变量配置数据库连接池选项

可通过环境变量灵活设置数据库连接池参数，提升部署灵活性。

![image-tz87as.png](https://static-docs.nocobase.com/image-tz87as.png)

### 评论区块支持分页显示

支持对评论内容进行分页加载，提升大数据量场景下的加载性能与阅读体验。

![20250707135131_rec_-lk66qq.gif](https://static-docs.nocobase.com/20250707135131_rec_-lk66qq.gif)

### 移动端体验提升

- 通知弹窗适配移动端样式，界面更清晰
- 移动端布局判断逻辑优化，提升响应准确性

