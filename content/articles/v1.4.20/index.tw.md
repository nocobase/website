---
title: "NocoBase v1.4.20：允許在綁定到操作按鈕時對工作流程進行排序"
description: "v1.4.20 版本發行說明"
---

### 🎉 新功能

- **[client]** 新增 app.getHref() 方法 ([#6019](https://github.com/nocobase/nocobase/pull/6019)) - @chenos

### 🚀 改進

- **[client]**
  - 允許在綁定至操作按鈕時對工作流程進行排序 ([#6017](https://github.com/nocobase/nocobase/pull/6017)) - @mytharcher

  - 將評估器的參考連結更改為文件網站 ([#6021](https://github.com/nocobase/nocobase/pull/6021)) - @mytharcher

  - 在多選下拉元件中支援 maxTagCount: 'responsive' ([#6007](https://github.com/nocobase/nocobase/pull/6007)) - @katherinehhh

  - 將篩選區塊中時間範圍元件的預設結束時間設為 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) - @katherinehhh

- **[操作：批次編輯]** 重構批次編輯表單提交按鈕：移除欄位指派與聯動規則 ([#6008](https://github.com/nocobase/nocobase/pull/6008)) - @katherinehhh

### 🐛 錯誤修復

- **[client]**
  - 修正在富文本編輯器中刪除資料後，必填驗證未生效的問題 ([#6006](https://github.com/nocobase/nocobase/pull/6006)) - @katherinehhh

  - 修正操作欄按鈕隱藏時的對齊問題 ([#6014](https://github.com/nocobase/nocobase/pull/6014)) - @katherinehhh

  - 修正點擊 REST API 頁面中的「集合」頁籤時，「建立集合」按鈕的問題 ([#5992](https://github.com/nocobase/nocobase/pull/5992)) - @katherinehhh

  - 修正在一對多關係中 targetKey 無法選取 NanoID 欄位的問題 ([#5999](https://github.com/nocobase/nocobase/pull/5999)) - @katherinehhh

  - 修正緊湊主題中設定按鈕的樣式 ([#6001](https://github.com/nocobase/nocobase/pull/6001)) - @katherinehhh

  - 修正列表元件的樣式 ([#5998](https://github.com/nocobase/nocobase/pull/5998)) - @mytharcher

  - 修正用戶端請求中包含的標頭被覆寫的問題 ([#6009](https://github.com/nocobase/nocobase/pull/6009)) - @2013xile

  - 修正 foreignKey、targetKey 和 sourceKey 應支援中文過濾 ([#5997](https://github.com/nocobase/nocobase/pull/5997)) - @katherinehhh

- **[操作：匯入記錄]** 修正使用不同目標鍵的多對多關聯匯入問題 ([#6024](https://github.com/nocobase/nocobase/pull/6024)) - @chareice

- **[區塊：地圖]** 修正詳細區塊中的地圖欄位應渲染為地圖區塊 ([#6010](https://github.com/nocobase/nocobase/pull/6010)) - @katherinehhh

- **[嵌入 NocoBase]** 嵌入用的 token 與驗證機制衝突 - @chenos
