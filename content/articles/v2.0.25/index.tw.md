---
title: "NocoBase v2.0.25：修復 JSON 欄位導致載入審批記錄列表時的效能問題"
description: "v2.0.25 版本發行說明"
---

### 🚀 改善

- **[工作流程：審核]** 修正載入審核記錄列表時，JSON 欄位導致的效能問題，由 @mytharcher 提出

### 🐛 錯誤修正

- **[伺服器]** 將發布/訂閱的關閉時機改為 `beforeStop`，以避免在資料庫關閉後發送或處理訊息 ([#8934](https://github.com/nocobase/nocobase/pull/8934))，由 @mytharcher 提出

- **[在地化]** 防止在權限被拒絕時發出 localizationTexts:missing 請求 ([#8903](https://github.com/nocobase/nocobase/pull/8903))，由 @chenos 提出

- **[資料來源：外部 Oracle]** 修正載入 Oracle 外部資料來源時發生的錯誤，由 @2013xile 提出
