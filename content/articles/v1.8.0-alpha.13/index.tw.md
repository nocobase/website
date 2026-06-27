---
title: "NocoBase v1.8.0-alpha.13：支援在同一主題內分別回覆與轉寄郵件"
description: "v1.8.0-alpha.13 版本發行說明"
---

### 🚀 改進

- **[電子郵件管理]** 支援在同一主旨下分別回覆與轉寄郵件，作者：@jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 詳細區塊中子表格的背景顏色樣式問題 ([#7144](https://github.com/nocobase/nocobase/pull/7144))，作者：@katherinehhh

  - 引用 $nForm 變數時，Markdown 未即時反映變更 ([#7147](https://github.com/nocobase/nocobase/pull/7147))，作者：@katherinehhh

- **[資料視覺化]** 表格分頁問題 ([#7151](https://github.com/nocobase/nocobase/pull/7151))，作者：@2013xile

- **[資料來源管理器]** 修復了按需載入資料來源與資料表前綴設定組合使用時，導致「ConnectionManager.getConnection was called after the connection manager was closed」錯誤的問題。([#7150](https://github.com/nocobase/nocobase/pull/7150))，作者：@aaaaaajie
