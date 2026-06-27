---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援應用程式進入維護狀態時由插件定義的維護元件，以及更多。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*發布日期：2026-01-04*

### 🎉 新功能

- **[客戶端]** 支援應用程式進入維護狀態時，由插件定義的維護元件 ([#8252](https://github.com/nocobase/nocobase/pull/8252)) by @cgyrock
- **[檔案管理器]** 支援檔案重新命名方法配置 ([#8231](https://github.com/nocobase/nocobase/pull/8231)) by @JAVA-LW
- **[檔案儲存：S3(Pro)]** 為 S3 Pro 儲存新增重新命名模式選項 by @mytharcher

### 🚀 改進

- **[遷移管理器]** 改進遷移檢查、支援 SQL 下載、日誌格式化以及執行過程可視化 by @cgyrock

### 🐛 錯誤修復

- **[資料庫]**

  - 查詢多對多關聯時包含透過範圍 ([#8277](https://github.com/nocobase/nocobase/pull/8277)) by @2013xile
  - 修復 `OptionsParser` 中的物件 `appends`，並增加參數的 `arrayLimit` ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
- **[客戶端]** 修復在多對多欄位的篩選表單區塊設定中拋出錯誤的問題 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) by @mytharcher
- **[非同步任務管理器]** 修復取消背景任務的語言問題 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) by @mytharcher
- **[檔案管理器]** 修復上傳大於 5MB 的檔案到 AWS S3 時拋出錯誤的問題 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) by @mytharcher
- **[工作流]** 修復重新整理外部資料來源後資料庫事件失效的問題 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) by @cgyrock
- **[資料表：樹]** 批次建立樹狀資料表節點後更新路徑 ([#8267](https://github.com/nocobase/nocobase/pull/8267)) by @2013xile
- **[資料來源：外部 PostgreSQL]** 修復重新整理外部資料來源後資料庫事件失效的問題 by @cgyrock
- **[資料來源：外部 Oracle]** 修復重新整理外部資料來源後資料庫事件失效的問題 by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*發布日期：2026-01-07*

### 🚀 改進

- **[工作流：審批]** 簡化查詢參數，並提升效能 by @mytharcher

### 🐛 錯誤修復

- **[sdk]** 改進 token 共享實作 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
- **[客戶端]** 修復來自外部資料來源的關聯欄位在表單區塊中無法載入關聯資料的問題 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
- **[工作流：循環節點]** 修復條件分支中的失敗節點無法將狀態傳遞給上層分支節點的問題 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[存取控制]** 允許關聯欄位使用目標鍵進行關聯 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
- **[工作流：Webhook]** 修復在子應用程式中向 webhook URL 發送 POST 請求時拋出 404 錯誤的問題 by @mytharcher
- **[郵件管理器]** 修復 Outlook 回覆連結偶爾斷線的問題 by @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*發布日期：2026-01-06*

### 🚀 改進

- **[客戶端]** 在 AI 編輯任務表單中自動調整文字區域大小。([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
- **[工作流：審批]** 遷移後新增同步審批對象的修復邏輯 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復在詳情、列表和表單區塊中分頁後，欄位和操作權限未重新計算的問題。([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
- **[工作流：審批]** 修復因缺少依賴導致的建置錯誤 by @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*發布日期：2026-01-05*

### 🐛 錯誤修復

- **[操作：匯入記錄]** 修復在非同步 XLSX 匯入期間觸發唯一約束錯誤時，錯誤訊息不正確的問題 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[操作：匯出記錄 Pro]** 修復當主應用程式未啟用匯入/匯出 Pro 插件時，子應用程式執行非同步匯入/匯出任務出錯的問題 by @cgyrock
- **[郵件管理器]** 顯示全部回覆按鈕，且資料範圍支援篩選子郵件。by @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*發布日期：2026-01-05*

### 🚀 改進

- **[存取控制]** 改進修改巢狀關聯欄位時的權限檢查 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]** 修復 `FilterAction` 元件中關聯欄位不正確的問題 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
- **[資料來源：主]** 檢視資料表的元資料應包含來源欄位選項 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[工作流：審批]** 修復任務中心篩選欄位無法正常運作的問題 by @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*發布日期：2026-01-04*

### 🐛 錯誤修復

- **[流程引擎]** 修復多次開啟彈窗時可能發生狀態污染的問題。([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
- **[資料庫]** 修復 `OptionsParser` 中的物件 `appends`，並增加參數的 `arrayLimit` ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*發布日期：2026-01-07*

### 🚀 改進

- **[客戶端]**

  - 更新儲存格時防止整個表格重新渲染 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) by @katherinehhh
  - 在 AI 編輯任務表單中自動調整文字區域大小。([#8350](https://github.com/nocobase/nocobase/pull/8350)) by @heziqiang
- **[工作流：審批]**

  - 遷移後新增同步審批對象的修復邏輯 by @mytharcher
  - 簡化查詢參數，並提升效能 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修復在詳情、列表和表單區塊中分頁後，欄位和操作權限未重新計算的問題。([#8336](https://github.com/nocobase/nocobase/pull/8336)) by @gchust
  - 修復來自外部資料來源的關聯欄位在表單區塊中無法載入關聯資料的問題 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) by @katherinehhh
- **[sdk]** 改進 token 共享實作 ([#8357](https://github.com/nocobase/nocobase/pull/8357)) by @chenos
- **[存取控制]** 允許關聯欄位使用目標鍵進行關聯 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) by @2013xile
- **[工作流：循環節點]** 修復條件分支中的失敗節點無法將狀態傳遞給上層分支節點的問題 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) by @mytharcher
- **[工作流：Webhook]** 修復在子應用程式中向 webhook URL 發送 POST 請求時拋出 404 錯誤的問題 by @mytharcher
- **[工作流：審批]** 修復因缺少依賴導致的建置錯誤 by @mytharcher
- **[郵件管理器]** 修復 Outlook 回覆連結偶爾斷線的問題 by @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*發布日期：2026-01-05*

### 🚀 改進

- **[存取控制]** 改進修改巢狀關聯欄位時的權限檢查 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]**

  - 修復可選 targetKey 的精煉邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) by @katherinehhh
  - 修復 `FilterAction` 元件中關聯欄位不正確的問題 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) by @mytharcher
  - 修復可編輯子表格中關聯欄位 Select 的篩選參數不正確的問題 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) by @katherinehhh
- **[流程引擎]** 修復多次開啟彈窗時可能發生狀態污染的問題。([#8327](https://github.com/nocobase/nocobase/pull/8327)) by @gchust
- **[資料庫]** 修復 `OptionsParser` 中的物件 `appends`，並增加參數的 `arrayLimit` ([#8328](https://github.com/nocobase/nocobase/pull/8328)) by @mytharcher
- **[操作：匯入記錄]** 修復在非同步 XLSX 匯入期間觸發唯一約束錯誤時，錯誤訊息不正確的問題 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) by @cgyrock
- **[資料來源：主]** 檢視資料表的元資料應包含來源欄位選項 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) by @2013xile
- **[操作：匯出記錄 Pro]** 修復當主應用程式未啟用匯入/匯出 Pro 插件時，子應用程式執行非同步匯入/匯出任務出錯的問題 by @cgyrock
- **[工作流：審批]** 修復任務中心篩選欄位無法正常運作的問題 by @mytharcher
- **[郵件管理器]** 顯示全部回覆按鈕，且資料範圍支援篩選子郵件。by @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*發布日期：2025-12-25*

### 🚀 改進

- **[流程引擎]**
  - 優化切換配置模式時的效能問題 ([#8241](https://github.com/nocobase/nocobase/pull/8241)) by @zhangzhonghe
  - 在 runjs 環境中支援 FormData 物件。([#8263](https://github.com/nocobase/nocobase/pull/8263)) by @gchust

### 🐛 錯誤修復

- **[客戶端]** 修復顯示關聯欄位懶加載時因無限循環導致的堆疊溢位 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) by @zhangzhonghe
