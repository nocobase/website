---
title: "NocoBase v2.0.7：支援多關鍵字搜尋內建文件，並在單次工具呼叫中閱讀多份文件"
description: "v2.0.7 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 支援以多個關鍵字搜尋內建文件，並在單次工具呼叫中讀取多份文件 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 改進

- **[客戶端]** 支援表格的摘要設定 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos

- **[嵌入 NocoBase]** 提供 sanitize API，用於過濾動作中的關聯值 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 錯誤修復

- **[資料視覺化]** 修正圖表外掛項目文字的國際化問題 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang

- **[工作流：JavaScript]** 修正測試案例在 Windows 上無法通過的問題 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher

- **[AI 員工]** 解決 AI 訊息渲染長度為 0 的問題 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang

- **[範本列印]** 修正 ACL API 已變更但未適配外掛的問題 by @mytharcher

- **[工作流：審批]** 在審批動作中過濾關聯值，以避免任何超出權限的資料操作 by @mytharcher

- **[郵件管理員]** 修正圖片內容 ID 格式解析問題 by @jiannx
