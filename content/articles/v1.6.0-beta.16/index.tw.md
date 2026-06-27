---
title: "NocoBase v1.6.0-beta.16：時間欄位支援時間格式"
description: "v1.6.0-beta.16 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 時間欄位支援時間格式 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) - 作者 @katherinehhh

### 🚀 改進

- **[伺服器]** 升級 koa 至 2.15.4；升級 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) - 作者 @2013xile

- **[工作流]** 為提升效能，對工作結果進行延遲載入 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) - 作者 @mytharcher

### 🐛 錯誤修復

- **[認證]** 避免在 WebSocket 授權期間更新 Token。([#6342](https://github.com/nocobase/nocobase/pull/6342)) - 作者 @sheldon66

- **[客戶端]**
  - 設有自訂 favicon 的頁面在載入時會短暫閃現 NocoBase 預設 favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) - 作者 @zhangzhonghe

  - 在關聯欄位唯讀模式下，滑鼠懸停時會出現「新增」按鈕 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) - 作者 @katherinehhh

- **[開發工具]** 確保僅在 req.ip 不為 undefined 時才設定 X-Forwarded-For 標頭。([#6320](https://github.com/nocobase/nocobase/pull/6320)) - 作者 @sheldon66

- **[區塊：地圖]** 地圖欄位的配置設定遺失/無法顯示 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) - 作者 @zhangzhonghe

- **[行動端]** 頁面錯誤：無法讀取 null 的屬性（讀取 'match'）([#6335](https://github.com/nocobase/nocobase/pull/6335)) - 作者 @zhangzhonghe

- **[使用者]** 使用者權限管理表格首次載入時，會短暫閃現錯誤 UI ([#6324](https://github.com/nocobase/nocobase/pull/6324)) - 作者 @zhangzhonghe

- **[區塊：操作面板]** 設定操作面板的高度無效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) - 作者 @zhangzhonghe

- **[動作：匯入記錄 Pro]** 關聯區塊匯入按鈕的重複記錄檢測中，欄位下拉選單無資料顯示 - 作者 @katherinehhh

- **[動作：匯出記錄 Pro]** 移除匯出附件按鈕設定中的「新增區塊」選項 - 作者 @katherinehhh

- **[工作流：自訂操作事件]** 修正已綁定自訂操作工作流程的舊版按鈕遷移問題 - 作者 @mytharcher

- **[自訂品牌]** 設有自訂 favicon 的頁面在載入時會短暫閃現 NocoBase 預設 favicon - 作者 @zhangzhonghe

- **[範本列印]** 當同時啟用動作範本列印與備份管理員外掛時，從本機還原失敗 - 作者 @gchust

- **[工作流：審批]**
  - 修正 `.toJSON()` 導致的錯誤 - 作者 @mytharcher

  - 修正因版本號碼導致遷移未執行的問題 - 作者 @mytharcher

  - 修正舊版區塊的遷移問題 - 作者 @mytharcher
