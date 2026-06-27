---
title: "NocoBase 每週更新：外部資料來源支援按需載入集合"
description: "本週更新包括：在節點結果中新增審批記錄變數、支援 SQL Server 外部資料來源的 BIT 欄位等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.17](https://www.nocobase.com/en/blog/v1.7.17)

*發布日期：2025-06-24*

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正附帶時間的日期欄位範圍限制不正確的問題 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
  - 當 URL 查詢參數變數為空時，資料範圍條件未被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
- **[行動端]** 修正行動端彈出視窗的 z-index 問題 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[日曆]** 修正日曆區塊快速建立表單中的日期欄位問題 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh

### [v1.7.16](https://www.nocobase.com/en/blog/v1.7.16)

*發布日期：2025-06-20*

#### 🐛 錯誤修復

- **[工作流]**

  - 修正對大整數數字執行檢查時不正確的問題 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - 修正統計資料被非當前工作流版本串聯刪除的問題 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
- **[操作：匯入記錄]** 解決批次匯入使用者名稱和密碼後登入失敗的問題 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[工作流：審批]** 僅參與者可以檢視（獲取）審批詳情 by @mytharcher

### [v1.7.15](https://www.nocobase.com/en/blog/v1.7.15)

*發布日期：2025-06-18*

#### 🐛 錯誤修復

- **[客戶端]**

  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - 指派欄位值：無法清除關聯欄位的資料 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - 表格欄位文字對齊功能無法運作 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
- **[工作流]** 修正對大整數數字執行檢查時不正確的問題 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[檔案管理]** 修正附件欄位在審批流程中無法更新的問題 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[工作流：審批]** 使用比較運算而非隱含邏輯以避免型別問題 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.10](https://www.nocobase.com/en/blog/v1.8.0-beta.10)

*發布日期：2025-06-19*

#### 🎉 新功能

- **[工作流：審批]** 新增審批記錄變數至節點結果 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 表格欄位文字對齊功能無法運作 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
  - 指派欄位值：無法清除關聯欄位的資料 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[檔案管理]** 修正附件欄位在審批流程中無法更新的問題 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[工作流]** 修正對大整數數字執行檢查時不正確的問題 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[工作流：審批]** 使用比較運算而非隱含邏輯以避免型別問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.10](https://www.nocobase.com/en/blog/v1.8.0-alpha.10)

*發布日期：2025-06-25*

#### 🎉 新功能

- **[資料來源管理器]** ✨ 支援從外部資料來源按需載入資料表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[工作流：HTTP 請求節點]** 支援 `multipart/form-data` 請求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992
- **[資料來源：外部 SQL Server]** 支援從外部資料來源按需載入資料表 by @aaaaaajie

#### 🐛 錯誤修復

- **[客戶端]**

  - 當 URL 查詢參數變數為空時，資料範圍條件未被移除 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
  - 修正附帶時間的日期欄位範圍限制不正確的問題 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
- **[行動端]** 修正行動端彈出視窗的 z-index 問題 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[日曆]** 修正日曆區塊快速建立表單中的日期欄位問題 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh
- **[工作流：審批]**

  - 修正舊版變數 API 拋出錯誤的問題 by @mytharcher
  - 修正行動端樣式 by @mytharcher
  - 修正當審批相關資料表被刪除時拋出錯誤的問題 by @mytharcher
- **[郵件管理]** 附件未顯示 by @jiannx

### [v1.8.0-alpha.9](https://www.nocobase.com/en/blog/v1.8.0-alpha.9)

*發布日期：2025-06-20*

#### 🎉 新功能

- **[客戶端]** 支援外部資料來源中 SQL Server 的 BIT 欄位。 ([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
- **[工作流：審批]** 新增審批記錄變數至節點結果 by @mytharcher

#### 🚀 改進

- **[客戶端]** 當網格卡片區塊操作欄為空時自動隱藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
- **[驗證]** 從 `verifiers:listByUser` API 的回應中移除驗證者選項 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile
- **[工作流]** 調整 `getCollectionFieldOptions` 的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher
- **[工作流：操作前事件]** 調整變數 API by @mytharcher
- **[工作流：審批]** 調整變數 API by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 表格欄位文字對齊功能無法運作 ([#7094](https://github.com/nocobase/nocobase/pull/7094)) by @zhangzhonghe
  - 指派欄位值：無法清除關聯欄位的資料 ([#7086](https://github.com/nocobase/nocobase/pull/7086)) by @zhangzhonghe
  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - 子表格欄位上的樣式條件未正確套用 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - 在篩選表單中透過關聯資料表欄位進行篩選無效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
  - URL 查詢參數變數在公開表單欄位預設值中無法運作 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - 切換頁面時子表格中的必填驗證訊息持續存在 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - 點擊篩選按鈕時發生錯誤 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
- **[資料庫]** 支援在 updateOrCreate 和 firstOrCreate 中進行關聯更新 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[工作流]**

  - 修正統計資料被非當前工作流版本串聯刪除的問題 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
  - 修正對大整數數字執行檢查時不正確的問題 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - 修正對大整數數字執行檢查時不正確的問題 ([#7091](https://github.com/nocobase/nocobase/pull/7091)) by @mytharcher
- **[操作：匯入記錄]** 解決批次匯入使用者名稱和密碼後登入失敗的問題 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[資料表欄位：多對多（陣列）]** 當存在 `updatedBy` 欄位時，更新多對多（陣列）欄位會拋出錯誤 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[檔案管理]** 修正附件欄位在審批流程中無法更新的問題 ([#7093](https://github.com/nocobase/nocobase/pull/7093)) by @mytharcher
- **[公開表單]** 公開表單：修正表單提交時的未授權存取問題 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe
- **[資料表欄位：序號]** 修正基於字串的大整數序號計算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[工作流：審批]**

  - 使用比較運算而非隱含邏輯以避免型別問題 by @mytharcher
  - 僅參與者可以檢視（獲取）審批詳情 by @mytharcher
- **[郵件管理]** 郵件刪除錯誤 by @jiannx
