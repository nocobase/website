---
title: "NocoBase 每週更新：新增工作流程類別管理"
description: "本週更新包括：圖表轉換配置支援乘除運算、匯入功能增強等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**本週我們釋出了 [NocoBase 1.7.0](https://www.nocobase.com/en/blog/nocobase-1-7-0)，引入了增強的權限管理、最佳化的系統效能，並開源了多個外掛，全面提升了功能與使用者體驗。**

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試使用者收集回饋並進一步最佳化功能。適合想提前體驗新功能並提供回饋的測試使用者；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發與快速迭代。適合對產品前沿功能感興趣的技術使用者，但可能存在問題與功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.35](https://www.nocobase.com/en/blog/v1.6.35)

*發布日期：2025-05-29*

#### 🎉 新功能

- **[未分類]**
  - 新增 Gitpod 支援，可一鍵啟動開發環境 ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612

#### 🚀 改進

- **[客戶端]**
  - 最佳化表單 Tab 鍵互動 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 支援設定選單連結是否在新視窗開啟 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
  - 在顯示確認對話框前驗證必填欄位 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**

  - 對關聯欄位的下拉選單資料進行分頁，每頁 200 筆 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 拖曳表格行時高亮位置不正確 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
  - 透過拖曳調整區塊大小功能失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
  - 欄位指派元件的 i18n 未生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 錯誤訊息無法正確複製 ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
- **[集合欄位：Markdown(Vditor)]** markdown-vditor 欄位元件在縮放後寬度問題 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[工作流：審批]** 修正翻譯內容 by @mytharcher

### [v1.6.36](https://www.nocobase.com/en/blog/v1.6.36)

*發布日期：2025-05-29*

#### 🚀 改進

- **[認證：OIDC]** 透過電子郵件比對使用者時忽略大小寫 by @2013xile

### [v1.6.37](https://www.nocobase.com/en/blog/v1.6.37)

*發布日期：2025-05-30*

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正篩選按鈕下拉清單中的欄位順序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 子表格聯動變數在清除時改為擷取關聯資料，而非使用表單值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 子表格中的關聯欄位在迭代變數為空值時觸發請求 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
- **[主題編輯器]** 隱藏主題切換選項並修正彈出視窗樣式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[工作流：審批]** 修正當審批人範圍查詢包含關聯條件時的錯誤 by @mytharcher

### [v1.6.38](https://www.nocobase.com/en/blog/v1.6.38)

*發布日期：2025-06-03*

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正彈出視窗中建立的區塊集合不正確的問題 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 修正子頁面中篩選表單預設值無效的問題 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 無法在角色資料表範圍中展開外部資料來源的關聯集合欄位 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 修正「溢位內容顯示省略號」選項對關聯欄位無效的問題 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 修正單行文字欄位值在簡易閱讀模式下顯示為陣列的問題 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
- **[認證]** 過期 Token 清理導致的效能問題 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[檔案管理]** 修正阿里雲 OSS 逾時設定 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[工作流：自訂操作事件]** 修正工作檯初始化器遺漏的問題 by @mytharcher
- **[認證：OIDC]** 登入按鈕文字未本地化 by @2013xile

### [v1.7.1](https://www.nocobase.com/en/blog/v1.7.1)

*發布日期：2025-06-04*

#### 🎉 新功能

- **[資料視覺化]** 支援圖表轉換設定中的乘除運算 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark

#### 🚀 改進

- **[公開表單]** 支援使用 URL 參數作為變數 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]** 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
- **[工作流：人工節點]** 修正使用外部資料來源時初始化器拋出錯誤的問題 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.8.0-beta.1](https://www.nocobase.com/en/blog/v1.8.0-beta.1)

*發布日期：2025-06-04*

#### 🎉 新功能

- **[未分類]** 為單行文字欄位新增「輸入複製按鈕」外掛 ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612
- **[工作流]** 新增工作流程分類管理 ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher

#### 🚀 改進

- **[客戶端]** 支援設定選單連結是否在新視窗開啟 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
- **[操作：匯入記錄 Pro]** 最佳化 xlsx 匯入效能 by @aaaaaajie
- **[認證：OIDC]** 透過電子郵件比對使用者時忽略大小寫 by @2013xile
- **[工作流：審批]** 從工作流外掛匯入集合以避免重複 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 欄位與操作需重新整理頁面後才生效 ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe
  - 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
  - 修正彈出視窗中建立的區塊集合不正確的問題 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 設定關聯欄位預設值時無法選擇變數 ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe
  - 修正單行文字欄位值在簡易閱讀模式下顯示為陣列的問題 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
  - 無法在角色資料表範圍中展開外部資料來源的關聯集合欄位 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 修正「溢位內容顯示省略號」選項對關聯欄位無效的問題 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 修正子頁面中篩選表單預設值無效的問題 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 新增資料時，選擇關聯欄位彈出視窗在首次輸入後關閉的問題 ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh
  - 子表格中的關聯欄位在迭代變數為空值時觸發請求 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
  - 修正篩選按鈕下拉清單中的欄位順序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 摺疊面板時表單驗證規則資料遺失 ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh
  - 透過聯動規則更新多選下拉選項時，已選值被重置 ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh
  - 子表格聯動變數在清除時改為擷取關聯資料，而非使用表單值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 對關聯欄位的下拉選單資料進行分頁，每頁 200 筆 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 日期選擇器從「介於」切換回「等於」後未重新整理 ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh
  - 拖曳表格行時高亮位置不正確 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
- **[認證]** 過期 Token 清理導致的效能問題 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[工作流]** 修正篩選工作流程時拋出錯誤的問題 ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher
- **[檔案管理]** 修正阿里雲 OSS 逾時設定 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[主題編輯器]** 隱藏主題切換選項並修正彈出視窗樣式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[工作流：自訂操作事件]** 修正工作檯初始化器遺漏的問題 by @mytharcher
- **[認證：OIDC]** 登入按鈕文字未本地化 by @2013xile
- **[工作流：審批]** 修正當審批人範圍查詢包含關聯條件時的錯誤 by @mytharcher

### [v1.8.0-beta.2](https://www.nocobase.com/en/blog/v1.8.0-beta.2)

*發布日期：2025-06-04*

#### 🚀 改進

- **[範本列印]** 新增更多日誌。 by @sheldon66

### [v1.8.0-beta.3](https://www.nocobase.com/en/blog/v1.8.0-beta.3)

*發布日期：2025-06-04*

#### 🎉 新功能

- **[資料視覺化]** 支援圖表轉換設定中的乘除運算 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark

#### 🚀 改進

- **[公開表單]** 支援使用 URL 參數作為變數 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]** 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
- **[工作流：人工節點]** 修正使用外部資料來源時初始化器拋出錯誤的問題 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.8.0-alpha.1](https://www.nocobase.com/en/blog/v1.8.0-alpha.1)

*發布日期：2025-06-04*

#### 🎉 新功能

- **[未分類]**

  - 新增 Gitpod 支援，可一鍵啟動開發環境，快速開始開發。 ([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612
  - 為單行文字欄位新增「輸入複製按鈕」外掛 ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612
- **[資料視覺化]** 支援圖表轉換設定中的乘除運算 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark
- **[工作流]** 新增工作流程分類管理 ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher
- **[郵件管理]** 支援大量發送 by @jiannx

#### 🚀 改進

- **[客戶端]**

  - 改進日期範圍篩選元件的樣式 ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh
  - 支援設定選單連結是否在新視窗開啟 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
  - 修正隱藏表單控制項捕獲 Tab 鍵的問題，顯著提升表單操作效率 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 在顯示確認對話框前驗證必填欄位 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh
- **[公開表單]** 支援使用 URL 參數作為變數 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher
- **[操作：匯入記錄 Pro]** 最佳化 xlsx 匯入效能 by @aaaaaajie
- **[範本列印]** 新增更多日誌。 by @sheldon66
- **[認證：OIDC]** 透過電子郵件比對使用者時忽略大小寫 by @2013xile
- **[工作流：審批]** 從工作流外掛匯入集合以避免重複 by @mytharcher
- **[郵件管理]** 完成大量發送功能 by @jiannx

#### 🐛 錯誤修復

- **[客戶端]**

  - 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
  - 修正彈出視窗中建立的區塊集合不正確的問題 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 修正單行文字欄位值在簡易閱讀模式下顯示為陣列的問題 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
  - 修正篩選按鈕下拉清單中的欄位順序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 欄位與操作需重新整理頁面後才生效 ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe
  - 修正「溢位內容顯示省略號」選項對關聯欄位無效的問題 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 新增資料時，選擇關聯欄位彈出視窗在首次輸入後關閉的問題 ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh
  - 子表格中的關聯欄位在迭代變數為空值時觸發請求 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
  - 摺疊面板時表單驗證規則資料遺失 ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh
  - 修正子頁面中篩選表單預設值無效的問題 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 欄位指派元件的 i18n 未生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 無法在角色資料表範圍中展開外部資料來源的關聯集合欄位 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 日期選擇器從「介於」切換回「等於」後未重新整理 ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh
  - 子表格聯動變數在清除時改為擷取關聯資料，而非使用表單值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 透過聯動規則更新多選下拉選項時，已選值被重置 ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh
  - 拖曳表格行時高亮位置不正確 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
  - 表單標籤冒號可見性設定未生效 ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh
  - 對關聯欄位的下拉選單資料進行分頁，每頁 200 筆 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 修正錯誤彈出視窗中複製按鈕複製出 [object Object] 的問題。 ([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
  - 設定關聯欄位預設值時無法選擇變數 ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe
  - 透過拖曳調整區塊大小功能失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
- **[工作流：人工節點]** 修正使用外部資料來源時初始化器拋出錯誤的問題 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher
- **[認證]** 過期 Token 清理導致的效能問題 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[檔案管理]** 修正阿里雲 OSS 逾時設定 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[工作流]** 修正篩選工作流程時拋出錯誤的問題 ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher
- **[主題編輯器]** 隱藏主題切換選項並修正彈出視窗樣式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[集合欄位：Markdown(Vditor)]** markdown-vditor 欄位元件在縮放後寬度問題 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[工作流：自訂操作事件]** 修正工作檯初始化器遺漏的問題 by @mytharcher
- **[認證：OIDC]** 登入按鈕文字未本地化 by @2013xile
- **[工作流：審批]** 修正當審批人範圍查詢包含關聯條件時的錯誤 by @mytharcher

### [v1.8.0-alpha.2](https://www.nocobase.com/en/blog/v1.8.0-alpha.2)

*發布日期：2025-06-04*

#### 🐛 錯誤修復

- **[客戶端]** 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
