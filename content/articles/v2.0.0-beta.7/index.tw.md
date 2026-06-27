---
title: "NocoBase v2.0.0-beta.7：為基礎任務管理器添加進程級並發控制"
description: "v2.0.0-beta.7 版本發布說明"
---

### 🎉 新功能

- **[測試]** 為基礎任務管理器新增進程層級並發控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) - @cgyrock

- **[AI 員工]** 支援具備函數呼叫思維簽章的 Gemini-3 模型 ([#8377](https://github.com/nocobase/nocobase/pull/8377)) - @heziqiang

### 🚀 改進

- **[流程引擎]** 為 GridModel 新增 `rowOrder` 以確保行順序一致 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) - @zhangzhonghe

- **[AI 員工]**
  - 支援系統提示詞的自訂編輯與自動更新 ([#8378](https://github.com/nocobase/nocobase/pull/8378)) - @heziqiang

  - 改善 AI 對 LLM 服務與模型的錯誤處理 ([#8351](https://github.com/nocobase/nocobase/pull/8351)) - @heziqiang

- **[檔案管理]** 若伺服器端需要額外參數或標頭，新增用於擷取 OSS 檔案的要求選項 ([#8372](https://github.com/nocobase/nocobase/pull/8372)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在從記錄選擇器元件切換為選擇元件後，關聯欄位仍可能開啟彈出視窗的問題。([#8375](https://github.com/nocobase/nocobase/pull/8375)) - @gchust

  - 修正詳細區塊、編輯表單區塊與列表區塊在變更分頁後，連結規則未重新執行的問題。([#8366](https://github.com/nocobase/nocobase/pull/8366)) - @gchust

  - 修正已配置的子表格/子表單欄位，在來回切換欄位元件時不會顯示的問題。([#8365](https://github.com/nocobase/nocobase/pull/8365)) - @gchust

- **[日誌]** 修正列印系統日誌時，額外錯誤資訊被丟棄的問題 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) - @cgyrock

- **[區塊：範本（已棄用）]** 修正無法存取繼承範本（v1）編輯頁面的問題。([#8376](https://github.com/nocobase/nocobase/pull/8376)) - @gchust

- **[工作流程]**
  - 為工作的 Snowflake ID 新增實例 ID，以避免叢集模式下發生 ID 衝突問題 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) - @mytharcher

  - 修正工作流程抄送節點詳細區塊中的連結規則問題 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) - @zhangzhonghe

  - 修正工作流程刪除後，執行頁面崩潰的問題 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) - @mytharcher

- **[存取控制]** 修正處理關聯欄位權限時，資料來源解析錯誤的問題 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) - @2013xile

- **[資料來源：REST API]** 為請求上下文新增容錯機制，以避免當方法不在上下文中時拋出錯誤 - @mytharcher
