---
title: "NocoBase v1.7.0-beta.21：升級依賴並移除 SQLite 支援"
description: "v1.7.0-beta.21 版本發布說明"
---

### 🚀 改進

- **[create-nocobase-app]** 升級依賴並移除 SQLite 支援 ([#6708](https://github.com/nocobase/nocobase/pull/6708)) @chenos

- **[行動端]** 優化行動端日期選擇器彈出視窗的開啟速度 ([#6735](https://github.com/nocobase/nocobase/pull/6735)) @zhangzhonghe

- **[區塊：範本]** 支援將範本區塊轉換為一般區塊 ([#6662](https://github.com/nocobase/nocobase/pull/6662)) @gchust

- **[主題編輯器]** 允許在主題設定中設定側邊欄寬度 ([#6720](https://github.com/nocobase/nocobase/pull/6720)) @chenos

- **[檔案管理員]** 公開 utils API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) @mytharcher

- **[工作流程]** 將日期類型新增至變數類型集合 ([#6717](https://github.com/nocobase/nocobase/pull/6717)) @mytharcher

- **[範本列印]** 將資料來源動作控制取代為基於客戶端角色的存取控制。 @sheldon66

### 🐛 錯誤修復

- **[client]**
  - 提交成功後重新整理資料區塊的問題 ([#6748](https://github.com/nocobase/nocobase/pull/6748)) @zhangzhonghe

  - 新增關聯資料時，缺少對已關聯資料的篩選 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) @katherinehhh

  - 左側選單的摺疊按鈕被工作流程彈出視窗遮擋的問題 ([#6733](https://github.com/nocobase/nocobase/pull/6733)) @zhangzhonghe

  - 樹狀表格「新增子項」按鈕的聯動規則缺少「目前記錄」([#6752](https://github.com/nocobase/nocobase/pull/6752)) @katherinehhh

  - 聯動規則中日期時間欄位條件不生效 ([#6728](https://github.com/nocobase/nocobase/pull/6728)) @katherinehhh

  - 行動端頂部導航欄圖示難以刪除的問題 ([#6734](https://github.com/nocobase/nocobase/pull/6734)) @zhangzhonghe

  - 「啟用索引欄位」的值顯示不正確 ([#6724](https://github.com/nocobase/nocobase/pull/6724)) @katherinehhh

  - 被聯動規則隱藏的必填欄位不應影響表單提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709)) @zhangzhonghe

  - 子表格/子表單聯動規則條件中的變數轉換 ([#6702](https://github.com/nocobase/nocobase/pull/6702)) @katherinehhh

  - 無匯出權限時仍顯示匯出按鈕 ([#6689](https://github.com/nocobase/nocobase/pull/6689)) @katherinehhh

  - 重新開啟聯動規則時缺少動作選項約束 ([#6723](https://github.com/nocobase/nocobase/pull/6723)) @katherinehhh

  - 篩選按鈕日期欄位中的選擇器切換問題 ([#6695](https://github.com/nocobase/nocobase/pull/6695)) @katherinehhh

  - 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 ([#6634](https://github.com/nocobase/nocobase/pull/6634)) @zhangzhonghe

- **[cli]** 升級時自動更新 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) @chenos

- **[server]** create-migration 產生的 appVersion 不正確 ([#6740](https://github.com/nocobase/nocobase/pull/6740)) @chenos

- **[build]** 修正 tar 指令中拋出的錯誤 ([#6722](https://github.com/nocobase/nocobase/pull/6722)) @mytharcher

- **[區塊：甘特圖]** 甘特圖區塊在月檢視的日曆標題中月份重疊 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) @katherinehhh

- **[動作：匯入記錄]** 修正設定欄位權限時發生的匯入匯出異常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) @aaaaaajie

- **[區塊：範本]** 區塊範本無法在 MySQL 環境中使用 ([#6726](https://github.com/nocobase/nocobase/pull/6726)) @gchust

- **[工作流程]** 修正於子流程中執行排程事件時拋出的錯誤 ([#6721](https://github.com/nocobase/nocobase/pull/6721)) @mytharcher

- **[資料視覺化]** 篩選區塊中的列舉欄位選項為空 ([#6706](https://github.com/nocobase/nocobase/pull/6706)) @2013xile

- **[動作：自訂請求]** 確保自訂請求資料必須為 JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) @chenos

- **[動作：匯出記錄 Pro]**
  - 修正設定欄位權限時發生的匯入匯出異常。 @aaaaaajie

  - Pro 版匯出按鈕在對表格欄位排序後遺失篩選參數 @katherinehhh

- **[工作流程：自訂動作事件]** 支援在多筆記錄模式下執行 @mytharcher

- **[檔案儲存：S3(Pro)]**
  - 為伺服器端上傳新增 multer 處理邏輯 @mytharcher

  - 修正已上傳檔案的回應資料 @mytharcher

- **[工作流程：審批]** 修正預先載入記錄的關聯欄位 @mytharcher
