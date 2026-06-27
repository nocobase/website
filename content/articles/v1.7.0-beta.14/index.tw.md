---
title: "NocoBase v1.7.0-beta.14：新增本地化模組"
description: "v1.7.0-beta.14 版本發行說明"
---

### 🎉 新功能

- **[UI Schema 儲存]** 新增 UISchema 本地化模組，支援 Schema 標題與說明的自訂翻譯 ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

### 🚀 改進

- **[工具函式]** 為 dayjs 新增 duration 擴充功能 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher

- **[客戶端]**
  - 支援在篩選元件中搜尋欄位 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher

  - 為 `Input` 與 `Variable.TextArea` 新增 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher

- **[工作流程]** 優化儲存任務邏輯 ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher

- **[錯誤處理]** 支援在 AppError 元件中自訂標題 ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66

- **[IP 限制]** 更新 IP 限制訊息內容 by @sheldon66

- **[檔案儲存：S3(Pro)]** 支援在儲存設定中使用全域變數 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 篩選表單中的關聯欄位在頁面重新整理後因未攜帶 x-data-source 而報錯 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe

  - 樹狀集合中甘特圖區塊的資料問題 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh

  - 區塊模板設定頁面標題與選單之間的空白區域 ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust

  - 條件列表為空時，使用「任一」條件的規則未生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh

  - x-disabled 屬性在表單欄位上未生效 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh

  - URL 參數包含中文字元時變數解析失敗 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh

  - 欄位標籤顯示問題，避免被冒號截斷 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh

- **[動作：匯出記錄]** 變更分頁後匯出資料時遺漏篩選參數 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh

- **[使用者]** 解析使用者個人資料表單結構的問題 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile

- **[行動端]** 行動裝置上使用「包含」篩選的單選欄位不支援多選 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh

- **[存取控制]** 修正角色聯集計算邏輯 ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie

- **[區塊：模板]** 從模板建立區塊後，修改並刪除模板與區塊中的相同欄位可能導致渲染錯誤 ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust

- **[電子郵件管理員]**
  - 修正遺漏的 await 呼叫 by @jiannx

  - 修正電子郵件管理權限無法檢視郵件列表的問題 by @jiannx

- **[檔案儲存：S3(Pro)]**
  - 修正遺漏的 await 呼叫 by @jiannx

  - 將 Logo 上傳至 S3 Pro 儲存（設為預設）時向使用者拋出錯誤 by @mytharcher

- **[工作流程：審批]** 修正遷移後 `updatedAt` 變更的問題 by @mytharcher

- **[遷移管理員]** 部分環境中遷移記錄的建立時間顯示錯誤 by @gchust
