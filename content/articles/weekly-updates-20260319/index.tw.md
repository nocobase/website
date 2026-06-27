---
title: "每週更新｜允許在子表格的彈出視窗中新增 AI 員工"
description: "這是 NocoBase 在 2026 年 3 月 13 日至 3 月 19 日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.19](https://www.nocobase.com/en/blog/v2.0.19)

*發布日期：2026-03-18*

### 🚀 改進

- **[工作流]** 修復優雅關閉時未耗盡所有事件的問題 ([#8894](https://github.com/nocobase/nocobase/pull/8894)) by @mytharcher

### 🐛 錯誤修復

- **[AI 員工]** 修正在文字嵌入模型呼叫中，為 LLM 服務指定的 URL 未生效的問題。([#8892](https://github.com/nocobase/nocobase/pull/8892)) by @cgyrock
- **[操作：匯入記錄 Pro]** 修復子應用程式中 `beforeStop` 事件未觸發的問題 by @mytharcher

### [v2.0.18](https://www.nocobase.com/en/blog/v2.0.18)

*發布日期：2026-03-17*

### 🎉 新功能

- **[AI 員工]**

  - 定時清理 AI 對話檢查點資料。([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock
  - 允許在子表格的彈出視窗中新增 AI 員工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
- **[應用程式管理員]** 支援在應用程式清單中進行篩選<br />為啟動和停止操作新增確認對話框<br />按環境名稱排序應用程式狀態條目 by @2013xile

### 🚀 改進

- **[伺服器]** 改進 pm add 邏輯 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos
- **[客戶端]** 支援在關閉彈出視窗前顯示確認訊息。([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust
- **[非同步任務管理器]** 非同步任務新增支援工作人員發布錯誤訊息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 錯誤修復

- **[客戶端]** 修復子表格中「選擇記錄」彈出視窗在第二次開啟時無法正確載入的問題。([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust
- **[AI 員工]** 修復 AI 插件升級遷移腳本中潛在的未定義變數錯誤。([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock
- **[操作：匯入記錄 Pro]** 修復非同步匯入發生錯誤後，非同步任務未結束的問題 by @cgyrock

### [v2.0.17](https://www.nocobase.com/en/blog/v2.0.17)

*發布日期：2026-03-14*

### 🚀 改進

- **[未定義]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 錯誤修復

- **[客戶端]** 修復重新整理頁面後，某些欄位的預設值未生效的問題。([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
- **[資料庫]** 修復日期欄位的伺服器端驗證問題 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[本地化]** localizationTexts:missing 介面權限異常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
- **[AI：知識庫]** 防止刪除正在使用的向量資料庫和向量儲存。 by @cgyrock

### [v2.0.16](https://www.nocobase.com/en/blog/v2.0.16)

*發布日期：2026-03-12*

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在外部資料來源下連結資料區塊時，可連結欄位未顯示的問題 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  - 修復表格區塊高度無效的問題 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  - 修復新增資料區塊或重新整理頁面會觸發雙重重繪的問題。([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
- **[UI 模板]** 修復使用編輯表單區塊和詳情區塊模板時發生的錯誤。([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[表單草稿]** 修復彈出視窗多次開啟時，表單草稿資料遺失的問題。([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[本地化]** 在頁面的非編輯狀態下，未找到的條目將不會被提交。([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[操作：匯入記錄 Pro]** 修復在匯入設定中無法對重複欄位進行多選的問題。 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.9](https://www.nocobase.com/en/blog/v2.1.0-beta.9)

*發布日期：2026-03-12*

### 🐛 錯誤修復

- **[客戶端]**

  - 修復表格區塊高度無效的問題 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
  - 修復新增資料區塊或重新整理頁面會觸發雙重重繪的問題。([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  - 修正在外部資料來源下連結資料區塊時，可連結欄位未顯示的問題 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
- **[UI 模板]** 修復使用編輯表單區塊和詳情區塊模板時發生的錯誤。([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[表單草稿]** 修復彈出視窗多次開啟時，表單草稿資料遺失的問題。([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[本地化]** 在頁面的非編輯狀態下，未找到的條目將不會被提交。([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[操作：匯入記錄 Pro]** 修復在匯入設定中無法對重複欄位進行多選的問題。 by @jiannx
- **[電子郵件管理員]** 回覆和全部回覆的收件人調整，修復表格欄位新增失敗等問題 by @jiannx
- **[遷移管理員]** 修復自訂規則中無法選擇系統資料表的問題 by @cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.9](https://www.nocobase.com/en/blog/v2.1.0-alpha.9)

*發布日期：2026-03-14*

### 🎉 新功能

- **[AI 員工]** 允許在子表格的彈出視窗中新增 AI 員工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile
- **[AI：MCP 伺服器]** 新增一個 MCP 伺服器插件，用於建構 NocoBase 系統並支援業務工作流程。([#8824](https://github.com/nocobase/nocobase/pull/8824)) by @2013xile

### 🚀 改進

- **[未定義]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) by @gaston98765

### 🐛 錯誤修復

- **[資料庫]** 修復日期欄位的伺服器端驗證問題 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) by @2013xile
- **[客戶端]**

  - 修正在外部資料來源下連結資料區塊時，可連結欄位未顯示的問題 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) by @zhangzhonghe
  - 修復新增資料區塊或重新整理頁面會觸發雙重重繪的問題。([#8851](https://github.com/nocobase/nocobase/pull/8851)) by @gchust
  - 修復重新整理頁面後，某些欄位的預設值未生效的問題。([#8834](https://github.com/nocobase/nocobase/pull/8834)) by @gchust
  - 修復表格區塊高度無效的問題 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) by @jiannx
- **[本地化]**

  - localizationTexts:missing 介面權限異常 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) by @jiannx
  - 在頁面的非編輯狀態下，未找到的條目將不會被提交。([#8841](https://github.com/nocobase/nocobase/pull/8841)) by @jiannx
- **[表單草稿]** 修復彈出視窗多次開啟時，表單草稿資料遺失的問題。([#8858](https://github.com/nocobase/nocobase/pull/8858)) by @gchust
- **[UI 模板]** 修復使用編輯表單區塊和詳情區塊模板時發生的錯誤。([#8859](https://github.com/nocobase/nocobase/pull/8859)) by @gchust
- **[AI：知識庫]** 防止刪除正在使用的向量資料庫和向量儲存。 by @cgyrock
- **[操作：匯入記錄 Pro]** 修復在匯入設定中無法對重複欄位進行多選的問題。 by @jiannx
- **[電子郵件管理員]** 回覆和全部回覆的收件人調整，修復表格欄位新增失敗等問題 by @jiannx
- **[遷移管理員]** 修復自訂規則中無法選擇系統資料表的問題 by @cgyrock
