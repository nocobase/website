---
title: "每週更新｜新增樹狀篩選區塊"
description: "這是 NocoBase 在 2026 年 4 月 9 日至 4 月 16 日期間的功能更新與改進摘要。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.37](https://www.nocobase.com/en/blog/v2.0.37)

*發布日期：2026-04-14*

### 🚀 改進

- **[未定義]**

  - 為法文 README 新增目錄 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
  - 在各語系 README 中新增一致的目錄 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - 為文件首頁新增阿拉伯文翻譯 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765
  - 文件：為入門介紹頁面新增阿拉伯文翻譯 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765
- **[客戶端]** 新增表單必填驗證開關 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

### 🐛 錯誤修復

- **[工具函式庫]** 為伺服器 HTTP 請求發送新增安全控制，以避免可能的 SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
  參考：[環境變數](https://docs.nocobase.com/get-started/installation/env)

### [v2.0.36](https://www.nocobase.com/en/blog/v2.0.36)

*發布日期：2026-04-10*

### 🐛 錯誤修復

- **[客戶端]** 修復子表格新增多對多欄位錯誤 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
- **[流程引擎]** 修復在表格區塊中無法新增外部資料來源的多對一欄位問題 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
- **[通知管理]** 優化工作流程場景下的應用程式內通知發送效能 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

### [v2.0.35](https://www.nocobase.com/en/blog/v2.0.35)

*發布日期：2026-04-09*

### 🐛 錯誤修復

- **[客戶端]** 修復從子表格選擇按鈕開啟的記錄選取彈窗無法正確解析父項目變數值的問題。([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
- **[集合欄位：程式碼]** 修正程式碼欄位的 UI 介面 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.16](https://www.nocobase.com/en/blog/v2.1.0-alpha.16)

*發布日期：2026-04-14*

### 🚀 改進

- **[未定義]**

  - 在各語系 README 中新增一致的目錄 ([#9038](https://github.com/nocobase/nocobase/pull/9038)) by @gaston98765
  - 為法文 README 新增目錄 ([#9037](https://github.com/nocobase/nocobase/pull/9037)) by @saraTabbane
- **[伺服器]** 改進外掛管理器的 swagger API 文件 ([#9080](https://github.com/nocobase/nocobase/pull/9080)) by @2013xile

### 🐛 錯誤修復

- **[AI 員工]** 修復 AI 員工對話中錯誤訊息未顯示的問題 ([#9097](https://github.com/nocobase/nocobase/pull/9097)) by @cgyrock
- **[存取控制]** 為 MCP 伺服器更新 acl swagger ([#9096](https://github.com/nocobase/nocobase/pull/9096)) by @Andrew1989Y

### [v2.1.0-alpha.15](https://www.nocobase.com/en/blog/v2.1.0-alpha.15)

*發布日期：2026-04-10*

### 🎉 新功能

- **[區塊：樹]** 新增樹狀過濾區塊 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx
- **[認證：API 金鑰]** 新增 `pm list` 和 `generate-api-key` 指令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos
- **[AI 員工]**

  - 為 AI 員工新增資料查詢工具與業務分析報告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile
  - 為 AI 員工新增基於 LLM 的網路搜尋工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock
- **[遷移管理]** 支援遷移指令 by @chenos
- **[電子郵件管理]** Gmail 支援使用別名發送郵件 by @jiannx

### 🐛 錯誤修復

- **[流程引擎]** 修復在表格區塊中無法新增外部資料來源的多對一欄位問題 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx
- **[客戶端]**

  - 修復子表格新增多對多欄位錯誤 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx
  - 修復從子表格選擇按鈕開啟的記錄選取彈窗無法正確解析父項目變數值的問題。([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust
  - 修復批次編輯操作會錯誤顯示未儲存變更確認訊息的問題 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust
  - 修復透過彈窗子表格建立記錄後，提交表單時會錯誤顯示二次確認彈窗的問題。([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust
  - 修復 ctx.request 無法覆蓋 Authorization 標頭的問題。([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust
- **[資料來源管理]** 修復從資料庫同步欄位後，部分欄位類型未正確更新的問題 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile
- **[通知管理]** 優化工作流程場景下的應用程式內通知發送效能 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher
- **[集合欄位：程式碼]** 修正程式碼欄位的 UI 介面 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile
- **[工作流程：HTTP 請求節點]** 清理工作流程請求節點結果以避免暴露請求配置，預設新節點僅回傳回應資料，並為失敗請求新增除錯日誌。([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher
- **[AI 員工]**

  - 修復中止 AI 員工推理會導致服務崩潰的問題 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock
  - 修復在配置了 APP_PUBLIC_PATH 的子路徑存取下，AI 員工文件上傳失敗的問題。([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock
  - 修復在 dashscope 上使用 Deepseek 或 MiniMax 模型時的問題 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
