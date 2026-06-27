---
title: "NocoBase v1.7.0-alpha.12：升級依賴並移除 SQLite 支援"
description: "v1.7.0-alpha.12 版本發行說明"
---

### 🚀 改進項目

- **[cli]** 優化 `nocobase upgrade` 指令的內部邏輯 ([#6754](https://github.com/nocobase/nocobase/pull/6754))，作者：@chenos

- **[create-nocobase-app]** 升級相依套件並移除 SQLite 支援 ([#6708](https://github.com/nocobase/nocobase/pull/6708))，作者：@chenos

- **[Mobile]** 優化行動裝置日期選擇器彈出視窗的開啟速度 ([#6735](https://github.com/nocobase/nocobase/pull/6735))，作者：@zhangzhonghe

- **[區塊：範本]** 支援將範本區塊轉換為一般區塊 ([#6662](https://github.com/nocobase/nocobase/pull/6662))，作者：@gchust

- **[檔案管理]** 公開 utils API ([#6705](https://github.com/nocobase/nocobase/pull/6705))，作者：@mytharcher

- **[主題編輯器]** 允許在主題設定中設定側邊欄寬度 ([#6720](https://github.com/nocobase/nocobase/pull/6720))，作者：@chenos

- **[工作流程]** 將日期類型新增至變數類型集合 ([#6717](https://github.com/nocobase/nocobase/pull/6717))，作者：@mytharcher

- **[範本列印]** 將資料源動作控制取代為基於客戶端角色的存取控制。作者：@sheldon66

### 🐛 錯誤修復

- **[client]**
  - 多層級關聯資料中聯動規則的顯示問題 ([#6755](https://github.com/nocobase/nocobase/pull/6755))，作者：@katherinehhh

  - 樹狀表格「新增子項」按鈕聯動規則缺少「目前記錄」([#6752](https://github.com/nocobase/nocobase/pull/6752))，作者：@katherinehhh

  - 成功提交後重新整理資料區塊的問題 ([#6748](https://github.com/nocobase/nocobase/pull/6748))，作者：@zhangzhonghe

  - 左側選單的摺疊按鈕被工作流程彈出視窗遮擋的問題 ([#6733](https://github.com/nocobase/nocobase/pull/6733))，作者：@zhangzhonghe

  - 行動裝置頂部導覽列圖示難以刪除的問題 ([#6734](https://github.com/nocobase/nocobase/pull/6734))，作者：@zhangzhonghe

  - 「啟用索引列」的值顯示不正確 ([#6724](https://github.com/nocobase/nocobase/pull/6724))，作者：@katherinehhh

  - 聯動規則中日期時間欄位條件不起作用 ([#6728](https://github.com/nocobase/nocobase/pull/6728))，作者：@katherinehhh

  - 重新開啟聯動規則時缺少動作選項限制 ([#6723](https://github.com/nocobase/nocobase/pull/6723))，作者：@katherinehhh

  - 被聯動規則隱藏的必填欄位不應影響表單提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709))，作者：@zhangzhonghe

  - 新增關聯資料時缺少對已關聯資料的過濾 ([#6750](https://github.com/nocobase/nocobase/pull/6750))，作者：@katherinehhh

- **[server]** create-migration 產生的 appVersion 不正確 ([#6740](https://github.com/nocobase/nocobase/pull/6740))，作者：@chenos

- **[cli]** 升級時自動更新 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747))，作者：@chenos

- **[build]** 修復 tar 指令中拋出的錯誤 ([#6722](https://github.com/nocobase/nocobase/pull/6722))，作者：@mytharcher

- **[區塊：甘特圖]** 甘特圖區塊在月檢視中日曆標題的月份重疊問題 ([#6753](https://github.com/nocobase/nocobase/pull/6753))，作者：@katherinehhh

- **[動作：匯入記錄]** 修復設定欄位權限時發生的匯入匯出異常。([#6677](https://github.com/nocobase/nocobase/pull/6677))，作者：@aaaaaajie

- **[區塊：範本]** 區塊範本無法在 MySQL 環境中使用 ([#6726](https://github.com/nocobase/nocobase/pull/6726))，作者：@gchust

- **[工作流程]** 修復在子流程中執行排程事件時拋出的錯誤 ([#6721](https://github.com/nocobase/nocobase/pull/6721))，作者：@mytharcher

- **[工作流程：自訂動作事件]** 支援在多筆記錄模式下執行，作者：@mytharcher

- **[動作：匯出記錄 Pro]**
  - 修復設定欄位權限時發生的匯入匯出異常。作者：@aaaaaajie

  - Pro 匯出按鈕在對表格欄位排序後遺失篩選參數，作者：@katherinehhh

- **[檔案儲存：S3(Pro)]**
  - 修復已上傳檔案的回應資料，作者：@mytharcher

  - 為伺服器端上傳新增 multer 處理邏輯，作者：@mytharcher

- **[工作流程：審批]** 修復記錄的預載入關聯欄位，作者：@mytharcher
