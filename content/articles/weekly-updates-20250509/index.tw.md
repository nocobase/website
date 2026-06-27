---
title: "NocoBase 每週更新：模板列印支援圖片與條碼"
description: "本週更新包括：文件模板支援動態圖片與條碼渲染、二次確認標題與內容支援變數等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：測試版，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.26](https://www.nocobase.com/en/blog/v1.6.26)

*發布日期：2025-05-07*

#### 🎉 新功能

- **[區塊：iframe]** Iframe 區塊支援設定 allow 屬性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe
- **[範本列印]** 功能：在範本列印中支援 `{ label, value }` 選擇選項。 by @sheldon66

#### 🐛 錯誤修復

- **[client]**

  - 在巢狀子頁面中，滑鼠懸停在「新增區塊」按鈕上時，區塊列表未顯示 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe
  - 當篩選表單的關聯欄位元件更改為資料選擇器時，缺少「允許複選」配置項 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe
  - 表單欄位違反驗證規則時顯示多條錯誤訊息 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - 在子表格內的子表單（彈窗）中配置聯動規則的問題 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - 修復在篩選表單中無法選擇一對多欄位的子欄位作為篩選選項的問題 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - 唯讀模式下子表格分頁欄樣式問題 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh
  - 篩選表單中的表格選擇器樣式異常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe
- **[database]**

  - 修正在 MariaDB 下，當外鍵為 bigInt 時，belongs-to 關聯未在 appends 中載入的問題 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher
  - 修正測試案例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
- **[集合欄位：附件(URL)]** 附件（URL）欄位不應允許在聯動規則中配置值 ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh
- **[工作流：自訂操作事件]** 觸發的工作流操作聯動問題 by @katherinehhh

### [v1.6.27](https://www.nocobase.com/en/blog/v1.6.27)

*發布日期：2025-05-08*

#### 🐛 錯誤修復

- **[client]**
  - 無法將其他按鈕拖曳到複製按鈕上 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh
  - 顯示關聯集合欄位時，多個關聯欄位提交失敗 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.27](https://www.nocobase.com/en/blog/v1.7.0-beta.27)

*發布日期：2025-05-04*

#### 🎉 新功能

- **[client]** 支援在二次確認標題和內容中使用變數 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh
- **[範本列印]**

  - 支援在文件範本中動態渲染圖片和條碼。 by @sheldon66
  - 功能：在範本列印中支援 `{ label, value }` 選擇選項。 by @sheldon66
- **[區塊：樹]** 篩選樹區塊支援聯動規則 by @katherinehhh
- **[資料視覺化：ECharts]** 為長條圖新增「Y 軸反轉」設定 by @2013xile

#### 🚀 改進

- **[client]** 優化子表格新增按鈕樣式，並將分頁器對齊在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
- **[檔案管理]** 新增 OSS 超時選項，預設為 10 分鐘 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[密碼策略]** 將預設密碼到期時間更改為永不過期 by @2013xile

#### 🐛 錯誤修復

- **[database]**

  - 修正測試案例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
  - 避免在資料型別非字串時拋出錯誤 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
- **[client]**

  - 當變數選擇需要非同步載入時，最後選中的選單遺失。 ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust
  - 修復在篩選表單中無法選擇一對多欄位的子欄位作為篩選選項的問題 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - 在子表格內的子表單（彈窗）中配置聯動規則的問題 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - 表單欄位違反驗證規則時顯示多條錯誤訊息 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - 顯示關聯集合欄位時，關聯欄位未提交資料 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - 子表格中子表單（彈窗）聯動規則缺少欄位屬性設定 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) by @katherinehhh
- **[認證]** 不允許更改驗證器名稱 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[操作：自訂請求]** 自訂請求回應設定為變數時顯示不正確 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh

### [v1.7.0-beta.28](https://www.nocobase.com/en/blog/v1.7.0-beta.28)

*發布日期：2025-05-06*

#### 🚀 改進

- **[client]** RichText 元件支援 modules 和 formats 屬性 ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx

#### 🐛 錯誤修復

- **[驗證]** 修復遷移腳本的問題 ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile
- **[工作流：自訂操作事件]** 觸發的工作流操作聯動問題 by @katherinehhh

### [v1.7.0-beta.29](https://www.nocobase.com/en/blog/v1.7.0-beta.29)

*發布日期：2025-05-07*

#### 🎉 新功能

- **[區塊：iframe]** Iframe 區塊支援設定 allow 屬性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe

### [v1.7.0-beta.30](https://www.nocobase.com/en/blog/v1.7.0-beta.30)

*發布日期：2025-05-08*

#### 🐛 錯誤修復

- **[client]**

  - 當篩選表單的關聯欄位元件更改為資料選擇器時，缺少「允許複選」配置項 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe
  - 篩選表單中的表格選擇器樣式異常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe
  - 在巢狀子頁面中，滑鼠懸停在「新增區塊」按鈕上時，區塊列表未顯示 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe
  - 顯示關聯集合欄位時，多個關聯欄位提交失敗 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh
  - 無法將其他按鈕拖曳到複製按鈕上 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh
  - 唯讀模式下子表格分頁欄樣式問題 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh
- **[database]** 修正在 MariaDB 下，當外鍵為 bigInt 時，belongs-to 關聯未在 appends 中載入的問題 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher
- **[集合欄位：附件(URL)]** 附件（URL）欄位不應允許在聯動規則中配置值 ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.13](https://www.nocobase.com/en/blog/v1.7.0-alpha.13)

*發布日期：2025-05-08*

#### 🎉 新功能

- **[client]**

  - 支援在二次確認標題和內容中使用變數 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) by @katherinehhh
  - 支援在區塊中配置聯動規則以動態顯示/隱藏 ([#6636](https://github.com/nocobase/nocobase/pull/6636)) by @katherinehhh
- **[undefined]** 為授權套件新增發布 CI ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx
- **[區塊：iframe]** Iframe 區塊支援設定 allow 屬性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) by @zhangzhonghe
- **[認證]** 支援「忘記密碼」功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  參考：[忘記密碼](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[檔案管理]** 功能：新增 `getFileStream` API 以支援檔案串流。 ([#6741](https://github.com/nocobase/nocobase/pull/6741)) by @sheldon66
- **[操作：自訂請求]** 支援在自訂請求操作的成功訊息中使用回應變數 ([#6694](https://github.com/nocobase/nocobase/pull/6694)) by @katherinehhh
- **[範本列印]** 功能：在範本列印中支援 `{ label, value }` 選擇選項。 by @sheldon66
- **[區塊：樹]** 篩選樹區塊支援聯動規則 by @katherinehhh
- **[資料視覺化：ECharts]** 為長條圖新增「Y 軸反轉」設定 by @2013xile

#### 🚀 改進

- **[client]**

  - RichText 元件支援 modules 和 formats 屬性 ([#6807](https://github.com/nocobase/nocobase/pull/6807)) by @jiannx
  - 優化子表格新增按鈕樣式，並將分頁器對齊在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh
  - 在操作圖示懸停時，使用工具提示顯示按鈕標題 ([#6761](https://github.com/nocobase/nocobase/pull/6761)) by @katherinehhh
  - 保留參考範本功能 ([#6743](https://github.com/nocobase/nocobase/pull/6743)) by @gchust
  - 調整上傳訊息 ([#6757](https://github.com/nocobase/nocobase/pull/6757)) by @mytharcher
- **[utils]** 增加篩選按鈕欄位列表的高度，並對欄位進行排序/分類 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe
- **[檔案管理]** 新增 OSS 超時選項，預設為 10 分鐘 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher
- **[資料視覺化]** 新增用於欄位介面配置的擴展 API ([#6742](https://github.com/nocobase/nocobase/pull/6742)) by @2013xile
- **[密碼策略]** 將預設密碼到期時間更改為永不過期 by @2013xile
- **[企業微信]** 更新使用者電子郵件時，優先使用企業郵箱而非個人郵箱 by @2013xile

#### 🐛 錯誤修復

- **[database]**

  - 因文字欄位值導致匯入失敗。 ([#6699](https://github.com/nocobase/nocobase/pull/6699)) by @aaaaaajie
  - 修正在 MariaDB 下，當外鍵為 bigInt 時，belongs-to 關聯未在 appends 中載入的問題 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) by @mytharcher
  - 修正測試案例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) by @mytharcher
  - 避免在資料型別非字串時拋出錯誤 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher
  - 為 SQL 集合和檢視集合新增 unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh
- **[client]**

  - 顯示關聯集合欄位時，多個關聯欄位提交失敗 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) by @katherinehhh
  - 無法將其他按鈕拖曳到複製按鈕上 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) by @katherinehhh
  - 篩選表單中的表格選擇器樣式異常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) by @zhangzhonghe
  - 當篩選表單的關聯欄位元件更改為資料選擇器時，缺少「允許複選」配置項 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) by @zhangzhonghe
  - 在巢狀子頁面中，滑鼠懸停在「新增區塊」按鈕上時，區塊列表未顯示 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) by @zhangzhonghe
  - 唯讀模式下子表格分頁欄樣式問題 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) by @katherinehhh
  - 在子表格內的子表單（彈窗）中配置聯動規則的問題 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) by @katherinehhh
  - 當變數選擇需要非同步載入時，最後選中的選單遺失。 ([#6802](https://github.com/nocobase/nocobase/pull/6802)) by @gchust
  - 表單欄位違反驗證規則時顯示多條錯誤訊息 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) by @katherinehhh
  - 修復在篩選表單中無法選擇一對多欄位的子欄位作為篩選選項的問題 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) by @zhangzhonghe
  - 將其他 props 傳遞給 Variable.Input 元件。 ([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - 顯示關聯集合欄位時，關聯欄位未提交資料 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh
  - 在篩選表單中，切換欄位運算子後重新整理頁面導致錯誤 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe
  - 在折疊區塊中，點擊關聯欄位搜尋框的清除按鈕不應刪除資料範圍 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe
  - 樹表格中新增子記錄按鈕的對齊問題 ([#6791](https://github.com/nocobase/nocobase/pull/6791)) by @katherinehhh
  - 禁止將選單移動到頁面頁籤之前或之後 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe
  - 表格區塊在篩選時顯示重複資料 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe
  - url 查詢參數運算子問題 ([#6770](https://github.com/nocobase/nocobase/pull/6770)) by @katherinehhh
  - 當 writableView 為 false 時，僅支援檢視集合中的匯出操作 ([#6763](https://github.com/nocobase/nocobase/pull/6763)) by @katherinehhh
  - 從表單中關聯表格檢索多對多陣列欄位的資料不正確 ([#6744](https://github.com/nocobase/nocobase/pull/6744)) by @2013xile
  - 在新增表單的子表單/子表格下顯示關聯欄位時，意外建立關聯資料 ([#6727](https://github.com/nocobase/nocobase/pull/6727)) by @katherinehhh
- **[create-nocobase-app]** 暫時透過降級至 2.5.6 修復 mariadb 問題 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos
- **[操作：匯出記錄]** 修復匯出長文字的錯誤。 ([#6713](https://github.com/nocobase/nocobase/pull/6713)) by @aaaaaajie
- **[集合欄位：附件(URL)]** 附件（URL）欄位不應允許在聯動規則中配置值 ([#6831](https://github.com/nocobase/nocobase/pull/6831)) by @katherinehhh
- **[驗證]** 修復遷移腳本的問題 ([#6820](https://github.com/nocobase/nocobase/pull/6820)) by @2013xile
- **[認證]** 不允許更改驗證器名稱 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile
- **[操作：自訂請求]** 自訂請求回應設定為變數時顯示不正確 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) by @katherinehhh
- **[區塊：操作面板]** 啟用僅圖示模式時，操作面板圖示遺失 ([#6773](https://github.com/nocobase/nocobase/pull/6773)) by @katherinehhh
- **[工作流：自訂操作事件]** 觸發的工作流操作聯動問題 by @katherinehhh
- **[工作流：日期計算節點]** 修復在不支援 `Intl` API 的舊版瀏覽器中的錯誤 by @mytharcher
- **[範本列印]** 修復：修正權限驗證邏輯以防止未授權操作。 by @sheldon66
- **[檔案儲存：S3(Pro)]** 存取 URL 過期無效 by @jiannx
- **[區塊：樹]** 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 by @zhangzhonghe
