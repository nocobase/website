---
title: "NocoBase v2.1.0-beta.1：重構應用程式管理器以支援跨不同場景的多應用管理"
description: "v2.1.0-beta.1 版本發行說明"
---

### 🎉 新功能

- **[server]** 重構應用程式管理員，支援跨不同場景的多應用管理 ([#8043](https://github.com/nocobase/nocobase/pull/8043)) by @2013xile

### 🚀 改進

- **[client]**
  - 改進日期/時間欄位指派 UI，支援選擇相對日期/時間。([#8630](https://github.com/nocobase/nocobase/pull/8630)) by @gchust

  - 在指派欄位時，支援為關聯欄位指定標題欄位。([#8624](https://github.com/nocobase/nocobase/pull/8624)) by @gchust

### 🐛 錯誤修復

- **[flow-engine]**
  - 修復當存在搜尋關鍵字時，篩選欄位子選單無法展開的問題。([#8604](https://github.com/nocobase/nocobase/pull/8604)) by @gchust

  - 修復在彈出子表格編輯中，當配置了 createModelOptions 時，欄位刪除操作無效的問題 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh

- **[client]**
  - 修復將單筆記錄指派到多對多關聯欄位時產生錯誤結果的問題。([#8652](https://github.com/nocobase/nocobase/pull/8652)) by @gchust

  - 使用日期選擇器解析日期，並新增密碼強度驗證等 ([#8647](https://github.com/nocobase/nocobase/pull/8647)) by @jiannx

  - 修復表格操作欄中因隱藏連結操作導致的間距問題 ([#8646](https://github.com/nocobase/nocobase/pull/8646)) by @zhangzhonghe

  - 修復 `Action.Modal` 在某些互動後無法關閉的問題 ([#8642](https://github.com/nocobase/nocobase/pull/8642)) by @mytharcher

  - 修復當 markdown 項目渲染無效 Liquid 時的解析語法錯誤 ([#8637](https://github.com/nocobase/nocobase/pull/8637)) by @katherinehhh

  - 修復表單區塊中對多欄位屬性的不必要後端解析請求。([#8636](https://github.com/nocobase/nocobase/pull/8636)) by @gchust

  - 修復數字公式欄位缺少數字格式，以及日期公式欄位缺少日期格式設定的問題 ([#8625](https://github.com/nocobase/nocobase/pull/8625)) by @katherinehhh

  - 修復第一個表單項目頂部邊框渲染不完整的問題 ([#8623](https://github.com/nocobase/nocobase/pull/8623)) by @katherinehhh

  - 修復：對非樹狀集合隱藏「啟用樹狀表格」和「預設展開所有行」([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh

- **[utils]** 修復 `formula.js` 評估引擎的安全性問題 ([#8416](https://github.com/nocobase/nocobase/pull/8416)) by @mytharcher

- **[AI 員工]**
  - 修復 AI 網路搜尋的引用連結未在聊天框中顯示的問題 ([#8651](https://github.com/nocobase/nocobase/pull/8651)) by @cgyrock

  - 修復 openai API 參數錯誤 ([#8633](https://github.com/nocobase/nocobase/pull/8633)) by @cgyrock

- **[範本列印]** 修復具有相同鍵值的欄位導致渲染錯誤的問題 by @jiannx

- **[工作流：審批]**
  - 修復審批已刪除記錄時拋出錯誤的問題 by @mytharcher

  - 修復當工作流模式設為「儲存前」時，審批資料未在記錄詳情彈出視窗中顯示的問題 by @mytharcher
