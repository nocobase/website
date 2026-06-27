---
title: "NocoBase v2.1.0-alpha.33：在 v2 中新增當前使用者語言變數"
description: "v2.1.0-alpha.33 版本發布說明"
---

### 🎉 新功能

- **[client]**
  - 在 v2 中新增當前使用者語言變數 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) - @katherinehhh

  - 為頁面選單項目新增聯動規則支援 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) - @zhangzhonghe

### 🚀 改進

- **[client-v2]** 在 v2 佈局中過濾掉 v1 選單，僅顯示 v2 選單 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) - @zhangzhonghe

- **[部門]** 透過新增圖示與調整間距，最佳化部門列表樣式 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) - @katherinehhh

### 🐛 錯誤修復

- **[build]** 修復當 v1 客戶端程式碼匯入其他插件的 `/client-v2` 入口時，插件建置失敗的問題。([#9436](https://github.com/nocobase/nocobase/pull/9436)) - @Molunerfinn

- **[client]**
  - 修復操作按鈕聯動規則偶爾無法生效的問題。([#9430](https://github.com/nocobase/nocobase/pull/9430)) - @gchust

  - 在 v2 子表格中隱藏多對多關聯欄位的子表格元件 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) - @katherinehhh

- **[圖形化資料表管理]** 修復圖形化介面自動佈局拋出更新操作篩選器錯誤 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) - @katherinehhh

- **[區塊：樹狀]** 改進樹狀篩選區塊設定，並修復不支援的關聯、標題欄位回退以及搜尋重置行為。([#9426](https://github.com/nocobase/nocobase/pull/9426)) - @jiannx
