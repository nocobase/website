---
title: "NocoBase v2.0.46：錯誤修復"
description: "v2.0.46 版本發布說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在子表格中移除記錄後重新新增時，預設值無法套用的問題。([#9192](https://github.com/nocobase/nocobase/pull/9192)) by @gchust

  - 為彈出視窗設定最大高度與滾動保護機制，確保提交區域始終可觸及。([#9226](https://github.com/nocobase/nocobase/pull/9226)) by @jiannx

- **[認證]** 修正在變更密碼後，舊工作階段仍保持啟用的問題。([#9261](https://github.com/nocobase/nocobase/pull/9261)) by @2013xile

- **[資料來源：外部 MariaDB]** 修正因模組匯入不正確導致測試案例失敗的問題 by @mytharcher
