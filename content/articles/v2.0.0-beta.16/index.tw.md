---
title: "NocoBase v2.0.0-beta.16：新增移動節點 API"
description: "v2.0.0-beta.16 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 新增子表格（彈窗編輯）欄位元件 ([#8280](https://github.com/nocobase/nocobase/pull/8280)) - 作者：@katherinehhh

- **[工作流]** 新增移動節點的 API ([#8507](https://github.com/nocobase/nocobase/pull/8507)) - 作者：@mytharcher

### 🚀 改進

- **[客戶端]**
  - 更新儲存格時，避免整個表格重新渲染 ([#8349](https://github.com/nocobase/nocobase/pull/8349)) - 作者：@katherinehhh

  - 改善多對多子表單，使其初始化時包含一個預設項目，並在留空時避免建立記錄 ([#8458](https://github.com/nocobase/nocobase/pull/8458)) - 作者：@katherinehhh

- **[檔案管理]** 為檔案管理新增可擴展的預覽器 ([#8501](https://github.com/nocobase/nocobase/pull/8501)) - 作者：@mytharcher

- **[工作流]** 變更工作流子頁面的路由路徑，使所有工作流頁面均位於 `/admin/settings/workflow` 前綴之下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) - 作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復篩選日期時間值中時間重複的問題 ([#8506](https://github.com/nocobase/nocobase/pull/8506)) - 作者：@zhangzhonghe

  - 修復一個問題，該問題導致無法在多層級多對多子表單欄位的聯動規則中使用表單變數賦值 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) - 作者：@gchust

  - 修復跨多層級彈窗及跨區塊變更後，資料未重新整理的問題 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) - 作者：@gchust

  - 修復唯讀模式下的子詳細資料，在編輯表單中無法正確顯示的問題 ([#8469](https://github.com/nocobase/nocobase/pull/8469)) - 作者：@katherinehhh

  - 修復可選 targetKey 的精煉邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) - 作者：@katherinehhh

  - 修復可編輯子表格中關聯欄位 Select 的篩選參數錯誤 ([#8335](https://github.com/nocobase/nocobase/pull/8335)) - 作者：@katherinehhh

- **[流程引擎]** 修復當外部資料來源的 filterTargetKey 為單元素陣列時，FilterByTK 的問題 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) - 作者：@katherinehhh

- **[AI 員工]** 修復 AI 建模與資料來源管理之間可選欄位配置不一致的問題 ([#8488](https://github.com/nocobase/nocobase/pull/8488)) - 作者：@cgyrock

- **[郵件管理]** 修復選取文字時，郵件正文無法收合的問題。修復下載附件失敗的問題 - 作者：@jiannx
