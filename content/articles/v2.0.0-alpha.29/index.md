### 🐛 Bug Fixes

- **[client]**
  - Resolved an issue where the association field variable in the current form could not be properly identified, ensuring accurate data processing in forms. ([#7726](https://github.com/nocobase/nocobase/pull/7726)) by @gchust

  - Resolved an issue where assigning an array as the value or default value to a "toOne" field resulted in an error. This ensures proper handling of variable resolution results, improving system stability and accuracy. ([#7735](https://github.com/nocobase/nocobase/pull/7735)) by @gchust

- **[Access control]** Fix middlewares order of `resourceManager` ([#7728](https://github.com/nocobase/nocobase/pull/7728)) by @2013xile

