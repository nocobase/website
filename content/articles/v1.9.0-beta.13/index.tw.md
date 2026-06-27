---
title: "NocoBase v1.9.0-beta.13：重構分支配置以適應核心變更"
description: "v1.9.0-beta.13 版本發行說明"
---

### 🚀 改善項目

- **[客戶端]** 為取得更準確的檔案 MIME 類型，在客戶端使用 `mime` 套件偵測檔案 MIME 類型 ([#7551](https://github.com/nocobase/nocobase/pull/7551))，作者：@mytharcher

- **[資料來源：主資料庫]** 重構錯誤訊息的在地化邏輯，並在錯誤處理外掛中處理 ([#7582](https://github.com/nocobase/nocobase/pull/7582))，作者：@2013xile

- **[工作流程]** 刪除節點時新增 `keepBranch` 選項 ([#7571](https://github.com/nocobase/nocobase/pull/7571))，作者：@mytharcher

- **[工作流程：審批]** 重構分支設定以適應核心變更，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正篩選區塊中清除日期欄位時的錯誤 ([#7632](https://github.com/nocobase/nocobase/pull/7632))，作者：@katherinehhh

  - 修正編輯表單抽屜中子表格預設值無效的問題 ([#7631](https://github.com/nocobase/nocobase/pull/7631))，作者：@katherinehhh

  - 修正預覽時圖片同時旋轉與縮放顯示不正確的問題 ([#7573](https://github.com/nocobase/nocobase/pull/7573))，作者：@mytharcher

  - 修正分頁圖示彈出視窗被遮擋的問題 ([#7607](https://github.com/nocobase/nocobase/pull/7607))，作者：@zhangzhonghe

- **[資料庫]** 修正運算子 `$in` 遇到 `null` 值時拋出錯誤的問題 ([#7610](https://github.com/nocobase/nocobase/pull/7610))，作者：@mytharcher

- **[資料來源：主資料庫]** 修正建立反向關聯欄位後，中繼資料未跨多個節點同步的問題 ([#7628](https://github.com/nocobase/nocobase/pull/7628))，作者：@mytharcher

- **[工作流程：審批]**
  - 修正應用程式未安裝時，因資料表不存在導致遷移腳本錯誤的問題，作者：@mytharcher

  - 修正因跳過鉤子導致雪花 ID 未產生的問題，作者：@mytharcher

- **[驗證：LDAP]** 修正 Active Directory 中非 ASCII (UTF-8) DN 導致 LDAP 繫結失敗的問題，作者：@2013xile
