---
title: "NocoBase 每週更新：提升工作流程易用性"
description: "NocoBase 每週更新 2024-11-14"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/tags/release-notes)查看。

NocoBase 目前有兩個分支進行更新：`main` 和 `next`。

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Alpha 版本，包含一些尚未發布的新功能。此版本可能不完全穩定，適合開發者或測試人員提前體驗新功能或進行相容性測試。

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

## [v1.3.45-beta](https://www.nocobase.com/en/blog/v1.3.45-beta)

*發布日期：2024-11-06*

### 🐛 錯誤修復

- **[客戶端]** 表格中關聯表欄位的權限現在基於對應關聯欄位的權限 ([#5569](https://github.com/nocobase/nocobase/pull/5569)) by @katherinehhh
- **[操作：匯出記錄]** 修復含 i18n 的匯出問題 ([#5591](https://github.com/nocobase/nocobase/pull/5591)) by @chareice
- **[操作：匯入記錄]** 修復匯入屬於關聯時的問題 ([#5417](https://github.com/nocobase/nocobase/pull/5417)) by @chareice

## [v1.3.47-beta](https://www.nocobase.com/en/blog/v1.3.47-beta)

*發布日期：2024-11-08*

### 🚀 功能改進

- **[認證]** 優化登入和註冊的錯誤訊息 ([#5612](https://github.com/nocobase/nocobase/pull/5612)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]**

  - 修復子表格中的預設值問題 ([#5607](https://github.com/nocobase/nocobase/pull/5607)) by @zhangzhonghe
  - 修復對字串類型標題欄位的關聯欄位進行模糊搜尋支援的問題 ([#5611](https://github.com/nocobase/nocobase/pull/5611)) by @katherinehhh
- **[認證]** 修復使用非密碼驗證器登入時，使用者無法更改密碼的問題 ([#5609](https://github.com/nocobase/nocobase/pull/5609)) by @2013xile

## [v1.3.48-beta](https://www.nocobase.com/en/blog/v1.3.48-beta)

*發布日期：2024-11-11*

### 🚀 功能改進

- **[客戶端]** 支援隱藏選單項目 ([#5624](https://github.com/nocobase/nocobase/pull/5624)) by @chenos
- **[伺服器]** 新增 `DB_SQL_BENCHMARK` 環境變數 ([#5615](https://github.com/nocobase/nocobase/pull/5615)) by @chareice

### 🐛 錯誤修復

- **[客戶端]** 支援檔案集合作為一對多關聯的目標 ([#5619](https://github.com/nocobase/nocobase/pull/5619)) by @mytharcher
- **[操作：匯入記錄]** 修復無法透過 id 欄位匯入多對多關聯資料的問題 ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

## [v1.3.49-beta](https://www.nocobase.com/en/blog/v1.3.49-beta)

*發布日期：2024-11-13*

### 🚀 功能改進

- **[客戶端]** 支援一對一和多對多（陣列）欄位使用檔案集合 ([#5637](https://github.com/nocobase/nocobase/pull/5637)) by @mytharcher
- **[評估器]** 在計算節點中使用 Formula.js 作為預設評估器 ([#5626](https://github.com/nocobase/nocobase/pull/5626)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修復重設篩選按鈕標題回預設值的問題 ([#5635](https://github.com/nocobase/nocobase/pull/5635)) by @katherinehhh
- **[操作：匯入記錄]** 修復無法透過 id 欄位匯入多對多關聯資料的問題 ([#5623](https://github.com/nocobase/nocobase/pull/5623)) by @chareice

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

## [v1.4.0-alpha.6](https://www.nocobase.com/en/blog/v1.4.0-alpha.6)

*發布日期：2024-11-07*

### 🎉 新功能

- **[客戶端]** 支援隱藏表格欄位的配置選項 ([#5597](https://github.com/nocobase/nocobase/pull/5597)) by @zhangzhonghe

### 🚀 功能改進

- **[資料來源管理器]** 調整表格分類為從主資料來源載入，並從全域移除 ([#5602](https://github.com/nocobase/nocobase/pull/5602)) by @katherinehhh
- **[通知管理器]** 更新訊息結構，在通知日誌資料中包含接收者 ([#5603](https://github.com/nocobase/nocobase/pull/5603)) by @sheldon66

### 🐛 錯誤修復

- **[客戶端]** 修復非配置模式下表格捲軸的問題 ([#5599](https://github.com/nocobase/nocobase/pull/5599)) by @katherinehhh
- **[操作：匯入記錄]** 修復含日期欄位的匯入問題 ([#5606](https://github.com/nocobase/nocobase/pull/5606)) by @chareice

## [v1.4.0-alpha.7](https://www.nocobase.com/en/blog/v1.4.0-alpha.7)

*發布日期：2024-11-11*

### 🎉 新功能

- **[客戶端]** 支援變數表達式元件的分隔符屬性 ([#5620](https://github.com/nocobase/nocobase/pull/5620)) by @mytharcher
- **[工作流程]** 支援在建立包含分支的節點時，將下游節點移動到新分支中 ([#5570](https://github.com/nocobase/nocobase/pull/5570)) by @mytharcher

### 🚀 功能改進

- **[客戶端]**

  - 優化欄位列表：移除關聯欄位和重複標籤 ([#5616](https://github.com/nocobase/nocobase/pull/5616)) by @katherinehhh
  - 支援從 `Collection` 類別取得 `getFilterTargetKey()` ([#5617](https://github.com/nocobase/nocobase/pull/5617)) by @mytharcher
- **[資料來源：主要]** 重構 collections:list API 以提升效能 ([#5610](https://github.com/nocobase/nocobase/pull/5610)) by @chareice
- **[通知管理器]** 改善通知頻道管理員 UI ([#5621](https://github.com/nocobase/nocobase/pull/5621)) by @sheldon66

## [v1.4.0-alpha.8](https://www.nocobase.com/en/blog/v1.4.0-alpha.8)

*發布日期：2024-11-11*

### 🎉 新功能

- **[企業微信]**
  - 支援在企業微信瀏覽器中訪問應用頁面時自動登入 by @chenzhizdt
  - 支援在通知中使用 Markdown 和範本卡片 by @chenzhizdt

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全的控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘認識 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**線上體驗**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
