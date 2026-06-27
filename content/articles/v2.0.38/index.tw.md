---
title: "NocoBase v2.0.38：提升AI員工解析上傳文件的能力"
description: "v2.0.38 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]** 提升 AI 員工解析上傳文件的能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 改進

- **[日誌]** 在請求日誌中新增 `referer` 資訊 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile

- **[未定義]** 同步翻譯環境變數與叢集模式文件，使其與最新中文更新保持一致。([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher

- **[AI 員工]** AI 員工區塊選取後，將表單附件填入上傳區域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock

- **[工作流：人工節點]** 在工作流任務相關集合中使用 `simplePagination` 以提升列表效能 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher

- **[工作流：審批]** 在 `approvals` 與 `approvalRecords` 集合中使用 `simplePagination` 以提升列表效能 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復欄位規則配置中單選欄位的可選選項為空的問題 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx

  - 修復表單中子表格預設值設定不正確的問題。([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust

- **[通知：應用內訊息]** 修復接收者選擇元件運作不正確的問題 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher

- **[AI 員工]** 修復 google-gen-ai 的 LLM 服務中 baseURL 設定未生效的問題 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock

- **[郵件管理]** 移除郵件發送成功後的表單關閉提示 by @jiannx
