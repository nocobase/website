### 🚀 Improvements

- **[evaluators]** Update version of math.js to support more functions ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher

- **[client]** Rich text editor supports font size adjustment, image size adjustment, and soft line breaks ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx

- **[AI employees]** Change result of workflow caller to `execution.output`, by explicitly using output node the result could be stable ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 Bug Fixes

- **[client]**
  - Add fault tolerant for action schema, to avoid page crash when click action button ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher

  - fix title field setting disappearing after setting attachment URL and then changing to another field in form item ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh

  - fix i title field doesn't update when the association field is set to read-only mode in the create form ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh

- **[Flow engine]** Fix an issue where variable resolution was incorrect when filterByTk was an array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust

- **[Template print]** support space field by @jiannx

