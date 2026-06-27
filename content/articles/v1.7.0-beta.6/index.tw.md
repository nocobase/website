---
title: "NocoBase v1.7.0-beta.6：支援設定聚合結果的精確度"
description: "v1.7.0-beta.6 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援將長文字欄位設為關聯欄位的標題欄位 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) - 作者：@katherinehhh

- **[工作流：彙總節點]** 支援為彙總結果設定精確度 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) - 作者：@mytharcher

### 🐛 錯誤修復

- **[評估器]** 將四捨五入的小數位數還原為 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) - 作者：@mytharcher

- **[工作流]** 修正在工作流程刪除後，舊任務計數遺失的問題 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) - 作者：@mytharcher

- **[資料來源：主要]** 無法建立 MySQL 檢視表。([#6477](https://github.com/nocobase/nocobase/pull/6477)) - 作者：@aaaaaajie

- **[檔案管理員]** 對 URL 進行編碼 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) - 作者：@chenos

- **[備份管理員]**
  - 因 GTID 集合重疊導致 MySQL 資料庫還原失敗 - 作者：@gchust

  - 從備份範本建立子應用程式時，上傳的檔案未被還原 - 作者：@gchust

- **[工作流：審核]**
  - 修正在流程表格中遺失的操作按鈕 - 作者：@mytharcher

  - 將傳回的審核狀態改為待辦事項 - 作者：@mytharcher
