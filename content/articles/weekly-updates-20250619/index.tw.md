---
title: "NocoBase 每週更新：支援透過掃描 QR Code 填寫輸入欄位"
description: "本週更新包括：支援一鍵複製文字欄位內容、電子郵件同步間隔設定等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.14](https://www.nocobase.com/en/blog/v1.7.14)

*發布日期：2025-06-18*

#### 🚀 改進

- **[客戶端]** 當網格卡片區塊操作欄為空時自動隱藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
- **[驗證]** 從 `verifiers:listByUser` API 的回應中移除驗證者選項 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

#### 🐛 錯誤修復

- **[資料庫]** 支援在 updateOrCreate 和 firstOrCreate 中進行關聯更新 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[客戶端]**

  - URL 查詢參數變數在公開表單欄位預設值中無法運作 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - 子表格欄位上的樣式條件未正確套用 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - 在篩選表單中透過關聯資料表欄位進行篩選無效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
- **[資料表欄位：多對多（陣列）]** 當存在 `updatedBy` 欄位時，更新多對多（陣列）欄位會拋出錯誤 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[公開表單]** 公開表單：修正在表單提交時的未授權存取問題 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

### [v1.7.13](https://www.nocobase.com/en/blog/v1.7.13)

*發布日期：2025-06-17*

#### 🚀 改進

- **[客戶端]** Logo 容器寬度適應內容類型（圖片固定 168px，文字自動寬度）([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[工作流：審批]** 為重新指派者清單新增額外欄位選項 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 切換頁面時，子表格中的必填驗證訊息仍然存在 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - 金額元件從 mask 切換到 inputNumer 後遺失小數點 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - 子表格中 Markdown (Vditor) 渲染不正確 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
- **[資料表欄位：序號]** 修正基於字串的大整數序號計算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[備份管理器]** 在 Windows 平台上還原 MySQL 備份時出現未知命令錯誤 by @gchust

### [v1.7.12](https://www.nocobase.com/en/blog/v1.7.12)

*發布日期：2025-06-16*

#### 🚀 改進

- **[客戶端]** 為核取方塊欄位連結規則新增「為空」和「不為空」選項 ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]** 建立反向關聯欄位後，關聯欄位設定中的「在目標資料表中建立反向關聯欄位」選項未被勾選。([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
- **[資料來源管理器]** 範圍變更現在會立即對所有相關角色生效。([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[存取控制]** 修復當不存在預設角色時應用程式阻止進入的問題 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[工作流：自訂動作事件]** 修正重定向 URL 的變數未被解析的問題 by @mytharcher

### [v1.7.11](https://www.nocobase.com/en/blog/v1.7.11)

*發布日期：2025-06-15*

#### 🎉 新功能

- **[文字複製]** 支援一鍵複製文字欄位內容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[客戶端]**

  - 關聯欄位選擇器在提交後未清除已選資料 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
  - 修正上傳大小提示 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
- **[伺服器]** 無法讀取未定義的屬性（讀取 'setMaaintainingMessage'）([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[工作流：循環節點]** 修正當條件不滿足時循環分支仍會執行的問題 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[工作流：審批]**

  - 修正執行取消時待辦事項統計未更新的問題 by @mytharcher
  - 修正按類型篩選時的觸發變數問題 by @mytharcher

### [v1.7.10](https://www.nocobase.com/en/blog/v1.7.10)

*發布日期：2025-06-12*

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正連結規則導致無限迴圈的問題 ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe
  - 修正：在 APIClient 中使用可選鏈接安全地拒絕請求，當處理程序可能為 undefined 時 ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66
  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
- **[資料視覺化]** 圖表篩選器中日期範圍欄位顯示不正確 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
- **[API 文件]** 非 NocoBase 官方外掛無法顯示 API 文件 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[動作：匯入記錄]** 修正 xlsx 匯入，限制文字區域欄位不接受非字串格式資料 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.9](https://www.nocobase.com/en/blog/v1.8.0-beta.9)

*發布日期：2025-06-18*

#### 🚀 改進

- **[客戶端]**

  - 當網格卡片區塊操作欄為空時自動隱藏 ([#7069](https://github.com/nocobase/nocobase/pull/7069)) by @zhangzhonghe
  - Logo 容器寬度適應內容類型（圖片固定 168px，文字自動寬度）([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[驗證]** 從 `verifiers:listByUser` API 的回應中移除驗證者選項 ([#7090](https://github.com/nocobase/nocobase/pull/7090)) by @2013xile

#### 🐛 錯誤修復

- **[客戶端]**

  - 切換頁面時，子表格中的必填驗證訊息仍然存在 ([#7080](https://github.com/nocobase/nocobase/pull/7080)) by @katherinehhh
  - 子表格欄位上的樣式條件未正確套用 ([#7083](https://github.com/nocobase/nocobase/pull/7083)) by @katherinehhh
  - 金額元件從 mask 切換到 inputNumer 後遺失小數點 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - URL 查詢參數變數在公開表單欄位預設值中無法運作 ([#7084](https://github.com/nocobase/nocobase/pull/7084)) by @katherinehhh
  - 在篩選表單中透過關聯資料表欄位進行篩選無效 ([#7070](https://github.com/nocobase/nocobase/pull/7070)) by @zhangzhonghe
  - 子表格中 Markdown (Vditor) 渲染不正確 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
- **[資料庫]** 支援在 updateOrCreate 和 firstOrCreate 中進行關聯更新 ([#7088](https://github.com/nocobase/nocobase/pull/7088)) by @chenos
- **[資料表欄位：多對多（陣列）]** 當存在 `updatedBy` 欄位時，更新多對多（陣列）欄位會拋出錯誤 ([#7089](https://github.com/nocobase/nocobase/pull/7089)) by @2013xile
- **[資料表欄位：序號]** 修正基於字串的大整數序號計算 ([#7079](https://github.com/nocobase/nocobase/pull/7079)) by @mytharcher
- **[公開表單]** 公開表單：修正在表單提交時的未授權存取問題 ([#7085](https://github.com/nocobase/nocobase/pull/7085)) by @zhangzhonghe

### [v1.8.0-beta.8](https://www.nocobase.com/en/blog/v1.8.0-beta.8)

*發布日期：2025-06-16*

#### 🚀 改進

- **[客戶端]** 為核取方塊欄位連結規則新增「為空」和「不為空」選項 ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh
- **[工作流：審批]** 為重新指派者清單新增額外欄位選項 by @mytharcher

#### 🐛 錯誤修復

- **[備份管理器]** 在 Windows 平台上還原 MySQL 備份時出現未知命令錯誤 by @gchust

### [v1.8.0-beta.7](https://www.nocobase.com/en/blog/v1.8.0-beta.7)

*發布日期：2025-06-15*

#### 🎉 新功能

- **[文字複製]** 支援一鍵複製文字欄位內容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[伺服器]** 無法讀取未定義的屬性（讀取 'setMaaintainingMessage'）([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[客戶端]**

  - 關聯欄位選擇器在提交後未清除已選資料 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
  - 建立反向關聯欄位後，關聯欄位設定中的「在目標資料表中建立反向關聯欄位」選項未被勾選。([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
- **[存取控制]** 修復當不存在預設角色時應用程式阻止進入的問題 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[工作流：循環節點]** 修正當條件不滿足時循環分支仍會執行的問題 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[資料來源管理器]** 範圍變更現在會立即對所有相關角色生效。([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[工作流：自訂動作事件]** 修正重定向 URL 的變數未被解析的問題 by @mytharcher
- **[工作流：審批]**

  - 修正按類型篩選時的觸發變數問題 by @mytharcher
  - 修正執行取消時待辦事項統計未更新的問題 by @mytharcher

### [v1.8.0-beta.6](https://www.nocobase.com/en/blog/v1.8.0-beta.6)

*發布日期：2025-06-12*

#### 🎉 新功能

- **[稽核日誌]** 新增環境變數 `AUDIT_LOGGER_TRANSPORT` 以控制稽核日誌輸出方式 by @2013xile

#### 🚀 改進

- **[客戶端]** 禁止將群組選單移動到自身內部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe
- **[日曆]** 支援在日曆區塊中設定週起始日 ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[資料表欄位：Markdown(Vditor)]** 支援在 Markdown (Vditor) 預覽模式下點擊圖片放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh
- **[資料表欄位：多對多（陣列）]** 在資料表中顯示多對多（多）欄位時的權限相關錯誤。([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie
- **[評論]** 支援評論區塊中的分頁功能 by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**

  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
  - 修正連結規則導致無限迴圈的問題 ([#7050](https://github.com/nocobase/nocobase/pull/7050)) by @zhangzhonghe
  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 修正上傳大小提示 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
  - 修正：在 APIClient 中使用可選鏈接安全地拒絕請求，當處理程序可能為 undefined 時 ([#7054](https://github.com/nocobase/nocobase/pull/7054)) by @sheldon66
  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe
  - 選擇欄位選項在篩選表單連結規則中無法運作 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh
  - 篩選表單驗證規則導致篩選按鈕失效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe
  - 無法使用連結規則清除子表格的必填欄位指示器 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
  - 修正篩選區塊參數錯誤問題 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - 解決區塊無法讀取外部資料來源檢視資料的問題。([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
  - 當前物件變數在連結規則中無效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
- **[資料庫]** 修正：在匯入 xlsx 時新增缺失的建立者和更新者欄位 ([#7011](https://github.com/nocobase/nocobase/pull/7011)) by @aaaaaajie
- **[未定義]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動的配置 by @aaaaaajie
- **[動作：匯入記錄]**

  - 修正 xlsx 匯入，限制文字區域欄位不接受非字串格式資料 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie
  - 修正當涉及關聯欄位時子表格匯入失敗的問題 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie
  - 修正匯入 XLSX 樹狀表格資料時，在批次編輯過程中發生的錯誤 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[資料視覺化]**

  - 圖表篩選器中日期範圍欄位顯示不正確 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
  - 圖表中的核取方塊群組欄位應顯示標籤而非原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile
- **[API 文件]** 非 NocoBase 官方外掛無法顯示 API 文件 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[工作流]**

  - 修正 `toJSON()` 在排程觸發器中導致的錯誤 ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher
  - 修正當觸發器未正確配置時，在手動執行動作中拋出的錯誤 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher
  - 修正工作流不存在時的 UI 錯誤 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
  - 修正建立或更新模式下的資料表事件，在建立時若無變更欄位則不觸發的問題 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[資料來源管理器]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動的配置 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[行動端]** 優化行動端彈出視窗延遲問題 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[動作：匯出記錄 Pro]** 修正帶條件匯出附件時發生的錯誤。 by @aaaaaajie
- **[工作流：JavaScript]** 修正 require 的相對路徑問題 by @mytharcher
- **[範本列印]** 修正權限解析錯誤並新增資料未找到檢查。 by @sheldon66
- **[工作流：審批]**

  - 避免未定義欄位錯誤 by @mytharcher
  - 修正工作流刪除時拋出的錯誤 by @mytharcher
  - 修正觸發變數 by @mytharcher
  - 從快照重新載入檔案關聯以避免 URL 過期 by @mytharcher
  - 修正重新整理詳細頁面時的 API 錯誤 by @mytharcher
- **[企業微信]** 在閘道中介軟體中新增回呼路徑檢查 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.8](https://www.nocobase.com/en/blog/v1.8.0-alpha.8)

*發布日期：2025-06-17*

#### 🎉 新功能

- **[文字複製]** 支援一鍵複製文字欄位內容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe
- **[郵件管理器]** 支援刪除郵件 by @jiannx

#### 🚀 改進

- **[客戶端]**

  - 為核取方塊欄位連結規則新增「為空」和「不為空」選項 ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh
  - Logo 容器寬度適應內容類型（圖片固定 168px，文字自動寬度）([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038
- **[非同步任務管理器]** 改善匯出期間任務建立的效能 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[工作流：審批]** 為重新指派者清單新增額外欄位選項 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 金額元件從 mask 切換到 inputNumer 後遺失小數點 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh
  - 子表格中 Markdown (Vditor) 渲染不正確 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh
  - 建立反向關聯欄位後，關聯欄位設定中的「在目標資料表中建立反向關聯欄位」選項未被勾選。([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie
  - 關聯欄位選擇器在提交後未清除已選資料 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh
- **[伺服器]** 無法讀取未定義的屬性（讀取 'setMaaintainingMessage'）([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos
- **[存取控制]** 修復當不存在預設角色時應用程式阻止進入的問題 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie
- **[資料來源管理器]** 範圍變更現在會立即對所有相關角色生效。([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie
- **[工作流：循環節點]** 修正當條件不滿足時循環分支仍會執行的問題 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher
- **[工作流：自訂動作事件]** 修正重定向 URL 的變數未被解析的問題 by @mytharcher
- **[工作流：審批]** 修正執行取消時待辦事項統計未更新的問題 by @mytharcher
- **[郵件管理器]** 郵件刪除失敗 by @jiannx
- **[備份管理器]** 在 Windows 平台上還原 MySQL 備份時出現未知命令錯誤 by @gchust

### [v1.8.0-alpha.7](https://www.nocobase.com/en/blog/v1.8.0-alpha.7)

*發布日期：2025-06-13*

#### 🎉 新功能

- **[郵件管理器]** 支援郵件同步間隔設定 by @jiannx

#### 🐛 錯誤修復

- **[資料庫]** 使字串欄位的 eq 運算子與數字類型相容 ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[客戶端]** 修正上傳大小提示 ([#7057](https://github.com/nocobase/nocobase/pull/7057)) by @mytharcher
- **[工作流：審批]** 修正按類型篩選時的觸發變數問題 by @mytharcher

### [v1.8.0-alpha.5](https://www.nocobase.com/en/blog/v1.8.0-alpha.5)

*發布日期：2025-06-12*

#### 🚀 改進

- **[客戶端]**

  - 支援透過掃描 QR 碼填寫輸入欄位 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - 支援 Markdown 區塊內容的本地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - 禁止將群組選單移動到自身內部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) by @zhangzhonghe
- **[資料表欄位：多對多（陣列）]** 在資料表中顯示多對多（多）欄位時的權限相關錯誤。([#7028](https://github.com/nocobase/nocobase/pull/7028)) by @aaaaaajie
- **[日曆]** 支援在日曆區塊中設定週起始日 ([#7032](https://github.com/nocobase/nocobase/pull/7032)) by @katherinehhh
- **[資料表欄位：Markdown(Vditor)]** 支援在 Markdown (Vditor) 預覽模式下點擊圖片放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**

  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) by @katherinehhh
  - 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) by @zhangzhonghe
  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 篩選表單驗證規則導致篩選按鈕失效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) by @zhangzhonghe
  - 在二級彈出表單中設定欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) by @katherinehhh
  - 選擇欄位選項在篩選表單連結規則中無法運作 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) by @katherinehhh
  - 無法使用連結規則清除子表格的必填欄位指示器 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) by @zhangzhonghe
  - 修正篩選區塊參數錯誤問題 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) by @zhangzhonghe
  - 修正當前使用者資料為空的問題 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - 當前物件變數在連結規則中無效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) by @zhangzhonghe
  - 解決區塊無法讀取外部資料來源檢視資料的問題。([#7017](https://github.com/nocobase/nocobase/pull/7017)) by @aaaaaajie
  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) by @mytharcher
- **[資料視覺化]**

  - 圖表篩選器中日期範圍欄位顯示不正確 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) by @katherinehhh
  - 圖表中的核取方塊群組欄位應顯示標籤而非原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) by @2013xile
- **[動作：匯入記錄]**

  - 修正 xlsx 匯入，限制文字區域欄位不接受非字串格式資料 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) by @aaaaaajie
  - 修正當涉及關聯欄位時子表格匯入失敗的問題 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) by @aaaaaajie
  - 修正匯入 XLSX 樹狀表格資料時，在批次編輯過程中發生的錯誤 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) by @aaaaaajie
- **[API 文件]** 非 NocoBase 官方外掛無法顯示 API 文件 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) by @chenzhizdt
- **[工作流]**

  - 修正 `toJSON()` 在排程觸發器中導致的錯誤 ([#7037](https://github.com/nocobase/nocobase/pull/7037)) by @mytharcher
  - 修正當觸發器未正確配置時，在手動執行動作中拋出的錯誤 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) by @mytharcher
  - 修正工作流不存在時的 UI 錯誤 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) by @mytharcher
  - 修正建立或更新模式下的資料表事件，在建立時若無變更欄位則不觸發的問題 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) by @mytharcher
- **[行動端]** 優化行動端彈出視窗延遲問題 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) by @zhangzhonghe
- **[資料來源管理器]** 移除 possibleTypes 的資料庫依賴，強制使用 API 驅動的配置 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) by @aaaaaajie
- **[動作：匯出記錄 Pro]** 修正帶條件匯出附件時發生的錯誤。 by @aaaaaajie
