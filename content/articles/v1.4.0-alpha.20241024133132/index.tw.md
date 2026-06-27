---
title: "NocoBase v1.4.0-alpha.20241024133132：支援在表單和詳情區塊上新增群組"
description: "v1.4.0-alpha.20241024133132 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援在表單與詳情區塊中新增群組 ([#5498](https://github.com/nocobase/nocobase/pull/5498)) - 感謝 @katherinehhh

- **[日曆]** plugin-calendar 新增預設檢視設定與國際化配置 ([#5487](https://github.com/nocobase/nocobase/pull/5487)) - 感謝 @Cyx649312038

- **[資料來源：KingbaseES]** 支援將 Kingbase 資料庫作為主資料來源或外部資料來源（pg 模式） - 感謝 @chareice
參考資料：[資料來源 - KingbaseES](https://docs.nocobase.com/handbook/data-source-kingbase)

### 🚀 改進

- **[資料庫]** 支援外掛程式的靜態載入邏輯 ([#5466](https://github.com/nocobase/nocobase/pull/5466)) - 感謝 @chareice

- **[客戶端]** 改善表格區塊的渲染效能（首次渲染時間減少約 50%）([#5438](https://github.com/nocobase/nocobase/pull/5438)) - 感謝 @zhangzhonghe

- **[行動端]** 行動客戶端支援篩選表單區塊 ([#5482](https://github.com/nocobase/nocobase/pull/5482)) - 感謝 @katherinehhh

- **[備份管理員]**
  - 將「備份本地儲存檔案」的預設設定改為 true - 感謝 @gchust
  - 若還原動作失敗，則復原資料庫資料 - 感謝 @gchust

### 🐛 錯誤修復

- **[伺服器]** 應用程式的 afterLoad 事件在安裝後未觸發 ([#5506](https://github.com/nocobase/nocobase/pull/5506)) - 感謝 @chenos

- **[公開表單]** 為公開表單註冊 ACL 程式碼片段 ([#5505](https://github.com/nocobase/nocobase/pull/5505)) - 感謝 @katherinehhh

- **[備份管理員]** 修復還原子應用程式後，若子應用程式使用不同 schema，主應用程式會崩潰的問題 - 感謝 @gchust
