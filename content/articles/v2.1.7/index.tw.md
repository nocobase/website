---
title: "NocoBase v2.1.7：支援 KingBase 作為主資料庫的備份與還原"
description: "v2.1.7 版本發行說明"
---

### 🎉 新功能

- **[備份管理器]** 支援以 KingBase 作為主資料庫的備份與還原 ([#9791](https://github.com/nocobase/nocobase/pull/9791)) - @2013xile
- **[遷移管理器]** 支援以 KingBase 作為主資料庫的遷移。 - @2013xile

### 🚀 改進

- **[AI：知識庫]** 改進 AI 知識庫的檢索與文件。 ([#9765](https://github.com/nocobase/nocobase/pull/9765)) - @cgyrock
- **[cli]** 新增環境設定架構版本 ([#9782](https://github.com/nocobase/nocobase/pull/9782)) - @chenos
- **[工作流]** 穩定更新選項測試 ([#9773](https://github.com/nocobase/nocobase/pull/9773)) - @mytharcher
- **[檔案管理器]** 改進 PDF 預覽：跨來源 PDF 檔案現在使用瀏覽器原生檢視器，而同來源 PDF 檔案則繼續使用 PDF.js。 ([#9796](https://github.com/nocobase/nocobase/pull/9796)) - @mytharcher
- **[備份管理器]** 集合的 `dataCategory` 標記為 `'runtime'` 的資料表現在會自動從備份中排除。 ([#9804](https://github.com/nocobase/nocobase/pull/9804)) - @cgyrock
- **[AI：知識庫]** 改進 AI 知識庫的文件分段、分段管理、命中測試以及文件工作流程節點支援。 - @cgyrock

### 🐛 錯誤修復

- **[client-v2]**

  - 修正當子表單包含子表格時，表單提交會顯示錯誤訊息的問題。 ([#9807](https://github.com/nocobase/nocobase/pull/9807)) - @gchust
  - 修正子表格欄位上事件流程會錯誤執行的問題。 ([#9821](https://github.com/nocobase/nocobase/pull/9821)) - @gchust
  - 從關聯欄位移除不必要的 `updateAssociationValues` ([#9812](https://github.com/nocobase/nocobase/pull/9812)) - @katherinehhh
  - 修正 v2 篩選表單中核取方塊下拉選單的「是/否」選項未翻譯的問題。 ([#9792](https://github.com/nocobase/nocobase/pull/9792)) - @katherinehhh
  - 修正將區塊儲存為範本後，無法更新事件流程設定的問題。 ([#9585](https://github.com/nocobase/nocobase/pull/9585)) - @gchust
  - 修正 v2 表格關聯標題欄位使用時間、僅日期或日期時間欄位時，顯示與格式設定不正確的問題。 ([#9785](https://github.com/nocobase/nocobase/pull/9785)) - @katherinehhh
- **[工作流]** 修正工作流程調度器在發生意外調度錯誤後的恢復問題。 ([#9783](https://github.com/nocobase/nocobase/pull/9783)) - @mytharcher
- **[檔案管理器]** 修正上傳檔案至外部資料來源的附件 URL 欄位時出現 404 錯誤的問題 ([#9809](https://github.com/nocobase/nocobase/pull/9809)) - @2013xile
- **[動作：自訂請求]** 修正 V2 自訂請求動作在未設定請求設定時顯示不必要錯誤的問題。 ([#9802](https://github.com/nocobase/nocobase/pull/9802)) - @katherinehhh
- **[AI 員工]**

  - 修正 AI 員工無法正確填入子表格資料的問題。 ([#9801](https://github.com/nocobase/nocobase/pull/9801)) - @gchust
  - 修正 AI 員工捷徑任務觸發器，使其在從捷徑設定檔執行任務時，能包含當前工作上下文中的附件。 ([#9808](https://github.com/nocobase/nocobase/pull/9808)) - @cgyrock
- **[工作流：自訂動作事件]** 修正動作面板 v2 觸發工作流程按鈕在未綁定工作流程時顯示成功並發送請求的問題。 ([#9798](https://github.com/nocobase/nocobase/pull/9798)) - @mytharcher
- **[流程引擎]** 修正由 AI 建構的彈出視窗中，當前記錄表單與詳情可能包含不正確資料的問題。 ([#9788](https://github.com/nocobase/nocobase/pull/9788)) - @gchust
- **[非同步任務管理器]** 修正當 `filterByTk` 中缺少任務 ID 時，非同步任務檔案下載錯誤的問題。 ([#9705](https://github.com/nocobase/nocobase/pull/9705)) - @mytharcher
- **[資料來源：外部 NocoBase]** 透過上傳資料來源代理 NocoBase 外部資料來源的檔案上傳與儲存動作 - @2013xile
- **[多空間]** 修正空間管理員在新增無權存取使用者電子郵件欄位的使用者時出現的權限錯誤。 - @jiannx
- **[工作流：子流程]** 修正非同步子流程，使父工作流程能在工作者重啟或記憶體內事件映射遺失後恢復執行。 - @mytharcher
- **[應用程式監控]** 修正遠端 WebSocket 代理回應失敗時的崩潰問題 - @2013xile
