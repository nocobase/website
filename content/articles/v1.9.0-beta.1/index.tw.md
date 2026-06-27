---
title: "NocoBase v1.9.0-beta.1：新增事件佇列以處理佇列中的訊息"
description: "v1.9.0-beta.1 版本發行說明"
---

### 🎉 新功能

- **[伺服器]** 新增事件佇列以處理佇列中的訊息 ([#6819](https://github.com/nocobase/nocobase/pull/6819)) - 作者：@mytharcher

### 🚀 改進

- **[工作流程]** 將通用元件移至基礎插件 ([#7140](https://github.com/nocobase/nocobase/pull/7140)) - 作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 欄位變更後，依賴該欄位的資料範圍應自動清除已選值 ([#7161](https://github.com/nocobase/nocobase/pull/7161)) - 作者：@zhangzhonghe

  - 修正設定表格欄寬無效的問題 ([#7158](https://github.com/nocobase/nocobase/pull/7158)) - 作者：@zhangzhonghe

  - 修正「複製」按鈕彈窗中篩選表單的錯誤問題 ([#7154](https://github.com/nocobase/nocobase/pull/7154)) - 作者：@zhangzhonghe

  - 修正配置欄位中儲存一對一關聯時發生的錯誤。([#7153](https://github.com/nocobase/nocobase/pull/7153)) - 作者：@aaaaaajie

- **[未定義]** 修正 e2e.yml ([#7160](https://github.com/nocobase/nocobase/pull/7160)) - 作者：@mytharcher

- **[日曆]** 在日曆區塊中將預設週起始日設為「星期一」 ([#7171](https://github.com/nocobase/nocobase/pull/7171)) - 作者：@katherinehhh

- **[工作流程]** 修正行動裝置上需多次左滑才能返回上一頁的問題 ([#7165](https://github.com/nocobase/nocobase/pull/7165)) - 作者：@zhangzhonghe

- **[檔案管理員]**
  - 修正因 ESM 套件導致的建置錯誤 ([#7169](https://github.com/nocobase/nocobase/pull/7169)) - 作者：@mytharcher

  - 修正 MIME 類型偵測 ([#7164](https://github.com/nocobase/nocobase/pull/7164)) - 作者：@mytharcher

- **[工作流程：人工節點]** 修正錯誤匯入變數 ([#7156](https://github.com/nocobase/nocobase/pull/7156)) - 作者：@mytharcher

- **[公開表單]** 修正公開表單中「僅日期」欄位無法選取日期的問題。([#7168](https://github.com/nocobase/nocobase/pull/7168)) - 作者：@katherinehhh

- **[工作流程：審核]**
  - 因超時移除修補 schema 的交易 - 作者：@mytharcher

  - 修正撤回後關聯未載入的問題 - 作者：@mytharcher

  - 修正審核刪除時拋出的錯誤 - 作者：@mytharcher

  - 修正提交時更新關聯的問題 - 作者：@mytharcher
