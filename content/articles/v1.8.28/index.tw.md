---
title: "NocoBase v1.8.28：在自定義審批區塊的詳情彈窗中新增列印按鈕"
description: "v1.8.28 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]** 為獲得更準確的檔案 MIME 類型，在客戶端使用 `mime` 套件來偵測檔案的 MIME 類型 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) - @mytharcher

- **[工作流程]**
  - 支援透過環境變數限制工作流程中的節點最大數量 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) - @mytharcher

  - 在刪除節點時新增 `keepBranch` 選項 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) - @mytharcher

- **[工作流程：迴圈節點]** 支援透過環境變數限制迴圈節點的最大循環次數 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) - @mytharcher

- **[工作流程：審批]** 在自訂審批區塊的詳細資訊彈出視窗中新增列印按鈕 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正圖片在預覽時同時旋轉與縮放導致顯示不正確的問題 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) - @mytharcher

  - 修正 `AssignedField` 元件中缺少動態屬性，導致「建立記錄」或「更新記錄」節點中檔案上傳失敗的問題 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) - @mytharcher

- **[公開表單]** 修正公開表單中檔案欄位的上傳規則不正確的問題 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) - @mytharcher

- **[日曆]** 修正日曆區塊中因唯一識別碼導致的資料查詢問題 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) - @katherinehhh

- **[認證：LDAP]** 修正 Active Directory 中使用非 ASCII (UTF-8) DN 時 LDAP 繫結失敗的問題 - @2013xile
