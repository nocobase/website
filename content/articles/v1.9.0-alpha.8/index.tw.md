---
title: "NocoBase v1.9.0-alpha.8：優化切換彈出式分頁時的效能"
description: "v1.9.0-alpha.8 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]** 優化切換彈出式分頁時的效能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) - @zhangzhonghe
- **[Office 檔案預覽器]** 新增支援預覽 `.odt` 檔案 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修正個別設定權限時，先前儲存的資料範圍未被預先選取的問題 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) - @aaaaaajie
  - 修正批次刪除集合時的錯誤 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) - @aaaaaajie
- **[工作流程]** 避免在停止時因發佈至事件佇列而引發錯誤 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) - @mytharcher
- **[工作流程：並行節點]** 修正 MySQL 環境下並行節點在恢復後被暫停的問題 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) - @mytharcher
- **[工作流程：審核]**

  - 修正提交草稿時更新關聯資料的問題 - @mytharcher
  - 修正審核原始詳情區塊中連結規則未生效的問題 - @mytharcher
