---
title: "NocoBase v1.6.31：補全所有遺漏的 en-US 地區設定鍵值"
description: "v1.6.31 版本發布說明"
---

### 🚀 改進

- **[Workflow]** 補全所有遺漏的 en-US 地區設定鍵值 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

### 🐛 錯誤修復

- **[database]** 處理欄位匯入期間的空字串儲存格，以防止錯誤 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie

- **[client]**
  - 關聯選擇記錄表格未過濾已關聯的記錄 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh

  - 在子表單（subForm）中公開關聯欄位時，關聯資料未提交 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh

  - 可拖曳排序欄位未正確顯示可用選項 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh

- **[Workflow]** 修正集合事件（collection event）的堆疊限制運作不正確的問題 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher

- **[Block: Action panel]** 從掃描器讀取路由基底名稱（route basename），以適應桌面環境。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66

- **[Workflow: Manual node]** 修正顯示未處理項目時的渲染錯誤 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher

- **[Workflow: Approval]** 修正代理人的指派範圍，並將其加入其他指派人員 by @mytharcher


