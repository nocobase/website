---
title: "NocoBase v1.8.12：錯誤修復"
description: "v1.8.12 版本發布說明"
---

### 🎉 新功能

- **[client]** 為 Input、TextArea、URL 及 InputNumber 元件新增「自動聚焦」選項，啟用後可在頁面初次渲染時自動聚焦輸入欄位 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

### 🐛 錯誤修復

- **[client]**
  - 修正檔案預覽項目在網址為 null 時的處理 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher

  - 預覽時為本地檔案補上完整網址 ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher

- **[utils]** 修正 parseDate 時區處理不正確的問題 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh

- **[undefined]** 將新插件加入預設套件 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher

- **[檔案管理]** 修正儲存欄位權限 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher

- **[工作流]** 修正處理器結束時回傳 `undefined` 的問題 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher

- **[工作流：動態計算節點]** 修正舊版 API 導致的錯誤 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher

- **[工作流：子流程]** 修正流程被暫停的問題 by @mytharcher
