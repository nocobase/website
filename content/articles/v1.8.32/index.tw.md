---
title: "NocoBase v1.8.32：優化本地化資源載入的方法"
description: "v1.8.32 版本發行說明"
---

### 🚀 功能改進

- **[伺服器]** 優化載入 l10n 資源的方法，以防止阻塞事件循環 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) - @2013xile

- **[快取]** 避免因複製布隆過濾器而導致的效能開銷 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) - @2013xile

- **[動作：匯入記錄]** 改善表格標題遺失時的錯誤訊息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正於篩選區塊中清除日期欄位時發生的錯誤 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) - @katherinehhh

  - 防止表單項目標籤中的文字斷行 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) - @katherinehhh

  - 修正編輯表單抽屜中子表格預設值無效的問題 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) - @katherinehhh

- **[集合欄位：中國行政區劃]** 當城市與區域名稱相同時，資料匯入失敗 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) - @2013xile

- **[工作流]**
  - 修正刪除分支起始節點後，分支內保留的第一個節點鍵值被錯誤更改為新值的問題 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) - @mytharcher

  - 修正應用程式停止時記錄器拋出錯誤的問題 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) - @mytharcher

- **[檔案管理]** 修正 `.msg` 檔案無法正常上傳的問題 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) - @mytharcher

- **[資料來源：主要]** 修正建立反向關聯欄位後，多個節點間中繼資料未同步的問題 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) - @mytharcher

- **[工作流：審批]**
  - 修正審批完成通知中狀態文字的翻譯問題，當使用者未設定語言偏好時，使用系統預設語言進行翻譯 - @mytharcher

  - 修正新增受託人後任務計數未更新的問題 - @mytharcher
