---
title: "NocoBase v1.0.1-alpha.1：區塊支援高度設定"
description: "NocoBase v1.0.1-alpha.1 引入了新功能，如區塊高度設定、URL 連結動作和 iframe 的變數支援，並進行了多項改進和錯誤修復，以增強平台的功能和效能。"
---

## 新功能

### 區塊支援高度設定 ([#4441](https://github.com/nocobase/nocobase/pull/4441))

![20240603115253](https://static-docs.nocobase.com/20240603115253.gif)

參考文件：

* [設定區塊高度](https://docs.nocobase.com/handbook/ui/blocks/block-settings/block-height)

### 連結動作：導航至指定 URL ([#4506](https://github.com/nocobase/nocobase/pull/4506))

支援在 URL 或搜尋參數中設定變數。

<video controls="" height="250" width="100%"></video>

參考文件：

* [連結動作](https://docs.nocobase.com/handbook/ui/actions/types/link)

### 新增名為「URL 搜尋參數」的變數 ([#4506](https://github.com/nocobase/nocobase/pull/4506))

此變數僅在頁面 URL 包含查詢字串時可用，方便與[連結動作](https://docs.nocobase.com/handbook/ui/actions/types/link)搭配使用。

![20240603170651](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603170651.png)

參考文件：

* [URL 搜尋參數](https://docs.nocobase.com/handbook/ui/variables#url-search-params)
* [連結動作](https://docs.nocobase.com/handbook/ui/actions/types/link)

### Iframe 支援變數 ([#4512](https://github.com/nocobase/nocobase/pull/4512))

![20240603114711](https://static-docs.nocobase.com/20240603114711.png)

![20240603114750](https://static-docs.nocobase.com/20240603114750.png)

參考文件：

* [iframe 區塊](https://docs.nocobase.com/handbook/block-iframe)

### 檔案儲存支援設定檔案大小與檔案類型 ([#4118](https://github.com/nocobase/nocobase/pull/4118))

![20240603115303](https://static-docs.nocobase.com/20240603115303.png)

參考文件：

* [檔案儲存](https://docs.nocobase.com/handbook/file-manager/storage)

### 工作流程：變數節點支援選取資料物件的部分路徑作為變數值

![20240531211727](https://static-docs.nocobase.com/20240531211727.png)

### URL 欄位支援預覽 ([#4559](https://github.com/nocobase/nocobase/pull/4559))

目前僅支援圖片預覽。

![337101796-916a6c97-bc08-4560-9526-53e482e2ac6c](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/337101796-916a6c97-bc08-4560-9526-53e482e2ac6c.gif)

### 資料視覺化：支援「URL 查詢參數」與「目前角色」變數 ([#4586](https://github.com/nocobase/nocobase/pull/4586))

![data-visualization-filter-block](https://static-docs.nocobase.com/202406071148997.png)

![data-visualization-filter](https://static-docs.nocobase.com/202406071149567.png)

## 改進

### 匯入與匯出功能最佳化 ([#4468](https://github.com/nocobase/nocobase/pull/4468))

提升了匯入與匯出功能的穩定性，將匯入與匯出的限制提高至 2000 筆記錄。支援擴充自訂欄位類型的匯入與匯出邏輯。

![20240611112948](https://static-docs.nocobase.com/20240611112948.png)

### 停用日期變數選項以避免誤操作 ([#4452](https://github.com/nocobase/nocobase/pull/4452))

除了「目前時間」之外，代表日期的變數是區間（陣列）而非時間點（字串）。它們可用於篩選，但不能直接用作預設值。

![20240527150429](https://static-docs.nocobase.com/20240527150429.png)

### 聯動規則指派互動最佳化 ([#4492](https://github.com/nocobase/nocobase/pull/4492))

多選欄位不顯示指派選項。如果已選取單選欄位並進行指派，則切換至多選欄位時將清除該設定。

![20240603143309](https://static-docs.nocobase.com/20240603143309.png)

### 調整表格區塊中操作欄的右上角圖示 ([#4538](https://github.com/nocobase/nocobase/pull/4538))

![20240603115131](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115131.png)

### 錯誤降級處理 (ErrorFallback) ([#4459](https://github.com/nocobase/nocobase/pull/4459))

針對前端不同元件細化錯誤降級處理，防止因前端錯誤導致整個頁面無法使用。

![error-fallback](https://static-docs.nocobase.com/20240604122043_rec_.gif)

### 前端錯誤發生時收集除錯資訊並快速下載日誌 ([#4524](https://github.com/nocobase/nocobase/pull/4524))

![error-fallback-log](https://static-docs.nocobase.com/202406041224009.png)

### 其他

* 將使用者名稱的字元長度限制修改為 1-50 ([#4502](https://github.com/nocobase/nocobase/pull/4502))
* 不再隱藏外鍵欄位 ([#4499](https://github.com/nocobase/nocobase/pull/4499))

## 錯誤修復

### 權限設定對話框中的資料範圍不應支援「目前表單」與「目前彈窗記錄」變數 ([#4484](https://github.com/nocobase/nocobase/pull/4484))

![20240527145519](https://static-docs.nocobase.com/20240527145519.png)

### 支援直接選取變數的值作為關聯欄位的預設值 ([#4439](https://github.com/nocobase/nocobase/pull/4439))

![20240603121447](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603121447.png)

### 修復多次新增「自訂請求」動作時發生錯誤的問題 ([#4458](https://github.com/nocobase/nocobase/pull/4458))

![20240603115234](https://nocobase-docs.oss-cn-beijing.aliyuncs.com/20240603115234.png)

### 其他

* 修復表單提交後子表格內容未被清除的問題。([#4475](https://github.com/nocobase/nocobase/pull/4475))
* 修復在子表格中使用「目前物件」變數異常的問題。([#4521](https://github.com/nocobase/nocobase/pull/4521))
* 為地圖欄位新增「設定預設縮放層級」選項。([#4527](https://github.com/nocobase/nocobase/pull/4527))
* 修復在彈窗中使用區塊範本新增區塊時，區塊未顯示的問題。([#4531](https://github.com/nocobase/nocobase/pull/4531))
* 修復表單資料範本的樣式問題。([#4536](https://github.com/nocobase/nocobase/pull/4536))
* 工作流程：計算節點中的運算式框樣式消失。([#4513](https://github.com/nocobase/nocobase/pull/4513))
* 工作流程：在手動節點的自訂表單中建立的欄位類型不正確。([#4519](https://github.com/nocobase/nocobase/pull/4519))
* 工作流程：觸發自訂動作事件的權限問題。([#4522](https://github.com/nocobase/nocobase/pull/4522))
* 工作流程：多資料來源預載關聯的深度設定不正確。([#4526](https://github.com/nocobase/nocobase/pull/4526))
* `json-templates` 函式庫錯誤。([#4525](https://github.com/nocobase/nocobase/pull/4525))
* 檔案管理：在 COS 上傳或刪除檔案時發生錯誤。([#4529](https://github.com/nocobase/nocobase/pull/4529), [#4537](https://github.com/nocobase/nocobase/pull/4537))
* 表單聯動規則在為數值欄位指派值 0.00 時顯示 [object Object]。([#4482](https://github.com/nocobase/nocobase/pull/4482))
* 子表格缺少新增按鈕的控制設定項目。([#4498](https://github.com/nocobase/nocobase/pull/4498))
* 表格編輯表單中的提交按鈕缺少聯動規則設定項目。([#4515](https://github.com/nocobase/nocobase/pull/4515))
* 資料視覺化：修正在為圖表篩選欄位設定預設值時，欄位元件不可見的問題。([#4509](https://github.com/nocobase/nocobase/pull/4509))
* 認證：修復新建立的基本認證器找不到註冊頁面的問題。([#4556](https://github.com/nocobase/nocobase/pull/4556))
* 本地化：修正在翻譯選單文字時，頁面標題未被翻譯的問題。([#4557](https://github.com/nocobase/nocobase/pull/4557))
* 地圖：修復即使設定正確，高德地圖仍顯示金鑰錯誤的問題。([#4574](https://github.com/nocobase/nocobase/pull/4574))
