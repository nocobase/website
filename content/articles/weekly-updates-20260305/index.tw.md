---
title: "每週更新｜AI 員工現已支援多關鍵字搜尋內建文件"
description: "這是 NocoBase 功能更新與改進的摘要，時間範圍為 2026 年 2 月 27 日至 3 月 5 日。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.10](https://www.nocobase.com/en/blog/v2.0.10)

*發布日期：2026-03-04*

### 🐛 錯誤修復

- **[AI 員工]** 修復啟用知識庫時 AI 員工聊天出錯的問題 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
- **[流程引擎]** 修復 sql destroy 錯誤 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[存取控制]** 設定 ACL 元資料時使用的資料庫實例不正確 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[工作流：審批]** 修復因節點類型篩選導致查詢結果不顯示的問題 by @mytharcher

### [v2.0.9](https://www.nocobase.com/en/blog/v2.0.9)

*發布日期：2026-03-03*

### 🐛 錯誤修復

- **[客戶端]**

  - 修復 CollectionField 元件在 DefaultValue 元件中未渲染的問題 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - 修正在切換選單時資料區塊未重新整理的錯誤。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
- **[資料庫]** 修復 v2 中欄位自訂正則檢查失敗的問題 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[流程引擎]** 修復 ctx.exit 無法終止使用者自訂事件流程執行的問題。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[工作流：審批]** 新增遺漏的參數，以避免提交新審批時關聯資料未更新 by @mytharcher

### [v2.0.8](https://www.nocobase.com/en/blog/v2.0.8)

*發布日期：2026-03-01*

### 🎉 新功能

- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 錯誤修復

- **[伺服器]** 透過為資源附加雜湊值來解決快取問題 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[AI 員工]** 修復 AI 資料來源配置渲染問題。 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
- **[工作流：自訂操作事件]** 修復自訂操作工作流作為子流程執行時掛起的問題 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[工作流：審批]**

  - 清理審批操作中的關聯值，以避免任何超出權限的資料操作 by @mytharcher
  - 修復手動執行審批工作流時拋出錯誤的問題 by @mytharcher
  - 修復因新增或委派時 `dataAfter` 值缺失導致的錯誤 by @mytharcher
  - 修復 appends 參數被 ACL 過濾的問題 by @mytharcher
  - 修復 ACL 問題：當用戶無權限時，不應建立或更新關聯值 by @mytharcher

### [v2.0.7](https://www.nocobase.com/en/blog/v2.0.7)

*發布日期：2026-02-27*

### 🎉 新功能

- **[AI 員工]** 支援使用多個關鍵字搜尋內建文件，並在單次工具呼叫中讀取多個文件 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 改進

- **[客戶端]** 支援表格的彙總配置 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[嵌入 NocoBase]** 提供 sanitize API 以過濾操作中的關聯值 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 錯誤修復

- **[資料視覺化]** 修復圖表插件入口文字的 i18n 問題 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[工作流：JavaScript]** 修復測試案例在 Windows 上無法通過的問題 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[AI 員工]** 解決 AI 訊息渲染長度為 0 的問題 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[範本列印]** 修復 ACL API 已變更但插件未適配的問題 by @mytharcher
- **[工作流：審批]** 清理審批操作中的關聯值，以避免任何超出權限的資料操作 by @mytharcher
- **[郵件管理員]** 修復圖片內容 ID 格式解析問題 by @jiannx

### [v2.0.6](https://www.nocobase.com/en/blog/v2.0.6)

*發布日期：2026-02-26*

### 🐛 錯誤修復

- **[AI 員工]** 修復使用 MySQL 資料庫時 AI 對話出錯的問題。 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.7](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*發布日期：2026-03-04*

### 🎉 新功能

- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🐛 錯誤修復

- **[客戶端]**

  - 修復 CollectionField 元件在 DefaultValue 元件中未渲染的問題 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - 修正在切換選單時資料區塊未重新整理的錯誤。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
- **[流程引擎]** 修復 ctx.exit 無法終止使用者自訂事件流程執行的問題。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[資料庫]** 修復 v2 中欄位自訂正則檢查失敗的問題 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[伺服器]** 透過為資源附加雜湊值來解決快取問題 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[存取控制]** 設定 ACL 元資料時使用的資料庫實例不正確 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[AI 員工]**

  - 修復啟用知識庫時 AI 員工聊天出錯的問題 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  - 修復 AI 資料來源配置渲染問題。 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
- **[流程引擎]** 修復 sql destroy 錯誤 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[工作流：自訂操作事件]** 修復自訂操作工作流作為子流程執行時掛起的問題 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[工作流：審批]**

  - 修復因節點類型篩選導致查詢結果不顯示的問題 by @mytharcher
  - 新增遺漏的參數，以避免提交新審批時關聯資料未更新 by @mytharcher
  - 修復手動執行審批工作流時拋出錯誤的問題 by @mytharcher
  - 修復因新增或委派時 `dataAfter` 值缺失導致的錯誤 by @mytharcher
  - 修復 ACL 問題：當用戶無權限時，不應建立或更新關聯值 by @mytharcher
  - 清理審批操作中的關聯值，以避免任何超出權限的資料操作 by @mytharcher
  - 修復 appends 參數被 ACL 過濾的問題 by @mytharcher

### [v2.1.0-beta.6](https://www.nocobase.com/en/blog/v2.1.0-beta.6)

*發布日期：2026-02-27*

### 🎉 新功能

- **[AI 員工]** 支援使用多個關鍵字搜尋內建文件，並在單次工具呼叫中讀取多個文件 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 改進

- **[客戶端]** 支援表格的彙總配置 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
- **[嵌入 NocoBase]** 提供 sanitize API 以過濾操作中的關聯值 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher

### 🐛 錯誤修復

- **[AI 員工]** 解決 AI 訊息渲染長度為 0 的問題 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[資料視覺化]** 修復圖表插件入口文字的 i18n 問題 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[工作流：JavaScript]** 修復測試案例在 Windows 上無法通過的問題 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[範本列印]** 修復 ACL API 已變更但插件未適配的問題 by @mytharcher
- **[工作流：審批]** 清理審批操作中的關聯值，以避免任何超出權限的資料操作 by @mytharcher
- **[郵件管理員]** 修復圖片內容 ID 格式解析問題 by @jiannx

### [v2.1.0-beta.5](https://www.nocobase.com/en/blog/v2.1.0-beta.5)

*發布日期：2026-02-26*

### 🚀 改進

- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 錯誤修復

- **[AI 員工]** 修復使用 MySQL 資料庫時 AI 對話出錯的問題。 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.7](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*發布日期：2026-02-26*

### 🎉 新功能

- **[AI 員工]** 支援使用多個關鍵字搜尋內建文件，並在單次工具呼叫中讀取多個文件 ([#8718](https://github.com/nocobase/nocobase/pull/8718)) by @2013xile

### 🚀 改進

- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang

### 🐛 錯誤修復

- **[客戶端]** 在行動裝置上，先關閉選單再執行頁面跳轉 ([#8699](https://github.com/nocobase/nocobase/pull/8699)) by @zhangzhonghe
- **[AI LLM: GigaChat]** 修復 GigaChat 插件在 2.0 版本中無法運作的問題。 ([#8707](https://github.com/nocobase/nocobase/pull/8707)) by @cgyrock
- **[AI 員工]**

  - 修復使用 MySQL 資料庫時 AI 對話出錯的問題。 ([#8708](https://github.com/nocobase/nocobase/pull/8708)) by @cgyrock
  - 使用 ContentBlock 統一 chatGPT API 的檔案輸入 ([#8696](https://github.com/nocobase/nocobase/pull/8696)) by @cgyrock
  - 修復用戶在未確認工具執行的情況下發送新訊息時 AI 代理出錯的問題 ([#8697](https://github.com/nocobase/nocobase/pull/8697)) by @cgyrock
- **[AI：知識庫]** 修復 AI 知識庫插件啟動錯誤。 by @cgyrock
- **[郵件管理員]** 圖片渲染錯誤 by @jiannx
