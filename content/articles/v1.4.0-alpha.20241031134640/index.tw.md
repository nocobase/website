---
title: "NocoBase v1.4.0-alpha.20241031134640：新增企業微信通知頻道"
description: "v1.4.0-alpha.20241031134640 版本發行說明"
---

### 🎉 新功能

- **[WeCom]** 新增企業微信通知頻道，由 @chenzhizdt 貢獻

### 🚀 改進

- **[客戶端]** 清除欄位標題時恢復預設值 ([#5549](https://github.com/nocobase/nocobase/pull/5549))，由 @katherinehhh 貢獻

- **[通知管理器]**
  - 新增 UserSelect 與 UserAddition 元件，簡化通知頻道的開發流程 ([#5553](https://github.com/nocobase/nocobase/pull/5553))，由 @2013xile 貢獻

  - 新增取得通知插件頻道類型註冊表的 API ([#5531](https://github.com/nocobase/nocobase/pull/5531))，由 @mytharcher 貢獻

  - 調整通知插件頻道類型註冊表名稱 ([#5532](https://github.com/nocobase/nocobase/pull/5532))，由 @mytharcher 貢獻

  - 新增通知管理器插件 API，用於取得所有已註冊類型 ([#5529](https://github.com/nocobase/nocobase/pull/5529))，由 @mytharcher 貢獻

- **[通知：應用內訊息]** 改善應用內訊息 UI 並新增部分日誌 ([#5550](https://github.com/nocobase/nocobase/pull/5550))，由 @sheldon66 貢獻

### 🐛 錯誤修復

- **[資料庫]**
  - 修復使用篩選目標鍵更新集合選項的問題 ([#5558](https://github.com/nocobase/nocobase/pull/5558))，由 @chareice 貢獻

  - 修復在 sequelize 中搭配多重篩選目標鍵時，primaryKeyField 值錯誤的問題 ([#5556](https://github.com/nocobase/nocobase/pull/5556))，由 @chareice 貢獻

- **[客戶端]**
  - 修復表格區塊中骨架元件不消失的問題 ([#5548](https://github.com/nocobase/nocobase/pull/5548))，由 @zhangzhonghe 貢獻

  - 修復子表格中刪除動作、文字省略與新增資料顯示的問題 ([#5523](https://github.com/nocobase/nocobase/pull/5523))，由 @katherinehhh 貢獻

- **[資料來源管理器]** 修復移除處於失敗狀態的資料來源 ([#5554](https://github.com/nocobase/nocobase/pull/5554))，由 @chareice 貢獻

- **[通知：電子郵件]**
  - 修復電子郵件通知中依 ID 查詢使用者的查詢問題 ([#5533](https://github.com/nocobase/nocobase/pull/5533))，由 @mytharcher 貢獻

  - 修復基於使用者 ID 的電子郵件通知中遺漏主旨的問題 ([#5534](https://github.com/nocobase/nocobase/pull/5534))，由 @mytharcher 貢獻

  - 修復電子郵件通知動態表單中反應欄位路徑的問題 ([#5527](https://github.com/nocobase/nocobase/pull/5527))，由 @mytharcher 貢獻

- **[集合欄位：多對多（陣列）]** 修復多對多（陣列）欄位的選擇元件僅有一個選項的問題 ([#5544](https://github.com/nocobase/nocobase/pull/5544))，由 @2013xile 貢獻

- **[通知管理器]** 修復因頻道類型錯誤導致頁面崩潰的問題 ([#5528](https://github.com/nocobase/nocobase/pull/5528))，由 @mytharcher 貢獻

- **[工作流：SQL 節點]** 修復 SSE 導致「waitForLoadState(‘networkidle’)」超時的問題 ([#5524](https://github.com/nocobase/nocobase/pull/5524))，由 @hongboji 貢獻

- **[欄位元件：遮罩]** 修復當元件處於唯讀狀態時，無法透過點擊顯示原始資料的問題，由 @gchust 貢獻

- **[工作流：自訂動作事件]** 修復 SSE 導致「waitForLoadState(‘networkidle’)」超時的問題，由 @hongboji 貢獻

- **[WeCom]** 修復從企業微信工作台進入應用時回應 404 找不到的問題，由 @chenzhizdt 貢獻
