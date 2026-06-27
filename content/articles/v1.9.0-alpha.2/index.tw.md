---
title: "NocoBase v1.9.0-alpha.2：支援為子應用程式設定獨立驗證密鑰"
description: "v1.9.0-alpha.2 版本發行說明"
---

### 🎉 新功能

- **[多應用管理器]** 支援為子應用設定獨立的認證密鑰 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) - @mytharcher

- **[工作流：抄送]** 在工作流中新增抄送節點 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) - @mytharcher

- **[工作流：審批]** 為觸發器新增初始化器 - @mytharcher

### 🚀 改進

- **[集合欄位：公式]** 新增更多可計算的介面 ([#7215](https://github.com/nocobase/nocobase/pull/7215)) - @mytharcher

- **[工作流]**
  - 當因狀態不應執行時，改為記錄日誌而非拋出錯誤 ([#7217](https://github.com/nocobase/nocobase/pull/7217)) - @mytharcher

  - 在邏輯計算的字串比較前，先將運算元轉換為字串 ([#7190](https://github.com/nocobase/nocobase/pull/7190)) - @mytharcher

- **[通知：應用內訊息]** 優化行動裝置訊息頁面的字型大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) - @zhangzhonghe

- **[多應用管理器]**
  - 為子應用新增資料庫與授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) - @mytharcher

  - 為子應用新增資料庫與授權選項 ([#7184](https://github.com/nocobase/nocobase/pull/7184)) - @mytharcher

- **[集合欄位：代碼]** 新增縮排設定 - @mytharcher

- **[工作流：審批]** 支援在相關資料刪除時一併刪除審批 - @mytharcher

- **[認證：釘釘]** 支援設定回呼 URL 的通訊協定與連接埠號碼 - @2013xile

### 🐛 錯誤修復

- **[客戶端]**
  - 附件欄位無法在聯動規則中被選為變數的問題 ([#7213](https://github.com/nocobase/nocobase/pull/7213)) - @zhangzhonghe

  - 篩選折疊：在為欄位設定預設值後，頁面初始化時未觸發篩選 ([#7206](https://github.com/nocobase/nocobase/pull/7206)) - @zhangzhonghe

  - 聯動規則中關聯欄位的顯示問題 ([#7220](https://github.com/nocobase/nocobase/pull/7220)) - @katherinehhh

  - 編輯表單中，當選擇欄位同時設定了值與選項時，賦值失敗 ([#7209](https://github.com/nocobase/nocobase/pull/7209)) - @katherinehhh

  - 在列表區塊中使用看板排序欄位賦值時發生錯誤 ([#7208](https://github.com/nocobase/nocobase/pull/7208)) - @katherinehhh

  - 彈出動作：切換分頁後頁面顯示不如預期 ([#7212](https://github.com/nocobase/nocobase/pull/7212)) - @zhangzhonghe

  - 切換子選單時，瀏覽器分頁標題未同步更新 ([#7207](https://github.com/nocobase/nocobase/pull/7207)) - @zhangzhonghe

  - 修復 iOS 上下拉式選擇元件被鍵盤遮擋的問題 ([#7149](https://github.com/nocobase/nocobase/pull/7149)) - @zhangzhonghe

  - 表單中關聯欄位集合內的核取方塊欄位顯示不正確 ([#7176](https://github.com/nocobase/nocobase/pull/7176)) - @zhangzhonghe

  - 修復點擊按鈕無法開啟彈出視窗的問題 ([#7180](https://github.com/nocobase/nocobase/pull/7180)) - @zhangzhonghe

- **[acl]** 修正在角色聯合模式下，刪除包含根角色的角色時發生的錯誤 ([#7198](https://github.com/nocobase/nocobase/pull/7198)) - @aaaaaajie

- **[資料庫]** 修復檢視表的欄位未在區塊中顯示的問題 ([#7162](https://github.com/nocobase/nocobase/pull/7162)) - @aaaaaajie

- **[多應用管理器]** 修正認證選項出現在非預期位置的問題 ([#7210](https://github.com/nocobase/nocobase/pull/7210)) - @mytharcher

- **[通知：應用內訊息]** 修復字串格式的 BigInt 時間戳導致 dayjs 問題 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) - @mytharcher

- **[認證]** 修復登入頁面無法捲動的問題 ([#7159](https://github.com/nocobase/nocobase/pull/7159)) - @zhangzhonghe

- **[動作：自訂請求]** 自訂請求成功後，路由導航時 URL 中的變數解析問題 ([#7186](https://github.com/nocobase/nocobase/pull/7186)) - @katherinehhh

- **[區塊：看板]** 修復看板中的子表格 UI 問題，並新增看板欄位寬度設定支援 ([#7189](https://github.com/nocobase/nocobase/pull/7189)) - @katherinehhh

- **[工作流：人工節點]** 修復使用變數時拋出錯誤的問題 ([#7177](https://github.com/nocobase/nocobase/pull/7177)) - @mytharcher

- **[範本列印]** 為 rootDataType 欄位新增遷移腳本 - @jiannx

- **[工作流：審批]**
  - 修復提交審批時的關聯問題 - @mytharcher

  - 修復刪除記錄時的異常 - @mytharcher

  - 修復無審批人時已核准分支未執行的問題 - @mytharcher

  - 避免使用者不存在時發生錯誤 - @mytharcher

  - 修復區塊與關聯的錯誤 - @mytharcher

  - 在更新 UI 結構描述的遷移中新增 `try/catch` - @mytharcher

  - 重新載入記錄上的關聯 - @mytharcher
