---
title: "NocoBase v1.8.31：錯誤修復"
description: "v1.8.31 版本發行說明"
---

### 🐛 錯誤修復

- **[資料庫]** 修復當運算子 `$in` 遇到 `null` 值時拋出錯誤的問題 ([#7610](https://github.com/nocobase/nocobase/pull/7610))，作者：@mytharcher

- **[工作流程：審核]**
  - 修復審核提交後因資料庫錯誤導致交易未正確回滾而引發的交易超時問題，作者：@mytharcher

  - 修復審核提交表單中變數未被解析的問題，作者：@mytharcher
