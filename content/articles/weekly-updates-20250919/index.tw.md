---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援行事曆標題的語言映射顯示、錯誤修復等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要提供給測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.25](https://www.nocobase.com/en/blog/v1.8.25)

*發布日期：2025-09-17*

#### 🚀 改進

- **[auth]** 支援在用戶名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile

#### 🐛 錯誤修復

- **[client]** 修復按鈕圖示配置彈窗被遮蓋/重疊的問題 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
- **[範本列印]** 支援 chinaRegions 欄位 by @jiannx

### [v1.8.24](https://www.nocobase.com/en/blog/v1.8.24)

*發布日期：2025-09-13*

#### 🎉 新功能

- **[工作流：審批]** 支援在審批流程中退回至任意節點 by @mytharcher

#### 🚀 改進

- **[server]** 為訊息佇列使用標準系統日誌記錄器 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[client]** 從檔案列表中移除省略號彈出視窗 ([#7479](https://github.com/nocobase/nocobase/pull/7479)) by @mytharcher
- **[工作流]** 優化工作流準備流程，支援使用預載入的節點資料 ([#7476](https://github.com/nocobase/nocobase/pull/7476)) by @mytharcher
- **[主題編輯器]** 新增側邊選單顏色自訂支援 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis 佇列適配器]** 為 Redis 訊息佇列適配器使用標準系統日誌記錄器 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 修復 Popover 元件被重疊/遮蓋的問題 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - 修正連結規則中數值欄位「不為空」檢查不正確的問題 ([#7477](https://github.com/nocobase/nocobase/pull/7477)) by @katherinehhh
  - 唯讀的 select/multiselect/date/richtext 在公開表單上仍可編輯 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[工作流]** 修復與工作流日誌快取相關的潛在錯誤 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[HTTP 請求加密]** 修復請求參數不支援原生 URLSearchParams 類型的問題 by @mytharcher
- **[資料來源：REST API]** 修正 REST API URL 驗證規則 by @katherinehhh
- **[工作流：審批]** 修復審批完成通知中的狀態文字未翻譯的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.15](https://www.nocobase.com/en/blog/v1.9.0-alpha.15)

*發布日期：2025-09-17*

#### 🚀 改進

- **[auth]** 支援在用戶名中使用 `.` ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[server]** 為訊息佇列使用標準系統日誌記錄器 ([#7480](https://github.com/nocobase/nocobase/pull/7480)) by @mytharcher
- **[snowflake-id]** 將具有自增主鍵但無唯一標識符的系統表格 ID 更改為 53 位元 Snowflake 風格 ID ([#7465](https://github.com/nocobase/nocobase/pull/7465)) by @2013xile
- **[日曆]** 支援日曆標題的語言環境映射顯示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[工作流：人工節點]** 支援在已停用的工作流中檢視和恢復待處理的人工任務 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[主題編輯器]** 新增側邊選單顏色自訂支援 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis 佇列適配器]** 為 Redis 訊息佇列適配器使用標準系統日誌記錄器 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 修復按鈕圖示配置彈窗被遮蓋/重疊的問題 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
  - 修復 Popover 元件被重疊/遮蓋的問題 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
  - 唯讀的 select/multiselect/date/richtext 在公開表單上仍可編輯 ([#7484](https://github.com/nocobase/nocobase/pull/7484)) by @katherinehhh
- **[工作流]**

  - 修復工作流中背景任務佇列訂閱邏輯錯誤導致執行訊息處理不正確的問題 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
  - 修復與工作流日誌快取相關的潛在錯誤 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
- **[通知：應用內訊息]** 修復通知連結解析不正確的問題 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
- **[資料來源：REST API]** 修正 REST API URL 驗證規則 by @katherinehhh
- **[HTTP 請求加密]** 修復請求參數不支援原生 URLSearchParams 類型的問題 by @mytharcher
- **[範本列印]** 支援 chinaRegions 欄位 by @jiannx
- **[郵件管理器]** 修復垃圾郵件主旨的問題 by @jiannx
