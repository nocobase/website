---
title: "NocoBase v2.1.0-alpha.9：允許在子表格的彈出視窗中新增 AI 員工"
description: "v2.1.0-alpha.9 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]** 允許在子表格的彈出視窗中新增 AI 員工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) - 作者：@2013xile

- **[AI：MCP 伺服器]** 新增 MCP 伺服器外掛，用於建構 NocoBase 系統並支援業務工作流程。([#8824](https://github.com/nocobase/nocobase/pull/8824)) - 作者：@2013xile

### 🚀 改進

- **[未定義]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) - 作者：@gaston98765

### 🐛 錯誤修復

- **[資料庫]** 修復日期欄位的伺服器端驗證問題 ([#8867](https://github.com/nocobase/nocobase/pull/8867)) - 作者：@2013xile

- **[客戶端]**
  - 修復在外部資料來源下連結資料區塊時，可連結欄位未顯示的問題 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) - 作者：@zhangzhonghe

  - 修復新增資料區塊或重新整理頁面會觸發雙重重新整理的問題。([#8851](https://github.com/nocobase/nocobase/pull/8851)) - 作者：@gchust

  - 修復重新整理頁面後，部分欄位的預設值未生效的問題。([#8834](https://github.com/nocobase/nocobase/pull/8834)) - 作者：@gchust

  - 修復表格區塊高度無效的問題 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) - 作者：@jiannx

- **[本地化]**
  - localizationTexts：缺少介面權限例外 ([#8861](https://github.com/nocobase/nocobase/pull/8861)) - 作者：@jiannx

  - 在頁面的非編輯狀態下，未找到的條目將不會被提交。([#8841](https://github.com/nocobase/nocobase/pull/8841)) - 作者：@jiannx

- **[表單草稿]** 修復彈出視窗多次開啟時，表單草稿資料遺失的問題。([#8858](https://github.com/nocobase/nocobase/pull/8858)) - 作者：@gchust

- **[UI 模板]** 修復使用編輯表單區塊和詳情區塊模板時發生的錯誤。([#8859](https://github.com/nocobase/nocobase/pull/8859)) - 作者：@gchust

- **[AI：知識庫]** 防止正在使用的向量資料庫和向量儲存被刪除。 - 作者：@cgyrock

- **[動作：匯入記錄 Pro]** 修復在匯入設定中無法對重複欄位進行多重選擇的問題。 - 作者：@jiannx

- **[電子郵件管理員]** 調整回覆與全部回覆的收件者，修復表格欄位新增失敗等其他問題 - 作者：@jiannx

- **[遷移管理員]** 修復自訂規則中無法選取系統表格的問題 - 作者：@cgyrock
