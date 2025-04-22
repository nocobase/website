### 🎉 New Features

- **[client]** support variables on the left side of linkage rule conditions ([#6609](https://github.com/nocobase/nocobase/pull/6609)) by @katherinehhh

- **[Departments]** Make Department, Attachment URL, and Workflow response message plugins free ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

- **[Action: Batch update]**
  - Support refreshing data in other data blocks after updating data in a block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

  - Support refreshing data in other data blocks after updating data in a block ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

- **[UI schema storage]** Added localization module for UISchema, enabling custom translations for schema title and description ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

- **[Block: Action panel]** add an onScanSuccess callback to handle successful scans and exit the camera UI. ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

- **[Collection field: Code]** Add code interface by @mytharcher

- **[Workflow: date calculation node]** Add `changeTimezone` function to change timezone value for formatting by @mytharcher

- **[Template print]** Support for dynamic images and barcode rendering in document templates. by @sheldon66

### 🚀 Improvements

- **[client]**
  - Add delay API for scenarios which open without delay ([#6681](https://github.com/nocobase/nocobase/pull/6681)) by @mytharcher

  - support selected table records in custom request ([#6647](https://github.com/nocobase/nocobase/pull/6647)) by @katherinehhh

  - Add default type fallback API for `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher

  - Optimize prompts for unconfigured pages ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe

  - Support to search field in Filter component ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher

  - Add `trim` API for `Input` and `Variable.TextArea` ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher

  - Determine whether to display the mobile components based on device type rather than page width ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe

  - Determine whether to display the mobile layout based on device type rather than page width ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe

  - support configuring colon visibility in form field labels based on layout ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh

- **[create-nocobase-app]** Upgrade some dependencies to latest versions ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

- **[utils]** Add duration extension for dayjs ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher

- **[database]**
  - Add trim option for text field ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher

  - Add trim option for string field ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher

- **[Workflow]**
  - Support fixed popup URL for workflow tasks ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

  - Optimize save job logic ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher

  - Improve code ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher

- **[Workflow: Delay node]** Support to use variable for duration ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

- **[Error handler]** Support custom title in AppError component. ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66

- **[File manager]** Add trim option for text fields of storages collection ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher

- **[Async task manager]** optimize import/export buttons in Pro ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos

- **[Workflow: Custom action event]** Add refresh settings for trigger workflow button by @mytharcher

- **[Action: Export records Pro]** optimize import/export buttons in Pro by @katherinehhh

- **[IP restriction]** Update IP restriction message content. by @sheldon66

- **[File storage: S3(Pro)]** Support global variables in storage configuration by @mytharcher

- **[Backup manager]** allow restore main app from sub app backup by @gchust

- **[Workflow: Approval]** Support to use block template for approval process form by @mytharcher

- **[Migration manager]** allow skip automatic backup and restore for migration by @gchust

### 🐛 Bug Fixes

- **[client]**
  - picker switching issue in date field of filter button ([#6695](https://github.com/nocobase/nocobase/pull/6695)) by @katherinehhh

  - variable conversion in sub-table/sub-form linkage rule conditions ([#6702](https://github.com/nocobase/nocobase/pull/6702)) by @katherinehhh

  - export button shown without export permission ([#6689](https://github.com/nocobase/nocobase/pull/6689)) by @katherinehhh

  - After connecting through a foreign key, clicking to trigger filtering results in empty filter conditions ([#6634](https://github.com/nocobase/nocobase/pull/6634)) by @zhangzhonghe

  - Fix error thrown in create / update node of workflow ([#6696](https://github.com/nocobase/nocobase/pull/6696)) by @mytharcher

  - Fix error thrown when mouse hover on referenced template block in approval node configuration ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher

  - custom association field not displaying field component  settings ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh

  - linkage rules compatibility with legacy data ([#6686](https://github.com/nocobase/nocobase/pull/6686)) by @katherinehhh

  - lazy load missing ui component will cause render error ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust

  - Fix locale for upload component ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher

  - Add native Password component to HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher

  - field descriptions display issue in workflow ([#6680](https://github.com/nocobase/nocobase/pull/6680)) by @katherinehhh

  - inherited fields shown in current collection  field assignment list ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh

  - style issue in variable input when setting default value ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh

  - Switching to the group menu should not jump to a page that has already been hidden in menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe

  - The filter form should not display the "Unsaved changes" prompt ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe

  - In the filter form, when the filter button is clicked, if there are fields that have not passed validation, the filtering is still triggered ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe

  - "allow multiple" option not working for relation field ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh

  - Fix the issue of preview images being obscured ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe

  - In the form block, the default value of the field configuration will first be displayed as the original variable string and then disappear ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

  - incorrect variable input style ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust

  - workflow node edit drawer title display [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh

  - subtable description overlapping with add new button ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh

  - dashed underline caused by horizontal form layout in modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh

  - rule with 'any' condition does not take effect when condition list is empty ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh

  - variable parse failure when URL parameters contain Chinese characters ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh

  - blank area between the block template configuration page title and the menu ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust

  - The relationship fields in the filter form report an error after the page is refreshed because x-data-source is not carried ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe

  - data issue with Gantt block in tree collection ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh

  - field label display issue to prevent truncation by colon ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh

  - x-disabled property not taking effect on form fields ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh

  - Fix `disabled` property not works when `SchemaInitializerItem` has `items` ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher

  - association field (select) displaying N/A when exposing related collection fields ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh

  - submit and refresh buttons not displaying icon-only mode correctly ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh

  - cascade  issue: 'The value of xxx cannot be in array format' when deleting and re-selecting ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh

  - linkage conflict between same-named association fields in different sub-tables within the same form ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh

- **[database]**
  - Fixed ci build error ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie

  - When deleting one-to-many records, both `filter` and `filterByTk` are passed and `filter` includes an association field, the `filterByTk` is ignored ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

  - Avoid "datetimeNoTz" field changes when value not changed in updating record ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher

- **[build]** build output is incorrect when plugin depends on some AMD libraries ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust

- **[Data visualization]** Enum field options are empty in the filter block ([#6706](https://github.com/nocobase/nocobase/pull/6706)) by @2013xile

- **[Action: Custom request]** Ensure custom request data must be JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) by @chenos

- **[Workflow: Manual node]**
  - Fix ACL error in tasks center ([#6693](https://github.com/nocobase/nocobase/pull/6693)) by @mytharcher

  - Fix manual task status constant ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher

- **[Action: Import records]** fixed an error importing xlsx time field ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie

- **[Access control]**
  - Fix error thrown when serializing role model to cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher

  - Correct role union calculation logic ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie

  - Incorrect current role assignment during login ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie

- **[Block: iframe]** vertical scrollbar appears when iframe block is set to full height ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh

- **[Workflow]**
  - Fix migration error thrown from MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher

  - Fix stats information of workflows not loaded when app started ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher

  - Fix OOM when create job with unsafe integer id ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher

  - Fix sync option display incorrectly ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher

- **[Collection field: Attachment(URL)]** only allow file collections with public URL access ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh

- **[Block: template]**
  - when the referenced template used by the page block has been deleted, saving as a template fails ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

  - Modify and delete same fields from template and block, after creating a block from template, can cause rendering errors ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust

- **[Users]** Issue with parsing the user profile form schema ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile

- **[Action: Export records]** missing filter params when exporting data after changing pagination ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh

- **[Mobile]** single-select field with 'contains' filter on mobile does not support multiple selection ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh

- **[Collection field: Many to many (array)]** Issue of filtering by fields in an association collection with a many to many (array) field ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile

- **[Public forms]** View permissions include list and get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos

- **[Authentication]** token assignment in `AuthProvider` ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile

- **[Calendar]** missing data on boundary dates in weekly calendar view ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh

- **[Block: Map]** map management validation should not pass with space input ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh

- **[Action: Batch edit]** Click the batch edit button, configure the pop-up window, and then open it again, the pop-up window is blank ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

- **[Workflow: Custom action event]** Fix test cases by @mytharcher

- **[Email manager]**
  - fix can't synn, no subject display and other small bugs by @jiannx

  - fix email management permission cannot view email list by @jiannx

  - Fix missing await for next call. by @jiannx

- **[File storage: S3(Pro)]**
  - Fix missing await for next call. by @jiannx

  - Individual baseurl and public settings, improve S3 pro storage config UX by @jiannx

  - Throw error to user when upload logo to S3 Pro storage (set to default) by @mytharcher

  - Organize language by @jiannx

- **[Auth: OIDC]** Incorrect redirection occurs when the callback path is the string 'null' by @2013xile

- **[Block: Multi-step form]**
  - the submit button has the same color in its default and highlighted by @jiannx

  - fixed the bug that form reset is invalid when the field is associated with other field by @jiannx

- **[Backup manager]** timeout error occurs when trying to restore an unecrypted backup with a password by @gchust

- **[Workflow: Approval]**
  - Fix ACL error in tasks center by @mytharcher

  - Support fixed URL for approval items in tasks center by @mytharcher

  - Fix branch mode when `endOnReject` configured as `true` by @mytharcher

  - Fix `updatedAt` changed after migration by @mytharcher

  - Fix approval node configuration is incorrect after schema changed by @mytharcher

  - Fix client variables to use in approval form by @mytharcher

- **[Migration manager]**
  - migration log creation time is displayed incorrectly in some environments by @gchust

  - the skip auto backup option becomes invalid if environment variable popup appears during migration by @gchust

