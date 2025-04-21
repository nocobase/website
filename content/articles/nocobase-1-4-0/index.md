## Major New Features

### Simplify the process of adding and updating plugins

![20241201170853](https://static-docs.nocobase.com/20241201170853.png)

* The plugin list now reads directly from the local directory.
* Combined the processes for adding and updating plugins.
* Interface supports batch activation of plugins.
* Simplified the download and upgrade process for commercial plugins.

Reference documentation:

* [Installation and Upgrade of Plugins](https://docs.nocobase.com/welcome/getting-started/plugin)
* [Release Notes / Simplify the process of adding and updating plugins](https://www.nocobase.com/en/blog/simplify-the-process-of-adding-and-updating-plugins)

### Notification

![20241201171806](https://static-docs.nocobase.com/20241201171806.png)

* **Notification: In-app message**
  It supports users in receiving real-time message notifications within the NocoBase application;
* **Notification: Email**
  Used for sending email notifications with built-in SMTP transport. Details;
* **Notification: WeCom**
  Sends notifications through the WeCom channel.

Reference documentation:

* [Notification Manager](https://docs.nocobase.com/handbook/notification-manager)

### User Data Synchronization

![20241201172843](https://static-docs.nocobase.com/20241201172843.png)

Reference documentation:

* [User Data Synchronization](https://docs.nocobase.com/handbook/user-data-sync)

### Backup Manager

![20241201170237](https://static-docs.nocobase.com/20241201170237.png)

Reference documentation:

* [Backups Manager](https://docs.nocobase.com/handbook/backups)

### Public Forms

Share public forms externally to collect information from anonymous users.

![20241201165614](https://static-docs.nocobase.com/20241201165614.png)

Reference documentation:

* [Public Forms](https://docs.nocobase.com/handbook/public-forms)

### Data Source: KingbaseES

Use the KingbaseES database as a data source, either as the main database or an external database.

![20241024121815](https://static-docs.nocobase.com/20241024121815.png)

Reference documentation:

* [Data Source: KingbaseES Database](https://docs.nocobase.com/handbook/data-source-kingbase)

### Data Source: External Oracle

Use external Oracle databases as a data source.

![628abc5eb797e6b903d4b548f773a13b.png](https://static-docs.nocobase.com/628abc5eb797e6b903d4b548f773a13b.png)

Reference documentation:

* [External Data Source: Oracle](https://docs.nocobase.com/handbook/data-source-external-oracle)

### Collection Field: Attachments (URL)

Supports URL-based attachments.

![e8772bec3d4b1771c1b21d087c9a4185.png](https://static-docs.nocobase.com/e8772bec3d4b1771c1b21d087c9a4185.png)

Reference documentation:

* [Data Table Field: Attachments (URL)](https://docs.nocobase.com/handbook/field-attachment-url)

### Field Component: Mask

![20241201165938](https://static-docs.nocobase.com/20241201165938.png)

Reference documentation:

* [Field component: Mask](https://docs.nocobase.com/handbook/field-component-mask)

### Workflow: JavaScript

JavaScript nodes allow users to execute JavaScript within a workflow. The script can use variables from upstream nodes in the process as parameters and the return value of the script can be used in downstream nodes.

![20241202203655](https://static-docs.nocobase.com/20241202203655.png)

Reference documentation:

* [Workflow Node- JavaScript](https://docs.nocobase.com/handbook/workflow-javascript)

### Data Visualization: ECharts

Added ECharts, supporting funnel, radar and more charts, and providing more user-friendly configurations.

![data-visualization-echarts](https://static-docs.nocobase.com/202410091022965.png)

Reference documentation:

* [Data Visualization: Echarts](https://docs.nocobase.com/handbook/data-visualization-echarts)

### Block: Multi-step form

Break the form with many fields into multiple steps to ease the burden on users.

![a503e153e8d714b9ca56f512142aeef1.png](https://static-docs.nocobase.com/a503e153e8d714b9ca56f512142aeef1.png)

Reference documentation:

* [Block: Multi-step form](https://docs.nocobase.com/handbook/block-multi-step-from)

### Block: Action Panel

Designed to house various quick actions, currently supports:

* Link
* Scan QR code
* Popup
* Custom request

Supports both grid and list layouts

![9942e6741e99195713f9e2981b02f228.png](https://static-docs.nocobase.com/9942e6741e99195713f9e2981b02f228.png)

Reference documentation:

* [Block: Action Panel](https://docs.nocobase.com/handbook/block-action-panel)

## Removed Features

### Deprecated Backup and Restore Plugin

Since NocoBase v0.19, we introduced the `@nocobase/plugin-backup-restore` plugin for application backup and restoration. However, user feedback revealed several limitations in its functionality:

1. Unable to backup and restore database-level metadata, such as default values for database fields and unique indexes.
2. Could not handle database objects like views, stored procedures, functions, and triggers during backup or restoration.
3. Required individual configuration of `dumpRules` for each plugin form, often necessitating custom logic from plugin developers to avoid failures in the backup or restoration process.
4. The complex design of backup grouping increased cognitive load and could lead to backup failures or data loss if not selected correctly.
5. The backup and restoration process occurred at the application layer, meaning it would fail if the application could not start.

After careful consideration, starting from version v1.4, we have decided to deprecate this plugin. For the new backup solution, please refer to the documentation below.

Reference Documentation:

* [How to Backup and Restore NocoBase](https://www.nocobase.com/en/blog/nocobase-backup-restore)
