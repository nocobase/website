---
title: "NocoBase v2.0.0-alpha.50：支援附件上傳元件允許多重設定"
description: "v2.0.0-alpha.50 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]**

  - 附件上傳元件支援允許多重設定 ([#8052](https://github.com/nocobase/nocobase/pull/8052)) by @katherinehhh
  - 在 Select 元件中，滑鼠懸停時顯示折疊的選項 ([#8029](https://github.com/nocobase/nocobase/pull/8029)) by @katherinehhh
  - 在 Select 元件中，滑鼠懸停時顯示折疊的選項 ([#8030](https://github.com/nocobase/nocobase/pull/8030)) by @katherinehhh
- **[AI 員工]** 在新增 LLM 表單中補上遺漏的提供者欄位 ([#8049](https://github.com/nocobase/nocobase/pull/8049)) by @heziqiang
- **[工作流程]** 為 UserSelect 新增「主要」資料來源上下文，以提供一個更通用的元件，可在其他地方使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在多對多關聯記錄選擇器中停用 allowMultiple 後顯示「N/A」的問題 ([#8050](https://github.com/nocobase/nocobase/pull/8050)) by @katherinehhh
  - 修正聯動規則下拉選擇框的閃爍問題 ([#8018](https://github.com/nocobase/nocobase/pull/8018)) by @zhangzhonghe
  - 修正篩選操作中將日期欄位切換為時間欄位時導致渲染錯誤的問題 ([#8036](https://github.com/nocobase/nocobase/pull/8036)) by @gchust
  - 修正新增評論區塊時出現目前記錄選單的問題 ([#8039](https://github.com/nocobase/nocobase/pull/8039)) by @gchust
  - 修正無法在記錄選擇器區塊中刪除記錄的問題 ([#8023](https://github.com/nocobase/nocobase/pull/8023)) by @katherinehhh
  - 修正詳細區塊中 JS 欄位的預設樣式不正確的問題 ([#8031](https://github.com/nocobase/nocobase/pull/8031)) by @gchust
  - 修正樹狀表格區塊無法展開子節點的問題 ([#8011](https://github.com/nocobase/nocobase/pull/8011)) by @katherinehhh
  - 修正子表格欄位拖曳無效的問題 ([#8026](https://github.com/nocobase/nocobase/pull/8026)) by @katherinehhh
  - 修正子表格欄位寬度未套用的問題 ([#8027](https://github.com/nocobase/nocobase/pull/8027)) by @katherinehhh
  - 解決在彈出視窗中載入關聯欄位資料時導致錯誤的問題，確保資料顯示與功能更流暢 ([#7985](https://github.com/nocobase/nocobase/pull/7985)) by @gchust
  - 修正 Markdown 顯示欄位彈出樣式問題 ([#8012](https://github.com/nocobase/nocobase/pull/8012)) by @katherinehhh
  - 修正編輯與新增操作彈出視窗的預設標題不正確的問題 ([#8033](https://github.com/nocobase/nocobase/pull/8033)) by @gchust
  - 修正 Variable.Input 中的延遲載入錯誤，該錯誤會導致變數選項選單重新渲染不正確 ([#8009](https://github.com/nocobase/nocobase/pull/8009)) by @mytharcher
  - 修正透過關聯欄位開啟的彈出視窗中，無法正確解析目前彈出記錄變數的問題 ([#8019](https://github.com/nocobase/nocobase/pull/8019)) by @gchust
- **[acl]** 修正當外部資料來源權限範圍使用與目前使用者相關的變數時，ACL 元資訊不正確的問題 ([#8013](https://github.com/nocobase/nocobase/pull/8013)) by @2013xile
- **[流程引擎]**

  - 修正評論記錄編輯後無法儲存的問題 ([#8035](https://github.com/nocobase/nocobase/pull/8035)) by @katherinehhh
  - 修正透過點擊彈出視窗內的表單提交按鈕關閉彈出視窗時，資料區塊未重新整理的問題 ([#8021](https://github.com/nocobase/nocobase/pull/8021)) by @gchust
- **[主題編輯器]** 在行動裝置上啟用主題切換器 ([#8046](https://github.com/nocobase/nocobase/pull/8046)) by @zhangzhonghe
- **[多應用管理員（已棄用）]** 日誌級別設定未套用至子應用程式 ([#8045](https://github.com/nocobase/nocobase/pull/8045)) by @2013xile
- **[資料來源管理器]** 修正更新外部資料來源密碼時發生錯誤 ([#8024](https://github.com/nocobase/nocobase/pull/8024)) by @cgyrock
- **[操作：匯入記錄]** 修正當匯入的 xlsx 檔案中欄位值為 `null` 時拋出錯誤的問題 ([#8037](https://github.com/nocobase/nocobase/pull/8037)) by @mytharcher
- **[工作流程]** 修正訊息發布前佇列已關閉的問題 ([#8003](https://github.com/nocobase/nocobase/pull/8003)) by @mytharcher
- **[評論]**

  - 修正無法在評論區塊中刪除記錄的問題 by @katherinehhh
  - 修正當評論區塊用於非評論集合時顯示警告的問題 by @katherinehhh
- **[多空間]** 行動裝置支援空間切換 by @jiannx
- **[工作流程：子流程]** 修正當工作流程數量超過 200 時，選取的工作流程顯示「N/A」的問題 by @mytharcher
- **[工作流程：審批]**

  - 修正建立審批資訊區塊時拋出錯誤的問題 by @mytharcher
  - 新增遷移以避免新增索引時出現重複記錄錯誤 by @mytharcher
  - 修正當開啟模態框後重新整理頁面時，列印操作無法運作的問題 by @mytharcher
