## 新特性

### 支持字段验证规则

支持为字段配置多种验证规则（如必填、格式、长度、范围、自定义表达式等），在表单提交时自动校验输入数据，确保数据准确性一致性。验证规可在字段设置中灵活配置。

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

参考文档：[字段验证](https://docs-cn.nocobase.com/handbook/data-modeling/collection-fields/validation)

### 表格区块支持添加“列设置”

表格区块新增“列设置”功能，支持非编辑状态下调整列的顺序、显隐与固定方式，让数据展示更灵活、更贴合用户需求。

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### 审批支持“数据保存前”的触发模式

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### 审批触发器中开放审批单据编号变量以供使用

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [异步任务管理器] 支持通过环境变量和队列进行异步任务服务拆分

新增服务拆分机制，支持通过 `WORKER_MODE` 环境变量将工作流、异步任务等服务独立运行，实现多节点部署与性能优化。

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

参考文档：[服务拆分](https://docs-cn.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting#%E5%A4%9A%E8%8A%82%E7%82%B9%E5%88%86%E5%88%AB%E5%A4%84%E7%90%86)

### 新增用于处理队列消息的事件队列

参考文档：[集群模式：消息队列](https://docs-cn.nocobase.com/welcome/getting-started/deployment/cluster-mode#%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97)

### 为应用增加优雅停机的生命周期处理

在应用进程收到 SIGTERM / SIGINT 信号时，开始处理关闭流程，以避免部分进行中的数据操作造成的问题。

### 支持主数据源显示插件定义的表

开发插件定义的表，支持在主数据源管理界面展示，可以在区块、工作流中使用

![image-1pcd91.png](https://static-docs.nocobase.com/image-1pcd91.png)

## 优化

### 系统表自增 ID 改为 53 位类雪花 ID

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

参考文档：

### 支持查看和继续执行已停用工作流中的人工待办任务

人工待办的区块列表不再限制已停用工作流的待办任务展示，并允许对待办继续提交。

### 邮件管理器

* 支持邮件内容一次性批量同步，并可进行重新同步。
* 邮件编辑器中插入的图片可自由调整大小，富文本编辑器支持软换行，优化邮件排版体验。
* 邮件列表性能得到提升，操作更流畅。

![20251031124117_rec_-qa39pq.gif](https://static-docs.nocobase.com/20251031124117_rec_-qa39pq.gif)

参考文档：

### 工作流模块优化

- 新增公共组件，提高不同模块复用性
- 优化了 Workflow 模块中队列执行相关的查询性能，使用了分离字段与索引来提升数据检索效率。

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)T
