---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：審批流程表單支援區塊模板、工作流程增強及錯誤修復。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.11](https://www.nocobase.com/en/blog/v1.6.11)

*發布日期：2025-03-27*

#### 🚀 改進

- **[客戶端]**

  - 優化 502 錯誤訊息 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 僅支援純文字檔案預覽 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
- **[集合欄位：序號]** 支援將序號設定為日曆區塊的標題欄位 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[工作流：審批]** 支援在設定中跳過驗證器 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 資料範圍篩選中日期欄位顯示的問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - 「溢位內容省略」選項需要重新整理頁面才能讓切換狀態生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - 無法在模態框內開啟另一個模態框 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
- **[API 文件]** API 文件頁面無法滾動 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[工作流]** 確保在儲存前生成工作流金鑰 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[工作流：操作後事件]** 批次操作中的多筆記錄應觸發多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[認證]** 註冊頁面欄位的本地化問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[公開表單]** 公開表單頁面標題顯示「載入中...」的問題 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh

### [v1.6.12](https://www.nocobase.com/en/blog/v1.6.12)

*發布日期：2025-03-27*

#### 🐛 錯誤修復

- **[區塊：多步驟表單]**

  - 提交按鈕在預設和突出顯示狀態下顏色相同 by @jiannx
  - 修復當欄位與其他欄位關聯時，表單重置無效的錯誤 by @jiannx
- **[工作流：審批]** 修正在審批表單中提交表單值 by @mytharcher

### [v1.6.13](https://www.nocobase.com/en/blog/v1.6.13)

*發布日期：2025-03-28*

#### 🚀 改進

- **[非同步任務管理器]** 優化 Pro 中的匯入/匯出按鈕 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[操作：匯出記錄 Pro]** 優化 Pro 中的匯入/匯出按鈕 by @katherinehhh
- **[遷移管理器]** 允許在遷移時跳過自動備份和還原 by @gchust

#### 🐛 錯誤修復

- **[客戶端]** 同一表單內不同子表中同名關聯欄位之間的聯動衝突 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[操作：批次編輯]** 點擊批次編輯按鈕，配置彈出視窗，然後再次打開，彈出視窗為空白 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

### [v1.6.14](https://www.nocobase.com/en/blog/v1.6.14)

*發布日期：2025-03-29*

#### 🐛 錯誤修復

- **[日曆]** 週曆檢視中邊界日期缺少資料 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[認證：OIDC]** 當回調路徑為字串 'null' 時發生不正確的重定向 by @2013xile
- **[工作流：審批]** 修正在 schema 變更後審批節點配置不正確的問題 by @mytharcher

### [v1.6.15](https://www.nocobase.com/en/blog/v1.6.15)

*發布日期：2025-04-01*

#### 🚀 改進

- **[資料庫]**

  - 為文字欄位新增修剪選項 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - 為字串欄位新增修剪選項 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[檔案管理器]** 為儲存集合的文字欄位新增修剪選項 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[工作流]** 改進程式碼 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[工作流：審批]** 支援使用區塊模板作為審批流程表單 by @mytharcher

#### 🐛 錯誤修復

- **[資料庫]** 避免在更新記錄時值未變更導致 "datetimeNoTz" 欄位變更 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
- **[客戶端]**

  - 關聯欄位（選擇）在暴露關聯集合欄位時顯示「不適用」 ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - 修復當 `SchemaInitializerItem` 包含 `items` 時，`disabled` 屬性不起作用的問題 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - 級聯問題：刪除並重新選擇時出現「xxx 的值不能是陣列格式」 ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
- **[集合欄位：多對多（陣列）]** 使用多對多（陣列）欄位在關聯集合中按欄位篩選的問題 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[公開表單]** 檢視權限包含 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[認證]** `AuthProvider` 中的令牌分配 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[工作流]** 修復同步選項顯示不正確 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[區塊：地圖]** 地圖管理驗證不應通過僅包含空格的輸入 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[工作流：審批]**

  - 修正在審批表單中使用客戶端變數 by @mytharcher
  - 修復當 `endOnReject` 配置為 `true` 時的分支模式 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.10](https://www.nocobase.com/en/blog/v1.7.0-beta.10)

*發布日期：2025-03-27*

#### 🎉 新功能

- **[客戶端]** 支援提交後的變數配置，允許使用當前資料 ID 進行重定向 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[集合欄位：Markdown(Vditor)]** Vditor 支援 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 改進

- **[客戶端]**

  - 僅支援純文字檔案預覽 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 優化 502 錯誤訊息 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 限制聯動規則中不同欄位屬性的可用操作 ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[檔案管理器]** 調整儲存空間的 `getFileData` API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[存取控制]** 優化角色切換的順序和樣式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[集合欄位：序號]** 支援將序號設定為日曆區塊的標題欄位 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[工作流]** 將已執行的欄位拆分到統計表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[工作流：自訂操作事件]** 將已執行的欄位拆分到統計表 by @mytharcher
- **[工作流：審批]**

  - 將已執行的欄位拆分到統計表 by @mytharcher
  - 支援在設定中跳過驗證器 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 舊版瀏覽器會顯示空白頁面 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - 「溢位內容省略」選項需要重新整理頁面才能讓切換狀態生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - 資料範圍篩選中日期欄位顯示的問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - 無法在模態框內開啟另一個模態框 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 如果包含關聯欄位，另存為模板操作將失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - 頁面的頂部選單顯示為空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - 值為 null 的欄位指派無效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
- **[工作流]**

  - 確保在儲存前生成工作流金鑰 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
  - 修正在配置自動刪除選項時拋出的錯誤 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
- **[公開表單]** 公開表單頁面標題顯示「載入中...」的問題 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[行動端]** 調整手機上顯示的字型大小為 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[變數與機密]** 切換頁面時缺少圖示篩選按鈕、篩選計數不顯示以及篩選後資料不重新整理 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[認證]** 註冊頁面欄位的本地化問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[API 文件]** API 文件頁面無法滾動 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[工作流：操作後事件]** 批次操作中的多筆記錄應觸發多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[區塊：模板]**

  - 表單區塊的聯動規則未從模板正確同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
  - 詳細資訊區塊中重複的「另存為模板」選單 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
- **[工作流：審批]** 修正在審批表單中提交表單值 by @mytharcher

### [v1.7.0-beta.11](https://www.nocobase.com/en/blog/v1.7.0-beta.11)

*發布日期：2025-03-27*

#### 🐛 錯誤修復

- **[區塊：多步驟表單]** 提交按鈕在預設和突出顯示狀態下顏色相同 by @jiannx

### [v1.7.0-beta.12](https://www.nocobase.com/en/blog/v1.7.0-beta.12)

*發布日期：2025-03-28*

#### 🎉 新功能

- **[區塊：操作面板]** 新增 onScanSuccess 回調以處理成功掃描並退出相機 UI。 ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

#### 🚀 改進

- **[非同步任務管理器]** 優化 Pro 中的匯入/匯出按鈕 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos
- **[操作：匯出記錄 Pro]** 優化 Pro 中的匯入/匯出按鈕 by @katherinehhh
- **[遷移管理器]** 允許在遷移時跳過自動備份和還原 by @gchust

#### 🐛 錯誤修復

- **[客戶端]** 同一表單內不同子表中同名關聯欄位之間的聯動衝突 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh
- **[日曆]** 週曆檢視中邊界日期缺少資料 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh
- **[存取控制]** 登入期間當前角色指派不正確 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie
- **[操作：批次編輯]** 點擊批次編輯按鈕，配置彈出視窗，然後再次打開，彈出視窗為空白 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe
- **[區塊：多步驟表單]** 修復當欄位與其他欄位關聯時，表單重置無效的錯誤 by @jiannx
- **[工作流：審批]** 修正在 schema 變更後審批節點配置不正確的問題 by @mytharcher

### [v1.7.0-beta.13](https://www.nocobase.com/en/blog/v1.7.0-beta.13)

*發布日期：2025-04-01*

#### 🚀 改進

- **[資料庫]**

  - 為文字欄位新增修剪選項 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher
  - 為字串欄位新增修剪選項 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher
- **[客戶端]** 支援根據佈局配置表單欄位標籤中冒號的可見性 ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh
- **[檔案管理器]** 為儲存集合的文字欄位新增修剪選項 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher
- **[工作流]** 改進程式碼 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher
- **[工作流：審批]** 支援使用區塊模板作為審批流程表單 by @mytharcher

#### 🐛 錯誤修復

- **[資料庫]**

  - 避免在更新記錄時值未變更導致 "datetimeNoTz" 欄位變更 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher
  - 刪除一對多記錄時，同時傳遞了 `filter` 和 `filterByTk`，且 `filter` 包含關聯欄位時，`filterByTk` 被忽略 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile
- **[客戶端]**

  - 修復當 `SchemaInitializerItem` 包含 `items` 時，`disabled` 屬性不起作用的問題 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher
  - 級聯問題：刪除並重新選擇時出現「xxx 的值不能是陣列格式」 ([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh
  - 關聯欄位（選擇）在暴露關聯集合欄位時顯示「不適用」 ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh
  - 提交和重新整理按鈕未正確顯示僅圖示模式 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh
- **[公開表單]** 檢視權限包含 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos
- **[認證]** `AuthProvider` 中的令牌分配 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile
- **[集合欄位：多對多（陣列）]** 使用多對多（陣列）欄位在關聯集合中按欄位篩選的問題 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile
- **[工作流]** 修復同步選項顯示不正確 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher
- **[區塊：地圖]** 地圖管理驗證不應通過僅包含空格的輸入 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh
- **[認證：OIDC]** 當回調路徑為字串 'null' 時發生不正確的重定向 by @2013xile
- **[工作流：審批]**

  - 修正在審批表單中使用客戶端變數 by @mytharcher
  - 修復當 `endOnReject` 配置為 `true` 時的分支模式 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.10](https://www.nocobase.com/en/blog/v1.7.0-alpha.10)

*發布日期：2025-03-25*

#### 🎉 新功能

- **[客戶端]** 支援提交後的變數配置，允許使用當前資料 ID 進行重定向 ([#6465](https://github.com/nocobase/nocobase/pull/6465)) by @katherinehhh
- **[集合欄位：Markdown(Vditor)]** Vditor 支援 S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) by @zhangzhonghe

#### 🚀 改進

- **[客戶端]**

  - 僅支援純文字檔案預覽 ([#6563](https://github.com/nocobase/nocobase/pull/6563)) by @mytharcher
  - 優化 502 錯誤訊息 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) by @chenos
  - 限制聯動規則中不同欄位屬性的可用操作 ([#6548](https://github.com/nocobase/nocobase/pull/6548)) by @katherinehhh
- **[工作流]** 將已執行的欄位拆分到統計表 ([#6534](https://github.com/nocobase/nocobase/pull/6534)) by @mytharcher
- **[行動端]** 適配行動裝置的通知彈出視窗樣式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[集合欄位：序號]** 支援將序號設定為日曆區塊的標題欄位 ([#6562](https://github.com/nocobase/nocobase/pull/6562)) by @katherinehhh
- **[檔案管理器]** 調整儲存空間的 `getFileData` API ([#6553](https://github.com/nocobase/nocobase/pull/6553)) by @mytharcher
- **[存取控制]** 優化角色切換的順序和樣式 ([#6555](https://github.com/nocobase/nocobase/pull/6555)) by @aaaaaajie
- **[公開表單]** 建立時將公開表單頁面標題設定為配置的標題 ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[工作流：自訂操作事件]** 將已執行的欄位拆分到統計表 by @mytharcher
- **[工作流：審批]**

  - 支援在設定中跳過驗證器 by @mytharcher
  - 將已執行的欄位拆分到統計表 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 舊版瀏覽器會顯示空白頁面 ([#6571](https://github.com/nocobase/nocobase/pull/6571)) by @zhangzhonghe
  - 無法在模態框內開啟另一個模態框 ([#6535](https://github.com/nocobase/nocobase/pull/6535)) by @zhangzhonghe
  - 「溢位內容省略」選項需要重新整理頁面才能讓切換狀態生效 ([#6520](https://github.com/nocobase/nocobase/pull/6520)) by @zhangzhonghe
  - 資料範圍篩選中日期欄位顯示的問題 ([#6564](https://github.com/nocobase/nocobase/pull/6564)) by @katherinehhh
  - 頁面的頂部選單顯示為空白 ([#6551](https://github.com/nocobase/nocobase/pull/6551)) by @zhangzhonghe
  - 如果包含關聯欄位，另存為模板操作將失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - 新增連結頁面時無法使用「目前使用者」變數 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - 值為 null 的欄位指派無效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - 如果包含關聯欄位，另存為模板操作將失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
  - 從篩選表單的下拉式單選欄位中移除「允許多重選擇」選項 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - 關聯欄位的資料範圍聯動無效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - `yarn doc` 命令錯誤 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 表格行按鈕拖放問題 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
- **[行動端]** 調整手機上顯示的字型大小為 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) by @zhangzhonghe
- **[工作流]**

  - 修正在配置自動刪除選項時拋出的錯誤 ([#6560](https://github.com/nocobase/nocobase/pull/6560)) by @mytharcher
  - 確保在儲存前生成工作流金鑰 ([#6567](https://github.com/nocobase/nocobase/pull/6567)) by @mytharcher
- **[變數與機密]** 切換頁面時缺少圖示篩選按鈕、篩選計數不顯示以及篩選後資料不重新整理 ([#6568](https://github.com/nocobase/nocobase/pull/6568)) by @katherinehhh
- **[公開表單]** 公開表單頁面標題顯示「載入中...」的問題 ([#6569](https://github.com/nocobase/nocobase/pull/6569)) by @katherinehhh
- **[API 文件]** API 文件頁面無法滾動 ([#6566](https://github.com/nocobase/nocobase/pull/6566)) by @zhangzhonghe
- **[工作流：操作後事件]** 批次操作中的多筆記錄應觸發多次 ([#6559](https://github.com/nocobase/nocobase/pull/6559)) by @mytharcher
- **[區塊：模板]**

  - 詳細資訊區塊中重複的「另存為模板」選單 ([#6558](https://github.com/nocobase/nocobase/pull/6558)) by @gchust
  - 表單區塊的聯動規則未從模板正確同步 ([#6550](https://github.com/nocobase/nocobase/pull/6550)) by @gchust
- **[認證]** 註冊頁面欄位的本地化問題 ([#6556](https://github.com/nocobase/nocobase/pull/6556)) by @2013xile
- **[操作：自訂請求]** 無法下載 UTF-8 編碼的檔案 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[集合：樹]** plugin-collection-tree 的遷移問題 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[區塊：多步驟表單]** 提交按鈕在預設和突出顯示狀態下顏色相同 by @jiannx
- **[工作流：審批]** 修正在審批表單中提交表單值 by @mytharcher
