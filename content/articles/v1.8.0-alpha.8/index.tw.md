---
title: "NocoBase v1.8.0-alpha.8：支援一鍵複製文字欄位內容"
description: "v1.8.0-alpha.8 版本發行說明"
---

### 🎉 新功能

- **[文字複製]** 支援一鍵複製文字欄位內容 ([#6954](https://github.com/nocobase/nocobase/pull/6954)) by @zhangzhonghe

- **[郵件管理]** 支援刪除郵件 by @jiannx

### 🚀 改進

- **[客戶端]**
  - 為核取方塊欄位連結規則新增「為空」與「不為空」選項 ([#7073](https://github.com/nocobase/nocobase/pull/7073)) by @katherinehhh

  - Logo 容器寬度根據內容類型自適應（圖片固定 168px，文字自動寬度）([#7075](https://github.com/nocobase/nocobase/pull/7075)) by @Cyx649312038

- **[非同步任務管理器]** 改善匯出期間建立任務的效能 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie

- **[工作流：審批]** 為重新指派者清單新增額外欄位選項 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 金額元件從 mask 切換至 inputNumer 後遺失小數點 ([#7077](https://github.com/nocobase/nocobase/pull/7077)) by @katherinehhh

  - 子表格中 Markdown (Vditor) 渲染不正確 ([#7074](https://github.com/nocobase/nocobase/pull/7074)) by @katherinehhh

  - 建立反向關聯欄位後，關聯欄位設定中的「在目標資料表中建立反向關聯欄位」選項未被勾選 ([#6914](https://github.com/nocobase/nocobase/pull/6914)) by @aaaaaajie

  - 關聯欄位選擇器在提交後未清除已選資料 ([#7067](https://github.com/nocobase/nocobase/pull/7067)) by @katherinehhh

- **[伺服器]** 無法讀取未定義的屬性（讀取 'setMaaintainingMessage'）([#7064](https://github.com/nocobase/nocobase/pull/7064)) by @chenos

- **[存取控制]** 修復當無預設角色時應用程式阻止進入的問題 ([#7059](https://github.com/nocobase/nocobase/pull/7059)) by @aaaaaajie

- **[資料來源管理器]** 範圍變更現在會立即對所有相關角色生效 ([#7065](https://github.com/nocobase/nocobase/pull/7065)) by @aaaaaajie

- **[工作流：迴圈節點]** 修復條件不滿足時迴圈分支仍執行的問題 ([#7063](https://github.com/nocobase/nocobase/pull/7063)) by @mytharcher

- **[工作流：自訂動作事件]** 修復重新導向 URL 變數未被解析的問題 by @mytharcher

- **[工作流：審批]** 修復執行取消時待辦統計未更新的問題 by @mytharcher

- **[郵件管理]** 郵件刪除失敗 by @jiannx

- **[備份管理器]** 在 Windows 平台上還原 MySQL 備份時出現未知命令錯誤 by @gchust
