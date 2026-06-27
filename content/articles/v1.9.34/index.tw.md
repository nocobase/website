---
title: "NocoBase v1.9.34：改善修改嵌套關聯欄位時的權限檢查"
description: "v1.9.34 版本發行說明"
---

### 🚀 改進

- **[存取控制]** 改善修改巢狀關聯欄位時的權限檢查 ([#7856](https://github.com/nocobase/nocobase/pull/7856)) - 感謝 @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 修復來自外部資料來源的關聯欄位在表單區塊中無法載入關聯資料的問題 ([#8356](https://github.com/nocobase/nocobase/pull/8356)) - 感謝 @katherinehhh

  - 修復 `FilterAction` 元件中關聯欄位不正確的問題 ([#8295](https://github.com/nocobase/nocobase/pull/8295)) - 感謝 @mytharcher

- **[日誌]** 修復列印系統日誌時，額外的錯誤資訊被丟棄的問題 ([#8367](https://github.com/nocobase/nocobase/pull/8367)) - 感謝 @cgyrock

- **[工作流：循環節點]** 修復條件分支中失敗的節點無法將狀態傳遞給上層分支節點的問題 ([#8360](https://github.com/nocobase/nocobase/pull/8360)) - 感謝 @mytharcher

- **[資料來源：主要]** 檢視集合的元資料應包含來源欄位選項 ([#8337](https://github.com/nocobase/nocobase/pull/8337)) - 感謝 @2013xile

- **[工作流]**
  - 修復工作流抄送節點詳情區塊中的聯動規則問題 ([#8381](https://github.com/nocobase/nocobase/pull/8381)) - 感謝 @zhangzhonghe

  - 為任務的雪花 ID 添加實例 ID，以避免叢集模式下 ID 衝突的問題 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) - 感謝 @mytharcher

  - 修復工作流刪除後執行頁面崩潰的問題 ([#8361](https://github.com/nocobase/nocobase/pull/8361)) - 感謝 @mytharcher

- **[動作：匯入記錄]** 修復非同步 XLSX 匯入觸發唯一約束錯誤時，錯誤訊息不正確的問題 ([#8342](https://github.com/nocobase/nocobase/pull/8342)) - 感謝 @cgyrock

- **[存取控制]**
  - 允許關聯欄位使用目標鍵進行關聯 ([#8352](https://github.com/nocobase/nocobase/pull/8352)) - 感謝 @2013xile

  - 修復處理關聯欄位權限時，資料來源解析不正確的問題 ([#8370](https://github.com/nocobase/nocobase/pull/8370)) - 感謝 @2013xile

- **[資料來源：REST API]** 為請求上下文添加容錯處理，以避免當方法不在上下文中時拋出錯誤 - 感謝 @mytharcher

- **[動作：匯出記錄 Pro]** 修復當主子應用程式執行非同步匯入/匯出任務，但主應用程式未啟用匯入/匯出 Pro 外掛時發生的錯誤 - 感謝 @cgyrock

- **[工作流：審批]** 修復任務中心中篩選欄位無法正常運作的問題 - 感謝 @mytharcher
