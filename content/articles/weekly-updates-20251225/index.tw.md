---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：在工作流程中新增系統變數，包括 `instanceId` 和 `genSnowflakeId` 等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.32](https://www.nocobase.com/en/blog/v1.9.32)

*發布日期：2025-12-24*

### 🎉 新功能

- **[工作流程]** 在工作流程中新增系統變數，包括 `instanceId` 和 `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223))，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復顯示關聯欄位懶加載時因無限循環導致的堆疊溢位問題 ([#8262](https://github.com/nocobase/nocobase/pull/8262))，作者：@zhangzhonghe
- **[操作：匯入記錄]** 修復在匯入操作中拋出錯誤時，錯誤訊息中的行索引始終為 1 的問題 ([#8244](https://github.com/nocobase/nocobase/pull/8244))，作者：@mytharcher
- **[工作流程：人工節點]** 修復取消執行已刪除工作流程時拋出錯誤的問題 ([#8258](https://github.com/nocobase/nocobase/pull/8258))，作者：@mytharcher
- **[資料表欄位：序號]** 修復當欄位序號修復指令遇到目前環境中不存在的資料表時發生的錯誤。([#8251](https://github.com/nocobase/nocobase/pull/8251))，作者：@cgyrock
- **[操作：匯入記錄 Pro]** 修復當唯一欄位的值為 null 時，唯一性檢查邏輯會拋出錯誤的問題，作者：@mytharcher
- **[工作流程：審批]** 修復相同事務重複回滾的問題，作者：@mytharcher

### [v1.9.31](https://www.nocobase.com/en/blog/v1.9.31)

*發布日期：2025-12-22*

### 🚀 改進

- **[非同步任務管理器]** 透過新增異常捕獲機制，改進了清理任務期間的錯誤處理，以防止應用程式崩潰 ([#8215](https://github.com/nocobase/nocobase/pull/8215))，作者：@mytharcher
- **[工作流程]** 為複製 API 添加原始工作流程實例 ([#8225](https://github.com/nocobase/nocobase/pull/8225))，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]** 處理空連結規則以防止錯誤 ([#8239](https://github.com/nocobase/nocobase/pull/8239))，作者：@zhangzhonghe
- **[部門]** 修復聚合搜尋無法定位使用者的問題 ([#8222](https://github.com/nocobase/nocobase/pull/8222))，作者：@2013xile

### [v1.9.30](https://www.nocobase.com/en/blog/v1.9.30)

*發布日期：2025-12-19*

### 🚀 改進

- **[工作流程]** 改進資料表事件中 `changed` 欄位的描述 ([#8216](https://github.com/nocobase/nocobase/pull/8216))，作者：@mytharcher

### 🐛 錯誤修復

- **[cli]** license-kit 相容於 DB_PASSWORD 為空的情況 ([#8220](https://github.com/nocobase/nocobase/pull/8220))，作者：@jiannx
- **[資料庫]** 修復主資料源與外部資料源之間日期欄位查詢不一致的問題 ([#8181](https://github.com/nocobase/nocobase/pull/8181))，作者：@cgyrock
- **[授權設定]** 修復已授權外掛顯示異常的問題 ([#8214](https://github.com/nocobase/nocobase/pull/8214))，作者：@jiannx
- **[工作流程：審批]**

  - 修復審批導致關聯建立新記錄的問題，作者：@mytharcher
  - 修復審批導致多對多關聯建立新記錄的問題，作者：@mytharcher

### [v1.9.29](https://www.nocobase.com/en/blog/v1.9.29)

*發布日期：2025-12-18*

### 🐛 錯誤修復

- **[工作流程]** 修復刪除非目前工作流程版本時拋出錯誤的問題 ([#8203](https://github.com/nocobase/nocobase/pull/8203))，作者：@mytharcher
- **[遷移管理器]** 修復遺失遷移描述並將目前時間設為預設值的問題，作者：@cgyrock

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.58](https://www.nocobase.com/en/blog/v2.0.0-alpha.58)

*發布日期：2025-12-24*

### 🐛 錯誤修復

- **[AI 員工]** 解決 LLM 節點訊息內容未顯示的問題 ([#8257](https://github.com/nocobase/nocobase/pull/8257))，作者：@heziqiang

### [v2.0.0-alpha.57](https://www.nocobase.com/en/blog/v2.0.0-alpha.57)

*發布日期：2025-12-24*

### 🎉 新功能

- **[工作流程]** 在工作流程中新增系統變數，包括 `instanceId` 和 `genSnowflakeId` ([#8223](https://github.com/nocobase/nocobase/pull/8223))，作者：@mytharcher

### 🚀 改進

- **[客戶端]** 使用 select 元件進行操作列寬度配置 ([#8218](https://github.com/nocobase/nocobase/pull/8218))，作者：@katherinehhh
- **[AI 員工]** 修復 AI 員工在首次編輯提交時無回應的問題<br/>刪除不必要的內建 AI 員工「Avery 表單助手」<br/>為內建 AI 員工添加預設初始角色權限<br/>改進 AI 員工的錯誤處理和輸出行為<br/>新增 AI 存取模態框上下文變數的支援<br/>新增 AI 對外部資料源的支援<br/>修復 AI 處理大量資料時對話截斷不正確的問題 ([#8191](https://github.com/nocobase/nocobase/pull/8191))，作者：@heziqiang
- **[工作流程]**

  - 為複製 API 添加原始工作流程實例 ([#8225](https://github.com/nocobase/nocobase/pull/8225))，作者：@mytharcher
  - 改進資料表事件中 `changed` 欄位的描述 ([#8216](https://github.com/nocobase/nocobase/pull/8216))，作者：@mytharcher
- **[非同步任務管理器]** 透過新增異常捕獲機制，改進了清理任務期間的錯誤處理，以防止應用程式崩潰 ([#8215](https://github.com/nocobase/nocobase/pull/8215))，作者：@mytharcher
- **[區塊：操作面板]** 改進配置模式下隱藏區塊、操作和欄位的顯示 ([#8174](https://github.com/nocobase/nocobase/pull/8174))，作者：@katherinehhh
- **[UI 模板]** 新增 UI 模板外掛，提供區塊模板和彈窗模板的複用能力。([#8163](https://github.com/nocobase/nocobase/pull/8163))，作者：@gchust
- **[操作：匯出記錄 Pro]** 匯入 Pro 和匯出 Pro 操作支援權限控制，作者：@katherinehhh
- **[工作流程：審批]** 在執行結束時，將 `approval.data` 更新為審批記錄的最新版本，以符合「最新」記錄顯示模式，作者：@mytharcher

### 🐛 錯誤修復

- **[流程引擎]**

  - 修復樹狀表格中新增子記錄的權限檢查問題 ([#8240](https://github.com/nocobase/nocobase/pull/8240))，作者：@katherinehhh
  - 修復某些區塊彈窗記錄相關變數顯示不正確的問題。([#8060](https://github.com/nocobase/nocobase/pull/8060))，作者：@gchust
  - 修復拖曳操作或頁籤後，新增的操作或頁籤不顯示的問題。([#8224](https://github.com/nocobase/nocobase/pull/8224))，作者：@gchust
  - 外部資料源的權限檢查問題 ([#8221](https://github.com/nocobase/nocobase/pull/8221))，作者：@katherinehhh
  - 修復外部資料源操作雖有權限卻被隱藏的問題 ([#8217](https://github.com/nocobase/nocobase/pull/8217))，作者：@katherinehhh
- **[客戶端]**

  - 處理空連結規則以防止錯誤 ([#8239](https://github.com/nocobase/nocobase/pull/8239))，作者：@zhangzhonghe
  - 修復表格區塊的操作列無法移除的問題。([#8230](https://github.com/nocobase/nocobase/pull/8230))，作者：@gchust
  - 修復預覽執行將編譯後的 JSX 輸出寫回 stepParams，導致已儲存的原始碼被重寫的問題。([#8171](https://github.com/nocobase/nocobase/pull/8171))，作者：@gchust
  - 修復 S3 Pro 附件上傳錯誤並改進檔案預覽 ([#8211](https://github.com/nocobase/nocobase/pull/8211))，作者：@katherinehhh
- **[cli]** license-kit 相容於 DB_PASSWORD 為空的情況 ([#8220](https://github.com/nocobase/nocobase/pull/8220))，作者：@jiannx
- **[資料庫]** 修復主資料源與外部資料源之間日期欄位查詢不一致的問題 ([#8181](https://github.com/nocobase/nocobase/pull/8181))，作者：@cgyrock
- **[資料表欄位：序號]** 修復當欄位序號修復指令遇到目前環境中不存在的資料表時發生的錯誤。([#8251](https://github.com/nocobase/nocobase/pull/8251))，作者：@cgyrock
- **[工作流程：人工節點]** 修復取消執行已刪除工作流程時拋出錯誤的問題 ([#8258](https://github.com/nocobase/nocobase/pull/8258))，作者：@mytharcher
- **[UI 模板]** 修復開啟關聯欄位彈窗時，錯誤地使用了非關聯欄位彈窗模板的問題。([#8233](https://github.com/nocobase/nocobase/pull/8233))，作者：@gchust
- **[部門]** 修復聚合搜尋無法定位使用者的問題 ([#8222](https://github.com/nocobase/nocobase/pull/8222))，作者：@2013xile
- **[資料表欄位：多對多（陣列）]** 修復當目標鍵類型為 Snowflake ID（53 位元）時，無法建立多對多（陣列）欄位的問題 ([#8226](https://github.com/nocobase/nocobase/pull/8226))，作者：@2013xile
- **[授權設定]** 修復已授權外掛顯示異常的問題 ([#8214](https://github.com/nocobase/nocobase/pull/8214))，作者：@jiannx
- **[操作：匯入記錄]** 修復在匯入操作中拋出錯誤時，錯誤訊息中的行索引始終為 1 的問題 ([#8244](https://github.com/nocobase/nocobase/pull/8244))，作者：@mytharcher
- **[模板列印]** 修復模板列印請求無法與外部資料源協同工作的問題，作者：@katherinehhh
- **[工作流程：審批]**

  - 修復相同事務重複回滾的問題，作者：@mytharcher
  - 修復審批導致關聯建立新記錄的問題，作者：@mytharcher
  - 修復審批導致多對多關聯建立新記錄的問題，作者：@mytharcher

### [v2.0.0-alpha.56](https://www.nocobase.com/en/blog/v2.0.0-alpha.56)

*發布日期：2025-12-18*

### 🚀 改進

- **[客戶端]** 支援表格欄位的自訂欄寬 ([#8200](https://github.com/nocobase/nocobase/pull/8200))，作者：@katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 防止在調整欄位大小時，行總寬度溢位 ([#8166](https://github.com/nocobase/nocobase/pull/8166))，作者：@zhangzhonghe
- **[流程引擎]** 修復透過彈窗 uid 在複用的模態框中提交表單時，不會重新整理區塊資料的問題。([#8202](https://github.com/nocobase/nocobase/pull/8202))，作者：@gchust
- **[資料表欄位：公式]** 修復 BigInt 欄位無法新增到詳情區塊和表單區塊的問題 ([#8201](https://github.com/nocobase/nocobase/pull/8201))，作者：@katherinehhh
- **[工作流程]** 修復刪除非目前工作流程版本時拋出錯誤的問題 ([#8203](https://github.com/nocobase/nocobase/pull/8203))，作者：@mytharcher
