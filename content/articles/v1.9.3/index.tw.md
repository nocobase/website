---
title: "NocoBase v1.9.3：修復重複審批工作流程時拋出的錯誤"
description: "v1.9.3 版本發行說明"
---

### 🚀 功能改進

- **[資料庫]** 為 MariaDB 連線實例新增 `multipleStatements` 選項，支援在單次查詢中執行多條陳述句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) - 感謝 @mytharcher

- **[工作流程]** 支援工作流程中的資料區塊使用合併明細設定選單 ([#7771](https://github.com/nocobase/nocobase/pull/7771)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[伺服器]** 依應用程式名稱隔離發布/訂閱頻道 ([#7762](https://github.com/nocobase/nocobase/pull/7762)) - 感謝 @mytharcher

- **[客戶端]** 修復「超出最大呼叫堆疊大小」錯誤 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) - 感謝 @zhangzhonghe

- **[資料庫]** 修正當欄位名稱使用蛇形命名法時，索引欄位偵測不正確的問題 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) - 感謝 @2013xile

- **[工作流程]** 解決叢集模式下工作流程調度器無法正確識別閒置狀態的問題，此問題可能導致外掛程式就緒前觸發不必要的佇列事件 ([#7768](https://github.com/nocobase/nocobase/pull/7768)) - 感謝 @mytharcher

- **[行動版（已棄用）]** 修復行動裝置上日期欄位預設值彈出視窗無法選取日期的問題 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) - 感謝 @zhangzhonghe

- **[工作流程：審核]** 修復重複審核工作流程時拋出的錯誤 - 感謝 @mytharcher

- **[電子郵件管理員]** 為 mailMessages 集合新增索引 - 感謝 @jiannx
