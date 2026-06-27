---
title: "NocoBase v2.0.0-beta.19：釘釘允許使用 unionId 綁定用戶"
description: "v2.0.0-beta.19 版本發行說明"
---

### 🎉 新功能

- **[認證：釘釘]** 允許透過 `unionId` 綁定使用者 by @2013xile

### 🚀 改進

- **[客戶端]** 在內聯可編輯子表格中，將欄位寬度設定調整為下拉選單 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh

- **[集合欄位：Markdown(Vditor)]** 在元件設定中新增了設定預設編輯模式的配置選項。 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038

- **[多空間]** 多空間權限控制存取 ACL by @jiannx

- **[AI：知識庫]** 優化建置輸出，以減少 plugin-ai-knowledge-base 的套件大小。 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在編輯表單中使用關聯記錄選擇器的「快速建立」時，會覆蓋現有表單資料的問題。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust

  - 修正 Grid 佈局中的空白間距問題 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe

  - 修正啟用樹狀表格後，需要重新整理頁面才能新增子記錄的問題 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh

  - 修正子表格（內聯編輯）中欄位寬度未更新；多行文字輸入框未隨欄位寬度調整大小的問題 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh

  - 修正「新增」動作彈出視窗中錯誤顯示「表單（新增）」選單的問題。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust

- **[流程引擎]**
  - 修正某些第三方函式庫無法在 JS 區塊中正確匯入的問題。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust

  - 修正切換頁面後提交表單不會重新整理頁面的問題。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust

- **[UI 模板]** 修正重新開啟並提交關聯欄位「新增」表單的已儲存彈出模板時發生錯誤的問題。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust

- **[集合欄位：附件(URL)]** 修正附件 URL 欄位的檔案名稱顯示配置在編輯表單中無法運作的問題 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh

- **[AI 員工]** 修正 LLM 節點無法發送訊息的問題 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile

- **[動作：匯入記錄]** 修正匯入動作的漏洞 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher

- **[工作流：自訂動作事件]** 修正觸發自訂工作流時參數與負載不正確的問題 by @mytharcher

- **[多空間]**
  - 新增遷移腳本以移除空間欄位中的 x-ready-pretty by @jiannx

  - 移除空間欄位的 read-pretty 屬性 by @jiannx

- **[工作流：審批]** 修正 MySQL 中列表載入時因 JSON 欄位導致的效能問題 by @mytharcher
