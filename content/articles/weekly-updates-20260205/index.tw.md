---
title: "每週更新｜優化與錯誤修復"
description: "這是 NocoBase 在 2026 年 1 月 29 日至 2 月 5 日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.42](https://www.nocobase.com/en/blog/v1.9.42)

*發布日期：2026-02-02*

### 🚀 改進

- **[認證：釘釘]** 使用 `userid` 作為使用者關聯的預設鍵，同時保留與依賴手機號碼的現有認證器的相容性 @2013xile

### 🐛 錯誤修復

- **[工作流：審批]** 修復由清單載入中的 JSON 欄位（MySQL）引起的效能問題 @mytharcher
- **[企業微信]** 修復當缺少手機號碼時使用者無法自動註冊的問題 @2013xile

### [v1.9.41](https://www.nocobase.com/en/blog/v1.9.41)

*發布日期：2026-02-02*

### 🚀 改進

- **[客戶端]** 支援為 `ResourceActionProvider` 停用冗餘的預設附加參數（[#8527](https://github.com/nocobase/nocobase/pull/8527)）@2013xile

### 🐛 錯誤修復

- **[工作流]** 為集合記錄選擇元件增加容錯處理，避免在集合被刪除時拋出錯誤（[#8528](https://github.com/nocobase/nocobase/pull/8528)）@mytharcher
- **[檔案管理]** 確保本地儲存的檔案路徑安全，避免存取路徑超出文件根目錄（[#8539](https://github.com/nocobase/nocobase/pull/8539)）@mytharcher
- **[工作流：子流程]** 修復工作流連結的路徑 @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.19](https://www.nocobase.com/en/blog/v2.0.0-beta.19)

*發布日期：2026-02-05*

### 🎉 新功能

- **[認證：釘釘]** 允許使用 `unionId` 綁定使用者 @2013xile

### 🚀 改進

- **[客戶端]** 在內聯可編輯子表格中將欄位寬度設定調整為下拉選擇（[#8561](https://github.com/nocobase/nocobase/pull/8561)）@katherinehhh
- **[集合欄位：Markdown(Vditor)]** 在元件設定中新增了設定預設編輯模式的配置選項。（[#8408](https://github.com/nocobase/nocobase/pull/8408)）@Cyx649312038
- **[多空間]** 多空間權限控制存取 ACL @jiannx
- **[AI：知識庫]** 優化建置輸出以減少 plugin-ai-knowledge-base 的套件大小。@cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在編輯表單中使用關聯記錄選擇器的「快速建立」會覆蓋現有表單資料的問題。（[#8567](https://github.com/nocobase/nocobase/pull/8567)）@gchust
  - 修復 Grid 佈局中的空白間距問題（[#8535](https://github.com/nocobase/nocobase/pull/8535)）@zhangzhonghe
  - 修復啟用樹狀表格後需要重新整理頁面才能新增子記錄的問題（[#8574](https://github.com/nocobase/nocobase/pull/8574)）@katherinehhh
  - 修復子表格（內聯編輯）中欄位寬度未更新；多行文字輸入未隨欄位寬度調整大小的問題（[#8573](https://github.com/nocobase/nocobase/pull/8573)）@katherinehhh
  - 修正在「建立新」操作彈出視窗中錯誤顯示「表單（新增）」選單的問題。（[#8562](https://github.com/nocobase/nocobase/pull/8562)）@gchust
- **[流程引擎]**

  - 修正在 JS 區塊中無法正確匯入某些第三方庫的問題。（[#8545](https://github.com/nocobase/nocobase/pull/8545)）@gchust
  - 修正在切換頁面後提交表單不會重新整理頁面的問題。（[#8554](https://github.com/nocobase/nocobase/pull/8554)）@gchust
- **[UI 模板]** 修復為關聯欄位「新增」表單重新開啟並提交已儲存的彈出視窗模板時出現錯誤。（[#8564](https://github.com/nocobase/nocobase/pull/8564)）@gchust
- **[集合欄位：附件(URL)]** 修復附件 URL 欄位檔名顯示配置在編輯表單中不起作用的問題（[#8571](https://github.com/nocobase/nocobase/pull/8571)）@katherinehhh
- **[AI 員工]** 修復 LLM 節點發送訊息失敗的問題（[#8569](https://github.com/nocobase/nocobase/pull/8569)）@2013xile
- **[操作：匯入記錄]** 修復匯入操作的漏洞（[#8544](https://github.com/nocobase/nocobase/pull/8544)）@mytharcher
- **[工作流：自訂操作事件]** 修復觸發自訂工作流時參數和負載不正確的問題 @mytharcher
- **[多空間]**

  - 新增遷移腳本以移除空間欄位中的 x-ready-pretty @jiannx
  - 移除空間欄位的 read-pretty 屬性 @jiannx
- **[工作流：審批]** 修復由清單載入中的 JSON 欄位（MySQL）引起的效能問題 @mytharcher

### [v2.0.0-beta.18](https://www.nocobase.com/en/blog/v2.0.0-beta.18)

*發布日期：2026-02-02*

### 🎉 新功能

- **[流程引擎]** 支援 env.ESM_CDN_BASE_URL（[#8529](https://github.com/nocobase/nocobase/pull/8529)）@chenos

### 🚀 改進

- **[ACL]** ACL 新增 generalFixedParams 方法（[#8363](https://github.com/nocobase/nocobase/pull/8363)）@jiannx
- **[客戶端]** 支援為 `ResourceActionProvider` 停用冗餘的預設附加參數（[#8527](https://github.com/nocobase/nocobase/pull/8527)）@2013xile
- **[認證：釘釘]** 使用 `userid` 作為使用者關聯的預設鍵，同時保留與依賴手機號碼的現有認證器的相容性 @2013xile

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在跨彈出視窗重新整理目標區塊時事件流應用失敗的問題。（[#8541](https://github.com/nocobase/nocobase/pull/8541)）@gchust
  - 修正在首次開啟和關閉彈出視窗後頁面資料被錯誤重新整理的問題。（[#8548](https://github.com/nocobase/nocobase/pull/8548)）@gchust
  - 修正在提交表單後導致資料區塊重複重新整理的問題。（[#8531](https://github.com/nocobase/nocobase/pull/8531)）@gchust
  - 修復 nanoid 欄位在建立提交後未重新產生預設值的問題（[#8538](https://github.com/nocobase/nocobase/pull/8538)）@katherinehhh
  - 修復為級聯選擇器欄位模型設定預設值時顯示不正確的問題（[#8537](https://github.com/nocobase/nocobase/pull/8537)）@katherinehhh
- **[流程引擎]** 修復 runjs 中因錯誤分類為 AMD 模組而導致某些 ESM 庫載入不正確的問題。（[#8536](https://github.com/nocobase/nocobase/pull/8536)）@gchust
- **[檔案管理]** 確保本地儲存的檔案路徑安全，避免存取路徑超出文件根目錄（[#8539](https://github.com/nocobase/nocobase/pull/8539)）@mytharcher
- **[工作流]** 為集合記錄選擇元件增加容錯處理，避免在集合被刪除時拋出錯誤（[#8528](https://github.com/nocobase/nocobase/pull/8528)）@mytharcher
- **[AI 員工]** 修正在 AI 資料建模期間自動呼叫工具時發生的異常（[#8532](https://github.com/nocobase/nocobase/pull/8532)）@cgyrock
- **[操作：匯入記錄 Pro]** 修復匯入結果中的計數數字和訊息翻譯 @mytharcher
- **[工作流：子流程]** 修復工作流連結的路徑 @mytharcher
- **[模板列印]** 修復模板列印操作配置中的欄位列表顯示問題 @katherinehhh
- **[工作流：審批]**

  - 修復當審批人群工作流被停用時，為使用者新增角色會拋出錯誤的問題 @mytharcher
  - 增加對已刪除工作流的容錯處理，避免在任務列表中載入錯誤 @mytharcher
- **[企業微信]** 修復當缺少手機號碼時使用者無法自動註冊的問題 @2013xile
