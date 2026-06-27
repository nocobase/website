---
title: "NocoBase 每週更新：支援大規模資料量的匯入與匯出"
description: "本週更新包括：支援大規模資料量的匯入與匯出，以及更多。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要用於讓測試用戶收集回饋並進一步優化功能。適合想要搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品尖端功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*發布日期：2025-01-06*

#### 🚀 改進

- **[工作流：測試套件]** 修復測試集合中日期欄位的精確度問題 ([#5983](https://github.com/nocobase/nocobase/pull/5983)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復在子頁面中為資料區塊設定全高時的滾動條問題 ([#5989](https://github.com/nocobase/nocobase/pull/5989)) by @katherinehhh
  - 修復操作列按鈕隱藏時的對齊問題 ([#5987](https://github.com/nocobase/nocobase/pull/5987)) by @katherinehhh
  - 修復在集合管理器中批次刪除系統和通用欄位的問題 ([#5988](https://github.com/nocobase/nocobase/pull/5988)) by @katherinehhh
  - 修復在行動頁面上「URL 搜尋參數」變數無法運作的問題 ([#5968](https://github.com/nocobase/nocobase/pull/5968)) by @Cyx649312038
- **[伺服器端]** 修復在備份還原過程中可能導致的應用程式崩潰 ([#5981](https://github.com/nocobase/nocobase/pull/5981)) by @gchust
- **[行動端]** 修復行動裝置上底部按鈕被遮擋的問題 ([#5991](https://github.com/nocobase/nocobase/pull/5991)) by @zhangzhonghe
- **[資料視覺化]** 修復在子頁面圖表上使用的「當前彈窗變數」在重新整理頁面後變為空的問題 ([#5984](https://github.com/nocobase/nocobase/pull/5984)) by @2013xile
- **[區塊：看板]** 修復在看板中未載入父集合欄位的問題 ([#5985](https://github.com/nocobase/nocobase/pull/5985)) by @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*發布日期：2025-01-06*

#### 🐛 錯誤修復

- **[客戶端]** 修復在篩選表單/動作中，當設定 showTime 時，日期範圍選擇器未顯示時間選擇器的問題 ([#5994](https://github.com/nocobase/nocobase/pull/5994)) by @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*發布日期：2025-01-09*

#### 🎉 新功能

- **[客戶端]** 新增 app.getHref() 方法 ([#6019](https://github.com/nocobase/nocobase/pull/6019)) by @chenos

#### 🚀 改進

- **[客戶端]**

  - 允許在綁定到動作按鈕時對工作流程進行排序 ([#6017](https://github.com/nocobase/nocobase/pull/6017)) by @mytharcher
  - 將評估器的參考連結更改為文件網站 ([#6021](https://github.com/nocobase/nocobase/pull/6021)) by @mytharcher
  - 在多選下拉元件中支援 maxTagCount: 'responsive' ([#6007](https://github.com/nocobase/nocobase/pull/6007)) by @katherinehhh
  - 將篩選區塊中時間範圍元件的預設結束時間設定為 23:59:59 ([#6012](https://github.com/nocobase/nocobase/pull/6012)) by @katherinehhh
- **[動作：批次編輯]** 重構批次編輯表單提交按鈕：移除欄位指派和連結規則 ([#6008](https://github.com/nocobase/nocobase/pull/6008)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復在富文字編輯器中刪除資料後，必填驗證未生效的問題 ([#6006](https://github.com/nocobase/nocobase/pull/6006)) by @katherinehhh
  - 修復操作列按鈕隱藏時的對齊問題 ([#6014](https://github.com/nocobase/nocobase/pull/6014)) by @katherinehhh
  - 修復在 REST API 頁面點擊「集合」標籤時「建立集合」按鈕的問題 ([#5992](https://github.com/nocobase/nocobase/pull/5992)) by @katherinehhh
  - 修復在一對多關係中 targetKey 無法選擇 NanoID 欄位的問題 ([#5999](https://github.com/nocobase/nocobase/pull/5999)) by @katherinehhh
  - 修復在緊湊主題中設定按鈕的樣式 ([#6001](https://github.com/nocobase/nocobase/pull/6001)) by @katherinehhh
  - 修復列表元件的樣式 ([#5998](https://github.com/nocobase/nocobase/pull/5998)) by @mytharcher
  - 修復客戶端請求中包含的標頭被覆蓋的問題 ([#6009](https://github.com/nocobase/nocobase/pull/6009)) by @2013xile
  - 修復 foreignKey、targetKey 和 sourceKey 應支援按中文字元篩選 ([#5997](https://github.com/nocobase/nocobase/pull/5997)) by @katherinehhh
- **[動作：匯入記錄]** 修復使用不同目標鍵的多對多關聯匯入問題 ([#6024](https://github.com/nocobase/nocobase/pull/6024)) by @chareice
- **[區塊：地圖]** 修詳細區塊中的地圖欄位應渲染為地圖區塊 ([#6010](https://github.com/nocobase/nocobase/pull/6010)) by @katherinehhh
- **[嵌入 NocoBase]** 用於嵌入的令牌與 auth 衝突 by @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*發布日期：2024-12-31*

#### 🎉 新功能

- **[[動作：匯入記錄(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**：增強資料匯入功能，支援非同步匯入、百萬級記錄匯入、重複資料識別與處理、資料更新以及工作流程觸發。
- **[[動作：匯出記錄(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**：增強資料匯出功能，支援非同步匯出、百萬級記錄匯出以及附件匯出。

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*發布日期：2025-01-04*

#### 🐛 錯誤修復

- **[客戶端]** 修復在 iOS 上空白的子表格顯示一行空白資料的問題 ([#5990](https://github.com/nocobase/nocobase/pull/5990)) by @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*發布日期：2025-01-08*

#### 🐛 錯誤修復

- **[客戶端]** 修復表格行無法拖曳排序的問題 ([#6013](https://github.com/nocobase/nocobase/pull/6013)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*發布日期：2025-01-02*

#### 🎉 新功能

- **[工作流：人工節點]** 為所有類型的工作流待辦事項新增一個固定的全域入口 ([#5858](https://github.com/nocobase/nocobase/pull/5858)) by @mytharcher
- **[密碼策略]** 新增外掛：密碼策略，用於為所有使用者設定密碼規則和登入鎖定策略 by @2013xile
  參考：[密碼策略與使用者鎖定](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 改進

- **[客戶端]** 為外掛管理器新增篩選關鍵字「安全性」 ([#5977](https://github.com/nocobase/nocobase/pull/5977)) by @2013xile
- **[工作流：自訂動作事件]** 變更手動執行的 API by @mytharcher

#### 🐛 錯誤修復

- **[工作流]** 修復 `WorkflowVariableWrapper` 元件中 `onChange` 不起作用的問題 ([#5964](https://github.com/nocobase/nocobase/pull/5964)) by @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*發布日期：2025-01-06*

#### 🚀 改進

- **[行動端]** 支援在行動端表格中顯示當前頁碼 ([#5946](https://github.com/nocobase/nocobase/pull/5946)) by @katherinehhh
- **[檔案管理]** 支援其他儲存外掛 ([#5930](https://github.com/nocobase/nocobase/pull/5930)) by @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*發布日期：2025-01-08*

#### 🎉 新功能

- **[環境變數]** 支援配置動態環境變數和機密 ([#5966](https://github.com/nocobase/nocobase/pull/5966)) by @katherinehhh

#### 🚀 改進

- **[客戶端]** 在 IconPicker 中新增更多圖示 ([#5996](https://github.com/nocobase/nocobase/pull/5996)) by @katherinehhh
- **[集合欄位：附件(URL)]** 過濾與 plugin-file-storage-s3-pro 關聯的檔案集合。 by @jiannx

#### 🐛 錯誤修復

- **[集合欄位：附件(URL)]** 修復元件掛鉤中變更的 API by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全的控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
