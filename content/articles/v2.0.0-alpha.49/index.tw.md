---
title: "NocoBase v2.0.0-alpha.49：允許在審批流程 UI 中選擇顯示快照或最新記錄"
description: "v2.0.0-alpha.49 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 允許在審批流程 UI 中選擇顯示快照或最新記錄，作者：@mytharcher

### 🚀 改進

- **[客戶端]** 優化子表格的驗證訊息 ([#8001](https://github.com/nocobase/nocobase/pull/8001))，作者：@katherinehhh

- **[遙測：Prometheus]** 升級 `@opentelemetry/exporter-prometheus`，作者：@2013xile

- **[操作：匯入記錄 Pro]** 增強非同步任務的錯誤訊息，為使用者提供任務失敗的具體原因，作者：@mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 修正在詳細區塊中無法正確觸發當前記錄變數解析的問題。([#8004](https://github.com/nocobase/nocobase/pull/8004))，作者：@gchust

- **[客戶端]** 修正複合主鍵的表格區塊選取與刪除問題 ([#7978](https://github.com/nocobase/nocobase/pull/7978))，作者：@katherinehhh

- **[操作：匯出記錄]** 修正可匯出欄位清單中缺少系統欄位的問題 ([#8002](https://github.com/nocobase/nocobase/pull/8002))，作者：@katherinehhh

- **[集合：樹狀結構]** 修正因樹狀父欄位查詢錯誤導致的路徑表更新失敗 ([#8000](https://github.com/nocobase/nocobase/pull/8000))，作者：@2013xile

- **[集合欄位：多對多（陣列）]** 修正子表格中的 m2m 陣列欄位無法更新的問題 ([#7998](https://github.com/nocobase/nocobase/pull/7998))，作者：@cgyrock

- **[部門]** 修正部門關聯欄位無法編輯的問題 ([#7462](https://github.com/nocobase/nocobase/pull/7462))，作者：@heziqiang

- **[工作流：審批]** 修正因 `RemoteSelect` 變更導致取得 `approvalRecords.reassignee` 時的權限問題，作者：@mytharcher
