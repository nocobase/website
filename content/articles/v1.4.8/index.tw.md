---
title: "NocoBase v1.4.8：錯誤修復"
description: "v1.4.8 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在關聯欄位記錄選擇器中配置的篩選表單的資料模板問題 ([#5837](https://github.com/nocobase/nocobase/pull/5837))，由 @katherinehhh 提供

  - 修正 Markdown 字串模板無法載入關聯資料（外部資料源）的問題 ([#5791](https://github.com/nocobase/nocobase/pull/5791))，由 @katherinehhh 提供

- **[使用者資料同步]** 同步時跳過不支援的資料類型，而非擲回錯誤。([#5835](https://github.com/nocobase/nocobase/pull/5835))，由 @chenzhizdt 提供

- **[備份管理員]**
  - 修正大型備份檔案下載視窗彈出緩慢的問題，由 @gchust 提供

  - 修正還原備份子應用程式導致所有應用程式重新啟動的問題，由 @gchust 提供
