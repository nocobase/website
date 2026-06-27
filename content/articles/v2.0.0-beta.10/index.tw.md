---
title: "NocoBase v2.0.0-beta.10：優化 AI 入口按鈕"
description: "v2.0.0-beta.10 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]** 支援指定事件流程的執行時機。([#8340](https://github.com/nocobase/nocobase/pull/8340)) @gchust
- **[AI 員工]**

  - 優化 AI 入口按鈕 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) @heziqiang
  - 在入口列表中隱藏建構器 AI。<br/> 優化 LLM 整合流程。<br/> 更新關於 AI 模型 gemini-3 的文件。([#8409](https://github.com/nocobase/nocobase/pull/8409)) @heziqiang
- **[通知：應用內訊息]** 修復向大量使用者發送應用內訊息時的效能問題 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 數字輸入元件未顯示數值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) @chenos
  - 修復在建立表單中，級聯選擇資料在成功提交後未被清除的問題 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) @katherinehhh
  - 修復提交按鈕在啟用確認時，跳過必填驗證功能失效的問題 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) @katherinehhh
  - 解決一對一關聯欄位的檔案選擇彈出視窗中出現提交按鈕的問題 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) @katherinehhh
  - 修復網格卡片區塊中的佈局設定未生效的問題 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) @katherinehhh
  - 修復在數字欄位中輸入中文字元時，防止賦值的問題 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) @katherinehhh
- **[集合欄位：多對多（陣列）]** 修正在關聯查詢中附加二級多對多（陣列）關聯時出現的錯誤 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) @cgyrock
- **[多空間]**

  - 新增關聯資料時的相關空間 @jiannx
  - 空間選擇器顏色跟隨主題 @jiannx
