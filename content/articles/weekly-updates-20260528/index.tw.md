---
title: "每週更新｜開源備份管理器插件"
description: "這是 NocoBase 在 2026 年 5 月 22 日至 5 月 28 日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.58](https://www.nocobase.com/en/blog/v2.0.58)

*發布日期：2026-05-28*

### 🎉 新功能

* **[工作流程]** 新增管理員 API，可從起始節點或指定節點重新執行已啟動的工作流程實例。([#9569](https://github.com/nocobase/nocobase/pull/9569)) by @mytharcher

### 🚀 改進

* **[客戶端]** 從選單項目設定中移除了「隱藏」選項。([#9595](https://github.com/nocobase/nocobase/pull/9595)) by @zhangzhonghe

### 🐛 錯誤修復

* **[客戶端]**
  * 修復了 v2 行動版日期選擇器彈出視窗使用當前時間而非表單值的問題。([#9582](https://github.com/nocobase/nocobase/pull/9582)) by @katherinehhh
  * 修復了 v2 中時間欄位格式設定未生效的問題。([#9579](https://github.com/nocobase/nocobase/pull/9579)) by @katherinehhh
  * 將 v1 掃描輸入元件的檔案上傳限制提高至 10 MB。([#9580](https://github.com/nocobase/nocobase/pull/9580)) by @katherinehhh
  * 修復了子表單聯動隱藏狀態未同步的問題。([#9594](https://github.com/nocobase/nocobase/pull/9594)) by @katherinehhh
  * 修復了子表單中的子表格無法新增第二行的問題。([#9586](https://github.com/nocobase/nocobase/pull/9586)) by @katherinehhh
  * 修復了切換選單後頁面分頁消失的問題。([#9583](https://github.com/nocobase/nocobase/pull/9583)) by @zhangzhonghe
* **[流程引擎]** 修復了在彈出視窗中表單成功提交後，表格操作聯動規則執行錯誤的問題。([#9445](https://github.com/nocobase/nocobase/pull/9445)) by @gchust
* **[工作流程：自訂操作事件]** 修復了具有多筆記錄上下文的自訂操作表格按鈕，錯誤地允許選擇自訂上下文工作流程的問題。([#9608](https://github.com/nocobase/nocobase/pull/9608)) by @mytharcher
* **[檔案管理]**
  * 修復了檔案上傳期間的 Unicode 檔案名稱正規化問題，以避免產生包含控制字元的物件鍵值。([#9584](https://github.com/nocobase/nocobase/pull/9584)) by @mytharcher
  * 改進了 PDF 預覽失敗訊息，並記錄了外部儲存的 CORS 要求。([#9600](https://github.com/nocobase/nocobase/pull/9600)) by @mytharcher
    參考：[檔案預覽](docs/docs/en/file-manager/file-preview/index.md)

### [v2.0.57](https://www.nocobase.com/en/blog/v2.0.57)

*發布日期：2026-05-26*

### 🐛 錯誤修復

* **[建置]** 修復了外掛伺服器混淆輸出，以避免在 Node.js 執行時期套件中包含瀏覽器全域變數。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[工作流程：人工節點]** 修復了人工工作流程任務的暫存功能未保留已提交表單值的問題。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[AI 員工]** 修復了工作上下文提示中工具名稱描述錯誤的問題。([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[檔案管理]** 使用 PDF.js 安全渲染 PDF 預覽，取代基於 iframe 的原始 PDF 渲染。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[認證：OIDC]** 修復了 SSO 登入回調收到外部重新導向 URL 時的 Token 洩漏問題。by @2013xile
* **[工作流程：審批]**
  * 修復了審批節點不支援 `<span>jobs:resume</span>` API 的問題。by @mytharcher
  * 修復了審批撤回時，在尊重來源資料表更新權限的情況下更新已提交的業務資料。by @mytharcher
  * 修復了當審批工作流程因非審批節點失敗而終止時，審批待辦事項未更新的問題。by @mytharcher

### [v2.0.56](https://www.nocobase.com/en/blog/v2.0.56)

*發布日期：2026-05-22*

### 🎉 新功能

* **[備份管理]** 開源了備份管理外掛。([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

### 🚀 改進

* **[客戶端]** 優化了操作按鈕顯示設定。([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[流程引擎]** 為 v2 欄位設定選單新增了搜尋支援。([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[安全性]** 為 Pull Request 新增了依賴安全性審查。([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[通知管理]** 更改了佇列策略以優化發送效能。([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
* **[AI：知識庫]** 啟用了 AI 知識庫的向量儲存修改功能。by @cgyrock
* **[工作流程：審批]** 使用時間軸卡片改進了相關審批的顯示。by @zhangzhonghe

### 🐛 錯誤修復

* **[客戶端]**
  * 修復了資料範圍聯動中，當依賴的關聯欄位變更時，已選取值被清空的問題。([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * 修復了選單徽章在其值為 0 時仍顯示圓點的問題。([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  * 修復了篩選表單無法使用當前表單變數的問題。([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  * 修復了縮小的 v2 區塊在離開編輯模式後變為全寬的問題。([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  * 修復了子表單中 JS 欄位選單狀態不正確的問題。([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
* **[流程引擎]** 修復了 v2 表單中外部資料來源欄位的多選問題。([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[AI 員工]** 修復了 AI 員工存取唯讀知識庫時發生的錯誤。([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
* **[日曆]** 修復了日曆中更多項目無法完全顯示的問題。([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
* **[操作：批次更新]** 修復了批次更新操作在更新失敗後重設載入狀態的問題。([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[API 文件]** 修復了資料表 API 文件，使查詢參數不再互相干擾。([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
* **[工作流程]** 為人工工作流程執行新增了載入狀態。([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[遷移管理]** 修復了使用 OceanBase 時遷移檔案建立失敗的問題。by @2013xile
* **[檔案儲存：S3(Pro)]** 修復了 S3 Pro 端點處理，使伺服器上傳和 URL 預覽不會重複儲存桶主機。by @mytharcher
* **[工作流程：審批]** 修復了當同一個審批任務同時發生委派時，審批記錄索引重複的問題。by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)


### [v2.1.0-beta.37](https://www.nocobase.com/en/blog/v2.1.0-beta.37)

*發布日期：2026-05-26*

### 🎉 新功能

* **[client-v2]** 在 v2 管理後台新增了「安全性」選單和「Token 策略」設定頁面。使用者中心現在支援「變更密碼」。([#9556](https://github.com/nocobase/nocobase/pull/9556)) by @Molunerfinn
* **[cli]** 新增了對基本認證的支援。([#9558](https://github.com/nocobase/nocobase/pull/9558)) by @chenos
* **[密碼策略]** 將密碼策略外掛遷移至 client-v2 管理後台外殼，包括「密碼策略」和「鎖定使用者」設定頁面，並在使用者中心的「變更密碼」表單上新增了客戶端規則強制執行。by @Molunerfinn

### 🚀 改進

* **[資料視覺化]** 為圖表區塊新增了 client-v2 支援。([#9517](https://github.com/nocobase/nocobase/pull/9517)) by @jiannx
* **[工作流程]** 重構了工作流程非同步節點的可用性檢查。([#9532](https://github.com/nocobase/nocobase/pull/9532)) by @mytharcher

### 🐛 錯誤修復

* **[建置]**
  * 伺服器建置中的文字資產現在以檔案形式複製，而非轉換為 JavaScript 模組。([#9565](https://github.com/nocobase/nocobase/pull/9565)) by @Molunerfinn
  * 修復了外掛伺服器混淆輸出，以避免在 Node.js 執行時期套件中包含瀏覽器全域變數。([#9559](https://github.com/nocobase/nocobase/pull/9559)) by @Molunerfinn
* **[client-v2]** 修復了瀏覽器語言元資料，使應用程式頁面遵循所選的應用程式語言，而非標記為英文。([#9564](https://github.com/nocobase/nocobase/pull/9564)) by @Molunerfinn
* **[檔案管理]** 使用 PDF.js 安全渲染 PDF 預覽，取代基於 iframe 的原始 PDF 渲染。([#9566](https://github.com/nocobase/nocobase/pull/9566)) by @mytharcher
* **[AI 員工]** 修復了工作上下文提示中工具名稱描述錯誤的問題。([#9567](https://github.com/nocobase/nocobase/pull/9567)) by @cgyrock
* **[工作流程：人工節點]** 修復了人工工作流程任務的暫存功能未保留已提交表單值的問題。([#9554](https://github.com/nocobase/nocobase/pull/9554)) by @mytharcher
* **[認證：OIDC]** 修復了 SSO 登入回調收到外部重新導向 URL 時的 Token 洩漏問題。by @2013xile
* **[工作流程：審批]**
  * 修復了審批撤回時，在尊重來源資料表更新權限的情況下更新已提交的業務資料。by @mytharcher
  * 修復了審批節點不支援 `<span>jobs:resume</span>` API 的問題。by @mytharcher
  * 修復了當同一個審批任務同時發生委派時，審批記錄索引重複的問題。by @mytharcher
  * 修復了當審批工作流程因非審批節點失敗而終止時，審批待辦事項未更新的問題。by @mytharcher

### [v2.1.0-beta.36](https://www.nocobase.com/en/blog/v2.1.0-beta.36)

*發布日期：2026-05-22*

### 🎉 新功能

* **[cli]** 新增了備份建立和還原指令。([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
* **[備份管理]** 開源了備份管理外掛。([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
* **[主題編輯器]** 為 v2 介面新增了主題編輯器支援。([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
* **[雙因素認證 (2FA)]** 新增了從 v2 客戶端進行 TOTP 和雙因素認證的綁定、驗證和設定支援。by @Molunerfinn

### 🚀 改進

* **[客戶端]** 優化了操作按鈕顯示設定。([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[流程引擎]** 為 v2 欄位設定選單新增了搜尋支援。([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[cli]** 改進了環境認證流程。([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
* **[安全性]** 為 Pull Request 新增了依賴安全性審查。([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[驗證]** 為驗證外掛新增了 v2 客戶端支援，包括管理後台設定頁面、使用者中心入口和簡訊 OTP 表單。([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
* **[認證]** 修復了 v2 客戶端中的自訂品牌設定。([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
* **[區塊：地圖]** 為地圖外掛新增了 v2 客戶端支援。([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
* **[自訂品牌]** 為 v2 客戶端新增了自訂品牌設定支援。by @zhangzhonghe
* **[AI：知識庫]** 啟用了 AI 知識庫的向量儲存修改功能。by @cgyrock
* **[工作流程：審批]** 為審批指令新增了 `<span>async</span>` 標記，以支援工作流程畫布中的新節點建立 API。by @mytharcher

### 🐛 錯誤修復

* **[客戶端]**
  * 修復了資料範圍聯動中，當依賴的關聯欄位變更時，已選取值被清空的問題。([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * 修復了依賴於本地原始碼外掛命名匯出的已建置儲存外掛在開發模式下的載入問題。([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  * 修復了子表單中 JS 欄位選單狀態不正確的問題。([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
  * 修復了縮小的 v2 區塊在離開編輯模式後變為全寬的問題。([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
* **[client-v2]** 修復了 dnd-kit 依賴註冊不一致的問題。([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
* **[流程引擎]** 修復了 v2 表單中外部資料來源欄位的多選問題。([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[區塊：iframe]** 修復了 iframe 內容未填滿設定區塊高度的問題。([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
* **[AI 員工]**
  * 修復了 AI 員工存取唯讀知識庫時發生的錯誤。([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  * 修復了當串流工具事件被分割時，AI 工具呼叫卡片未立即顯示的問題。([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  * 修復了 AI 員工存取唯讀知識庫時發生的錯誤。([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
* **[操作：匯出記錄]** 改進了當關聯欄位很多時的欄位設定效能。([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
* **[操作：批次更新]** 修復了批次更新操作在更新失敗後重設載入狀態的問題。([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[工作流程]** 為人工工作流程執行新增了載入狀態。([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[本地化]** 修復了 AI 翻譯任務的內建本地化參考翻譯。([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
* **[遷移管理]** 修復了使用 OceanBase 時遷移檔案建立失敗的問題。by @2013xile
* **[檔案儲存：S3(Pro)]** 修復了 S3 Pro 端點處理，使伺服器上傳和 URL 預覽不會重複儲存桶主機。by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.40](https://www.nocobase.com/en/blog/v2.1.0-alpha.40)

*發布日期：2026-05-22*

### 🎉 新功能

* **[cli]** 新增了備份建立和還原指令。([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
* **[備份管理]** 開源了備份管理外掛。([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
* **[主題編輯器]** 為 v2 介面新增了主題編輯器支援。([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
* **[雙因素認證 (2FA)]** 新增了從 v2 客戶端進行 TOTP 和雙因素認證的綁定、驗證和設定支援。by @Molunerfinn

### 🚀 改進

* **[cli]** 改進了環境認證流程。([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
* **[流程引擎]** 為 v2 欄位設定選單新增了搜尋支援。([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
* **[客戶端]** 優化了操作按鈕顯示設定。([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
* **[安全性]** 為 Pull Request 新增了依賴安全性審查。([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
* **[驗證]** 為驗證外掛新增了 v2 客戶端支援，包括管理後台設定頁面、使用者中心入口和簡訊 OTP 表單。([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
* **[認證]** 修復了 v2 客戶端中的自訂品牌設定。([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
* **[區塊：地圖]** 為地圖外掛新增了 v2 客戶端支援。([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
* **[自訂品牌]** 為 v2 客戶端新增了自訂品牌設定支援。by @zhangzhonghe
* **[AI：知識庫]** 啟用了 AI 知識庫的向量儲存修改功能。by @cgyrock
* **[工作流程：審批]** 為審批指令新增了 `<span>async</span>` 標記，以支援工作流程畫布中的新節點建立 API。by @mytharcher

### 🐛 錯誤修復

* **[客戶端]**
  * 修復了依賴於本地原始碼外掛命名匯出的已建置儲存外掛在開發模式下的載入問題。([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  * 修復了縮小的 v2 區塊在離開編輯模式後變為全寬的問題。([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  * 修復了資料範圍聯動中，當依賴的關聯欄位變更時，已選取值被清空的問題。([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  * 修復了子表單中 JS 欄位選單狀態不正確的問題。([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
* **[client-v2]** 修復了 dnd-kit 依賴註冊不一致的問題。([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
* **[流程引擎]** 修復了 v2 表單中外部資料來源欄位的多選問題。([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
* **[區塊：iframe]** 修復了 iframe 內容未填滿設定區塊高度的問題。([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
* **[操作：匯出記錄]** 改進了當關聯欄位很多時的欄位設定效能。([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
* **[AI 員工]**
  * 修復了 AI 員工存取唯讀知識庫時發生的錯誤。([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  * 修復了 AI 員工存取唯讀知識庫時發生的錯誤。([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
  * 修復了當串流工具事件被分割時，AI 工具呼叫卡片未立即顯示的問題。([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
* **[本地化]** 修復了 AI 翻譯任務的內建本地化參考翻譯。([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
* **[操作：批次更新]** 修復了批次更新操作在更新失敗後重設載入狀態的問題。([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
* **[工作流程]** 為人工工作流程執行新增了載入狀態。([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
* **[遷移管理]** 修復了使用 OceanBase 時遷移檔案建立失敗的問題。by @2013xile
* **[檔案儲存：S3(Pro)]** 修復了 S3 Pro 端點處理，使伺服器上傳和 URL 預覽不會重複儲存桶主機。by @mytharcher
* **[工作流程：審批]** 修復了當同一個審批任務同時發生委派時，審批記錄索引重複的問題。by @mytharcher
