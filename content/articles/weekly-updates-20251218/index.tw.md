---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：建立資料表時，可變更預設 id 欄位類型，以及更多。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集意見並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.27](https://www.nocobase.com/en/blog/v1.9.27)

*發佈日期：2025-12-17*

### 🚀 改進

- **[伺服器]** 在獲取應用維護訊息時，增加對缺少應用實例導致錯誤的容錯處理 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
- **[錯誤處理器]** 在 SQL 語法錯誤時，不暴露原始資料庫錯誤訊息，以避免洩露資料庫類型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[工作流程]** 支援在複製工作流程時使用舊版配置建立新工作流程 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher

### 🐛 錯誤修復

- **[工作流程]** 修正在手動執行時，記錄列表中僅顯示一筆記錄的問題 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[資料表：連接外部資料 (FDW)]** 修正連接到大寫名稱資料表時觸發錯誤的問題 by @2013xile
- **[工作流程：審批]** 修正因審批操作而錯誤地將不相關審批記錄的狀態更改為 `UNPROCESSED` 的問題 by @mytharcher

### [v1.9.26](https://www.nocobase.com/en/blog/v1.9.26)

*發佈日期：2025-12-16*

### 🚀 改進

- **[acl]** 支援 `acl.registerSnippet` API 以合併片段配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[存取控制]** 禁止將根角色指派給使用者 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 錯誤修復

- **[授權設定]**

  - 修復 plugin-license ts 建置異常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - 授權優化及新增提示資訊 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[檔案管理]** 修正在 OSS 上預覽 `.txt` 檔案時字元編碼錯誤的問題 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[操作：匯入記錄]** 同步等待匯入觸發的 `afterCreate` 事件完成。 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
- **[資料表：連接外部資料 (FDW)]** 修正載入大寫名稱資料表時失敗的問題 by @2013xile
- **[資料來源：外部 SQL Server]** 修正 `encrypt` 和 `trustServerCertificate` 選項不可用的問題 by @2013xile

### [v1.9.25](https://www.nocobase.com/en/blog/v1.9.25)

*發佈日期：2025-12-12*

### 🚀 改進

- **[工作流程]**
  - 為處理器準備階段的資料缺失增加容錯邏輯，以避免執行掛起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - 在工作流程畫布上對關聯資料使用延遲載入以提升效能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher

### 🐛 錯誤修復

- **[acl]** 修正當角色為 `root` 時，API `acl.can` 回傳 `null` 的問題 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
- **[工作流程：人工節點]** 修正人工待辦事項列表使用了錯誤 API 的問題 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
- **[HTTP 請求加密]** 在 qs 解析中對陣列格式使用方括號 by @chenos
- **[工作流程：審批]** 修正當工作流程被刪除時，取消執行會拋出錯誤的問題 by @mytharcher
- **[遷移管理器]** 修正遷移過程中資料換行符遺失的問題。 by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.55](https://www.nocobase.com/en/blog/v2.0.0-alpha.55)

*發佈日期：2025-12-17*

### 🚀 改進

- **[伺服器]** 在獲取應用維護訊息時，增加對缺少應用實例導致錯誤的容錯處理 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile
- **[區塊：列表]** 為表格、列表和網格卡片區塊新增連結按鈕 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 修正選擇複選框篩選條件的「否」時，仍套用了「是」篩選條件的問題。 ([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust
- **[遷移管理器]** 修正缺少遷移描述，並將目前時間設為預設值的問題 by @cgyrock

### [v2.0.0-alpha.54](https://www.nocobase.com/en/blog/v2.0.0-alpha.54)

*發佈日期：2025-12-17*

### 🎉 新功能

- **[客戶端]** 建立資料表時，可以更改預設 id 欄位的類型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) by @cgyrock

### 🚀 改進

- **[客戶端]**

  - 將表格欄位寬度更改為使用可選選項 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) by @katherinehhh
  - 使用 maxTagCount 改善 recordPicker 樣式 ([#8175](https://github.com/nocobase/nocobase/pull/8175)) by @katherinehhh
  - 優化配置選項（區塊、欄位、操作） ([#8141](https://github.com/nocobase/nocobase/pull/8141)) by @katherinehhh
- **[錯誤處理器]** 在 SQL 語法錯誤時，不暴露原始資料庫錯誤訊息，以避免洩露資料庫類型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) by @2013xile
- **[區塊：地圖]** 支援地圖欄位在文字顯示模式下的文字溢出省略 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) by @katherinehhh
- **[工作流程]** 支援在複製工作流程時使用舊版配置建立新工作流程 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) by @mytharcher
- **[存取控制]** 禁止將根角色指派給使用者 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在角色具有建立權限時，建立表單中未顯示提交按鈕的問題 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) by @katherinehhh
  - 防止在未選擇任何項目時提交，導致現有子表格/子表單資料被清除 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) by @katherinehhh
  - 防止資料範圍設定出現在建立表單配置中 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) by @katherinehhh
  - 無法儲存頁籤事件流程 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) by @chenos
  - 移除頁籤隱藏後的多餘間距 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) by @chenos
  - 修正關聯記錄選擇器中已選選項的篩選不正確 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) by @katherinehhh
  - 修正 tableoid 欄位在表單區塊中的渲染問題 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) by @katherinehhh
- **[伺服器]**

  - 更新 license-kit 至最新版本 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) by @jiannx
  - 支援外部資料來源的 Snowflake ID (53-bit) 欄位 ([#8185](https://github.com/nocobase/nocobase/pull/8185)) by @2013xile
- **[區塊：地圖]** 修正選單切換後地圖縮放級別不正確的問題 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) by @katherinehhh
- **[工作流程]** 修正在手動執行時，記錄列表中僅顯示一筆記錄的問題 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) by @mytharcher
- **[資料視覺化]** 解決 SQL 模式下選擇外部資料來源的問題；<br/>解決圖表區塊在資料擷取期間的載入狀態問題；<br/>解決空圖表區塊取消配置的問題；([#8169](https://github.com/nocobase/nocobase/pull/8169)) by @heziqiang
- **[AI 員工]** 解決 AI 訊息換行問題 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) by @heziqiang
- **[授權設定]**

  - 修復 plugin-license ts 建置異常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) by @jiannx
  - 授權優化及新增提示資訊 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) by @jiannx
- **[檔案管理]** 修正在 OSS 上預覽 `.txt` 檔案時字元編碼錯誤的問題 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) by @mytharcher
- **[資料來源：外部 SQL Server]** 修正 `encrypt` 和 `trustServerCertificate` 選項不可用的問題 by @2013xile
- **[資料表：連接外部資料 (FDW)]** 修正載入大寫名稱資料表時失敗的問題 by @2013xile
- **[工作流程：審批]** 修正因審批操作而錯誤地將不相關審批記錄的狀態更改為 `UNPROCESSED` 的問題 by @mytharcher

### [v2.0.0-alpha.53](https://www.nocobase.com/en/blog/v2.0.0-alpha.53)

*發佈日期：2025-12-12*

### 🚀 改進

- **[acl]** 支援 `acl.registerSnippet` API 以合併片段配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) by @mytharcher
- **[客戶端]** 支援百分比欄位的數字格式化 ([#8123](https://github.com/nocobase/nocobase/pull/8123)) by @katherinehhh
- **[流程引擎]** 支援動態隱藏步驟配置選單 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) by @gchust
- **[區塊：網格卡片]** 優化網格卡片區塊樣式，使其佈局更緊湊 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) by @katherinehhh
- **[AI 員工]** 啟用內建 AI 助手系統提示詞的編輯功能。<br/>優化了 Nathan AI 助手的系統提示詞。<br/>修正了伺服器讀取靜態檔案失敗的問題。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) by @heziqiang
- **[工作流程]**

  - 為處理器準備階段的資料缺失增加容錯邏輯，以避免執行掛起 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) by @mytharcher
  - 在工作流程畫布上對關聯資料使用延遲載入以提升效能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) by @mytharcher
- **[資料表欄位：Markdown(Vditor)]** 在 readPretty 模式下，預設停用 Markdown 欄位中的變數解析 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) by @katherinehhh

### 🐛 錯誤修復

- **[流程引擎]** 修正附件檔案下載不正確的問題 ([#8154](https://github.com/nocobase/nocobase/pull/8154)) by @katherinehhh
- **[客戶端]**

  - 修正當選項欄位存在時，關聯欄位下拉選單被停用的問題 ([#8153](https://github.com/nocobase/nocobase/pull/8153)) by @katherinehhh
  - 修正了在篩選表單區塊中，對單選欄位使用多選運算符時，輸入中文文字會清除現有選項的問題。 ([#8140](https://github.com/nocobase/nocobase/pull/8140)) by @gchust
  - 修正了切換標籤欄位導致彈窗配置遺失的問題。 ([#8136](https://github.com/nocobase/nocobase/pull/8136)) by @gchust
- **[acl]** 修正當角色為 `root` 時，API `acl.can` 回傳 `null` 的問題 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) by @mytharcher
- **[資料庫]** 當查詢具有多個篩選目標鍵的資料表時，`filterByTk` 現在支援陣列 ([#7986](https://github.com/nocobase/nocobase/pull/7986)) by @chenos
- **[操作：匯入記錄]** 同步等待匯入觸發的 `afterCreate` 事件完成。 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) by @2013xile
- **[資料表欄位：序號]** 提升 plugin-field-sequence 在處理修復指令時的穩健性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) by @cgyrock
- **[工作流程：人工節點]** 修正人工待辦事項列表使用了錯誤 API 的問題 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) by @mytharcher
- **[HTTP 請求加密]** 在 qs 解析中對陣列格式使用方括號 by @chenos
- **[工作流程：審批]** 修正當工作流程被刪除時，取消執行會拋出錯誤的問題 by @mytharcher
- **[遷移管理器]** 修正遷移過程中資料換行符遺失的問題。 by @cgyrock
