---
title: "NocoBase v1.8.0-beta.7：支援文字欄位內容一鍵複製"
description: "v1.8.0-beta.7 版本發行說明"
---

### 🎉 新功能

- **[文字複製]** 支援一鍵複製文字欄位內容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

### 🐛 錯誤修復

- **[伺服器]** 無法讀取未定義的屬性（讀取 'setMaaintainingMessage'）([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos

- **[客戶端]**
  - 關聯欄位選擇器在提交後未清除已選資料 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh

  - 建立反向關聯欄位後，關聯欄位設定中的「在目標資料表中建立反向關聯欄位」選項未被勾選 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie

- **[存取控制]** 修復當無預設角色時應用程式阻止進入的問題 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie

- **[工作流：迴圈節點]** 修復條件不滿足時迴圈分支仍執行的問題 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher

- **[資料來源管理器]** 範圍變更現在會立即對所有相關角色生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie

- **[工作流：自訂動作事件]** 修復重新導向網址的變數未被解析的問題 by @mytharcher

- **[工作流：審批]**
  - 修復依類型篩選時的觸發變數問題 by @mytharcher

  - 修復執行取消時待辦統計未更新的問題 by @mytharcher
