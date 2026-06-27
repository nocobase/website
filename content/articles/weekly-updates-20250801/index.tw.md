---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援透過環境變數配置請求主體大小限制、支援透過 Microsoft 即時預覽預覽 Office 檔案，以及其他增強功能。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.11](https://www.nocobase.com/en/blog/v1.8.11)

*發布日期：2025-07-31*

#### 🎉 新功能

- **[Office 檔案預覽器]** 支援透過 Microsoft 即時預覽來預覽 Office 檔案 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher

#### 🚀 改進

- **[client]** 選取選單後不再自動關閉 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[通知：應用內訊息]** 將應用內訊息從 SSE 改為 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[工作流程]** 減少準備執行時需載入的工作數量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
- **[認證：釘釘]** 在釘釘客戶端中，將導航欄標題設為空字串，而非顯示「載入中...」 by @2013xile

#### 🐛 錯誤修復

- **[client]**

  - 修復樹狀表格無法展開的問題 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - 修復表格行拖曳排序的異常行為 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - 修復解析欄位預設值時的無限迴圈問題 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - 修復篩選表單中關係欄位配置資料選擇器時彈窗內日期欄位展示異常的問題 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
- **[工作流程：HTTP 請求節點]** 修復競爭條件錯誤 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[工作流程]** 修復在 MySQL 中儲存工作時的 BigInt ID 問題 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
- **[操作：匯出記錄]** 修復匯出至 Excel 時巢狀關係欄位格式不正確的問題。([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[資料來源：外部 SQL Server]** 修復來自外部資料來源的 MSSQL datetime（無時區）欄位儲存格式不一致的問題 by @aaaaaajie
- **[工作流程：審批]** 修復在外部資料來源中選取審批人時拋出的錯誤 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.4](https://www.nocobase.com/en/blog/v1.9.0-alpha.4)

*發布日期：2025-08-01*

#### 🎉 新功能

- **[server]** 支援透過環境變數設定請求主體大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273)) by @aaaaaajie
- **[client]** 表格區塊支援新增「欄位設定」按鈕，以配置欄位順序與可見性 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
- **[Office 檔案預覽器]** 支援透過 Microsoft 即時預覽來預覽 Office 檔案 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher
- **[資料來源：主資料來源]**

  - 支援從主資料來源讀取表格 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
- **[工作流程：並行節點]** 為並行節點新增「全部完成」模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263)) by @mytharcher
- **[認證：SAML 2.0]** 支援在用戶未認證時自動重新導向至 SSO URL by @2013xile
- **[Redis 佇列適配器]** 為事件佇列新增 Redis 適配器 by @mytharcher

#### 🚀 改進

- **[client]** 選取選單後不再自動關閉 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[server]** 使並發記憶體佇列在處理項目未滿時可用 ([#7267](https://github.com/nocobase/nocobase/pull/7267)) by @mytharcher
- **[database]** 當資料集超過閾值時自動啟用簡單分頁 ([#7227](https://github.com/nocobase/nocobase/pull/7227)) by @aaaaaajie
- **[通知：應用內訊息]** 將應用內訊息從 SSE 改為 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[工作流程]**

  - 減少準備執行時需載入的工作數量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
  - 為測試變數新增 json 類型常數 ([#7274](https://github.com/nocobase/nocobase/pull/7274)) by @mytharcher
- **[AI 整合]** 移除呼叫 `saveJob` 時的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) by @mytharcher
- **[工作流程：人工節點]** storePopupContext 支援儲存預設上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264)) by @zhangzhonghe
- **[工作流程：JSON 計算]** 使 JSON 查詢節點可測試 by @mytharcher
- **[Redis 佇列適配器]** 使 Redis 適配器在處理項目未滿時並發佇列可用 by @mytharcher
- **[認證：釘釘]** 在釘釘客戶端中，將導航欄標題設為空字串，而非顯示「載入中...」 by @2013xile

#### 🐛 錯誤修復

- **[utils]** parseDate 的時區處理不正確 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[client]**

  - 修復檔案預覽項目在空 URL 時的問題 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - 預覽時為本地檔案添加完整 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
  - 修復樹狀表格無法展開的問題 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - 修復表格行拖曳排序的異常行為 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - 修復解析欄位預設值時的無限迴圈問題 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - 修復篩選表單中關係欄位資料選擇器彈窗內的日期欄位顯示問題 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
  - 修復在選擇關聯欄位中使用公式作為標題欄位時模糊搜尋失效的問題 ([#7280](https://github.com/nocobase/nocobase/pull/7280)) by @katherinehhh
  - 子表格聯動規則中缺少當前物件變數 ([#7266](https://github.com/nocobase/nocobase/pull/7266)) by @katherinehhh
  - 修復 Markdown 欄位在詳細檢視中未正確渲染的問題。([#7257](https://github.com/nocobase/nocobase/pull/7257)) by @aaaaaajie
  - 欄位變更後，依賴於此欄位的關聯欄位未清除其值 ([#7262](https://github.com/nocobase/nocobase/pull/7262)) by @zhangzhonghe
  - 歷史資料的日期欄位中使用已棄用的日期變數時的顯示問題 ([#7253](https://github.com/nocobase/nocobase/pull/7253)) by @katherinehhh
  - 資料選擇器標題欄位設定無效 ([#7251](https://github.com/nocobase/nocobase/pull/7251)) by @zhangzhonghe
- **[database]**

  - 解決因資料表命名慣例導致的自動簡單分頁失敗問題。([#7256](https://github.com/nocobase/nocobase/pull/7256)) by @aaaaaajie
  - 修復從 PostgreSQL 匯出大型資料集時失敗的問題 ([#7228](https://github.com/nocobase/nocobase/pull/7228)) by @aaaaaajie
  - 修復在表格區塊中使用 MSSQL 外部資料來源時，預設主鍵排序導致列表載入失敗的問題。([#7259](https://github.com/nocobase/nocobase/pull/7259)) by @aaaaaajie
- **[auth]** 修復子應用配置中 `secret` 為空時無法登入的問題 ([#7239](https://github.com/nocobase/nocobase/pull/7239)) by @2013xile
- **[檔案管理器]** 修復儲存欄位權限 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[工作流程]**

  - 修復處理器退出時結果為 `undefined` 的問題 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
  - 修復在 MySQL 中儲存工作時的 BigInt ID 問題 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
  - 修復依賴版本錯誤 ([#7258](https://github.com/nocobase/nocobase/pull/7258)) by @mytharcher
- **[工作流程：HTTP 請求節點]** 修復競爭條件錯誤 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[操作：匯出記錄]** 修復匯出至 Excel 時巢狀關係欄位格式不正確的問題。([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[資料來源管理器]** 修復在集合配置中保留外部資料來源屬性的問題 ([#7249](https://github.com/nocobase/nocobase/pull/7249)) by @aaaaaajie
- **[操作：批次編輯]** 無法在資料選擇器中執行批次編輯和批次更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250)) by @zhangzhonghe
- **[資料來源：外部 Oracle]** 修復在集合配置中保留外部資料來源屬性的問題 by @aaaaaajie
- **[資料來源：外部 SQL Server]** 修復來自外部資料來源的 MSSQL datetime（無時區）欄位儲存格式不一致的問題 by @aaaaaajie
- **[工作流程：子流程]** 修復流程被暫停的問題 by @mytharcher
- **[工作流程：審批]**

  - 修復在外部資料來源中選取審批人時拋出的錯誤 by @mytharcher
  - 連結按鈕的 URL 指向當前頁面的彈窗，但點擊後顯示 404 錯誤 by @zhangzhonghe
- **[郵件管理器]**

  - 新增 rawId 欄位以進行效能最佳化 by @jiannx
  - HTML 中的 ref 屬性導致渲染異常 by @jiannx
  - 在 MySQL 下，messages 和 labels 的關聯集合異常 by @jiannx
