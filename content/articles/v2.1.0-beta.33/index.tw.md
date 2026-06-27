---
title: "NocoBase v2.1.0-beta.33：為 Markdown 區塊新增客戶端 v2 支援"
description: "v2.1.0-beta.33 版本發行說明"
---

### 🎉 新功能

- **[區塊：Markdown]** 為 Markdown 區塊新增客戶端 v2 支援 ([#9487](https://github.com/nocobase/nocobase/pull/9487))，作者：@jiannx

- **[區塊：列表]** 列表區塊支援 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486))，作者：@jiannx

- **[日曆]** 為日曆插件新增客戶端 v2 支援。([#9464](https://github.com/nocobase/nocobase/pull/9464))，作者：@jiannx

- **[區塊：樹狀]** 為樹狀篩選區塊新增 client-v2 支援。([#9466](https://github.com/nocobase/nocobase/pull/9466))，作者：@jiannx

### 🚀 改進

- **[流程引擎]** 在關閉含有未儲存資料的事件流程配置頁面時，新增未儲存變更的確認訊息。([#9449](https://github.com/nocobase/nocobase/pull/9449))，作者：@gchust

- **[資料來源管理器]** 優化資料建模 API，支援使用 AI 建立評論集合、為外部資料來源配置關聯欄位，以及設定欄位驗證規則 ([#9480](https://github.com/nocobase/nocobase/pull/9480))，作者：@2013xile

- **[區塊：網格卡片]** 更新網格卡片插件以支援 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484))，作者：@jiannx

- **[區塊：iframe]** 為 iframe 區塊新增 v2 支援。([#9485](https://github.com/nocobase/nocobase/pull/9485))，作者：@jiannx

- **[AI 員工]** AI 員工平行對話互動與效能優化 ([#9462](https://github.com/nocobase/nocobase/pull/9462))，作者：@cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 為表單提交動作新增「提交成功後」設定。([#9414](https://github.com/nocobase/nocobase/pull/9414))，作者：@jiannx

  - 修復防止在表格中開啟關聯欄位的快速編輯 ([#9469](https://github.com/nocobase/nocobase/pull/9469))，作者：@katherinehhh

  - 修復子表格中僅顯示的關聯欄位在重新整理後無法顯示或無法點擊的問題。([#9453](https://github.com/nocobase/nocobase/pull/9453))，作者：@jiannx

  - 修復無法移除舊版預設值設定的問題。([#9470](https://github.com/nocobase/nocobase/pull/9470))，作者：@gchust

  - 修復 v2 資料區塊中的多選欄位應顯示選項標籤而非數值的問題 ([#9472](https://github.com/nocobase/nocobase/pull/9472))，作者：@katherinehhh

- **[客戶端-v2]**
  - 修復表格區塊中關聯欄位的標題欄位選項清單為空的問題 ([#9490](https://github.com/nocobase/nocobase/pull/9490))，作者：@katherinehhh

  - 在 v2 佈局中篩選 v1 選單後，保留空的分組 ([#9478](https://github.com/nocobase/nocobase/pull/9478))，作者：@zhangzhonghe

- **[流程引擎]** 修復子模型選單中關聯欄位子選單不穩定的問題 ([#9417](https://github.com/nocobase/nocobase/pull/9417))，作者：@jiannx

- **[檔案管理員]** 修復檔案管理員 `tx-cos` 上傳缺少檔案大小元資料的問題。([#9499](https://github.com/nocobase/nocobase/pull/9499))，作者：@mytharcher

- **[AI 員工]** 修復 plugin-ai 載入錯誤 ([#9483](https://github.com/nocobase/nocobase/pull/9483))，作者：@cgyrock

- **[區塊：多步驟表單]** 修復 v1 步驟表單區塊啟用全高度時的捲軸問題 ([#9468](https://github.com/nocobase/nocobase/pull/9468))，作者：@katherinehhh

- **[工作流：Webhook]** 修復建立回應節點時被 `statusCode` 配置驗證攔截的問題，作者：@mytharcher

- **[集合欄位：簽名]** 解決行動裝置上簽名框顯示問題，作者：@chenzhizdt
