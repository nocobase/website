---
title: "NocoBase v2.0.18：允許在子表格的彈出視窗中新增 AI 員工"
description: "v2.0.18 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]**
  - 排程清理 AI 對話檢查點資料。([#8855](https://github.com/nocobase/nocobase/pull/8855)) by @cgyrock

  - 允許在子表格的彈出視窗中新增 AI 員工 ([#8873](https://github.com/nocobase/nocobase/pull/8873)) by @2013xile

- **[應用程式管理員]** 支援在應用程式列表中進行篩選<br />為啟動和停止操作新增確認對話框<br />按環境名稱排序應用程式狀態項目 by @2013xile

### 🚀 改進

- **[伺服器]** 改善 pm add 邏輯 ([#8875](https://github.com/nocobase/nocobase/pull/8875)) by @chenos

- **[客戶端]** 支援在關閉彈出視窗前顯示確認訊息。([#8839](https://github.com/nocobase/nocobase/pull/8839)) by @gchust

- **[非同步任務管理器]** 非同步任務新增支援工作者在發送錯誤訊息 ([#8849](https://github.com/nocobase/nocobase/pull/8849)) by @cgyrock

### 🐛 錯誤修復

- **[客戶端]** 修正子表格中「選擇記錄」彈出視窗在第二次開啟時無法正確載入的問題。([#8865](https://github.com/nocobase/nocobase/pull/8865)) by @gchust

- **[AI 員工]** 修正 AI 插件升級遷移腳本中可能出現的未定義變數錯誤。([#8883](https://github.com/nocobase/nocobase/pull/8883)) by @cgyrock

- **[動作：匯入記錄 Pro]** 修正非同步匯入發生錯誤後，非同步任務未結束的問題 by @cgyrock
