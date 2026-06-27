---
title: "NocoBase v2.0.0-alpha.21：錯誤修復"
description: "v2.0.0-alpha.21 版本發布說明"
---

### 🚀 改進

- **[快取]** 避免因複製布隆過濾器而導致的效能開銷 ([#7652](https://github.com/nocobase/nocobase/pull/7652)) - 感謝 @2013xile

- **[伺服器]** 優化載入 l10n 資源的方法，以防止阻塞事件循環 ([#7653](https://github.com/nocobase/nocobase/pull/7653)) - 感謝 @2013xile

- **[動作：匯入記錄]** 當表格標題遺失時，改善錯誤訊息 ([#7656](https://github.com/nocobase/nocobase/pull/7656)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 防止表單項目標籤中的文字斷行 ([#7647](https://github.com/nocobase/nocobase/pull/7647)) - 感謝 @katherinehhh

- **[資料視覺化]** 修正解析變數時的 SQL 查詢問題 ([#7642](https://github.com/nocobase/nocobase/pull/7642)) - 感謝 @heziqiang

- **[工作流程]** 修正應用程式停止時記錄器拋出的錯誤 ([#7639](https://github.com/nocobase/nocobase/pull/7639)) - 感謝 @mytharcher
