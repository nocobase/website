---
title: "NocoBase v1.8.0-alpha.4：支援篩選更多工作流程欄位"
description: "v1.8.0-alpha.4 版本發行說明"
---

### 🚀 功能改進

- **[工作流程]** 支援篩選更多工作流程欄位 ([#6995](https://github.com/nocobase/nocobase/pull/6995))，作者：@mytharcher

- **[郵件管理]** 支援彈出視窗中的預設發送值、支援收件人模糊搜尋，並修正問題，作者：@jiannx

### 🐛 錯誤修復

- **[資料庫]** 修正：在匯入 xlsx 時缺少建立者與更新者欄位 ([#7011](https://github.com/nocobase/nocobase/pull/7011))，作者：@aaaaaajie

- **[客戶端]**
  - 在指派元件中設定變數時缺少欄位標題 ([#7001](https://github.com/nocobase/nocobase/pull/7001))，作者：@katherinehhh

  - 關聯欄位在唯讀模式下懸停時顯示子表格與子表單 ([#7002](https://github.com/nocobase/nocobase/pull/7002))，作者：@zhangzhonghe

  - 由彈出動作觸發時，Markdown 區塊連結規則無法運作 ([#7007](https://github.com/nocobase/nocobase/pull/7007))，作者：@katherinehhh

  - 在模態框內的詳細區塊子表格中切換頁面時，觸發未儲存變更警告 ([#7004](https://github.com/nocobase/nocobase/pull/7004))，作者：@katherinehhh

  - 欄位樣式連結規則無法運作 ([#7003](https://github.com/nocobase/nocobase/pull/7003))，作者：@katherinehhh

- **[非同步任務管理器]** 修正非同步匯入期間的多重執行問題 ([#7006](https://github.com/nocobase/nocobase/pull/7006))，作者：@aaaaaajie

- **[本地化]** 解決因空白文字導致的錯誤 ([#7010](https://github.com/nocobase/nocobase/pull/7010))，作者：@2013xile

- **[動作：匯出記錄 Pro]** 修正非同步匯入期間的多重執行問題，作者：@aaaaaajie

- **[工作流程：審批]** 修正當由他人審批通過時，委派審批無法繼續進行的問題，作者：@mytharcher

- **[郵件管理]**
  - 資料表 "mailmessagelabels_mailmessages" 的多重主鍵問題，作者：@jiannx

  - 設定彈出視窗不顯示的問題，作者：@jiannx

  - 郵件模糊搜尋以建立唯一篩選條件，作者：@jiannx

  - 收件人模糊搜尋支援關聯欄位，作者：@jiannx

  - 為 mailmessagelabelsMailmessages 新增 "id" 欄位，作者：@jiannx
