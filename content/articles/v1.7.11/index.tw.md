---
title: "NocoBase v1.7.11：支援一鍵複製文字欄位內容"
description: "v1.7.11 版本發行說明"
---

### 🎉 新功能

- **[文字複製]** 支援一鍵複製文字欄位內容 ([#6954](https://github.com/nocobase/nocobase/pull/6954))，作者：@zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 關聯欄位選擇器在提交後未清除已選資料 ([#7067](https://github.com/nocobase/nocobase/pull/7067))，作者：@katherinehhh

  - 修正上傳大小提示 ([#7057](https://github.com/nocobase/nocobase/pull/7057))，作者：@mytharcher

- **[伺服器]** 無法讀取未定義的屬性（讀取「setMaaintainingMessage」）([#7064](https://github.com/nocobase/nocobase/pull/7064))，作者：@chenos

- **[工作流：循環節點]** 修正條件不滿足時循環分支仍執行的問題 ([#7063](https://github.com/nocobase/nocobase/pull/7063))，作者：@mytharcher

- **[工作流：審核]**
  - 修正執行取消時待辦統計未更新的問題，作者：@mytharcher

  - 修正依類型篩選時觸發變數的問題，作者：@mytharcher
