## 新特性

### 支持字段验证规则

支持为字段配置多种验证规则（如必填、格式、长度、范围、自定义表达式等），在表单提交时自动校验输入数据，确保数据准确性与一致性。验证规则可在字段设置中灵活配置。

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

参考文档：[字段验证](https://docs-cn.nocobase.com/handbook/data-modeling/collection-fields/validation)

### 表格区块支持添加“列设置”

表格区块新增“列设置”功能，支持在非编辑状态下调整列的顺序、显隐与固定方式，让数据展示更灵活、更贴合用户需求。

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### 支持通过环境变量和队列进行异步任务服务拆分

邮件管理模块全面升级，支持邮件删除、批量发送、同步设置及多项体验优化。

![Email Management.png](https://static-docs.nocobase.com/image-fyxonb.png)

参考文档：[服务拆分](https://docs-cn.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting#%E5%A4%9A%E8%8A%82%E7%82%B9%E5%88%86%E5%88%AB%E5%A4%84%E7%90%86)

### 数据源

支持外部数据源中的 SQL Server BIT 字段，支持外部数据源按需加载数据表

![Data Sources.png](https://static-docs.nocobase.com/image-h3tk70.png)

### 文本复制

支持一键复制文本字段内容

![Text Copy.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [工作流：HTTP 请求节点] 支持 `multipart/form-data` 类型

在工作流中配置 HTTP 请求节点时，现已支持选择 `multipart/form-data` 类型。启用该类型后，可在请求 Body 中以 `form-data` 方式传递数据，支持包含 `file` 类型字段，实现文件上传等场景。

![Workflow.png](https://static-docs.nocobase.com/image-gutu74.png)

### [工作流：审批] 审批节点结果支持生成审批记录变量

审批节点执行结果可作为变量供后续节点使用，支持状态与数据自动记录

![Workflow: Approval](https://static-docs.nocobase.com/20250614095052.png)

参考文档：[节点结果](https://docs-cn.nocobase.com/handbook/workflow-approval/node#%E8%8A%82%E7%82%B9%E7%BB%93%E6%9E%9C)

## 优化

### 支持在输入框中扫码填充数据

通用文本输入框组件新增 Enable Scan 配置项，启用后将在输入框右侧显示扫码按钮，支持扫码设备录入，并可配置是否允许手动输入。

![Scan-to-Fill Input.png](https://static-docs.nocobase.com/image-u7gfro.png)

参考文档：[扫码录入](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Markdown 中支持本地化

Markdown 内容现已支持本地化，可使用 `{{t 'xxx'}}` 语法插入多语言文本。

![Localization Support in Markdown Block.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

参考文档：[本地化](https://docs-cn.nocobase.com/handbook/ui/blocks/other-blocks/markdown#%E6%9C%AC%E5%9C%B0%E5%8C%96)

### 菜单链接支持新窗口打开

菜单链接新增“Open in new window”配置项，支持自定义链接的打开方式。

![Menu Links Support Opening in New Window.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### 日历区块支持设置周起始日

可自定义日历视图的周起始日，支持选择「周日」或「周一」，满足不同地区和使用习惯。

![Calendar Block Supports Setting Week Start Day.png](https://static-docs.nocobase.com/image-uu5ubi.png)

参考文档：[周起始日](https://docs-cn.nocobase.com/handbook/calendar#%E5%91%A8%E8%B5%B7%E5%A7%8B%E6%97%A5)

### Markdown（Vditor）查看模式支持图片点击放大

在查看模式下，支持点击 Markdown 内容中的图片进行放大预览，提升阅读体验。

![Markdown (Vditor) View Mode Supports Image Click-to-Zoom.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### 工作流模块功能与性能全面提升

- 支持使用更多字段进行工作流筛选，提升查找效率
- 优化移动端展示样式，提升操作体验
- 排除 JSON 字段加载，显著提升执行计划列表加载性能
- 节点测试运行新增日志 API
- 调整 `getCollectionFieldOptions` 方法的 API 接口，增强灵活性

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)

### 审批流程功能增强与体验提升

- 转签、加签人员选择列表新增配置项，支持显示更多字段信息，辅助更精准选人
- 时间线中的时间显示调整为绝对时间，提升可读性
- 从工作流插件中导入审批相关数据表，避免本地表被重写
- 调整变量 API 接口结构，提升灵活性与一致性

![Approval Process.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### 支持通过环境变量配置数据库连接池选项

可通过环境变量灵活设置数据库连接池参数，提升部署灵活性。

![Support Configuring Database Connection Pool Options Via Environment Variables.png](https://static-docs.nocobase.com/image-tz87as.png)

### 评论区块支持分页显示

支持对评论内容进行分页加载，提升大数据量场景下的加载性能与阅读体验。

![Comment Block Supports Pagination.gif](https://static-docs.nocobase.com/20250707135131_rec_-lk66qq.gif)

### 移动端体验提升

- 通知弹窗适配移动端样式，界面更清晰
- 移动端布局判断逻辑优化，提升响应准确性
