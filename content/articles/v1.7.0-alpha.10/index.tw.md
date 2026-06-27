---
title: "NocoBase v1.7.0-alpha.10：支援提交後的變數配置"
description: "v1.7.0-alpha.10 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援提交後變數配置，可透過當前資料 ID 進行重新導向 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) - @katherinehhh

- **[集合欄位：Markdown(Vditor)]** Vditor 支援 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) - @zhangzhonghe

### 🚀 改進

- **[客戶端]**
  - 僅支援純文字檔案預覽 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) - @mytharcher

  - 優化 502 錯誤訊息 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) - @chenos

  - 在聯動規則中限制不同欄位屬性的可用操作 ([#6548](https://github.com/nocobase/nocobase/pull/6548)) - @katherinehhh

- **[工作流程]** 將已執行欄位拆分至統計表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) - @mytharcher

- **[行動端]** 調整行動裝置通知彈出視窗的樣式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) - @zhangzhonghe

- **[集合欄位：序號]** 支援將序號設定為日曆區塊的標題欄位 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) - @katherinehhh

- **[檔案管理]** 調整儲存空間的 `getFileData` API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) - @mytharcher

- **[存取控制]** 優化角色切換的順序與樣式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) - @aaaaaajie

- **[公開表單]** 建立時將公開表單頁面標題設為已配置的標題 ([#6538](https://github.com/nocobase/nocobase/pull/6538)) - @katherinehhh

- **[工作流程：自訂操作事件]** 將已執行欄位拆分至統計表 - @mytharcher

- **[工作流程：審核]**
  - 支援在設定中跳過驗證器 - @mytharcher

  - 將已執行欄位拆分至統計表 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 舊版瀏覽器會顯示空白頁面 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) - @zhangzhonghe

  - 無法在模態視窗內開啟另一個模態視窗 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) - @zhangzhonghe

  - 「溢位內容省略」選項需要重新整理頁面才能讓切換狀態生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) - @zhangzhonghe

  - 資料範圍篩選中日期欄位顯示的問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) - @katherinehhh

  - 頁面頂部選單顯示空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) - @zhangzhonghe

  - 若包含關聯欄位，另存為範本操作會失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) - @gchust

  - 新增連結頁面時無法使用「目前使用者」變數 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) - @zhangzhonghe

  - 欄位指派空值無效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) - @katherinehhh

  - 若包含關聯欄位，另存為範本操作會失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) - @gchust

  - 從篩選表單的下拉式單選欄位中移除「允許複選」選項 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) - @zhangzhonghe

  - 關聯欄位的資料範圍聯動無效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) - @zhangzhonghe

  - `yarn doc` 指令錯誤 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) - @gchust

  - 表格列按鈕拖曳問題 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) - @katherinehhh

- **[行動端]** 將手機顯示的字型大小調整為 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) - @zhangzhonghe

- **[工作流程]**
  - 修正在配置自動刪除選項時拋出的錯誤 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) - @mytharcher

  - 確保工作流程金鑰在儲存前已產生 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) - @mytharcher

- **[變數與機密]** 缺少圖示篩選按鈕、篩選計數未顯示，以及切換頁面後篩選後資料未重新整理 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) - @katherinehhh

- **[公開表單]** 公開表單頁面標題顯示「載入中...」的問題 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) - @katherinehhh

- **[API 文件]** API 文件頁面無法捲動 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) - @zhangzhonghe

- **[工作流程：操作後事件]** 批次操作中的多筆記錄應觸發多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) - @mytharcher

- **[區塊：範本]**
  - 詳細資料區塊中重複出現「另存為範本」選單 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) - @gchust

  - 表單區塊的聯動規則未正確從範本同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) - @gchust

- **[認證]** 註冊頁面欄位的在地化問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) - @2013xile

- **[操作：自訂請求]** 無法下載 UTF-8 編碼的檔案 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) - @2013xile

- **[集合：樹狀]** plugin-collection-tree 的遷移問題 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) - @2013xile

- **[區塊：多步驟表單]** 提交按鈕在預設與高亮狀態下顏色相同 - @jiannx

- **[工作流程：審核]** 修正審核表單值以進行提交 - @mytharcher
