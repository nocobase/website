---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新帶來了彈出式標籤切換性能的優化、錯誤修復等內容。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要提供給測試用戶收集回饋並進一步優化功能。適合想搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*發布日期：2025-08-12*

#### 🚀 改進

- **[客戶端]**

  - 新增「前天」日期變數支援 ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh
  - 優化切換彈窗頁籤時的效能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
- **[工作流]**

  - 修復不穩定的測試案例 ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher
  - 任務卡片中的工作流標題將不再因對應版本被停用而顯示刪除線 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher
- **[Office 檔案預覽器]** 新增支援預覽 `.odt` 檔案 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher
- **[備份管理器]** 改善 MySQL 資料庫備份操作的效能 by @gchust

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正多欄表單佈局在行動裝置上無法轉換為單欄佈局的問題 ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
  - 修正批次刪除資料表時的錯誤 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
  - 修正個別設定權限時，先前儲存的資料範圍未預先選取的問題 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
- **[工作流]**

  - 重構「新增節點」選單，並修復其導致的工作流程畫布渲染效能問題 ([#7363](https://github.com/nocobase/nocobase/pull/7363)) by @mytharcher
  - 修正擷取單一待辦事項時篩選條件不正確的問題 ([#7366](https://github.com/nocobase/nocobase/pull/7366)) by @mytharcher
  - 修正欄位選擇器中關鍵字比對的問題 ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher
  - 避免在停止工作流時因發佈到事件佇列而引發錯誤 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
- **[通知：站內訊息]** 修正站內訊息已接收但未在彈窗中顯示的問題 ([#7364](https://github.com/nocobase/nocobase/pull/7364)) by @mytharcher
- **[行動端]** 解決在行動裝置上套用日期範圍限制時，日期選擇器顯示異常的問題 ([#7362](https://github.com/nocobase/nocobase/pull/7362)) by @katherinehhh
- **[檔案管理器]** 為檔案資料表新增 `storageId` 欄位以支援權限配置 ([#7351](https://github.com/nocobase/nocobase/pull/7351)) by @mytharcher
- **[工作流：平行節點]** 修正 MySQL 環境下平行節點暫停後恢復的問題 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[工作流：抄送]** 修正無法移除區塊的問題 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[Office 檔案預覽器]** 支援僅提供 URL 的 `.docx`、`.xlsx` 和 `.pptx` 檔案進行預覽 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[資料視覺化]** 圖表篩選區塊中日期欄位預設值的日期變數問題 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[工作流：審批]**

  - 修正審批原始詳情區塊中聯動規則失效的問題 by @mytharcher
  - 修正提交草稿時更新關聯資料的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*發布日期：2025-08-09*

#### 🐛 錯誤修復

- **[郵件管理器]** 富文字編輯器支援軟換行 by @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*發布日期：2025-08-09*

#### 🚀 改進

- **[工作流]** 修復不穩定的測試案例 ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher

#### 🐛c 錯誤修復

- **[客戶端]** 修正多欄表單佈局在行動裝置上無法轉換為單欄佈局的問題 ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
- **[工作流]** 修正欄位選擇器中關鍵字比對的問題 ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*發布日期：2025-08-08*

#### 🚀 改進

- **[客戶端]** 優化切換彈窗頁籤時的效能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
- **[Office 檔案預覽器]** 新增支援預覽 `.odt` 檔案 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正個別設定權限時，先前儲存的資料範圍未預先選取的問題 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
  - 修正批次刪除資料表時的錯誤 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
- **[工作流]** 避免在停止工作流時因發佈到事件佇列而引發錯誤 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
- **[工作流：平行節點]** 修正 MySQL 環境下平行節點暫停後恢復的問題 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[工作流：審批]**

  - 修正提交草稿時更新關聯資料的問題 by @mytharcher
  - 修正審批原始詳情區塊中聯動規則失效的問題 by @mytharcher
