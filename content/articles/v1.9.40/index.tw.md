---
title: "NocoBase v1.9.40：在 Microsoft 上新增更多可預覽的檔案類型"
description: "v1.9.40 版本發布說明"
---

### 🚀 改進

- **[Office 檔案預覽器]** 新增更多可在 Microsoft 上預覽的檔案類型 ([#8500](https://github.com/nocobase/nocobase/pull/8500)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在表單提交後 nanoid 欄位未重新產生的問題 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) - 感謝 @katherinehhh

  - 修正清除階層式欄位時重複顯示必填驗證訊息的問題 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) - 感謝 @katherinehhh

- **[資料庫]**
  - 修正重新載入資料集合後，使用 `empty` 運算子進行篩選時發生的錯誤 ([#8496](https://github.com/nocobase/nocobase/pull/8496)) - 感謝 @2013xile

  - 修正：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) - 感謝 @chenos

- **[檔案管理員]** 修正從請求主體取得的檔案名稱意外變成解碼字串的問題 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) - 感謝 @mytharcher

- **[資料來源：主要]** 修正從多對多關聯表格區塊刪除記錄時，未遵守關聯欄位 `onDelete: 'restrict'` 約束條件的問題 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) - 感謝 @2013xile

- **[區塊：iframe]** 修正將彙總變數新增至 Iframe 時發生的錯誤 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) - 感謝 @zhangzhonghe

- **[工作流程：Webhook]** 修正當未設定主體解析時，主體資料遺失的問題 - 感謝 @mytharcher

- **[範本列印]** 修正當角色為聯集時，列印按鈕權限邏輯不正確的問題 - 感謝 @jiannx

- **[工作流程：審核]**
  - 修正因並發導致執行重複恢復的問題 - 感謝 @mytharcher

  - 修正將審核退回至上一個節點時，卻退回至起始節點的問題 - 感謝 @mytharcher

- **[遷移管理員]** 修正因記錄遷移錯誤例外中包含過大 SQL 陳述式，可能導致程序凍結的問題 - 感謝 @cgyrock
