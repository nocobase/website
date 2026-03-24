### 🚀 Improvements

- **[Workflow: Approval]** Fix JSON field caused performance issue when loading approval records list by @mytharcher

### 🐛 Bug Fixes

- **[server]** Change close timing of Pub-Sub to `beforeStop`, to avoid message sent or handled after database closed ([#8934](https://github.com/nocobase/nocobase/pull/8934)) by @mytharcher

- **[Localization]** prevent localizationTexts:missing request on permission denial ([#8903](https://github.com/nocobase/nocobase/pull/8903)) by @chenos

- **[Data source: External Oracle]** Fix an error that occurs when loading the Oracle external data source by @2013xile

