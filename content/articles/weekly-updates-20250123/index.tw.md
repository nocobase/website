---
title: "NocoBase 每週更新：提升檔案儲存的擴展性"
description: "本週更新包括：提升檔案儲存的擴展性、錯誤修復等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.25](https://www.nocobase.com/en/blog/v1.4.25)

*發布日期：2025-01-16*

#### 🚀 改進

- **[客戶端]** 提升檔案儲存的可擴展性 ([#6071](https://github.com/nocobase/nocobase/pull/6071)) by @chenos
- **[工作流]** 修復排程配置中的重複欄位元件 ([#6067](https://github.com/nocobase/nocobase/pull/6067)) by @mytharcher

#### 🐛 錯誤修復

- **[行動端]** 修復行動裝置上底部按鈕被遮擋的問題 ([#6068](https://github.com/nocobase/nocobase/pull/6068)) by @zhangzhonghe
- **[工作流：自訂操作事件]** 修復 HTTP 集合的上下文 by @mytharcher
- **[備份管理器]** 修復當 collection-fdw 插件未啟用時可能出現的備份錯誤 by @gchust
- **[部門]** 修復無法在部門集合上觸發自訂操作事件的問題 by @mytharcher

### [v1.4.26](https://www.nocobase.com/en/blog/v1.4.26)

*發布日期：2025-01-16*

#### 🚀 改進

- **[客戶端]** 允許為 SQL 集合添加描述 ([#6081](https://github.com/nocobase/nocobase/pull/6081)) by @2013xile
- **[資源器]** 允許在操作中使用空物件作為值 ([#6070](https://github.com/nocobase/nocobase/pull/6070)) by @mytharcher

#### 🐛 錯誤修復

- **[本地化]** 避免在嘗試刪除空翻譯時發起 API 請求 ([#6078](https://github.com/nocobase/nocobase/pull/6078)) by @2013xile

### [v1.4.27](https://www.nocobase.com/en/blog/v1.4.27)

*發布日期：2025-01-18*

#### 🐛 錯誤修復

- **[客戶端]** 修復嵌入頁面彈出視窗中區塊資料為空的問題 ([#6086](https://github.com/nocobase/nocobase/pull/6086)) by @zhangzhonghe
- **[工作流]** 修復在準備階段調度未處理的問題 ([#6087](https://github.com/nocobase/nocobase/pull/6087)) by @mytharcher

### [v1.4.28](https://www.nocobase.com/en/blog/v1.4.28)

*發布日期：2025-01-21*

#### 🐛 錯誤修復

- **[客戶端]** 關聯欄位的預設值未更新 ([#6103](https://github.com/nocobase/nocobase/pull/6103)) by @chenos
- **[操作：批次編輯]** 從批次編輯操作表單設定中移除表單資料模板 ([#6098](https://github.com/nocobase/nocobase/pull/6098)) by @katherinehhh
- **[驗證]** 修復提供者 ID 可被編輯的問題 ([#6097](https://github.com/nocobase/nocobase/pull/6097)) by @mytharcher

### [v1.4.29](https://www.nocobase.com/en/blog/v1.4.29)

*發布日期：2025-01-21*

#### 🎉 新功能

- **[區塊：操作面板]** 支援配置行動操作面板中每行圖標的數量 ([#6106](https://github.com/nocobase/nocobase/pull/6106)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.29](https://www.nocobase.com/en/blog/v1.5.0-beta.29)

*發布日期：2025-01-16*

#### 🚀 改進

- **[備份管理器]** 改進還原失敗時的錯誤訊息 by @gchust

### [v1.5.0-beta.30](https://www.nocobase.com/en/blog/v1.5.0-beta.30)

*發布日期：2025-01-16*

#### 🐛 錯誤修復

- **[客戶端]** 修復在簡閱模式下關聯欄位預設值不生效的問題 ([#6066](https://github.com/nocobase/nocobase/pull/6066)) by @zhangzhonghe

### [v1.5.0-beta.31](https://www.nocobase.com/en/blog/v1.5.0-beta.31)

*發布日期：2025-01-17*

#### 🐛 錯誤修復

- **[用戶資料同步]** 修復任務列表中「重試」按鈕未顯示的問題 ([#6079](https://github.com/nocobase/nocobase/pull/6079)) by @2013xile

### [v1.5.0-beta.32](https://www.nocobase.com/en/blog/v1.5.0-beta.32)

*發布日期：2025-01-17*

#### 🚀 改進

- **[工作流]** 將 API 名稱更改為更合理的名稱 ([#6082](https://github.com/nocobase/nocobase/pull/6082)) by @mytharcher

### [v1.5.0-beta.33](https://www.nocobase.com/en/blog/v1.5.0-beta.33)

*發布日期：2025-01-21*

#### 🎉 新功能

- **[工作流]** 為工作流添加堆疊限制配置 ([#6077](https://github.com/nocobase/nocobase/pull/6077)) by @citlalinda

#### 🚀 改進

- **[工作流：循環節點]** 修復樣式 ([#6095](https://github.com/nocobase/nocobase/pull/6095)) by @mytharcher
- **[檔案管理器]** 支援其他儲存插件 ([#6096](https://github.com/nocobase/nocobase/pull/6096)) by @jiannx
  參考：[檔案儲存：S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[工作流：測試套件]** 調整工作流畫布樣式，使內容更緊湊 ([#6088](https://github.com/nocobase/nocobase/pull/6088)) by @mytharcher
- **[工作流：JSON 查詢節點]** 為節點添加圖標 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.15](https://www.nocobase.com/en/blog/v1.6.0-alpha.15)

*發布日期：2025-01-19*

#### 🎉 新功能

- **[客戶端]** 支援在區塊中設定描述屬性 ([#6015](https://github.com/nocobase/nocobase/pull/6015)) by @katherinehhh
- **[認證]** 支援 Token 安全配置。([#5948](https://github.com/nocobase/nocobase/pull/5948)) by @sheldon66
  參考：[Token 安全策略](https://docs.nocobase.com/handbook/token-policy)
- **[工作流：人工節點]** 在待辦區塊中添加任務標題列 ([#6051](https://github.com/nocobase/nocobase/pull/6051)) by @mytharcher

#### 🚀 改進

- **[工作流：自訂操作事件]** 更改手動執行的 API by @mytharcher

### [v1.6.0-alpha.16](https://www.nocobase.com/en/blog/v1.6.0-alpha.16)

*發布日期：2025-01-19*

#### 🎉 新功能

- **[區塊：操作面板]** 支援配置行動操作面板中每行圖標的數量 ([#6046](https://github.com/nocobase/nocobase/pull/6046)) by @katherinehhh

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 獲取 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文檔**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
