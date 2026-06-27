---
title: "NocoBase v2.0.0-alpha.57：在工作流中新增系統變數，包括 `instanceId` 和 `genSnowflakeId`"
description: "v2.0.0-alpha.57 版本發佈說明"
---

### 🎉 新功能

- **[工作流程]** 在工作流程中新增系統變數，包含 `instanceId` 與 `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223)) - 貢獻者 @mytharcher

### 🚀 改進

- **[客戶端]** 使用下拉選單配置操作欄寬度 ([#8218](https://github.com/nocobase/nocobase/pull/8218)) - 貢獻者 @katherinehhh
- **[AI 員工]** 修復 AI 員工在首次編輯提交時無回應的問題<br/>刪除不必要的內建 AI 員工「Avery 表單助手」<br/>為內建 AI 員工新增預設初始角色權限<br/>改善 AI 員工的錯誤處理與輸出行為<br/>新增 AI 存取彈窗上下文變數的支援<br/>新增 AI 外部資料來源的支援<br/>修復 AI 處理大量資料時對話截斷不正確的問題 ([#8191](https://github.com/nocobase/nocobase/pull/8191)) - 貢獻者 @heziqiang
- **[工作流程]**

  - 在複製 API 中新增原始工作流程實例 ([#8225](https://github.com/nocobase/nocobase/pull/8225)) - 貢獻者 @mytharcher
  - 改善集合事件中 `changed` 欄位的描述 ([#8216](https://github.com/nocobase/nocobase/pull/8216)) - 貢獻者 @mytharcher
- **[非同步任務管理器]** 改善清理任務期間的錯誤處理，新增異常捕獲機制以防止應用程式崩潰 ([#8215](https://github.com/nocobase/nocobase/pull/8215)) - 貢獻者 @mytharcher
- **[區塊：操作面板]** 改善配置模式下隱藏區塊、操作與欄位的顯示 ([#8174](https://github.com/nocobase/nocobase/pull/8174)) - 貢獻者 @katherinehhh
- **[UI 模板]** 新增 UI 模板插件，提供區塊模板與彈窗模板的重複使用能力。([#8163](https://github.com/nocobase/nocobase/pull/8163)) - 貢獻者 @gchust
- **[操作：匯出記錄 Pro]** 匯入 Pro 與匯出 Pro 操作支援權限控制 - 貢獻者 @katherinehhh
- **[工作流程：審批]** 在執行結束時，將 `approval.data` 更新為審批記錄的最新版本，以符合「最新」記錄顯示模式 - 貢獻者 @mytharcher

### 🐛 錯誤修復

- **[流程引擎]**

  - 修復樹狀表格中新增子記錄的權限檢查問題 ([#8240](https://github.com/nocobase/nocobase/pull/8240)) - 貢獻者 @katherinehhh
  - 修復部分區塊彈窗記錄相關變數顯示錯誤的問題。([#8060](https://github.com/nocobase/nocobase/pull/8060)) - 貢獻者 @gchust
  - 修復拖曳操作或標籤頁後，新增的操作或標籤頁無法顯示的問題。([#8224](https://github.com/nocobase/nocobase/pull/8224)) - 貢獻者 @gchust
  - 外部資料來源的權限檢查問題 ([#8221](https://github.com/nocobase/nocobase/pull/8221)) - 貢獻者 @katherinehhh
  - 修復外部資料來源操作雖有權限卻被隱藏的問題 ([#8217](https://github.com/nocobase/nocobase/pull/8217)) - 貢獻者 @katherinehhh
- **[客戶端]**

  - 處理空聯動規則以防止錯誤 ([#8239](https://github.com/nocobase/nocobase/pull/8239)) - 貢獻者 @zhangzhonghe
  - 修復表格區塊的操作欄無法移除的問題。([#8230](https://github.com/nocobase/nocobase/pull/8230)) - 貢獻者 @gchust
  - 修復預覽執行將編譯後的 JSX 輸出寫回 stepParams，導致已儲存的原始碼被重寫的問題。([#8171](https://github.com/nocobase/nocobase/pull/8171)) - 貢獻者 @gchust
  - 修復 S3 Pro 附件上傳錯誤並改善檔案預覽 ([#8211](https://github.com/nocobase/nocobase/pull/8211)) - 貢獻者 @katherinehhh
- **[命令列]** license-kit 相容於 DB_PASSWORD 為空的情況 ([#8220](https://github.com/nocobase/nocobase/pull/8220)) - 貢獻者 @jiannx
- **[資料庫]** 修復主資料庫與外部資料庫之間日期欄位查詢不一致的問題 ([#8181](https://github.com/nocobase/nocobase/pull/8181)) - 貢獻者 @cgyrock
- **[集合欄位：序號]** 修復當欄位序號修復指令遇到目前環境中不存在的集合時發生的錯誤。([#8251](https://github.com/nocobase/nocobase/pull/8251)) - 貢獻者 @cgyrock
- **[工作流程：人工節點]** 修復取消執行已刪除工作流程時拋出錯誤的問題 ([#8258](https://github.com/nocobase/nocobase/pull/8258)) - 貢獻者 @mytharcher
- **[UI 模板]** 修復開啟關聯欄位彈窗時，錯誤使用非關聯欄位彈窗模板的問題。([#8233](https://github.com/nocobase/nocobase/pull/8233)) - 貢獻者 @gchust
- **[部門]** 修復聚合搜尋無法定位使用者的問題 ([#8222](https://github.com/nocobase/nocobase/pull/8222)) - 貢獻者 @2013xile
- **[集合欄位：多對多（陣列）]** 修復當目標鍵類型為 Snowflake ID（53 位元）時，無法建立多對多（陣列）欄位的問題 ([#8226](https://github.com/nocobase/nocobase/pull/8226)) - 貢獻者 @2013xile
- **[授權設定]** 修復已授權插件顯示異常的問題 ([#8214](https://github.com/nocobase/nocobase/pull/8214)) - 貢獻者 @jiannx
- **[操作：匯入記錄]** 修復匯入操作中發生錯誤時，錯誤訊息中的行索引始終為 1 的問題 ([#8244](https://github.com/nocobase/nocobase/pull/8244)) - 貢獻者 @mytharcher
- **[模板列印]** 修復模板列印請求無法與外部資料來源配合使用的問題 - 貢獻者 @katherinehhh
- **[工作流程：審批]**

  - 修復相同交易重複回滾的問題 - 貢獻者 @mytharcher
  - 修復審批導致關聯建立新記錄的問題 - 貢獻者 @mytharcher
  - 修復審批導致多對多關聯建立新記錄的問題 - 貢獻者 @mytharcher
