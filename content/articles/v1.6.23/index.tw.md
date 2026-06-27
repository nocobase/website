---
title: "NocoBase v1.6.23：優化 `nocobase upgrade` 指令的內部邏輯"
description: "v1.6.23 版本發布說明"
---

### 🚀 功能改進

- **[cli]** 優化 `nocobase upgrade` 指令的內部邏輯 ([#6754](https://github.com/nocobase/nocobase/pull/6754))，作者：@chenos

- **[範本列印]** 將資料來源操作控制取代為基於客戶端角色的存取控制。作者：@sheldon66

### 🐛 錯誤修復

- **[cli]** 升級時自動更新 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747))，作者：@chenos

- **[client]**
  - 新增關聯資料時，缺少對已關聯資料的篩選 ([#6750](https://github.com/nocobase/nocobase/pull/6750))，作者：@katherinehhh

  - 樹狀表格「新增子節點」按鈕的連結規則缺少「目前記錄」([#6752](https://github.com/nocobase/nocobase/pull/6752))，作者：@katherinehhh

- **[動作：匯入記錄]** 修正設定欄位權限時發生的匯入與匯出異常。([#6677](https://github.com/nocobase/nocobase/pull/6677))，作者：@aaaaaajie

- **[區塊：甘特圖]** 甘特圖區塊在月檢視的日曆標題中，月份重疊的問題 ([#6753](https://github.com/nocobase/nocobase/pull/6753))，作者：@katherinehhh

- **[動作：匯出記錄 Pro]**
  - Pro 匯出按鈕在對表格欄位排序後，遺失篩選參數，作者：@katherinehhh

  - 修正設定欄位權限時發生的匯入與匯出異常。作者：@aaaaaajie

- **[檔案儲存：S3(Pro)]** 修正上傳檔案的回應資料，作者：@mytharcher

- **[工作流程：審批]** 修正預先載入記錄的關聯欄位，作者：@mytharcher
