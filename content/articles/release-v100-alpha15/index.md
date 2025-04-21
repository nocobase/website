## New features

### Auth plugin: LDAP authentication

Supports users logging in to NocoBase using their LDAP server credentials. For more information, refer to the [Authentication: LDAP](https://docs.nocobase.com/handbook/auth-ldap) documentation.

![](https://static-docs.nocobase.com/202405191513995.png)

### Workflow plugin: custom action trigger

When CRUD actions cannot satisfy your needs, you can use the custom action trigger of the workflow to orchestrate your own data processing logic. For more information, refer to the [Workflow / Custom action trigger](https://docs.nocobase.com/handbook/workflow-custom-action-trigger) documentation.

![](https://static-docs.nocobase.com/202405191515770.png)

### Table block supports fixed columns

![](https://static-docs.nocobase.com/202405191512587.png)

### Supports adding Gantt and Kanban in pop-up windows

![](https://static-docs.nocobase.com/202405191512280.png)

### The details block supports linkage rules

Allows configuring the visible and hidden properties of fields.

![](https://static-docs.nocobase.com/202405191513781.png)

### Workflow HTTP request node supports `application/www-x-form-urlencoded` format data

![](https://static-docs.nocobase.com/202405191514472.png)

### Workflow HTTP request node input boxes supports string templates

![](https://static-docs.nocobase.com/202405191514748.png)

### Plugin samples for development

View the documentation for [plugin examples](https://docs.nocobase.com/plugin-samples).

![20240521105056](https://static-docs.nocobase.com/20240521105056.png)

## Improvements

### Improved “Configure actions” interaction

All actions are displayed in a single list in the dropdown menu, no longer distinguishing between “Enable actions” and “Customize”.

* Actions that can only be added once: These actions retain the switch effect.
* Actions that can be added repeatedly: These actions no longer use the switch interaction and can be added multiple times.
* Merged similar actions
  * “Add new” and “Add record”
  * “Submit” and “Save record”

![20240520153033](https://static-docs.nocobase.com/20240520153033.png)

### Unified data format for workflow HTTP request node result:

```
{
  config: {},
  headers: {},
  status: 500,
  statusText: 'xxx',
  data: {}
}
```

### Reorganize workflow handbook

![20240521104934](https://static-docs.nocobase.com/20240521104934.png)

## Fixes

### Log plugin now only shows logs of the current application

When there are multiple applications:

* The log plugin only displays the log file list for the current application.
* Workflow and custom request folders are placed within the application folder.

![20240520152448](https://static-docs.nocobase.com/20240520152448.png)

Other major fixes include:

* Charts did not convert date fields to client time zone when querying aggregated data by date field. [fix(data-vi): should use local timezone when formatting date #4366](https://github.com/nocobase/nocobase/pull/4366)
* View refresh issue, where the view needed to be exited and re-entered after syncing with the database. [fix: collection fields should be refreshed after editing sync from database #4224](https://github.com/nocobase/nocobase/pull/4224)
* Tree table block did not collapse all nodes when adding a child node. [fix: do not collapse all nodes when adding a child node in the tree table block #4289](https://github.com/nocobase/nocobase/pull/4289)
* Data table title field settings were invalid. [fix: collection title field setting is invalid #4358](https://github.com/nocobase/nocobase/pull/4358)
* Bigint field lost precision in read-only mode. [fix: bigint field loses precision in read pretty mode #4360](https://github.com/nocobase/nocobase/pull/4360)
* Open log files were not closed after stopping a sub-application. [fix(logger): should close log stream after destroying app #4380](https://github.com/nocobase/nocobase/pull/4380)
* Workflow aggregate node relationship data model selection bug. [fix(plugin-workflow-aggregate): fix association field select #4315](https://github.com/nocobase/nocobase/pull/4315)
* Ignoring errors option was ineffective in synchronous mode for workflow HTTP request node. [fix(plugin-workflow-request): fix ignoreFail in sync mode #4334](https://github.com/nocobase/nocobase/pull/4334)
* Workflow HTTP request node value input box overflowed. [fix(plugin-workflow-request): fix value fields overflowing #4354](https://github.com/nocobase/nocobase/pull/4353)
* Special characters caused workflow HTTP request node to hang. [fix(plugin-workflow-request): fix request hanging when invalid header value #4376](https://github.com/nocobase/nocobase/pull/4376)
* Fixed issue where setting marginBlock in the theme editor affected form field spacing. [fix(theme-editor): form field spacing should not be affected by token.marginBlock #4374](https://github.com/nocobase/nocobase/pull/4374)
* Fixed issue where clicking the “License” option in the top right corner of the page redirected incorrectly. [PR #4415](https://github.com/nocobase/nocobase/pull/4415)
* Fixed issue where the field operator was invalid when saving a filter form as a block template. [PR #4390](https://github.com/nocobase/nocobase/pull/4390)
