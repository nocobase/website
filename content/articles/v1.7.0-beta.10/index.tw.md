---
title: "NocoBase v1.7.0-beta.10：支援提交後的變數配置"
description: "v1.7.0-beta.10 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援提交後變數配置，可透過當前資料 ID 進行重新導向 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh

- **[集合欄位：Markdown(Vditor)]** Vditor 支援 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

### 🚀 改進

- **[客戶端]**
  - 僅支援純文字檔案預覽 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher

  - 優化 502 錯誤訊息 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos

  - 在聯動規則中限制不同欄位屬性的可用操作 ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh

- **[檔案管理]** 調整儲存空間的 `getFileData` API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher

- **[存取控制]** 優化角色切換的順序與樣式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie

- **[集合欄位：序號]** 支援將序號設為日曆區塊的標題欄位 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh

- **[工作流程]** 將已執行欄位拆分至統計表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher

- **[工作流程：自訂操作事件]** 將已執行欄位拆分至統計表 by @mytharcher

- **[工作流程：審核]**
  - 將已執行欄位拆分至統計表 by @mytharcher

  - 支援在設定中跳過驗證器 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 舊版瀏覽器會顯示空白頁面 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe

  - 「溢位內容省略」選項需要重新整理頁面才能讓切換狀態生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe

  - 資料範圍篩選中日期欄位顯示的問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh

  - 無法在模態框內開啟另一個模態框 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe

  - 若包含關聯欄位，另存為範本操作會失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust

  - 頁面頂部選單顯示空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe

  - 欄位指派空值無效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh

- **[工作流程]**
  - 確保工作流程金鑰在儲存前已產生 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher

  - 修正設定自動刪除選項時拋出的錯誤 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher

- **[公開表單]** 公開表單頁面標題顯示「載入中...」的問題 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

- **[行動端]** 調整手機上顯示的字型大小為 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe

- **[變數與機密]** 缺少圖示篩選按鈕、篩選計數未顯示，以及切換頁面後篩選資料未重新整理 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh

- **[驗證]** 註冊頁面欄位的在地化問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile

- **[API 文件]** API 文件頁面無法捲動 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe

- **[工作流程：後置操作事件]** 批次操作中的多筆記錄應觸發多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher

- **[區塊：範本]**
  - 表單區塊的聯動規則未正確從範本同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust

  - 詳細資料區塊中重複出現「另存為範本」選單 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust

- **[工作流程：審核]** 修正審核表單值以正確提交 by @mytharcher
