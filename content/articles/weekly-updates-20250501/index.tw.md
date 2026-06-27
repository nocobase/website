---
title: "NocoBase 每週更新：區塊支援聯動規則"
description: "本週更新包括：區塊支援聯動規則以實現動態顯示、自訂請求動作的成功訊息中支援回應變數，以及更多。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.23](https://www.nocobase.com/en/blog/v1.6.23)

*發布日期：2025-04-23*

#### 🚀 改進

- **[cli]** 優化 `nocobase upgrade` 指令的內部邏輯 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
- **[範本列印]** 將資料源操作控制取代為基於客戶端角色的存取控制。 by @sheldon66

#### 🐛 錯誤修復

- **[cli]** 升級時自動更新 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
- **[client]**

  - 新增關聯資料時，缺少對已關聯資料的過濾 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
  - 樹狀表格「新增子節點」按鈕的聯動規則缺少「目前記錄」([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
- **[操作：匯入記錄]** 修復設定欄位權限時發生的匯入匯出異常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
- **[區塊：甘特圖]** 甘特圖區塊在月檢視的日曆標題中月份重疊 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
- **[操作：匯出記錄 Pro]**

  - Pro 匯出按鈕在對表格欄位排序後遺失篩選參數 by @katherinehhh
  - 修復設定欄位權限時發生的匯入匯出異常。 by @aaaaaajie
- **[檔案儲存：S3(Pro)]** 修正上傳檔案的回應資料 by @mytharcher
- **[工作流程：審批]** 修正記錄的預載入關聯欄位 by @mytharcher

### [v1.6.24](https://www.nocobase.com/en/blog/v1.6.24)

*發布日期：2025-04-24*

#### 🚀 改進

- **[client]** 調整上傳訊息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**
  - 當 writableView 為 false 時，僅支援檢視集合中的匯出操作 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - 在建立表單的子表單/子表格中顯示關聯欄位時，意外建立關聯資料 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh
  - 從表單中相關表格擷取多對多陣列欄位的資料不正確 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile

### [v1.6.25](https://www.nocobase.com/en/blog/v1.6.25)

*發布日期：2025-04-29*

#### 🎉 新功能

- **[undefined]** 為授權套件新增發布 CI ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx
- **[資料視覺化：ECharts]** 為長條圖新增「Y 軸反向」設定 by @2013xile

#### 🚀 改進

- **[utils]** 增加篩選按鈕欄位清單的高度，並對欄位進行排序/分類 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe
- **[client]** 優化子表格新增按鈕樣式，並將分頁器對齊在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[檔案管理]** 新增 OSS 逾時選項，預設為 10 分鐘 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[密碼策略]** 將預設密碼到期時間改為永不到期 by @2013xile
- **[企業微信]** 更新使用者電子郵件時，優先使用企業郵箱而非個人郵箱 by @2013xile

#### 🐛 錯誤修復

- **[client]**

  - 在折疊區塊中，點擊關聯欄位搜尋框的清除按鈕不應刪除資料範圍 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - 當從關聯集合顯示欄位時，關聯欄位未提交資料 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - 禁止在頁面頁籤前後移動選單 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe
  - 表格區塊在篩選時顯示重複資料 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - 在篩選表單中，切換欄位運算子後重新整理頁面會導致錯誤 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
- **[database]**

  - 避免資料類型非字串時拋出錯誤 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
  - 為 SQL 集合和檢視集合新增 unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[create-nocobase-app]** 暫時透過降級至 2.5.6 來修復 MariaDB 問題 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[認證]** 不允許變更認證器名稱 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[範本列印]** 修正：更正權限驗證邏輯以防止未經授權的操作。 by @sheldon66
- **[檔案儲存：S3(Pro)]** 存取 URL 過期無效 by @jiannx
- **[區塊：樹狀]** 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 by @zhangzhonghe

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.22](https://www.nocobase.com/en/blog/v1.7.0-beta.22)

*發布日期：2025-04-24*

#### 🚀 改進

- **[cli]** 優化 `nocobase upgrade` 指令的內部邏輯 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos

#### 🐛 錯誤修復

- **[client]** 多層級關聯資料中聯動規則的顯示問題 ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh

### [v1.7.0-beta.23](https://www.nocobase.com/en/blog/v1.7.0-beta.23)

*發布日期：2025-04-24*

#### 🎉 新功能

- **[操作：自訂請求]** 支援在自訂請求操作的成功訊息中使用回應變數 ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh

#### 🚀 改進

- **[client]** 調整上傳訊息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher

#### 🐛 錯誤修復

- **[client]**
  - 從表單中相關表格擷取多對多陣列欄位的資料不正確 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile
  - 當 writableView 為 false 時，僅支援檢視集合中的匯出操作 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - 在建立表單的子表單/子表格中顯示關聯欄位時，意外建立關聯資料 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh

### [v1.7.0-beta.24](https://www.nocobase.com/en/blog/v1.7.0-beta.24)

*發布日期：2025-04-25*

#### 🎉 新功能

- **[client]** 支援在區塊中配置聯動規則以動態顯示/隱藏 ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh

#### 🚀 改進

- **[client]** 保留參考範本功能 ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust
- **[資料視覺化]** 為欄位介面配置新增擴展 API ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile

#### 🐛 錯誤修復

- **[create-nocobase-app]** 暫時透過降級至 2.5.6 來修復 MariaDB 問題 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[database]** 為 SQL 集合和檢視集合新增 unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[client]** URL 查詢參數運算子問題 ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh
- **[區塊：操作面板]** 啟用僅圖示模式時，操作面板圖示遺失 ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh
- **[工作流程：日期計算節點]** 修正不支援 `Intl` API 的舊版瀏覽器錯誤 by @mytharcher

### [v1.7.0-beta.25](https://www.nocobase.com/en/blog/v1.7.0-beta.25)

*發布日期：2025-04-28*

#### 🎉 新功能

- **[檔案管理]** 功能：新增 `getFileStream` API 以支援檔案串流。 ([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66

#### 🚀 改進

- **[client]** 在操作圖示懸停時，使用工具提示顯示按鈕標題 ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh
- **[企業微信]** 更新使用者電子郵件時，優先使用企業郵箱而非個人郵箱 by @2013xile

#### 🐛 錯誤修復

- **[檔案儲存：S3(Pro)]** 存取 URL 過期無效 by @jiannx
- **[範本列印]** 修正：更正權限驗證邏輯以防止未經授權的操作。 by @sheldon66
- **[區塊：樹狀]** 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 by @zhangzhonghe

### [v1.7.0-beta.26](https://www.nocobase.com/en/blog/v1.7.0-beta.26)

*發布日期：2025-04-28*

#### 🎉 新功能

- **[undefined]** 為授權套件新增發布 CI ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

#### 🚀 改進

- **[utils]** 增加篩選按鈕欄位清單的高度，並對欄位進行排序/分類 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

#### 🐛 錯誤修復

- **[client]**
  - 在折疊區塊中，點擊關聯欄位搜尋框的清除按鈕不應刪除資料範圍 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - 在篩選表單中，切換欄位運算子後重新整理頁面會導致錯誤 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
  - 表格區塊在篩選時顯示重複資料 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - 樹狀表格中新增子記錄按鈕的對齊問題 ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh
  - 禁止在頁面頁籤前後移動選單 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.12](https://www.nocobase.com/en/blog/v1.7.0-alpha.12)

*發布日期：2025-04-24*

#### 🚀 改進

- **[cli]** 優化 `nocobase upgrade` 指令的內部邏輯 ([#6754](https://github.com/nocobase/nocobase/pull/6754)) by @chenos
- **[create-nocobase-app]** 升級依賴項並移除 SQLite 支援 ([#6708](https://github.com/nocobase/nocobase/pull/6708)) by @chenos
- **[行動端]** 優化行動端日期選擇器彈出視窗的開啟速度 ([#6735](https://github.com/nocobase/nocobase/pull/6735)) by @zhangzhonghe
- **[區塊：範本]** 支援將範本區塊轉換為普通區塊 ([#6662](https://github.com/nocobase/nocobase/pull/6662)) by @gchust
- **[檔案管理]** 公開 utils API ([#6705](https://github.com/nocobase/nocobase/pull/6705)) by @mytharcher
- **[主題編輯器]** 允許在主題配置中設定側邊欄寬度 ([#6720](https://github.com/nocobase/nocobase/pull/6720)) by @chenos
- **[工作流程]** 將日期類型新增至變數類型集合 ([#6717](https://github.com/nocobase/nocobase/pull/6717)) by @mytharcher
- **[範本列印]** 將資料源操作控制取代為基於客戶端角色的存取控制。 by @sheldon66

#### 🐛 錯誤修復

- **[client]**

  - 多層級關聯資料中聯動規則的顯示問題 ([#6755](https://github.com/nocobase/nocobase/pull/6755)) by @katherinehhh
  - 樹狀表格「新增子節點」按鈕的聯動規則缺少「目前記錄」([#6752](https://github.com/nocobase/nocobase/pull/6752)) by @katherinehhh
  - 成功提交後重新整理資料區塊的問題 ([#6748](https://github.com/nocobase/nocobase/pull/6748)) by @zhangzhonghe
  - 左側選單的折疊按鈕被工作流程彈出視窗遮擋的問題 ([#6733](https://github.com/nocobase/nocobase/pull/6733)) by @zhangzhonghe
  - 行動端頂部導航欄圖示難以刪除的問題 ([#6734](https://github.com/nocobase/nocobase/pull/6734)) by @zhangzhonghe
  - 「啟用索引列」的值顯示不正確 ([#6724](https://github.com/nocobase/nocobase/pull/6724)) by @katherinehhh
  - 日期時間欄位條件在聯動規則中不起作用 ([#6728](https://github.com/nocobase/nocobase/pull/6728)) by @katherinehhh
  - 重新開啟聯動規則時缺少操作選項約束 ([#6723](https://github.com/nocobase/nocobase/pull/6723)) by @katherinehhh
  - 被聯動規則隱藏的必填欄位不應影響表單提交 ([#6709](https://github.com/nocobase/nocobase/pull/6709)) by @zhangzhonghe
  - 新增關聯資料時，缺少對已關聯資料的過濾 ([#6750](https://github.com/nocobase/nocobase/pull/6750)) by @katherinehhh
- **[server]** create-migration 錯誤地產生了 appVersion ([#6740](https://github.com/nocobase/nocobase/pull/6740)) by @chenos
- **[cli]** 升級時自動更新 package.json ([#6747](https://github.com/nocobase/nocobase/pull/6747)) by @chenos
- **[build]** 修正 tar 指令中拋出的錯誤 ([#6722](https://github.com/nocobase/nocobase/pull/6722)) by @mytharcher
- **[區塊：甘特圖]** 甘特圖區塊在月檢視的日曆標題中月份重疊 ([#6753](https://github.com/nocobase/nocobase/pull/6753)) by @katherinehhh
- **[操作：匯入記錄]** 修復設定欄位權限時發生的匯入匯出異常。 ([#6677](https://github.com/nocobase/nocobase/pull/6677)) by @aaaaaajie
- **[區塊：範本]** 區塊範本無法在 MySQL 環境中使用 ([#6726](https://github.com/nocobase/nocobase/pull/6726)) by @gchust
- **[工作流程]** 修正子流程中執行排程事件時拋出的錯誤 ([#6721](https://github.com/nocobase/nocobase/pull/6721)) by @mytharcher
- **[工作流程：自訂操作事件]** 支援在多記錄模式下執行 by @mytharcher
- **[操作：匯出記錄 Pro]**

  - 修復設定欄位權限時發生的匯入匯出異常。 by @aaaaaajie
  - Pro 匯出按鈕在對表格欄位排序後遺失篩選參數 by @katherinehhh
- **[檔案儲存：S3(Pro)]**

  - 修正上傳檔案的回應資料 by @mytharcher
  - 為伺服器端上傳新增 multer 邏輯 by @mytharcher
- **[工作流程：審批]** 修正記錄的預載入關聯欄位 by @mytharcher
