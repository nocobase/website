---
title: "NocoBase 每週更新：支援配置使用者個人資料表單"
description: "本週更新包括：支援配置使用者個人資料表單，以及使用者管理中的建立和編輯表單等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要用於讓測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.11](https://www.nocobase.com/en/blog/v1.4.11)

*發布日期：2024-12-18*

#### 🚀 改進

- **[客戶端]** 讓更多元件支援「內容溢出時顯示省略號」配置項 ([#5888](https://github.com/nocobase/nocobase/pull/5888)) by @zhangzhonghe
- **[資料庫]** 為關聯儲存庫新增 firstOrCreate 與 updateOrCreate 方法 ([#5894](https://github.com/nocobase/nocobase/pull/5894)) by @chareice

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復外部資料來源區塊的複製請求範本中缺少 x-data-source 參數的問題 ([#5882](https://github.com/nocobase/nocobase/pull/5882)) by @katherinehhh
  - 修復插件內表格的水平捲軸問題 ([#5899](https://github.com/nocobase/nocobase/pull/5899)) by @katherinehhh
  - 修復關聯欄位下拉選單偶爾出現多餘「N/A」選項的問題 ([#5878](https://github.com/nocobase/nocobase/pull/5878)) by @zhangzhonghe
  - 修復 PG 檢視表建立問題，解決跨 Schema 選擇檢視表時的錯誤 ([#5881](https://github.com/nocobase/nocobase/pull/5881)) by @katherinehhh
  - 修復表單區塊在佈局設為水平時群組樣式的問題 ([#5884](https://github.com/nocobase/nocobase/pull/5884)) by @katherinehhh
- **[使用者]**

  - 修復在使用者管理中新增或編輯使用者後，表單未重置的問題。([#5875](https://github.com/nocobase/nocobase/pull/5875)) by @2013xile
  - 修復在使用者管理中，切換頁面或改變每頁顯示數量後，編輯並提交使用者資料會導致分頁設定被重置的問題。([#5893](https://github.com/nocobase/nocobase/pull/5893)) by @2013xile
- **[資料來源管理器]** 修復外部資料來源 Collection 的篩選問題 ([#5890](https://github.com/nocobase/nocobase/pull/5890)) by @chareice
- **[公開表單]** 修復全域主題切換影響公開表單預覽頁面主題的問題 ([#5883](https://github.com/nocobase/nocobase/pull/5883)) by @katherinehhh

### [v1.4.13](https://www.nocobase.com/en/blog/v1.4.13)

*發布日期：2024-12-19*

#### 🚀 改進

- **[Collection: SQL]** 禁止在 SQL 中使用危險關鍵字與函數。([#5913](https://github.com/nocobase/nocobase/pull/5913)) by @2013xile
- **[主題編輯器]** 優化使用者資料編輯與密碼更新的 API 驗證 ([#5912](https://github.com/nocobase/nocobase/pull/5912)) by @2013xile

#### 🐛 錯誤修復

- **[資料來源：主資料庫]** 修復外部鍵載入問題 ([#5903](https://github.com/nocobase/nocobase/pull/5903)) by @chareice
- **[Collection: SQL]** 修復更新 SQL Collection 後欄位消失的問題。([#5909](https://github.com/nocobase/nocobase/pull/5909)) by @chareice
- **[備份管理器]** 修復在 Windows 上還原備份無法運作的問題 by @gchust

### [v1.4.14](https://www.nocobase.com/en/blog/v1.4.14)

*發布日期：2024-12-21*

#### 🐛 錯誤修復

- **[資料視覺化]** 修復圖表查詢中使用巢狀多對多關聯進行篩選時的錯誤。([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
- **[工作流：聚合節點]** 修復因事務導致的聚合結果不正確問題 ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.4.15](https://www.nocobase.com/en/blog/v1.4.15)

*發布日期：2024-12-25*

#### 🐛 錯誤修復

- **[伺服器]** 啟用插件時未自動建立 Collection ([#5939](https://github.com/nocobase/nocobase/pull/5939)) by @chenos
- **[客戶端]** 修正在聯動規則中搜尋屬性欄位時無法匹配正確資料的問題 ([#5925](https://github.com/nocobase/nocobase/pull/5925)) by @katherinehhh
- **[工作流]**

  - 修復基於無時區日期欄位的排程觸發器 ([#5938](https://github.com/nocobase/nocobase/pull/5938)) by @mytharcher
  - 修復日期範圍變數翻譯 ([#5919](https://github.com/nocobase/nocobase/pull/5919)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.13](https://www.nocobase.com/en/blog/v1.5.0-beta.13)

*發布日期：2024-12-21*

#### 🚀 改進

- **[資料視覺化]** 為 charts-query 新增 offset 參數 ([#5911](https://github.com/nocobase/nocobase/pull/5911)) by @Albert-mah

### [v1.5.0-beta.14](https://www.nocobase.com/en/blog/v1.5.0-beta.14)

*發布日期：2024-12-21*

#### 🐛 錯誤修復

- **[資料視覺化]** 修復圖表查詢中使用巢狀多對多關聯進行篩選時的錯誤。([#5917](https://github.com/nocobase/nocobase/pull/5917)) by @2013xile
- **[工作流：聚合節點]** 修復因事務導致的聚合結果不正確問題 ([#5916](https://github.com/nocobase/nocobase/pull/5916)) by @mytharcher

### [v1.5.0-beta.15](https://www.nocobase.com/en/blog/v1.5.0-beta.15)

*發布日期：2024-12-23*

#### 🎉 新功能

- **[客戶端]** 為日期欄位元件新增日期限制範圍 ([#5852](https://github.com/nocobase/nocobase/pull/5852)) by @Cyx649312038

### [v1.5.0-beta.16](https://www.nocobase.com/en/blog/v1.5.0-beta.16)

*發布日期：2024-12-24*

#### 🐛 錯誤修復

- **[建置]** 修復設定 `APP_PUBLIC_PATH` 環境變數後的載入問題 ([#5924](https://github.com/nocobase/nocobase/pull/5924)) by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.6](https://www.nocobase.com/en/blog/v1.6.0-alpha.6)

*發布日期：2024-12-19*

#### 🎉 新功能

- **[客戶端]** 支援在子表單中為多對多關聯欄位選擇現有資料 ([#5849](https://github.com/nocobase/nocobase/pull/5849)) by @katherinehhh

### [v1.6.0-alpha.7](https://www.nocobase.com/en/blog/v1.6.0-alpha.7)

*發布日期：2024-12-25*

#### 🎉 新功能

- **[使用者]** 支援在使用者管理中配置使用者資料表單以及建立和編輯表單。([#5698](https://github.com/nocobase/nocobase/pull/5698)) by @2013xile

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需花費數年開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**線上體驗**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
