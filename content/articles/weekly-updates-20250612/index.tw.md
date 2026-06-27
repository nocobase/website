---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援按更多欄位篩選工作流程、新增環境變數以控制稽核日誌輸出方式等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要提供給測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.9](https://www.nocobase.com/en/blog/v1.7.9)

*發布日期：2025-06-11*

#### 🐛 錯誤修復

* **[client]** 修復區塊錯誤問題 ([#7048](https://github.com/nocobase/nocobase/pull/7048)) by @gchust

### [v1.7.8](https://www.nocobase.com/en/blog/v1.7.8)

*發布日期：2025-06-10*

#### 🎉 新功能

- **[審計日誌]** 新增環境變數 `AUDIT_LOGGER_TRANSPORT` 以控制審計日誌輸出方式 by @2013xile

#### 🚀 改進

- **[日曆]** 支援在日曆區塊中設定每週起始日 ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[集合欄位：多對多（陣列）]** 在資料表中顯示多對多（多）欄位時的權限相關錯誤。([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie

#### 🐛 錯誤修復

- **[client]**

  - 在二級彈窗表單中配置欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 選擇欄位選項在篩選表單聯動規則中無法運作 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh
  - 篩選表單驗證規則導致篩選按鈕失效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe
  - 修復因重複 API 請求導致區塊模板中欄位不顯示的問題 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe
- **[動作：匯入記錄]** 修復涉及關聯欄位時子表格匯入失敗的問題 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie
- **[資料視覺化]** 圖表中的複選框群組欄位應顯示標籤而非原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile
- **[工作流程]** 修復當觸發器未正確配置時，在手動執行操作中拋出錯誤的問題 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher
- **[工作流程：審批]**

  - 避免未定義欄位錯誤 by @mytharcher
  - 修復重新整理詳情頁時 API 錯誤 by @mytharcher
- **[企業微信]** 在閘道器中間件新增回呼路徑檢查 by @2013xile

### [v1.7.6](https://www.nocobase.com/en/blog/v1.7.6)

*發布日期：2025-06-09*

#### 🚀 改進

- **[client]** 禁止將群組選單移動到自身內部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[client]**

  - 解決區塊無法讀取外部資料來源檢視資料的問題。([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - 修復篩選區塊參數錯誤問題 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - 當前物件變數在聯動規則中無效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
  - 無法使用聯動規則清除子表格的必填欄位指示器 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
- **[undefined]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動配置 by @aaaaaajie
- **[行動端]** 優化行動端彈窗延遲問題 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[資料來源管理器]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動配置 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[動作：匯入記錄]** 修復匯入 XLSX 樹狀表格資料時，批次編輯過程中發生的錯誤 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[工作流程]** 修復工作流程不存在時的 UI 錯誤 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
- **[工作流程：JavaScript]** 修復相對路徑的 require 問題 by @mytharcher
- **[工作流程：審批]**

  - 修復工作流程被刪除時拋出錯誤 by @mytharcher
  - 從快照重新載入檔案關聯以避免 URL 過期 by @mytharcher
  - 修復觸發變數 by @mytharcher

### [v1.7.5](https://www.nocobase.com/en/blog/v1.7.5)

*發布日期：2025-06-07*

#### 🐛 錯誤修復

- **[client]** 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[database]** 修復：在匯入 xlsx 時遺失建立者和更新者欄位 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[工作流程]** 修復在建立或更新模式下，當建立時沒有變更欄位，集合事件無法觸發的問題 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[動作：匯出記錄 Pro]** 修復在帶有條件下匯出附件時發生的錯誤。 by @aaaaaajie

### [v1.7.4](https://www.nocobase.com/en/blog/v1.7.4)

*發布日期：2025-06-07*

#### 🐛 錯誤修復

- **[client]**

  - 關聯欄位在唯讀模式下懸停時顯示子表格和子表單 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - markdown 區塊聯動規則在由彈窗動作觸發時無法運作 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
- **[本地化]** 解決空文字導致的錯誤 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[非同步任務管理器]** 修復非同步匯入期間的多重執行問題 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[動作：匯出記錄 Pro]** 修復非同步匯入期間的多重執行問題 by @aaaaaajie
- **[工作流程：審批]** 修復委託審批在被他人批准後無法繼續進行的問題 by @mytharcher

### [v1.7.3](https://www.nocobase.com/en/blog/v1.7.3)

*發布日期：2025-06-06*

#### 🚀 改進

- **[工作流程]** 支援篩選更多工作流程欄位 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**
  - 在模態框內的詳情區塊子表格中切換頁面會觸發未儲存變更警告 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
  - 在賦值元件中設定變數時缺少欄位標題 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - 欄位樣式聯動規則無法運作 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh

### [v1.7.2](https://www.nocobase.com/en/blog/v1.7.2)

*發布日期：2025-06-05*

#### 🚀 改進

- **[動作：批次編輯]** 在選取模式下使用 `filterByTk` 代替 `filter` ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[動作：匯入記錄 Pro]** 優化處理大型 XLSX 檔案（高行/列資料集）時的效能問題，防止系統崩潰或凍結。 by @aaaaaajie

#### 🐛 錯誤修復

- **[client]**

  - assignedField 元件中缺少欄位標題 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - 在移動選單列表中無法選取最後一個選單項目 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
- **[工作流程]**

  - 修復切換分類標籤時篩選條件未更新的問題 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - 修復工作流程統計資料未自動建立的問題 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.5](https://www.nocobase.com/en/blog/v1.8.0-beta.5)

*發布日期：2025-06-07*

#### 🚀 改進

- **[工作流程]** 支援篩選更多工作流程欄位 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - markdown 區塊聯動規則在由彈窗動作觸發時無法運作 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
  - 關聯欄位在唯讀模式下懸停時顯示子表格和子表單 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - 欄位樣式聯動規則無法運作 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh
  - 在賦值元件中設定變數時缺少欄位標題 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - 在模態框內的詳情區塊子表格中切換頁面會觸發未儲存變更警告 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
- **[非同步任務管理器]** 修復非同步匯入期間的多重執行問題 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[本地化]** 解決空文字導致的錯誤 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[動作：匯出記錄 Pro]** 修復非同步匯入期間的多重執行問題 by @aaaaaajie
- **[工作流程：審批]** 修復委託審批在被他人批准後無法繼續進行的問題 by @mytharcher

### [v1.8.0-beta.4](https://www.nocobase.com/en/blog/v1.8.0-beta.4)

*發布日期：2025-06-05*

#### 🚀 改進

- **[動作：批次編輯]** 在選取模式下使用 `filterByTk` 代替 `filter` ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[動作：匯入記錄 Pro]** 優化處理大型 XLSX 檔案（高行/列資料集）時的效能問題，防止系統崩潰或凍結。 by @aaaaaajie

#### 🐛 錯誤修復

- **[client]**

  - assignedField 元件中缺少欄位標題 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - 在移動選單列表中無法選取最後一個選單項目 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
- **[工作流程]**

  - 修復切換分類標籤時篩選條件未更新的問題 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - 修復工作流程統計資料未自動建立的問題 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.4](https://www.nocobase.com/en/blog/v1.8.0-alpha.4)

*發布日期：2025-06-07*

#### 🚀 改進

- **[工作流程]** 支援篩選更多工作流程欄位 ([#6995](https://github.com/nocobase/nocobase/pull/6995)) by @mytharcher
- **[郵件管理器]** 支援彈窗中的預設發送值，支援收件人模糊搜尋，並修復問題 by @jiannx

#### 🐛 錯誤修復

- **[database]** 修復：在匯入 xlsx 時遺失建立者和更新者欄位 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[client]**

  - 在賦值元件中設定變數時缺少欄位標題 ([#7001](https://github.com/nocobase/nocobase/pull/7001)) by @katherinehhh
  - 關聯欄位在唯讀模式下懸停時顯示子表格和子表單 ([#7002](https://github.com/nocobase/nocobase/pull/7002)) by @zhangzhonghe
  - markdown 區塊聯動規則在由彈窗動作觸發時無法運作 ([#7007](https://github.com/nocobase/nocobase/pull/7007)) by @katherinehhh
  - 在模態框內的詳情區塊子表格中切換頁面會觸發未儲存變更警告 ([#7004](https://github.com/nocobase/nocobase/pull/7004)) by @katherinehhh
  - 欄位樣式聯動規則無法運作 ([#7003](https://github.com/nocobase/nocobase/pull/7003)) by @katherinehhh
- **[非同步任務管理器]** 修復非同步匯入期間的多重執行問題 ([#7006](https://github.com/nocobase/nocobase/pull/7006)) by @aaaaaajie
- **[本地化]** 解決空文字導致的錯誤 ([#7010](https://github.com/nocobase/nocobase/pull/7010)) by @2013xile
- **[動作：匯出記錄 Pro]** 修復非同步匯入期間的多重執行問題 by @aaaaaajie
- **[工作流程：審批]** 修復委託審批在被他人批准後無法繼續進行的問題 by @mytharcher
- **[郵件管理器]**

  - 資料表 "mailmessagelabels_mailmessages" 的多個主鍵 by @jiannx
  - 設定彈窗不顯示 by @jiannx
  - 郵件模糊搜尋以建立唯一篩選條件 by @jiannx
  - 收件人模糊搜尋支援關聯欄位 by @jiannx
  - 為 mailmessagelabelsMailmessages 新增 "id" 欄位 by @jiannx

### [v1.8.0-alpha.3](https://www.nocobase.com/en/blog/v1.8.0-alpha.3)

*發布日期：2025-06-06*

#### 🚀 改進

- **[動作：批次編輯]** 在選取模式下使用 `filterByTk` 代替 `filter` ([#6994](https://github.com/nocobase/nocobase/pull/6994)) by @mytharcher
- **[動作：匯入記錄 Pro]** 優化處理大型 XLSX 檔案（高行/列資料集）時的效能問題，防止系統崩潰或凍結。 by @aaaaaajie

#### 🐛 錯誤修復

- **[client]**

  - assignedField 元件中缺少欄位標題 ([#6987](https://github.com/nocobase/nocobase/pull/6987)) by @katherinehhh
  - 在移動選單列表中無法選取最後一個選單項目 ([#6997](https://github.com/nocobase/nocobase/pull/6997)) by @zhangzhonghe
  - 透過彈窗連結開啟的頁面內容顯示不正確 ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
- **[工作流程]**

  - 修復切換分類標籤時篩選條件未更新的問題 ([#6989](https://github.com/nocobase/nocobase/pull/6989)) by @mytharcher
  - 修復工作流程統計資料未自動建立的問題 ([#6993](https://github.com/nocobase/nocobase/pull/6993)) by @mytharcher
