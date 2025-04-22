### 🎉 New Features

- **[WEB client]** Support permission configuration for page tabs and add route management page ([#5955](https://github.com/nocobase/nocobase/pull/5955)) by @zhangzhonghe
Reference: [Routes](https://docs.nocobase.com/handbook/routes)
- **[IP restriction]** Support IP restriction. by @sheldon66
Reference: [IP restriction](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Improvements

- **[server]**
  - move AesEncryptor to the core ([#6132](https://github.com/nocobase/nocobase/pull/6132)) by @chenos

  - 1. Add server middleware to extract the client's IP address.<br />2. Resolve infinite reload issues when an IP is blocked.<br />3. Add the `X-Forwarded-For` HTTP header in the proxy to enable forwarding for local debugging. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) by @sheldon66

### 🐛 Bug Fixes

- **[Authentication]** Update migration rules for issued tokens and token policy config. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) by @sheldon66

