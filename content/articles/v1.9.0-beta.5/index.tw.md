---
title: "NocoBase v1.9.0-beta.5：支援透過環境變數設定請求主體大小限制"
description: "v1.9.0-beta.5 版本發行說明"
---

### 🎉 新功能

- **[伺服器]** 支援透過環境變數設定請求主體大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273)) - @aaaaaajie

- **[工作流：並行節點]** 為並行節點新增「全部完成」模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) - @mytharcher

- **[認證：SAML 2.0]** 支援在使用者未經認證時自動重新導向至 SSO 網址 - @2013xile

- **[Redis 佇列適配器]** 為事件佇列新增 Redis 適配器 - @mytharcher

- **[工作流：日期計算節點]** 支援測試執行節點 - @mytharcher

### 🚀 改進

- **[伺服器]** 當處理項目未滿時，使並發記憶體佇列可用 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) - @mytharcher

- **[資料庫]** 當資料集超過閾值時自動啟用簡單分頁 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) - @aaaaaajie

- **[客戶端]** 顏色選擇器：新增四種推薦顏色 ([#7226](https://github.com/nocobase/nocobase/pull/7226)) - @zhangzhonghe

- **[AI 整合]** 移除呼叫 `saveJob` 時的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) - @mytharcher

- **[工作流：人工節點]** storePopupContext 支援儲存預設上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) - @zhangzhonghe

- **[工作流]**
  - 為測試變數新增 json 類型常數 ([#7274](https://github.com/nocobase/nocobase/pull/7274)) - @mytharcher

  - 當因狀態不應執行時，使用記錄日誌代替拋出錯誤 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) - @mytharcher

  - 使比較相容於日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237)) - @mytharcher

- **[集合欄位：公式]** 新增更多可計算的介面 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) - @mytharcher

- **[Redis 佇列適配器]** 使 Redis 適配器在處理項目未滿時並發佇列可用 - @mytharcher

- **[工作流：JSON 計算]** 使 JSON 查詢節點可測試 - @mytharcher

- **[工作流：審批]** 支援在相關資料刪除時刪除審批 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 使用公式作為標題欄位時，關聯選擇欄位的模糊搜尋無法運作 ([#7280](https://github.com/nocobase/nocobase/pull/7280)) - @katherinehhh

  - 子表格聯動規則中缺少當前物件變數 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) - @katherinehhh

  - 欄位變更後，依賴此欄位的關聯欄位未清除其值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) - @zhangzhonghe

  - 修復 Markdown 欄位在詳細檢視中未正確渲染的問題。([#7257](https://github.com/nocobase/nocobase/pull/7257)) - @aaaaaajie

  - 資料選擇器標題欄位設定無效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) - @zhangzhonghe

  - 避免在 appends 中選取非關聯欄位 ([#7231](https://github.com/nocobase/nocobase/pull/7231)) - @mytharcher

  - 刪除選單時，uiSchemas 表中對應的資料未被刪除 ([#7232](https://github.com/nocobase/nocobase/pull/7232)) - @zhangzhonghe

  - 樣式規則在表格操作列上無法運作 ([#7225](https://github.com/nocobase/nocobase/pull/7225)) - @katherinehhh

  - 歷史資料的日期欄位中使用已棄用的日期變數時出現顯示問題 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) - @katherinehhh

  - 聯動規則中關聯欄位的顯示問題 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) - @katherinehhh

  - 修復錯誤：無法解析 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) - @zhangzhonghe

- **[資料庫]**
  - 解決因資料表命名慣例導致的自動簡單分頁失敗。([#7256](https://github.com/nocobase/nocobase/pull/7256)) - @aaaaaajie

  - 修復在表格區塊中使用 MSSQL 外部資料源時，預設主鍵排序導致列表載入失敗的問題。([#7259](https://github.com/nocobase/nocobase/pull/7259)) - @aaaaaajie

  - 修復從 PostgreSQL 匯出大型資料集時失敗的問題 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) - @aaaaaajie

  - 修復為外部資料源表格啟用簡單分頁時出現的錯誤 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) - @aaaaaajie

- **[認證]** 修復子應用程式配置中 `secret` 為空導致無法登入的問題 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) - @2013xile

- **[工作流]** 修復依賴項版本錯誤 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) - @mytharcher

- **[動作：批次編輯]** 無法在資料選擇器中執行批次編輯和批次更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) - @zhangzhonghe

- **[資料源管理器]** 修復在集合配置中保留外部資料源屬性的問題 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) - @aaaaaajie

- **[集合欄位：排序]** 複製記錄時缺少排序欄位選項 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) - @katherinehhh

- **[資料源：外部 Oracle]** 修復在集合配置中保留外部資料源屬性的問題 - @aaaaaajie

- **[工作流：子流程]** 修復當回呼訊號到達但待處理執行不在當前實例時拋出的錯誤 - @mytharcher

- **[工作流：審批]**
  - 修復提交審批時的多層級關聯問題 - @mytharcher

  - 連結按鈕的 URL 指向當前頁面的彈出視窗，但點擊後顯示 404 錯誤 - @zhangzhonghe

  - 修復提交審批時的關聯問題 - @mytharcher

  - 為記錄列表中已刪除的審批新增容錯處理 - @mytharcher

  - 修復刪除記錄時的異常 - @mytharcher

- **[電子郵件管理器]** 在 mysql 下，訊息和標籤的關聯集合出現異常 - @jiannx
