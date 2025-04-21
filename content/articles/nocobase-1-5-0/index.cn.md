## 内核优化

### 文本字段支持启用链接

打开方式支持抽屉、对话框和页面三种方式。

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### 关系区块支持关联和解除关联操作

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### 支持调试工作流

可以在配置工作流时直接触发工作流进行调试。

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### 优化移动端日期相关组件交互体验

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### 前端性能优化

- 优化首屏加载速度
- 前端构建工具更改为 rspack
- 优化各插件包入口文件大小
- 提升大数据表格渲染性能
- 优化菜单切换时的卡顿现象
- 新增 lazy 和 useLazy 前端库按需加载的方法

`lazy` 和 `useLazy` 用法介绍

```ts
import {lazy, useLazy} from '@nocobase/client';

// 导出一个组件
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// 导出多个组件
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// 导出默认组件
const ThemeList = lazy(() => import('./components/ThemeList'));

// 返回hook
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// 返回library
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

## 新插件

### 导入 Pro

支持异步导入操作，独立线程执行，支持大量数据导入。

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

参考文档：

- [导入 Pro](https://docs-cn.nocobase.com/handbook/action-import-pro)

### 导出 Pro

支持异步导出操作，独立线程执行，支持大量数据导出，支持附件导出。

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

参考文档：

- [导出 Pro](https://docs-cn.nocobase.com/handbook/action-export-pro)

### 模板打印

模板打印插件支持使用 Word、Excel 和 PowerPoint 编辑模板文件（支持 `.docx`、`.xlsx`、`.pptx` 格式），在模板中设置占位符和逻辑结构，从而动态生成预定格式的文件，如 `.docx`、`.xlsx`、`.pptx` 以及 `.pdf` 文件。可以广泛应用于生成各类业务文档，例如报价单、发票、合同等。

主要功能

* **多格式支持**：兼容 Word、Excel 和 PowerPoint 模板，满足不同文档生成需求。
* **动态数据填充**：通过占位符和逻辑结构，自动填充和生成文档内容。
* **灵活的模板管理**：支持添加、编辑、删除和分类管理模板，便于维护和使用。
* **丰富的模板语法**：支持基本替换、数组访问、循环、条件输出等多种模板语法，满足复杂文档生成需求。
* **格式化器支持**：提供条件输出、日期格式化、数字格式化等功能，提升文档的可读性和专业性。
* **高效的输出格式**：支持直接生成 PDF 文件，方便分享和打印。

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

参考文档：

- [模板打印](https://docs-cn.nocobase.com/handbook/action-template-print)

### 审计日志

用于记录和追踪系统内的用户活动和资源操作历史。

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

参考文档：

- [审计日志](https://docs-cn.nocobase.com/handbook/audit-logger)

### 工作流：子流程

用于在一个工作流中调用其他的流程，可以使用当前流程的变量作为子流程的输入，并使用子流程的输出作为当前流程的变量在后续节点中使用。

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

参考文档：

- [工作流：子流程](https://docs-cn.nocobase.com/handbook/workflow-subflow)

### 邮件管理

允许将对谷歌、微软邮件账户接入到NocoBase中，进行邮件的收发、查看、管理等操作。也可以将邮件集成到页面中。

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

参考文档：

- [邮件管理](https://docs-cn.nocobase.com/handbook/email-manager/usage-admin)

### 文件存储：S3(Pro)

支持兼容 S3 协议的文件存储类型，例如亚马逊 S3、阿里云 OSS、腾讯云 COS、MinIO 等。支持文件直传、私有访问。

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

参考文档：

- [文件存储：S3(Pro)](https://docs-cn.nocobase.com/handbook/file-manager/storage/s3-pro)
