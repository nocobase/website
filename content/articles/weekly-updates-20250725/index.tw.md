---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援在主資料來源中顯示外掛定義的表格、節點測試運行等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*發布日期：2025-07-24*

#### 🎉 新功能

* **[認證：SAML 2.0]** 支援在用戶未認證時自動重定向到 SSO URL，由 @2013xile 提供
* **[伺服器]** 支援透過環境變數設定請求主體大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273))，由 @aaaaaajie 提供
* **[工作流：並行節點]** 為並行節點新增「全部完成」模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263))，由 @mytharcher 提供
* **[Redis 佇列適配器]** 為事件佇列新增 Redis 適配器，由 @mytharcher 提供

#### 🚀 改進

* **[工作流]** 為測試變數新增 json 類型常數 ([#7274](https://github.com/nocobase/nocobase/pull/7274))，由 @mytharcher 提供
* **[AI 整合]** 移除呼叫 `saveJob` 時的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275))，由 @mytharcher 提供
* **[工作流：JSON 計算]** 使 JSON 查詢節點可測試，由 @mytharcher 提供
* **[伺服器]** 當處理項目未滿時，使並發記憶體佇列可用 ([#7267](https://github.com/nocobase/nocobase/pull/7267))，由 @mytharcher 提供
* **[資料庫]** 當資料集超過閾值時自動啟用簡單分頁 ([#7227](https://github.com/nocobase/nocobase/pull/7227))，由 @aaaaaajie 提供
* **[工作流：人工節點]** storePopupContext 支援儲存預設上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264))，由 @zhangzhonghe 提供
* **[Redis 佇列適配器]** 使 Redis 適配器在處理項目未滿時並發佇列可用，由 @mytharcher 提供

#### 🐛 錯誤修復

* **[客戶端]**
  * 在使用公式作為標題欄位的選擇關聯欄位中，模糊搜尋無法運作 ([#7280](https://github.com/nocobase/nocobase/pull/7280))，由 @katherinehhh 提供
  * 子表格聯動規則中缺少當前物件變數 ([#7266](https://github.com/nocobase/nocobase/pull/7266))，由 @katherinehhh 提供
  * 資料選擇器標題欄位設定無效 ([#7251](https://github.com/nocobase/nocobase/pull/7251))，由 @zhangzhonghe 提供
  * 修復 Markdown 欄位在詳細檢視中未正確渲染的問題。([#7257](https://github.com/nocobase/nocobase/pull/7257))，由 @aaaaaajie 提供
  * 欄位變更後，依賴於此欄位的關聯欄位未清除其值 ([#7262](https://github.com/nocobase/nocobase/pull/7262))，由 @zhangzhonghe 提供
  * 在歷史資料的日期欄位中使用已棄用的日期變數時出現顯示問題 ([#7253](https://github.com/nocobase/nocobase/pull/7253))，由 @katherinehhh 提供
* **[資料庫]**
  * 解決因資料表命名慣例導致的自動簡單分頁失敗問題。([#7256](https://github.com/nocobase/nocobase/pull/7256))，由 @aaaaaajie 提供
  * 修復從 PostgreSQL 匯出大型資料集時失敗的問題 ([#7228](https://github.com/nocobase/nocobase/pull/7228))，由 @aaaaaajie 提供
  * 修復在表格區塊中使用 MSSQL 外部資料源時，預設主鍵排序導致列表載入失敗的問題。([#7259](https://github.com/nocobase/nocobase/pull/7259))，由 @aaaaaajie 提供
* **[認證]** 修復子應用程式設定中空的 `secret` 導致無法登入的問題 ([#7239](https://github.com/nocobase/nocobase/pull/7239))，由 @2013xile 提供
* **[資料源管理器]** 修復在集合設定中保留外部資料源屬性的問題 ([#7249](https://github.com/nocobase/nocobase/pull/7249))，由 @aaaaaajie 提供
* **[操作：批次編輯]** 無法在資料選擇器中執行批次編輯和批次更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250))，由 @zhangzhonghe 提供
* **[工作流]** 修復依賴項版本錯誤 ([#7258](https://github.com/nocobase/nocobase/pull/7258))，由 @mytharcher 提供
* **[資料源：外部 Oracle]** 修復在集合設定中保留外部資料源屬性的問題，由 @aaaaaajie 提供
* **[工作流：審批]** 連結按鈕的 URL 指向當前頁面的彈出視窗，但點擊後顯示 404 錯誤，由 @zhangzhonghe 提供
* **[郵件管理器]** 在 mysql 下，訊息和標籤的關聯集合出現異常，由 @jiannx 提供

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*發布日期：2025-07-18*

#### 🎉 新功能

- **[工作流：日期計算節點]** 支援測試運行節點，由 @mytharcher 提供

#### 🚀 改進

- **[客戶端]** 顏色選擇器：新增四種推薦顏色 ([#7226](https://github.com/nocobase/nocobase/pull/7226))，由 @zhangzhonghe 提供
- **[工作流]** 使比較相容於日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237))，由 @mytharcher 提供

#### 🐛 錯誤修復

- **[客戶端]**
  - 樣式規則在表格操作列上無效 ([#7225](https://github.com/nocobase/nocobase/pull/7225))，由 @katherinehhh 提供
  - 刪除選單時，uiSchemas 表中的對應資料未被刪除 ([#7232](https://github.com/nocobase/nocobase/pull/7232))，由 @zhangzhonghe 提供
  - 避免在 appends 中選擇非關聯欄位 ([#7231](https://github.com/nocobase/nocobase/pull/7231))，由 @mytharcher 提供
- **[工作流：子流程]** 修復當回調信號到達但待處理執行不在當前實例時拋出錯誤的問題，由 @mytharcher 提供

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*發布日期：2025-07-24*

#### 🎉 新功能

- **[伺服器]** 支援透過環境變數設定請求主體大小限制 ([#7273](https://github.com/nocobase/nocobase/pull/7273))，由 @aaaaaajie 提供
- **[工作流：並行節點]** 為並行節點新增「全部完成」模式 ([#7263](https://github.com/nocobase/nocobase/pull/7263))，由 @mytharcher 提供
- **[認證：SAML 2.0]** 支援在用戶未認證時自動重定向到 SSO URL，由 @2013xile 提供
- **[Redis 佇列適配器]** 為事件佇列新增 Redis 適配器，由 @mytharcher 提供
- **[工作流：日期計算節點]** 支援測試運行節點，由 @mytharcher 提供

#### 🚀 改進

- **[伺服器]** 當處理項目未滿時，使並發記憶體佇列可用 ([#7267](https://github.com/nocobase/nocobase/pull/7267))，由 @mytharcher 提供
- **[資料庫]** 當資料集超過閾值時自動啟用簡單分頁 ([#7227](https://github.com/nocobase/nocobase/pull/7227))，由 @aaaaaajie 提供
- **[客戶端]** 顏色選擇器：新增四種推薦顏色 ([#7226](https://github.com/nocobase/nocobase/pull/7226))，由 @zhangzhonghe 提供
- **[AI 整合]** 移除呼叫 `saveJob` 時的 `await` ([#7275](https://github.com/nocobase/nocobase/pull/7275))，由 @mytharcher 提供
- **[工作流：人工節點]** storePopupContext 支援儲存預設上下文 ([#7264](https://github.com/nocobase/nocobase/pull/7264))，由 @zhangzhonghe 提供
- **[工作流]**
  - 為測試變數新增 json 類型常數 ([#7274](https://github.com/nocobase/nocobase/pull/7274))，由 @mytharcher 提供
  - 當執行因狀態不應運行時，使用日誌記錄而非拋出錯誤 ([#7217](https://github.com/nocobase/nocobase/pull/7217))，由 @mytharcher 提供
  - 使比較相容於日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237))，由 @mytharcher 提供
- **[集合欄位：公式]** 新增更多可計算介面 ([#7215](https://github.com/nocobase/nocobase/pull/7215))，由 @mytharcher 提供
- **[Redis 佇列適配器]** 使 Redis 適配器在處理項目未滿時並發佇列可用，由 @mytharcher 提供
- **[工作流：JSON 計算]** 使 JSON 查詢節點可測試，由 @mytharcher 提供
- **[工作流：審批]** 支援在相關資料刪除時刪除審批，由 @mytharcher 提供

#### 🐛 錯誤修復

- **[客戶端]**
  - 在使用公式作為標題欄位的選擇關聯欄位中，模糊搜尋無法運作 ([#7280](https://github.com/nocobase/nocobase/pull/7280))，由 @katherinehhh 提供
  - 子表格聯動規則中缺少當前物件變數 ([#7266](https://github.com/nocobase/nocobase/pull/7266))，由 @katherinehhh 提供
  - 欄位變更後，依賴於此欄位的關聯欄位未清除其值 ([#7262](https://github.com/nocobase/nocobase/pull/7262))，由 @zhangzhonghe 提供
  - 修復 Markdown 欄位在詳細檢視中未正確渲染的問題。([#7257](https://github.com/nocobase/nocobase/pull/7257))，由 @aaaaaajie 提供
  - 資料選擇器標題欄位設定無效 ([#7251](https://github.com/nocobase/nocobase/pull/7251))，由 @zhangzhonghe 提供
  - 避免在 appends 中選擇非關聯欄位 ([#7231](https://github.com/nocobase/nocobase/pull/7231))，由 @mytharcher 提供
  - 刪除選單時，uiSchemas 表中的對應資料未被刪除 ([#7232](https://github.com/nocobase/nocobase/pull/7232))，由 @zhangzhonghe 提供
  - 樣式規則在表格操作列上無效 ([#7225](https://github.com/nocobase/nocobase/pull/7225))，由 @katherinehhh 提供
  - 在歷史資料的日期欄位中使用已棄用的日期變數時出現顯示問題 ([#7253](https://github.com/nocobase/nocobase/pull/7253))，由 @katherinehhh 提供
  - 聯動規則中關聯欄位的顯示問題 ([#7220](https://github.com/nocobase/nocobase/pull/7220))，由 @katherinehhh 提供
  - 修復錯誤：無法解析 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224))，由 @zhangzhonghe 提供
- **[資料庫]**
  - 解決因資料表命名慣例導致的自動簡單分頁失敗問題。([#7256](https://github.com/nocobase/nocobase/pull/7256))，由 @aaaaaajie 提供
  - 修復在表格區塊中使用 MSSQL 外部資料源時，預設主鍵排序導致列表載入失敗的問題。([#7259](https://github.com/nocobase/nocobase/pull/7259))，由 @aaaaaajie 提供
  - 修復從 PostgreSQL 匯出大型資料集時失敗的問題 ([#7228](https://github.com/nocobase/nocobase/pull/7228))，由 @aaaaaajie 提供
  - 修復為外部資料源表格啟用簡單分頁時出現的錯誤 ([#7222](https://github.com/nocobase/nocobase/pull/7222))，由 @aaaaaajie 提供
- **[認證]** 修復子應用程式設定中空的 `secret` 導致無法登入的問題 ([#7239](https://github.com/nocobase/nocobase/pull/7239))，由 @2013xile 提供
- **[工作流]** 修復依賴項版本錯誤 ([#7258](https://github.com/nocobase/nocobase/pull/7258))，由 @mytharcher 提供
- **[操作：批次編輯]** 無法在資料選擇器中執行批次編輯和批次更新 ([#7250](https://github.com/nocobase/nocobase/pull/7250))，由 @zhangzhonghe 提供
- **[資料源管理器]** 修復在集合設定中保留外部資料源屬性的問題 ([#7249](https://github.com/nocobase/nocobase/pull/7249))，由 @aaaaaajie 提供
- **[集合欄位：排序]** 複製記錄時缺少排序欄位選擇 ([#7116](https://github.com/nocobase/nocobase/pull/7116))，由 @katherinehhh 提供
- **[資料源：外部 Oracle]** 修復在集合設定中保留外部資料源屬性的問題，由 @aaaaaajie 提供
- **[工作流：子流程]** 修復當回調信號到達但待處理執行不在當前實例時拋出錯誤的問題，由 @mytharcher 提供
- **[工作流：審批]**
  - 修復提交審批時的多級關聯問題，由 @mytharcher 提供
  - 連結按鈕的 URL 指向當前頁面的彈出視窗，但點擊後顯示 404 錯誤，由 @zhangzhonghe 提供
  - 修復提交審批時的關聯問題，由 @mytharcher 提供
  - 為記錄列表中已刪除的審批新增容錯處理，由 @mytharcher 提供
  - 修復刪除記錄時的異常，由 @mytharcher 提供
- **[郵件管理器]** 在 mysql 下，訊息和標籤的關聯集合出現異常，由 @jiannx 提供

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*發布日期：2025-07-18*

#### 🎉 新功能

- **[資料源：主資料源]** 支援在主資料源中顯示外掛程式定義的資料表。([#7187](https://github.com/nocobase/nocobase/pull/7187))，由 @aaaaaajie 提供
- **[工作流：日期計算節點]** 支援測試運行節點，由 @mytharcher 提供

#### 🚀 改進

- **[客戶端]** 顏色選擇器：新增四種推薦顏色 ([#7226](https://github.com/nocobase/nocobase/pull/7226))，由 @zhangzhonghe 提供
- **[工作流]** 使比較相容於日期值 ([#7237](https://github.com/nocobase/nocobase/pull/7237))，由 @mytharcher 提供

#### 🐛 錯誤修復

- **[客戶端]**
  - 樣式規則在表格操作列上無效 ([#7225](https://github.com/nocobase/nocobase/pull/7225))，由 @katherinehhh 提供
  - 避免在 appends 中選擇非關聯欄位 ([#7231](https://github.com/nocobase/nocobase/pull/7231))，由 @mytharcher 提供
  - 修復錯誤：無法解析 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224))，由 @zhangzhonghe 提供
  - 刪除選單時，uiSchemas 表中的對應資料未被刪除 ([#7232](https://github.com/nocobase/nocobase/pull/7232))，由 @zhangzhonghe 提供
- **[資料庫]** 修復為外部資料源表格啟用簡單分頁時出現的錯誤 ([#7222](https://github.com/nocobase/nocobase/pull/7222))，由 @aaaaaajie 提供
- **[集合欄位：排序]** 複製記錄時缺少排序欄位選擇 ([#7116](https://github.com/nocobase/nocobase/pull/7116))，由 @katherinehhh 提供
- **[工作流：子流程]** 修復當回調信號到達但待處理執行不在當前實例時拋出錯誤的問題，由 @mytharcher 提供
- **[工作流：審批]**
  - 修復提交審批時的多級關聯問題，由 @mytharcher 提供
  - 為記錄列表中已刪除的審批新增容錯處理，由 @mytharcher 提供
- **[郵件管理器]** 電子郵件訊息列表最佳化效能，由 @jiannx 提供
