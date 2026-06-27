---
title: "NocoBase v1.6.26：Iframe 區塊支援配置 allow 屬性"
description: "v1.6.26 版本發行說明"
---

### 🎉 新功能

- **[區塊：iframe]** iframe 區塊支援設定 allow 屬性 ([#6824](https://github.com/nocobase/nocobase/pull/6824)) - 貢獻者：@zhangzhonghe

- **[範本列印]** 功能：在範本列印中支援 `{ label, value }` 選擇選項。 - 貢獻者：@sheldon66

### 🐛 錯誤修復

- **[客戶端]**
  - 在巢狀子頁面中，滑鼠懸停在「新增區塊」按鈕上時，區塊列表未顯示 ([#6832](https://github.com/nocobase/nocobase/pull/6832)) - 貢獻者：@zhangzhonghe

  - 當篩選表單的關聯欄位元件變更為資料選擇器時，缺少「允許複選」配置項目 ([#6656](https://github.com/nocobase/nocobase/pull/6656)) - 貢獻者：@zhangzhonghe

  - 表單欄位違反驗證規則時，顯示多條錯誤訊息 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) - 貢獻者：@katherinehhh

  - 在子表格內的子表單（彈窗）中配置聯動規則的問題 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) - 貢獻者：@katherinehhh

  - 修復一對多欄位的子欄位無法在篩選表單中作為篩選選項的問題 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) - 貢獻者：@zhangzhonghe

  - 唯讀模式下子表格分頁欄的樣式問題 ([#6830](https://github.com/nocobase/nocobase/pull/6830)) - 貢獻者：@katherinehhh

  - 篩選表單中的表格選擇器樣式異常 ([#6827](https://github.com/nocobase/nocobase/pull/6827)) - 貢獻者：@zhangzhonghe

- **[資料庫]**
  - 修正在 MariaDB 下，當外鍵為 bigInt 類型時，belongs-to 關聯未在 appends 中載入的問題 ([#6823](https://github.com/nocobase/nocobase/pull/6823)) - 貢獻者：@mytharcher

  - 修正測試案例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) - 貢獻者：@mytharcher

- **[集合欄位：附件（URL）]** 附件（URL）欄位不應允許在聯動規則中配置值 ([#6831](https://github.com/nocobase/nocobase/pull/6831)) - 貢獻者：@katherinehhh

- **[工作流程：自訂操作事件]** 觸發的工作流程操作聯動問題 - 貢獻者：@katherinehhh
