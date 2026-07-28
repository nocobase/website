From day one, NocoBase has been built on a plugin architecture.

This architecture gives NocoBase the flexibility and extensibility needed for long-term growth. Developers can continuously add new capabilities for different business needs without modifying the core system.

With the rise of AI coding tools, plugin development is becoming easier than ever. With tools like Claude Code, Codex, and Cursor, together with [NocoBase’s AI plugin development capabilities](https://docs.nocobase.com/cn/ai-dev), more developers can quickly build their own plugins.

Now, you can discover community-built plugins in [Awesome NocoBase](https://github.com/nocobase/awesome-nocobase), or share your own extensions and help grow the NocoBase plugin ecosystem.

![Frame 94-ojy7ci.jpg](https://static-docs.nocobase.com/Frame%2094-ojy7ci.jpg)

## Featured Community Plugins

Currently, [Awesome NocoBase](https://github.com/nocobase/awesome-nocobase) features a collection of plugins created by community developers. These plugins are built from real-world projects and experiences. Some address common needs, some extend NocoBase’s core capabilities, and others provide solutions for specific business scenarios.

### [NocoBase Hooks](https://github.com/Bunnarin/nocobase-plugin-hooks)

**Author:** [Bunnarin](https://github.com/Bunnarin)

NocoBase Hooks provides an extension mechanism similar to PocketBase’s `pb_hooks`. Developers can write server-side extensions directly in the `storage/hooks/` directory while leveraging NocoBase capabilities such as database events, middleware, custom APIs, ACL, and logging.

It also supports automatic loading, hot reload during development, TypeScript, and independent dependency management.

### [Global Search](https://github.com/trumanharry/nocobase-globalsearch-plugin)

**Author:** [trumanharry](https://github.com/trumanharry)

Global Search adds a cross-table search entry to the NocoBase admin interface, making it easier to find information across different data collections such as customers, orders, projects, and contacts.

### [Office File Previewer](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-file-previewer-office)

**Author:** [OneTwoSmall](https://github.com/OneTwoSmall)

Office File Previewer enhances NocoBase’s file preview capabilities with flexible support for Office documents and other file formats.

For use cases such as knowledge bases, contract management, archives, and internal file systems, users can preview files directly inside NocoBase without downloading files or switching between applications.

### [Enhanced Table Block](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-enhanced-table-block)

**Author:** [OneTwoSmall](https://github.com/OneTwoSmall)

Enhanced Table Block extends NocoBase table blocks with richer data display and interaction features.

It is ideal for scenarios involving reports, inventory, orders, and financial data, allowing users to manage information in a more spreadsheet-like way.

### [Auth: Email](https://github.com/OneTwoSmall/nocobase-custom-plugins/tree/main/plugins/%40nocobase/plugin-auth-email)

**Author:** [OneTwoSmall](https://github.com/OneTwoSmall)

Supports authentication through email verification codes.

### [Custom Login Page](https://github.com/taichuy/nocobase-plugin-login-lite)

**Author:** [JAVA-LW](https://github.com/JAVA-LW)

Custom Login Page allows administrators to configure NocoBase login page themes, styles, and branding directly from the backend.

It is suitable for projects that require a consistent brand experience or dedicated login portals for customers, employees, and partners.

### [Block: Tabs](https://github.com/vokylin/plugin-block-tabs)

**Author:** [zoudeming-vk](https://github.com/zoudeming-vk)

Block: Tabs provides a tab block that organizes multiple NocoBase blocks within a single interface.

For information-heavy detail pages and management screens, it reduces scrolling and groups related content into tabs, creating a clearer page structure.

### [Watermark](https://github.com/fengwenkai168/nocobase-plugin/)

**Author:** [fengwenkai168](https://github.com/fengwenkai168)

Watermark adds semi-transparent watermarks to NocoBase pages and can display information about the current user.

Administrators can customize watermark text, opacity, and font size. It is suitable for contracts, customer data, and other sensitive information where reducing screenshot-based data leakage is important.

### [Role Switcher](https://github.com/michaelxmn/plugin-role-switcher)

**Author:** [michaelxmn](https://github.com/michaelxmn)

Role Switcher adds a quick role switching option to the top navigation bar.

It helps users with multiple roles switch contexts more efficiently, and makes permission testing easier for administrators and developers.

### [Per-User Column Settings](https://github.com/Albert-mah/nocobase-plugin-user-columns)

**Author:** [Albert-mah](https://github.com/Albert-mah)

Per-User Column Settings allows each user to save their own table column preferences.

Users can customize visible fields, reorder columns, freeze columns, and adjust column widths without affecting other users. It is especially useful for business systems where different roles focus on different information.

### [Field Sequence Pro](https://github.com/ericto888/nocobase-plugin-field-sequence-pro)

**Author:** [ericto888](https://github.com/ericto888)

Field Sequence Pro extends the built-in auto-numbering field with support for form variables, value mapping dictionaries, and multi-dimensional isolated counters while keeping the original functionality.

It is suitable for generating unique identifiers such as order numbers, contract numbers, and business serial numbers based on different rules.

### [HTTP Error Handler](https://github.com/Albert-mah/plugin-http-error-handler)

**Author:** [Albert-mahmahuantest](https://github.com/Albert-mah)

HTTP Error Handler provides global 4xx/5xx error handling for NocoBase.

Administrators can define error handling rules using JS expressions, display unhandled API errors with custom error pages, or redirect users to specific pages automatically.

### [Workflow: URL Trigger](https://github.com/Albert-mah/plugin-workflow-url-trigger)

**Author:** [Albert-mah](https://github.com/Albert-mah)

Workflow: URL Trigger enables workflows to be triggered by external HTTP requests.

It supports wildcard and regular expression matching, uses request parameters as workflow variables, and can work with the HTTP Response node to build Webhooks, API integrations, and automation workflows.

### [Workflow: Crypto](https://github.com/Albert-mah/plugin-workflow-crypto)

**Author:** [Albert-mah](https://github.com/Albert-mah)

Workflow: Crypto provides AES encryption and decryption nodes for workflows.

It supports variable inputs and automatic JSON parsing after decryption, making it suitable for secure data exchange with external systems.

### [Workflow: Auth Token](https://github.com/Albert-mah/plugin-workflow-auth-token)

**Author:** [Albert-mah](https://github.com/Albert-mah)

Workflow: Auth Token generates real NocoBase login JWTs within workflows.

It can be used to create SSO login links and programmatic access tokens, and combined with URL Trigger and Crypto to build complete single sign-on workflows.

## Build the NocoBase Plugin Ecosystem Together

If you have created a NocoBase plugin, we welcome you to submit it to [Awesome NocoBase](https://github.com/nocobase/awesome-nocobase).

Our goal is to help more users discover valuable plugins while giving great plugins and their developers more exposure.

In the future, we will continue highlighting outstanding community plugins and the developers behind them.
