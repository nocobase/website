---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：工作流程改進與修復、優化拖放功能等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*發布日期：2025-10-02*

### 🚀 改進

- **[客戶端]** 支援在預覽圖片時旋轉 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
- **[工作流]** 將與調度相關的邏輯拆分為獨立的調度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復側邊欄子選單無法正確高亮的問題 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
- **[工作流：循環節點]** 修復即使循環節點條件未滿足，流程仍錯誤地前進到下一個項目的問題 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[工作流]**
  - 修復因佇列處理不當導致重複執行的問題 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  - 修復在綁定工作流配置中載入關聯欄位上下文時，工作流列表條件不正確的問題 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  - 修復基於日期欄位的排程任務在啟動後未觸發的問題 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*發布日期：2025-10-09*

### 🚀 改進

* **[伺服器]** 為應用程式新增優雅關閉的生命週期處理 ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
* **[工作流：循環節點]** 支援透過環境變數限制循環節點的最大循環次數 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[工作流]** 支援透過環境變數限制工作流中的最大節點數量 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[工作流：審批]** 在自訂審批區塊的詳細資訊彈窗中新增列印按鈕 by @mytharcher

### 🐛 錯誤修復

* **[郵件管理器]** 重新授權異常 by @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*發布日期：2025-10-09*

### 🐛 錯誤修復

* **[客戶端]** 修復 `AssignedField` 元件中缺少動態屬性導致「建立記錄」或「更新記錄」節點檔案上傳錯誤的問題 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
* **[公開表單]** 修復公開表單中檔案欄位上傳規則不正確的問題 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*發布日期：2025-09-30*

### 🎉 新功能

* **[客戶端]**
  * 表格區塊支援新增「欄位設定」按鈕，用於配置欄位順序和可見性 ([#7204](https://github.com/nocobase/nocobase/pull/7204)) by @kerwin612
  * 支援欄位驗證規則 ([#7297](https://github.com/nocobase/nocobase/pull/7297)) by @aaaaaajie
* **[資料來源：主資料來源]**
  * 支援從主資料來源讀取表格 ([#7238](https://github.com/nocobase/nocobase/pull/7238)) by @aaaaaajie
  * 支援在主資料來源中顯示外掛定義的表格。 ([#7187](https://github.com/nocobase/nocobase/pull/7187)) by @aaaaaajie

### 🚀 改進

* **[客戶端]** 支援在預覽圖片時旋轉 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
* **[snowflake-id]** 將具有自增主鍵但無唯一標識符的系統表格 ID 更改為 53 位元的 Snowflake 風格 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
* **[工作流]** 將與調度相關的邏輯拆分為獨立的調度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher
* **[RabbitMQ 佇列適配器]** 改進 RabbitMQ 連線處理和訊息處理邏輯 by @sdp-ncd
* **[郵件管理器]**
  * 支援批次同步 by @jiannx
  * 富文字編輯器支援圖片調整大小 by @jiannx

### 🐛 錯誤修復

* **[客戶端]**
  * 修復「欄位設定」按鈕從模態對話框內的表格載入欄位的問題 ([#7385](https://github.com/nocobase/nocobase/pull/7385)) by @kerwin612
  * 修復側邊欄子選單無法正確高亮的問題 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
* **[工作流]**
  * 修復因佇列處理不當導致重複執行的問題 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * 修復在綁定工作流配置中載入關聯欄位上下文時，工作流列表條件不正確的問題 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
  * 修復基於日期欄位的排程任務在啟動後未觸發的問題 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher
* **[工作流：循環節點]** 修復即使循環節點條件未滿足，流程仍錯誤地前進到下一個項目的問題 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
* **[郵件管理器]**
  * 垃圾郵件主旨 by @jiannx
  * 垃圾主旨 by @jiannx
  * 富文字編輯器支援軟換行 by @jiannx
  * 支援同一封郵件發送給多人 by @jiannx
  * 郵件訊息列表最佳化效能 by @jiannx
  * 選取行後，設定「已讀」和「未讀」 by @jiannx
  * 新增 rawId 欄位以進行效能最佳化 by @jiannx
  * HTML 中的 ref 屬性導致渲染異常 by @jiannx
  * 子郵件內容無法被過濾 by @jiannx
  * 支援重新同步 by @jiannx
  * 手動區分轉寄和回覆 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*發布日期：2025-10-10*

### 🐛 錯誤修復

- **[伺服器]** 主鍵遷移錯誤 ([#7563](https://github.com/nocobase/nocobase/pull/7563)) by @2013xile
- **[客戶端]**
  - 修復提交表單後資料未重新整理的問題 ([#7560](https://github.com/nocobase/nocobase/pull/7560)) by @zhangzhonghe
  - 修復 `AssignedField` 元件中缺少動態屬性導致「建立記錄」或「更新記錄」節點檔案上傳錯誤的問題 ([#7556](https://github.com/nocobase/nocobase/pull/7556)) by @mytharcher
- **[日曆]** 修復日曆區塊中因唯一標識符導致的資料查詢問題 ([#7562](https://github.com/nocobase/nocobase/pull/7562)) by @katherinehhh
- **[區塊：範本（已棄用）]** 修復開啟或關閉模態視窗時，觸發不必要的區塊範本請求的問題 ([#7561](https://github.com/nocobase/nocobase/pull/7561)) by @gchust
- **[公開表單]** 修復公開表單中檔案欄位上傳規則不正確的問題 ([#7553](https://github.com/nocobase/nocobase/pull/7553)) by @mytharcher
- **[多應用管理器（已棄用）]** 修復多應用資料遷移前的埠號驗證問題 ([#7540](https://github.com/nocobase/nocobase/pull/7540)) by @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*發布日期：2025-10-05*

### 🚀 改進

* **[流程引擎]** 最佳化拖放功能 ([#7526](https://github.com/nocobase/nocobase/pull/7526)) by @zhangzhonghe
* **[工作流：循環節點]** 支援透過環境變數限制循環節點的最大循環次數 ([#7543](https://github.com/nocobase/nocobase/pull/7543)) by @mytharcher
* **[工作流]** 支援透過環境變數限制工作流中的最大節點數量 ([#7542](https://github.com/nocobase/nocobase/pull/7542)) by @mytharcher
* **[工作流：審批]** 在自訂審批區塊的詳細資訊彈窗中新增列印按鈕 by @mytharcher

### 🐛 錯誤修復

* **[客戶端]** 修復程式碼編輯器中的「執行」動作無法正常運作的問題，確保使用者現在可以正確執行程式碼。 ([#7547](https://github.com/nocobase/nocobase/pull/7547)) by @gchust
* **[AI 員工]** 修復 AI 員工權限配置頁面的錯誤 ([#7548](https://github.com/nocobase/nocobase/pull/7548)) by @2013xile
* **[工作流]** 修復在綁定工作流按鈕配置中新增工作流後，點擊導致應用程式凍結的問題 ([#7541](https://github.com/nocobase/nocobase/pull/7541)) by @mytharcher
* **[郵件管理器]** 重新授權異常 by @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*發布日期：2025-09-30*

### 🚀 改進

* **[工作流]** 將與調度相關的邏輯拆分為獨立的調度器 ([#7535](https://github.com/nocobase/nocobase/pull/7535)) by @mytharcher

### 🐛 錯誤修復

* **[工作流]**
  * 修復因佇列處理不當導致重複執行的問題 ([#7533](https://github.com/nocobase/nocobase/pull/7533)) by @mytharcher
  * 修復基於日期欄位的排程任務在啟動後未觸發的問題 ([#7524](https://github.com/nocobase/nocobase/pull/7524)) by @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*發布日期：2025-09-30

### 🚀 改進

- **[伺服器]** 為應用程式新增優雅關閉的生命週期處理 ([#7536](https://github.com/nocobase/nocobase/pull/7536)) by @mytharcher
