---
title: "NocoBase v2.0.0-alpha.34：錯誤修復"
description: "v2.0.0-alpha.34 版本發布說明"
---

### 🚀 改進

- **[database]** 為 MariaDB 連線實例新增 `multipleStatements` 選項，以支援在單次查詢中執行多條語句 ([#7781](https://github.com/nocobase/nocobase/pull/7781)) - @mytharcher

### 🐛 錯誤修復

- **[flow-engine]** 修正在表格區塊切換頁面後，操作按鈕未正確更新，導致其功能與當前頁面資料不符的問題 ([#7779](https://github.com/nocobase/nocobase/pull/7779)) - @gchust

- **[client]**
  - 修正「超出最大呼叫堆疊大小」錯誤 ([#7780](https://github.com/nocobase/nocobase/pull/7780)) - @zhangzhonghe

  - 修正關聯欄位標題欄位的省略號未生效問題 ([#7778](https://github.com/nocobase/nocobase/pull/7778)) - @katherinehhh

  - 修正更新記錄操作的聯動規則未生效問題 ([#7774](https://github.com/nocobase/nocobase/pull/7774)) - @gchust

- **[database]** 修正當欄位名稱使用蛇形命名法（snake_case）時，索引欄位偵測不正確的問題 ([#7776](https://github.com/nocobase/nocobase/pull/7776)) - @2013xile

- **[Mobile (已棄用)]** 修正行動裝置上日期欄位預設值彈窗無法選取日期的問題 ([#7783](https://github.com/nocobase/nocobase/pull/7783)) - @zhangzhonghe
