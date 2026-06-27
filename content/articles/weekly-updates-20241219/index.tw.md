---
title: "NocoBase 每週更新：優化行動裝置體驗"
description: "本週更新包括：行動裝置互動優化、錯誤修復等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.9](https://www.nocobase.com/en/blog/v1.4.9)

*發布日期：2024-12-12*

#### 🐛 錯誤修復

- **[sdk]** 移除預設語言環境 ([#5867](https://github.com/nocobase/nocobase/pull/5867)) by @chenos
- **[client]**

  - 修復資料範圍中巢狀關聯欄位變數值為空的問題 ([#5866](https://github.com/nocobase/nocobase/pull/5866)) by @zhangzhonghe
  - 修復當右側固定欄位較少時出現捲軸的問題 ([#5864](https://github.com/nocobase/nocobase/pull/5864)) by @katherinehhh
  - 修復 `FilterItem` 元件位置樣式錯誤的問題 ([#5851](https://github.com/nocobase/nocobase/pull/5851)) by @mytharcher
- **[備份管理器]** 修復自訂域名的子應用備份下載失敗的問題 by @gchust

### [v1.4.10](https://www.nocobase.com/en/blog/v1.4.10)

*發布日期：2024-12-12*

#### 🎉 新功能

- **[操作：自訂請求]** 支援在自訂請求按鈕中使用「當前表單」變數 ([#5871](https://github.com/nocobase/nocobase/pull/5871)) by @zhangzhonghe

#### 🚀 改進

- **[資料視覺化]** 允許在圖表的查詢配置中使用外鍵 ([#5869](https://github.com/nocobase/nocobase/pull/5869)) by @2013xile

#### 🐛 錯誤修復

- **[client]** 修復使用檔案選擇時，在非配置模式下檔案表格選擇器不顯示的問題 ([#5874](https://github.com/nocobase/nocobase/pull/5874)) by @katherinehhh
- **[存取控制]** 修復配置權限後複製記錄的相關問題 ([#5839](https://github.com/nocobase/nocobase/pull/5839)) by @chareice
- **[工作流]** 修復自動刪除執行記錄時的交易超時問題 ([#5870](https://github.com/nocobase/nocobase/pull/5870)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.7](https://www.nocobase.com/en/blog/v1.5.0-beta.7)

*發布日期：2024-12-13*

#### 🚀 改進

- **[認證]** 優化獲取審計操作元資料的邏輯。([#5814](https://github.com/nocobase/nocobase/pull/5814)) by @chenzhizdt

#### 🐛 錯誤修復

- **[資料視覺化]** 修復圖表區塊的初始高度 ([#5879](https://github.com/nocobase/nocobase/pull/5879)) by @2013xile
- **[工作流]** 修復在手動執行工作流時，非同步節點恢復時拋出錯誤的問題 ([#5877](https://github.com/nocobase/nocobase/pull/5877)) by @mytharcher

### [v1.5.0-beta.9](https://www.nocobase.com/en/blog/v1.5.0-beta.9)

*發布日期：2024-12-15*

#### 🎉 新功能

- **[行動端]** 新增全域開關，用於控制行動端所有返回按鈕（預設啟用）([#5868](https://github.com/nocobase/nocobase/pull/5868)) by @katherinehhh

#### 🐛 錯誤修復

- **[使用者資料同步]** 修復同步和任務按鈕的顯示問題。([#5896](https://github.com/nocobase/nocobase/pull/5896)) by @2013xile

### [v1.5.0-beta.10](https://www.nocobase.com/en/blog/v1.5.0-beta.10)

*發布日期：2024-12-18*

#### 🚀 改進

- **[行動端]** 適配行動端的時間與日期範圍選擇器元件 ([#5863](https://github.com/nocobase/nocobase/pull/5863)) by @katherinehhh

#### 🐛 錯誤修復

- **[資料來源：主]** 修復篩選表單區塊中系統欄位無法編輯的問題 ([#5885](https://github.com/nocobase/nocobase/pull/5885)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.5](https://www.nocobase.com/en/blog/v1.6.0-alpha.5)

*發布日期：2024-12-11*

#### 🐛 錯誤修復

- **[client]**

  - 修復切換頁面後瀏覽器分頁標題未更新的問題 ([#5857](https://github.com/nocobase/nocobase/pull/5857)) by @zhangzhonghe
  - 修復在資料來源管理頁面重新整理頁面時跳轉到首頁的問題 ([#5855](https://github.com/nocobase/nocobase/pull/5855)) by @zhangzhonghe
  - 修復子表格分頁後資料未變化的問題 ([#5856](https://github.com/nocobase/nocobase/pull/5856)) by @zhangzhonghe
  - 修復使用者管理表格中角色資料不顯示的問題 ([#5846](https://github.com/nocobase/nocobase/pull/5846)) by @zhangzhonghe
  - 修復引用模板中的關聯欄位有時不顯示資料的問題 ([#5848](https://github.com/nocobase/nocobase/pull/5848)) by @zhangzhonghe
  - 修復新增「自訂請求」按鈕後無法立即顯示的問題 ([#5845](https://github.com/nocobase/nocobase/pull/5845)) by @zhangzhonghe
  - 防止隱藏頁面影響與其他頁面的互動 ([#5836](https://github.com/nocobase/nocobase/pull/5836)) by @zhangzhonghe
  - 修復在彈出視窗中新增的區塊，重新開啟彈出視窗時不顯示的問題 ([#5838](https://github.com/nocobase/nocobase/pull/5838)) by @zhangzhonghe
- **[server]** 為 ACL 設定預設可用操作 ([#5847](https://github.com/nocobase/nocobase/pull/5847)) by @chenos

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
