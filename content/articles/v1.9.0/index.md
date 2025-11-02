## [v1.9.0](https://github.com/nocobase/nocobase/compare/v1.8.33...v1.9.0) - 2025-11-02

## New Feature

### Field Validation Rules

Supports configuring multiple validation rules for fields — such as required, format, length, range, and custom expressions.
Input data is automatically validated upon form submission to ensure accuracy and consistency.
Validation rules can be flexibly configured in field settings.

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

Reference: [Field validation](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### Table Block Support Column Settings

The table block now includes a Column Settings feature, allowing users to adjust column order, visibility, and pinned position without entering edit mode — making data display more flexible and user-friendly.

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### Before Data Saved Trigger Mode for Approvals

Approvals now support a Before Data Saved trigger mode — when enabled, data will not be stored when the approval starts and will only be saved after the approval is approved.

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### Approval Trigger Exposes Approval ID Variable

The approval trigger now exposes the approval ID variable, allowing it to be referenced in workflows and automation processes for more flexible configuration and data tracking.

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [Async Task Manager] Support for Service Splitting via Environment Variables and Queues

Introduces a new service splitting mechanism, allowing asynchronous task and workflow services to run independently through the `WORKER_MODE` environment variable — enabling multi-node deployment and performance optimization.

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

Reference: [Service Splitting](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### New Event Queue for Handling Queue Messages

Adds a dedicated event queue for handling system queue messages, improving asynchronous task processing and reliability.

Reference: [Cluster Mode: Message Queue](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### Graceful Shutdown Lifecycle Support

Introduces graceful shutdown handling.
When the application process receives a SIGTERM or SIGINT signal, it now initiates a proper shutdown sequence to prevent issues from ongoing operations.

### Plugin-Defined Tables Visible in Main Data Source

Plugin-defined tables can now be displayed in the main data source management interface, making them available for use in blocks and workflows.

![image-1pcd91.png](https://static-docs.nocobase.com/image-1pcd91.png)

## Improvements

### System Tables Use 53-bit Snowflake-like IDs

Update the IDs of system tables that previously used auto-increment primary keys without global uniqueness to 53-bit Snowflake-style IDs for globally unique identification.

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### View and Resume Tasks from Disabled Workflows

Manual task blocks now display pending tasks even from disabled workflows and allow users to continue processing them.

### Mail Manager Enhancements

* Mail data supports resynchronization
* Allows resizing images inserted into the email editor.
* Rich text editor now supports soft line breaks, improving email formatting experience.
* Improved email list performance for smoother operations.

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### Workflow Module Optimization

* Optimized query performance in workflow queue execution by introducing separated fields and indexes for faster data retrieval.

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)

