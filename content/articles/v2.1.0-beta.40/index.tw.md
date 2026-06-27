---
title: "NocoBase v2.1.0-beta.40：支援提交表單動作中的欄位值指派"
description: "v2.1.0-beta.40 版本發行說明"
---

### 🎉 新功能

- **[client-v2]** 支援在提交表單動作中指派欄位值 ([#9570](https://github.com/nocobase/nocobase/pull/9570)) - 作者：@katherinehhh
- **[Office 檔案預覽器]** 將 Office 檔案預覽外掛遷移至 v2 (FlowEngine) 客戶端。([#9620](https://github.com/nocobase/nocobase/pull/9620)) - 作者：@Molunerfinn

### 🚀 改進

- **[通知管理員]** 將通知相關外掛遷移至 v2。([#9597](https://github.com/nocobase/nocobase/pull/9597)) - 作者：@Molunerfinn

### 🐛 錯誤修復

- **[client]** 修正頂部導覽列中的徽章寬度 ([#9607](https://github.com/nocobase/nocobase/pull/9607)) - 作者：@zhangzhonghe
- **[區塊：甘特圖]** 修正 v2 甘特圖共享資料夾路徑，並新增斑馬紋樣式。([#9621](https://github.com/nocobase/nocobase/pull/9621)) - 作者：@jiannx
- **[授權設定]** 為授權設定與商業授權注入新增 client-v2 支援。([#9555](https://github.com/nocobase/nocobase/pull/9555)) - 作者：@jiannx
- **[工作流：自訂動作事件]** 修正 v2 區塊動作選單中重複的「觸發工作流」選項 ([#9622](https://github.com/nocobase/nocobase/pull/9622)) - 作者：@zhangzhonghe
- **[AI 員工]** 修正當參照表格區塊被移除後，AI 快捷按鈕取得空白區塊上下文的問題。([#9617](https://github.com/nocobase/nocobase/pull/9617)) - 作者：@cgyrock
- **[plugin-commercial]** 新增 client-v2 商業授權元件與頂部列授權狀態入口。 - 作者：@jiannx
- **[遷移管理員]** 修正 PostgreSQL 遷移差異，使子繼承欄位在本機欄位變成繼承時不會被刪除。 - 作者：@hongboji
