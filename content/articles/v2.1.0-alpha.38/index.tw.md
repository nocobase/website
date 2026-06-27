---
title: "NocoBase v2.1.0-alpha.38: 修復了動作按鈕事件流程中無法解析當前彈窗記錄變數的問題"
description: "v2.1.0-alpha.38 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在動作按鈕事件流程中，無法解析當前彈窗記錄變數的問題。（[#9495](https://github.com/nocobase/nocobase/pull/9495)）by @gchust

  - 修正子表單中 JS 欄位值在表單提交時未正確設定的問題。（[#9496](https://github.com/nocobase/nocobase/pull/9496)）by @gchust

- **[流程引擎]** 修正瀏覽器主控台中顯示的錯誤訊息不正確的問題。（[#9502](https://github.com/nocobase/nocobase/pull/9502)）by @gchust

- **[工作流：JavaScript]** 修正生產環境建置中工作流 JavaScript QuickJS 執行時期套件的載入問題。（[#9503](https://github.com/nocobase/nocobase/pull/9503)）by @mytharcher

- **[動作：匯入記錄]** 修正匯入日期類別欄位記錄時顯示錯誤日期的問題。（[#9463](https://github.com/nocobase/nocobase/pull/9463)）by @mytharcher

- **[動作：匯入記錄 Pro]** 修正專業版 xlsx 匯入的時區處理問題 by @mytharcher

- **[動作：匯出記錄 Pro]** 修正從附件 URL 欄位匯出附件時拋出錯誤的問題 by @mytharcher
