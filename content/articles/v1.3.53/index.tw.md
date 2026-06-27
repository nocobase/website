---
title: "NocoBase v1.3.53：匯出必要鉤子"
description: "v1.3.53 版本發行說明"
---

### 🚀 改進項目

- **[客戶端]**
  - 匯出必要的 Hook（[#5702](https://github.com/nocobase/nocobase/pull/5702)）by @mytharcher

  - 中國地區欄位外掛從內建外掛中移除（[#5693](https://github.com/nocobase/nocobase/pull/5693)）by @katherinehhh

- **[工作流程：動作前事件]** 移除請求攔截器中的警告日誌 by @mytharcher

### 🐛 錯誤修復

- **[CLI]** 守護行程模式未刪除 sock 檔案（[#5750](https://github.com/nocobase/nocobase/pull/5750)）by @chenos

- **[客戶端]**
  - 修復多個關聯欄位指向相同目標集合時互相影響的問題（[#5744](https://github.com/nocobase/nocobase/pull/5744)）by @katherinehhh

  - 修復子表格中核取方塊對齊問題（[#5735](https://github.com/nocobase/nocobase/pull/5735)）by @katherinehhh

  - 修復資料選擇器中外部鍵欄位顯示問題（[#5734](https://github.com/nocobase/nocobase/pull/5734)）by @katherinehhh

  - 修復調整 feedbackLayout 以改善子表格中的驗證訊息顯示（[#5700](https://github.com/nocobase/nocobase/pull/5700)）by @katherinehhh

- **[伺服器端]** 依賴順序載入外掛（[#5706](https://github.com/nocobase/nocobase/pull/5706)）by @chenos

- **[區塊：地圖]** 修正在 Google 地圖中變更縮放層級時的錯誤（[#5722](https://github.com/nocobase/nocobase/pull/5722)）by @katherinehhh

- **[資料來源：主要]** 修正在檢視集合中推斷欄位名稱的問題（[#5729](https://github.com/nocobase/nocobase/pull/5729)）by @chareice

- **[檔案管理員]** 當端點不為空時，將 forcePathStyle 設為 true（[#5712](https://github.com/nocobase/nocobase/pull/5712)）by @chenos
