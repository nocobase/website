---
title: "NocoBase v1.9.0-beta.7：工作流支援在審批流程中返回至任意節點"
description: "v1.9.0-beta.7 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 支援在審批流程中退回至任意節點，作者：@mytharcher

### 🚀 改善

- **[客戶端]** 移除檔案清單中的省略號彈出視窗 ([#7479](https://github.com/nocobase/nocobase/pull/7479))，作者：@mytharcher

- **[伺服器]** 訊息佇列改用標準系統日誌記錄器 ([#7480](https://github.com/nocobase/nocobase/pull/7480))，作者：@mytharcher

- **[資料庫]** 優化列表 API 的計數查詢以降低資源消耗 ([#7453](https://github.com/nocobase/nocobase/pull/7453))，作者：@aaaaaajie

- **[通知：應用內訊息]** 支援設定應用內訊息通知的自動關閉延遲時間 ([#7472](https://github.com/nocobase/nocobase/pull/7472))，作者：@mytharcher

- **[工作流]**
  - 優化工作流準備流程，支援使用預先載入的節點資料 ([#7476](https://github.com/nocobase/nocobase/pull/7476))，作者：@mytharcher

  - 透過使用獨立欄位與索引，優化擷取佇列中執行項目的查詢效能 ([#7448](https://github.com/nocobase/nocobase/pull/7448))，作者：@mytharcher

  - 調整工作流變數 API，支援預設額外的變數列表 ([#7439](https://github.com/nocobase/nocobase/pull/7439))，作者：@mytharcher

- **[工作流：通知節點]** 支援測試通知節點 ([#7470](https://github.com/nocobase/nocobase/pull/7470))，作者：@mytharcher

- **[工作流：審批]**
  - 支援在自訂通知中使用與審批相關的變數，作者：@mytharcher

  - 支援在結束節點終止執行後更新審批狀態，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 連結規則中對數值欄位的「不為空」檢查不正確 ([#7477](https://github.com/nocobase/nocobase/pull/7477))，作者：@katherinehhh

  - 在編輯表單區塊中切換至標籤元件時，關聯欄位渲染錯誤 ([#7468](https://github.com/nocobase/nocobase/pull/7468))，作者：@katherinehhh

  - 在公開表單上，唯讀的選取/多選/日期/富文字欄位仍可編輯 ([#7484](https://github.com/nocobase/nocobase/pull/7484))，作者：@katherinehhh

  - 當選取日期等於最小日期時的時間限制問題 ([#7461](https://github.com/nocobase/nocobase/pull/7461))，作者：@katherinehhh

  - 子表格中附件欄位的必填驗證未生效 ([#7431](https://github.com/nocobase/nocobase/pull/7431))，作者：@katherinehhh

  - 修正在特定情境下，於行動端記錄選取彈窗中編輯記錄會導致錯誤的問題 ([#7444](https://github.com/nocobase/nocobase/pull/7444))，作者：@zhangzhonghe

- **[未定義]** 修正僅在 MySQL 外部資料來源中依日期欄位篩選的問題 ([#7422](https://github.com/nocobase/nocobase/pull/7422))，作者：@aaaaaajie

- **[資料庫]**
  - 修正載入更多應用內訊息時發生的 MySQL 語法錯誤 ([#7438](https://github.com/nocobase/nocobase/pull/7438))，作者：@aaaaaajie

  - 修正匯出數值欄位時的精度問題 ([#7421](https://github.com/nocobase/nocobase/pull/7421))，作者：@aaaaaajie

- **[行動端]** 行動端無時區的日期欄位未正確顯示日期時間 ([#7473](https://github.com/nocobase/nocobase/pull/7473))，作者：@katherinehhh

- **[公開表單]** 使用變數時，公開表單欄位的預設值未套用 ([#7467](https://github.com/nocobase/nocobase/pull/7467))，作者：@katherinehhh

- **[集合：樹狀]** 刪除樹狀集合後，移除與該集合相關的資料庫事件 ([#7459](https://github.com/nocobase/nocobase/pull/7459))，作者：@2013xile

- **[檔案管理]** 修正編輯檔案集合中 `storage` 欄位時的錯誤 ([#7393](https://github.com/nocobase/nocobase/pull/7393))，作者：@mytharcher

- **[動作：匯入記錄]**
  - 修正匯入重複資料時顯示的列號不正確 ([#7440](https://github.com/nocobase/nocobase/pull/7440))，作者：@aaaaaajie

  - 修正當資料表主鍵為單行文字時匯入失敗的問題 ([#7416](https://github.com/nocobase/nocobase/pull/7416))，作者：@aaaaaajie

- **[工作流]**
  - 補全自動刪除工作流執行狀態的選項 ([#7436](https://github.com/nocobase/nocobase/pull/7436))，作者：@mytharcher

  - 修正因任務中心路由配置錯誤導致詳細資訊彈窗未顯示的問題 ([#7452](https://github.com/nocobase/nocobase/pull/7452))，作者：@mytharcher

  - 修正工作流任務中與行動端選單相關的問題 ([#7419](https://github.com/nocobase/nocobase/pull/7419))，作者：@mytharcher

- **[工作流：並行節點]** 修正「執行所有分支」模式下，並行分支節點中狀態判斷錯誤導致提前完成的問題 ([#7445](https://github.com/nocobase/nocobase/pull/7445))，作者：@mytharcher

- **[動作：匯入記錄 Pro]** 修正使用字串主鍵進行 xlsx 匯入時，產生非預期的更新結果。作者：@aaaaaajie

- **[工作流：自訂動作事件]** 修正自訂動作事件在初始化後無法立即手動執行的問題，作者：@mytharcher

- **[工作流：子流程]** 修正子流程被恢復並多次執行的問題，作者：@mytharcher

- **[工作流：審批]**
  - 修正審批完成通知中的狀態文字未翻譯的問題，作者：@mytharcher

  - 對於非當前審批人的使用者，流程表格中將不顯示對應的檢視按鈕，作者：@mytharcher

  - 在審批完成通知的自訂範本中新增狀態變數，作者：@mytharcher
