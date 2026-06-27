---
title: "NocoBase v1.6.3：允許為登入按鈕設定自訂提示"
description: "v1.6.3 版本發行說明"
---

### 🎉 新功能

- **[企業微信]** 允許為登入按鈕設定自訂提示文字，作者 @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 修正圖片網址中的特殊字元導致無法顯示的問題 ([#6459](https://github.com/nocobase/nocobase/pull/6459))，作者 @mytharcher

  - 子表格頁面大小變更後，新增資料時頁碼不正確 ([#6437](https://github.com/nocobase/nocobase/pull/6437))，作者 @katherinehhh

  - Logo 樣式與先前不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444))，作者 @zhangzhonghe

- **[工作流：人工節點]** 修正遷移時拋出的錯誤 ([#6445](https://github.com/nocobase/nocobase/pull/6445))，作者 @mytharcher

- **[資料視覺化]** 新增自訂篩選欄位時，已移除的欄位再次出現 ([#6450](https://github.com/nocobase/nocobase/pull/6450))，作者 @2013xile

- **[檔案管理]** 修正檔案管理的若干問題 ([#6436](https://github.com/nocobase/nocobase/pull/6436))，作者 @mytharcher

- **[操作：自訂請求]** 自訂請求的伺服器端權限驗證錯誤 ([#6438](https://github.com/nocobase/nocobase/pull/6438))，作者 @katherinehhh

- **[資料來源管理]** 在角色管理中切換資料來源時，未載入對應的資料表 ([#6431](https://github.com/nocobase/nocobase/pull/6431))，作者 @katherinehhh

- **[操作：批次編輯]** 修正批次編輯提交時無法觸發工作流程的問題 ([#6440](https://github.com/nocobase/nocobase/pull/6440))，作者 @mytharcher

- **[工作流：自訂操作事件]** 移除 E2E 測試案例中的 `only`，作者 @mytharcher

- **[工作流：審批]**
  - 修正審批表單中關聯資料未顯示的問題，作者 @mytharcher

  - 修正對外部資料來源進行審批時拋出錯誤的問題，作者 @mytharcher
