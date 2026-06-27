---
title: "NocoBase v1.5.4：為複製操作添加載入狀態"
description: "v1.5.4 版本發布說明"
---

### 🚀 改進

- **[工作流程]** 為複製操作新增載入狀態 ([#6179](https://github.com/nocobase/nocobase/pull/6179)) - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在建立節點欄位設定時拋出的錯誤 ([#6187](https://github.com/nocobase/nocobase/pull/6187)) - @mytharcher

  - 關聯欄位的「允許多重選擇」配置選項未顯示於篩選表單中 ([#6174](https://github.com/nocobase/nocobase/pull/6174)) - @zhangzhonghe

  - 欄位被聯動規則隱藏後仍保持隱藏狀態 ([#6182](https://github.com/nocobase/nocobase/pull/6182)) - @zhangzhonghe

- **[工具]** 優化儲存/外掛讀取邏輯 ([#6186](https://github.com/nocobase/nocobase/pull/6186)) - @chenos

- **[通知：應用內訊息]** 修復：在頻道列表 API 中，為訊息時間戳與標題子查詢新增使用者篩選，以確保資料隔離。 ([#6185](https://github.com/nocobase/nocobase/pull/6185)) - @deepure

- **[備份管理員]** 在容錯模式還原期間，檔案未從備份複製到上傳資料夾 - @gchust
