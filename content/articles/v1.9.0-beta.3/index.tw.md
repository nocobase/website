---
title: "NocoBase v1.9.0-beta.3：支援為子應用程式設定獨立的驗證密鑰"
description: "v1.9.0-beta.3 版本發行說明"
---

### 🎉 新功能

- **[多應用管理]** 支援為子應用設定獨立的認證密鑰 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) - @mytharcher

- **[工作流：抄送]** 在工作流中新增抄送節點 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) - @mytharcher

- **[工作流：審批]** 為觸發器新增初始化器 - @mytharcher

### 🚀 改進

- **[通知：應用內訊息]** 優化行動裝置訊息頁面的字型大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) - @zhangzhonghe

- **[工作流]** 在邏輯計算的字串比較前，將運算元轉換為字串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) - @mytharcher

- **[多應用管理]**
  - 為子應用新增資料庫與授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) - @mytharcher

  - 為子應用新增資料庫與授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) - @mytharcher

- **[集合欄位：代碼]** 新增縮排設定 - @mytharcher

- **[認證：釘釘]** 支援設定回調 URL 的通訊協定與連接埠號碼 - @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 附件欄位無法在聯動規則中選為變數的問題 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) - @zhangzhonghe

  - 在看板排序欄位中對列表區塊賦值時發生錯誤 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) - @katherinehhh

  - 篩選折疊：為欄位設定預設值後，頁面初始化時篩選未觸發 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) - @zhangzhonghe

  - 編輯表單中，當選擇欄位同時設定值與選項時，賦值失敗 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) - @katherinehhh

  - 彈出動作：切換分頁後頁面顯示不如預期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) - @zhangzhonghe

  - 切換子選單時，瀏覽器分頁標題未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) - @zhangzhonghe

  - 修復 iOS 上下拉選擇元件被鍵盤遮擋的問題 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) - @zhangzhonghe

- **[acl]** 修正在角色聯合模式下刪除包含根角色的角色時發生的錯誤 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) - @aaaaaajie

- **[認證]** 修復登入頁面無法捲動的問題 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) - @zhangzhonghe

- **[多應用管理]** 修正認證選項出現在非預期位置 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) - @mytharcher

- **[通知：應用內訊息]** 修正字串格式的 BigInt 時間戳導致 dayjs 問題 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) - @mytharcher

- **[動作：自訂請求]** 自訂請求成功後，路由導航時 URL 中的變數解析問題 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) - @katherinehhh

- **[區塊：看板]** 修復看板中子表格的 UI 問題，並新增看板欄位寬度設定支援 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) - @katherinehhh

- **[工作流：審批]**
  - 在更新 UI 結構的遷移中新增 `try/catch` - @mytharcher

  - 修復區塊與關聯的錯誤 - @mytharcher

  - 重新載入記錄上的關聯 - @mytharcher

  - 避免使用者不存在時發生錯誤 - @mytharcher
