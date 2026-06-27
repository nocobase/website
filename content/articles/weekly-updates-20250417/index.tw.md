---
title: "NocoBase 每週更新：部分商業外掛轉為開源"
description: "本週更新包括：部門、附件 URL 和工作流程回應訊息等商業外掛現已免費提供。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*發布日期：2025-04-11*

#### 🚀 改進

- **[客戶端]**

  - 為 `Variable.Input` 新增預設類型回退 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - 優化未配置頁面的提示 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[工作流：延遲節點]** 支援使用變數設定持續時間 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher
- **[工作流：自定義操作事件]** 為觸發工作流按鈕新增重新整理設定 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 子表格描述與新增按鈕重疊 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - 模態框中水平表單佈局導致的虛線底線 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[檔案儲存：S3(Pro)]** 修復缺少 await 的下一次呼叫。 by @jiannx
- **[郵件管理]** 修復缺少 await 的下一次呼叫。 by @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*發布日期：2025-04-14*

#### 🐛 錯誤修復

- **[客戶端]**
  - 修復預覽圖片被遮擋的問題 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  - 在表單區塊中，欄位配置的預設值會先顯示為原始變數字串然後消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*發布日期：2025-04-14*

#### 🎉 新功能

- **[部門]** 將部門、附件 URL 和工作流回應訊息外掛程式免費化 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

#### 🐛 錯誤修復

- **[客戶端]**

  - 篩選表單不應顯示「未儲存變更」提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  - 關聯欄位的「允許複選」選項不起作用 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  - 在篩選表單中，點擊篩選按鈕時，如果存在未通過驗證的欄位，仍會觸發篩選 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  - 切換到群組選單時不應跳轉到已在選單中隱藏的頁面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
- **[檔案儲存：S3(Pro)]**

  - 整理語言 by @jiannx
  - 獨立 baseurl 和公開設定，改善 S3 Pro 儲存配置使用者體驗 by @jiannx
- **[遷移管理]** 若遷移過程中出現環境變數彈窗，跳過自動備份選項會失效 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*發布日期：2025-04-10*

#### 🚀 改進

- **[工作流：延遲節點]** 支援使用變數設定持續時間 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

#### 🐛 錯誤修復

- **[工作流]** 修復使用不安全的整數 ID 建立任務時導致的 OOM ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher
- **[區塊：模板]** 當頁面區塊使用的引用模板已被刪除時，另存為模板會失敗 ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*發布日期：2025-04-12*

#### 🚀 改進

- **[客戶端]**

  - 為 `Variable.Input` 新增預設類型回退 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher
  - 優化未配置頁面的提示 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe
- **[工作流：自定義操作事件]** 為觸發工作流按鈕新增重新整理設定 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 工作流節點編輯抽屜標題顯示 [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh
  - 子表格描述與新增按鈕重疊 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh
  - 變數輸入樣式不正確 ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust
  - 模態框中水平表單佈局導致的虛線底線 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh
- **[工作流]** 修復應用啟動時工作流統計資訊未載入的問題 ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*發布日期：2025-04-15*

#### 🎉 新功能

- **[部門]** 將部門、附件 URL 和工作流回應訊息外掛程式免費化 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos
- **[操作：批次更新]** 支援在更新區塊資料後重新整理其他資料區塊中的資料 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

#### 🚀 改進

- **[工作流]** 支援工作流任務的固定彈窗 URL ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 切換到群組選單時不應跳轉到已在選單中隱藏的頁面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe
  - 篩選表單不應顯示「未儲存變更」提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe
  - 修復預覽圖片被遮擋的問題 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe
  - 在篩選表單中，點擊篩選按鈕時，如果存在未通過驗證的欄位，仍會觸發篩選 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe
  - 關聯欄位的「允許複選」選項不起作用 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh
  - 在表單區塊中，欄位配置的預設值會先顯示為原始變數字串然後消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe
- **[集合欄位：附件(URL)]** 僅允許具有公開 URL 存取的檔案集合 ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh
- **[檔案儲存：S3(Pro)]**

  - 獨立 baseurl 和公開設定，改善 S3 Pro 儲存配置使用者體驗 by @jiannx
  - 整理語言 by @jiannx
- **[工作流：審批]** 支援任務中心中審批項目的固定 URL by @mytharcher
- **[遷移管理]** 若遷移過程中出現環境變數彈窗，跳過自動備份選項會失效 by @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*發布日期：2025-04-16*

#### 🎉 新功能

- **[集合欄位：程式碼]** 新增程式碼介面 by @mytharcher

#### 🚀 改進

- **[create-nocobase-app]** 將部分依賴升級至最新版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

#### 🐛 錯誤修復

- **[客戶端]**

  - 繼承欄位顯示在當前集合欄位指派清單中 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh
  - 設定預設值時變數輸入的樣式問題 ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh
- **[建置]** 當外掛程式依賴某些 AMD 庫時，建置輸出不正確 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust
- **[區塊：iframe]** 當 iframe 區塊設定為全高時出現垂直捲動條 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh
- **[存取控制]** 修復將角色模型序列化到快取時拋出的錯誤 ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher
- **[工作流]** 修復從 MySQL 拋出的遷移錯誤 ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher
- **[郵件管理]** 修復無法同步、無主旨顯示及其他小錯誤 by @jiannx
