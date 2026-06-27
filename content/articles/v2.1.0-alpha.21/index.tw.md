---
title: "NocoBase v2.1.0-alpha.21：工作流程新增 AI 員工指令"
description: "v2.1.0-alpha.21 版本發布說明"
---

### 🎉 新功能

- **[區塊：看板]** 看板區塊 v2 ([#9142](https://github.com/nocobase/nocobase/pull/9142)) by @jiannx

- **[AI 員工]** 工作流程新增 AI 員工指令 ([#9025](https://github.com/nocobase/nocobase/pull/9025)) by @cgyrock

- **[驗證：OIDC]** 映射屬性支援自訂欄位 by @chenzhizdt

- **[釘釘]** 釘釘：通知、釘釘內自動登入及使用者同步。 by @chenzhizdt

### 🚀 改進

- **[建置]** 知識庫支援透過 ZIP 批次上傳檔案 ([#9206](https://github.com/nocobase/nocobase/pull/9206)) by @cgyrock

- **[ai]** AI 員工與知識庫現在支援上傳更多檔案類型（.xlsx、.xls、.csv、.md、.json）([#9172](https://github.com/nocobase/nocobase/pull/9172)) by @cgyrock

- **[工作流程]** 改善執行清單效能 ([#9214](https://github.com/nocobase/nocobase/pull/9214)) by @mytharcher

- **[工作流程：自訂操作事件]** 新增對記錄模式（單筆與多筆）觸發的 ACL 控制 ([#9125](https://github.com/nocobase/nocobase/pull/9125)) by @mytharcher

- **[AI：知識庫]** 知識庫支援透過 ZIP 批次上傳檔案 by @cgyrock

### 🐛 錯誤修復

- **[資料來源管理器]**
  - 修正可為空欄位的同步問題 ([#9189](https://github.com/nocobase/nocobase/pull/9189)) by @2013xile

  - 修正重新同步外部資料來源時，百分比欄位被重設為數值類型的問題 ([#9178](https://github.com/nocobase/nocobase/pull/9178)) by @jiannx

- **[客戶端]**
  - 修正當集合使用非主鍵的唯一鍵時，彈出關聯區塊與彈出記錄變數使用了錯誤的記錄識別碼 ([#9191](https://github.com/nocobase/nocobase/pull/9191)) by @2013xile

  - 修正建立記錄後預設值不會生效的問題。 ([#9185](https://github.com/nocobase/nocobase/pull/9185)) by @gchust

  - 修正「新增分頁」按鈕過於靠近右邊緣的問題 ([#9177](https://github.com/nocobase/nocobase/pull/9177)) by @zhangzhonghe

- **[工作流程：彙總節點]** 修正因驗證規則不正確導致彙總節點無法儲存的問題 ([#9208](https://github.com/nocobase/nocobase/pull/9208)) by @mytharcher

- **[日曆]** 未將日曆操作註冊至其他區塊 ([#9200](https://github.com/nocobase/nocobase/pull/9200)) by @jiannx

- **[AI 員工]**
  - 修正 AI 員工無法在表單中填入關聯欄位值的問題。 ([#9182](https://github.com/nocobase/nocobase/pull/9182)) by @cgyrock

  - 修正 AI 員工指令中的日誌記錄異常 ([#9180](https://github.com/nocobase/nocobase/pull/9180)) by @cgyrock

- **[部門]** 修正重複同步部門無法更新部門排序順序的問題 ([#9173](https://github.com/nocobase/nocobase/pull/9173)) by @2013xile

- **[工作流程：JavaScript]**
  - 修正指令碼在 `node:vm` 模式下執行的安全性問題 ([#9084](https://github.com/nocobase/nocobase/pull/9084)) by @mytharcher

  - 修正設定 JavaScript 節點時拋出錯誤的問題 ([#9169](https://github.com/nocobase/nocobase/pull/9169)) by @mytharcher

- **[多空間]** 修正空間權限驗證中找不到集合的錯誤 by @jiannx

- **[AI：知識庫]** 修正刪除知識庫文件時向量資料庫未同步的問題。 by @cgyrock

- **[工作流程：審批]** 修正審批重新指派搜尋時，查詢使用者範圍超出前 200 位候選人的問題 by @zhangzhonghe

- **[企業微信]** 修正從企業微信同步部門時遺漏部門排序的問題 by @2013xile
