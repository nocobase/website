---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：多應用管理新增篩選支援、優化行動端樣式等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.7.18](https://www.nocobase.com/en/blog/v1.7.18)

*發布日期：2025-06-26*

#### 🚀 改進

- **[工作流]** 優化行動端樣式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
- **[公開表單]** 優化公開表單中日期元件的效能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[工作流]** 修正任務中載入記錄的參數 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
- **[WEB 客戶端]** 修正設定角色選單權限後，頁面下的區塊未顯示的問題 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[工作流：審批]**

  - 修正觸發器中的申請人變數名稱 by @mytharcher
  - 修正行動端樣式 by @mytharcher
  - 修正刪除審批相關資料表時拋出錯誤 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.11](https://www.nocobase.com/en/blog/v1.8.0-beta.11)

*發布日期：2025-06-27*

#### 🎉 新功能

- **[工作流：HTTP 請求節點]** 支援 `multipart/form-data` 請求 ([#7087](https://github.com/nocobase/nocobase/pull/7087)) by @shushu992

#### 🚀 改進

- **[工作流]**

  - 優化行動端樣式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
  - 調整 `getCollectionFieldOptions` 的 API ([#7095](https://github.com/nocobase/nocobase/pull/7095)) by @mytharcher
- **[公開表單]** 優化公開表單中日期元件的效能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe
- **[工作流：操作前事件]** 調整變數 API by @mytharcher
- **[工作流：審批]** 調整變數 API by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正含時間的日期欄位範圍限制不正確的問題 ([#7107](https://github.com/nocobase/nocobase/pull/7107)) by @katherinehhh
  - 當 URL 查詢參數變數為空時，未移除資料範圍條件 ([#7104](https://github.com/nocobase/nocobase/pull/7104)) by @zhangzhonghe
- **[工作流]**

  - 修正任務中載入記錄的參數 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
  - 修正對大整數數字執行檢查不正確的問題 ([#7099](https://github.com/nocobase/nocobase/pull/7099)) by @mytharcher
  - 修正非當前工作流程版本的統計資料被串聯刪除的問題 ([#7103](https://github.com/nocobase/nocobase/pull/7103)) by @mytharcher
- **[行動端]** 修正行動端彈出視窗的 z-index 問題 ([#7110](https://github.com/nocobase/nocobase/pull/7110)) by @zhangzhonghe
- **[WEB 客戶端]** 修正設定角色選單權限後，頁面下的區塊未顯示的問題 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[日曆]** 修正日曆區塊快速建立表單中的日期欄位問題 ([#7106](https://github.com/nocobase/nocobase/pull/7106)) by @katherinehhh
- **[操作：匯入記錄]** 解決批次匯入使用者名稱和密碼後登入失敗的問題 ([#7076](https://github.com/nocobase/nocobase/pull/7076)) by @aaaaaajie
- **[工作流：審批]**

  - 修正刪除審批相關資料表時拋出錯誤 by @mytharcher
  - 修正行動端樣式 by @mytharcher
  - 修正觸發器中的申請人變數名稱 by @mytharcher
  - 僅參與者可以檢視（獲取）審批詳情 by @mytharcher
  - 修正舊版變數 API 拋出錯誤的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.12](https://www.nocobase.com/en/blog/v1.8.0-alpha.12)

*發布日期：2025-07-02*

#### 🚀 改進

- **[資料庫]** 支援從環境變數添加連線池選項 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) by @mytharcher
- **[工作流]**

  - 透過排除 JSON 欄位來改善執行列表的載入效能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) by @mytharcher
  - 為節點測試新增日誌 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) by @mytharcher
- **[工作流：審批]** 在時間軸中將時間改為絕對時間 by @mytharcher

#### 🐛 錯誤修復

- **[工具]** 使用「精確日期」變數過濾僅日期或日期時間（無時區）欄位時的問題 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) by @katherinehhh
- **[CLI]**

  - 下載插件時出現未定義錯誤 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
  - 安裝插件時調整授權許可複製 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
- **[客戶端]**

  - 基於 'x-acl-action' 的設定容錯處理 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) by @mytharcher
  - 在關聯檢視中設定欄位顯示名稱無效 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) by @aaaaaajie
  - 工作流人工節點 UI 配置：聯動規則無法選擇「當前表單」變數 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) by @zhangzhonghe
- **[工作流]** 修正循環導入拋出的錯誤 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) by @mytharcher
- **[plugin-commercial]**

  - 開發模式不顯示授權彈窗 by @jiannx
  - 暫時關閉授權驗證彈窗 by @jiannx
  - 調整授權驗證邏輯並支援泛域名匹配 by @jiannx
- **[密碼策略]** 支援永久鎖定使用者帳戶 by @2013xile
- **[工作流：子流程]** 修正叢集模式下的問題 by @mytharcher
- **[工作流：審批]**

  - 新增表單佈局設定 by @mytharcher
  - 從過濾器中移除不可過濾的欄位 by @mytharcher

### [v1.8.0-alpha.11](https://www.nocobase.com/en/blog/v1.8.0-alpha.11)

*發布日期：2025-06-27*

#### 🎉 新功能

- **[授權設定]** 新增授權設定，並在下載插件前驗證授權 ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx

#### 🚀 改進

- **[多應用管理器]** 為多應用管理新增過濾支援 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) by @katherinehhh
- **[工作流]** 優化行動端樣式 ([#7040](https://github.com/nocobase/nocobase/pull/7040)) by @mytharcher
- **[公開表單]** 優化公開表單中日期元件的效能 ([#7117](https://github.com/nocobase/nocobase/pull/7117)) by @zhangzhonghe
- **[plugin-commercial]** 加密日誌發送並改善授權資訊顯示 by @jiannx

#### 🐛 錯誤修復

- **[客戶端]** 關聯欄位預設值覆蓋子表格中的現有資料 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) by @katherinehhh
- **[工作流]** 修正任務中載入記錄的參數 ([#7123](https://github.com/nocobase/nocobase/pull/7123)) by @mytharcher
- **[WEB 客戶端]** 修正設定角色選單權限後，頁面下的區塊未顯示的問題 ([#7112](https://github.com/nocobase/nocobase/pull/7112)) by @aaaaaajie
- **[工作流：審批]** 修正觸發器中的申請人變數名稱 by @mytharcher
