---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：行動裝置優化、工作流程改進以及錯誤修復。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**上週我們發布了 [NocoBase 1.5.0 版本](https://www.nocobase.com/en/blog/nocobase-1-5-0)，帶來了核心優化、大規模資料匯入/匯出、郵件管理、模板列印等多項新功能。**

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品尖端功能感興趣的技術用戶，但可能存在問題和不完整的功能。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.1](https://www.nocobase.com/en/blog/v1.5.1)

*發布日期：2025-02-06*

#### 🐛 錯誤修復

- **[客戶端]**
  - `子表單（彈出視窗）` 標題的翻譯不正確 ([#6159](https://github.com/nocobase/nocobase/pull/6159)) by @gchust
  - 當子表單欄位設定為「隱藏（保留值）」時，其預設值變數無法正常運作 ([#6165](https://github.com/nocobase/nocobase/pull/6165)) by @zhangzhonghe

### [v1.5.2](https://www.nocobase.com/en/blog/v1.5.2)

*發布日期：2025-02-06*

#### 🚀 改進

- **[行動端]** 當沒有設定權限時，隱藏行動端設定頁面的頁首 ([#6171](https://github.com/nocobase/nocobase/pull/6171)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[工作流：通知節點]** 確保當用戶輸入包含類似 Handlebars 語法時，通知能正確發送。([#6164](https://github.com/nocobase/nocobase/pull/6164)) by @sheldon66
- **[工作流：人工節點]** 修正在終端按鈕提交時，表單值未被解析的問題 ([#6160](https://github.com/nocobase/nocobase/pull/6160)) by @mytharcher

### [v1.5.3](https://www.nocobase.com/en/blog/v1.5.3)

*發布日期：2025-02-07*

#### 🐛 錯誤修復

- **[客戶端]**
  - 點擊 belongsToArray 欄位開啟的彈出視窗，擷取到不正確的資料 ([#6173](https://github.com/nocobase/nocobase/pull/6173)) by @zhangzhonghe
  - 在篩選表單中將時間欄位運算子設為「介於」時，元件未變更為時間範圍選擇器 ([#6170](https://github.com/nocobase/nocobase/pull/6170)) by @katherinehhh
  - 看板和日曆區塊的彈出編輯表單未顯示「有未儲存的變更」提示 ([#6172](https://github.com/nocobase/nocobase/pull/6172)) by @katherinehhh

### [v1.5.4](https://www.nocobase.com/en/blog/v1.5.4)

*發布日期：2025-02-10*

#### 🚀 改進

- **[工作流]** 為複製操作新增載入狀態 ([#6179](https://github.com/nocobase/nocobase/pull/6179)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正在建立節點欄位設定中拋出的錯誤 ([#6187](https://github.com/nocobase/nocobase/pull/6187)) by @mytharcher
  - 關聯欄位的「允許選擇多個」設定選項未在篩選表單中顯示 ([#6174](https://github.com/nocobase/nocobase/pull/6174)) by @zhangzhonghe
  - 欄位被連結規則隱藏後，仍保持隱藏狀態 ([#6182](https://github.com/nocobase/nocobase/pull/6182)) by @zhangzhonghe
- **[工具函式]** 優化 storage/plugins 的讀取邏輯 ([#6186](https://github.com/nocobase/nocobase/pull/6186)) by @chenos
- **[通知：應用內訊息]** 修復：在頻道列表 API 中，為訊息時間戳和標題子查詢添加用戶過濾器，以確保資料隔離。([#6185](https://github.com/nocobase/nocobase/pull/6185)) by @deepure
- **[備份管理器]** 在寬容模式還原期間，檔案未從備份複製到上傳資料夾 by @gchust

### [v1.5.5](https://www.nocobase.com/en/blog/v1.5.5)

*發布日期：2025-02-11*

#### 🚀 改進

- **[通知：應用內訊息]** 新增測試，用於在應用內頻道中擷取最新訊息標題和時間戳。([#6189](https://github.com/nocobase/nocobase/pull/6189)) by @sheldon66

### [v1.5.6](https://www.nocobase.com/en/blog/v1.5.6)

*發布日期：2025-02-12*

#### 🐛 錯誤修復

- **[客戶端]**

  - 頁面導航後區塊未重新整理 ([#6200](https://github.com/nocobase/nocobase/pull/6200)) by @zhangzhonghe
  - 透過表格行中的彈出操作新增建立表單時，表單區塊未顯示 ([#6190](https://github.com/nocobase/nocobase/pull/6190)) by @katherinehhh
  - 當無資料時，表格區塊的高度設定未生效 ([#6192](https://github.com/nocobase/nocobase/pull/6192)) by @katherinehhh
- **[操作：自訂請求]**

  - 自訂請求按鈕中的「目前記錄」變數值不正確 ([#6196](https://github.com/nocobase/nocobase/pull/6196)) by @zhangzhonghe
  - 自訂請求按鈕與舊版變數的相容性 ([#6194](https://github.com/nocobase/nocobase/pull/6194)) by @zhangzhonghe
- **[資料視覺化]** 將圖表區塊新增至操作面板的彈出視窗時，圖表區塊未顯示 ([#6198](https://github.com/nocobase/nocobase/pull/6198)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.4](https://www.nocobase.com/en/blog/v1.6.0-beta.4)

*發布日期：2025-02-11*

#### 🚀 改進

- **[備份管理器]** 從 UI 中移除寬容模式 by @gchust

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.21](https://www.nocobase.com/en/blog/v1.6.0-alpha.21)

*發布日期：2025-02-07*

#### 🎉 新功能

- **[IP 限制]** 修正在 IP 限制設定不存在時應用程式報錯的問題。 by @sheldon66

#### 🐛 錯誤修復

- **[認證]** 更新客戶端認證中介軟體邏輯，以防止因並發導致 Token 更新失敗。([#6135](https://github.com/nocobase/nocobase/pull/6135)) by @sheldon66

### [v1.6.0-alpha.23](https://www.nocobase.com/en/blog/v1.6.0-alpha.23)

*發布日期：2025-02-07*

#### 🐛 錯誤修復

- **[客戶端]** 修正在多對多關聯子表單中，停用「允許選擇多個」時，「從現有資料中選擇」選項仍顯示的問題 ([#6167](https://github.com/nocobase/nocobase/pull/6167)) by @katherinehhh
- **[資料來源管理器]** 使用 loginWithJti 更新認證相關的測試案例並防止錯誤。([#6175](https://github.com/nocobase/nocobase/pull/6175)) by @sheldon66
- **[WEB 客戶端]** 升級後路由權限異常 ([#6177](https://github.com/nocobase/nocobase/pull/6177)) by @zhangzhonghe

### [v1.6.0-alpha.24](https://www.nocobase.com/en/blog/v1.6.0-alpha.24)

*發布日期：2025-02-11*

#### 🎉 新功能

- **[本地化]** 桌面端和行動端路由的本地化支援 ([#6180](https://github.com/nocobase/nocobase/pull/6180)) by @2013xile

#### 🚀 改進

- **[客戶端]** 頁面標題預設使用路由的標題 ([#6188](https://github.com/nocobase/nocobase/pull/6188)) by @zhangzhonghe
- **[資料來源管理器]** 將測試函數 login 修改為非同步，並更新相關測試案例。([#6181](https://github.com/nocobase/nocobase/pull/6181)) by @sheldon66
- **[工作流：自訂操作事件]** 更新相關測試案例以使用非同步 login。 by @sheldon66
- **[工作流：審批]** 更新相關測試案例以使用非同步 login。 by @sheldon66

#### 🐛 錯誤修復

- **[WEB 客戶端]** 移除預設頁面頁籤標題 ([#6178](https://github.com/nocobase/nocobase/pull/6178)) by @zhangzhonghe

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**官方網站**](https://www.nocobase.com/)

[**線上體驗**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
