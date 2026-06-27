---
title: "NocoBase 每週更新：優化行動端樣式"
description: "本週更新包括：優化行動端樣式、支援配置註冊表單、調整表格區塊的預設欄寬等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**本週我們對版本發佈進行了調整。後續版本更新將包含三個分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.50-beta](https://www.nocobase.com/en/blog/v1.3.50-beta)

*發佈日期：2024-11-14*

### 🐛 錯誤修復

- **[客戶端]** 修復編輯時無法清除聯動規則標題的問題 ([#5644](https://github.com/nocobase/nocobase/pull/5644)) by @katherinehhh
- **[評論]** 修復評論區塊中資料範圍設定不生效的問題 by @katherinehhh

## [v1.3.51](https://www.nocobase.com/en/blog/v1.3.51)

*發佈日期：2024-11-19*

### 🐛 錯誤修復

- **[客戶端]**

  - 修復欄位權限檢查不受關聯欄位上下文影響的問題 ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
  - 修復聯動規則將空值儲存為靜態空值的問題 ([#5667](https://github.com/nocobase/nocobase/pull/5667)) by @katherinehhh
- **[集合欄位：多對多（陣列）]** 修復在包含多對多（陣列）欄位的關聯集合中檢索記錄時導致錯誤的問題 ([#5661](https://github.com/nocobase/nocobase/pull/5661)) by @2013xile
- **[區塊：甘特圖]** 修復新增甘特圖區塊模板時錯誤呼叫行事曆區塊的問題 ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[資料視覺化]** 修復資料轉換在雙軸圖表的工具提示中不生效的問題 ([#5649](https://github.com/nocobase/nocobase/pull/5649)) by @2013xile

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.9](https://www.nocobase.com/en/blog/v1.4.0-alpha.9)

*發佈日期：2024-11-14*

### 🎉 新功能

- **[認證]** 允許配置註冊表單的使用者名稱和電子郵件欄位 ([#5639](https://github.com/nocobase/nocobase/pull/5639)) by @2013xile
- **[工作流程]** 支援在集合事件中使用聯合鍵 ([#5627](https://github.com/nocobase/nocobase/pull/5627)) by @mytharcher

### 🚀 改進

- **[客戶端]** 調整表格區塊的預設欄寬為 100 ([#5625](https://github.com/nocobase/nocobase/pull/5625)) by @katherinehhh
- **[通知管理]** 將應用內訊息圖示更新為鈴鐺圖示 ([#5638](https://github.com/nocobase/nocobase/pull/5638)) by @sheldon66
- **[區塊：操作面板]** 新增對操作面板區塊高度設定的支援 ([#5628](https://github.com/nocobase/nocobase/pull/5628)) by @katherinehhh
- **[行動端]** 樣式：優化行動端樣式，減少欄位間距，增強欄位顯示的緊湊性 ([#5605](https://github.com/nocobase/nocobase/pull/5605)) by @katherinehhh

### 🐛 錯誤修復

- **[建置]** 修復若外掛包含 .less 檔案時建置失敗的問題 ([#5646](https://github.com/nocobase/nocobase/pull/5646)) by @gchust
- **[客戶端]** 修復表格中右側固定欄位的對齊問題 ([#5636](https://github.com/nocobase/nocobase/pull/5636)) by @katherinehhh
- **[工作流程：循環節點]** 修復循環節點中條件檢查錯誤的問題 ([#5634](https://github.com/nocobase/nocobase/pull/5634)) by @mytharcher
- **[通知管理]** 修復通知 API 中模板未編譯的問題 ([#5630](https://github.com/nocobase/nocobase/pull/5630)) by @mytharcher

## [v1.4.0-alpha.10](https://www.nocobase.com/en/blog/v1.4.0-alpha.10)

*發佈日期：2024-11-14*

### 🚀 改進

- **[客戶端]** 調整客戶端核心的部分 API，並修復警告 ([#5651](https://github.com/nocobase/nocobase/pull/5651)) by @mytharcher
- **[行動端]** 使用行動端元件替換部分元件 ([#5590](https://github.com/nocobase/nocobase/pull/5590)) by @katherinehhh

## [v1.4.0-alpha.11](https://www.nocobase.com/en/blog/v1.4.0-alpha.11)

*發佈日期：2024-11-15*

### 🐛 錯誤修復

- **[客戶端]** 還原操作按鈕中 `openSize` 屬性的修改 ([#5656](https://github.com/nocobase/nocobase/pull/5656)) by @mytharcher

## [v1.4.0-alpha.12](https://www.nocobase.com/en/blog/v1.4.0-alpha.12)

*發佈日期：2024-11-16*

### 🐛 錯誤修復

- **[客戶端]**

  - 修復當檔案或屬性為 null 時的檔案類型匹配問題 ([#5659](https://github.com/nocobase/nocobase/pull/5659)) by @mytharcher
  - 修復子表格中刪除資料後分頁計數未更新的問題 ([#5648](https://github.com/nocobase/nocobase/pull/5648)) by @katherinehhh
- **[工作流程]** 修復在沒有前置分支的情況下新增條件後節點消失的問題 ([#5658](https://github.com/nocobase/nocobase/pull/5658)) by @mytharcher
- **[行動端]** 在關聯欄位中使用長文字作為標題欄位時的樣式問題 ([#5655](https://github.com/nocobase/nocobase/pull/5655)) by @katherinehhh
- **[工作流程：自訂操作事件]** 修復在外部資料來源中使用附件 URL 欄位時出現錯誤的問題 by @katherinehhh

## [v1.4.0-alpha.13](https://www.nocobase.com/en/blog/v1.4.0-alpha.13)

*發佈日期：2024-11-16*

### 🐛 錯誤修復

- **[行動端]** 修復：在行動端配置模式下為選擇器使用桌面端元件，並修復在 datePicker 中使用變數作為預設值時的錯誤 ([#5662](https://github.com/nocobase/nocobase/pull/5662)) by @katherinehhh

## [v1.4.0-alpha.14](https://www.nocobase.com/en/blog/v1.4.0-alpha.14)

*發佈日期：2024-11-17*

### 🐛 錯誤修復

- **[行動端]** 修復欄位賦值以支援變數值為 0 ([#5663](https://github.com/nocobase/nocobase/pull/5663)) by @katherinehhh

## [v1.4.0-alpha.16](https://www.nocobase.com/en/blog/v1.4.0-alpha.16)

*發佈日期：2024-11-18*

### 🐛 錯誤修復

- **[建置]** 修復當系統中已有建置好的外掛時，執行 yarn dev 報錯的問題 ([#5671](https://github.com/nocobase/nocobase/pull/5671)) by @gchust
- **[行動端]** 修復：當子表格配置為僅允許選擇資料時，行動端的樣式問題 ([#5670](https://github.com/nocobase/nocobase/pull/5670)) by @katherinehhh

## [v1.4.0-alpha.17](https://www.nocobase.com/en/blog/v1.4.0-alpha.17)

*發佈日期：2024-11-19*

### 🚀 改進

- **[工作流程]** 支援在客戶端註冊系統變數 ([#5676](https://github.com/nocobase/nocobase/pull/5676)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復欄位權限檢查不受關聯欄位上下文影響的問題 ([#5672](https://github.com/nocobase/nocobase/pull/5672)) by @katherinehhh
- **[區塊：甘特圖]** 修復新增甘特圖區塊模板時錯誤呼叫行事曆區塊的問題 ([#5673](https://github.com/nocobase/nocobase/pull/5673)) by @katherinehhh
- **[行事曆]** 修復行事曆區塊中缺少含時區與不含時區的日期欄位選項的問題 ([#5674](https://github.com/nocobase/nocobase/pull/5674)) by @katherinehhh

## [v1.4.0-beta.1](https://www.nocobase.com/en/blog/v1.4.0-beta.1)

*發佈日期：2024-11-19*

### 🚀 改進

- **[行動端]** 支援元件 `Tabs.TabPan` 的動態屬性 `hidden` 以控制渲染 ([#5687](https://github.com/nocobase/nocobase/pull/5687)) by @zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修復在篩選按鈕中切換運算子並提交日期欄位時，日期輸入值被清除的問題 ([#5684](https://github.com/nocobase/nocobase/pull/5684)) by @katherinehhh
  - 修復包含日期變數的聯動規則條件不生效的問題 ([#5675](https://github.com/nocobase/nocobase/pull/5675)) by @katherinehhh

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

## [v1.5.0-alpha.1](https://www.nocobase.com/en/blog/v1.5.0-alpha.1)

*發佈日期：2024-11-19*

### 🎉 新功能

- **[Redis 發布/訂閱適配器]** 新增 Redis 同步適配器外掛 by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
