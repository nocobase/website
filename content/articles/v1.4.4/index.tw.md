---
title: "NocoBase v1.4.4：錯誤修復"
description: "v1.4.4 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復外部資料來源欄位未顯示在表格區塊中的問題 ([#5825](https://github.com/nocobase/nocobase/pull/5825)) @katherinehhh

  - 修復表單配置中繼承欄位的顯示問題 ([#5822](https://github.com/nocobase/nocobase/pull/5822)) @katherinehhh

  - 修復繼承欄位未出現在欄位清單中且無法覆寫的問題 ([#5800](https://github.com/nocobase/nocobase/pull/5800)) @katherinehhh

- **[資料視覺化]** 修復在 MySQL 中格式化時區感知日期欄位時的問題 ([#5829](https://github.com/nocobase/nocobase/pull/5829)) @2013xile

- **[工作流]**
  - 修復跨資料來源的交易導致集合事件錯誤的問題 ([#5818](https://github.com/nocobase/nocobase/pull/5818)) @mytharcher

  - 修復基於日期欄位的排程配置中遺漏日期類型的問題 ([#5816](https://github.com/nocobase/nocobase/pull/5816)) @mytharcher

- **[集合欄位：多對多（陣列）]** 修復在單一關聯集合中更新 m2m 陣列欄位未生效的問題 ([#5820](https://github.com/nocobase/nocobase/pull/5820)) @2013xile

- **[日曆]**
  - 修復點擊日曆中空白日期時出現錯誤的問題 ([#5803](https://github.com/nocobase/nocobase/pull/5803)) @katherinehhh

  - 修復透過「日曆區塊」開啟彈出視窗後關閉時導致所有彈出視窗一併關閉的問題 ([#5793](https://github.com/nocobase/nocobase/pull/5793)) @zhangzhonghe

- **[公開表單]** 修復子應用公開表單中 QR Code 掃描路徑不正確的問題 ([#5799](https://github.com/nocobase/nocobase/pull/5799)) @katherinehhh
