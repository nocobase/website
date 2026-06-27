---
title: "NocoBase v1.9.23：允許為導入欄位選擇 ID"
description: "v1.9.23 版本發布說明"
---

### 🚀 改善項目

- **[auth]** 修復 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128))，由 @2013xile 貢獻

- **[匯入記錄操作]** 允許為匯入欄位選擇 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132))，由 @katherinehhh 貢獻

### 🐛 錯誤修復

- **[伺服器]** 修復了匯入資料後，觸發的工作流程未加入處理佇列的問題，確保工作流程在匯入後能立即按預期執行 ([#8121](https://github.com/nocobase/nocobase/pull/8121))，由 @mytharcher 貢獻
