### 🚀 Improvements

- **[evaluators]** Update version of math.js to support more functions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher

- **[Notification: In-app message]** Fix performance issue when sending in-app messages to large number of users ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - fix cascading select data not cleared after successful submission in create form ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh

  - Add fault tolerant for action schema, to avoid page crash when click action button ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher

  - fix issue with submit button where skip required validation does not work when confirmation is enabled ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh

- **[Collection field: Many to many (array)]** Fix error when appending second-level many-to-many(array) relations in association queries ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock

- **[Workflow]** Fix the issue where schema ID is not updated in duplicated node ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher

