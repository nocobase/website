## Core Optimizations

### Enable Links in Single-line Text Fields

The open mode supports drawer, dialog and page.

![20250207212903](https://static-docs.nocobase.com/20250207212903.png)

### Association Block Supports Associate/Disassociate Actions

You can now perform association and disassociation actions directly in the association block.

![20250207211837](https://static-docs.nocobase.com/20250207211837.png)

### Debugging Workflow

You can now directly trigger workflows during configuration to debug them.

<video width="100%" controls>
      <source src="https://static-docs.nocobase.com/20250207213343_rec_.mp4" type="video/mp4">
</video>

### Improved Mobile Interaction for Date Components

Enhanced interaction experience for date-related components on mobile devices.

![0084553986f6b3de21ca62f22d09a91a.png](https://static-docs.nocobase.com/0084553986f6b3de21ca62f22d09a91a.png)

### Frontend Performance Optimizations

* Optimized initial screen load speed.
* Changed the frontend build tool to **rspack**.
* Reduced the bundle size of entry files for various plugin packages.
* Enhanced rendering performance for large data tables.
* Reduced stuttering during menu transitions.
* Introduced on-demand loading methods with the new `lazy` and `useLazy` libraries.

Below is a brief introduction to using `lazy` and `useLazy`:

```ts
import { lazy, useLazy } from '@nocobase/client';

// Export a single component:
const { RolesManagement } = lazy(() => import('./RolesManagement'), 'RolesManagement');

// Export multiple components:
const { AuthLayout, SignInPage, SignUpPage } = lazy(() => import('./pages'), 'AuthLayout', 'SignInPage', 'SignUpPage');

// Export a default component:
const ThemeList = lazy(() => import('./components/ThemeList'));

// Return a hook:
const useReactToPrint = useLazy<typeof import('react-to-print').useReactToPrint>(
  () => import('react-to-print'),
  'useReactToPrint',
);
  
// Return a library:
const parseExpression = useLazy<typeof import('cron-parser').parseExpression>(
  () => import('cron-parser'),
  'parseExpression',
);
```

---

## New Plugins

### Import Pro

Supports asynchronous import operations that run on a separate thread. This feature enables the import of large volumes of data with enhanced performance.

![20250119221221](https://static-docs.nocobase.com/20250119221221.png)

Reference: [Import Pro](https://docs.nocobase.com/handbook/action-import-pro)

### Export Pro

Enables asynchronous export operations that run on a separate thread, supporting large-scale data exports as well as attachment exports.

![20250119221237](https://static-docs.nocobase.com/20250119221237.png)

Reference: [Export Pro](https://docs.nocobase.com/handbook/action-export-pro)

### Template Print

The Template Printing plugin allows you to edit template files using Word, Excel, or PowerPoint (supporting the `.docx`, `.xlsx`, and `.pptx` formats). By setting placeholders and logical structures within the template, you can dynamically generate files in predetermined formats such as `.docx`, `.xlsx`, `.pptx`, and even `.pdf`. This functionality is widely applicable for creating various business documents, including quotes, invoices, contracts, and more.

**Main Features**

* **Multi-format Support**: Compatible with Word, Excel, and PowerPoint templates to meet diverse document generation needs.
* **Dynamic Data Filling**: Automatically populates document content based on defined placeholders and logic.
* **Flexible Template Management**: Easily add, edit, delete, and categorize templates for better maintenance and usage.
* **Rich Template Syntax**: Supports basic replacement, array access, loops, conditional output, and other template syntax for complex document generation.
* **Formatter Support**: Provides conditional outputs, date formatting, number formatting, and more to enhance document clarity and professionalism.
* **Efficient Output Options**: Supports direct PDF generation for easy sharing and printing.

![20250119221258](https://static-docs.nocobase.com/20250119221258.png)

Reference: [Template Print](https://docs.nocobase.com/handbook/action-template-print)

### Audit Logger

This plugin records and tracks user activities as well as resource operation histories within the system.

![20250119221319](https://static-docs.nocobase.com/20250119221319.png)

Reference: [Audit Logger](https://docs.nocobase.com/handbook/audit-logger)

### Workflow: Subflow

This feature allows one workflow to call another process. You can use variables from the current workflow as input for the subflow, and then use the subflow’s output as variables in subsequent nodes.

![20250119221334](https://static-docs.nocobase.com/20250119221334.png)

Reference: [Workflow: Subflow](https://docs.nocobase.com/handbook/workflow-subflow)

### Email Manager

Integrate your Google or Microsoft email accounts into NocoBase to send, receive, view, and manage emails. Additionally, emails can be embedded directly into pages.

![20250119221346](https://static-docs.nocobase.com/20250119221346.png)

Reference: [Email Manager](https://docs.nocobase.com/handbook/email-manager/usage-admin)

### File Storage: S3 (Pro)

Supports file storage types that are compatible with the S3 protocol, including Amazon S3, Alibaba Cloud OSS, Tencent Cloud COS, MinIO, and more. This plugin also supports direct file uploads and private access.

![20250119221404](https://static-docs.nocobase.com/20250119221404.png)

Reference: [File Storage: S3(Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
