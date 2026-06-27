---
title: "NocoBase v1.7.0-beta.9：支援使用者角色聯合"
description: "v1.7.0-beta.9 版本發行說明"
---

### 🎉 新功能

- **[acl]** 支援使用者角色聯集 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie

- **[client]**
  - 支援在資料表中擴充預設欄位 ([#6183](https://github.com/nocobase/nocobase/pull/6183)) by @katherinehhh

  - 支援擴充前端篩選運算子 ([#6085](https://github.com/nocobase/nocobase/pull/6085)) by @katherinehhh

- **[驗證]** 支援使用者綁定多種驗證類型，例如簡訊和 TOTP 驗證器，以及在必要場景中進行身分驗證。啟用驗證方法的開發與擴充。([#6026](https://github.com/nocobase/nocobase/pull/6026)) by @2013xile
參考：[驗證](https://docs.nocobase.com/handbook/verification)
- **[日曆]** 支援看板、日曆和公式欄位外掛程式的可選欄位擴充 ([#6076](https://github.com/nocobase/nocobase/pull/6076)) by @katherinehhh

- **[區塊：範本]** 新增「區塊：範本」外掛程式，基於繼承機制為區塊提供範本支援。([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust

- **[plugin-demo-platform]** 將 "/new" 路由的 skipAuthCheck 設定為 true。 by @sheldon66

- **[雙重驗證 (2FA)]** 新增外掛程式：雙重驗證與驗證：TOTP 驗證器 by @2013xile
參考：[雙重驗證 (2FA)](https://docs.nocobase.com/handbook/two-factor-authentication)<br />[驗證：TOTP 驗證器](https://docs.nocobase.com/handbook/verification-totp-authenticator)
### 🚀 改進

- **[client]**
  - 在 router.add 中加入 skipAuthCheck，以防止在公開頁面上重新導向至登入頁面。([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66

  - 將 ant design 相關依賴升級至 5.24.2 ([#6343](https://github.com/nocobase/nocobase/pull/6343)) by @gchust

- **[utils]** 行動裝置的桌面頁面適配 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe

- **[公開表單]** 建立時將公開表單頁面標題設定為已設定的標題 ([#6538](https://github.com/nocobase/nocobase/pull/6538)) by @katherinehhh

- **[檔案管理員]**
  - 新增後端程式碼以產生檔案預覽網址 ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx

  - 變更儲存類型 API 並新增外掛程式 API ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher

- **[區塊：範本]** 支援從頁面將資料區塊儲存為區塊範本 ([#6348](https://github.com/nocobase/nocobase/pull/6348)) by @gchust

- **[工作流程]** 將綁定工作流程設定移至外掛程式 ([#6143](https://github.com/nocobase/nocobase/pull/6143)) by @mytharcher

### 🐛 錯誤修復

- **[client]**
  - 表格列按鈕拖曳問題 ([#6544](https://github.com/nocobase/nocobase/pull/6544)) by @katherinehhh

  - 新增連結頁面時無法使用「目前使用者」變數 ([#6536](https://github.com/nocobase/nocobase/pull/6536)) by @zhangzhonghe

  - 關聯欄位的資料範圍連動無效 ([#6530](https://github.com/nocobase/nocobase/pull/6530)) by @zhangzhonghe

  - 在篩選表單中移除下拉式單選欄位的「允許複選」選項 ([#6515](https://github.com/nocobase/nocobase/pull/6515)) by @zhangzhonghe

  - `yarn doc` 指令錯誤 ([#6540](https://github.com/nocobase/nocobase/pull/6540)) by @gchust

  - 連動規則設定中缺少欄位 ([#6488](https://github.com/nocobase/nocobase/pull/6488)) by @katherinehhh

  - 行動瀏覽器中內容未完整顯示 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe

  - 使用 '$anyOf' 運算子時，連動規則無效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe

  - 篩選表單中時間欄位格式不正確 ([#6374](https://github.com/nocobase/nocobase/pull/6374)) by @katherinehhh

  - 表單預設值設定的輸入樣式不正確 ([#6490](https://github.com/nocobase/nocobase/pull/6490)) by @gchust

- **[utils]** 已知的「桌面響應式」錯誤 ([#6476](https://github.com/nocobase/nocobase/pull/6476)) by @zhangzhonghe

- **[acl]** 修復角色聯集下關聯欄位未顯示的問題。([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie

- **[資料表：樹]** plugin-collection-tree 的遷移問題 ([#6537](https://github.com/nocobase/nocobase/pull/6537)) by @2013xile

- **[動作：自訂請求]** 無法下載 UTF-8 編碼的檔案 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) by @2013xile

- **[變數與機密]** 在新增變數抽屜中未顯示按鈕 ([#6485](https://github.com/nocobase/nocobase/pull/6485)) by @gchust

- **[WEB client]** 將所有 ctx.state.currentRole（單一角色）的實例取代為 ctx.state.currentRoles（支援多角色）。([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie

- **[存取控制]**
  - 當資料範圍設定為自己的資料且資料表缺少建立者欄位時發生錯誤。([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie

  - 修正在切換角色時未生效的問題。([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie

- **[區塊：範本]**
  - 頁面資料區塊中未顯示「另存為範本」選項 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust

  - 在行動用戶端中「另存為範本」的行為不正確 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust

  - 存取公開表單時需要登入 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust

- **[驗證：API 金鑰]** API 金鑰外掛程式角色清單移除聯集 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie

- **[區塊：多步驟表單]** 提交按鈕在預設與高亮狀態下顏色相同 by @jiannx

- **[工作流程：審批]** 「申請新的」彈出對話框的樣式問題 by @zhangzhonghe
