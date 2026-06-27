---
title: "NocoBase v1.7.0-alpha.2：支援在聯動規則中配置可選欄位選項"
description: "v1.7.0-alpha.2 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 級聯選擇元件新增資料範圍設定 ([#6386](https://github.com/nocobase/nocobase/pull/6386)) by @Cyx649312038

  - 表格區塊支援隱藏序號欄位（預設顯示）([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh

  - 支援在聯動規則中設定可選欄位選項 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh

  - 支援在聯動規則中為時間欄位設定日期範圍（最小值/最大值）([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[acl]** 支援使用者角色聯合 ([#6301](https://github.com/nocobase/nocobase/pull/6301)) by @aaaaaajie

- **[區塊：操作面板]** 支援操作面板中操作標題換行 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

- **[plugin-demo-platform]** 將 "/new" 路由的 skipAuthCheck 設為 true。 by @sheldon66

- **[WeCom]** 允許為登入按鈕設定自訂提示文字 by @2013xile

### 🚀 改進

- **[工具函式]**
  - 將 `md5` 移至工具函式 ([#6468](https://github.com/nocobase/nocobase/pull/6468)) by @mytharcher

  - 桌面頁面在行動裝置上的適配 ([#6393](https://github.com/nocobase/nocobase/pull/6393)) by @zhangzhonghe

- **[客戶端]** 在 router.add 中加入 skipAuthCheck，防止公開頁面被重新導向至登入頁面。 ([#6453](https://github.com/nocobase/nocobase/pull/6453)) by @sheldon66

- **[資料視覺化]** 以 `x-settings` 取代已棄用的 `x-designer` ([#6442](https://github.com/nocobase/nocobase/pull/6442)) by @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 在樹狀區塊中，取消勾選時，資料區塊中的資料未被清除 ([#6460](https://github.com/nocobase/nocobase/pull/6460)) by @zhangzhonghe

  - 修復圖片 URL 中的特殊字元導致無法顯示 ([#6459](https://github.com/nocobase/nocobase/pull/6459)) by @mytharcher

  - 子表格頁面大小變更後新增資料時頁碼不正確 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh

  - 行動瀏覽器中內容未完全顯示 ([#6446](https://github.com/nocobase/nocobase/pull/6446)) by @zhangzhonghe

  - Logo 樣式與先前不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

  - 日期欄位範圍選擇排除最大日期 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh

  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe

  - 刪除子表格記錄時，多選欄位值變更與選項遺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh

  - 透過連結按鈕開啟的彈出視窗中資料未更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[acl]** 修復角色聯合下關聯欄位未顯示的問題。 ([#6456](https://github.com/nocobase/nocobase/pull/6456)) by @aaaaaajie

- **[檔案管理]**
  - 無法刪除儲存在 S3 中的檔案。 ([#6467](https://github.com/nocobase/nocobase/pull/6467)) by @chenos

  - 修復檔案管理的幾個問題 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[工作流程]** 從資料選擇器中移除綁定工作流程設定按鈕 ([#6455](https://github.com/nocobase/nocobase/pull/6455)) by @mytharcher

- **[工作流程：人工節點]**
  - 修復遷移時拋出的錯誤 ([#6445](https://github.com/nocobase/nocobase/pull/6445)) by @mytharcher

  - 將遷移的版本限制變更為 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

  - 修復遺漏資料表前綴與綱要邏輯的遷移 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher

- **[存取控制]**
  - 修復切換角色未生效的問題。 ([#6454](https://github.com/nocobase/nocobase/pull/6454)) by @aaaaaajie

  - 當資料範圍設為「本人資料」且資料表缺少建立者欄位時發生錯誤。 ([#6428](https://github.com/nocobase/nocobase/pull/6428)) by @aaaaaajie

- **[WEB 客戶端]** 將所有 ctx.state.currentRole（單一角色）的實例替換為 ctx.state.currentRoles（支援多角色）。 ([#6427](https://github.com/nocobase/nocobase/pull/6427)) by @aaaaaajie

- **[操作：批次編輯]** 修復批次編輯提交時無法觸發工作流程 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[資料來源管理器]** 在角色管理中切換資料來源時未載入對應的資料表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[資料視覺化]** 新增自訂篩選欄位時出現已移除的欄位 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[通知：應用內訊息]**
  - 區分應用內訊息列表背景色與訊息卡片，以增強視覺層次與可讀性。 ([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

  - 避免錯誤的接收者設定查詢所有使用者 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

- **[操作：自訂請求]** 自訂請求伺服器端權限驗證錯誤 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[認證：API 金鑰]** API 金鑰外掛角色列表移除聯合 ([#6432](https://github.com/nocobase/nocobase/pull/6432)) by @aaaaaajie

- **[區塊：範本]** 在行動客戶端中「另存為範本」行為不正確 ([#6420](https://github.com/nocobase/nocobase/pull/6420)) by @gchust

- **[工作流程：自訂動作事件]** 移除 E2E 測試案例中的 `only` by @mytharcher

- **[檔案儲存：S3(Pro)]** 解決 S3 Pro 簽署 URL 無法存取的問題 by @chenos

- **[工作流程：審批]**
  - 避免審批流程表格中無申請人時頁面崩潰 by @mytharcher

  - 修復審批表單中關聯資料未顯示的問題 by @mytharcher

  - 修正在外部資料來源上審批時拋出的錯誤 by @mytharcher
