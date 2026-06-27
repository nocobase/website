---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：優化列表 API 計數查詢、工作流程支援測試通知節點等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：測試版，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*發布日期：2025-09-03*

#### 🚀 改進

- **[資料庫]** 優化列表 API 的計數查詢，以減少資源消耗。([#7453](https://github.com/nocobase/nocobase/pull/7453)) by @aaaaaajie
- **[通知：應用內訊息]** 支援配置應用內訊息通知的自動關閉延遲時間 ([#7472](https://github.com/nocobase/nocobase/pull/7472)) by @mytharcher
- **[工作流：通知節點]** 支援測試通知節點 ([#7470](https://github.com/nocobase/nocobase/pull/7470)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 在編輯表單區塊中切換為標籤元件時，關聯欄位渲染錯誤 ([#7468](https://github.com/nocobase/nocobase/pull/7468)) by @katherinehhh
  - 當選取日期等於最小日期時的時間限制問題 ([#7461](https://github.com/nocobase/nocobase/pull/7461)) by @katherinehhh
- **[行動端]** 行動端中不帶時區的日期欄位無法正確顯示日期時間 ([#7473](https://github.com/nocobase/nocobase/pull/7473)) by @katherinehhh
- **[公開表單]** 使用變數時，公開表單欄位的預設值未生效 ([#7467](https://github.com/nocobase/nocobase/pull/7467)) by @katherinehhh
- **[操作：匯入記錄]** 修正匯入重複資料時顯示的錯誤行號 ([#7440](https://github.com/nocobase/nocobase/pull/7440)) by @aaaaaajie
- **[資料集合：樹]** 刪除樹狀資料集合後，移除與該集合相關的資料庫事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459)) by @2013xile
- **[工作流：自訂操作事件]** 修正自訂操作事件在初始化後無法立即手動執行的問題 by @mytharcher
- **[工作流：子流程]** 修正子流程被恢復並多次執行的問題 by @mytharcher
- **[工作流：審批]** 對於非當前審批人的用戶，流程表格中將不顯示對應的檢視按鈕 by @mytharcher
