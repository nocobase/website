---
title: "NocoBase 每週更新：子表格分頁支援、工作流程優化等"
description: "NocoBase 每週更新 2024-10-24"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)。

NocoBase 目前有兩個更新分支：`main` 和 `next`。

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Alpha 版本，包含一些尚未發布的新功能。此版本可能不完全穩定，適合開發者或測試人員提前體驗新功能或進行相容性測試。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.32-beta](https://www.nocobase.com/en/blog/v1.3.32-beta)

*發布日期：2024-10-13*

### 🐛 錯誤修復

- **[客戶端]** 在資料範圍中使用變數選擇值後，必填關聯欄位仍觸發驗證錯誤 ([#5399](https://github.com/nocobase/nocobase/pull/5399)) by @katherinehhh

## [v1.3.33-beta](https://www.nocobase.com/en/blog/v1.3.33-beta)

*發布日期：2024-10-17*

### 🚀 改進

- **[工作流]** 為更新節點的批次模式添加關聯欄位相關提示 ([#5426](https://github.com/nocobase/nocobase/pull/5426)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修復編輯個人資料抽屜被子頁面覆蓋的問題 ([#5409](https://github.com/nocobase/nocobase/pull/5409)) by @zhangzhonghe
  - 工作流節點變數不顯示繼承的集合欄位 ([#5415](https://github.com/nocobase/nocobase/pull/5415)) by @chenos
  - 在表格篩選區塊中清除篩選資料後，分頁未重置 ([#5411](https://github.com/nocobase/nocobase/pull/5411)) by @katherinehhh
- **[檔案管理器]** 移除檔案模板集合配置中載入儲存空間的 20 項限制 ([#5430](https://github.com/nocobase/nocobase/pull/5430)) by @mytharcher
- **[操作：複製記錄]** 修復批量編輯彈出視窗不顯示內容的問題 ([#5412](https://github.com/nocobase/nocobase/pull/5412)) by @zhangzhonghe
- **[資料視覺化]** 修復圖表篩選區塊中預設值不顯示的問題 ([#5405](https://github.com/nocobase/nocobase/pull/5405)) by @zhangzhonghe

## [v1.3.34-beta](https://www.nocobase.com/en/blog/v1.3.34-beta)

*發布日期：2024-10-21*

### 🎉 新功能

- **[測試]** 篩選表單中的關聯欄位支援配置是否允許多選 ([#5451](https://github.com/nocobase/nocobase/pull/5451)) by @zhangzhonghe
- **[客戶端]** 新增名為「父級物件」的變數 ([#5449](https://github.com/nocobase/nocobase/pull/5449)) by @zhangzhonghe
  參考：[父級物件](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 錯誤修復

- **[客戶端]**

  - 修復 URL 搜尋參數變數未被解析的問題 ([#5454](https://github.com/nocobase/nocobase/pull/5454)) by @zhangzhonghe
  - 修復在巢狀子表格中選擇帶有資料範圍的關聯資料時，資料被清除的錯誤 ([#5441](https://github.com/nocobase/nocobase/pull/5441)) by @katherinehhh
  - 修復表格行選中的背景顏色 ([#5445](https://github.com/nocobase/nocobase/pull/5445)) by @mytharcher
- **[區塊：地圖]** 移除表格列中地圖欄位的縮放等級配置 ([#5457](https://github.com/nocobase/nocobase/pull/5457)) by @katherinehhh
- **[檔案管理器]** 修復在唯讀欄位上調用儲存規則鉤子的問題 ([#5447](https://github.com/nocobase/nocobase/pull/5447)) by @mytharcher
- **[資料來源：主]** 修復因元件變更導致的 e2e 測試案例失敗 ([#5437](https://github.com/nocobase/nocobase/pull/5437)) by @mytharcher

## [v1.3.35-beta](https://www.nocobase.com/en/blog/v1.3.35-beta)

*發布日期：2024-10-21*

### 🚀 改進

- **[工作流：郵件發送節點]** 為郵件發送節點添加佔位符 ([#5470](https://github.com/nocobase/nocobase/pull/5470)) by @mytharcher

## [v1.3.36-beta](https://www.nocobase.com/en/blog/v1.3.36-beta)

*發布日期：2024-10-22*

### 🐛 錯誤修復

- **[集合：樹]** 修復繼承樹集合的路徑集合未自動建立的問題 ([#5486](https://github.com/nocobase/nocobase/pull/5486)) by @2013xile
- **[日曆]** 在表格中顯示帶有資料的分頁欄 ([#5480](https://github.com/nocobase/nocobase/pull/5480)) by @katherinehhh
- **[檔案管理器]** 修復因規則鉤子導致檔案無法上傳的問題 ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher
- **[集合欄位：公式]** 修復在巢狀多層子表格中公式計算不正確的問題 ([#5469](https://github.com/nocobase/nocobase/pull/5469)) by @gu-zhichao

## [v1.3.37-beta](https://www.nocobase.com/en/blog/v1.3.37-beta)

*發布日期：2024-10-23*

### 🚀 改進

- **[客戶端]** 將綁定工作流程配置面板中的提示調整為按鈕 ([#5494](https://github.com/nocobase/nocobase/pull/5494)) by @mytharcher

### 🐛 錯誤修復

- **[檔案管理器]** 修正在關聯區塊內上傳和刪除檔案記錄的問題 ([#5493](https://github.com/nocobase/nocobase/pull/5493)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.20241016035453](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241016035453)

*發布日期：2024-10-16*

### 🎉 新功能

- **[SDK]** 允許通過設置 `API_CLIENT_STORAGE_TYPE` 環境變數將客戶端資訊存儲到 sessionStorage ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[集合欄位：附件(URL)]** 新增附件 (URL) 欄位 by @katherinehhh

### 🚀 改進

- **[客戶端]**

  - 優化遠端除錯 ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - 操作按鈕僅使用圖示時，圖示居中樣式優化 ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - 更新記錄時自動關閉訊息彈窗 ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[工作流：HTTP 請求節點]** 支援 SSE (伺服器推送事件) ([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 錯誤修復

- **[公開表單]** 修復點擊公開表單設定時的問題 ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[客戶端]**

  - 修復預設值輸入框中不顯示值的問題 ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - 修復子表格設置聯動規則時找不到關聯欄位的錯誤 ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - 修復當檔案類型預設不支援時，縮圖預覽錯誤的問題 ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[本地化]** 修復本地化插件中的翻譯在發布後不生效的問題 ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile

## [v1.4.0-alpha.20241017164316](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241017164316)

*發布日期：2024-10-18*

### 🎉 新功能

- **[工作流：循環節點]** 為循環節點配置添加更多控制選項 ([#5342](https://github.com/nocobase/nocobase/pull/5342)) by @mytharcher
  參考：[循環節點](https://docs.nocobase.com/handbook/workflow-loop)
- **[工作流]** 為工作流節點添加測試運行按鈕，以及實現測試功能的 API ([#5407](https://github.com/nocobase/nocobase/pull/5407)) by @mytharcher
- **[欄位元件：遮罩]** 新增欄位元件 `mask`，支援將欄位資料顯示為遮罩字串 by @gchust
  參考：[遮罩](https://docs.nocobase.com/handbook/field-component-mask)

### 🚀 改進

- **[客戶端]** 允許將表格列標題重置為預設值 ([#5439](https://github.com/nocobase/nocobase/pull/5439)) by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 修復欄位元件選項未正確翻譯的問題 ([#5442](https://github.com/nocobase/nocobase/pull/5442)) by @gchust
- **[工作流：HTTP 請求節點]** 修復請求節點中的舊錯誤訊息 ([#5443](https://github.com/nocobase/nocobase/pull/5443)) by @mytharcher

## [v1.4.0-alpha.20241023053303](https://www.nocobase.com/en/blog/v1.4.0-alpha.20241023053303)

*發布日期：2024-10-23*

### 🚀 改進

- **[客戶端]** 子表格支援分頁 ([#5450](https://github.com/nocobase/nocobase/pull/5450)) by @katherinehhh
- **[區塊：看板]** 新增在看板區塊中啟用或停用拖曳排序的支援 ([#5468](https://github.com/nocobase/nocobase/pull/5468)) by @katherinehhh
- **[日曆]** 選擇日曆時段時顯示建立彈窗 ([#5483](https://github.com/nocobase/nocobase/pull/5483)) by @gu-zhichao
- **[多應用管理器]** 支援 `USE_DB_SCHEMA_IN_SUBAPP` 環境變數 ([#5481](https://github.com/nocobase/nocobase/pull/5481)) by @chenos
- **[工作流]** 新增類似卡片的欄位集合元件 ([#5464](https://github.com/nocobase/nocobase/pull/5464)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 重新整理 Markdown 區塊彈窗後變數值遺失 ([#5478](https://github.com/nocobase/nocobase/pull/5478)) by @katherinehhh
- **[資料視覺化]** 修復使用外部 Oracle 資料來源進行資料視覺化時的問題，例如日期格式化問題 ([#5436](https://github.com/nocobase/nocobase/pull/5436)) by @2013xile
- **[檔案管理器]** 修復因規則鉤子導致檔案無法上傳的問題 ([#5460](https://github.com/nocobase/nocobase/pull/5460)) by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 獲取 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
