---
title: "NocoBase v2.0.0-alpha.46：支援動態切換流程模型類別"
description: "v2.0.0-alpha.46 版本發行說明"
---

### 🚀 改進項目

- **[流程引擎]** 支援動態切換流程模型類別 ([#7952](https://github.com/nocobase/nocobase/pull/7952)) by @gchust

- **[AI 員工]** AI 員工插件新增升級鉤子 ([#7951](https://github.com/nocobase/nocobase/pull/7951)) by @heziqiang

- **[非同步任務管理器]** 強化非同步任務的錯誤訊息，為使用者提供任務失敗的具體原因 ([#7796](https://github.com/nocobase/nocobase/pull/7796)) by @mytharcher

- **[工作流：審批]**
  - 使手動執行（或由子流程節點觸發）的負載與記錄或主鍵相容。避免觸發上下文中的一致性問題。 by @mytharcher

  - 減少審批彈窗中載入的關聯，以提供更佳的效能 by @mytharcher

  - 修正 AssigneeSelect 中的變數選擇，限制僅能選取使用者集合的主鍵或外鍵 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]** 修正詳細區塊中文字欄位在內容超出寬度時的自動換行問題 ([#7955](https://github.com/nocobase/nocobase/pull/7955)) by @katherinehhh

- **[非同步任務管理器]** 為 `asyncTasks` 集合新增遷移規則，避免非同步任務記錄被遷移 ([#7950](https://github.com/nocobase/nocobase/pull/7950)) by @mytharcher

- **[檔案管理員]** 修正將檔案上傳至指定儲存空間而非預設儲存空間的問題 ([#7947](https://github.com/nocobase/nocobase/pull/7947)) by @katherinehhh

- **[工作流：審批]** 修正語言檔案 by @mytharcher
