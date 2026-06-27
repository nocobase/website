---
title: "NocoBase v1.6.17：支援在篩選元件中搜尋欄位"
description: "v1.6.17 版本發行說明"
---

### 🚀 改進項目

- **[utils]** 為 dayjs 新增 duration 擴充功能 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) - @mytharcher

- **[client]**
  - 支援在篩選元件中搜尋欄位 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) - @mytharcher

  - 為 `Input` 和 `Variable.TextArea` 新增 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) - @mytharcher

- **[錯誤處理]** 支援在 AppError 元件中自訂標題。([#6409](https://github.com/nocobase/nocobase/pull/6409)) - @sheldon66

- **[IP 限制]** 更新 IP 限制訊息內容。 - @sheldon66

- **[檔案儲存：S3(Pro)]** 支援在儲存設定中使用全域變數 - @mytharcher

### 🐛 錯誤修復

- **[client]**
  - 當條件清單為空時，使用「任一」條件的規則未生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) - @katherinehhh

  - 樹狀集合中甘特圖區塊的資料問題 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) - @katherinehhh

  - 篩選表單中的關聯欄位在頁面重新整理後因未攜帶 x-data-source 而報錯 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) - @zhangzhonghe

  - URL 參數包含中文字元時，變數解析失敗 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) - @katherinehhh

- **[使用者]** 解析使用者個人資料表單結構的問題 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) - @2013xile

- **[行動端]** 行動端上使用「包含」篩選條件的單選欄位不支援多重選取 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) - @katherinehhh

- **[動作：匯出記錄]** 變更分頁後匯出資料時缺少篩選參數 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) - @katherinehhh

- **[電子郵件管理]** 修復電子郵件管理權限無法檢視郵件清單的問題 - @jiannx

- **[檔案儲存：S3(Pro)]** 將 Logo 上傳至 S3 Pro 儲存（設為預設）時向使用者拋出錯誤 - @mytharcher

- **[工作流程：審批]** 修復遷移後 `updatedAt` 變更的問題 - @mytharcher

- **[遷移管理]** 在某些環境中遷移記錄的建立時間顯示不正確 - @gchust
