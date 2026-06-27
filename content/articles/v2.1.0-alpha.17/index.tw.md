---
title: "NocoBase v2.1.0-alpha.17：重構 NocoBase CLI"
description: "v2.1.0-alpha.17 版本發行說明"
---

### 🎉 新功能

- **[cli]** 重構 NocoBase CLI ([#9122](https://github.com/nocobase/nocobase/pull/9122)) by @chenos

- **[AI 員工]** 提升 AI 員工解析上傳文件的能力 ([#9126](https://github.com/nocobase/nocobase/pull/9126)) by @cgyrock

### 🚀 改進

- **[未定義]**
  - 同步翻譯環境變數與叢集模式文件，使其與最新中文更新保持一致。 ([#9115](https://github.com/nocobase/nocobase/pull/9115)) by @mytharcher

  - 文件：為入門介紹頁面新增阿拉伯文翻譯 ([#9044](https://github.com/nocobase/nocobase/pull/9044)) by @gaston98765

  - 為文件首頁新增阿拉伯文翻譯 ([#9043](https://github.com/nocobase/nocobase/pull/9043)) by @gaston98765

- **[logger]** 在請求日誌中新增 `referer` 資訊 ([#9110](https://github.com/nocobase/nocobase/pull/9110)) by @2013xile

- **[client]** 新增表單必填驗證開關 ([#9060](https://github.com/nocobase/nocobase/pull/9060)) by @jiannx

- **[工作流：人工節點]** 在工作流任務相關集合上使用 `simplePagination` 以提升列表效能 ([#9117](https://github.com/nocobase/nocobase/pull/9117)) by @mytharcher

- **[AI 員工]** AI 員工區塊選取後，將表單附件填入上傳區域 ([#9127](https://github.com/nocobase/nocobase/pull/9127)) by @cgyrock

- **[工作流：審批]** 在 `approvals` 與 `approvalRecords` 集合上使用 `simplePagination` 以提升列表效能 by @mytharcher

### 🐛 錯誤修復

- **[client]**
  - 修復欄位規則配置中單選欄位的可選選項為空的問題 ([#9119](https://github.com/nocobase/nocobase/pull/9119)) by @jiannx

  - 修正在欄位值設定中關聯欄位元件不正確的問題。 ([#9063](https://github.com/nocobase/nocobase/pull/9063)) by @gchust

  - 修正表單中子表格的預設值設定不正確的問題。 ([#9087](https://github.com/nocobase/nocobase/pull/9087)) by @gchust

- **[utils]** 為伺服器 HTTP 請求發送新增安全控制，以避免可能的 SSRF ([#9079](https://github.com/nocobase/nocobase/pull/9079)) by @mytharcher
參考：[環境變數](https://docs.nocobase.com/get-started/installation/env)
- **[工作流：循環節點]** 修正工作流節點的驗證 ([#9111](https://github.com/nocobase/nocobase/pull/9111)) by @mytharcher

- **[通知：應用內訊息]** 修正接收者選取元件運作不正確的問題 ([#9123](https://github.com/nocobase/nocobase/pull/9123)) by @mytharcher

- **[IdP：OAuth]** 修正一般 API 請求的 OAuth 存取 ([#9120](https://github.com/nocobase/nocobase/pull/9120)) by @2013xile

- **[AI 員工]**
  - 修正彙總查詢排序被 ACL 丟棄的問題 ([#9099](https://github.com/nocobase/nocobase/pull/9099)) by @2013xile

  - 修正 google-gen-ai 的 LLM 服務中 baseURL 設定未生效的問題 ([#9107](https://github.com/nocobase/nocobase/pull/9107)) by @cgyrock

- **[電子郵件管理員]** 移除郵件成功發送後的表單關閉提示 by @jiannx
