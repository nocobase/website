---
title: "NocoBase v1.7.0-beta.17：支援在區塊中更新資料後，重新整理其他資料區塊的資料"
description: "v1.7.0-beta.17 版本發行說明"
---

### 🎉 新功能

- **[部門]** 將部門、附件網址與工作流程回應訊息外掛改為免費 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) - @chenos

- **[動作：批次更新]** 支援在更新區塊資料後，重新整理其他資料區塊的資料 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) - @zhangzhonghe

### 🚀 改進

- **[工作流程]** 支援工作流程任務的固定彈出視窗網址 ([#6640](https://github.com/nocobase/nocobase/pull/6640)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 切換到群組選單時，不應跳轉到已在選單中隱藏的頁面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) - @zhangzhonghe

  - 篩選表單不應顯示「有未儲存的變更」提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) - @zhangzhonghe

  - 修正預覽圖片被遮擋的問題 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) - @zhangzhonghe

  - 在篩選表單中，點擊篩選按鈕時，若存在未通過驗證的欄位，仍會觸發篩選 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) - @zhangzhonghe

  - 關聯欄位的「允許複選」選項無效 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) - @katherinehhh

  - 在表單區塊中，欄位配置的預設值會先顯示為原始變數字串，然後消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) - @zhangzhonghe

- **[集合欄位：附件(網址)]** 僅允許具有公開網址存取權限的檔案集合 ([#6664](https://github.com/nocobase/nocobase/pull/6664)) - @katherinehhh

- **[檔案儲存：S3(專業版)]**
  - 個別 baseurl 與公開設定，改善 S3 專業版儲存設定的使用者體驗 - @jiannx

  - 整理語言 - @jiannx

- **[工作流程：審核]** 支援任務中心中審核項目的固定網址 - @mytharcher

- **[遷移管理員]** 若遷移過程中出現環境變數彈出視窗，則跳過自動備份選項會失效 - @gchust
