---
title: "NocoBase v1.7.20：錯誤修復"
description: "v1.7.20 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 欄位變更後，依賴該欄位的資料範圍應自動清除已選值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) - @zhangzhonghe

  - 修正設定表格欄位寬度無效的問題 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) - @zhangzhonghe

  - 修正「複製」按鈕彈窗中篩選表單的錯誤問題 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) - @zhangzhonghe

  - 修正配置欄位中儲存一對一關聯時發生的錯誤 ([#7153](https://github.com/nocobase/nocobase/pull/7153)) - @aaaaaajie

- **[未定義]** 修正 e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) - @mytharcher

- **[檔案管理]**
  - 修正 MIME 類型偵測 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) - @mytharcher

  - 修正因 ESM 套件導致的建置錯誤 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) - @mytharcher

- **[公開表單]** 修正公開表單中「僅日期」欄位無法選取日期的問題 ([#7168](https://github.com/nocobase/nocobase/pull/7168)) - @katherinehhh

- **[工作流程]** 修正行動裝置上需多次左滑才能返回上一頁的問題 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) - @zhangzhonghe

- **[資料視覺化]** 表格分頁問題 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) - @2013xile

- **[工作流程：審核]**
  - 修正撤回後關聯未載入的問題 - @mytharcher

  - 因逾時移除修補 schema 的交易機制 - @mytharcher

  - 修正審核刪除時拋出的錯誤 - @mytharcher

  - 修正提交時更新關聯的問題 - @mytharcher
