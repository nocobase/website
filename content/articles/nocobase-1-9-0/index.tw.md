---
title: "NocoBase v1.9.0 正式发布"
description: "增强数据验证与任务调度功能，支持服务解耦与优雅关闭，提升系统整体稳定性与灵活性。"
---

## 新功能

### 欄位驗證規則

支援為欄位配置多種驗證規則，例如必填、格式、長度、範圍及自訂表達式。
提交表單時會自動驗證輸入資料，確保資料的正確性與一致性。
驗證規則可在欄位設定中靈活配置。

![Field_validations.gif](https://static-docs.nocobase.com/20251031111521_rec_-6mjzt5.gif)

參考資料：[欄位驗證](https://docs.nocobase.com/handbook/data-modeling/collection-fields/validation)

### 表格區塊支援欄位設定

表格區塊現在新增了「欄位設定」功能，使用者無需進入編輯模式即可調整欄位順序、顯示狀態及固定位置，讓資料顯示更靈活且易於使用。

![20251031113318_rec_-5ffltd.gif](https://static-docs.nocobase.com/20251031113318_rec_-5ffltd.gif)

### 審批支援「資料儲存前」觸發模式

審批現在支援「資料儲存前」觸發模式 — 啟用後，審批啟動時資料不會被儲存，僅在審批通過後才會寫入資料庫。

![image-m52wzz.png](https://static-docs.nocobase.com/image-m52wzz.png)

### 審批觸發器公開審批 ID 變數

審批觸發器現在會公開審批 ID 變數，讓您可以在工作流程與自動化流程中引用它，實現更靈活的配置與資料追蹤。

![approcal_id.png](https://static-docs.nocobase.com/image-qsspfn.png)

### [非同步任務管理器] 支援透過環境變數與佇列進行服務拆分

引入新的服務拆分機制，允許透過 `WORKER_MODE` 環境變數讓非同步任務與工作流程服務獨立運行 — 實現多節點部署與效能最佳化。

![20250803214857](https://static-docs.nocobase.com/20250803214857.png)

參考資料：[服務拆分](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode/services-splitting)

### 新增事件佇列用於處理佇列訊息

新增一個專門的事件佇列來處理系統佇列訊息，提升非同步任務的處理能力與可靠性。

參考資料：[叢集模式：訊息佇列](https://docs.nocobase.com/welcome/getting-started/deployment/cluster-mode#message-queue)

### 支援優雅關閉生命週期

引入優雅關閉處理機制。
當應用程式進程收到 SIGTERM 或 SIGINT 訊號時，現在會啟動適當的關閉順序，以防止正在進行的操作出現問題。

## 改進

### 系統資料表改用 53 位元雪花演算法 ID

將先前使用自增主鍵且不具全域唯一性的系統資料表 ID，更新為 53 位元雪花演算法 ID，以實現全域唯一識別。

![image-jrjc7e.png](https://static-docs.nocobase.com/image-jrjc7e.png)

### 從已停用工作流程檢視與繼續任務

手動任務區塊現在會顯示來自已停用工作流程的待處理任務，並允許使用者繼續處理它們。

### 郵件管理員增強功能

* 郵件資料支援重新同步
* 允許調整插入郵件編輯器中的圖片大小。
* 富文字編輯器現在支援軟換行，改善郵件格式體驗。
* 改善郵件列表效能，操作更流暢。

![20251031234300_rec_-jifryr.gif](https://static-docs.nocobase.com/20251031234300_rec_-jifryr.gif)

### 工作流程模組最佳化

* 透過引入分離欄位與索引，最佳化工作流程佇列執行中的查詢效能，加快資料檢索速度。

![Workflow Module.png](https://static-docs.nocobase.com/image-5b3byb.png)
