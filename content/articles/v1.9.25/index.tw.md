---
title: "NocoBase v1.9.25：為處理器準備階段添加資料缺失的容錯邏輯"
description: "v1.9.25 版本發行說明"
---

### 🚀 改進

- **[工作流程]**
  - 在處理器準備階段新增資料缺失的容錯邏輯，避免執行卡住 ([#8156](https://github.com/nocobase/nocobase/pull/8156)) - @mytharcher

  - 在工作流程畫布上對關聯資料使用延遲載入，以提升效能 ([#8142](https://github.com/nocobase/nocobase/pull/8142)) - @mytharcher

### 🐛 錯誤修復

- **[acl]** 修復當角色為 `root` 時，API `acl.can` 回傳 `null` 的問題 ([#8150](https://github.com/nocobase/nocobase/pull/8150)) - @mytharcher

- **[工作流程：人工節點]** 修復人工待辦事項列表使用錯誤 API 的問題 ([#8144](https://github.com/nocobase/nocobase/pull/8144)) - @mytharcher

- **[HTTP 請求加密]** 在 qs 解析中對陣列格式使用方括號 - @chenos

- **[工作流程：審批]** 修復當工作流程被刪除時，取消執行會拋出錯誤的問題 - @mytharcher

- **[遷移管理器]** 修復遷移過程中資料內的換行符遺失的問題 - @cgyrock
