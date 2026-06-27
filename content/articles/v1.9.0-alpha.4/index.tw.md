---
title: "NocoBase v1.9.0-alpha.4：支援透過環境變數設定請求主體大小限制"
description: "v1.9.0-alpha.4 版本發行說明"
---

### 🎉 新功能

- **[伺服器]** 支援透過環境變數設定請求主體大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273)) - @aaaaaajie
- **[客戶端]** 表格區塊支援新增「欄位設定」按鈕，用於配置欄位順序與可見性 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) - @kerwin612
- **[Office 檔案預覽器]** 支援透過 Microsoft 即時預覽功能預覽 Office 檔案 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) - @mytharcher
- **[資料來源：主資料來源]**
  - 支援從主資料來源讀取資料表 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) - @aaaaaajie
- **[工作流程：並行節點]** 為並行節點新增「全部完成」模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) - @mytharcher
- **[認證：SAML 2.0]** 支援在使用者未經認證時自動重新導向至 SSO URL - @2013xile
- **[Redis 佇列適配器]** 為事件佇列新增 Redis 適配器 - @mytharcher

### 🚀 改進

- **[客戶端]** 選取選單後不再自動關閉 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) - @kerwin612
- **[伺服器]** 當處理項目未滿時，使並行記憶體佇列可用 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) - @mytharcher
- **[資料庫]** 當資料集超過閾值時自動啟用簡單分頁 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) - @aaaaaajie
- **[通知：應用內訊息]** 將應用內訊息從 SSE 改為 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) - @mytharcher
- **[工作流程]**
  - 減少準備執行時載入的工作數量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) - @mytharcher
  - 為測試變數新增 json 類型常數 ([#7274](https://github.com/nocobase/nocobase/pull/7274)) - @mytharcher
- **[AI 整合]** 移除呼叫 `saveJob` 時的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) - @mytharcher
- **[工作流程：人工節點]** storePopupContext 支援儲存預設上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) - @zhangzhonghe
- **[工作流程：JSON 計算]** 使 JSON 查詢節點可測試 - @mytharcher
- **[Redis 佇列適配器]** 使 Redis 適配器在處理項目未滿時並行佇列可用 - @mytharcher
- **[認證：釘釘]** 在釘釘客戶端中，將導航欄標題設為空字串，而非顯示「載入中…」 - @2013xile

### 🐛 錯誤修復

- **[工具函式]** parseDate 的時區處理不正確 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) - @katherinehhh
- **[客戶端]**
  - 修復檔案預覽項目在空 URL 時的問題 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) - @mytharcher
  - 預覽時為本地檔案添加完整 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) - @mytharcher
  - 修復樹狀表格無法展開的問題 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) - @zhangzhonghe
  - 修復表格行拖曳排序的異常行為 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) - @ChimingLiu
  - 修復解析欄位預設值時的無限迴圈問題 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) - @zhangzhonghe
  - 篩選表單中關聯欄位資料選擇器彈窗的日期欄位顯示問題 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) - @katherinehhh
  - 使用公式作為標題欄位時，選擇關聯欄位的模糊搜尋失效 ([#7280](https://github.com/nocobase/nocobase/pull/7280)) - @katherinehhh
  - 子表格聯動規則中缺少當前物件變數 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) - @katherinehhh
  - 修復 Markdown 欄位在詳細檢視中未正確渲染的問題 ([#7257](https://github.com/nocobase/nocobase/pull/7257)) - @aaaaaajie
  - 欄位變更後，依賴於該欄位的關聯欄位未清除其值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) - @zhangzhonghe
  - 歷史資料的日期欄位中使用已棄用的日期變數時的顯示問題 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) - @katherinehhh
  - 資料選擇器標題欄位設定無效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) - @zhangzhonghe
- **[資料庫]**
  - 解決因資料表命名慣例導致的自動簡單分頁失敗 ([#7256](https://github.com/nocobase/nocobase/pull/7256)) - @aaaaaajie
  - 修復從 PostgreSQL 匯出大型資料集時的失敗問題 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) - @aaaaaajie
  - 修復在表格區塊中使用 MSSQL 外部資料來源時，預設主鍵排序導致列表載入失敗的問題 ([#7259](https://github.com/nocobase/nocobase/pull/7259)) - @aaaaaajie
- **[認證]** 修復子應用配置中 `secret` 為空導致無法登入的問題 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) - @2013xile
- **[檔案管理器]** 修復儲存欄位權限 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) - @mytharcher
- **[工作流程]**
  - 修復處理器退出時結果為 `undefined` 的問題 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) - @mytharcher
  - 修復 MySQL 中儲存工作時的 BigInt ID 問題 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) - @mytharcher
  - 修復依賴項版本錯誤 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) - @mytharcher
- **[工作流程：HTTP 請求節點]** 修復競爭條件錯誤 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) - @mytharcher
- **[操作：匯出記錄]** 修復匯出至 Excel 時巢狀關聯欄位格式不正確的問題 ([#7277](https://github.com/nocobase/nocobase/pull/7277)) - @aaaaaajie
- **[資料來源管理器]** 修復在集合配置中保留外部資料來源屬性的問題 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) - @aaaaaajie
- **[操作：批次編輯]** 無法在資料選擇器中執行批次編輯與批次更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) - @zhangzhonghe
- **[資料來源：外部 Oracle]** 修復在集合配置中保留外部資料來源屬性的問題 - @aaaaaajie
- **[資料來源：外部 SQL Server]** 修復來自外部資料來源的 MSSQL datetime（無時區）欄位儲存格式不一致的問題 - @aaaaaajie
- **[工作流程：子流程]** 修復流程被暫停的問題 - @mytharcher
- **[工作流程：審批]**
  - 修復外部資料來源中審批人選擇拋出錯誤的問題 - @mytharcher
  - 連結按鈕的 URL 指向當前頁面的彈窗，但點擊後顯示 404 錯誤 - @zhangzhonghe
- **[郵件管理器]**
  - 新增 rawId 欄位以進行效能最佳化 - @jiannx
  - HTML 中的 ref 屬性導致渲染異常 - @jiannx
  - 在 MySQL 下，messages 與 labels 關聯集合異常 - @jiannx
