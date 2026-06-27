---
title: "NocoBase v1.8.11：支援透過 Microsoft 即時預覽 Office 檔案"
description: "v1.8.11 版本發行說明"
---

### 🎉 新功能

- **[Office 檔案預覽器]** 支援透過 Microsoft 即時預覽來預覽 Office 檔案 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) - @mytharcher

### 🚀 改進

- **[客戶端]** 選取後不自動關閉選單 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) - @kerwin612

- **[通知：應用內訊息]** 將應用內訊息從 SSE 改為 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) - @mytharcher

- **[工作流程]** 減少準備執行時需載入的工作數量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) - @mytharcher

- **[認證：釘釘]** 在釘釘客戶端中，將導航欄標題設為空字串，而非顯示「載入中…」- @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 修復樹狀表格無法展開的問題 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) - @zhangzhonghe

  - 修復表格行拖曳排序的異常行為 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) - @ChimingLiu

  - 修復解析欄位預設值時的無限迴圈問題 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) - @zhangzhonghe

  - 修復篩選表單中關係欄位配置資料選擇器時彈窗內日期欄位展示異常的問題 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) - @katherinehhh

- **[工作流程：HTTP 請求節點]** 修復競爭條件錯誤 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) - @mytharcher

- **[工作流程]** 修復在 MySQL 中儲存工作時 BigInt ID 的問題 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) - @mytharcher

- **[操作：匯出記錄]** 修復匯出至 Excel 時巢狀關聯欄位格式不正確的問題。([#7277](https://github.com/nocobase/nocobase/pull/7277)) - @aaaaaajie

- **[資料來源：外部 SQL Server]** 修復來自外部資料來源的 MSSQL datetime（不含時區）欄位儲存格式不一致的問題 - @aaaaaajie

- **[工作流程：審批]** 修復從外部資料來源內的受指派者選擇器拋出錯誤的問題 - @mytharcher
