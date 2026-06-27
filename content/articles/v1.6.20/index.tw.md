---
title: "NocoBase v1.6.20：讓部門、附件URL和工作流程回應訊息外掛免費"
description: "v1.6.20 版本發布說明"
---

### 🎉 新功能

- **[部門]** 將部門、附件網址與工作流程回應訊息外掛改為免費 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

### 🐛 錯誤修復

- **[客戶端]**
  - 篩選表單不應顯示「有未儲存的變更」提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe

  - 關聯欄位的「允許複選」選項未生效 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh

  - 在篩選表單中，點擊篩選按鈕時，若存在未通過驗證的欄位，仍會觸發篩選 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe

  - 切換至群組選單時，不應跳轉至已在選單中隱藏的頁面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe

- **[檔案儲存：S3(Pro)]**
  - 整理語言 by @jiannx

  - 個別 baseurl 與公開設定，改善 S3 Pro 儲存設定使用者體驗 by @jiannx

- **[遷移管理員]** 若遷移過程中出現環境變數彈窗，則跳過自動備份選項會失效 by @gchust
