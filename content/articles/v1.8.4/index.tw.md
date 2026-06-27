---
title: "NocoBase v1.8.4：支援為子應用程式設定獨立的驗證密鑰"
description: "v1.8.4 版本發行說明"
---

### 🎉 新功能

- **[多應用管理]** 支援為子應用設定獨立的認證密鑰 ([#7197](https://github.com/nocobase/nocobase/pull/7197)) - @mytharcher

- **[工作流：抄送]** 在工作流中新增抄送節點 ([#7201](https://github.com/nocobase/nocobase/pull/7201)) - @mytharcher

### 🚀 改進

- **[通知：應用內訊息]** 優化行動裝置訊息頁面的字型大小 ([#7199](https://github.com/nocobase/nocobase/pull/7199)) - @zhangzhonghe

- **[認證：釘釘]** 支援設定回調網址的通訊協定與連接埠號碼 - @2013xile

### 🐛 錯誤修復

- **[通知：應用內訊息]** 修正字串格式的 BigInt 時間戳導致 dayjs 異常的問題 ([#7196](https://github.com/nocobase/nocobase/pull/7196)) - @mytharcher

- **[工作流：審批]**
  - 避免使用者不存在時發生錯誤 - @mytharcher

  - 重新載入記錄上的關聯資料 - @mytharcher

  - 在更新 UI 結構描述的遷移中加入 `try/catch` - @mytharcher
