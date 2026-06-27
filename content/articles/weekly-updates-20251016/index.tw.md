---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：新增「當前設備類型」變數，改進 plugin-ai 的網路搜尋功能"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要提供給測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.29](https://www.nocobase.com/en/blog/v1.8.29)

*發布日期：2025-10-15*

### 🚀 改進

* **[工作流：審批]** 重構分支配置以適應核心變更，作者：@mytharcher

### 🐛 錯誤修復

* **[工作流：審批]** 修復當應用程式未安裝時，因資料表不存在導致遷移腳本錯誤的問題，作者：@mytharcher

### [v1.8.28](https://www.nocobase.com/en/blog/v1.8.28)

*發布日期：2025-10-14*

### 🚀 改進

* **[客戶端]** 為獲取更準確的檔案 MIME 類型，在客戶端使用 `mime` 套件來偵測檔案的 MIME 類型 ([#7551](https://github.com/nocobase/nocobase/pull/7551))，作者：@mytharcher
* **[工作流]**
  * 支援透過環境變數限制工作流中的最大節點數量 ([#7542](https://github.com/nocobase/nocobase/pull/7542))，作者：@mytharcher
  * 刪除節點時新增 `keepBranch` 選項 ([#7571](https://github.com/nocobase/nocobase/pull/7571))，作者：@mytharcher
* **[工作流：循環節點]** 支援透過環境變數限制循環節點的最大循環次數 ([#7543](https://github.com/nocobase/nocobase/pull/7543))，作者：@mytharcher
* **[工作流：審批]** 在自訂審批區塊的詳情彈窗中新增列印按鈕，作者：@mytharcher

### 🐛 錯誤修復

* **[客戶端]**
  * 修正在預覽時，圖片同時旋轉和縮放後顯示不正確的問題 ([#7573](https://github.com/nocobase/nocobase/pull/7573))，作者：@mytharcher
  * 修正在「新增記錄」或「更新記錄」節點中，`AssignedField` 元件缺少動態屬性導致檔案上傳錯誤的問題 ([#7556](https://github.com/nocobase/nocobase/pull/7556))，作者：@mytharcher
* **[公開表單]** 修正公開表單中檔案欄位上傳規則不正確的問題 ([#7553](https://github.com/nocobase/nocobase/pull/7553))，作者：@mytharcher
* **[日曆]** 修復日曆區塊中因唯一標識符導致的資料查詢問題 ([#7562](https://github.com/nocobase/nocobase/pull/7562))，作者：@katherinehhh
* **[認證：LDAP]** 修正在 Active Directory 中使用非 ASCII (UTF-8) DN 時 LDAP 綁定失敗的問題，作者：@2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.12](https://www.nocobase.com/en/blog/v1.9.0-beta.12)

*發布日期：2025-10-11*

### 🐛 錯誤修復

* **[伺服器端]** 主鍵遷移錯誤 ([#7568](https://github.com/nocobase/nocobase/pull/7568))，作者：@2013xile
* **[日曆]** 修復日曆區塊中因唯一標識符導致的資料查詢問題 ([#7562](https://github.com/nocobase/nocobase/pull/7562))，作者：@katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.8](https://www.nocobase.com/en/blog/v2.0.0-alpha.8)

*發布日期：2025-10-14*

### 🎉 新功能

* **[AI 員工]** 改進 plugin-ai 的網路搜尋功能 ([#7580](https://github.com/nocobase/nocobase/pull/7580))，作者：@cgyrock

### 🚀 改進

* **[客戶端]** 為獲取更準確的檔案 MIME 類型，在客戶端使用 `mime` 套件來偵測檔案的 MIME 類型 ([#7551](https://github.com/nocobase/nocobase/pull/7551))，作者：@mytharcher
* **[流程引擎]**
  * 支援彈窗變數 ([#7583](https://github.com/nocobase/nocobase/pull/7583))，作者：@gchust
  * 透過更豐富的程式碼片段和針對各種場景的上下文感知程式碼補全，增強程式碼編輯體驗 ([#7559](https://github.com/nocobase/nocobase/pull/7559))，作者：@gchust
  * 標準化自動工作流，使其一致地由「beforeRender」事件觸發，確保跨流程的可預測和統一操作。([#7577](https://github.com/nocobase/nocobase/pull/7577))，作者：@gchust
* **[工作流]** 刪除節點時新增 `keepBranch` 選項 ([#7571](https://github.com/nocobase/nocobase/pull/7571))，作者：@mytharcher
* **[資料視覺化]** 擴充圖表類型；優化 UI 和互動體驗。([#7581](https://github.com/nocobase/nocobase/pull/7581))，作者：@heziqiang
* **[工作流：審批]** 重構分支配置以適應核心變更，作者：@mytharcher

### 🐛 錯誤修復

* **[客戶端]**
  * 修正在切換表格分頁時頁面顯示異常的問題 ([#7572](https://github.com/nocobase/nocobase/pull/7572))，作者：@zhangzhonghe
  * 無法為「更新」和「批量更新」操作配置指派欄位值 ([#7565](https://github.com/nocobase/nocobase/pull/7565))，作者：@gchust
  * 修正在預覽時，圖片同時旋轉和縮放後顯示不正確的問題 ([#7573](https://github.com/nocobase/nocobase/pull/7573))，作者：@mytharcher
* **[工作流：審批]** 修復當應用程式未安裝時，因資料表不存在導致遷移腳本錯誤的問題，作者：@mytharcher
* **[認證：LDAP]** 修正在 Active Directory 中使用非 ASCII (UTF-8) DN 時 LDAP 綁定失敗的問題，作者：@2013xile

### [v2.0.0-alpha.7](https://www.nocobase.com/en/blog/v2.0.0-alpha.7)

*發布日期：2025-10-13*

### 🎉 新功能

* **[客戶端]** 新增「目前裝置類型」變數 ([#7576](https://github.com/nocobase/nocobase/pull/7576))，作者：@zhangzhonghe

### [v2.0.0-alpha.6](https://www.nocobase.com/en/blog/v2.0.0-alpha.6)

*發布日期：2025-10-11*

### 🐛 錯誤修復

* **[伺服器端]** 主鍵遷移錯誤 ([#7568](https://github.com/nocobase/nocobase/pull/7568))，作者：@2013xile
* **[未定義]** 路由路徑匹配支援新的多應用程式 ([#7570](https://github.com/nocobase/nocobase/pull/7570))，作者：@jiannx
* **[AI 員工]** 修正在使用 ChatGPT-4o 時，AI 員工資料建模工具中的錯誤。([#7566](https://github.com/nocobase/nocobase/pull/7566))，作者：@cgyrock
