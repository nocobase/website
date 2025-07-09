## New Feature

### Forgot Password – Email Recovery Supported

Users can now recover their passwords via email. Enable this feature in **Settings > Authentication > Forgot Password**, configure an email notification channel, and customize the password reset email (supports variables and HTML format).

![20250707104631_rec_-ihynhs.gif](https://static-docs.nocobase.com/20250707104631_rec_-ihynhs.gif)

Reference: [Forgot Password](https://docs.nocobase.com/handbook/auth/user#forgot-password)

### Custom Aggregation Variables

Supports creating statistical variables such as count, sum, and average. These variables can be used in menu badges, page labels, and other areas to make the interface more intuitive and information-rich.

![20250707110736_rec_-fzpk98.gif](https://static-docs.nocobase.com/20250707110736_rec_-fzpk98.gif)

Reference: [Custom Variables](https://docs.nocobase.com/handbook/custom-variables)

### Email Management

The email management module has been fully upgraded, now supporting email deletion, batch sending, sync interval settings, AI-generated content, and various user experience improvements.

![image-9dyulg.png](https://static-docs.nocobase.com/image-9dyulg.png)

### Data Sources

支Supports the SQL Server BIT field in external data sources and enables on-demand loading of data tables from external sources.

![image-rml96b.png](https://static-docs.nocobase.com/image-rml96b.png)

### Text Copy

Supports one-click copying of text field content.

![20250707105447_rec_-m25b6x.gif](https://static-docs.nocobase.com/20250707105447_rec_-m25b6x.gif)

### [Workflow: HTTP Request Node] Support for `multipart/form-data` Type

When configuring an HTTP Request node in a workflow, you can now select the `multipart/form-data` content type. Once enabled, the request body accepts form-data submissions—including `file` fields—to support file uploads and similar scenarios.

![image-gutu74.png](https://static-docs.nocobase.com/image-gutu74.png)

### [Workflow: Approval] Approval Node Results Support Generating Approval Record Variables

Approval node execution results can now be used as variables in subsequent nodes, with automatic recording of status and related data.

![20250614095052](https://static-docs.nocobase.com/20250614095052.png)

Reference: [Node Results](https://docs.nocobase.com/handbook/workflow-approval/node#node-results)

## Improvements

### Scan-to-Fill Input

The generic text input component now includes an **Enable Scan** option. When enabled, a scan button appears on the right side of the input field, allowing data to be entered via scanning devices. You can also configure whether manual input is allowed.

![image-u7gfro.png](https://static-docs.nocobase.com/image-u7gfro.png)

Reference: [Enable scan](https://docs-cn.nocobase.com/handbook/ui/fields/field-settings/enable-scan)

### Localization Support in Markdown Block

Markdown content now supports localization using the `{{t 'xxx'}}` syntax to insert multilingual text.

![20250707132207_rec_-a1fu68.gif](https://static-docs.nocobase.com/20250707132207_rec_-a1fu68.gif)

Reference: [Localization](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#localization)

### Menu Links Support Opening in New Window

A new **"Open in new window"** option has been added for menu links, allowing you to customize how links are opened.

![image-x0qfsq.png](https://static-docs.nocobase.com/image-x0qfsq.png)

### Calendar Block Supports Setting Week Start Day

You can now customize the calendar view’s week start day, choosing either Sunday or Monday to fit different regional preferences and habits.

![image-uu5ubi.png](https://static-docs.nocobase.com/image-uu5ubi.png)

Reference: [Week start day](https://docs.nocobase.com/handbook/calendar#week-start-day)

### Markdown (Vditor) View Mode Supports Image Click-to-Zoom

In view mode, images within Markdown content can be clicked to enlarge, enhancing the reading experience.

![20250707134351_rec_-zd0mvw.gif](https://static-docs.nocobase.com/20250707134351_rec_-zd0mvw.gif)

### Comprehensive Enhancement Of Workflow Module Functionality And Performance

- Support filtering workflows by more fields to improve search efficiency
- Optimize mobile display styles to enhance user experience
- Exclude JSON field loading to significantly improve execution plan list loading performance
- Add a new log API for node test runs
- Adjust the API interface of the `getCollectionFieldOptions` method to enhance flexibility

![image-5b3byb.png](https://static-docs.nocobase.com/image-5b3byb.png)

### Approval Process Functionality Enhancements And Experience Improvements

- Added Configuration Option For Transfer And Add Sign Personnel Selection Lists, Supporting Display Of More Field Information To Assist More Accurate Selection
- Adjusted Time Display In Timeline To Absolute Time To Improve Readability
- Imported Approval-Related Data Tables From Workflow Plugin To Prevent Local Tables From Being Overwritten
- Adjusted Variable API Interface Structure To Enhance Flexibility And Consistency

![20250707141716_rec_-v2nc4q.gif](https://static-docs.nocobase.com/20250707141716_rec_-v2nc4q.gif)

### Support Configuring Database Connection Pool Options Via Environment Variables

Database connection pool parameters can be flexibly set through environment variables to improve deployment flexibility.

![image-tz87as.png](https://static-docs.nocobase.com/image-tz87as.png)

### Comment Block Supports Pagination

Supports paginated loading of comments to enhance loading performance and reading experience in scenarios with large data volumes.

![20250707155143_rec_-ch7qvy.gif](https://static-docs.nocobase.com/20250707155143_rec_-ch7qvy.gif)

### Mobile Experience Improvements

- Notification Popups Adapted To Mobile Styles
- Optimized Mobile Layout Detection Logic To Enhance Responsiveness Accuracy
