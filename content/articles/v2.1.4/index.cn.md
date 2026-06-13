### 🚀 优化

- **[工作流]** 优化工作流元数据编辑体验，支持在详情弹窗中编辑描述，并在复制工作流时默认填充源工作流元数据。 ([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher

### 🐛 修复

- **[操作：导入记录]** 导入上传文件改为落盘存储，降低大数据量导入时的内存压力。 ([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher

- **[备份管理器]** 修复备份还原时可能接受不安全 PostgreSQL schema 名称的安全问题 ([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile

- **[工作流]**
  - 修复工作流超时处理，使已中止的执行及其待处理任务能够原子更新。 ([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher

  - 修复工作流节点变更后工作流最后更新人未同步更新的问题。 ([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher

- **[操作：导入记录 Pro]** 避免 Pro 导入在创建异步任务前于请求节点解析大文件。 by @mytharcher

- **[版本管理]** 调整版本管理顶部快捷入口的位置，使其在旧版和 v2 管理布局中都显示在 UI 编辑器旁边。 by @cgyrock

