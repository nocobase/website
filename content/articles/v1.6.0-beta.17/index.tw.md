---
title: "NocoBase v1.6.0-beta.17：為選單項目和表格標題添加工具提示配置"
description: "v1.6.0-beta.17 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 為選單項目與表格標題新增工具提示設定 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038

- **[資料視覺化]** 圖表查詢支援 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

- **[AI 整合]** 全新插件：AI 整合 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
- **[AI 整合 (EE)]** 全新插件：AI 整合 (EE) by @2013xile
參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
### 🚀 改進

- **[客戶端]**
  - 為按鈕新增防抖處理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

  - 讓選單能根據螢幕寬度自適應 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe

- **[工作流程]** 允許在資料庫事件中跳過觸發集合工作流程 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

- **[工作流程：聚合節點]** 為基於雙精度類型的聚合數字新增四捨五入處理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

- **[動作：匯入記錄 Pro]** Pro 匯入按鈕支援進階選項 by @katherinehhh

- **[工作流程：JavaScript]** 支援從絕對路徑引入套件 by @mytharcher

- **[檔案儲存：S3(Pro)]** 若找不到儲存空間，嘗試重新載入儲存設定 by @jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 選單標題的自訂翻譯無效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe

  - 與時區相關的問題導致日期選擇器少了一小時 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh

  - 繼承集合欄位缺少可排序設定 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

  - 附件欄位的儲存設定下拉選單未顯示選項 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh

  - 隱藏標籤時，子表單元件未與主表單對齊 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh

  - 在集合繼承的彈出視窗中，關聯區塊未渲染 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh

  - 解決開啟包含全高區塊的頁面頁籤時出現的滾動條問題 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh

  - 修復建立檔案集合時拋出的錯誤 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher

- **[資料庫]** 修復當關聯欄位中的來源鍵為數字字串時，擷取關聯集合記錄時發生的錯誤 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

- **[WEB 客戶端]**
  - 在路由管理表格中新增頁籤頁面未生效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe

  - 在路由表格新增頁面後，頁面顯示為空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe

- **[使用者]**
  - 沒有使用者管理權限的使用者檢視自己的個人資料時出現「無權限」錯誤 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile

  - 在使用者管理中更新系統設定時出現「無權限」錯誤 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile

- **[存取控制]** 在權限管理表格中，頁籤頁面名稱為空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe

- **[AI 整合]** LLM 提供者的預設 `baseURL` 為 `undefined` 的問題 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile

- **[工作流程]** 修復取得任務的 ACL ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

- **[工作流程：自訂動作事件]** 修復執行後的地區設定與集合可修改問題 by @mytharcher

- **[動作：匯入記錄 Pro]** 使用額外選項來決定是否觸發工作流程 by @mytharcher

- **[動作：匯出記錄 Pro]** Pro 匯出動作缺少排序參數 by @katherinehhh
