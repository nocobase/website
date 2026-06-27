---
title: "NocoBase v1.4.3：允許在測試案例中使用角色名稱登入"
description: "v1.4.3 版本發行說明"
---

### 🚀 改進

- **[測試]** 允許在測試案例中使用角色名稱登入 ([#5794](https://github.com/nocobase/nocobase/pull/5794)) - @mytharcher

- **[通知：應用內訊息]** 更新應用內訊息表單中詳細資訊網址的標題及在地化檔案 ([#5742](https://github.com/nocobase/nocobase/pull/5742)) - @sheldon66

### 🐛 錯誤修復

- **[客戶端]**
  - 修復當無角色的使用者遇到登入錯誤並點擊「使用其他帳號登入」按鈕後，Token 未被清除的問題 ([#5790](https://github.com/nocobase/nocobase/pull/5790)) - @2013xile

  - 靜默請求遺失請求標頭 ([#5795](https://github.com/nocobase/nocobase/pull/5795)) - @chenos

  - 使用者無角色時出現空白頁面 ([#5797](https://github.com/nocobase/nocobase/pull/5797)) - @chenos

  - 修正在緊湊主題下，子表格尺寸為「小」時出現的捲軸問題 ([#5796](https://github.com/nocobase/nocobase/pull/5796)) - @katherinehhh
