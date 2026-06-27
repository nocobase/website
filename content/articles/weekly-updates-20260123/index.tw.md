---
title: "每週更新：為基礎任務管理器添加進程級並發控制"
description: "這是 NocoBase 從 2026 年 1 月 15 日至 1 月 22 日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.39](https://www.nocobase.com/en/blog/v1.9.39)

*發布日期：2026-01-21*

### 🐛 錯誤修復

- **[伺服器]** 修復通用依賴中 `mathjs` 的版本問題 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) by @mytharcher
- **[客戶端]** 修復在 Chrome 144 中配置選單不顯示的問題 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) by @zhangzhonghe
- **[非同步任務管理器]** 修復由非同步匯入觸發的工作流程延遲執行的問題 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) by @mytharcher
- **[操作：匯入記錄 Pro]** 修復由非同步匯入觸發的工作流程延遲執行的問題 by @mytharcher

### [v1.9.38](https://www.nocobase.com/en/blog/v1.9.38)

*發布日期：2026-01-20*

### 🚀 改進

- **[伺服器]** 支援設定 CORS 來源白名單 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[錯誤處理器]** 清理 SQL 參考錯誤 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]**

  - 修復資料表欄位分組排序設定未生效的問題。([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - 修復在圖形化介面中編輯資料表的問題 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  - 修復表格「欄位設定」按鈕無效的問題 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - 修復表格行按鈕聯動規則影響彈出表單內按鈕狀態的問題 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
- **[行動端（已棄用）]** 棄用行動端插件（自 2.0 版本起由 ui-layout 插件取代）。([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos

### [v1.9.37](https://www.nocobase.com/en/blog/v1.9.37)

*發布日期：2026-01-15*

### 🚀 改進

- **[評估器]** 更新 math.js 版本以支援更多函數 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[通知：應用內訊息]** 修復向大量用戶發送應用內訊息時的效能問題 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修復在建立表單中，級聯選擇資料在成功提交後未清除的問題 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 為操作 schema 增加容錯處理，避免點擊操作按鈕時頁面崩潰 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - 修復提交按鈕在啟用確認時，跳過必填驗證不生效的問題 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
- **[資料表欄位：多對多（陣列）]** 修復在關聯查詢中附加二級多對多（陣列）關聯時出錯的問題 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[工作流程]** 修復在複製節點時 schema ID 未更新的問題 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.13](https://www.nocobase.com/en/blog/v2.0.0-beta.13)

*發布日期：2026-01-19*

### 🚀 改進

- **[伺服器]** 支援設定 CORS 來源白名單 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) by @2013xile
- **[操作：匯出記錄]** 根據選取的記錄或資源過濾器改進匯出操作的資料範圍 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) by @katherinehhh
- **[操作：匯出記錄 Pro]** 根據選取的記錄或資源過濾器改進匯出操作的資料範圍 by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]**

  - 修復「自訂變數」彈出視窗被遮擋的問題 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) by @zhangzhonghe
  - 修復在圖形化介面中編輯資料表的問題 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) by @katherinehhh
  - 修復資料表欄位分組排序設定未生效的問題。([#8453](https://github.com/nocobase/nocobase/pull/8453)) by @katherinehhh
  - 修復快捷鍵模態框高度超出視窗高度的問題 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  - 修復表格行按鈕聯動規則影響彈出表單內按鈕狀態的問題 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  - 修復切換頁面時表格操作列狀態被污染的問題。([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  - 修復表格「欄位設定」按鈕無效的問題 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) by @zhangzhonghe
  - 修復檔案關聯欄位的選擇器彈出視窗 z-index 不正確，導致彈出視窗配置無法正確儲存的問題。([#8446](https://github.com/nocobase/nocobase/pull/8446)) by @gchust
- **[流程引擎]**

  - 修復 runjs 程式碼參數中的變數在執行前被解析的問題。([#8445](https://github.com/nocobase/nocobase/pull/8445)) by @gchust
  - 修復在資料選擇器的快速建立彈出視窗中無法選取彈出視窗變數的問題。([#8450](https://github.com/nocobase/nocobase/pull/8450)) by @gchust
  - 修復重複點擊配置選單可能開啟多個配置彈出視窗的問題。([#8448](https://github.com/nocobase/nocobase/pull/8448)) by @gchust
- **[行動端（已棄用）]** 棄用行動端插件（自 2.0 版本起由 ui-layout 插件取代）。([#8456](https://github.com/nocobase/nocobase/pull/8456)) by @chenos
- **[流程引擎]** 修復包含連字號的變數無法被正確解析的問題。([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust
- **[電子郵件管理器]** 修復電子郵件配置彈出視窗被遮擋的問題 by @zhangzhonghe

### [v2.0.0-beta.12](https://www.nocobase.com/en/blog/v2.0.0-beta.12)

*發布日期：2026-01-16*

### 🚀 改進

- **[流程引擎]** 支援解析當前表單記錄中欄位的值，即使這些欄位未新增到編輯表單中。([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust

### 🐛 錯誤修復

- **[流程引擎]** 修復透過按鈕點擊開啟彈出視窗時，動態事件流程步驟執行兩次的問題。([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
- **[範本列印]** 在 2.0 版本中顯示空間欄位 by @jiannx

### [v2.0.0-beta.11](https://www.nocobase.com/en/blog/v2.0.0-beta.11)

*發布日期：2026-01-15*

### 🚀 改進

- **[評估器]** 更新 math.js 版本以支援更多函數 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[客戶端]** 富文字編輯器支援字型大小調整、圖片大小調整和軟換行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
- **[AI 員工]** 將工作流程呼叫者的結果更改為 `execution.output`，透過明確使用輸出節點，結果可以保持穩定 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 為操作 schema 增加容錯處理，避免點擊操作按鈕時頁面崩潰 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - 修復在表單項目中設定附件 URL 後再切換到其他欄位時，標題欄位設定消失的問題 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  - 修復在建立表單中，當關聯欄位設定為唯讀模式時，標題欄位未更新的問題 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
- **[流程引擎]** 修復當 filterByTk 為陣列時變數解析不正確的問題。([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
- **[範本列印]** 支援空間欄位 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.66](https://www.nocobase.com/en/blog/v2.0.0-alpha.66)

*發布日期：2026-01-16*

### 🐛 錯誤修復

- **[流程引擎]** 修復包含連字號的變數無法被正確解析的問題。([#8432](https://github.com/nocobase/nocobase/pull/8432)) by @gchust

### [v2.0.0-alpha.65](https://www.nocobase.com/en/blog/v2.0.0-alpha.65)

*發布日期：2026-01-16*

### 🎉 新功能

- **[測試]** 為基礎任務管理器新增進程級並發控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) by @cgyrock

### 🚀 改進

- **[客戶端]**

  - 富文字編輯器支援字型大小調整、圖片大小調整和軟換行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) by @jiannx
  - 支援指定事件流程的執行時機。([#8340](https://github.com/nocobase/nocobase/pull/8340)) by @gchust
  - 透過改用原生 webkit CSS 實現文字省略，提升插件管理器列表的渲染效能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) by @mytharcher
- **[評估器]** 更新 math.js 版本以支援更多函數 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) by @mytharcher
- **[CLI]** 支援透過環境變數設定 CDN 基礎 URL ([#8384](https://github.com/nocobase/nocobase/pull/8384)) by @chenos
- **[流程引擎]** 為 GridModel 新增 `rowOrder` 以確保行順序一致 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) by @zhangzhonghe
- **[流程引擎]** 支援解析當前表單記錄中欄位的值，即使這些欄位未新增到編輯表單中。([#8436](https://github.com/nocobase/nocobase/pull/8436)) by @gchust
- **[AI 員工]**

  - 優化 AI 入口按鈕 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) by @heziqiang
  - 將工作流程呼叫者的結果更改為 `execution.output`，透過明確使用輸出節點，結果可以保持穩定 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) by @mytharcher
  - 在入口列表中隱藏 builder ai。<br/>優化 LLM 整合流程。<br/>更新關於 AI 模型 gemini-3 的文件。([#8409](https://github.com/nocobase/nocobase/pull/8409)) by @heziqiang
  - 支援 Anthropic 和 Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) by @heziqiang
- **[通知：應用內訊息]** 修復向大量用戶發送應用內訊息時的效能問題 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修復快捷鍵模態框高度超出視窗高度的問題 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) by @zhangzhonghe
  - 修復表格行按鈕聯動規則影響彈出表單內按鈕狀態的問題 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) by @zhangzhonghe
  - 修復切換頁面時表格操作列狀態被污染的問題。([#8438](https://github.com/nocobase/nocobase/pull/8438)) by @gchust
  - 為操作 schema 增加容錯處理，避免點擊操作按鈕時頁面崩潰 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) by @mytharcher
  - 修復在建立表單中，當關聯欄位設定為唯讀模式時，標題欄位未更新的問題 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) by @katherinehhh
  - 數字組件不顯示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) by @chenos
  - 修復在表單項目中設定附件 URL 後再切換到其他欄位時，標題欄位設定消失的問題 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) by @katherinehhh
  - 修復提交按鈕在啟用確認時，跳過必填驗證不生效的問題 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) by @katherinehhh
  - 修復網格卡片區塊中佈局設定未生效的問題 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) by @katherinehhh
  - 修復在建立表單中，級聯選擇資料在成功提交後未清除的問題 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) by @katherinehhh
  - 修復在數字欄位中輸入中文字元時阻止賦值的問題 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) by @katherinehhh
  - 解決一對一關聯欄位的檔案選擇彈出視窗中出現提交按鈕的問題 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) by @katherinehhh
  - 修復可選 targetKey 的精細邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
- **[流程引擎]** 修復動態事件流程在透過按鈕點擊開啟彈出視窗時步驟執行兩次的問題。([#8435](https://github.com/nocobase/nocobase/pull/8435)) by @gchust
- **[流程引擎]** 修復當 filterByTk 為陣列時變數解析不正確的問題。([#8412](https://github.com/nocobase/nocobase/pull/8412)) by @gchust
- **[檔案管理器]** 修復上傳到 S3 儲存的檔案產生的 URL 不正確的問題 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) by @mytharcher
- **[資料表欄位：多對多（陣列）]** 修復在關聯查詢中附加二級多對多（陣列）關聯時出錯的問題 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) by @cgyrock
- **[工作流程]**

  - 修復在複製節點時 schema ID 未更新的問題 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) by @mytharcher
  - 為工作的 Snowflake ID 新增實例 ID，以避免叢集模式下 ID 衝突的問題 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) by @mytharcher
- **[區塊：範本（已棄用）]** 修復無法存取繼承範本（v1）編輯頁面的問題。([#8376](https://github.com/nocobase/nocobase/pull/8376)) by @gchust
- **[資料來源：REST API]** 為請求上下文增加容錯處理，避免在上下文中找不到方法時拋出錯誤 by @mytharcher
- **[多空間]**

  - 新增關聯資料時的相關空間 by @jiannx
  - 空間選擇器顏色跟隨主題 by @jiannx
- **[範本列印]**

  - 修復配置範本彈出視窗被遮擋的問題 by @zhangzhonghe
  - 支援空間欄位 by @jiannx
  - 在 2.0 版本中顯示空間欄位 by @jiannx
- **[檔案儲存：S3(Pro)]** 修復檔案重新命名模式不生效的問題 by @mytharcher
- **[工作流程：審批]**

  - 修復因參數錯誤導致載入不正確記錄的問題 by @mytharcher
  - 修復因缺少 `ValueBlock.Result` 元件導致值區塊不顯示的問題 by @mytharcher
- **[電子郵件管理器]**

  - 修復對話鏈 by @jiannx
  - 為管理頁面新增篩選功能 by @jiannx
