---
title: "NocoBase v1.8.8：為並行節點新增「全部已結算」模式"
description: "v1.8.8 版本發行說明"
---

### 🎉 新功能

- **[工作流：並行節點]** 為並行節點新增「全部已結算」模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) - 貢獻者：@mytharcher

- **[Redis 佇列適配器]** 為事件佇列新增 Redis 適配器 - 貢獻者：@mytharcher

### 🚀 改進

- **[伺服器]** 當處理項目未滿時，使並行記憶體佇列可用 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) - 貢獻者：@mytharcher

- **[資料庫]** 當資料集超過閾值時，自動啟用簡單分頁 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) - 貢獻者：@aaaaaajie

- **[工作流：人工節點]** storePopupContext 支援儲存預設上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) - 貢獻者：@zhangzhonghe

- **[Redis 佇列適配器]** 針對 Redis 適配器，當處理項目未滿時使並行佇列可用 - 貢獻者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 子表格聯動規則中缺少當前物件變數 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) - 貢獻者：@katherinehhh

  - 資料選擇器標題欄位設定無效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) - 貢獻者：@zhangzhonghe

  - 修正在詳細檢視中 Markdown 欄位未正確渲染的問題 ([#7257](https://github.com/nocobase/nocobase/pull/7257)) - 貢獻者：@aaaaaajie

  - 欄位變更後，依賴於該欄位的關聯欄位未清除其值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) - 貢獻者：@zhangzhonghe

  - 在歷史資料的日期欄位中使用已棄用日期變數時的顯示問題 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) - 貢獻者：@katherinehhh

- **[資料庫]**
  - 解決因資料表命名慣例導致自動簡單分頁失敗的問題 ([#7256](https://github.com/nocobase/nocobase/pull/7256)) - 貢獻者：@aaaaaajie

  - 修正從 PostgreSQL 匯出大型資料集時失敗的問題 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) - 貢獻者：@aaaaaajie

  - 修正使用 MSSQL 外部資料來源於表格區塊時，預設主鍵排序導致列表載入失敗的問題 ([#7259](https://github.com/nocobase/nocobase/pull/7259)) - 貢獻者：@aaaaaajie

- **[認證]** 修正子應用程式配置中 `secret` 為空時導致無法登入的問題 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) - 貢獻者：@2013xile

- **[資料來源管理器]** 修正保留集合配置中的外部資料來源屬性 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) - 貢獻者：@aaaaaajie

- **[動作：批次編輯]** 無法在資料選擇器中執行批次編輯與批次更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) - 貢獻者：@zhangzhonghe

- **[工作流]** 修正依賴項的錯誤版本 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) - 貢獻者：@mytharcher

- **[資料來源：外部 Oracle]** 修正保留集合配置中的外部資料來源屬性 - 貢獻者：@aaaaaajie

- **[工作流：審批]** 連結按鈕的 URL 指向當前頁面的彈出視窗，但點擊後顯示 404 錯誤 - 貢獻者：@zhangzhonghe

- **[郵件管理器]** 在 MySQL 下，訊息與標籤的關聯集合出現異常 - 貢獻者：@jiannx
