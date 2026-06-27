---
title: "NocoBase v1.7.0-beta.24：支援在區塊中配置聯動規則以動態顯示/隱藏"
description: "v1.7.0-beta.24 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援在區塊中設定連動規則，實現動態顯示/隱藏 ([#6636](https://github.com/nocobase/nocobase/pull/6636)) - 作者：@katherinehhh

### 🚀 改進

- **[客戶端]** 保留參考範本功能 ([#6743](https://github.com/nocobase/nocobase/pull/6743)) - 作者：@gchust

- **[資料視覺化]** 為欄位介面配置新增擴充 API ([#6742](https://github.com/nocobase/nocobase/pull/6742)) - 作者：@2013xile

### 🐛 錯誤修復

- **[create-nocobase-app]** 暫時降級至 2.5.6 以修復 MariaDB 問題 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) - 作者：@chenos

- **[資料庫]** 為 SQL 集合與檢視集合新增 unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) - 作者：@katherinehhh

- **[客戶端]** URL 查詢參數運算子問題 ([#6770](https://github.com/nocobase/nocobase/pull/6770)) - 作者：@katherinehhh

- **[區塊：操作面板]** 啟用僅顯示圖示時，操作面板圖示遺失 ([#6773](https://github.com/nocobase/nocobase/pull/6773)) - 作者：@katherinehhh

- **[工作流程：日期計算節點]** 修復在不支援 `Intl` API 的舊版瀏覽器中的錯誤 - 作者：@mytharcher
