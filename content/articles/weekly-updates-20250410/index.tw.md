---
title: "NocoBase 每週更新：優化儲存任務邏輯"
description: "本週更新包括：篩選元件支援欄位搜尋、儲存配置支援全域變數等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：測試版，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要搶先體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.16](https://www.nocobase.com/en/blog/v1.6.16)

*發布日期：2025-04-03*

#### 🐛 錯誤修復

- **[client]**

  - x-disabled 屬性在表單欄位上未生效 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  - 欄位標籤顯示問題，防止被冒號截斷 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
- **[database]** 刪除一對多記錄時，同時傳遞了 `filter` 和 `filterByTk`，且 `filter` 包含關聯欄位時，`filterByTk` 會被忽略 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

### [v1.6.17](https://www.nocobase.com/en/blog/v1.6.17)

*發布日期：2025-04-09*

#### 🚀 功能改進

- **[utils]** 為 dayjs 新增持續時間擴展 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher
- **[client]**

  - 支援在篩選器元件中搜尋欄位 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher
  - 為 `Input` 和 `Variable.TextArea` 新增 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher
- **[錯誤處理]** 支援在 AppError 元件中自訂標題。([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66
- **[IP 限制]** 更新 IP 限制訊息內容。 by @sheldon66
- **[檔案儲存：S3(Pro)]** 支援在儲存配置中使用全域變數 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 當條件列表為空時，使用 'any' 條件的規則未生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  - 樹狀集合中甘特圖區塊的資料問題 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  - 篩選表單中的關聯欄位在頁面重新整理後因未攜帶 x-data-source 而報錯 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  - URL 參數包含中文字元時變數解析失敗 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
- **[使用者]** 解析使用者個人資料表單結構的問題 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
- **[行動端]** 行動端上使用 'contains' 篩選器的單選欄位不支援多選 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
- **[操作：匯出記錄]** 變更分頁後匯出資料時缺少篩選參數 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
- **[電子郵件管理員]** 修復電子郵件管理權限無法檢視郵件列表的問題 by @jiannx
- **[檔案儲存：S3(Pro)]** 上傳 Logo 至 S3 Pro 儲存（設為預設）時向使用者拋出錯誤 by @mytharcher
- **[工作流：審批]** 修復遷移後 `updatedAt` 變更的問題 by @mytharcher
- **[遷移管理員]** 部分環境中遷移日誌建立時間顯示不正確 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.14](https://www.nocobase.com/en/blog/v1.7.0-beta.14)

*發布日期：2025-04-09*

#### 🎉 新功能

- **[UI 結構儲存]** 為 UISchema 新增本地化模組，支援為結構標題和描述自訂翻譯 ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

#### 🚀 功能改進

- **[utils]** 為 dayjs 新增持續時間擴展 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher
- **[client]**

  - 支援在篩選器元件中搜尋欄位 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher
  - 為 `Input` 和 `Variable.TextArea` 新增 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher
- **[工作流]** 優化儲存任務邏輯 ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher
- **[錯誤處理]** 支援在 AppError 元件中自訂標題。([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66
- **[IP 限制]** 更新 IP 限制訊息內容。 by @sheldon66
- **[檔案儲存：S3(Pro)]** 支援在儲存配置中使用全域變數 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 篩選表單中的關聯欄位在頁面重新整理後因未攜帶 x-data-source 而報錯 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe
  - 樹狀集合中甘特圖區塊的資料問題 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh
  - 區塊模板配置頁面標題與選單之間的空白區域 ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust
  - 當條件列表為空時，使用 'any' 條件的規則未生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh
  - x-disabled 屬性在表單欄位上未生效 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh
  - URL 參數包含中文字元時變數解析失敗 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh
  - 欄位標籤顯示問題，防止被冒號截斷 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh
- **[操作：匯出記錄]** 變更分頁後匯出資料時缺少篩選參數 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh
- **[使用者]** 解析使用者個人資料表單結構的問題 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile
- **[行動端]** 行動端上使用 'contains' 篩選器的單選欄位不支援多選 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh
- **[存取控制]** 修正角色聯集計算邏輯 ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie
- **[區塊：模板]** 從模板建立區塊後，修改並刪除模板與區塊中的相同欄位，可能導致渲染錯誤 ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust
- **[電子郵件管理員]**

  - 修復缺少 await 的下一次呼叫。 by @jiannx
  - 修復電子郵件管理權限無法檢視郵件列表的問題 by @jiannx
- **[檔案儲存：S3(Pro)]**

  - 修復缺少 await 的下一次呼叫。 by @jiannx
  - 上傳 Logo 至 S3 Pro 儲存（設為預設）時向使用者拋出錯誤 by @mytharcher
- **[工作流：審批]** 修復遷移後 `updatedAt` 變更的問題 by @mytharcher
- **[遷移管理員]** 部分環境中遷移日誌建立時間顯示不正確 by @gchust
