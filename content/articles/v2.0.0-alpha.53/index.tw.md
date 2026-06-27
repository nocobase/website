---
title: "NocoBase v2.0.0-alpha.53：支援百分比欄位的數字格式化"
description: "v2.0.0-alpha.53 版本發行說明"
---

### 🚀 功能改進

- **[acl]** 支援 `acl.registerSnippet` API 以合併片段配置 ([#8155](https://github.com/nocobase/nocobase/pull/8155)) - @mytharcher

- **[client]** 支援百分比欄位的數字格式化 ([#8123](https://github.com/nocobase/nocobase/pull/8123)) - @katherinehhh

- **[flow-engine]** 支援動態隱藏步驟配置選單 ([#7924](https://github.com/nocobase/nocobase/pull/7924)) - @gchust

- **[區塊：卡片網格]** 優化卡片網格區塊樣式，實現更緊湊的版面 ([#8152](https://github.com/nocobase/nocobase/pull/8152)) - @katherinehhh

- **[AI 員工]** 啟用內建 AI 助理系統提示詞的編輯功能。<br/>優化 Nathan AI 助理的系統提示詞。<br/>修正伺服器無法讀取靜態檔案的問題。 ([#8097](https://github.com/nocobase/nocobase/pull/8097)) - @heziqiang

- **[工作流程]**
  - 為處理器準備階段中資料缺失的情況新增容錯邏輯，避免執行卡住 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) - @mytharcher

  - 在工作流程畫布上對關聯資料使用延遲載入，以提升效能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) - @mytharcher

- **[集合欄位：Markdown(Vditor)]** 在 readPretty 模式下，預設停用 Markdown 欄位的變數解析 ([#8145](https://github.com/nocobase/nocobase/pull/8145)) - @katherinehhh

### 🐛 錯誤修復

- **[flow-engine]** 修正附件檔案下載不正確的問題 ([#8154](https://github.com/nocobase/nocobase/pull/8154)) - @katherinehhh

- **[client]**
  - 修正當選項欄位存在時，關聯欄位下拉選單被停用的問題 ([#8153](https://github.com/nocobase/nocobase/pull/8153)) - @katherinehhh

  - 修正篩選表單區塊中，對單選欄位使用多選運算子時，輸入中文會清除現有選項的問題。 ([#8140](https://github.com/nocobase/nocobase/pull/8140)) - @gchust

  - 修正切換標籤欄位導致彈出視窗配置遺失的問題。 ([#8136](https://github.com/nocobase/nocobase/pull/8136)) - @gchust

- **[acl]** 修正當角色為 `root` 時，API `acl.can` 回傳 `null` 的問題 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) - @mytharcher

- **[database]** 當查詢具有多個篩選目標鍵的集合時，`filterByTk` 現在支援陣列 ([#7986](https://github.com/nocobase/nocobase/pull/7986)) - @chenos

- **[動作：匯入記錄]** 同步等待匯入觸發的 `afterCreate` 事件完成。 ([#8158](https://github.com/nocobase/nocobase/pull/8158)) - @2013xile

- **[集合欄位：序號]** 提升 plugin-field-sequence 在處理修復指令時的穩健性 ([#8139](https://github.com/nocobase/nocobase/pull/8139)) - @cgyrock

- **[工作流程：人工節點]** 修正人工待辦事項列表使用了錯誤 API 的問題 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) - @mytharcher

- **[HTTP 請求加密]** 在 qs 解析中對陣列格式使用方括號 - @chenos

- **[工作流程：審批]** 修正當工作流程被刪除時，取消執行會拋出錯誤的問題 - @mytharcher

- **[遷移管理器]** 修正遷移過程中資料內的換行符遺失的問題。 - @cgyrock
