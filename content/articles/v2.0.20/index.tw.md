---
title: "NocoBase v2.0.20：修復 worker 發送的生命週期事件導致服務應用停止的問題"
description: "v2.0.20 版本發行說明"
---

### 🐛 錯誤修復

- **[伺服器]** 修復工作進程發送的生命週期事件導致服務應用程式停止的問題 ([#8906](https://github.com/nocobase/nocobase/pull/8906))，由 @mytharcher 貢獻

- **[資料來源管理器]** 修復 AI 員工建立的集合總是缺少 `createBy` 和 `updateBy` 欄位的問題 ([#8895](https://github.com/nocobase/nocobase/pull/8895))，由 @cgyrock 貢獻

- **[動作：匯入記錄 Pro]** 修復延遲匯入導致 SES 錯誤的問題，由 @mytharcher 貢獻

- **[範本列印]** 修復 SQL 集合列印錯誤的問題，由 @jiannx 貢獻

- **[電子郵件管理器]** 修復當電子郵件不存在時頁面出現錯誤的問題，由 @jiannx 貢獻
