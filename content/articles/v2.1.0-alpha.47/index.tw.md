---
title: "NocoBase v2.1.0-alpha.47：甘特圖區塊新增預設聚焦於今日的選項。"
description: "v2.1.0-alpha.47 版本發行說明"
---

### 🎉 新功能

- **[未定義]** 改進了 CLI 中的受管應用程式與外掛管理，包含支援 appPath 感知的環境處理、外掛匯入、授權外掛同步及相關文件更新。([#9655](https://github.com/nocobase/nocobase/pull/9655)) by @chenos
  參考：[CLI 文件](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/api/cli)、[快速入門](https://github.com/nocobase/nocobase/tree/feat/cli-app-path/docs/docs/en/quickstart)
- **[區塊：甘特圖]** 甘特圖區塊新增預設聚焦於今日的選項。([#9692](https://github.com/nocobase/nocobase/pull/9692)) by @jiannx
- **[多空間]** 為多空間外掛新增客戶端 v2 支援，包含空間切換與空間管理。by @jiannx

### 🚀 改進

- **[工作流程]** 移除工作流程執行時與歷史記錄事務的耦合。([#9668](https://github.com/nocobase/nocobase/pull/9668)) by @mytharcher
- **[UI 模板]** 將 UI 模板遷移至客戶端 v2。([#9591](https://github.com/nocobase/nocobase/pull/9591)) by @gchust
- **[多關鍵字篩選]** 將多關鍵字篩選遷移至客戶端 v2。([#9691](https://github.com/nocobase/nocobase/pull/9691)) by @gchust
- **[工作流程：子流程]** 移除子流程工作流程指令中與歷史記錄事務的耦合。by @mytharcher
- **[工作流程：審批]** 移除審批工作流程指令中與歷史記錄事務的耦合。by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復隱藏的關聯欄位仍保留舊值的問題。([#9687](https://github.com/nocobase/nocobase/pull/9687)) by @zhangzhonghe
- **[動作：匯入記錄]** 修復匯入記錄收到重複排序值的問題。([#9684](https://github.com/nocobase/nocobase/pull/9684)) by @2013xile
- **[流程引擎]** 修復將參考模板區塊轉換為複製時會發生錯誤的問題。([#9693](https://github.com/nocobase/nocobase/pull/9693)) by @gchust
- **[區塊：地圖]** 修復在詳細頁面切換文字與地圖顯示模式時，地圖欄位值被錯誤轉換的問題。([#9653](https://github.com/nocobase/nocobase/pull/9653)) by @hongboji
- **[工作流程]** 修復在並行工作者下工作流程執行重複分派的問題。([#9673](https://github.com/nocobase/nocobase/pull/9673)) by @mytharcher
- **[工作流程：審批]** 修復審批表單詳細資料中未顯示自訂欄位標題的問題。by @zhangzhonghe
