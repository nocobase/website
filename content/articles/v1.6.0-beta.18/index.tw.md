---
title: "NocoBase v1.6.0-beta.18：為 API 金鑰認證新增令牌安全配置測試"
description: "v1.6.0-beta.18 版本發行說明"
---

### 🚀 功能改進

- **[認證：API 金鑰]** 為 API 金鑰認證新增 Token 安全設定測試。([#6361](https://github.com/nocobase/nocobase/pull/6361))，作者：@sheldon66

### 🐛 錯誤修復

- **[伺服器]** 執行 `yarn start` 指令後瀏覽器快取不正確 ([#6394](https://github.com/nocobase/nocobase/pull/6394))，作者：@gchust

- **[認證]** 處理不存在的使用者時回傳 401 錯誤，並更新在地化訊息 ([#6381](https://github.com/nocobase/nocobase/pull/6381))，作者：@sheldon66

- **[網頁客戶端]** 切換角色後頁面呈現空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388))，作者：@aaaaaajie

- **[主題編輯器]** 連續多次切換後主題切換失敗 ([#6387](https://github.com/nocobase/nocobase/pull/6387))，作者：@katherinehhh

- **[工作流程：審批]**
  - 修正新增審核者時的排序參數，作者：@mytharcher

  - 避免錯誤的審核者設定查詢所有使用者，作者：@mytharcher

- **[企業微信]** 修正登入提示連結及釘釘登入錯誤，作者：@chenzhizdt
