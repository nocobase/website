---
title: "NocoBase v2.2.0-beta.3：為工作流程郵件節點新增附件支援。"
description: "v2.2.0-beta.3 版本發行說明"
---

### 🎉 新功能

* **[工作流：郵件節點]** 工作流郵件節點新增支援傳送附件功能。([#9724](https://github.com/nocobase/nocobase/pull/9724)) by @mytharcher
* **[工作流]** 工作流新增支援資料庫交易範圍。([#9742](https://github.com/nocobase/nocobase/pull/9742)) by @mytharcher
  參考：[資料庫交易](docs/docs/en/workflow/nodes/transaction.md)
* **[工作流：資料庫交易節點]** 新增資料庫交易工作流節點外掛。 by @mytharcher

### 🚀 改進

* **[client-v2]** 表單子表格中的關聯欄位，現在在資料範圍中支援當前項目變數。([#9444](https://github.com/nocobase/nocobase/pull/9444)) by @gchust
* **[undefined]** 統一版本控制外掛的中文文件名稱為「版本控制」。([#9776](https://github.com/nocobase/nocobase/pull/9776)) by @cgyrock
* **[檔案管理]** 檔案管理中的 PDF 預覽，針對內嵌文字的 PDF 新增支援文字選取功能。([#9781](https://github.com/nocobase/nocobase/pull/9781)) by @mytharcher
* **[使用者]** 改進 v2 使用者與權限頁面的佈局，並優化部門樹狀結構的行為。([#9780](https://github.com/nocobase/nocobase/pull/9780)) by @jiannx
* **[動作：批次編輯]** 優化 v2 動作外掛的載入方式，並保持遷移後動作按鈕的順序穩定。([#9778](https://github.com/nocobase/nocobase/pull/9778)) by @katherinehhh
* **[版本控制]** 將版本控制外掛的中文顯示名稱重新命名為「版本控制」。 by @cgyrock

### 🐛 錯誤修復

* **[cli-v1]** 修復將使用 create-nocobase-app 建立的專案從 2.0 升級至 2.1 後，執行 `<span>yarn dev</span>` 時發生的錯誤。([#9775](https://github.com/nocobase/nocobase/pull/9775)) by @Molunerfinn
* **[flow-engine]** 修復 v2 單行文字與多行文字欄位中，越南語及中文輸入法（IME）的輸入問題。([#9764](https://github.com/nocobase/nocobase/pull/9764)) by @katherinehhh
* **[client-v2]** 修復遷移進度未顯示專用進度檢視的問題。([#9761](https://github.com/nocobase/nocobase/pull/9761)) by @2013xile
* **[server]** 修復 `<span>pm:enable</span>` 中外掛名稱處理不安全的問題，以避免外掛解析期間的本地檔案包含風險。([#9701](https://github.com/nocobase/nocobase/pull/9701)) by @mytharcher
* **[非同步任務管理器]** 修復下載非同步任務檔案時，因缺少 `<span>filterByTk</span>` 導致的資料庫查詢錯誤。([#9705](https://github.com/nocobase/nocobase/pull/9705)) by @mytharcher
* **[檔案管理]** 修復因 pdf.js worker 模組載入異常導致的 PDF 預覽失敗問題。([#9779](https://github.com/nocobase/nocobase/pull/9779)) by @mytharcher
* **[區塊：看板]** 修復在非編輯模式下開啟日曆、甘特圖及看板區塊時，意外持久化隱藏彈出動作並重複發送刪除請求的問題。([#9772](https://github.com/nocobase/nocobase/pull/9772)) by @jiannx
* **[動作：匯出記錄 Pro]** 改進 v2 匯入/匯出 Pro 的處理模式設定與說明文字。 by @katherinehhh
* **[多空間]** 修復空間管理員在沒有使用者電子郵件欄位權限時，無法新增空間使用者的問題。 by @jiannx
* **[遷移管理器]** 修復匯入大型遷移資料檔案時可能發生的失敗問題。 by @2013xile
* **[範本列印]** 在範本列印開始前，拒絕不支援的範本檔案類型。 by @2013xile
