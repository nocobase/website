---
title: "NocoBase v1.4.30：錯誤修復"
description: "v1.4.30 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]** 修復表格中關聯欄位顯示「N/A」的問題 ([#6109](https://github.com/nocobase/nocobase/pull/6109)) - @zhangzhonghe

- **[集合：樹狀結構]** 禁止將樹狀集合的節點設為其自身的父節點 ([#6122](https://github.com/nocobase/nocobase/pull/6122)) - @2013xile

- **[工作流程：HTTP 請求節點]** 修復請求節點在迴圈中處於待處理狀態的問題 ([#6120](https://github.com/nocobase/nocobase/pull/6120)) - @mytharcher

- **[工作流程：測試套件]** 修復模擬資料來源測試案例依賴 ACL 的問題 ([#6116](https://github.com/nocobase/nocobase/pull/6116)) - @mytharcher

- **[備份管理器]** 修復部分備份檔案無法正確解壓縮與還原的問題 - @gchust
