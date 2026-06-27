---
title: "NocoBase 每週更新：提升效能"
description: "本週更新包括：優化操作面板和公開表單元件以適應行動裝置，以及更多。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品尖端功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.3](https://www.nocobase.com/en/blog/v1.4.3)

*發布日期：2024-12-05*

#### 🚀 改進

- **[測試]** 允許在測試案例中使用角色名稱登入 ([#5794](https://github.com/nocobase/nocobase/pull/5794)) by @mytharcher
- **[通知：應用內訊息]** 更新應用內訊息表單中詳細資訊 URL 的標題及本地化檔案 ([#5742](https://github.com/nocobase/nocobase/pull/5742)) by @sheldon66

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復無角色的用戶在遇到登入錯誤並點擊「使用其他帳號登入」按鈕後，Token 未被清除的問題 ([#5790](https://github.com/nocobase/nocobase/pull/5790)) by @2013xile
  - 靜默請求遺失請求標頭 ([#5795](https://github.com/nocobase/nocobase/pull/5795)) by @chenos
  - 用戶無角色時出現空白頁面 ([#5797](https://github.com/nocobase/nocobase/pull/5797)) by @chenos
  - 修復在緊湊主題下，尺寸為小的子表格出現捲軸問題 ([#5796](https://github.com/nocobase/nocobase/pull/5796)) by @katherinehhh

### [v1.4.4](https://www.nocobase.com/en/blog/v1.4.4)

*發布日期：2024-12-08*

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復外部資料來源欄位在表格區塊中無法顯示的問題 ([#5825](https://github.com/nocobase/nocobase/pull/5825)) by @katherinehhh
  - 修復表單配置中繼承欄位的顯示問題 ([#5822](https://github.com/nocobase/nocobase/pull/5822)) by @katherinehhh
  - 修復繼承欄位未出現在欄位列表中且無法覆寫的問題 ([#5800](https://github.com/nocobase/nocobase/pull/5800)) by @katherinehhh
- **[資料視覺化]** 修復在 MySQL 中格式化時區感知日期欄位的問題 ([#5829](https://github.com/nocobase/nocobase/pull/5829)) by @2013xile
- **[工作流程]**
  - 修復跨資料來源的事務導致集合事件錯誤 ([#5818](https://github.com/nocobase/nocobase/pull/5818)) by @mytharcher
  - 修復基於日期欄位的排程配置中遺漏日期類型的問題 ([#5816](https://github.com/nocobase/nocobase/pull/5816)) by @mytharcher
- **[集合欄位：多對多（陣列）]** 修復在單一關係集合中更新 m2m 陣列欄位不生效的問題 ([#5820](https://github.com/nocobase/nocobase/pull/5820)) by @2013xile
- **[日曆]**
  - 修復點擊日曆中空白日期時出現錯誤 ([#5803](https://github.com/nocobase/nocobase/pull/5803)) by @katherinehhh
  - 修復關閉透過「日曆區塊」開啟的彈窗時，導致所有彈窗關閉的問題 ([#5793](https://github.com/nocobase/nocobase/pull/5793)) by @zhangzhonghe
- **[公開表單]** 修復子應用公開表單中 QR Code 掃描路徑不正確的問題 ([#5799](https://github.com/nocobase/nocobase/pull/5799)) by @katherinehhh

### [v1.4.5](https://www.nocobase.com/en/blog/v1.4.5)

*發布日期：2024-12-08*

#### 🐛 錯誤修復

- **[存取控制]** 當用戶角色不正確時重新整理頁面 ([#5821](https://github.com/nocobase/nocobase/pull/5821)) by @chenos

### [v1.4.6](https://www.nocobase.com/en/blog/v1.4.6)

*發布日期：2024-12-08*

#### 🐛 錯誤修復

- **[操作：匯入記錄]** 修復匯入關聯表格資料的問題 ([#5833](https://github.com/nocobase/nocobase/pull/5833)) by @chareice
- **[存取控制]** 修復在 ACL 中使用欄位查詢關聯的問題 ([#5832](https://github.com/nocobase/nocobase/pull/5832)) by @chareice

### [v1.4.7](https://www.nocobase.com/en/blog/v1.4.7)

*發布日期：2024-12-09*

#### 🐛 錯誤修復

- **[行動端]** 修復行動端背景顏色顯示問題 ([#5809](https://github.com/nocobase/nocobase/pull/5809)) by @katherinehhh

### [v1.4.8](https://www.nocobase.com/en/blog/v1.4.8)

*發布日期：2024-12-10*

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復在關聯欄位記錄選擇器中配置的篩選表單的資料模板問題 ([#5837](https://github.com/nocobase/nocobase/pull/5837)) by @katherinehhh
  - 修復 Markdown 字串模板無法載入關聯資料（外部資料來源）的問題 ([#5791](https://github.com/nocobase/nocobase/pull/5791)) by @katherinehhh
- **[用戶資料同步]** 同步時跳過不支援的資料類型，而非拋出錯誤。([#5835](https://github.com/nocobase/nocobase/pull/5835)) by @chenzhizdt
- **[備份管理器]**
  - 修復大型備份檔案下載視窗彈出緩慢的問題 by @gchust
  - 修復還原備份子應用程式導致所有應用程式重新啟動的問題 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.2](https://www.nocobase.com/en/blog/v1.5.0-beta.2)

*發布日期：2024-12-06*

#### 🚀 改進

- **[客戶端]** 優化 useMenuSearch 中的遞迴邏輯以提升效能 ([#5784](https://github.com/nocobase/nocobase/pull/5784)) by @katherinehhh
- **[公開表單]** 優化操作面板和公開表單元件的行動端適配 ([#5788](https://github.com/nocobase/nocobase/pull/5788)) by @katherinehhh

### [v1.5.0-beta.3](https://www.nocobase.com/en/blog/v1.5.0-beta.3)

*發布日期：2024-12-10*

#### 🎉 新功能

- **[客戶端]** 支援配置子表格中新增和選擇按鈕的文字、圖示和類型 ([#5778](https://github.com/nocobase/nocobase/pull/5778)) by @katherinehhh
- **[日曆]** 日曆外掛新增事件開啟模式 ([#5808](https://github.com/nocobase/nocobase/pull/5808)) by @Cyx649312038

### [v1.5.0-beta.4](https://www.nocobase.com/en/blog/v1.5.0-beta.4)

*發布日期：2024-12-11*

#### 🐛 錯誤修復

- **[行動端]** 修復子頁面中日曆元件的行動端適配問題 ([#5859](https://github.com/nocobase/nocobase/pull/5859)) by @katherinehhh

### [v1.5.0-beta.6](https://www.nocobase.com/en/blog/v1.5.0-beta.6)

*發布日期：2024-12-11*

#### 🚀 改進

- **[客戶端]** 移除表格行骨架元件 ([#5751](https://github.com/nocobase/nocobase/pull/5751)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.3](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*發布日期：2024-12-09*

#### 🚀 改進

- **[客戶端]** 從表格中移除 Formily 元件，以提升切換表格分頁時的效能 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復在子表單中新增欄位後欄位未顯示的問題 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) by @zhangzhonghe
  - 修復在詳細資訊區塊中更改關聯欄位值後未立即重新整理的問題 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) by @zhangzhonghe
  - 修復首次開啟「啟用連結」時，點擊連結無法開啟彈窗的問題 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) by @zhangzhonghe
  - 防止關閉彈窗時多次呼叫 API ([#5804](https://github.com/nocobase/nocobase/pull/5804)) by @zhangzhonghe
  - 修復行動端登入重新導向至桌面頁面的問題 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) by @zhangzhonghe
  - 修復配置操作按鈕應靠左對齊 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) by @katherinehhh
- **[建置]** 修復外掛建置後前端 JS 檔案快取不正確的問題 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) by @gchust

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
