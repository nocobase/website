---
title: "NocoBase v2.1.0-beta.7：更新AI聊天框用戶提示"
description: "v2.1.0-beta.7 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 更新 AI 聊天框使用者提示 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) @heziqiang

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在 DefaultValue 元件中 CollectionField 元件未渲染的問題 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) @mytharcher

  - 修正切換選單時資料區塊未重新整理的問題 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) @gchust

- **[流程引擎]** 修正 ctx.exit 無法終止使用者自訂事件流程執行的問題 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) @gchust

- **[資料庫]** 修正 v2 中欄位自訂正則檢查失敗的問題 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) @jiannx

- **[伺服器]** 透過在靜態資源附加雜湊值來解決快取問題 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) @chenos

- **[存取控制]** 設定 ACL 元資料時使用的資料庫實例不正確 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) @2013xile

- **[AI 員工]**
  - 修正啟用知識庫時 AI 員工聊天錯誤 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) @cgyrock

  - 修正 AI 資料來源設定渲染問題 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) @cgyrock

- **[流程引擎]** 修正 SQL 銷毀錯誤 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) @chenos

- **[工作流：自訂操作事件]** 修正自訂操作工作流作為子流程執行時卡住的問題 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) @mytharcher

- **[工作流：審批]**
  - 修正因節點類型篩選導致查詢結果未顯示的問題 @mytharcher

  - 新增遺漏的參數，避免提交新審批時關聯資料未更新 @mytharcher

  - 修正手動執行審批工作流時拋出錯誤的問題 @mytharcher

  - 修正新增或委派時因缺少 `dataAfter` 值而拋出錯誤的問題 @mytharcher

  - 修正 ACL 問題：當使用者無權限時，不應建立或更新關聯值 @mytharcher

  - 清理審批操作中的關聯值，以避免任何超出權限的資料操作 @mytharcher

  - 修正 ACL 對 appends 參數進行篩選的問題 @mytharcher
