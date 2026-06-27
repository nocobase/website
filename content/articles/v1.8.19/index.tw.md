---
title: "NocoBase v1.8.19：為通知配置新增內聯模板類型"
description: "v1.8.19 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 為通知配置新增內嵌範本類型，作者 @mytharcher

### 🚀 優化

- **[客戶端]** 支援在 Select 元件處於唯讀模式時，顯示以字串識別的圖示 ([#7420](https://github.com/nocobase/nocobase/pull/7420))，作者 @mytharcher
- **[資料庫]** 優化 ACL Meta 查詢效能 ([#7400](https://github.com/nocobase/nocobase/pull/7400))，作者 @aaaaaajie
- **[行動端]** 優化行動版彈出元件 ([#7414](https://github.com/nocobase/nocobase/pull/7414))，作者 @zhangzhonghe

### 🐛 錯誤修復

- **[資料庫]** 修復 Postgres 外部資料表讀取時，包含其他 schema 中檢視表的問題 ([#7410](https://github.com/nocobase/nocobase/pull/7410))，作者 @aaaaaajie
- **[區塊：範本]** 修復郵件區塊放置在繼承範本區塊內時無法顯示的問題 ([#7430](https://github.com/nocobase/nocobase/pull/7430))，作者 @gchust
- **[操作：匯入記錄 Pro]** 在匯入重複偵測期間，禁止指派關聯欄位。作者 @aaaaaajie
- **[工作流：審批]** 修正在會簽時使用者列表為空的問題，作者 @mytharcher
- **[遷移管理員]** 建立遷移檔案時，跳過最新版 pg_dump 產生的 `\restrict` 與 `\unrestrict` 指令，以解決還原錯誤。作者 @2013xile
