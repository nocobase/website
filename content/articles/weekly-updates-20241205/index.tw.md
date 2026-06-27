---
title: "NocoBase 每週更新：支援在 readPretty 欄位上啟用連結開啟彈出視窗"
description: "本週更新包括：支援在 readPretty 欄位上啟用連結開啟彈出視窗、支援手動觸發工作流程等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**本週我們釋出了 [NocoBase 1.4.0 版本](https://www.nocobase.com/en/blog/nocobase-1-4-0)，帶來了多項新功能與改進，包括簡化的插件管理、增強的通知功能、使用者資料同步以及備份管理器。**

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：測試版，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試使用者收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試使用者；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品尖端功能感興趣的技術使用者，但可能存在問題和不完整的功能。不建議用於生產環境。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.53](https://www.nocobase.com/en/blog/v1.3.53)

*釋出日期：2024-11-28*

### 🚀 改進

- **[client]**

  - 匯出必要的 hook ([#5702](https://github.com/nocobase/nocobase/pull/5702)) by @mytharcher
  - 中國地區欄位插件從內建插件中移除 ([#5693](https://github.com/nocobase/nocobase/pull/5693)) by @katherinehhh
- **[工作流：操作前事件]** 移除請求攔截器中的警告日誌 by @mytharcher

### 🐛 錯誤修復

- **[cli]** 守護行程模式未刪除 sock 檔案 ([#5750](https://github.com/nocobase/nocobase/pull/5750)) by @chenos
- **[client]**

  - 修復多個關聯欄位指向相同目標資料表時互相影響的問題 ([#5744](https://github.com/nocobase/nocobase/pull/5744)) by @katherinehhh
  - 修復子表格中核取方塊對齊問題 ([#5735](https://github.com/nocobase/nocobase/pull/5735)) by @katherinehhh
  - 修復資料選擇器中外鍵欄位顯示問題 ([#5734](https://github.com/nocobase/nocobase/pull/5734)) by @katherinehhh
  - 修復調整 feedbackLayout 以改善子表格中的驗證訊息 ([#5700](https://github.com/nocobase/nocobase/pull/5700)) by @katherinehhh
- **[server]** 按依賴順序載入插件 ([#5706](https://github.com/nocobase/nocobase/pull/5706)) by @chenos
- **[區塊：地圖]** 修復在 Google 地圖中更改縮放等級時的錯誤 ([#5722](https://github.com/nocobase/nocobase/pull/5722)) by @katherinehhh
- **[資料來源：主]** 修復在檢視集合中推斷欄位名稱 ([#5729](https://github.com/nocobase/nocobase/pull/5729)) by @chareice
- **[檔案管理器]** 當端點不為空時，將 forcePathStyle 設為 true ([#5712](https://github.com/nocobase/nocobase/pull/5712)) by @chenos

## [v1.3.55](https://www.nocobase.com/en/blog/v1.3.55)

*釋出日期：2024-12-03*

### 🚀 改進

- **[client]** 為區塊初始化器使用含義更精確的圖示 ([#5757](https://github.com/nocobase/nocobase/pull/5757)) by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 根據更改的圖示修復 E2E 測試案例 ([#5768](https://github.com/nocobase/nocobase/pull/5768)) by @mytharcher
  - 修復選擇欄位在資料為空時顯示空白的問題 ([#5762](https://github.com/nocobase/nocobase/pull/5762)) by @katherinehhh
- **[database]** 修復更新 hasOne/belongsTo 關聯值時缺少外鍵的問題 ([#5754](https://github.com/nocobase/nocobase/pull/5754)) by @chareice
- **[資料來源管理器]** 修復來源鍵顯示不正確的問題 ([#5771](https://github.com/nocobase/nocobase/pull/5771)) by @katherinehhh
- **[工作流：自訂操作事件]**

  - 允許所有角色在外部資料來源中觸發自訂操作事件 by @mytharcher
  - 修復預設資料來源為主資料來源 by @mytharcher
  - 修復未匹配時的資料來源錯誤 by @mytharcher
  - 修復自訂操作觸發器未在關聯上觸發的問題 by @mytharcher

## [v1.4.1](https://www.nocobase.com/en/blog/v1.4.1)

*釋出日期：2024-12-04*

### 🚀 改進

- **[cli]** 優化 pkg 指令 ([#5785](https://github.com/nocobase/nocobase/pull/5785)) by @chenos

### 🐛 錯誤修復

- **[行動端]** 修復行動端篩選操作中缺少日期輸入欄位的問題 ([#5786](https://github.com/nocobase/nocobase/pull/5786)) by @katherinehhh

## [v1.4.2](https://www.nocobase.com/en/blog/v1.4.2)

*釋出日期：2024-12-04*

### 🐛 錯誤修復

- **[工作流]** 修復非同步工作流標籤在工作流表格中消失的問題 ([#5787](https://github.com/nocobase/nocobase/pull/5787)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.9](https://www.nocobase.com/en/blog/v1.4.0-beta.9)

*釋出日期：2024-11-28*

### 🚀 改進

- **[行動端]** 優化行動端的緊湊主題 ([#5723](https://github.com/nocobase/nocobase/pull/5723)) by @katherinehhh

### 🐛 錯誤修復

- **[資料視覺化]** 修復從 `context` 取得時區不正確的問題 ([#5743](https://github.com/nocobase/nocobase/pull/5743)) by @2013xile

## [v1.4.0-beta.10](https://www.nocobase.com/en/blog/v1.4.0-beta.10)

*釋出日期：2024-11-28*

### 🚀 改進

- **[client]** 支援變數輸入元件在 `nullable` 設為 `false` 時使用自訂元件 ([#5746](https://github.com/nocobase/nocobase/pull/5746)) by @mytharcher

### 🐛 錯誤修復

- **[client]** 修復表格欄位較少且為中等大小時出現捲軸的問題 ([#5745](https://github.com/nocobase/nocobase/pull/5745)) by @katherinehhh

## [v1.4.0-beta.11](https://www.nocobase.com/en/blog/v1.4.0-beta.11)

*釋出日期：2024-12-02*

### 🚀 改進

- **[client]** 支援公開表單中的附件檔案欄位 ([#5749](https://github.com/nocobase/nocobase/pull/5749)) by @katherinehhh
- **[cli]** 在新增或移除插件時重新啟動程序 ([#5761](https://github.com/nocobase/nocobase/pull/5761)) by @chenos
- **[日曆]** 支援在日曆區塊上點擊日期快速建立行程 ([#5733](https://github.com/nocobase/nocobase/pull/5733)) by @katherinehhh

### 🐛 錯誤修復

- **[client]** 修復水平佈局中子表格的欄位寬度問題 ([#5763](https://github.com/nocobase/nocobase/pull/5763)) by @katherinehhh

## [v1.5.0-beta.1](https://www.nocobase.com/en/blog/v1.5.0-beta.1)

*釋出日期：2024-12-03*

### 🐛 錯誤修復

- **[client]** 修復記錄選擇器在跨頁選擇時未顯示已選項目的問題 ([#5770](https://github.com/nocobase/nocobase/pull/5770)) by @katherinehhh
- **[行動端]** 修復行動端篩選操作中缺少日期輸入欄位的問題 ([#5779](https://github.com/nocobase/nocobase/pull/5779)) by @katherinehhh
- **[工作流]** 修復節點測試模態框中未顯示變數的問題 ([#5766](https://github.com/nocobase/nocobase/pull/5766)) by @mytharcher

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.6.0-alpha.2](https://www.nocobase.com/en/blog/v1.6.0-alpha.2)

*釋出日期：2024-12-03*

### 🎉 新功能

- **[client]**

  - 支援在 readPretty 欄位上啟用連結開啟彈窗 ([#5747](https://github.com/nocobase/nocobase/pull/5747)) by @katherinehhh
  - 支援在關聯區塊中進行關聯與取消關聯操作 ([#5695](https://github.com/nocobase/nocobase/pull/5695)) by @katherinehhh
- **[server]** 新增稽核管理器 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) by @chenzhizdt
- **[工作流]** 支援手動觸發工作流 ([#5664](https://github.com/nocobase/nocobase/pull/5664)) by @mytharcher
- **[工作流：操作前事件]** 支援手動觸發工作流 by @mytharcher

### 🚀 改進

- **[client]**

  - 實現前端元件的按需載入 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) by @gchust
  - 改善頁面渲染效能並支援頁面保持活動功能 ([#5515](https://github.com/nocobase/nocobase/pull/5515)) by @zhangzhonghe
- **[集合欄位：排序]** 新增插件描述 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) by @mytharcher
- **[嵌入 NocoBase]** 改善頁面渲染效能 by @zhangzhonghe

### 🐛 錯誤修復

- **[client]**

  - 修復變數無法在第三方資料來源區塊中正常使用的問題 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) by @zhangzhonghe
  - 修復區塊範本中關聯欄位值為空的問題。修復在第三方資料來源中使用變數的區塊資料範圍無法正常運作的問題 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) by @zhangzhonghe
  - 修復元件的動態屬性在懶載入時無法運作的問題 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) by @gchust
  - 修復在開發環境中動態載入 hooks 時 React 的警告訊息 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) by @gchust
- **[資料視覺化]** 修復圖表區塊的篩選欄位元件未渲染的問題 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) by @2013xile

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**示範**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
