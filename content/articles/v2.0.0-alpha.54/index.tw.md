---
title: "NocoBase v2.0.0-alpha.54：建立集合時，可變更預設 id 欄位類型"
description: "v2.0.0-alpha.54 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 建立資料表時，可變更預設 ID 欄位類型 ([#8129](https://github.com/nocobase/nocobase/pull/8129)) @cgyrock

### 🚀 改進

- **[客戶端]**
  - 將表格欄位寬度改為使用可選選項 ([#8188](https://github.com/nocobase/nocobase/pull/8188)) @katherinehhh

  - 透過 maxTagCount 改善 recordPicker 樣式 ([#8175](https://github.com/nocobase/nocobase/pull/8175)) @katherinehhh

  - 優化配置選項（區塊、欄位、操作） ([#8141](https://github.com/nocobase/nocobase/pull/8141)) @katherinehhh

- **[錯誤處理]** 在 SQL 語法錯誤時，不暴露原始資料庫錯誤訊息，以避免洩漏資料庫類型 ([#8195](https://github.com/nocobase/nocobase/pull/8195)) @2013xile

- **[區塊：地圖]** 支援地圖欄位在文字顯示模式下的文字溢出省略 ([#8189](https://github.com/nocobase/nocobase/pull/8189)) @katherinehhh

- **[工作流程]** 支援在複製工作流程時使用舊版配置建立新流程 ([#8165](https://github.com/nocobase/nocobase/pull/8165)) @mytharcher

- **[存取控制]** 禁止將根角色指派給使用者 ([#8180](https://github.com/nocobase/nocobase/pull/8180)) @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 修復當角色擁有建立權限時，建立表單中未顯示提交按鈕的問題 ([#8190](https://github.com/nocobase/nocobase/pull/8190)) @katherinehhh

  - 防止在未選取任何項目時提交，導致清除現有子表格/子表單資料 ([#8172](https://github.com/nocobase/nocobase/pull/8172)) @katherinehhh

  - 防止在建立表單配置中出現資料範圍設定 ([#8176](https://github.com/nocobase/nocobase/pull/8176)) @katherinehhh

  - 無法儲存頁籤事件流程 ([#8168](https://github.com/nocobase/nocobase/pull/8168)) @chenos

  - 移除頁籤隱藏後的多餘間距 ([#8167](https://github.com/nocobase/nocobase/pull/8167)) @chenos

  - 修正在關聯記錄選擇器中，已選選項的篩選不正確 ([#8151](https://github.com/nocobase/nocobase/pull/8151)) @katherinehhh

  - 修復 tableoid 欄位在表單區塊中的渲染問題 ([#8177](https://github.com/nocobase/nocobase/pull/8177)) @katherinehhh

- **[伺服器端]**
  - 更新 license-kit 至最新版本 ([#8173](https://github.com/nocobase/nocobase/pull/8173)) @jiannx

  - 支援外部資料來源的 Snowflake ID（53 位元）欄位 ([#8185](https://github.com/nocobase/nocobase/pull/8185)) @2013xile

- **[區塊：地圖]** 修正在選單切換後地圖縮放級別不正確的問題 ([#8193](https://github.com/nocobase/nocobase/pull/8193)) @katherinehhh

- **[工作流程]** 修正在記錄列表中僅顯示一筆記錄以供手動執行的問題 ([#8187](https://github.com/nocobase/nocobase/pull/8187)) @mytharcher

- **[資料視覺化]** 解決 SQL 模式下選取外部資料來源的問題；<br/>解決圖表區塊在資料擷取期間的載入狀態問題；<br/>解決空白圖表區塊取消配置的問題；([#8169](https://github.com/nocobase/nocobase/pull/8169)) @heziqiang

- **[AI 員工]** 解決 AI 訊息換行問題 ([#8096](https://github.com/nocobase/nocobase/pull/8096)) @heziqiang

- **[授權設定]**
  - 修復 plugin-license 的 TypeScript 建置異常 ([#8183](https://github.com/nocobase/nocobase/pull/8183)) @jiannx

  - 授權最佳化與新增提示資訊 ([#7993](https://github.com/nocobase/nocobase/pull/7993)) @jiannx

- **[檔案管理]** 修正在 OSS 上預覽 `.txt` 檔案時字元編碼錯誤的問題 ([#8161](https://github.com/nocobase/nocobase/pull/8161)) @mytharcher

- **[資料來源：外部 SQL Server]** 修復 `encrypt` 和 `trustServerCertificate` 選項不可用的問題 @2013xile

- **[資料表：連接外部資料 (FDW)]** 修復載入大寫名稱資料表時失敗的問題 @2013xile

- **[工作流程：審批]** 修復因審批操作而導致不相關審批記錄的狀態被錯誤變更為 `UNPROCESSED` 的問題 @mytharcher
