---
title: "NocoBase v2.1.3：標準化應用相容性建置版本"
description: "v2.1.3 版本發行說明"
---

### 🚀 改進

- **[cli]**
  - 標準化應用程式相容建置版本 ([#9763](https://github.com/nocobase/nocobase/pull/9763)) - 作者：@chenos
  - 支援將技能更新至指定版本 ([#9760](https://github.com/nocobase/nocobase/pull/9760)) - 作者：@chenos

### 🐛 錯誤修復

- **[client]** 修正水平子表單中欄位過窄而無法顯示資料的問題 ([#9755](https://github.com/nocobase/nocobase/pull/9755)) - 作者：@zhangzhonghe
- **[資料來源管理器]**

  - 修正 v1 外部資料來源「設定欄位」頁面因重複重新渲染導致編輯欄位抽屜空白的問題。([#9759](https://github.com/nocobase/nocobase/pull/9759)) - 作者：@katherinehhh
  - 修正 v1 資料來源管理器中刪除使用中的集合分類後，可能導致「所有集合」分頁空白的問題。([#9757](https://github.com/nocobase/nocobase/pull/9757)) - 作者：@katherinehhh
- **[非同步任務管理器]** 修正非同步任務工作者日誌中請求 ID 不正確的問題 ([#9686](https://github.com/nocobase/nocobase/pull/9686)) - 作者：@2013xile
- **[工作流：SQL 節點]** 修正部分 Beta 版本使用者 SQL 工作流舊版範本變數遷移被跳過的問題。([#9762](https://github.com/nocobase/nocobase/pull/9762)) - 作者：@mytharcher
- **[AI 員工]**

  - 修正工作流 LLM 節點中訊息配置遺失的問題。([#9743](https://github.com/nocobase/nocobase/pull/9743)) - 作者：@cgyrock
  - 修正貼入 AI 員工對話框的附件無法移除的問題。([#9753](https://github.com/nocobase/nocobase/pull/9753)) - 作者：@cgyrock
- **[區塊：看板]** 修正行事曆及相關彈出視窗的 URL 支援。([#9751](https://github.com/nocobase/nocobase/pull/9751)) - 作者：@jiannx
- **[工作流：審批]** 修正 v2 審批表單中相關資料未顯示的問題 - 作者：@zhangzhonghe
