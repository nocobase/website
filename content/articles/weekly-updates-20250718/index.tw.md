---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援為子應用配置獨立認證密鑰，以及在工作流程中新增抄送節點。"
---

每週產品更新摘要，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.6](https://www.nocobase.com/en/blog/v1.8.6)

*發布日期：2025-07-16*

#### 🐛 錯誤修復

- **[client]**

  - 修復錯誤：無法解析 'react-device-detect' ([#7224](https://github.com/nocobase/nocobase/pull/7224)) by @zhangzhonghe
  - 聯動規則中關聯欄位的顯示問題 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) by @katherinehhh
- **[database]** 修復啟用外部資料來源表格的簡單分頁時出現的錯誤 ([#7222](https://github.com/nocobase/nocobase/pull/7222)) by @aaaaaajie
- **[Collection field: Sort]** 複製記錄時缺少排序欄位選擇 ([#7116](https://github.com/nocobase/nocobase/pull/7116)) by @katherinehhh
- **[Workflow: Approval]**

  - 為記錄列表中已刪除的審批增加容錯處理 by @mytharcher
  - 修復提交審批時的多層級關聯問題 by @mytharcher
  - 修復刪除記錄時的異常 by @mytharcher

### [v1.8.5](https://www.nocobase.com/en/blog/v1.8.5)

*發布日期：2025-07-14*

#### 🚀 功能優化

- **[Collection field: Formula]** 增加更多可計算的介面 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher
- **[Workflow]** 當因狀態不應執行時，使用日誌記錄而非拋出錯誤 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher
- **[Workflow: Approval]** 支援在相關資料被刪除時刪除審批 by @mytharcher

#### 🐛 錯誤修復

- **[client]**

  - 附件欄位無法在聯動規則中作為變數選擇的問題 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe
  - 修復 iOS 上下拉選擇元件被鍵盤遮擋的問題 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe
  - 編輯表單中，當選擇欄位同時設定值和選項時，賦值失敗 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh
  - 篩選折疊：為欄位設定預設值後，頁面初始化時未觸發篩選 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe
  - 在看板排序欄位中使用列表區塊賦值時出錯 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh
  - 切換子選單時，瀏覽器標籤頁標題未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe
  - 彈窗操作：切換標籤頁後頁面顯示不符合預期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe
- **[acl]** 修正在角色聯合模式下刪除包含根角色的角色時出現的錯誤。([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie
- **[Multi-app manager]** 修正驗證選項位置異常 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher
- **[Authentication]** 修復登入頁面無法滾動的問題 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe
- **[Workflow: Approval]** 修復提交審批時的關聯問題 by @mytharcher

### [v1.8.4](https://www.nocobase.com/en/blog/v1.8.4)

*發布日期：2025-07-13*

#### 🎉 新功能

- **[Multi-app manager]** 支援為子應用配置獨立的驗證密鑰 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher
- **[Workflow: CC]** 在工作流程中新增抄送節點 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher

#### 🚀 功能優化

- **[Notification: In-app message]** 優化行動端訊息頁面的字體大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe
- **[Auth: DingTalk]** 支援配置回調 URL 的協議和端口號 by @2013xile

#### 🐛 錯誤修復

- **[Notification: In-app message]** 修復字串格式的 BigInt 時間戳導致 dayjs 問題 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher
- **[Workflow: Approval]**

  - 避免用戶不存在時出錯 by @mytharcher
  - 重新載入記錄上的關聯 by @mytharcher
  - 在遷移更新 UI schema 時增加 `try/catch` by @mytharcher

### [v1.8.3](https://www.nocobase.com/en/blog/v1.8.3)

*發布日期：2025-07-11*

#### 🚀 功能優化

- **[Multi-app manager]** 為子應用添加資料庫和授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher

#### 🐛 錯誤修復

- **[Action: Custom request]** 自訂請求成功後路由導航時 URL 中的變數解析問題 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh

### [v1.8.2](https://www.nocobase.com/en/blog/v1.8.2)

*發布日期：2025-07-10*

#### 🎉 新功能

- **[Workflow: Approval]** 為觸發器添加初始化器 by @mytharcher

#### 🚀 功能優化

- **[Multi-app manager]** 為子應用添加資料庫和授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
- **[Workflow]** 在邏輯計算中，進行字串比較前先將運算元轉換為字串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher
- **[Collection field: Code]** 添加縮排設定 by @mytharcher

#### 🐛 錯誤修復

- **[database]** 修復檢視表的欄位未在區塊中顯示的問題。([#7162](https://github.com/nocobase/nocobase/pull/7162)) by @aaaaaajie
- **[Block: Kanban]** 修復看板中的子表格 UI 問題，並新增看板欄寬設定支援 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh
- **[Workflow: Approval]** 修復區塊和關聯的錯誤 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.3](https://www.nocobase.com/en/blog/v1.9.0-beta.3)

*發布日期：2025-07-14*

#### 🎉 新功能

- **[Multi-app manager]** 支援為子應用配置獨立的驗證密鑰 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher
- **[Workflow: CC]** 在工作流程中新增抄送節點 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher
- **[Workflow: Approval]** 為觸發器添加初始化器 by @mytharcher

#### 🚀 功能優化

- **[Notification: In-app message]** 優化行動端訊息頁面的字體大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe
- **[Workflow]** 在邏輯計算中，進行字串比較前先將運算元轉換為字串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher
- **[Multi-app manager]**

  - 為子應用添加資料庫和授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
  - 為子應用添加資料庫和授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
- **[Collection field: Code]** 添加縮排設定 by @mytharcher
- **[Auth: DingTalk]** 支援配置回調 URL 的協議和端口號 by @2013xile

#### 🐛 錯誤修復

- **[client]**

  - 附件欄位無法在聯動規則中作為變數選擇的問題 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe
  - 在看板排序欄位中使用列表區塊賦值時出錯 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh
  - 篩選折疊：為欄位設定預設值後，頁面初始化時未觸發篩選 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe
  - 編輯表單中，當選擇欄位同時設定值和選項時，賦值失敗 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh
  - 彈窗操作：切換標籤頁後頁面顯示不符合預期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe
  - 切換子選單時，瀏覽器標籤頁標題未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe
  - 修復 iOS 上下拉選擇元件被鍵盤遮擋的問題 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe
- **[acl]** 修正在角色聯合模式下刪除包含根角色的角色時出現的錯誤。([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie
- **[Authentication]** 修復登入頁面無法滾動的問題 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe
- **[Multi-app manager]** 修正驗證選項位置異常 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher
- **[Notification: In-app message]** 修復字串格式的 BigInt 時間戳導致 dayjs 問題 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher
- **[Action: Custom request]** 自訂請求成功後路由導航時 URL 中的變數解析問題 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh
- **[Block: Kanban]** 修復看板中的子表格 UI 問題，並新增看板欄寬設定支援 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh
- **[Workflow: Approval]**

  - 在遷移更新 UI schema 時增加 `try/catch` by @mytharcher
  - 修復區塊和關聯的錯誤 by @mytharcher
  - 重新載入記錄上的關聯 by @mytharcher
  - 避免用戶不存在時出錯 by @mytharcher

### [v1.9.0-beta.2](https://www.nocobase.com/en/blog/v1.9.0-beta.2)

*發布日期：2025-07-10*

#### 🐛 錯誤修復

- **[client]**

  - 表單中關聯欄位集合內的複選框欄位顯示不正確 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - 修復點擊按鈕無法開啟彈窗的問題 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[database]** 修復檢視表的欄位未在區塊中顯示的問題。([#7162](https://github.com/nocobase/nocobase/pull/7162)) by @aaaaaajie
- **[Workflow: Manual node]** 修復使用變數時拋出錯誤 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[Template print]** 為 rootDataType 欄位添加遷移腳本 by @jiannx
- **[Workflow: Approval]** 修復無審批人時已批准分支未運行的問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.2](https://www.nocobase.com/en/blog/v1.9.0-alpha.2)

*發布日期：2025-07-15*

#### 🎉 新功能

- **[Multi-app manager]** 支援為子應用配置獨立的驗證密鑰 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) by @mytharcher
- **[Workflow: CC]** 在工作流程中新增抄送節點 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) by @mytharcher
- **[Workflow: Approval]** 為觸發器添加初始化器 by @mytharcher

#### 🚀 功能優化

- **[Collection field: Formula]** 增加更多可計算的介面 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) by @mytharcher
- **[Workflow]**

  - 當因狀態不應執行時，使用日誌記錄而非拋出錯誤 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) by @mytharcher
  - 在邏輯計算中，進行字串比較前先將運算元轉換為字串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) by @mytharcher
- **[Notification: In-app message]** 優化行動端訊息頁面的字體大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) by @zhangzhonghe
- **[Multi-app manager]**

  - 為子應用添加資料庫和授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
  - 為子應用添加資料庫和授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) by @mytharcher
- **[Collection field: Code]** 添加縮排設定 by @mytharcher
- **[Workflow: Approval]** 支援在相關資料被刪除時刪除審批 by @mytharcher
- **[Auth: DingTalk]** 支援配置回調 URL 的協議和端口號 by @2013xile

#### 🐛 錯誤修復

- **[client]**

  - 附件欄位無法在聯動規則中作為變數選擇的問題 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) by @zhangzhonghe
  - 篩選折疊：為欄位設定預設值後，頁面初始化時未觸發篩選 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) by @zhangzhonghe
  - 聯動規則中關聯欄位的顯示問題 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) by @katherinehhh
  - 編輯表單中，當選擇欄位同時設定值和選項時，賦值失敗 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) by @katherinehhh
  - 在看板排序欄位中使用列表區塊賦值時出錯 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) by @katherinehhh
  - 彈窗操作：切換標籤頁後頁面顯示不符合預期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) by @zhangzhonghe
  - 切換子選單時，瀏覽器標籤頁標題未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) by @zhangzhonghe
  - 修復 iOS 上下拉選擇元件被鍵盤遮擋的問題 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) by @zhangzhonghe
  - 表單中關聯欄位集合內的複選框欄位顯示不正確 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) by @zhangzhonghe
  - 修復點擊按鈕無法開啟彈窗的問題 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) by @zhangzhonghe
- **[acl]** 修正在角色聯合模式下刪除包含根角色的角色時出現的錯誤。([#7198](https://github.com/nocobase/nocobase/pull/7198)) by @aaaaaajie
- **[database]** 修復檢視表的欄位未在區塊中顯示的問題。([#7162](https://github.com/nocobase/nocobase/pull/7162)) by @aaaaaajie
- **[Multi-app manager]** 修正驗證選項位置異常 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) by @mytharcher
- **[Notification: In-app message]** 修復字串格式的 BigInt 時間戳導致 dayjs 問題 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) by @mytharcher
- **[Authentication]** 修復登入頁面無法滾動的問題 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) by @zhangzhonghe
- **[Action: Custom request]** 自訂請求成功後路由導航時 URL 中的變數解析問題 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) by @katherinehhh
- **[Block: Kanban]** 修復看板中的子表格 UI 問題，並新增看板欄寬設定支援 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) by @katherinehhh
- **[Workflow: Manual node]** 修復使用變數時拋出錯誤 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) by @mytharcher
- **[Template print]** 為 rootDataType 欄位添加遷移腳本 by @jiannx
- **[Workflow: Approval]**

  - 修復提交審批時的關聯問題 by @mytharcher
  - 修復刪除記錄時的異常 by @mytharcher
  - 修復無審批人時已批准分支未運行的問題 by @mytharcher
  - 避免用戶不存在時出錯 by @mytharcher
  - 修復區塊和關聯的錯誤 by @mytharcher
  - 在遷移更新 UI schema 時增加 `try/catch` by @mytharcher
  - 重新載入記錄上的關聯 by @mytharcher
