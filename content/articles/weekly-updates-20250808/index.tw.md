---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：新增簽名相關配置選項、電子郵件管理器支援重新同步等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.14](https://www.nocobase.com/en/blog/v1.8.14)

*發布日期：2025-08-05*

#### 🐛 錯誤修復

- **[client]** 修復變數原始字串隨表單提交的問題 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
- **[工作流：審批]** 為新增和委派的項目添加任務標題 by @mytharcher

### [v1.8.13](https://www.nocobase.com/en/blog/v1.8.13)

*發布日期：2025-08-04*

#### 🎉 新功能

- **[認證：SAML 2.0]** 新增簽名相關配置選項 by @2013xile

#### 🚀 改進

- **[工作流：JavaScript]** 將快取更改為應用程式快取，以避免叢集模式下的錯誤 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 修復操作面板懸停時工具提示顯示 [object Object] 的問題 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - 在篩選表單中使用變數設定欄位預設值時，若變數值為空，輸入框將顯示原始變數字串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
- **[集合：樹]** 修復樹集合的路徑同步邏輯 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu

### [v1.8.12](https://www.nocobase.com/en/blog/v1.8.12)

*發布日期：2025-08-01*

#### 🎉 新功能

- **[client]** 為 Input、TextArea、URL 和 InputNumber 組件新增「自動聚焦」選項，啟用後在頁面初始渲染時會自動聚焦輸入欄位 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[client]**

  - 修復檔案預覽項目在空 URL 上的問題 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - 預覽時為本地檔案添加完整 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
- **[utils]** parseDate 的時區處理不正確 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[undefined]** 將新插件添加到預設清單 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[檔案管理器]** 修復儲存空間欄位權限 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[工作流]** 修復處理器退出時結果為 `undefined` 的問題 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
- **[工作流：動態計算節點]** 修復舊版 API 導致的錯誤 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[工作流：子流程]** 修復流程被暫停的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.7](https://www.nocobase.com/en/blog/v1.9.0-alpha.7)

*發布日期：2025-08-06*

#### 🐛 錯誤修復

- **[郵件管理器]** 支援重新同步 by @jiannx

### [v1.9.0-alpha.6](https://www.nocobase.com/en/blog/v1.9.0-alpha.6)

*發布日期：2025-08-06*

#### 🚀 改進

- **[工作流]** 任務卡片中的工作流標題將不再顯示刪除線，即使對應版本已停用 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher

#### 🐛 錯誤修復

- **[資料視覺化]** 圖表篩選區塊中日期欄位預設值的日期變數問題 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[工作流：抄送]** 修復區塊無法被移除的問題 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[郵件管理器]** 手動區分轉發與回覆 by @jiannx

### [v1.9.0-alpha.5](https://www.nocobase.com/en/blog/v1.9.0-alpha.5)

*發布日期：2025-08-05*

#### 🎉 新功能

- **[client]** 為 Input、TextArea、URL 和 InputNumber 組件新增「自動聚焦」選項，啟用後在頁面初始渲染時會自動聚焦輸入欄位 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe
- **[認證：SAML 2.0]** 新增簽名相關配置選項 by @2013xile

#### 🚀 改進

- **[工作流：JavaScript]** 將快取更改為應用程式快取，以避免叢集模式下的錯誤 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 修復變數原始字串隨表單提交的問題 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
  - 修復操作面板懸停時工具提示顯示 [object Object] 的問題 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - 在篩選表單中使用變數設定欄位預設值時，若變數值為空，輸入框將顯示原始變數字串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
- **[undefined]** 將新插件添加到預設清單 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[集合：樹]** 修復樹集合的路徑同步邏輯 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu
- **[Office 檔案預覽器]** 支援僅有 URL 的 `.docx`、`.xlsx` 和 `.pptx` 檔案進行預覽 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[工作流：動態計算節點]** 修復舊版 API 導致的錯誤 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[工作流：審批]** 為新增和委派的項目添加任務標題 by @mytharcher
- **[郵件管理器]** 支援同一封郵件發送給多人 by @jiannx
