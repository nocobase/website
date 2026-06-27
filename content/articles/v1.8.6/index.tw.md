---
title: "NocoBase v1.8.6：錯誤修復"
description: "v1.8.6 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復錯誤：無法解析 'react-device-detect'（[#7224](https://github.com/nocobase/nocobase/pull/7224)）by @zhangzhonghe

  - 關聯欄位在聯動規則中的顯示問題（[#7220](https://github.com/nocobase/nocobase/pull/7220)）by @katherinehhh

- **[資料庫]** 修復啟用外部資料來源表格簡易分頁時的錯誤（[#7222](https://github.com/nocobase/nocobase/pull/7222)）by @aaaaaajie

- **[集合欄位：排序]** 複製記錄時缺少排序欄位選擇（[#7116](https://github.com/nocobase/nocobase/pull/7116)）by @katherinehhh

- **[工作流程：審核]**
  - 為記錄列表中已刪除的審核項目增加容錯處理 by @mytharcher

  - 修復提交審核時多層級關聯的問題 by @mytharcher

  - 修復刪除記錄時的異常 by @mytharcher
