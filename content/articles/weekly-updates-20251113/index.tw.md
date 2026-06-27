---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援表格欄位操作拖曳、新增圖表 SQL 資料來源等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.6](https://www.nocobase.com/en/blog/v1.9.6)

*發布日期：2025-11-12*

### 🐛 錯誤修復

- **[client]** 修復因拖曳後刪除引用模板，導致重複模板不顯示的問題 ([#7847](https://github.com/nocobase/nocobase/pull/7847)) by @zhangzhonghe
- **[utils]** 在交集策略中啟用物件合併 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
- **[資料視覺化：ECharts]** 修復 ECharts 配置 labelType 的問題 by @heziqiang
- **[郵件管理]** 同步 Microsoft 郵件已讀狀態時不帶時間戳 by @jiannx

### [v1.9.5](https://www.nocobase.com/en/blog/v1.9.5)

*發布日期：2025-11-10*

### 🐛 錯誤修復

- **[工作流：審批]** 修復重新載入關聯資料時，未排除主集合欄位的問題 by @mytharcher
- **[郵件管理]** 修復 Outlook 中保留圖片與同步的問題 by @jiannx

### [v1.9.4](https://www.nocobase.com/en/blog/v1.9.4)

*發布日期：2025-11-10*

### 🚀 改進

- **[存取控制]** 優化關聯欄位操作的權限控制邏輯 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[工作流：JavaScript]** 修復因上層函數被傳入執行環境而導致的安全漏洞，防止被利用以存取上層執行上下文 by @mytharcher
- **[認證：OIDC]** 增加請求超時時間 by @2013xile

### 🐛 錯誤修復

- **[server]** 修復啟用服務拆分模式後，工作進程透過訊息佇列發送訊息會導致錯誤的問題 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]** 修復簡單分頁詳情區塊中下一頁為空的問題 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
- **[工作流]**

  - 為工作流日誌添加 `workflowId` 作為標識資料 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
  - 修復在服務拆分模式下，工作流外掛程式在非工作進程模式時仍會消費佇列事件的問題 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[使用者]** 當欄位名稱使用蛇形命名法時，索引重新整理不正確 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile
- **[工作流：自訂變數]** 修復變數節點無配置時拋出錯誤的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.38](https://www.nocobase.com/en/blog/v2.0.0-alpha.38)

*發布日期：2025-11-12*

### 🎉 新功能

- **[client]** 支援表格欄位操作按鈕的拖曳排序 ([#7842](https://github.com/nocobase/nocobase/pull/7842)) by @zhangzhonghe
- **[資料視覺化]** 新增圖表 SQL 資料來源 ([#7830](https://github.com/nocobase/nocobase/pull/7830)) by @heziqiang

### 🚀 改進

- **[client]** 在 RunJS 腳本上下文中新增對 Day.js 函式庫的支援，方便進行日期時間操作。 ([#7841](https://github.com/nocobase/nocobase/pull/7841)) by @gchust

### 🐛 錯誤修復

- **[utils]**

  - 修復篩選按鈕上出現「無效的篩選項目類型」錯誤 ([#7838](https://github.com/nocobase/nocobase/pull/7838)) by @zhangzhonghe
  - 在交集策略中啟用物件合併 ([#7840](https://github.com/nocobase/nocobase/pull/7840)) by @chenos
  - 修復事件流中的「無法識別的操作」錯誤 ([#7835](https://github.com/nocobase/nocobase/pull/7835)) by @zhangzhonghe
- **[client]**

  - 修復表格區塊中行操作按鈕的聯動規則在行資料更新後未重新執行的問題，確保規則現在能在資料變更時正確重新套用。 ([#7832](https://github.com/nocobase/nocobase/pull/7832)) by @gchust
  - 修復程式碼編輯器中預覽包含 JSX 語法的程式碼時出現的錯誤 ([#7836](https://github.com/nocobase/nocobase/pull/7836)) by @gchust
- **[undefined]** 修復深色模式下外掛程式文件首頁樣式不正確的問題。 ([#7839](https://github.com/nocobase/nocobase/pull/7839)) by @gchust
- **[檔案管理]** 修復表格區塊欄位配置問題 ([#7843](https://github.com/nocobase/nocobase/pull/7843)) by @katherinehhh
- **[AI 員工]** 在 v1 頁面上隱藏 AI 員工聊天按鈕 ([#7829](https://github.com/nocobase/nocobase/pull/7829)) by @cgyrock
- **[資料視覺化：ECharts]** 修復 ECharts 配置 labelType 的問題 by @heziqiang
- **[郵件管理]**

  - 修復草稿錯誤 by @jiannx
  - 同步 Microsoft 郵件已讀狀態時不帶時間戳 by @jiannx

### [v2.0.0-alpha.37](https://www.nocobase.com/en/blog/v2.0.0-alpha.37)

*發布日期：2025-11-11*

### 🚀 改進

- **[client]**

  - 將頁面資訊版本添加到流程引擎上下文中 ([#7826](https://github.com/nocobase/nocobase/pull/7826)) by @gchust
  - 增強 Markdown 編輯器 ([#7793](https://github.com/nocobase/nocobase/pull/7793)) by @katherinehhh
  - 在 2.0 中適配 tableoid 欄位 ([#7809](https://github.com/nocobase/nocobase/pull/7809)) by @katherinehhh
- **[資料視覺化]** 更新提示文字和事件程式碼模板註釋 ([#7814](https://github.com/nocobase/nocobase/pull/7814)) by @heziqiang
- **[存取控制]** 優化關聯欄位操作的權限控制邏輯 ([#7800](https://github.com/nocobase/nocobase/pull/7800)) by @2013xile
- **[認證：OIDC]** 增加請求超時時間 by @2013xile

### 🐛 錯誤修復

- **[server]** 修復啟用服務拆分模式後，工作進程透過訊息佇列發送訊息會導致錯誤的問題 ([#7797](https://github.com/nocobase/nocobase/pull/7797)) by @mytharcher
- **[client]**

  - 當前集合變數不應可從篩選元件的變數選擇器中選取 ([#7818](https://github.com/nocobase/nocobase/pull/7818)) by @gchust
  - 修復篩選表單關聯欄位中的錯誤 'value.replace is not a function' ([#7824](https://github.com/nocobase/nocobase/pull/7824)) by @zhangzhonghe
  - 修復 onChange 回呼中的參數不正確 ([#7807](https://github.com/nocobase/nocobase/pull/7807)) by @zhangzhonghe
- **[流程引擎]** 修復事件流的變更需要重新整理頁面才能生效的問題。 ([#7811](https://github.com/nocobase/nocobase/pull/7811)) by @gchust
- **[工作流]** 修復在服務拆分模式下，工作流外掛程式在非工作進程模式時仍會消費佇列事件的問題 ([#7820](https://github.com/nocobase/nocobase/pull/7820)) by @mytharcher
- **[工作流：審批]** 修復重新載入關聯資料時，未排除主集合欄位的問題 by @mytharcher
- **[郵件管理]** 修復 Outlook 中保留圖片與同步的問題 by @jiannx

### [v2.0.0-alpha.36](https://www.nocobase.com/en/blog/v2.0.0-alpha.36)

*發布日期：2025-11-10*

### 🚀 改進

- **[流程引擎]** 優化頁面頁籤的工具列樣式 ([#7795](https://github.com/nocobase/nocobase/pull/7795)) by @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]**

  - 修復透過使用者介面修改子表單關聯欄位時，變數未正確解析的問題。 ([#7799](https://github.com/nocobase/nocobase/pull/7799)) by @gchust
  - 多主鍵記錄的編輯表單錯誤 ([#7798](https://github.com/nocobase/nocobase/pull/7798)) by @gchust
  - 修復「開啟檢視」操作的某些配置未生效的問題，確保該操作現在能按所有指定配置正常運作。 ([#7790](https://github.com/nocobase/nocobase/pull/7790)) by @gchust
- **[client]**

  - 修復集合選擇器欄位無法正確選取集合的問題 ([#7794](https://github.com/nocobase/nocobase/pull/7794)) by @katherinehhh
  - 無法隱藏表格區塊的操作欄 ([#7804](https://github.com/nocobase/nocobase/pull/7804)) by @gchust
  - 支援在 AI 員工的提示詞中選取整個變數物件 ([#7791](https://github.com/nocobase/nocobase/pull/7791)) by @gchust
- **[使用者]** 當欄位名稱使用蛇形命名法時，索引重新整理不正確 ([#7785](https://github.com/nocobase/nocobase/pull/7785)) by @2013xile

### [v2.0.0-alpha.35](https://www.nocobase.com/en/blog/v2.0.0-alpha.35)

*發布日期：2025-11-06*

### 🚀 改進

- **[流程引擎]** 支援流程模型中的延遲操作 ([#7786](https://github.com/nocobase/nocobase/pull/7786)) by @gchust
- **[工作流：JavaScript]** 修復因上層函數被傳入執行環境而導致的安全漏洞，防止被利用以存取上層執行上下文 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復簡單分頁詳情區塊中下一頁為空的問題 ([#7784](https://github.com/nocobase/nocobase/pull/7784)) by @katherinehhh
  - 修復表格操作和 jsColumn 寬度未套用的問題 ([#7777](https://github.com/nocobase/nocobase/pull/7777)) by @katherinehhh
  - 若透過頁面事件流設定，區塊的資料範圍將無法生效 ([#7788](https://github.com/nocobase/nocobase/pull/7788)) by @gchust
- **[工作流]** 為工作流日誌添加 `workflowId` 作為標識資料 ([#7789](https://github.com/nocobase/nocobase/pull/7789)) by @mytharcher
- **[工作流：自訂變數]** 修復變數節點無配置時拋出錯誤的問題 by @mytharcher
- **[郵件管理]** 為 MailMessages 集合添加索引 by @jiannx
