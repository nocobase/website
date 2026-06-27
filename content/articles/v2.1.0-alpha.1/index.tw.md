---
title: "NocoBase v2.1.0-alpha.1：改進日期/時間欄位指派 UI，支援選擇相對日期/時間"
description: "v2.1.0-alpha.1 版本發行說明"
---

### 🎉 新功能

- **[操作：批次編輯]** 批次編輯 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 改進

- **[客戶端]**
  - 改善日期/時間欄位指派 UI，支援選擇相對日期/時間。([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust

  - 在指派欄位時，支援為關聯欄位指定標題欄位。([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

  - 表格 2.0 支援拖曳排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx

  - 將欄位指派與預設值設定移至表單層級配置。([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos

- **[本地化]** 自動建立缺失的 i18n 鍵 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 錯誤修復

- **[流程引擎]** 修復當存在搜尋關鍵字時，篩選欄位子選單無法展開的問題。([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust

- **[客戶端]**
  - 修復將單筆記錄指派到多對多關聯欄位時產生錯誤結果的問題。([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust

  - 使用日期選擇器解析日期，並新增密碼強度驗證等 ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx

  - 修復表格操作欄中隱藏連結操作導致的間距問題 ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe

  - 修復當 Markdown 項目渲染無效 Liquid 時的解析語法錯誤 ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh

  - 修復表單區塊中對多欄位屬性不必要的後端解析請求。([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust

  - 修復在某些互動後 `Action.Modal` 無法關閉的問題 ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher

  - 修復數字公式欄位缺少數字格式，以及日期公式欄位缺少日期格式設定的問題 ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh

  - 修復第一個表單項目頂部邊框渲染不完整的問題 ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh

  - 修復編輯表單中，已清除的關聯附件欄位在提交後未儲存的問題 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh

  - 修復當標題欄位為外來鍵時，關聯下拉選單中篩選資料不正確的問題 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh

  - 修復在記錄選擇器欄位元件中編輯後無法恢復已選資料的問題 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh

  - 修復當關聯欄位切換模式時，欄位元件選項未即時重新整理的問題 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh

- **[工具]** 修復 `formula.js` 評估引擎的安全性問題 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher

- **[AI 員工]**
  - 修復來自 AI 網路搜尋的引用連結未在聊天框中顯示的問題 ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock

  - 修復 OpenAI API 參數錯誤 ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock

- **[檔案管理]** 修復檔案欄位元件在停用時仍可開啟選擇器對話框的問題 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh
