---
title: "NocoBase v2.0.0-beta.23：支援可配置區塊高度"
description: "v2.0.0-beta.23 版本發行說明"
---

### 🎉 新功能

- **[區塊：卡片區塊]** 支援可設定的區塊高度 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) - @katherinehhh

- **[動作：批次編輯]** 批次編輯 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) - @jiannx

### 🚀 改進

- **[客戶端]**
  - 表格 2.0 支援拖曳排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) - @jiannx

  - 將欄位指派與預設值設定移至表單層級配置。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) - @chenos

- **[本地化]** 自動建立遺失的 i18n 鍵 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) - @jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在關聯下拉選單中，當標題欄位為外來鍵時，篩選資料不正確的問題 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) - @katherinehhh

  - 修正編輯表單提交後，已清除的關聯附件欄位未儲存的問題 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) - @katherinehhh

  - 修正關聯欄位切換模式時，欄位元件選項未即時更新的問題 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) - @katherinehhh

  - 修正 JS 欄位編輯器中點擊「執行」後，表格欄位未重新渲染的問題。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) - @gchust

  - 修正記錄選擇器欄位元件在編輯後，無法恢復已選資料的問題 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) - @katherinehhh

- **[檔案管理]** 修正檔案欄位元件在停用時仍可開啟選擇器對話框的問題 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) - @katherinehhh

- **[資料視覺化：ECharts]** 修正 ECharts 拼寫錯誤 - @heziqiang

- **[工作流程：審核]**
  - 修正「我的申請」詳細彈窗中缺少值的問題 - @mytharcher

  - 修正於「儲存前」模式執行時拋出錯誤的問題 - @mytharcher
