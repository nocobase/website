---
title: "NocoBase 每週更新：雙因素認證 (2FA)"
description: "本週更新包括：相容於歷史按鈕存取控制設定、AI 整合外掛等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**本週我們發布了 [NocoBase 1.6.0 版本](https://www.nocobase.com/en/blog/nocobase-1-6-0)，帶來了叢集模式部署、安全策略優化、遷移管理器核心優化以及許多其他新功能。**

**NocoBase 目前有三個更新分支：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和不完整的功能。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.21](https://www.nocobase.com/en/blog/v1.5.21)

*發布日期：2025-03-05*

#### 🚀 改進

- **[工作流]** 延遲載入工作結果以提升效能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[工作流：彙總節點]** 為基於雙精度類型的彙總數字添加四捨五入處理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 隱藏標籤時子表單元件未與主表單對齊 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - 在集合繼承的彈窗中關聯區塊未渲染 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - 修復建立檔案集合時拋出的錯誤 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[工作流]** 修獲取工作的 ACL ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher

### [v1.5.22](https://www.nocobase.com/en/blog/v1.5.22)

*發布日期：2025-03-06*

#### 🚀 改進

- **[客戶端]** 為按鈕添加防抖處理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038

#### 🐛 錯誤修復

- **[資料庫]** 修復當關聯欄位中的來源鍵為數字字串時，檢索關聯集合記錄的錯誤 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile

### [v1.5.23](https://www.nocobase.com/en/blog/v1.5.23)

*發布日期：2025-03-06*

#### 🐛 錯誤修復

- **[客戶端]**
  - 時區相關問題導致日期選擇器少一小時 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 缺少繼承集合欄位的可排序設定 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh

### [v1.5.24](https://www.nocobase.com/en/blog/v1.5.24)

*發布日期：2025-03-07*

#### 🎉 新功能

- **[資料視覺化]** 支援圖表查詢中的 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile

#### 🚀 改進

- **[工作流]** 允許跳過在資料庫事件中觸發集合工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher

#### 🐛 錯誤修復

- **[操作：匯入記錄 Pro]** 使用附加選項來決定是否觸發工作流 by @mytharcher
- **[操作：匯出記錄 Pro]** Pro 匯出操作缺少排序參數 by @katherinehhh

### [v1.5.25](https://www.nocobase.com/en/blog/v1.5.25)

*發布日期：2025-03-09*

#### 🐛 錯誤修復

- **[伺服器]** 執行 `yarn start` 命令後瀏覽器快取不正確 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[工作流：審批]** 避免錯誤的審批人配置查詢所有使用者 by @mytharcher
- **[企業微信]** 修復登入提示連結和釘釘登入錯誤 by @chenzhizdt

### [v1.6.1](https://www.nocobase.com/en/blog/v1.6.1)

*發布日期：2025-03-11*

#### 🐛 錯誤修復

- **[客戶端]**

  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe
  - 透過連結按鈕開啟的彈窗中資料未更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe
  - 刪除子表格記錄時多選欄位值變更和選項遺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh
- **[通知：應用內訊息]** 區分應用內訊息列表背景色與訊息卡片，以增強視覺層次和可讀性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.17](https://www.nocobase.com/en/blog/v1.6.0-beta.17)

*發布日期：2025-03-07*

#### 🎉 新功能

- **[客戶端]** 為選單項和表格標題添加工具提示配置 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
- **[資料視覺化]** 支援圖表查詢中的 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI 整合]** 新外掛：AI 整合 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
- **[AI 整合 (EE)]** 新外掛：AI 整合 (EE) by @2013xile
  參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)

#### 🚀 改進

- **[客戶端]**

  - 為按鈕添加防抖處理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - 使選單響應螢幕寬度 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[工作流]** 允許跳過在資料庫事件中觸發集合工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
- **[工作流：彙總節點]** 為基於雙精度類型的彙總數字添加四捨五入處理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[操作：匯入記錄 Pro]** 支援 Pro 匯入按鈕中的進階選項 by @katherinehhh
- **[工作流：JavaScript]** 支援從絕對路徑引入套件 by @mytharcher
- **[檔案儲存：S3(Pro)]** 若未找到儲存，嘗試重新載入儲存 by @jiannx

#### 🐛 錯誤修復

- **[客戶端]**

  - 選單標題自訂翻譯無效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - 時區相關問題導致日期選擇器少一小時 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 缺少繼承集合欄位的可排序設定 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - 附件欄位儲存設定下拉選單未顯示選項 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - 隱藏標籤時子表單元件未與主表單對齊 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - 在集合繼承的彈窗中關聯區塊未渲染 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - 解決使用全高區塊開啟頁面頁籤時的滾動條問題 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - 修復建立檔案集合時拋出的錯誤 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
- **[資料庫]** 修復當關聯欄位中的來源鍵為數字字串時，檢索關聯集合記錄的錯誤 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEB 客戶端]**

  - 在路由管理表中新增頁面頁籤無效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
  - 向路由表新增頁面後，頁面顯示為空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
- **[使用者]**

  - 沒有使用者管理權限的使用者檢視自己的個人資料時出現「無權限」錯誤 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - 在使用者管理中更新系統設定時出現「無權限」錯誤 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
- **[存取控制]** 在權限管理表中，頁面頁籤名稱為空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[AI 整合]** LLM 提供者的預設 `baseURL` 為 `undefined` 的問題 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[工作流]** 修獲取工作的 ACL ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[工作流：自訂操作事件]** 修復執行後可修改的語言和集合 by @mytharcher
- **[操作：匯入記錄 Pro]** 使用附加選項來決定是否觸發工作流 by @mytharcher
- **[操作：匯出記錄 Pro]** Pro 匯出操作缺少排序參數 by @katherinehhh

### [v1.6.0-beta.18](https://www.nocobase.com/en/blog/v1.6.0-beta.18)

*發布日期：2025-03-10*

#### 🚀 改進

- **[認證：API 金鑰]** 為 API 金鑰認證添加令牌安全配置測試。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

#### 🐛 錯誤修復

- **[伺服器]** 執行 `yarn start` 命令後瀏覽器快取不正確 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[認證]** 處理不存在的使用者時返回 401 錯誤並更新語言訊息 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[WEB 客戶端]** 切換角色後頁面為空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[主題編輯器]** 連續多次切換主題後失敗 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[工作流：審批]**

  - 修復新增審批人時的順序參數 by @mytharcher
  - 避免錯誤的審批人配置查詢所有使用者 by @mytharcher
- **[企業微信]** 修復登入提示連結和釘釘登入錯誤 by @chenzhizdt

### [v1.7.0-beta.1](https://www.nocobase.com/en/blog/v1.7.0-beta.1)

*發布日期：2025-03-11*

#### 🎉 新功能

- **[客戶端]** 相容歷史按鈕存取控制設定 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[工作流：操作後事件]** 支援使用結束節點來決定狀態 ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher
- **[工作流：回應訊息]** 支援在操作觸發器中使用 by @mytharcher

#### 🚀 改進

- **[工作流]** 修復未登入時的 API 401 錯誤 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[工作流：人工節點]** 調整工作流任務中心 UI ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher
- **[郵件管理器]** 在全局範圍內為工具欄按鈕使用相同的元素結構和樣式 by @mytharcher
- **[工作流：審批]** 調整任務中心 UI by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 無法將頁面移動到群組中 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - 深層選單未顯示圖示 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
  - FormDrawer 主題上下文問題 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
- **[工作流：人工節點]** 避免唯一鍵衝突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[資料來源管理器]** 編輯外部資料來源中的欄位時出錯 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[認證]** 使用者沒有角色時應重新導向到錯誤訊息頁面。 ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[工作流：自訂操作事件]** 「觸發工作流」按鈕缺少聯動規則配置 by @katherinehhh
- **[備份管理器]** 備份還原期間缺少加密金鑰資料 by @gchust
- **[工作流：審批]** 避免唯一鍵衝突 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.30](https://www.nocobase.com/en/blog/v1.6.0-alpha.30)

*發布日期：2025-03-07*

#### 🎉 新功能

- **[客戶端]**

  - 為選單項和表格標題添加工具提示配置 ([#6346](https://github.com/nocobase/nocobase/pull/6346)) by @Cyx649312038
  - 時間欄位支援時間格式 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh
- **[資料視覺化]** 支援圖表查詢中的 NULLS 排序 ([#6383](https://github.com/nocobase/nocobase/pull/6383)) by @2013xile
- **[AI 整合]** 新外掛：AI 整合 ([#6283](https://github.com/nocobase/nocobase/pull/6283)) by @2013xile
  參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
- **[驗證]** 支援使用者綁定各種驗證類型，例如簡訊和 TOTP 驗證器，以及在必要場景中進行身份驗證。支援驗證方法的開發和擴展。 ([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  參考：[驗證](https://docs.nocobase.com/handbook/verification)
- **[AI 整合 (EE)]** 新外掛：AI 整合 (EE) by @2013xile
  參考：[AI 整合](https://docs.nocobase.com/handbook/ai/service)
- **[雙因素認證 (2FA)]** 新外掛：雙因素認證和驗證：TOTP 驗證器 by @2013xile
  參考：[雙因素認證 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[驗證：TOTP 驗證器](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 改進

- **[客戶端]**

  - 為按鈕添加防抖處理 ([#6351](https://github.com/nocobase/nocobase/pull/6351)) by @Cyx649312038
  - 使選單響應螢幕寬度 ([#6331](https://github.com/nocobase/nocobase/pull/6331)) by @zhangzhonghe
- **[伺服器]** 升級 koa 至 2.15.4；升級 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[工作流]**

  - 允許跳過在資料庫事件中觸發集合工作流 ([#6379](https://github.com/nocobase/nocobase/pull/6379)) by @mytharcher
  - 延遲載入工作結果以提升效能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher
- **[區塊：範本]** 支援從頁面將資料區塊儲存為區塊範本 ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[工作流：彙總節點]** 為基於雙精度類型的彙總數字添加四捨五入處理 ([#6358](https://github.com/nocobase/nocobase/pull/6358)) by @mytharcher
- **[操作：匯入記錄 Pro]** 支援 Pro 匯入按鈕中的進階選項 by @katherinehhh
- **[工作流：JavaScript]** 支援從絕對路徑引入套件 by @mytharcher
- **[檔案儲存：S3(Pro)]** 若未找到儲存，嘗試重新載入儲存 by @jiannx

#### 🐛 錯誤修復

- **[客戶端]**

  - 選單標題自訂翻譯無效 ([#6377](https://github.com/nocobase/nocobase/pull/6377)) by @zhangzhonghe
  - 缺少繼承集合欄位的可排序設定 ([#6372](https://github.com/nocobase/nocobase/pull/6372)) by @katherinehhh
  - 篩選表單中時間欄位的格式不正確 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - 時區相關問題導致日期選擇器少一小時 ([#6359](https://github.com/nocobase/nocobase/pull/6359)) by @katherinehhh
  - 附件欄位儲存設定下拉選單未顯示選項 ([#6365](https://github.com/nocobase/nocobase/pull/6365)) by @katherinehhh
  - 隱藏標籤時子表單元件未與主表單對齊 ([#6357](https://github.com/nocobase/nocobase/pull/6357)) by @katherinehhh
  - 修復建立檔案集合時拋出的錯誤 ([#6363](https://github.com/nocobase/nocobase/pull/6363)) by @mytharcher
  - 解決使用全高區塊開啟頁面頁籤時的滾動條問題 ([#6347](https://github.com/nocobase/nocobase/pull/6347)) by @katherinehhh
  - 具有自訂 favicon 的頁面在載入期間短暫閃現 NocoBase favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - 在集合繼承的彈窗中關聯區塊未渲染 ([#6303](https://github.com/nocobase/nocobase/pull/6303)) by @katherinehhh
  - 在關聯欄位唯讀模式下懸停時出現新增按鈕 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[認證]** 避免在 WebSocket 授權期間更新令牌。 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[資料庫]** 修復當關聯欄位中的來源鍵為數字字串時，檢索關聯集合記錄的錯誤 ([#6360](https://github.com/nocobase/nocobase/pull/6360)) by @2013xile
- **[WEB 客戶端]**

  - 向路由表新增頁面後，頁面顯示為空白 ([#6366](https://github.com/nocobase/nocobase/pull/6366)) by @zhangzhonghe
  - 在路由管理表中新增頁面頁籤無效 ([#6362](https://github.com/nocobase/nocobase/pull/6362)) by @zhangzhonghe
- **[存取控制]** 在權限管理表中，頁面頁籤名稱為空 ([#6364](https://github.com/nocobase/nocobase/pull/6364)) by @zhangzhonghe
- **[使用者]**

  - 沒有使用者管理權限的使用者檢視自己的個人資料時出現「無權限」錯誤 ([#6382](https://github.com/nocobase/nocobase/pull/6382)) by @2013xile
  - 在使用者管理中更新系統設定時出現「無權限」錯誤 ([#6380](https://github.com/nocobase/nocobase/pull/6380)) by @2013xile
  - 使用者權限管理表首次載入時短暫閃現錯誤 UI ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[AI 整合]** LLM 提供者的預設 `baseURL` 為 `undefined` 的問題 ([#6367](https://github.com/nocobase/nocobase/pull/6367)) by @2013xile
- **[工作流]** 修獲取工作的 ACL ([#6352](https://github.com/nocobase/nocobase/pull/6352)) by @mytharcher
- **[區塊：地圖]** 地圖欄位的配置設定遺失/不可見 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[行動端]** 頁面錯誤：無法讀取 null 的屬性（讀取 'match'） ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[區塊：操作面板]** 設定操作面板的高度無效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[工作流：自訂操作事件]**

  - 修復執行後可修改的語言和集合 by @mytharcher
  - 修復綁定了自訂操作工作流的舊版按鈕的遷移 by @mytharcher
- **[自訂品牌]** 具有自訂 favicon 的頁面在載入期間短暫閃現 NocoBase favicon by @zhangzhonghe
- **[操作：匯入記錄 Pro]**

  - 使用附加選項來決定是否觸發工作流 by @mytharcher
  - 關聯區塊匯入按鈕重複記錄檢測在欄位下拉選單中未顯示資料 by @katherinehhh
- **[操作：匯出記錄 Pro]**

  - Pro 匯出操作缺少排序參數 by @katherinehhh
  - 移除匯出附件按鈕設定中的「新增區塊」選項 by @katherinehhh
- **[範本列印]** 當同時啟用操作範本列印和備份管理器外掛時，從本機還原失敗 by @gchust
- **[工作流：審批]**

  - 修復舊版區塊的遷移 by @mytharcher
  - 修復 `.toJSON()` 導致的錯誤 by @mytharcher

### [v1.6.0-alpha.31](https://www.nocobase.com/en/blog/v1.6.0-alpha.3)

*發布日期：2025-03-11*

#### 🎉 新功能

- **[客戶端]** 相容歷史按鈕存取控制設定 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh
- **[工作流：回應訊息]** 支援在操作觸發器中使用 by @mytharcher

#### 🚀 改進

- **[認證：API 金鑰]** 為 API 金鑰認證添加令牌安全配置測試。 ([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66
- **[工作流：人工節點]** 調整工作流任務中心 UI ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

#### 🐛 錯誤修復

- **[伺服器]** 執行 `yarn start` 命令後瀏覽器快取不正確 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust
- **[客戶端]**

  - FormDrawer 主題上下文問題 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh
  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
- **[認證]** 處理不存在的使用者時返回 401 錯誤並更新語言訊息 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66
- **[區塊：範本]** 頁面資料區塊中未顯示「另存為範本」選項 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
- **[工作流：人工節點]** 避免唯一鍵衝突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher
- **[資料來源管理器]** 編輯外部資料來源中的欄位時出錯 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh
- **[主題編輯器]** 連續多次切換主題後失敗 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh
- **[WEB 客戶端]** 切換角色後頁面為空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie
- **[工作流：審批]**

  - 避免錯誤的審批人配置查詢所有使用者 by @mytharcher
  - 修復新增審批人時的順序參數 by @mytharcher
- **[企業微信]** 修復登入提示連結和釘釘登入錯誤 by @chenzhizdt

### [v1.7.0-alpha.1](https://www.nocobase.com/en/blog/v1.7.0-alpha.1)

*發布日期：2025-03-11*

#### 🎉 新功能

- **[工作流：操作後事件]** 支援使用結束節點來決定狀態 ([#6399](https://github.com/nocobase/nocobase/pull/6399)) by @mytharcher

#### 🚀 改進

- **[工作流]** 修復未登入時的 API 401 錯誤 ([#6412](https://github.com/nocobase/nocobase/pull/6412)) by @mytharcher
- **[郵件管理器]** 在全局範圍內為工具欄按鈕使用相同的元素結構和樣式 by @mytharcher
- **[工作流：審批]** 調整任務中心 UI by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 無法將頁面移動到群組中 ([#6413](https://github.com/nocobase/nocobase/pull/6413)) by @zhangzhonghe
  - 深層選單未顯示圖示 ([#6410](https://github.com/nocobase/nocobase/pull/6410)) by @zhangzhonghe
- **[認證]** 使用者沒有角色時應重新導向到錯誤訊息頁面。 ([#6408](https://github.com/nocobase/nocobase/pull/6408)) by @sheldon66
- **[工作流：自訂操作事件]** 「觸發工作流」按鈕缺少聯動規則配置 by @katherinehhh
- **[備份管理器]** 備份還原期間缺少加密金鑰資料 by @gchust
- **[工作流：審批]** 避免唯一鍵衝突 by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
