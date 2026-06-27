---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：郵件管理器支援批次同步、工作流程審批支援退回至審批流程中的任意節點，以及更多。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.7](https://www.nocobase.com/en/blog/v1.9.0-beta.7)

*發布日期：2025-09-11*

#### 🎉 新功能

- **[工作流：審批]** 支援退回至審批流程中的任意節點，作者：@mytharcher

#### 🚀 改進

- **[客戶端]** 移除檔案列表中的省略號彈出視窗 ([#7479](https://github.com/nocobase/nocobase/pull/7479))，作者：@mytharcher
- **[伺服器]** 為訊息佇列使用標準系統日誌記錄器 ([#7480](https://github.com/nocobase/nocobase/pull/7480))，作者：@mytharcher
- **[資料庫]** 優化列表 API 的計數查詢以減少資源消耗。([#7453](https://github.com/nocobase/nocobase/pull/7453))，作者：@aaaaaajie
- **[通知：應用內訊息]** 支援配置應用內訊息通知的自動關閉延遲 ([#7472](https://github.com/nocobase/nocobase/pull/7472))，作者：@mytharcher
- **[工作流]**

  - 優化工作流準備流程，支援使用預載入的節點資料 ([#7476](https://github.com/nocobase/nocobase/pull/7476))，作者：@mytharcher
  - 透過使用單獨的欄位和索引，優化檢索佇列執行的查詢效能 ([#7448](https://github.com/nocobase/nocobase/pull/7448))，作者：@mytharcher
  - 調整工作流變數 API，支援預設一個額外的變數列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439))，作者：@mytharcher
- **[工作流：通知節點]** 支援測試通知節點 ([#7470](https://github.com/nocobase/nocobase/pull/7470))，作者：@mytharcher
- **[工作流：審批]**

  - 支援在自訂通知中使用與審批相關的變數，作者：@mytharcher
  - 支援在結束節點終止執行後更新審批狀態，作者：@mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 連結規則中數字欄位的「不為空」檢查不正確 ([#7477](https://github.com/nocobase/nocobase/pull/7477))，作者：@katherinehhh
  - 在編輯表單區塊中切換為標籤元件時，關聯欄位渲染錯誤 ([#7468](https://github.com/nocobase/nocobase/pull/7468))，作者：@katherinehhh
  - 在公開表單上，唯讀的單選/多選/日期/富文字欄位仍可編輯 ([#7484](https://github.com/nocobase/nocobase/pull/7484))，作者：@katherinehhh
  - 當選取日期等於最小日期時的時間限制問題 ([#7461](https://github.com/nocobase/nocobase/pull/7461))，作者：@katherinehhh
  - 子表格中附件欄位的必填驗證未生效 ([#7431](https://github.com/nocobase/nocobase/pull/7431))，作者：@katherinehhh
  - 修正在某些情況下，在行動端記錄選擇器彈窗中編輯記錄會導致錯誤的問題 ([#7444](https://github.com/nocobase/nocobase/pull/7444))，作者：@zhangzhonghe
- **[未定義]** 修復僅在 MySQL 外部來源中按日期欄位篩選的問題 ([#7422](https://github.com/nocobase/nocobase/pull/7422))，作者：@aaaaaajie
- **[資料庫]**

  - 修正在載入更多應用內訊息時發生的 MySQL 語法錯誤。([#7438](https://github.com/nocobase/nocobase/pull/7438))，作者：@aaaaaajie
  - 修正匯出的數字欄位精度問題 ([#7421](https://github.com/nocobase/nocobase/pull/7421))，作者：@aaaaaajie
- **[行動端]** 行動端無時區的日期欄位未正確顯示日期時間 ([#7473](https://github.com/nocobase/nocobase/pull/7473))，作者：@katherinehhh
- **[公開表單]** 使用變數時，公開表單欄位的預設值未套用 ([#7467](https://github.com/nocobase/nocobase/pull/7467))，作者：@katherinehhh
- **[集合：樹]** 刪除樹集合後，移除與該集合相關的資料庫事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459))，作者：@2013xile
- **[檔案管理]** 修正編輯檔案集合中 `storage` 欄位時的錯誤。([#7393](https://github.com/nocobase/nocobase/pull/7393))，作者：@mytharcher
- **[動作：匯入記錄]**

  - 修正匯入重複資料時顯示的錯誤行號 ([#7440](https://github.com/nocobase/nocobase/pull/7440))，作者：@aaaaaajie
  - 修正當資料表主鍵為單行文字時匯入失敗的問題 ([#7416](https://github.com/nocobase/nocobase/pull/7416))，作者：@aaaaaajie
- **[工作流]**

  - 補全自動刪除工作流執行狀態的選項 ([#7436](https://github.com/nocobase/nocobase/pull/7436))，作者：@mytharcher
  - 修正任務中心因路由配置錯誤導致詳細資訊彈窗未顯示的問題 ([#7452](https://github.com/nocobase/nocobase/pull/7452))，作者：@mytharcher
  - 修正工作流任務中與行動端選單相關的問題 ([#7419](https://github.com/nocobase/nocobase/pull/7419))，作者：@mytharcher
- **[工作流：並行節點]** 修正「執行所有分支」模式下，並行分支節點狀態判斷錯誤導致提前完成的問題 ([#7445](https://github.com/nocobase/nocobase/pull/7445))，作者：@mytharcher
- **[動作：匯入記錄 Pro]** 修正使用字串主鍵進行 xlsx 匯入時，產生非預期更新結果的問題。作者：@aaaaaajie
- **[工作流：自訂操作事件]** 修正自訂操作事件在初始化後無法立即手動執行的問題，作者：@mytharcher
- **[工作流：子流程]** 修正子流程被恢復並多次執行的問題，作者：@mytharcher
- **[工作流：審批]**

  - 修正審批完成通知中的狀態文字未翻譯的問題，作者：@mytharcher
  - 對於非當前審批者的用戶，流程表格中對應的檢視按鈕將不會顯示，作者：@mytharcher
  - 為審批完成通知中的自訂範本新增狀態變數，作者：@mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.14](https://www.nocobase.com/en/blog/v1.9.0-alpha.14)

*發布日期：2025-09-10*

#### 🚀 改進

- **[郵件管理員]** 支援批次同步，作者：@jiannx

#### 🐛 錯誤修復

- **[工作流：審批]** 修正審批完成通知中的狀態文字未翻譯的問題，作者：@mytharcher

### [v1.9.0-alpha.13](https://www.nocobase.com/en/blog/v1.9.0-alpha.13)

*發布日期：2025-09-09*

#### 🎉 新功能

- **[工作流：審批]** 支援退回至審批流程中的任意節點，作者：@mytharcher

#### 🚀 改進

- **[客戶端]** 移除檔案列表中的省略號彈出視窗 ([#7479](https://github.com/nocobase/nocobase/pull/7479))，作者：@mytharcher
- **[資料庫]** 優化列表 API 的計數查詢以減少資源消耗。([#7453](https://github.com/nocobase/nocobase/pull/7453))，作者：@aaaaaajie
- **[工作流]**

  - 優化工作流準備流程，支援使用預載入的節點資料 ([#7476](https://github.com/nocobase/nocobase/pull/7476))，作者：@mytharcher
  - 透過使用單獨的欄位和索引，優化檢索佇列執行的查詢效能 ([#7448](https://github.com/nocobase/nocobase/pull/7448))，作者：@mytharcher
  - 調整工作流變數 API，支援預設一個額外的變數列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439))，作者：@mytharcher
- **[通知：應用內訊息]** 支援配置應用內訊息通知的自動關閉延遲 ([#7472](https://github.com/nocobase/nocobase/pull/7472))，作者：@mytharcher
- **[工作流：通知節點]** 支援測試通知節點 ([#7470](https://github.com/nocobase/nocobase/pull/7470))，作者：@mytharcher
- **[工作流：審批]**

  - 支援在自訂通知中使用與審批相關的變數，作者：@mytharcher
  - 支援在結束節點終止執行後更新審批狀態，作者：@mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 連結規則中數字欄位的「不為空」檢查不正確 ([#7477](https://github.com/nocobase/nocobase/pull/7477))，作者：@katherinehhh
  - 在編輯表單區塊中切換為標籤元件時，關聯欄位渲染錯誤 ([#7468](https://github.com/nocobase/nocobase/pull/7468))，作者：@katherinehhh
  - 當選取日期等於最小日期時的時間限制問題 ([#7461](https://github.com/nocobase/nocobase/pull/7461))，作者：@katherinehhh
  - 修正在某些情況下，在行動端記錄選擇器彈窗中編輯記錄會導致錯誤的問題 ([#7444](https://github.com/nocobase/nocobase/pull/7444))，作者：@zhangzhonghe
  - 子表格中附件欄位的必填驗證未生效 ([#7431](https://github.com/nocobase/nocobase/pull/7431))，作者：@katherinehhh
  - 修正當附件 URL 欄位中的 URL 包含查詢參數時，圖示顯示不正確的問題 ([#7432](https://github.com/nocobase/nocobase/pull/7432))，作者：@mytharcher
- **[資料庫]**

  - 修正匯出的數字欄位精度問題 ([#7421](https://github.com/nocobase/nocobase/pull/7421))，作者：@aaaaaajie
  - 修正在載入更多應用內訊息時發生的 MySQL 語法錯誤。([#7438](https://github.com/nocobase/nocobase/pull/7438))，作者：@aaaaaajie
- **[未定義]** 修復僅在 MySQL 外部來源中按日期欄位篩選的問題 ([#7422](https://github.com/nocobase/nocobase/pull/7422))，作者：@aaaaaajie
- **[行動端]** 行動端無時區的日期欄位未正確顯示日期時間 ([#7473](https://github.com/nocobase/nocobase/pull/7473))，作者：@katherinehhh
- **[集合：樹]** 刪除樹集合後，移除與該集合相關的資料庫事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459))，作者：@2013xile
- **[公開表單]** 使用變數時，公開表單欄位的預設值未套用 ([#7467](https://github.com/nocobase/nocobase/pull/7467))，作者：@katherinehhh
- **[動作：匯入記錄]**

  - 修正匯入重複資料時顯示的錯誤行號 ([#7440](https://github.com/nocobase/nocobase/pull/7440))，作者：@aaaaaajie
  - 修正當資料表主鍵為單行文字時匯入失敗的問題 ([#7416](https://github.com/nocobase/nocobase/pull/7416))，作者：@aaaaaajie
- **[工作流]**

  - 修正任務中心因路由配置錯誤導致詳細資訊彈窗未顯示的問題 ([#7452](https://github.com/nocobase/nocobase/pull/7452))，作者：@mytharcher
  - 補全自動刪除工作流執行狀態的選項 ([#7436](https://github.com/nocobase/nocobase/pull/7436))，作者：@mytharcher
  - 修正工作流任務中與行動端選單相關的問題 ([#7419](https://github.com/nocobase/nocobase/pull/7419))，作者：@mytharcher
- **[檔案管理]** 修正編輯檔案集合中 `storage` 欄位時的錯誤。([#7393](https://github.com/nocobase/nocobase/pull/7393))，作者：@mytharcher
- **[工作流：並行節點]** 修正「執行所有分支」模式下，並行分支節點狀態判斷錯誤導致提前完成的問題 ([#7445](https://github.com/nocobase/nocobase/pull/7445))，作者：@mytharcher
- **[工作流：自訂操作事件]** 修正自訂操作事件在初始化後無法立即手動執行的問題，作者：@mytharcher
- **[動作：匯入記錄 Pro]** 修正使用字串主鍵進行 xlsx 匯入時，產生非預期更新結果的問題。作者：@aaaaaajie
- **[工作流：子流程]** 修正子流程被恢復並多次執行的問題，作者：@mytharcher
- **[工作流：審批]**

  - 為審批完成通知中的自訂範本新增狀態變數，作者：@mytharcher
  - 對於非當前審批者的用戶，流程表格中對應的檢視按鈕將不會顯示，作者：@mytharcher
