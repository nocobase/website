---
title: "NocoBase v1.9.32：修復顯示關聯欄位懶加載中無限循環導致的堆疊溢出"
description: "v1.9.32 版本發佈說明"
---

### 🎉 新功能

- **[工作流程]** 在工作流程中新增系統變數，包含 `instanceId` 與 `genSnowflakeId()` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) - 貢獻者 @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修正顯示關聯欄位延遲載入時，因無限迴圈導致的堆疊溢位問題 ([#8262](https://github.com/nocobase/nocobase/pull/8262)) - 貢獻者 @zhangzhonghe

- **[動作：匯入記錄]** 修正匯入動作拋出錯誤時，錯誤訊息中的行索引始終為 1 的問題 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) - 貢獻者 @mytharcher

- **[工作流程：人工節點]** 修正取消執行已刪除工作流程時拋出錯誤的問題 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) - 貢獻者 @mytharcher

- **[集合欄位：序號]** 修正當欄位序號修復指令遇到目前環境中不存在的集合時發生的錯誤 ([#8251](https://github.com/nocobase/nocobase/pull/8251)) - 貢獻者 @cgyrock

- **[動作：匯入記錄 Pro]** 修正唯一欄位值為 null 時，唯一性檢查邏輯會拋出錯誤的問題 - 貢獻者 @mytharcher

- **[工作流程：審批]** 修正相同交易重複回滾的問題 - 貢獻者 @mytharcher
