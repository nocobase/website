---
title: "NocoBase 每週更新：優化表格區塊的欄位與操作"
description: "本週更新包括：支援隱藏表格區塊中的索引欄位、在聯動規則中配置可選欄位選項等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.2](https://www.nocobase.com/en/blog/v1.6.2)

*發布日期：2025-03-12*

#### 🐛 錯誤修復

- **[客戶端]** 日期欄位範圍選擇排除最大日期 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
- **[通知：應用內訊息]** 避免錯誤的接收者配置查詢所有用戶 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[工作流：人工節點]**

  - 修復遷移遺漏資料表前綴和 schema 邏輯的問題 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
  - 將遷移的版本限制更改為 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

### [v1.6.3](https://www.nocobase.com/en/blog/v1.6.3)

*發布日期：2025-03-14*

#### 🎉 新功能

- **[企業微信]** 允許為登入按鈕設定自訂工具提示 by @2013xile

#### 🐛 錯誤修復

- **[客戶端]**

  - 修復圖片 URL 中的特殊字元導致無法顯示的問題 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - 子表格頁面大小更改後新增資料時頁碼不正確 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - Logo 樣式與之前不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
- **[工作流：人工節點]** 修復遷移中拋出的錯誤 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[資料視覺化]** 新增自訂篩選欄位時出現已移除的欄位 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[檔案管理]** 修復檔案管理的幾個問題 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[操作：自訂請求]** 自訂請求伺服器端權限驗證錯誤 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[資料來源管理器]** 在角色管理中切換資料來源時未載入對應的集合 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[操作：批次編輯]** 修復批次編輯提交時無法觸發工作流的問題 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[工作流：自訂操作事件]** 移除 E2E 測試案例中的 `only` by @mytharcher
- **[工作流：審批]**

  - 修復審批表單中關聯資料未顯示的問題 by @mytharcher
  - 修復在外部資料來源上審批時拋出錯誤的問題 by @mytharcher

### [v1.6.4](https://www.nocobase.com/en/blog/v1.6.4)

*發布日期：2025-03-15*

#### 🎉 新功能

- **[客戶端]** 級聯選擇元件新增資料範圍設定 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 改進

- **[工具函式]** 將 `md5` 移至工具函式 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]** 在樹狀區塊中，取消選取時，資料區塊中的資料未被清除 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[檔案管理]** 無法刪除儲存在 S3 中的檔案。 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[工作流]** 從資料選擇器中移除綁定工作流設定按鈕 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[檔案儲存：S3(Pro)]** 解決 S3 Pro 簽署 URL 無法存取的問題 by @chenos
- **[工作流：審批]** 避免審批流程表中無申請人時頁面崩潰 by @mytharcher

### [v1.6.5](https://www.nocobase.com/en/blog/v1.6.5)

*發布日期：2025-03-17*

#### 🚀 改進

- **[檔案管理]** 簡化檔案 URL 生成邏輯和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[檔案儲存：S3(Pro)]** 更改為更簡單的方式生成檔案 URL by @mytharcher
- **[備份管理器]** 允許在同一版本的預發行版和正式版之間還原備份 by @gchust

#### 🐛 錯誤修復

- **[客戶端]**

  - 提交時富文字欄位未清除資料 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - 頁面右上角圖示的顏色未隨主題變化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - 點擊篩選表單上的重置按鈕無法清除網格卡片區塊的篩選條件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[工作流：人工節點]**

  - 修復遷移 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 更改遷移名稱以確保重新執行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - 修復篩選器中的工作流標題欄位 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - 修復當 id 欄位不存在時的遷移錯誤 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - 避免從欄位同步集合 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[工作流：聚合節點]** 修復對 null 結果進行四捨五入的問題 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[工作流]** 工作流刪除後不計算任務數 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[備份管理器]** 缺少預設備份設定時無法啟動伺服器 by @gchust
- **[工作流：審批]**

  - 修復流程表單中的檔案關聯欄位錯誤 by @mytharcher
  - 基於 hooks 修復任務計數 by @mytharcher

### [v1.6.6](https://www.nocobase.com/en/blog/v1.6.6)

*發布日期：2025-03-18*

#### 🎉 新功能

- **[客戶端]** 支援將長文字欄位作為關聯欄位的標題欄位 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[工作流：聚合節點]** 支援為聚合結果配置精度 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 改進

- **[檔案儲存：S3(Pro)]** 將文字 'Access URL Base' 更改為 'Base URL' by @zhangzhonghe

#### 🐛 錯誤修復

- **[求值器]** 將四捨五入的小數位數恢復為 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[檔案管理]** 對 URL 進行編碼 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[資料來源：主資料庫]** 無法建立 MySQL 檢視表。 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[工作流]** 修復工作流刪除後的舊任務計數 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[嵌入 NocoBase]** 頁面顯示空白 by @zhangzhonghe
- **[備份管理器]**

  - 從備份模板建立子應用時，上傳的檔案尚未還原 by @gchust
  - 因 GTID 集合重疊導致的 MySQL 資料庫還原失敗 by @gchust
- **[工作流：審批]**

  - 將返回的審批更改為待辦事項 by @mytharcher
  - 修復流程表中缺少的操作按鈕 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.2](https://www.nocobase.com/en/blog/v1.7.0-beta.2)

*發布日期：2025-03-13*

#### 🎉 新功能

- **[客戶端]**

  - 表格區塊支援隱藏序號列（預設可見） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 支援在聯動規則中配置可選欄位選項 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 支援在聯動規則中為時間欄位配置日期範圍（最小值/最大值） ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[區塊：操作面板]** 支援操作面板中操作標題的自動換行 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

#### 🐛 錯誤修復

- **[客戶端]**

  - 子表格頁面大小更改後新增資料時頁碼不正確 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - Logo 樣式與之前不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - 刪除子表格記錄時，多選欄位值變更和選項遺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - 日期欄位範圍選擇排除最大日期 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - 透過連結按鈕開啟的彈出視窗中資料未更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[操作：批次編輯]** 修復批次編輯提交時無法觸發工作流的問題 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[資料視覺化]** 新增自訂篩選欄位時出現已移除的欄位 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[資料來源管理器]** 在角色管理中切換資料來源時未載入對應的集合 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[操作：自訂請求]** 自訂請求伺服器端權限驗證錯誤 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[檔案管理]** 修復檔案管理的幾個問題 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[通知：應用內訊息]**

  - 避免錯誤的接收者配置查詢所有用戶 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
  - 區分應用內訊息列表背景色與訊息卡片，以增強視覺層次感和可讀性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
- **[工作流：人工節點]**

  - 將遷移的版本限制更改為 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - 修復遷移遺漏資料表前綴和 schema 邏輯的問題 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

### [v1.7.0-beta.3](https://www.nocobase.com/en/blog/v1.7.0-beta.3)

*發布日期：2025-03-14*

#### 🎉 新功能

- **[企業微信]** 允許為登入按鈕設定自訂工具提示 by @2013xile

#### 🚀 改進

- **[資料視覺化]** 用 `x-settings` 取代已棄用的 `x-designer` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 錯誤修復

- **[客戶端]** 修復圖片 URL 中的特殊字元導致無法顯示的問題 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
- **[工作流：人工節點]** 修復遷移中拋出的錯誤 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
- **[工作流：自訂操作事件]** 移除 E2E 測試案例中的 `only` by @mytharcher
- **[工作流：審批]**

  - 修復在外部資料來源上審批時拋出錯誤的問題 by @mytharcher
  - 修復審批表單中關聯資料未顯示的問題 by @mytharcher

### [v1.7.0-beta.4](https://www.nocobase.com/en/blog/v1.7.0-beta.4)

*發布日期：2025-03-15*

#### 🎉 新功能

- **[客戶端]** 級聯選擇元件新增資料範圍設定 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

#### 🚀 改進

- **[工具函式]** 將 `md5` 移至工具函式 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]** 在樹狀區塊中，取消選取時，資料區塊中的資料未被清除 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
- **[檔案管理]** 無法刪除儲存在 S3 中的檔案。 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
- **[工作流]** 從資料選擇器中移除綁定工作流設定按鈕 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[檔案儲存：S3(Pro)]** 解決 S3 Pro 簽署 URL 無法存取的問題 by @chenos
- **[工作流：審批]** 避免審批流程表中無申請人時頁面崩潰 by @mytharcher

### [v1.7.0-beta.5](https://www.nocobase.com/en/blog/v1.7.0-beta.5)

*發布日期：2025-03-18*

#### 🎉 新功能

- **[客戶端]** 支援表格內嵌操作僅顯示圖示模式，懸停時顯示操作名稱 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 改進

- **[檔案管理]** 簡化檔案 URL 生成邏輯和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[檔案儲存：S3(Pro)]**

  - 將文字 'Access URL Base' 更改為 'Base URL' by @zhangzhonghe
  - 更改為更簡單的方式生成檔案 URL by @mytharcher
- **[備份管理器]** 允許在同一版本的預發行版和正式版之間還原備份 by @gchust

#### 🐛 錯誤修復

- **[客戶端]**

  - 頁面右上角圖示的顏色未隨主題變化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - 提交時富文字欄位未清除資料 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - 點擊篩選表單上的重置按鈕無法清除網格卡片區塊的篩選條件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[工作流：人工節點]**

  - 修復遷移 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 更改遷移名稱以確保重新執行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - 修復篩選器中的工作流標題欄位 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - 避免從欄位同步集合 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
  - 修復當 id 欄位不存在時的遷移錯誤 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
- **[工作流]** 工作流刪除後不計算任務數 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[工作流：聚合節點]** 修復對 null 結果進行四捨五入的問題 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[嵌入 NocoBase]** 頁面顯示空白 by @zhangzhonghe
- **[備份管理器]** 缺少預設備份設定時無法啟動伺服器 by @gchust
- **[工作流：審批]**

  - 修復流程表單中的檔案關聯欄位錯誤 by @mytharcher
  - 基於 hooks 修復任務計數 by @mytharcher

### [v1.7.0-beta.6](https://www.nocobase.com/en/blog/v1.7.0-beta.6)

*發布日期：2025-03-19*

#### 🎉 新功能

- **[客戶端]** 支援將長文字欄位作為關聯欄位的標題欄位 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
- **[工作流：聚合節點]** 支援為聚合結果配置精度 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🐛 錯誤修復

- **[求值器]** 將四捨五入的小數位數恢復為 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[工作流]** 修復工作流刪除後的舊任務計數 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[資料來源：主資料庫]** 無法建立 MySQL 檢視表。 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[檔案管理]** 對 URL 進行編碼 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[備份管理器]**

  - 因 GTID 集合重疊導致的 MySQL 資料庫還原失敗 by @gchust
  - 從備份模板建立子應用時，上傳的檔案尚未還原 by @gchust
- **[工作流：審批]**

  - 修復流程表中缺少的操作按鈕 by @mytharcher
  - 將返回的審批更改為待辦事項 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.2](https://www.nocobase.com/en/blog/v1.7.0-alpha.2)

*發布日期：2025-03-15*

#### 🎉 新功能

- **[客戶端]**

  - 級聯選擇元件新增資料範圍設定 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038
  - 表格區塊支援隱藏序號列（預設可見） ([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh
  - 支援在聯動規則中配置可選欄位選項 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh
  - 支援在聯動規則中為時間欄位配置日期範圍（最小值/最大值） ([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh
- **[acl]** 支援使用者角色聯合 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[區塊：操作面板]** 支援操作面板中操作標題的自動換行 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh
- **[plugin-demo-platform]** 將 "/new" 路由的 skipAuthCheck 設定為 true。 by @sheldon66
- **[企業微信]** 允許為登入按鈕設定自訂工具提示 by @2013xile

#### 🚀 改進

- **[工具函式]**

  - 將 `md5` 移至工具函式 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher
  - 桌面頁面在行動裝置上的適配 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[客戶端]** 在 router.add 中添加 skipAuthCheck，以防止在公開頁面上重定向到登入頁面。 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
- **[資料視覺化]** 用 `x-settings` 取代已棄用的 `x-designer` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

#### 🐛 錯誤修復

- **[客戶端]**

  - 在樹狀區塊中，取消選取時，資料區塊中的資料未被清除 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe
  - 修復圖片 URL 中的特殊字元導致無法顯示的問題 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher
  - 子表格頁面大小更改後新增資料時頁碼不正確 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh
  - 在行動瀏覽器中內容未完全顯示 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - Logo 樣式與之前不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe
  - 日期欄位範圍選擇排除最大日期 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh
  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - 刪除子表格記錄時，多選欄位值變更和選項遺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
  - 透過連結按鈕開啟的彈出視窗中資料未更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
- **[acl]** 修復角色聯合下關聯欄位不顯示的問題。 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[檔案管理]**

  - 無法刪除儲存在 S3 中的檔案。 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos
  - 修復檔案管理的幾個問題 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher
- **[工作流]** 從資料選擇器中移除綁定工作流設定按鈕 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher
- **[工作流：人工節點]**

  - 修復遷移中拋出的錯誤 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher
  - 將遷移的版本限制更改為 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher
  - 修復遷移遺漏資料表前綴和 schema 邏輯的問題 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
- **[存取控制]**

  - 修復切換角色不生效的問題。 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
  - 當資料範圍設定為自己的資料且資料表缺少建立者欄位時出錯。 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
- **[WEB 客戶端]** 將所有 ctx.state.currentRole（單一角色）的實例替換為 ctx.state.currentRoles（支援多角色）。 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[操作：批次編輯]** 修復批次編輯提交時無法觸發工作流的問題 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher
- **[資料來源管理器]** 在角色管理中切換資料來源時未載入對應的集合 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh
- **[資料視覺化]** 新增自訂篩選欄位時出現已移除的欄位 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile
- **[通知：應用內訊息]**

  - 區分應用內訊息列表背景色與訊息卡片，以增強視覺層次感和可讀性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66
  - 避免錯誤的接收者配置查詢所有用戶 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66
- **[操作：自訂請求]** 自訂請求伺服器端權限驗證錯誤 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh
- **[認證：API 金鑰]** API 金鑰外掛角色列表移除聯合 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[區塊：模板]** 在行動客戶端中另存為模板的行為不正確 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
- **[工作流：自訂操作事件]** 移除 E2E 測試案例中的 `only` by @mytharcher
- **[檔案儲存：S3(Pro)]** 解決 S3 Pro 簽署 URL 無法存取的問題 by @chenos
- **[工作流：審批]**

  - 避免審批流程表中無申請人時頁面崩潰 by @mytharcher
  - 修復審批表單中關聯資料未顯示的問題 by @mytharcher
  - 修復在外部資料來源上審批時拋出錯誤的問題 by @mytharcher

### [v1.7.0-alpha.3](https://www.nocobase.com/en/blog/v1.7.0-alpha.3)

*發布日期：2025-03-18*

#### 🎉 新功能

- **[客戶端]** 支援表格內嵌操作僅顯示圖示模式，懸停時顯示操作名稱 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

#### 🚀 改進

- **[檔案管理]** 簡化檔案 URL 生成邏輯和 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher
- **[檔案儲存：S3(Pro)]**

  - 將文字 'Access URL Base' 更改為 'Base URL' by @zhangzhonghe
  - 更改為更簡單的方式生成檔案 URL by @mytharcher
- **[備份管理器]** 允許在同一版本的預發行版和正式版之間還原備份 by @gchust

#### 🐛 錯誤修復

- **[客戶端]**

  - 聯動規則配置中缺少欄位 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - 頁面右上角圖示的顏色未隨主題變化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe
  - 提交時富文字欄位未清除資料 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh
  - 表單預設值設定的輸入樣式不正確 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
  - 點擊篩選表單上的重置按鈕無法清除網格卡片區塊的篩選條件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe
- **[工作流：人工節點]**

  - 更改遷移名稱以確保重新執行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher
  - 修復遷移 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher
  - 修復篩選器中的工作流標題欄位 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher
  - 修復當 id 欄位不存在時的遷移錯誤 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos
  - 避免從欄位同步集合 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher
- **[工作流]** 工作流刪除後不計算任務數 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher
- **[變數和機密]** 在新增變數抽屜中按鈕未顯示 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[工作流：聚合節點]** 修復對 null 結果進行四捨五入的問題 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher
- **[嵌入 NocoBase]** 頁面顯示空白 by @zhangzhonghe
- **[備份管理器]** 缺少預設備份設定時無法啟動伺服器 by @gchust
- **[工作流：審批]**

  - 修復流程表單中的檔案關聯欄位錯誤 by @mytharcher
  - 基於 hooks 修復任務計數 by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**示範**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
