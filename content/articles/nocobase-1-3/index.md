Starting from version 1.3, NocoBase offers two key branches: **main** and **next**.

- **main** branch (beta version) focuses on bug fixes, ensuring a stable version for users.
- **next** branch (alpha version) contains some unreleased new features. This version is unstable and is intended for developers or testers to experience new features early or to conduct compatibility testing.

The new features in the 1.3 beta include:

## Core

### Support for opening pop-ups via URL

<video width="100%" controls="">
  <source src="https://static-docs.nocobase.com/1d1c69d92d778fdbce569e76551b2f1c.mp4" type="video/mp4">
</video>

Reference documentation:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Support for opening pop-ups as a page

A new "page" option has been added for pop-up operations.

![4a75fb85c9ee716316b8286e5b9473c0.png](https://static-docs.nocobase.com/4a75fb85c9ee716316b8286e5b9473c0.png)

Reference documentation:

- [Pop-up](https://docs.nocobase.com/handbook/ui/pop-up)

### Fields support configuration of style attributes

![04e31b81fb3a9deb16b917431abfe695.png](https://static-docs.nocobase.com/04e31b81fb3a9deb16b917431abfe695.png)

Reference documentation:

- [Field settings / Style](https://docs.nocobase.com/handbook/ui/fields/field-settings/style)

### Markdown and iframe HTML support the Handlebars template engine

![20240811205239](https://static-docs.nocobase.com/20240811205239.png)

Reference documentation:

- [Markdown Handlebars template engine](https://docs.nocobase.com/handbook/ui/blocks/other-blocks/markdown#handlebars)
- [Iframe HTML Handlebars template engine](https://docs.nocobase.com/handbook/block-iframe#handlebars)

### Support for dynamically configuring field components

![20240807092556.png](https://static-docs.nocobase.com/20240807092556.png)

Reference documentation:

- [Field settings / Field component](https://docs.nocobase.com/handbook/ui/fields/field-settings/field-component)
- [Plugin samples / Field component with value](https://docs.nocobase.com/plugin-samples/field/value)

## Plugins

### REST API data source

![20240721171420.png](https://static-docs.nocobase.com/20240721171420.png)

Reference documentation:

- [Data source / REST API data source](https://docs.nocobase.com/handbook/data-source-rest-api)

### MSSQL external data source

![aac26e115213a2adbfbb5dfcf0e7ddc5.png](https://static-docs.nocobase.com/aac26e115213a2adbfbb5dfcf0e7ddc5.png)

Reference documentation:

- [Data source / External database / External MSSQL](https://docs.nocobase.com/handbook/data-source-external-mssql)

### Mobile V2

![e88f4f84b47f9076d3ae518ff4d1cc15.png](https://static-docs.nocobase.com/e88f4f84b47f9076d3ae518ff4d1cc15.png)

Reference documentation:

- [Mobile](https://docs.nocobase.com/handbook/mobile)

### Many-to-many (array)

![202407051108180.png](https://static-docs.nocobase.com/202407051108180.png)

Reference documentation:

- [Many-to-many (array)](https://docs.nocobase.com/handbook/field-m2m-array)

### Authentication: WeCom

![202406272115805.png](https://static-docs.nocobase.com/202406272115805.png)

Reference documentation:

- [Authentication: WeCom](https://docs.nocobase.com/handbook/wecom/auth)

### Workflow: Date calculation node

![0975e0b188846624ec6d66f46b3f25b0.png](https://static-docs.nocobase.com/0975e0b188846624ec6d66f46b3f25b0.png)

Reference documentation:

- [Workflow: Date calculation node](https://docs.nocobase.com/handbook/workflow-date-calculation)

## Important changes

### Environment variable `DB_TIMEZONE` changed to `TZ`

The new `TZ` environment variable has been added to set the application's time zone, with the default being the operating system's time zone. The old `DB_TIMEZONE` remains compatible but is deprecated.

Reference:

- [Environment Variable / TZ](https://docs.nocobase.com/welcome/getting-started/env#tz)
