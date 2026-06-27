---
title: "NocoBase 每週更新：優化 REST API 插件"
description: "本週更新包括：優化 REST API 插件、支援在介面中批量啟用插件等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品尖端功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.52](https://www.nocobase.com/en/blog/v1.3.52)

*發布日期：2024-11-21*

### 🚀 改進

- **[工作流]**

  - 移除查詢節點中的頁面限制 ([#5694](https://github.com/nocobase/nocobase/pull/5694)) by @mytharcher
  - 修改為刪除工作流時不刪除執行記錄 ([#5666](https://github.com/nocobase/nocobase/pull/5666)) by @mytharcher
- **[資料來源：REST API]** 優化 REST API 外掛的文字描述 by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-beta.2](https://www.nocobase.com/en/blog/v1.4.0-beta.2)

*發布日期：2024-11-21*

### 🐛 錯誤修復

- **[建置]** 將客戶端建置工具從 `rspack` 還原回 `vite`，以修復執行 create-nocobase-app 指令後 `yarn dev` 指令報錯的問題 ([#5697](https://github.com/nocobase/nocobase/pull/5697)) by @gchust
- **[客戶端]** 修復當欄位較少時，右側固定欄位未正確靠右對齊的問題 ([#5690](https://github.com/nocobase/nocobase/pull/5690)) by @katherinehhh
- **[行動端]** 修復在行動端配置頁面上，「指派欄位值」模態框被遮擋的問題 ([#5701](https://github.com/nocobase/nocobase/pull/5701)) by @zhangzhonghe

## [v1.4.0-beta.3](https://www.nocobase.com/en/blog/v1.4.0-beta.3)

*發布日期：2024-11-21*

### 🐛 錯誤修復

- **[客戶端]**

  - 移除外部資料來源檢視集合中的「從資料庫同步」按鈕 ([#5696](https://github.com/nocobase/nocobase/pull/5696)) by @katherinehhh
  - 為 `Variable.TextArea` 中使用的非字串值添加後備處理 ([#5704](https://github.com/nocobase/nocobase/pull/5704)) by @mytharcher
- **[日曆]** 修復當開始和結束日期跨月時，日曆區塊中不顯示事件的問題 ([#5699](https://github.com/nocobase/nocobase/pull/5699)) by @katherinehhh

## [v1.4.0-beta.5](https://www.nocobase.com/en/blog/v1.4.0-beta.5)

*發布日期：2024-11-24*

### 🐛 錯誤修復

- **[客戶端]**
  - 修復水平佈局中關聯欄位標籤寬度的問題 ([#5709](https://github.com/nocobase/nocobase/pull/5709)) by @katherinehhh
  - 修復多層子表單內巢狀子表格中關聯資料的連動問題 ([#5710](https://github.com/nocobase/nocobase/pull/5710)) by @katherinehhh
  - 修復水平佈局中關聯欄位標籤寬度的問題 ([#5709](https://github.com/nocobase/nocobase/pull/5709)) by @katherinehhh

## [v1.4.0-beta.6](https://www.nocobase.com/en/blog/v1.4.0-beta.6)

*發布日期：2024-11-26*

### 🚀 改進

- **[客戶端]** 支援在介面中批量啟用外掛 ([#5730](https://github.com/nocobase/nocobase/pull/5730)) by @chenos

### 🐛 錯誤修復

- **[客戶端]** 修復水平模式下子表格標籤最小寬度問題 ([#5719](https://github.com/nocobase/nocobase/pull/5719)) by @katherinehhh

## [v1.4.0-beta.7](https://www.nocobase.com/en/blog/v1.4.0-beta.7)

*發布日期：2024-11-27*

### 🎉 新功能

- **[認證]** 允許在註冊表單中添加更多使用者集合的欄位 ([#5741](https://github.com/nocobase/nocobase/pull/5741)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]** 修復首次渲染時未載入所選選項標籤的問題。([#5736](https://github.com/nocobase/nocobase/pull/5736)) by @sheldon66

## [v1.4.0-beta.8](https://www.nocobase.com/en/blog/v1.4.0-beta.8)

*發布日期：2024-11-27*

### 🐛 錯誤修復

- **[通知：應用內訊息]** 移除應用內訊息標題字串截斷邏輯。([#5728](https://github.com/nocobase/nocobase/pull/5728)) by @sheldon66

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.5](https://www.nocobase.com/en/blog/v1.5.0-alpha.5)

*發布日期：2024-11-23*

### 🐛 錯誤修復

- **[建置]** 修復執行 create-nocobase-app 後執行 `yarn dev` 導致錯誤的問題 ([#5708](https://github.com/nocobase/nocobase/pull/5708)) by @gchust

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
