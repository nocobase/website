---
title: "NocoBase v2.0.0-beta.18：支援 env.ESM_CDN_BASE_URL"
description: "v2.0.0-beta.18 版本發行說明"
---

### 🎉 新功能

- **[流程引擎]** 支援 env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) - 作者：@chenos

### 🚀 改進

- **[acl]** acl 新增 generalFixedParams 方法 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) - 作者：@jiannx

- **[客戶端]** 支援為 `ResourceActionProvider` 停用冗餘的預設附加參數 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) - 作者：@2013xile

- **[Auth: 釘釘]** 使用 `userid` 作為使用者關聯的預設鍵，同時保持與依賴手機號碼的現有驗證器相容 - 作者：@2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在跨彈窗刷新目標區塊時，事件流程無法套用的問題。([#8541](https://github.com/nocobase/nocobase/pull/8541)) - 作者：@gchust

  - 修正首次開啟和關閉彈窗後，頁面資料被錯誤刷新的問題。([#8548](https://github.com/nocobase/nocobase/pull/8548)) - 作者：@gchust

  - 修正提交表單後導致資料區塊重複刷新的問題。([#8531](https://github.com/nocobase/nocobase/pull/8531)) - 作者：@gchust

  - 修正 nanoid 欄位在建立提交後未重新產生預設值的問題 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) - 作者：@katherinehhh

  - 修正為級聯選擇器欄位模型設定預設值時顯示不正確的問題 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) - 作者：@katherinehhh

- **[流程引擎]** 修正 runjs 中因部分 ESM 函式庫被錯誤歸類為 AMD 模組而無法正確載入的問題。([#8536](https://github.com/nocobase/nocobase/pull/8536)) - 作者：@gchust

- **[檔案管理]** 強化本地儲存的路徑安全性，避免存取路徑超出文件根目錄 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) - 作者：@mytharcher

- **[工作流]** 為資料表記錄選擇元件增加容錯機制，避免在資料表被刪除時拋出錯誤 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) - 作者：@mytharcher

- **[AI 員工]** 修正 AI 資料建模過程中自動呼叫工具時發生的異常 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) - 作者：@cgyrock

- **[動作：匯入記錄 Pro]** 修正匯入結果中的計數數字與訊息翻譯 - 作者：@mytharcher

- **[工作流：子流程]** 修正工作流程連結的路徑 - 作者：@mytharcher

- **[範本列印]** 修正範本列印動作配置中的欄位列表顯示問題 - 作者：@katherinehhh

- **[工作流：審批]**
  - 修正當目標群體工作流被停用時，為使用者新增角色會拋出錯誤的問題 - 作者：@mytharcher

  - 為已刪除的工作流增加容錯機制，避免任務列表載入錯誤 - 作者：@mytharcher

- **[企業微信]** 修正當手機號碼缺失時，使用者無法自動註冊的問題 - 作者：@2013xile
