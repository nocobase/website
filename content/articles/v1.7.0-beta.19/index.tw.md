---
title: "NocoBase v1.7.0-beta.19：支援在聯動規則條件的左側使用變數"
description: "v1.7.0-beta.19 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援連結規則條件左側使用變數 ([#6609](https://github.com/nocobase/nocobase/pull/6609)) - @katherinehhh

- **[工作流：日期計算節點]** 新增 `changeTimezone` 函數，用於變更時區值以進行格式化 - @mytharcher

### 🚀 改進

- **[客戶端]**
  - 支援在自訂請求中選取表格記錄 ([#6647](https://github.com/nocobase/nocobase/pull/6647)) - @katherinehhh

  - 為無延遲開啟的場景新增延遲 API ([#6681](https://github.com/nocobase/nocobase/pull/6681)) - @mytharcher

### 🐛 錯誤修復

- **[資料庫]** 修正 CI 建置錯誤 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) - @aaaaaajie

- **[客戶端]**
  - 修正滑鼠懸停在審批節點設定中參照模板區塊時拋出的錯誤 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) - @mytharcher

  - 工作流中欄位說明顯示問題 ([#6680](https://github.com/nocobase/nocobase/pull/6680)) - @katherinehhh

  - 修正上傳元件的語系設定 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) - @mytharcher

  - 自訂關聯欄位未顯示欄位元件設定 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) - @katherinehhh

  - 連結規則與舊資料的相容性 ([#6686](https://github.com/nocobase/nocobase/pull/6686)) - @katherinehhh

  - 延遲載入遺失 UI 元件時導致渲染錯誤 ([#6683](https://github.com/nocobase/nocobase/pull/6683)) - @gchust

  - 在 HoC Input 中新增原生密碼元件 ([#6679](https://github.com/nocobase/nocobase/pull/6679)) - @mytharcher

- **[工作流：人工節點]** 修正人工任務狀態常數 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) - @mytharcher

- **[動作：匯入記錄]** 修正匯入 xlsx 時間欄位時的錯誤 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) - @aaaaaajie

- **[工作流：自訂動作事件]** 修正測試案例 - @mytharcher

- **[備份管理員]** 嘗試使用密碼還原未加密備份時發生逾時錯誤 - @gchust
