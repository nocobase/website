---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援預覽時旋轉圖片、為工具提示和群組項目標題新增本地化支援等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.26](https://www.nocobase.com/en/blog/v1.8.26)

*發布日期：2025-09-20*

#### 🚀 改進

- **[客戶端]** 為工具提示與群組項目標題新增本地化支援 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[日曆]** 支援日曆標題的語言環境映射顯示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]** 修復選單圖示配置彈出層被遮擋的問題 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
- **[通知：應用內訊息]**

  - 修復通知連結解析不正確的問題 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
  - 修復開啟通知彈窗時未顯示最新訊息的問題 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[工作流程]** 修復工作流程中背景任務佇列訂閱邏輯錯誤導致執行訊息處理不當的問題 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
- **[工作流程：審批]**

  - 修復從外部資料來源刪除資料時發生錯誤的問題 by @mytharcher
  - 修復審批表單中的公式欄位未自動更新的問題 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.8](https://www.nocobase.com/en/blog/v1.9.0-beta.8)

*發布日期：2025-09-20*

#### 🚀 改進

- **[認證]** 支援使用者名稱中使用點號 (`.`) ([#7504](https://github.com/nocobase/nocobase/pull/7504)) by @2013xile
- **[客戶端]** 為工具提示與群組項目標題新增本地化支援 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[工作流程：人工節點]** 支援在已停用的工作流程中檢視和恢復待處理的人工任務 ([#7493](https://github.com/nocobase/nocobase/pull/7493)) by @mytharcher
- **[日曆]** 支援日曆標題的語言環境映射顯示 ([#7508](https://github.com/nocobase/nocobase/pull/7508)) by @katherinehhh
- **[主題編輯器]** 新增側邊選單顏色自訂支援 ([#7483](https://github.com/nocobase/nocobase/pull/7483)) by @duannyuuu
- **[Redis 佇列適配器]** 為 Redis 訊息佇列適配器使用標準系統日誌記錄器 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復按鈕圖示配置彈窗被遮蓋/重疊的問題 ([#7506](https://github.com/nocobase/nocobase/pull/7506)) by @zhangzhonghe
  - 修復選單圖示配置彈出層被遮擋的問題 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
  - 修復 Popover 元件被重疊/遮蓋的問題 ([#7491](https://github.com/nocobase/nocobase/pull/7491)) by @zhangzhonghe
- **[通知：應用內訊息]**

  - 修復通知連結解析不正確的問題 ([#7509](https://github.com/nocobase/nocobase/pull/7509)) by @mytharcher
  - 修復開啟通知彈窗時未顯示最新訊息的問題 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[工作流程]**

  - 修復與工作流程日誌快取相關的潛在錯誤 ([#7490](https://github.com/nocobase/nocobase/pull/7490)) by @mytharcher
  - 修復工作流程中背景任務佇列訂閱邏輯錯誤導致執行訊息處理不當的問題 ([#7507](https://github.com/nocobase/nocobase/pull/7507)) by @mytharcher
- **[資料來源：REST API]** 修復 REST API URL 驗證規則 by @katherinehhh
- **[HTTP 請求加密]** 修復請求參數不支援原生 URLSearchParams 類型的問題 by @mytharcher
- **[範本列印]** 支援 chinaRegions 欄位 by @jiannx
- **[工作流程：審批]**

  - 修復審批表單中的公式欄位未自動更新的問題 by @mytharcher
  - 修復從外部資料來源刪除資料時發生錯誤的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.16](https://www.nocobase.com/en/blog/v1.9.0-alpha.16)

*發布日期：2025-09-24*

#### 🚀 改進

- **[客戶端]**

  - 支援預覽圖片時旋轉 ([#7523](https://github.com/nocobase/nocobase/pull/7523)) by @mytharcher
  - 為工具提示與群組項目標題新增本地化支援 ([#7485](https://github.com/nocobase/nocobase/pull/7485)) by @katherinehhh
- **[RabbitMQ 佇列適配器]** 改進 RabbitMQ 連線處理與訊息處理邏輯 by @sdp-ncd

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復側邊欄子選單無法正確高亮的問題 ([#7520](https://github.com/nocobase/nocobase/pull/7520)) by @duannyuuu
  - 修復選單圖示配置彈出層被遮擋的問題 ([#7515](https://github.com/nocobase/nocobase/pull/7515)) by @zhangzhonghe
- **[通知：應用內訊息]** 修復開啟通知彈窗時未顯示最新訊息的問題 ([#7514](https://github.com/nocobase/nocobase/pull/7514)) by @mytharcher
- **[工作流程]** 修復在綁定工作流程配置中載入關聯欄位上下文時，工作流程列表條件不正確的問題 ([#7516](https://github.com/nocobase/nocobase/pull/7516)) by @mytharcher
- **[工作流程：循環節點]** 修復即使循環節點條件未滿足，流程仍錯誤地前進到下一個項目的問題 ([#7521](https://github.com/nocobase/nocobase/pull/7521)) by @mytharcher
- **[工作流程：審批]**

  - 修復從外部資料來源刪除資料時發生錯誤的問題 by @mytharcher
  - 修復審批表單中的公式欄位未自動更新的問題 by @mytharcher
