---
title: "NocoBase v1.9.0-alpha.1：新增事件佇列以處理佇列中的訊息"
description: "v1.9.0-alpha.1 版本發行說明"
---

### 🎉 新功能

- **[伺服器]** 新增事件佇列以處理佇列中的訊息 ([#6819](https://github.com/nocobase/nocobase/pull/6819)) - 貢獻者 @mytharcher

### 🚀 改進

- **[工作流程]** 將通用元件移至基礎插件 ([#7140](https://github.com/nocobase/nocobase/pull/7140)) - 貢獻者 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 欄位變更後，依賴該欄位的資料範圍應自動清除已選值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) - 貢獻者 @zhangzhonghe

  - 修正設定表格欄寬無效的問題 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) - 貢獻者 @zhangzhonghe

  - 修正配置欄位中儲存一對一關聯時發生的錯誤 ([#7153](https://github.com/nocobase/nocobase/pull/7153)) - 貢獻者 @aaaaaajie

  - 修正「複製」按鈕彈窗中篩選表單的錯誤問題 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) - 貢獻者 @zhangzhonghe

- **[未定義]** 修正 e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) - 貢獻者 @mytharcher

- **[檔案管理]**
  - 修正因 ESM 套件導致的建置錯誤 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) - 貢獻者 @mytharcher

  - 修正 MIME 類型偵測 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) - 貢獻者 @mytharcher

- **[公開表單]** 修正公開表單中「僅日期」欄位無法選取日期的問題 ([#7168](https://github.com/nocobase/nocobase/pull/7168)) - 貢獻者 @katherinehhh

- **[日曆]** 將日曆區塊的預設週起始日設為「星期一」 ([#7171](https://github.com/nocobase/nocobase/pull/7171)) - 貢獻者 @katherinehhh

- **[工作流程：人工節點]** 修正錯誤匯入變數的問題 ([#7156](https://github.com/nocobase/nocobase/pull/7156)) - 貢獻者 @mytharcher

- **[工作流程]** 修正行動裝置上需多次左滑才能返回上一頁的問題 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) - 貢獻者 @zhangzhonghe

- **[工作流程：審核]**
  - 修正提交時更新關聯資料的問題 - 貢獻者 @mytharcher

  - 修正審核刪除時引發的錯誤 - 貢獻者 @mytharcher

  - 修正撤回後關聯資料未載入的問題 - 貢獻者 @mytharcher

- **[郵件管理]**
  - 選取行後，設定「已讀」與「未讀」 - 貢獻者 @jiannx

  - 子郵件內容無法篩選 - 貢獻者 @jiannx
