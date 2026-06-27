---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：工作流程優化、錯誤修復等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.16](https://www.nocobase.com/en/blog/v1.4.16)

*發布日期：2024-12-26*

#### 🐛 錯誤修復

- **[client]** 修復 UnixTimestamp 欄位精度轉換問題 ([#5931](https://github.com/nocobase/nocobase/pull/5931)) by @chenos
- **[操作：複製記錄]** 修復在詳情區塊和表單區塊中，o2o 關聯欄位未顯示已設定的目標資料表欄位問題 ([#5921](https://github.com/nocobase/nocobase/pull/5921)) by @katherinehhh
- **[備份管理器]** 修復當 mysqldump 版本低於 8 時備份失敗的問題 by @gchust

### [v1.4.17](https://www.nocobase.com/en/blog/v1.4.17)

*發布日期：2024-12-31*

#### 🎉 新功能

- **[client]** 支援在 m2m 陣列欄位中使用「表格選取記錄」變數 ([#5974](https://github.com/nocobase/nocobase/pull/5974)) by @2013xile

#### 🚀 改進

- **[undefined]** 預設啟用主題插件 ([#5957](https://github.com/nocobase/nocobase/pull/5957)) by @zhangzhonghe
- **[資料來源：主資料庫]** 新增名稱衝突驗證，防止使用者建立與系統資料表同名的資料表 ([#5962](https://github.com/nocobase/nocobase/pull/5962)) by @chareice
- **[工作流程]** 避免在大多數地方（篩選元件除外）誤用日期範圍變數 ([#5954](https://github.com/nocobase/nocobase/pull/5954)) by @mytharcher

#### 🐛 錯誤修復

- **[database]**

  - 修正在 destroy 動作中，使用 filterByTk 搭配 filter 參數時無法刪除資料的問題 ([#5976](https://github.com/nocobase/nocobase/pull/5976)) by @chareice
  - 修復 repository 的 firstOrCreate 和 updateOrCreate 方法遺失上下文 ([#5973](https://github.com/nocobase/nocobase/pull/5973)) by @chenos
- **[client]**

  - 修正在表單中新增一對一關聯欄位時的問題 ([#5975](https://github.com/nocobase/nocobase/pull/5975)) by @katherinehhh
  - 修正在子表格中刪除資料後重新選取資料時，欄位指派問題 ([#5958](https://github.com/nocobase/nocobase/pull/5958)) by @katherinehhh
  - 修復因資料包含名為 'children' 的欄位導致的表格區塊錯誤 ([#5951](https://github.com/nocobase/nocobase/pull/5951)) by @zhangzhonghe
- **[資料來源：主資料庫]** 修復 unixTimestamp 欄位的舊版支援問題。([#5967](https://github.com/nocobase/nocobase/pull/5967)) by @chareice
- **[工作流程]** 修復在手動節點 UI 配置中，子詳情區塊拋出錯誤的問題 ([#5953](https://github.com/nocobase/nocobase/pull/5953)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.18](https://www.nocobase.com/en/blog/v1.5.0-beta.18)

*發布日期：2024-12-27*

#### 🐛 錯誤修復

- **[client]**

  - 修復第三方插件中表格儲存格顯示異常的問題 ([#5934](https://github.com/nocobase/nocobase/pull/5934)) by @zhangzhonghe
  - 修復區塊模板管理頁面中刪除按鈕被停用的問題 ([#5922](https://github.com/nocobase/nocobase/pull/5922)) by @zhangzhonghe
- **[驗證]** 修復在驗證設定頁面開啟編輯抽屜時表單欄位為空的問題 ([#5949](https://github.com/nocobase/nocobase/pull/5949)) by @chenos
- **[工作流程：自訂動作事件]**

  - 修復在 SQLite 上測試案例失敗的問題 by @mytharcher
  - 修復自訂動作觸發器的測試案例 by @mytharcher
- **[工作流程：動作前事件]** 修復請求攔截器的測試案例 by @mytharcher

### [v1.5.0-beta.19](https://www.nocobase.com/en/blog/v1.5.0-beta.19)

*發布日期：2024-12-31*

#### 🐛 錯誤修復

- **[client]**

  - 修復在篩選表單/動作中，日期範圍選擇器在設定 showTime 後未顯示時間選擇器的問題 ([#5956](https://github.com/nocobase/nocobase/pull/5956)) by @katherinehhh
  - 修復點擊關聯欄位時未開啟彈出對話框的問題 ([#5972](https://github.com/nocobase/nocobase/pull/5972)) by @zhangzhonghe
- **[工作流程：回應訊息]** 修復使用了錯誤的參數名稱 by @mytharcher

### v1.5.0-beta.20

*發布日期：2024-12-31*

#### 🎉 新功能

- **[[操作：匯入記錄(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**：增強資料匯入功能，支援非同步匯入、百萬行記錄匯入、重複資料識別與處理、資料更新以及工作流程觸發。
- **[[操作：匯出記錄(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**：增強資料匯出功能，支援非同步匯出、百萬行記錄匯出以及附件匯出。

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**線上體驗**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
