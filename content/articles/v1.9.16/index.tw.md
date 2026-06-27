---
title: "NocoBase v1.9.16：在 RESTful API 資料來源配置中新增錯誤訊息轉換器選項"
description: "v1.9.16 版本發行說明"
---

### 🎉 新功能

- **[資料來源：REST API]** 在 RESTful API 資料來源設定中新增「錯誤訊息轉換器」選項，由 @cgyrock 貢獻

### 🚀 改善

- **[客戶端]**
  - 在 Select 元件中，當滑鼠懸停時顯示收合選項 ([#8029](https://github.com/nocobase/nocobase/pull/8029))，由 @katherinehhh 貢獻

  - 優化子表格的驗證訊息 ([#8001](https://github.com/nocobase/nocobase/pull/8001))，由 @katherinehhh 貢獻

- **[工作流程]** 為 UserSelect 新增「主要」資料來源上下文，以提供一個更通用的元件，可在其他位置使用 ([#8010](https://github.com/nocobase/nocobase/pull/8010))，由 @mytharcher 貢獻

- **[工作流程：審批]** 使用通用元件以減少重複程式碼，由 @mytharcher 貢獻

### 🐛 錯誤修復

- **[客戶端]** 修復 Variable.Input 中的延遲載入錯誤，該錯誤會導致變數選項選單不正確地重新渲染 ([#8009](https://github.com/nocobase/nocobase/pull/8009))，由 @mytharcher 貢獻

- **[動作：匯入記錄]** 修復當匯入的 xlsx 檔案中欄位值為 `null` 時拋出錯誤的問題 ([#8037](https://github.com/nocobase/nocobase/pull/8037))，由 @mytharcher 貢獻

- **[工作流程]** 修復在訊息發布前佇列已關閉的問題 ([#8003](https://github.com/nocobase/nocobase/pull/8003))，由 @mytharcher 貢獻

- **[工作流程：子流程]** 修復當工作流程數量超過 200 時，已選取的工作流程顯示「N/A」的問題，由 @mytharcher 貢獻

- **[工作流程：審批]**
  - 修復因 `RemoteSelect` 變更而導致取得 `approvalRecords.reassignee` 時的權限問題，由 @mytharcher 貢獻

  - 修復在模態框開啟狀態下重新整理頁面時，列印動作無法運作的問題，由 @mytharcher 貢獻
