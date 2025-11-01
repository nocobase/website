## 新特性

### 字段验证规则

支持为字段配置多种验证规则（如必填、格式、长度、范围、正则表达式等），在表单提交时自动校验输入数据，确保数据准确性一致性。验证规可在字段设置中灵活配置。

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

参考文档：[字段验证](https://docs-cn.nocobase.com/handbook/data-modeling/collection-fields/validation)

### 表格区块支持添加「列设置」

允许用户在不进入编辑模式的情况下调整列顺序、可见性和固定位置，从而使数据显示更加灵活和用户友好

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### 审批新增「数据保存前」触发模式

审批现在支持“数据保存前”触发模式——启用后，审批发起时不会存储数据，只有在审批通过后才会保存数据。

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### 审批触发器中开放审批单据编号变量以供使用

公开了 Approval ID 变量，允许在工作流其他节点中引用，以实现更灵活的配置和数据跟踪。

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [异步任务管理器] 支持通过环境变量和队列进行异步任务服务拆分

新增服务拆分机制，支持通过 `WORKER_MODE` 环境变量将工作流、异步任务等服务独立运行，实现多节点部署与性能优化。

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

参考文档：[服务拆分](https://docs-cn.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### 新增用于处理队列消息的事件队列

增加了一个专用的事件队列来处理系统队列消息，提高了异步任务处理能力和可靠性。

参考文档：[集群模式：消息队列](https://docs-cn.nocobase.com/welcome/getting-started/deployment/cluster-mode#%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97)

### 为应用增加优雅停机的生命周期处理

引入了优雅关闭处理机制，在应用进程收到 SIGTERM / SIGINT 信号时，开始处理关闭流程，以避免部分进行中的数据操作造成的问题。

### 支持主数据源显示插件定义的表

开发插件定义的表，支持在主数据源管理界面展示，可以在区块、工作流中使用

![image-1pcd91.png](https://static-docs.nocobase.com/image-1pcd91.png)

## 优化

### 系统表自增 ID 改为 53 位类雪花 ID

将主键为自增 ID 且不具备唯一标识的系统表的 ID 修改为 53 位的类雪花算法 ID

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### 支持查看和继续执行已停用工作流中的人工待办任务

人工待办的区块列表不再限制已停用工作流的待办任务展示，并允许对待办继续提交。

### 邮件管理器

* 邮件数据支持重新同步
* 允许调整插入到邮件编辑器中的图片大小
* 富文本编辑器支持软换行，优化邮件排版体验。
* 优化邮件列表性能，操作更流畅。

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### 工作流模块优化

- 优化了 Workflow 模块中队列执行相关的查询性能，使用了分离字段与索引来提升数据检索效率。

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
