---
title: "NocoBase v1.7.19：支援從環境變數新增連線池選項"
description: "v1.7.19 版本發行說明"
---

### 🚀 功能改進

- **[資料庫]** 支援從環境變數新增連線池選項 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) - @mytharcher

- **[工作流]**
  - 透過排除 JSON 欄位來提升執行記錄列表的載入效能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) - @mytharcher

  - 為節點測試新增日誌 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) - @mytharcher

- **[多應用管理器]** 為多應用管理新增篩選支援 ([#7124](https://github.com/nocobase/nocobase/pull/7124)) - @katherinehhh

- **[工作流：審批]** 將時間軸中的時間改為絕對時間 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 在關聯檢視中設定欄位顯示名稱無效 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) - @aaaaaajie

  - 詳細區塊中子表格的背景顏色樣式問題 ([#7144](https://github.com/nocobase/nocobase/pull/7144)) - @katherinehhh

  - 工作流人工節點 UI 配置：連動規則無法選取「目前表單」變數 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) - @zhangzhonghe

  - 關聯欄位預設值覆蓋子表格中的現有資料 ([#7120](https://github.com/nocobase/nocobase/pull/7120)) - @katherinehhh

  - 引用 $nForm 變數時，Markdown 未即時反映變更 ([#7147](https://github.com/nocobase/nocobase/pull/7147)) - @katherinehhh

  - 基於 'x-acl-action' 設定的容錯處理 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) - @mytharcher

- **[工具函式]** 使用「精確日期」變數篩選 DateOnly 或 Datetime（不含時區）時的過濾問題 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) - @katherinehhh

- **[工作流]** 修正循環引用導致的錯誤 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) - @mytharcher

- **[密碼策略]** 支援永久鎖定使用者帳號 - @2013xile

- **[工作流：子流程]** 修正叢集模式下的問題 - @mytharcher

- **[工作流：審批]**
  - 從篩選器中移除不可篩選的欄位 - @mytharcher

  - 新增表單佈局設定 - @mytharcher
