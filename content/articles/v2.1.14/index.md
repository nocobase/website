### 🎉 New Features

- **[AI employees]** Added Mistral AI as an LLM provider for AI services. ([#9925](https://github.com/nocobase/nocobase/pull/9925)) by @cgyrock

### 🚀 Improvements

- **[cli]** support OAuth device authorization flow ([#9922](https://github.com/nocobase/nocobase/pull/9922)) by @chenos

### 🐛 Bug Fixes

- **[client-v2]**
  - Fixed long selected labels in record select fields so they truncate cleanly without squeezing the select control. ([#9939](https://github.com/nocobase/nocobase/pull/9939)) by @katherinehhh

  - Fixed table datetime columns losing their configured time display after pagination or refresh. ([#9935](https://github.com/nocobase/nocobase/pull/9935)) by @katherinehhh

- **[Users]** Removed the default password from the add-user form in Users & Permissions. ([#9915](https://github.com/nocobase/nocobase/pull/9915)) by @jiannx

- **[Data source: External NocoBase]** Fixed NocoBase external data sources failing to load when connection options include runtime objects by @2013xile

- **[Record history]** Fixed external NocoBase data source loading failure when record history is enabled by @2013xile

- **[App supervisor]** Fixed the app supervisor Applications tab registration in Client V2 by @2013xile

