---
title: "NocoBase v2.1.0-beta.9：修復自訂規則中無法選取系統資料表的問題"
description: "v2.1.0-beta.9 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復表格區塊高度無效的問題 ([#8842](https://github.com/nocobase/nocobase/pull/8842)) - @jiannx

  - 修復新增資料區塊或重新整理頁面時會觸發雙重重新整理的問題 ([#8851](https://github.com/nocobase/nocobase/pull/8851)) - @gchust

  - 修正在外部資料來源下連結資料區塊時，可連結欄位未顯示的問題 ([#8848](https://github.com/nocobase/nocobase/pull/8848)) - @zhangzhonghe

- **[UI 模板]** 修復使用編輯表單區塊與詳情區塊模板時發生的錯誤 ([#8859](https://github.com/nocobase/nocobase/pull/8859)) - @gchust

- **[表單草稿]** 修復彈出視窗多次開啟時，表單草稿資料遺失的問題 ([#8858](https://github.com/nocobase/nocobase/pull/8858)) - @gchust

- **[本地化]** 在頁面非編輯狀態下，未找到的條目將不會被提交 ([#8841](https://github.com/nocobase/nocobase/pull/8841)) - @jiannx

- **[動作：匯入記錄 Pro]** 修復在匯入設定中無法對重複欄位進行多重選取的問題 - @jiannx

- **[電子郵件管理員]** 調整回覆與全部回覆的收件者，修復表格欄位新增失敗及其他問題 - @jiannx

- **[遷移管理員]** 修復自訂規則中無法選取系統資料表的問題 - @cgyrock
