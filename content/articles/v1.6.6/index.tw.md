---
title: "NocoBase v1.6.6：支援長文字欄位作為關聯欄位的標題欄位"
description: "v1.6.6 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援將長文字欄位設為關聯欄位的標題欄位 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) - 作者：@katherinehhh

- **[工作流：彙總節點]** 支援為彙總結果設定精確度 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) - 作者：@mytharcher

### 🚀 改進

- **[檔案儲存：S3(Pro)]** 將文字「Access URL Base」更改為「Base URL」 - 作者：@zhangzhonghe

### 🐛 錯誤修復

- **[求值器]** 將小數位數恢復為 9 位 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) - 作者：@mytharcher

- **[檔案管理]** 對 URL 進行編碼 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) - 作者：@chenos

- **[資料來源：主要]** 無法建立 MySQL 檢視表 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) - 作者：@aaaaaajie

- **[工作流]** 修正在工作流刪除後，舊任務計數錯誤的問題 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) - 作者：@mytharcher

- **[嵌入 NocoBase]** 頁面顯示為空白 - 作者：@zhangzhonghe

- **[備份管理器]**
  - 從備份模板建立子應用時，上傳的檔案未被還原 - 作者：@gchust

  - 因 GTID 集合重疊導致的 MySQL 資料庫還原失敗 - 作者：@gchust

- **[工作流：審批]**
  - 將返回的審批狀態更改為待辦事項 - 作者：@mytharcher

  - 修正在流程表格中缺少操作按鈕的問題 - 作者：@mytharcher
