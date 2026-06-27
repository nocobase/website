---
title: "NocoBase v1.7.0-beta.30：錯誤修復"
description: "v1.7.0-beta.30 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 當篩選表單的關聯欄位元件切換為資料選擇器時，缺少「允許複選」的配置項目 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) - 作者：@zhangzhonghe

  - 篩選表單中的表格選擇器，樣式異常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) - 作者：@zhangzhonghe

  - 在巢狀子頁面中，滑鼠懸停在「新增區塊」按鈕上時，區塊列表未顯示 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) - 作者：@zhangzhonghe

  - 當顯示來自關聯資料表的欄位時，多個關聯欄位提交失敗 ([#6833](https://github.com/nocobase/nocobase/pull/6833)) - 作者：@katherinehhh

  - 無法將其他按鈕拖曳到複製按鈕上 ([#6822](https://github.com/nocobase/nocobase/pull/6822)) - 作者：@katherinehhh

  - 唯讀模式下子表格分頁欄的樣式問題 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) - 作者：@katherinehhh

- **[資料庫]** 修正在 MariaDB 下，當外鍵為 bigInt 類型時，belongs-to 關聯在 appends 中未載入的問題 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) - 作者：@mytharcher

- **[資料表欄位：附件(URL)]** 附件(URL)欄位不應允許在聯動規則中配置值 ([#6831](https://github.com/nocobase/nocobase/pull/6831)) - 作者：@katherinehhh
