---
title: "NocoBase v2.0.52：在 v2 中新增當前使用者語言變數"
description: "v2.0.52 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 在 v2 中新增當前使用者語言變數 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) - 作者：@katherinehhh

  - 為 v2 表單中的日期欄位新增日期範圍限制選項 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) - 作者：@katherinehhh

### 🚀 改進

- **[客戶端]** 在一對多表格區塊的關聯選擇對話框中，排除已關聯的記錄 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) - 作者：@katherinehhh

- **[部門]** 透過新增圖示與調整間距，最佳化部門列表樣式 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) - 作者：@katherinehhh

- **[AI：知識庫]** 知識庫的唯一識別碼可在建立時進行設定 - 作者：@cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修復無法移除舊版預設值設定的問題。([#9470](https://github.com/nocobase/nocobase/pull/9470)) - 作者：@gchust

  - 修復無法為關聯的選擇欄位選取選項的問題。([#9088](https://github.com/nocobase/nocobase/pull/9088)) - 作者：@gchust

  - 修正在表格區塊事件流程中取消選取行資料時，目標區塊資料範圍設定錯誤的問題。([#9443](https://github.com/nocobase/nocobase/pull/9443)) - 作者：@gchust

  - 修復當篩選表單有預設值時，表格請求重複發送的問題 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) - 作者：@zhangzhonghe

  - 修復 V2 連動規則以支援為欄位設定可選選項 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) - 作者：@jiannx

  - 修正在 v2 表格區塊中變更關聯欄位標題欄位時發生的錯誤 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) - 作者：@katherinehhh

  - 修復操作按鈕連動規則偶爾無法生效的問題。([#9430](https://github.com/nocobase/nocobase/pull/9430)) - 作者：@gchust

  - 在 v2 子表格中隱藏對多關聯欄位的子表格元件 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) - 作者：@katherinehhh

- **[伺服器]** 修復（檔案管理器）：強制下載本地/公開儲存中的動態內容檔案 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) - 作者：@mytharcher

- **[AI 員工]** 修復 Ollama 測試飛行需要輸入金鑰的問題 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) - 作者：@cgyrock

- **[圖形化集合管理器]** 修復圖形介面自動佈局拋出更新動作篩選器錯誤 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) - 作者：@katherinehhh

- **[工作流程]** 修復：在 FlowModel 工作流程綁定對話框中，為操作與自訂動作事件恢復輔助文字 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) - 作者：@mytharcher

- **[部門]** 修復在使用者與權限設定中，「新增使用者」與「新增部門」按鈕的翻譯衝突 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) - 作者：@katherinehhh

- **[集合欄位：Markdown(Vditor)]** 修復在水平表單佈局中，Markdown 欄位的工具提示被隱藏的問題 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) - 作者：@katherinehhh

- **[WEB 客戶端]** 修復使用翻譯後標籤進行路由類型篩選的問題 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) - 作者：@zhangzhonghe

- **[工作流程：審批]**
  - 修復在審批流程設定中出現 JS 欄位的問題 - 作者：@zhangzhonghe

  - 修復行動裝置上的審批表單佈局 - 作者：@zhangzhonghe

  - 修復委派審批任務時，審批記錄索引重複的問題。 - 作者：@mytharcher

- **[備份管理器]** 修復當檔案找不到時，備份會因錯誤而失敗的問題。 - 作者：@gchust
