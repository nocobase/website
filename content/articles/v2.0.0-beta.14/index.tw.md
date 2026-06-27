---
title: "NocoBase v2.0.0-beta.14：支援在 AI 聊天中貼上檔案"
description: "v2.0.0-beta.14 版本發行說明"
---

### 🎉 新功能

- **[AI 員工]** 支援在 AI 對話中貼上檔案 ([#8487](https://github.com/nocobase/nocobase/pull/8487)) @heziqiang

### 🚀 改進

- **[客戶端]**
  - 改進多對多子表單，使其初始化時包含一個預設項目，並在留空時避免建立記錄 ([#8473](https://github.com/nocobase/nocobase/pull/8473)) @katherinehhh

  - 改進子表格中附件欄位的上傳與編輯按鈕，以更好地引導使用者點擊上傳 ([#8474](https://github.com/nocobase/nocobase/pull/8474)) @katherinehhh

- **[流程引擎]** 改進 runjs 中的 ctx.libs，支援按需載入，並新增預設函式庫：lodash、math 與 formula ([#8468](https://github.com/nocobase/nocobase/pull/8468)) @gchust

- **[錯誤處理]** 清理 SQL 參考錯誤 ([#8464](https://github.com/nocobase/nocobase/pull/8464)) @2013xile

- **[工作流：審批]** 實作 API 的存取控制，以防止未經授權的資料操作 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復富文本編輯器彈出視窗被遮擋的問題 ([#8443](https://github.com/nocobase/nocobase/pull/8443)) @zhangzhonghe

  - 修復篩選器日期時間值重複的問題 ([#8484](https://github.com/nocobase/nocobase/pull/8484)) @zhangzhonghe

  - 修復表單提交後 nanoid 欄位未重新產生的問題 ([#8491](https://github.com/nocobase/nocobase/pull/8491)) @katherinehhh

  - 修復清除級聯欄位時重複顯示必填驗證訊息的問題 ([#8476](https://github.com/nocobase/nocobase/pull/8476)) @katherinehhh

  - 篩選清單以移除重複項 ([#8431](https://github.com/nocobase/nocobase/pull/8431)) @jiannx

  - 修復在 Chrome 144 中設定選單不顯示的問題 ([#8470](https://github.com/nocobase/nocobase/pull/8470)) @zhangzhonghe

- **[資料庫]**
  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) @chenos

  - 修復：深度更新巢狀關聯 ([#8492](https://github.com/nocobase/nocobase/pull/8492)) @chenos

- **[伺服器]** 修復通用依賴中 `mathjs` 的版本 ([#8475](https://github.com/nocobase/nocobase/pull/8475)) @mytharcher

- **[流程引擎]** 修復連續開啟聯動規則設定與事件流程設定彈出視窗後，關閉內嵌彈出視窗導致錯誤的問題 ([#8368](https://github.com/nocobase/nocobase/pull/8368)) @gchust

- **[資料來源：主要]** 修復從多對多關聯表區塊刪除記錄時，未遵守關聯欄位 `onDelete: 'restrict'` 約束的問題 ([#8493](https://github.com/nocobase/nocobase/pull/8493)) @2013xile

- **[非同步任務管理器]** 修復非同步匯入觸發的工作流程延遲執行的問題 ([#8478](https://github.com/nocobase/nocobase/pull/8478)) @mytharcher

- **[區塊：iframe]** 修復在 Iframe 中加入聚合變數時出現錯誤的問題 ([#8482](https://github.com/nocobase/nocobase/pull/8482)) @zhangzhonghe

- **[UI 模板]** 修復參考模板區塊無法透過事件流程設定資料範圍的問題 ([#8472](https://github.com/nocobase/nocobase/pull/8472)) @gchust

- **[檔案管理]** 修復從請求主體取得的檔案名稱意外被解碼的問題 ([#8481](https://github.com/nocobase/nocobase/pull/8481)) @mytharcher

- **[動作：匯入記錄 Pro]** 修復非同步匯入觸發的工作流程延遲執行的問題 @mytharcher

- **[工作流：Webhook]** 修復未設定主體解析時，主體資料遺失的問題 @mytharcher

- **[模板列印]** 從列印模板設定中移除頁尾按鈕 @katherinehhh

- **[工作流：審批]**
  - 修復將審批退回上一節點卻退回至起始節點的問題 @mytharcher

  - 修復並發導致執行重複恢復的問題 @mytharcher

  - 修復審批任務卡片上欄位未顯示的問題 @zhangzhonghe
