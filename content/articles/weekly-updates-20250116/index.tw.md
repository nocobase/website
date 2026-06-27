---
title: "NocoBase 每週更新：詳情區塊支援聯動規則"
description: "本週更新包括：詳情區塊支援聯動規則以隱藏（保留值）等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.21](https://www.nocobase.com/en/blog/v1.4.21)

*發布日期：2025-01-10*

#### 🚀 改進

- **[客戶端]** 支援在詳情區塊中使用連結規則來隱藏（保留值）([#6031](https://github.com/nocobase/nocobase/pull/6031)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**

  - 解決圖示檔案路徑中缺少公開路徑的問題 ([#6034](https://github.com/nocobase/nocobase/pull/6034)) by @chenos
  - 修復表單連結規則依賴子表格欄位值時失效的問題 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  - 修復子詳情中「當前記錄」變數的欄位不正確的問題 ([#6030](https://github.com/nocobase/nocobase/pull/6030)) by @zhangzhonghe
- **[備份管理器]** 修復當環境變數 API_BASE_PATH 不是 /api 時，備份下載失敗的問題 by @gchust

### [v1.4.22](https://www.nocobase.com/en/blog/v1.4.22)

*發布日期：2025-01-11*

#### 🚀 改進

- **[計算器]** 升級 formula.js 函式庫版本至 4.4.9 ([#6037](https://github.com/nocobase/nocobase/pull/6037)) by @mytharcher
- **[工作流]** 修復工作流插件的日誌 API ([#6036](https://github.com/nocobase/nocobase/pull/6036)) by @mytharcher

#### 🐛 錯誤修復

- **[工作流]** 添加防禦性邏輯以避免重複觸發 ([#6022](https://github.com/nocobase/nocobase/pull/6022)) by @mytharcher

### [v1.4.23](https://www.nocobase.com/en/blog/v1.4.23)

*發布日期：2025-01-13*

#### 🐛 錯誤修復

- **[客戶端]** 修復表格中固定操作欄無法正常運作的問題 ([#6048](https://github.com/nocobase/nocobase/pull/6048)) by @zhangzhonghe
- **[使用者]** 在使用者管理中為使用者設定密碼時，停用瀏覽器自動填寫 ([#6041](https://github.com/nocobase/nocobase/pull/6041)) by @2013xile
- **[工作流]** 修復基於日期欄位的排程事件在應用啟動後未觸發的問題 ([#6042](https://github.com/nocobase/nocobase/pull/6042)) by @mytharcher

### [v1.4.24](https://www.nocobase.com/en/blog/v1.4.24)

*發布日期：2025-01-14*

#### 🚀 改進

- **[客戶端]** datePicker 元件輸入設為唯讀 ([#6061](https://github.com/nocobase/nocobase/pull/6061)) by @Cyx649312038

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復表格區塊中模態關聯欄位載入不正確的問題 ([#6060](https://github.com/nocobase/nocobase/pull/6060)) by @katherinehhh
  - 修復詳情區塊中子表格的樣式問題 ([#6049](https://github.com/nocobase/nocobase/pull/6049)) by @katherinehhh
  - 修復 readPretty 模式下的數字欄位格式影響編輯模式的問題 ([#6050](https://github.com/nocobase/nocobase/pull/6050)) by @katherinehhh
  - 修復 ant-table 中表格表頭儲存格樣式問題 ([#6052](https://github.com/nocobase/nocobase/pull/6052)) by @katherinehhh
- **[資料庫]** 修復使用主鍵初始化排序欄位時的問題 ([#6059](https://github.com/nocobase/nocobase/pull/6059)) by @chareice
- **[資料視覺化]** 在圖表查詢中使用聚合函數但未設定維度時，移除 `LIMIT` 子句 ([#6062](https://github.com/nocobase/nocobase/pull/6062)) by @2013xile
- **[備份管理器]** 修復僅登入子應用的用戶備份下載錯誤的問題 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.5.0-beta.27](https://www.nocobase.com/en/blog/v1.5.0-beta.27)

*發布日期：2025-01-10*

#### 🚀 改進

- **[客戶端]** 從關聯按鈕中移除連結規則 ([#6016](https://github.com/nocobase/nocobase/pull/6016)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復表單連結規則依賴子表格欄位值時失效的問題 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) by @zhangzhonghe
  - 在身份驗證檢查請求完成後繼續渲染頁面 ([#6020](https://github.com/nocobase/nocobase/pull/6020)) by @2013xile

### [v1.5.0-beta.28](https://www.nocobase.com/en/blog/v1.5.0-beta.28)

*發布日期：2025-01-14*

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復工作流手動節點中表單按鈕的欄位指派無效的問題 ([#6054](https://github.com/nocobase/nocobase/pull/6054)) by @zhangzhonghe
  - 修復欄位啟用連結模態中缺少當前彈窗變數的問題 ([#6045](https://github.com/nocobase/nocobase/pull/6045)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.11](https://www.nocobase.com/en/blog/v1.6.0-alpha.11)

*發布日期：2025-01-09*

#### 🎉 新功能

- **[客戶端]** 新增 schemaSetting 以顯示附件的檔案名稱 ([#5995](https://github.com/nocobase/nocobase/pull/5995)) by @katherinehhh

### [v1.6.0-alpha.13](https://www.nocobase.com/en/blog/v1.6.0-alpha.13)

*發布日期：2025-01-14*

#### 🚀 改進

- **[工作流：JSON 計算]** 將 JSON 查詢節點名稱更改為 JSON 計算 by @mytharcher

#### 🐛 錯誤修復

- **[工作流]** 修復 DatePicker 元件的值類型 ([#6039](https://github.com/nocobase/nocobase/pull/6039)) by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
