---
title: "NocoBase v2.0.0-alpha.64：支援 Gemini-3 模型與函式呼叫思考簽章"
description: "v2.0.0-alpha.64 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 支援 Gemini-3 模型，具備函式呼叫思維簽章功能 ([#8377](https://github.com/nocobase/nocobase/pull/8377)) - 作者：@heziqiang

### 🚀 改進

- **[AI 員工]**
  - 改善 AI 對 LLM 服務與模型的錯誤處理機制 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) - 作者：@heziqiang

  - 支援系統提示詞的自訂編輯與自動更新 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) - 作者：@heziqiang

- **[檔案管理]** 為伺服器端擷取 OSS 檔案新增請求選項，以因應需要額外參數或標頭的情況 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) - 作者：@mytharcher

### 🐛 錯誤修復

- **[日誌]** 修正列印系統日誌時，額外錯誤資訊被捨棄的問題 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) - 作者：@cgyrock

- **[客戶端]**
  - 修正從記錄選擇器元件切換至選擇元件後，關聯欄位仍可開啟彈出視窗的問題 ([#8375](https://github.com/nocobase/nocobase/pull/8375)) - 作者：@gchust

  - 修正詳細區塊、編輯表單區塊與列表區塊在變更分頁後，連結規則未重新執行的問題 ([#8366](https://github.com/nocobase/nocobase/pull/8366)) - 作者：@gchust

  - 修正來回切換欄位元件時，已設定的子表格/子表單欄位無法顯示的問題 ([#8365](https://github.com/nocobase/nocobase/pull/8365)) - 作者：@gchust

- **[工作流程]**
  - 修正工作流程抄送節點詳細區塊中的連結規則問題 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) - 作者：@zhangzhonghe

  - 修正工作流程刪除後，執行頁面崩潰的問題 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) - 作者：@mytharcher

- **[存取控制]** 修正處理關聯欄位權限時，資料來源解析錯誤的問題 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) - 作者：@2013xile
