---
title: "NocoBase 每週更新：支援使用者角色聯合"
description: "本週更新包括：連結按鈕 URL 支援環境變數、啟用長文字欄位作為關聯欄位的標題欄位等。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.7](https://www.nocobase.com/en/blog/v1.6.7)

*發布日期：2025-03-20*

#### 🚀 改進

- **[工作流：郵件節點]** 新增安全欄位配置說明。([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[通知：電子郵件]** 新增安全欄位配置說明。([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[日曆]** 日曆插件新增可選設定，用於啟用或停用快速建立事件 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 錯誤修復

- **[客戶端]** 中文語言環境下時間欄位提交錯誤（時間類型的輸入語法無效）([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
- **[檔案管理器]** 無法存取儲存在 COS 中的檔案 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[區塊：地圖]** 地圖管理中的密鑰欄位未觸發驗證 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[WEB 客戶端]** 路由管理表中的路徑與實際路徑不同 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[操作：匯出記錄 Pro]** 無法匯出附件 by @chenos
- **[工作流：審批]**

  - 修復空用戶導致的崩潰 by @mytharcher
  - 修復新增查詢節點結果時拋出錯誤 by @mytharcher

### [v1.6.8](https://www.nocobase.com/en/blog/v1.6.8)

*發布日期：2025-03-22*

#### 🐛 錯誤修復

- **[伺服器]** 升級指令可能導致工作流程錯誤 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[客戶端]** 表單中子表格的高度隨表單高度設定 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
- **[認證]**

  - X-Authenticator 遺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
  - 修剪認證器選項 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
- **[區塊：地圖]** 地圖區塊金鑰管理問題，因不可見字元導致請求失敗 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
- **[備份管理器]** 還原可能導致工作流程執行錯誤 by @gchust
- **[企業微信]** 在擷取通知配置時解析環境變數和密鑰。by @2013xile

### [v1.6.9](https://www.nocobase.com/en/blog/v1.6.9)

*發布日期：2025-03-23*

#### 🐛 錯誤修復

- **[客戶端]** 操作按鈕透明度導致懸停時設定顯示問題 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh

### [v1.6.10](https://www.nocobase.com/en/blog/v1.6.10)

*發布日期：2025-03-25*

#### 🐛 錯誤修復

- **[客戶端]**

  - 新增連結頁面時無法使用「目前使用者」變數 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - 欄位賦值對欄位進行「空值」賦值無效 ([#6549](https://github.com/nocobase/nocobase/pull/6549)) by @katherinehhh
  - `yarn doc` 指令錯誤 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 從篩選表單的下拉式單選欄位中移除「允許複選」選項 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - 關聯欄位的資料範圍聯動無效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
- **[集合：樹]** plugin-collection-tree 的遷移問題 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[操作：自訂請求]** 無法下載 UTF-8 編碼的檔案 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.7](https://www.nocobase.com/en/blog/v1.7.0-beta.7)

*發布日期：2025-03-19*

#### 🚀 改進

- **[日曆]** 日曆插件新增可選設定，用於啟用或停用快速建立事件 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038

#### 🐛 錯誤修復

- **[客戶端]**

  - 新增子按鈕在僅圖示模式下不顯示 ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
  - 聯動規則欄位預設隱藏但保留值時無法運作 ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
- **[區塊：操作面板]** 行動操作面板中因權限控制隱藏按鈕後的佈局問題 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[WEB 客戶端]** 路由管理表中的路徑與實際路徑不同 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe

### [v1.7.0-beta.8](https://www.nocobase.com/en/blog/v1.7.0-beta.8)

*發布日期：2025-03-23*

#### 🎉 新功能

- **[客戶端]** 支援欄位樣式設定字型大小、字型粗細和字型樣式 ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh
- **[變數和密鑰]** 支援在連結按鈕 URL 中使用環境變數 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh

#### 🚀 改進

- **[客戶端]** 支援篩選按鈕中選取欄位的模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh
- **[工作流：郵件節點]** 新增安全欄位配置說明。([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[WEB 客戶端]** 為清除快取新增二次確認提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh
- **[通知：電子郵件]** 新增安全欄位配置說明。([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[郵件管理器]** 支援重新授權並在發送郵件時自動選取帳戶 by @jiannx

#### 🐛 錯誤修復

- **[伺服器]** 升級指令可能導致工作流程錯誤 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[客戶端]**

  - 表單中子表格的高度隨表單高度設定 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
  - 中文語言環境下時間欄位提交錯誤（時間類型的輸入語法無效）([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
  - 操作按鈕透明度導致懸停時設定顯示問題 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh
- **[認證]**

  - 修剪認證器選項 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
  - X-Authenticator 遺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
- **[區塊：地圖]**

  - 地圖區塊金鑰管理問題，因不可見字元導致請求失敗 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
  - 地圖管理中的密鑰欄位未觸發驗證 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[檔案管理器]** 無法存取儲存在 COS 中的檔案 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
- **[操作：匯出記錄 Pro]** 無法匯出附件 by @chenos
- **[備份管理器]** 還原可能導致工作流程執行錯誤 by @gchust
- **[企業微信]** 在擷取通知配置時解析環境變數和密鑰。by @2013xile
- **[工作流：審批]**

  - 修復工作刪除時流程表格錯誤 by @mytharcher
  - 修復新增查詢節點結果時拋出錯誤 by @mytharcher
  - 修復空用戶導致的崩潰 by @mytharcher

### [v1.7.0-beta.9](https://www.nocobase.com/en/blog/v1.7.0-beta.9)

*發布日期：2025-03-25*

#### 🎉 新功能

- **[acl]** 支援使用者角色聯合 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie
- **[客戶端]**

  - 支援集合中預設欄位的擴展 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh
  - 支援擴展前端篩選運算子 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh
- **[驗證]** 支援使用者綁定各種驗證類型，例如簡訊和 TOTP 認證器，以及在必要場景中進行身份驗證。啟用驗證方法的開發和擴展。([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
  參考：[驗證](https://docs.nocobase.com/handbook/verification)
- **[日曆]** 支援看板、日曆和公式欄位插件的可選欄位擴展 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh
- **[區塊：模板]** 新增 `區塊：模板` 插件，基於繼承機制為區塊提供模板支援。([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[plugin-demo-platform]** 將 "/new" 路由的 skipAuthCheck 設定為 true。by @sheldon66
- **[雙因素認證 (2FA)]** 新插件：雙因素認證和驗證：TOTP 認證器 by @2013xile
  參考：[雙因素認證 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[驗證：TOTP 認證器](https://docs.nocobase.com/handbook/verification-totp-authenticator)

#### 🚀 改進

- **[客戶端]**

  - 在 router.add 中新增 skipAuthCheck，以防止在公開頁面上重定向到登入頁面。([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66
  - 升級 ant design 相關依賴至 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) by @gchust
- **[工具]** 行動裝置的桌面頁面適配 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe
- **[公開表單]** 建立時將公開表單頁面標題設定為配置的標題 ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh
- **[檔案管理器]**

  - 新增後端程式碼以生成檔案預覽 URL ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - 變更儲存類型 API 並新增插件 API ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[區塊：模板]** 支援從頁面將資料區塊儲存為區塊模板 ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust
- **[工作流]** 將綁定工作流程設定移至插件 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 表格行按鈕拖放問題 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh
  - 新增連結頁面時無法使用「目前使用者」變數 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe
  - 關聯欄位的資料範圍聯動無效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe
  - 從篩選表單的下拉式單選欄位中移除「允許複選」選項 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe
  - `yarn doc` 指令錯誤 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust
  - 聯動規則配置中缺少欄位 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh
  - 行動瀏覽器中內容未完全顯示 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe
  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe
  - 篩選表單中時間欄位的格式不正確 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh
  - 表單預設值設定的輸入樣式不正確 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust
- **[工具]** 已知的「桌面響應式」錯誤 ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[acl]** 修復角色聯合下關聯欄位不顯示的問題。([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie
- **[集合：樹]** plugin-collection-tree 的遷移問題 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile
- **[操作：自訂請求]** 無法下載 UTF-8 編碼的檔案 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile
- **[變數和密鑰]** 在新增變數抽屜中未顯示按鈕 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust
- **[WEB 客戶端]** 將所有 ctx.state.currentRole（單一角色）的實例替換為 ctx.state.currentRoles（支援多角色）。([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie
- **[存取控制]**

  - 當資料範圍設定為自己的資料且表格缺少建立者欄位時發生錯誤。([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie
  - 修復切換角色無效的問題。([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie
- **[區塊：模板]**

  - 頁面資料區塊中未顯示「另存為模板」選項 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust
  - 行動客戶端中「另存為模板」行為不正確 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust
  - 存取公開表單時需要登入 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[認證：API 金鑰]** API 金鑰插件角色清單移除聯合 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie
- **[區塊：多步驟表單]** 提交按鈕在預設和突出顯示狀態下顏色相同 by @jiannx
- **[工作流：審批]** 「申請新的」彈出對話框的樣式問題 by @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.4](https://www.nocobase.com/en/blog/v1.7.0-alpha.4)

*發布日期：2025-03-23*

#### 🎉 新功能

- **[客戶端]**

  - 支援長文字欄位作為關聯欄位的標題欄位 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) by @katherinehhh
  - 支援欄位樣式設定字型大小、字型粗細和字型樣式 ([#6489](https://github.com/nocobase/nocobase/pull/6489)) by @katherinehhh
- **[變數和密鑰]** 支援在連結按鈕 URL 中使用環境變數 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) by @katherinehhh
- **[工作流：聚合節點]** 支援為聚合結果配置精度 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) by @mytharcher

#### 🚀 改進

- **[客戶端]** 支援篩選按鈕中選取欄位的模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) by @katherinehhh
- **[通知：電子郵件]** 新增安全欄位配置說明。([#6501](https://github.com/nocobase/nocobase/pull/6501)) by @sheldon66
- **[工作流：郵件節點]** 新增安全欄位配置說明。([#6510](https://github.com/nocobase/nocobase/pull/6510)) by @sheldon66
- **[日曆]** 日曆插件新增可選設定，用於啟用或停用快速建立事件 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) by @Cyx649312038
- **[WEB 客戶端]** 為清除快取新增二次確認提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) by @katherinehhh
- **[郵件管理器]** 支援重新授權並在發送郵件時自動選取帳戶 by @jiannx

#### 🐛 錯誤修復

- **[客戶端]**

  - 操作按鈕透明度導致懸停時設定顯示問題 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) by @katherinehhh
  - 中文語言環境下時間欄位提交錯誤（時間類型的輸入語法無效）([#6511](https://github.com/nocobase/nocobase/pull/6511)) by @katherinehhh
  - 表單中子表格的高度隨表單高度設定 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) by @katherinehhh
  - 聯動規則欄位預設隱藏但保留值時無法運作 ([#6503](https://github.com/nocobase/nocobase/pull/6503)) by @katherinehhh
  - 新增子按鈕在僅圖示模式下不顯示 ([#6504](https://github.com/nocobase/nocobase/pull/6504)) by @katherinehhh
- **[伺服器]** 升級指令可能導致工作流程錯誤 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) by @gchust
- **[工具]** 已知的「桌面響應式」錯誤 ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe
- **[評估器]** 將四捨五入小數位數恢復為 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) by @mytharcher
- **[認證]**

  - 修剪認證器選項 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) by @2013xile
  - X-Authenticator 遺失 ([#6526](https://github.com/nocobase/nocobase/pull/6526)) by @chenos
- **[區塊：地圖]**

  - 地圖區塊金鑰管理問題，因不可見字元導致請求失敗 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) by @katherinehhh
  - 地圖管理中的密鑰欄位未觸發驗證 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) by @katherinehhh
- **[檔案管理器]**

  - 無法存取儲存在 COS 中的檔案 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) by @chenos
  - 編碼 URL ([#6497](https://github.com/nocobase/nocobase/pull/6497)) by @chenos
- **[WEB 客戶端]** 路由管理表中的路徑與實際路徑不同 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) by @zhangzhonghe
- **[區塊：操作面板]** 行動操作面板中因權限控制隱藏按鈕後的佈局問題 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) by @katherinehhh
- **[資料來源：主]** 無法建立 MySQL 檢視表。([#6477](https://github.com/nocobase/nocobase/pull/6477)) by @aaaaaajie
- **[工作流]** 修復工作流程刪除後的舊任務計數 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) by @mytharcher
- **[操作：匯出記錄 Pro]** 無法匯出附件 by @chenos
- **[備份管理器]**

  - 從備份模板建立子應用時，上傳的檔案未還原 by @gchust
  - 還原可能導致工作流程執行錯誤 by @gchust
  - 因 GTID 集合重疊導致的 MySQL 資料庫還原失敗 by @gchust
- **[企業微信]** 在擷取通知配置時解析環境變數和密鑰。by @2013xile
- **[工作流：審批]**

  - 修復工作刪除時流程表格錯誤 by @mytharcher
  - 將返回的審批變更為待辦事項 by @mytharcher
  - 修復新增查詢節點結果時拋出錯誤 by @mytharcher
  - 修復流程表格中遺失的操作按鈕 by @mytharcher
  - 「申請新的」彈出對話框的樣式問題 by @zhangzhonghe

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，只需幾分鐘即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**演示**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
