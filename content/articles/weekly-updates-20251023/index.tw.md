---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援自訂變數、表格行點擊事件監聽等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.31](https://www.nocobase.com/en/blog/v1.8.31)

*發布日期：2025-10-17*

### 🐛 錯誤修復

- **[database]** 修復當運算符 `$in` 遇到 `null` 值時拋出錯誤的問題 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[工作流：審批]**

  - 修復審批提交後，因資料庫錯誤導致事務未正確回滾而引發的事務超時問題 by @mytharcher
  - 修復審批提交表單中變數未被解析的問題 by @mytharcher

### [v1.8.30](https://www.nocobase.com/en/blog/v1.8.30)

*發布日期：2025-10-16*

### 🐛 錯誤修復

- **[client]** 修復頁籤圖標彈出視窗被遮擋的問題 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.13](https://www.nocobase.com/en/blog/v1.9.0-beta.13)

*發布日期：2025-10-22*

### 🚀 改進

- **[client]** 為獲取更準確的檔案 MIME 類型，在客戶端使用 `mime` 套件檢測檔案 MIME 類型 ([#7551](https://github.com/nocobase/nocobase/pull/7551)) by @mytharcher
- **[資料來源：主資料庫]** 重構錯誤訊息的本地化邏輯，並在錯誤處理插件中進行處理 ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile
- **[工作流]** 刪除節點時新增 `keepBranch` 選項 ([#7571](https://github.com/nocobase/nocobase/pull/7571)) by @mytharcher
- **[工作流：審批]** 重構分支配置以適配核心變更 by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修復在篩選區塊中清除日期欄位時的錯誤 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
  - 修復在編輯表單抽屜中子表格預設值不起作用的問題 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
  - 修復預覽時圖片同時旋轉和縮放後顯示不正確的問題 ([#7573](https://github.com/nocobase/nocobase/pull/7573)) by @mytharcher
  - 修復頁籤圖標彈出視窗被遮擋的問題 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe
- **[database]** 修復當運算符 `$in` 遇到 `null` 值時拋出錯誤的問題 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[資料來源：主資料庫]** 修復建立反向關聯欄位後，中繼資料未在多個節點間同步的問題 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[工作流：審批]**

  - 修復應用程式未安裝時，因表單不存在導致遷移腳本錯誤的問題 by @mytharcher
  - 修復因跳過鉤子導致雪花 ID 未產生的問題 by @mytharcher
- **[認證：LDAP]** 修復在 Active Directory 中使用非 ASCII (UTF-8) DN 時 LDAP 綁定失敗的問題 by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.19](https://www.nocobase.com/en/blog/v2.0.0-alpha.19)

*發布日期：2025-10-21*

### 🐛 錯誤修復

- **[client]**

  - 修復在彈窗內切換頁籤、重新開啟巢狀彈窗，然後關閉所有彈窗後，URL 未正確更新的問題。([#7630](https://github.com/nocobase/nocobase/pull/7630)) by @gchust
  - 修復在編輯表單抽屜中子表格預設值不起作用的問題 ([#7631](https://github.com/nocobase/nocobase/pull/7631)) by @katherinehhh
  - 修復在篩選區塊中清除日期欄位時的錯誤 ([#7632](https://github.com/nocobase/nocobase/pull/7632)) by @katherinehhh
- **[多應用管理器（已棄用）]** 修復無法停用舊版多應用管理器的問題 ([#7633](https://github.com/nocobase/nocobase/pull/7633)) by @jiannx

### [v2.0.0-alpha.17](https://www.nocobase.com/en/blog/v2.0.0-alpha.17)

*發布日期：2025-10-21*

### 🎉 新功能

- **[client]** 新增對表格行點擊事件監聽器的支援，允許用戶在點擊表格中的行時執行特定操作 ([#7622](https://github.com/nocobase/nocobase/pull/7622)) by @zhangzhonghe
- **[工作流：審批]** 暴露 `approvalId` 變數，供審批觸發器使用 by @mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 修復 antd 組件中翻譯未生效的問題 ([#7621](https://github.com/nocobase/nocobase/pull/7621)) by @zhangzhonghe
- **[資料來源：主資料庫]** 修復建立反向關聯欄位後，中繼資料未在多個節點間同步的問題 ([#7628](https://github.com/nocobase/nocobase/pull/7628)) by @mytharcher
- **[plugin-demo-platform]** demo 支援自動停止應用程式 by @jiannx
- **[多應用]**

  - 多應用遷移未觸發鉤子 by @jiannx
  - 多應用代理支援快取 by @jiannx

### [v2.0.0-alpha.16](https://www.nocobase.com/en/blog/v2.0.0-alpha.16)

*發布日期：2025-10-20*

### 🎉 新功能

- **[表單草稿]** 表單草稿功能 by @chenos

### 🐛 錯誤修復

- **[流程引擎]** 無法在引用區塊中獲取當前視圖上下文 ([#7620](https://github.com/nocobase/nocobase/pull/7620)) by @gchust
- **[client]** 處理 usePlugin 中缺少上下文的問題 ([#7627](https://github.com/nocobase/nocobase/pull/7627)) by @chenos

### [v2.0.0-alpha.15](https://www.nocobase.com/en/blog/v2.0.0-alpha.15)

*發布日期：2025-10-20*

### 🚀 改進

- **[client]** JS 欄位模型支援關聯欄位 ([#7618](https://github.com/nocobase/nocobase/pull/7618)) by @gchust
- **[AI 員工]**

  - 將 OpenAI LLM 提供者重構為兩個獨立的提供者，以支援 OpenAI 的 Completions 和 Responses API。([#7615](https://github.com/nocobase/nocobase/pull/7615)) by @cgyrock
  - 新增 LLM 提供者 Ollama ([#7612](https://github.com/nocobase/nocobase/pull/7612)) by @ReLaMi96

### 🐛 錯誤修復

- **[工作流：審批]**
  - 修復新增審批人後任務計數未更新的問題 by @mytharcher
  - 修復審批提交後，因資料庫錯誤導致事務未正確回滾而引發的事務超時問題 by @mytharcher

### [v2.0.0-alpha.14](https://www.nocobase.com/en/blog/v2.0.0-alpha.14)

*發布日期：2025-10-17*

### 🚀 改進

- **[AI 員工]** AI 編碼優化 ([#7614](https://github.com/nocobase/nocobase/pull/7614)) by @cgyrock
- **[資料來源：主資料庫]** 重構錯誤訊息的本地化邏輯，並在錯誤處理插件中進行處理 ([#7582](https://github.com/nocobase/nocobase/pull/7582)) by @2013xile

### 🐛 錯誤修復

- **[database]**

  - 在使用 `runSQL` 方法執行 SQL 語句前設定 `search_path` ([#7611](https://github.com/nocobase/nocobase/pull/7611)) by @2013xile
  - 修復當運算符 `$in` 遇到 `null` 值時拋出錯誤的問題 ([#7610](https://github.com/nocobase/nocobase/pull/7610)) by @mytharcher
- **[client]** 修復頁籤圖標彈出視窗被遮擋的問題 ([#7607](https://github.com/nocobase/nocobase/pull/7607)) by @zhangzhonghe
- **[工作流：審批]** 修復審批提交表單中變數未被解析的問題 by @mytharcher

### [v2.0.0-alpha.13](https://www.nocobase.com/en/blog/v2.0.0-alpha.13)

*發布日期：2025-10-16*

### 🎉 新功能

- **[區塊：引用]** 新增實驗性的「引用區塊」插件，允許通過引用或複製來重用現有區塊。([#7584](https://github.com/nocobase/nocobase/pull/7584)) by @gchust

### 🐛 錯誤修復

- **[資料視覺化]** 修復因事件註冊超時導致圖表無法顯示的問題 ([#7608](https://github.com/nocobase/nocobase/pull/7608)) by @heziqiang

### [v2.0.0-alpha.10](https://www.nocobase.com/en/blog/v2.0.0-alpha.10)

*發布日期：2025-10-15*

### 🚀 改進

- **[資料視覺化]** 更新 plugin-data-vi 2.0，修復一些問題並優化 UI。([#7597](https://github.com/nocobase/nocobase/pull/7597)) by @heziqiang

### 🐛 錯誤修復

- **[工作流：審批]** 修復因跳過鉤子導致雪花 ID 未產生的問題 by @mytharcher

### [v2.0.0-alpha.9](https://www.nocobase.com/en/blog/v2.0.0-alpha.9)

*發布日期：2025-10-15*

### 🎉 新功能

- **[client]** 新增對自定義變數的支援 ([#7585](https://github.com/nocobase/nocobase/pull/7585)) by @zhangzhonghe

### 🚀 改進

- **[AI 員工]** 在行動版佈局中為聊天框新增最小化按鈕 ([#7595](https://github.com/nocobase/nocobase/pull/7595)) by @cgyrock

### 🐛 錯誤修復

- **[server]** 複製引用欄位時保留 field.targetKey ([#7599](https://github.com/nocobase/nocobase/pull/7599)) by @chenos
- **[AI 員工]** 修復行動版佈局中聊天框的佈局問題 ([#7591](https://github.com/nocobase/nocobase/pull/7591)) by @cgyrock
