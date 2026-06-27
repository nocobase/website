---
title: "NocoBase 每週更新：新增通知頻道"
description: "NocoBase 每週更新 2024-11-07"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

NocoBase 目前有兩個分支進行更新：`main` 和 `next`。

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Alpha 版本，包含一些尚未發布的新功能。此版本可能不完全穩定，適合開發者或測試人員提前體驗新功能或進行相容性測試。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.43-beta](https://www.nocobase.com/en/blog/v1.3.43-beta)

*發布日期：2024-11-05*

### 🚀 改進

- **[客戶端]** 數字精度可配置為 8 位 ([#5552](https://github.com/nocobase/nocobase/pull/5552)) by @chenos

### 🐛 錯誤修復

- **[客戶端]** 修復表單中聯動樣式未更新的問題。([#5539](https://github.com/nocobase/nocobase/pull/5539)) by @sheldon66
- **[認證：API 金鑰]** 修復 API 金鑰設定頁面的 URL 路徑 ([#5562](https://github.com/nocobase/nocobase/pull/5562)) by @2013xile
- **[行動端]** 修復預覽圖片被頁面遮蓋的問題 ([#5535](https://github.com/nocobase/nocobase/pull/5535)) by @zhangzhonghe
- **[區塊：地圖]** 解決子詳情中的地圖渲染問題以及空欄位值顯示不正確的問題 ([#5526](https://github.com/nocobase/nocobase/pull/5526)) by @katherinehhh
- **[資料表：樹]** 修復更新路徑資料表時出現的錯誤 ([#5551](https://github.com/nocobase/nocobase/pull/5551)) by @2013xile

## [v1.3.44-beta](https://www.nocobase.com/en/blog/v1.3.44-beta)

*發布日期：2024-11-05*

### 🎉 新功能

- **[認證：OIDC]** 新增「啟用 RP-initiated 登出」選項 by @2013xile

### 🐛 錯誤修復

- **[客戶端]** 修正在關聯選擇中將單選欄位設為標題欄位時的篩選問題 ([#5581](https://github.com/nocobase/nocobase/pull/5581)) by @katherinehhh

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241031134640](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241031134640)

*發布日期：2024-10-31*

### 🎉 新功能

- **[企業微信]** 新增企業微信通知頻道 by @chenzhizdt

### 🚀 改進

- **[客戶端]** 清除欄位標題時恢復預設值 ([#5549](https://github.com/nocobase/nocobase/pull/5549)) by @katherinehhh
- **[通知管理器]**

  - 新增 UserSelect 和 UserAddition 組件以簡化通知頻道的開發 ([#5553](https://github.com/nocobase/nocobase/pull/5553)) by @2013xile
  - 新增用於獲取通知插件頻道類型註冊表的 API ([#5531](https://github.com/nocobase/nocobase/pull/5531)) by @mytharcher
  - 調整通知插件的頻道類型註冊名稱 ([#5532](https://github.com/nocobase/nocobase/pull/5532)) by @mytharcher
  - 新增通知管理器插件用於獲取所有已註冊類型的 API ([#5529](https://github.com/nocobase/nocobase/pull/5529)) by @mytharcher
- **[通知：應用內訊息]** 改進應用內訊息 UI 並新增一些日誌。([#5550](https://github.com/nocobase/nocobase/pull/5550)) by @sheldon66

### 🐛 錯誤修復

- **[資料庫]**

  - 修復使用篩選目標鍵更新資料表選項的問題 ([#5558](https://github.com/nocobase/nocobase/pull/5558)) by @chareice
  - 修復在處理多個篩選目標鍵時，sequelize 中 primaryKeyField 值錯誤的問題 ([#5556](https://github.com/nocobase/nocobase/pull/5556)) by @chareice
- **[客戶端]**

  - 修復表格區塊中的骨架組件不消失的問題 ([#5548](https://github.com/nocobase/nocobase/pull/5548)) by @zhangzhonghe
  - 修復子表格中刪除操作、文字省略以及新增資料顯示的問題 ([#5523](https://github.com/nocobase/nocobase/pull/5523)) by @katherinehhh
- **[資料源管理器]** 修復移除處於失敗狀態的資料源的問題 ([#5554](https://github.com/nocobase/nocobase/pull/5554)) by @chareice
- **[通知：電子郵件]**

  - 修復電子郵件通知中按 ID 查詢使用者的問題 ([#5533](https://github.com/nocobase/nocobase/pull/5533)) by @mytharcher
  - 修復基於使用者 ID 的電子郵件通知中遺失主旨的問題 ([#5534](https://github.com/nocobase/nocobase/pull/5534)) by @mytharcher
  - 修復電子郵件通知動態表單中的反應欄位路徑 ([#5527](https://github.com/nocobase/nocobase/pull/5527)) by @mytharcher
- **[資料表欄位：多對多（陣列）]** 修復多對多（陣列）欄位的選擇組件只有一個選項的問題 ([#5544](https://github.com/nocobase/nocobase/pull/5544)) by @2013xile
- **[通知管理器]** 修復因頻道類型錯誤導致的頁面崩潰 ([#5528](https://github.com/nocobase/nocobase/pull/5528)) by @mytharcher
- **[工作流：SQL 節點]** 修復 SSE 導致「waitForLoadState(‘networkidle’)」超時的問題 ([#5524](https://github.com/nocobase/nocobase/pull/5524)) by @hongboji
- **[欄位組件：遮罩]** 修復當組件處於唯讀狀態時，無法透過點擊顯示原始資料的問題 by @gchust
- **[工作流：自訂操作事件]** 修復 SSE 導致「waitForLoadState(‘networkidle’)」超時的問題 by @hongboji
- **[企業微信]** 修復從企業微信工作檯進入應用時回應 404 未找到的問題 by @chenzhizdt

## [v1.4.0-alpha.20241104151643](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241104151643)

*發布日期：2024-11-04*

### 🎉 新功能

- **[客戶端]**
  - [表格] 新增「彈出視窗」操作以配置操作 ([#5580](https://github.com/nocobase/nocobase/pull/5580)) by @bignof
  - 「配置欄位」支援篩選欄位 ([#5471](https://github.com/nocobase/nocobase/pull/5471)) by @katherinehhh

### 🚀 改進

- **[客戶端]** 新增對佈局參數（labelAlign、labelWidth、labelWrap）的支援 ([#5521](https://github.com/nocobase/nocobase/pull/5521)) by @katherinehhh
- **[多應用管理器]** 子應用非同步快速啟動 ([#5571](https://github.com/nocobase/nocobase/pull/5571)) by @chenos
- **[資料表：樹]** 改進具有 schema 屬性的資料表載入邏輯 ([#5541](https://github.com/nocobase/nocobase/pull/5541)) by @chareice

### 🐛 錯誤修復

- **[客戶端]**
  - 搜尋欄位應基於翻譯後的文字進行搜尋 ([#5572](https://github.com/nocobase/nocobase/pull/5572)) by @katherinehhh
  - 修復刪除後向子表格新增資料的問題 ([#5566](https://github.com/nocobase/nocobase/pull/5566)) by @katherinehhh

## [v1.4.0-alpha.20241105053324](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105053324)

*發布日期：2024-11-05*

### 🐛 錯誤修復

- **[客戶端]** 移除向頁面新增區塊時的搜尋框 ([#5577](https://github.com/nocobase/nocobase/pull/5577)) by @katherinehhh

## [v1.4.0-alpha.20241105230315](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241105230315)

*發布日期：2024-11-06*

### 🐛 錯誤修復

- **[客戶端]** 修復新增資料源後配置欄位時出現的解析錯誤 ([#5576](https://github.com/nocobase/nocobase/pull/5576)) by @katherinehhh

## [v1.4.0-alpha.1](https://www.nocobase.com/en/blog/v1.4.0-alpha.1)

*發布日期：2024-11-06*

### 🎉 新功能

- **[工具]** 支援在訊息內容中使用 Handlebars ([#5559](https://github.com/nocobase/nocobase/pull/5559)) by @mytharcher
- **[客戶端]** 表格區塊支援尺寸設定 ([#5563](https://github.com/nocobase/nocobase/pull/5563)) by @katherinehhh
- **[通知：應用內訊息]** 支援行動端客戶端的應用內訊息 ([#5560](https://github.com/nocobase/nocobase/pull/5560)) by @sheldon66

### 🚀 改進

- **[通知管理器]** 將接收者新增至通知日誌 ([#5561](https://github.com/nocobase/nocobase/pull/5561)) by @sheldon66

### 🐛 錯誤修復

- **[客戶端]** 修復在看板中開啟彈出視窗時的錯誤 ([#5592](https://github.com/nocobase/nocobase/pull/5592)) by @zhangzhonghe
- **[存取控制]** 修復具有多個篩選目標鍵的 acl 元資料 ([#5598](https://github.com/nocobase/nocobase/pull/5598)) by @chareice

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全的控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需花費數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 獲取 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
