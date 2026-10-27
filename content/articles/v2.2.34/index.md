### 🚀 Improvements

- **[DingTalk]** Fix DingTalk Stream mode failing on file-based plugin installs; cut full-sync API calls ~90%; show DingTalk quota reset time on sync failure by @chenzhizdt

### 🐛 Bug Fixes

- **[AI employees]** Added an optional stateless request mode for OpenAI Responses services to avoid response-item errors when a gateway routes requests across Azure OpenAI resources. ([#11183](https://github.com/nocobase/nocobase/pull/11183)) by @cgyrock

- **[Feishu / Lark]** Fix Feishu OAuth callback URLs missing the `APP_PUBLIC_PATH` prefix; fix automatic login not triggering and landing on a 404 in the v2 client by @chenzhizdt

