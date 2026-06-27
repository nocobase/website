---
title: "NocoBase 每週更新：提升表格區塊的渲染效能及其他改進"
description: "NocoBase 每週更新 2024-10-31"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

NocoBase 目前有兩個分支進行更新：`main` 和 `next`。

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Alpha 版本，包含一些尚未發佈的新功能。此版本可能不完全穩定，適合開發者或測試人員提前體驗新功能或進行相容性測試。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.38-beta](https://www.nocobase.com/en/blog/v1.3.38-beta)

*發佈日期：2024-10-24*

### 🐛 錯誤修復

- **[客戶端]**

  - 修復使用簡單分頁集合的清單區塊中的分頁問題 ([#5500](https://github.com/nocobase/nocobase/pull/5500)) by @katherinehhh
  - 在非配置模式下，編輯表單僅顯示當前集合。 ([#5499](https://github.com/nocobase/nocobase/pull/5499)) by @katherinehhh
- **[工作流：HTTP 請求節點]** 修復在變數文字區域貼上內容時出現特殊空白字元的問題 ([#5497](https://github.com/nocobase/nocobase/pull/5497)) by @mytharcher
- **[部門]** 修復在部門角色下外部資料源權限檢查不正確的問題 by @2013xile

## [v1.3.39-beta](https://www.nocobase.com/en/blog/v1.3.39-beta)

*發佈日期：2024-10-24*

### 🐛 錯誤修復

- **[客戶端]** 修復彈出視窗中無法新增篩選區塊的問題 ([#5502](https://github.com/nocobase/nocobase/pull/5502)) by @zhangzhonghe

## [v1.3.40-beta](https://www.nocobase.com/en/blog/v1.3.40-beta)

*發佈日期：2024-10-25*

### 🎉 新功能

- **[認證：OIDC]** 新增允許跳過 SSL 驗證的選項 by @2013xile

### 🚀 改進

- **[客戶端]** 對未選取的欄位顯示已停用的未勾選核取方塊 ([#5503](https://github.com/nocobase/nocobase/pull/5503)) by @katherinehhh

### 🐛 錯誤修復

- **[資料庫]** 修復字串運算子「包含」和「不包含」未正確處理 `null` 值的問題 ([#5509](https://github.com/nocobase/nocobase/pull/5509)) by @2013xile
- **[客戶端]** 修復連結規則以正確評估 URL 參數變數 ([#5504](https://github.com/nocobase/nocobase/pull/5504)) by @katherinehhh
- **[區塊：地圖]** 修復因多次呼叫 AMap 的 `load` 方法，導致存在多個地圖時部分地圖顯示不正確的問題 ([#5490](https://github.com/nocobase/nocobase/pull/5490)) by @Cyx649312038

## [v1.3.41-beta](https://www.nocobase.com/en/blog/v1.3.41-beta)

*發佈日期：2024-10-27*

### 🚀 改進

- **[存取控制]** 優化 acl 中大型表格的效能 ([#5496](https://github.com/nocobase/nocobase/pull/5496)) by @chareice

## [v1.3.42-beta](https://www.nocobase.com/en/blog/v1.3.42-beta)

*發佈日期：2024-10-28*

### 🐛 錯誤修復

- **[集合：樹]** 修復取消關聯子節點時節點路徑未更新的問題 ([#5522](https://github.com/nocobase/nocobase/pull/5522)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241024133132](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024133132)

*發佈日期：2024-10-24*

### 🎉 新功能

- **[客戶端]** 支援在表單和詳情區塊上新增群組 ([#5498](https://github.com/nocobase/nocobase/pull/5498)) by @katherinehhh
- **[日曆]** plugin-calendar 新增預設檢視設定和國際化配置 ([#5487](https://github.com/nocobase/nocobase/pull/5487)) by @Cyx649312038
- **[資料源：KingbaseES]** 支援使用 Kingbase 資料庫作為主資料源或外部資料源（pg 模式） by @chareice
  參考：[資料源 - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 改進

- **[資料庫]** 支援插件的靜態載入邏輯 ([#5466](https://github.com/nocobase/nocobase/pull/5466)) by @chareice
- **[客戶端]** 改善表格區塊的渲染效能（首次渲染時間減少約 50%） ([#5438](https://github.com/nocobase/nocobase/pull/5438)) by @zhangzhonghe
- **[行動端]** 行動客戶端支援篩選表單區塊 ([#5482](https://github.com/nocobase/nocobase/pull/5482)) by @katherinehhh
- **[備份管理器]**

  - 將「備份本地儲存檔案」的預設設定更改為 true by @gchust
  - 如果還原操作失敗，則復原資料庫資料 by @gchust

### 🐛 錯誤修復

- **[伺服器]** 安裝後應用程式的 afterLoad 事件未觸發 ([#5506](https://github.com/nocobase/nocobase/pull/5506)) by @chenos
- **[公開表單]** 為公開表單註冊 ACL 片段 ([#5505](https://github.com/nocobase/nocobase/pull/5505)) by @katherinehhh
- **[備份管理器]** 修復還原子應用程式後，若子應用程式使用不同 schema，主應用程式會崩潰的問題 by @gchust

## [v1.4.0-alpha.20241024151311](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241024151311)

*發佈日期：2024-10-24*

### 🎉 新功能

- **[區塊：操作面板]** 為操作面板區塊新增標題設定 ([#5492](https://github.com/nocobase/nocobase/pull/5492)) by @Cyx649312038

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
