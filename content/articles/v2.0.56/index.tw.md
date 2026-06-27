---
title: "NocoBase v2.0.56：開源備份管理器插件"
description: "v2.0.56 版本發布說明"
---

### 🎉 新功能

- **[備份管理]** 開源備份管理插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos

### 🚀 改進

- **[客戶端]** 優化操作按鈕顯示設定 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[流程引擎]** V2 欄位設定選單現已支援搜尋欄位 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[未定義]**

  - 為 Pull Request 新增依賴安全性審查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
  - **[通知管理]** 變更佇列策略以優化發送效能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[AI：知識庫]** 啟用 AI 知識庫的向量儲存修改功能 by @cgyrock
- **[工作流：審批]** 使用時間軸卡片改善相關審批顯示 by @zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在資料範圍連動中，當依賴的關聯欄位變更時，清除已選取值的問題 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修正選單徽章數值為 0 時仍顯示圓點的問題 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - 修正篩選表單無法使用當前表單變數的問題 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - 修正縮窄後的 V2 區塊在離開編輯模式後變為全寬的問題 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
  - 修正子表單中 JS 欄位選單狀態不正確的問題。([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
- **[流程引擎]** 修正 V2 表單中外部資料來源欄位的多重選取問題 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[AI 員工]** 修正 AI 員工存取唯讀知識庫時的錯誤 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
- **[日曆]** 修正日曆「更多」項目無法完整顯示的問題 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[操作：批次更新]** 修正批次更新操作在更新失敗後重設載入狀態的問題 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[API 文件]** 修正集合 API 文件，使查詢參數不再互相干擾 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[工作流]** 為手動執行工作流程新增載入狀態。([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[遷移管理]** 修正使用 OceanBase 時遷移檔案建立失敗的問題 by @2013xile
- **[檔案儲存：S3(Pro)]** 修正 S3 Pro 端點處理，使伺服器上傳與 URL 預覽不會重複儲存桶主機。 by @mytharcher
- **[工作流：審批]** 修正同一審批任務發生並行委派時，審批記錄索引重複的問題。 by @mytharcher
