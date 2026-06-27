---
title: "NocoBase v2.1.0-alpha.36：為 Markdown 區塊新增客戶端 v2 支援"
description: "v2.1.0-alpha.36 版本發行說明"
---

### 🎉 新功能

- **[區塊：Markdown]** 為 Markdown 區塊新增客戶端 v2 支援 ([#9487](https://github.com/nocobase/nocobase/pull/9487))，作者：@jiannx

- **[區塊：列表]** 列表區塊支援 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486))，作者：@jiannx

### 🚀 改進

- **[流程引擎]** 關閉含有未儲存資料的事件流程配置頁面時，新增未儲存變更確認訊息。([#9449](https://github.com/nocobase/nocobase/pull/9449))，作者：@gchust

- **[CLI]** 將設定與管理工作流程遷移至 Inquirer，改善 NocoBase CLI 提示體驗，並修復相關的安裝、技能及 Docker 執行環境問題。([#9452](https://github.com/nocobase/nocobase/pull/9452))，作者：@chenos

- **[資料來源管理器]** 優化資料建模 API，支援使用 AI 建立註解集合、為外部資料來源配置關聯欄位，以及設定欄位驗證規則 ([#9480](https://github.com/nocobase/nocobase/pull/9480))，作者：@2013xile

- **[區塊：網格卡片]** 更新網格卡片外掛以支援 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484))，作者：@jiannx

- **[區塊：iframe]** 為 iframe 區塊新增 v2 支援。([#9485](https://github.com/nocobase/nocobase/pull/9485))，作者：@jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 修正子表格中僅顯示的關聯欄位在重新整理後無法顯示或無法點擊的問題。([#9453](https://github.com/nocobase/nocobase/pull/9453))，作者：@jiannx

  - 為表單提交動作新增「提交成功後」設定。([#9414](https://github.com/nocobase/nocobase/pull/9414))，作者：@jiannx

- **[client-v2]** 修正表格區塊中關聯欄位的標題欄位選項清單為空的問題 ([#9490](https://github.com/nocobase/nocobase/pull/9490))，作者：@katherinehhh

- **[流程引擎]** 修正子模型選單中關聯欄位子選單不穩定的問題 ([#9417](https://github.com/nocobase/nocobase/pull/9417))，作者：@jiannx

- **[檔案管理員]** 修正檔案管理員 `tx-cos` 上傳缺少檔案大小元資料的問題。([#9499](https://github.com/nocobase/nocobase/pull/9499))，作者：@mytharcher

- **[集合欄位：簽名]** 解決行動裝置上簽名框顯示問題，作者：@chenzhizdt
