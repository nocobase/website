---
title: "NocoBase v1.8.0-alpha.9：在節點結果中新增審批記錄變數"
description: "v1.8.0-alpha.9 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 支援外部資料來源中 SQL Server 的 BIT 欄位。（[#7058](https://github.com/nocobase/nocobase/pull/7058)）by @aaaaaajie

- **[資料來源：外部 SQL Server]** 支援外部資料來源中的 SQL Server BIT 欄位 by @aaaaaajie

- **[工作流程：審批]** 在節點結果中新增審批記錄變數 by @mytharcher

### 🚀 改進

- **[客戶端]** 當網格卡片區塊的操作列為空時自動隱藏（[#7069](https://github.com/nocobase/nocobase/pull/7069)）by @zhangzhonghe

- **[驗證]** 從 `verifiers:listByUser` API 的回應中移除驗證者選項（[#7090](https://github.com/nocobase/nocobase/pull/7090)）by @2013xile

- **[工作流程]** 調整 `getCollectionFieldOptions` 的 API（[#7095](https://github.com/nocobase/nocobase/pull/7095)）by @mytharcher

- **[工作流程：前置事件]** 調整變數 API by @mytharcher

- **[工作流程：審批]** 調整變數 API by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 表格欄位文字對齊功能無法運作（[#7094](https://github.com/nocobase/nocobase/pull/7094)）by @zhangzhonghe

  - 指派欄位值：無法清除關聯欄位的資料（[#7086](https://github.com/nocobase/nocobase/pull/7086)）by @zhangzhonghe

  - 為每個欄位使用獨立的變數作用域（[#7012](https://github.com/nocobase/nocobase/pull/7012)）by @mytharcher

  - 子表格欄位上的樣式條件未正確套用（[#7083](https://github.com/nocobase/nocobase/pull/7083)）by @katherinehhh

  - 在篩選表單中透過關聯集合欄位進行篩選無效（[#7070](https://github.com/nocobase/nocobase/pull/7070)）by @zhangzhonghe

  - 公開表單欄位預設值中的 URL 查詢參數變數無法運作（[#7084](https://github.com/nocobase/nocobase/pull/7084)）by @katherinehhh

  - 切換頁面時，子表格中的必填驗證訊息持續存在（[#7080](https://github.com/nocobase/nocobase/pull/7080)）by @katherinehhh

  - 點擊篩選按鈕時發生錯誤（[#7100](https://github.com/nocobase/nocobase/pull/7100)）by @zhangzhonghe

- **[資料庫]** 支援 updateOrCreate 和 firstOrCreate 中的關聯更新（[#7088](https://github.com/nocobase/nocobase/pull/7088)）by @chenos

- **[工作流程]**
  - 修正在非當前工作流程版本中，統計資料被串聯刪除的問題（[#7103](https://github.com/nocobase/nocobase/pull/7103)）by @mytharcher

  - 修正對大整數數字執行檢查時不正確的問題（[#7099](https://github.com/nocobase/nocobase/pull/7099)）by @mytharcher

  - 修正對大整數數字執行檢查時不正確的問題（[#7091](https://github.com/nocobase/nocobase/pull/7091)）by @mytharcher

- **[動作：匯入記錄]** 解決批次匯入使用者名稱和密碼後登入失敗的問題（[#7076](https://github.com/nocobase/nocobase/pull/7076)）by @aaaaaajie

- **[集合欄位：多對多（陣列）]** 當存在 `updatedBy` 欄位時，更新多對多（陣列）欄位會拋出錯誤（[#7089](https://github.com/nocobase/nocobase/pull/7089)）by @2013xile

- **[檔案管理員]** 修正在審批流程中無法更新附件欄位的問題（[#7093](https://github.com/nocobase/nocobase/pull/7093)）by @mytharcher

- **[公開表單]** 公開表單：修正在提交表單時未經授權存取的問題（[#7085](https://github.com/nocobase/nocobase/pull/7085)）by @zhangzhonghe

- **[集合欄位：序號]** 修正基於字串的大整數序號計算問題（[#7079](https://github.com/nocobase/nocobase/pull/7079)）by @mytharcher

- **[工作流程：審批]**
  - 使用比較而非隱含邏輯以避免型別問題 by @mytharcher

  - 僅參與者可以檢視（取得）審批詳情 by @mytharcher

- **[電子郵件管理員]** 電子郵件刪除錯誤 by @jiannx
