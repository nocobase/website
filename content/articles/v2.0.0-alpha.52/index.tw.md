---
title: "NocoBase v2.0.0-alpha.52：在多對多子表單中新增新增/選擇/解除關聯設定的支援"
description: "v2.0.0-alpha.52 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 在多對多子表單中新增支援新增/選擇/取消關聯設定 ([#8099](https://github.com/nocobase/nocobase/pull/8099)) by @katherinehhh

- **[資料來源：REST API]** 在 RESTful API 資料來源設定中新增「錯誤訊息轉換器」選項 by @cgyrock

### 🚀 改進

- **[認證]** 修復 [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) by @2013xile

- **[動作：匯入記錄]**
  - 允許為匯入欄位選擇 ID ([#8133](https://github.com/nocobase/nocobase/pull/8133)) by @katherinehhh

  - 允許為匯入欄位選擇 ID ([#8132](https://github.com/nocobase/nocobase/pull/8132)) by @katherinehhh

- **[工作流程：審批]** 變更 API 以取得單一審批項目，並簡化程式碼 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復子項目的停用狀態阻擋關聯欄位選取的問題 ([#8131](https://github.com/nocobase/nocobase/pull/8131)) by @katherinehhh

  - 修復 `RemoteSelect` 元件在值為 null 時錯誤載入記錄的問題 ([#8137](https://github.com/nocobase/nocobase/pull/8137)) by @mytharcher

  - 修復日期篩選欄位選擇「過去」或「未來」時，UI 元件寬度不一致的問題。([#8130](https://github.com/nocobase/nocobase/pull/8130)) by @gchust

  - 修復篩選表單區塊中預設欄位標籤無法正確多語言翻譯的問題。([#8135](https://github.com/nocobase/nocobase/pull/8135)) by @gchust

  - 修復 JS 區塊的標題與描述樣式與其他區塊不一致的問題。([#8115](https://github.com/nocobase/nocobase/pull/8115)) by @gchust

  - 修復子表單中巢狀子表格無法顯示資料的問題 ([#8117](https://github.com/nocobase/nocobase/pull/8117)) by @katherinehhh

  - 修復長文字欄位工具提示換行問題 ([#8122](https://github.com/nocobase/nocobase/pull/8122)) by @katherinehhh

  - 修復篩選表單區塊中關聯欄位的可選資料不正確的問題。([#8109](https://github.com/nocobase/nocobase/pull/8109)) by @gchust

  - 修復使用「是任一」或「都不是」運算子進行選項型欄位篩選時，可選選項未完整列出的問題。([#8118](https://github.com/nocobase/nocobase/pull/8118)) by @gchust

  - 修復篩選表單中自訂欄位設定未正確預填，且部分設定未生效的問題。([#8106](https://github.com/nocobase/nocobase/pull/8106)) by @gchust

  - 修復清除時間區間篩選值後再次觸發篩選導致錯誤的問題。([#8110](https://github.com/nocobase/nocobase/pull/8110)) by @gchust

  - 修復數字欄位值在篩選動作中未正確預填的問題。([#8104](https://github.com/nocobase/nocobase/pull/8104)) by @gchust

  - 修復篩選表單中部分欄位運算子無法正確篩選資料的問題。([#8100](https://github.com/nocobase/nocobase/pull/8100)) by @gchust

  - 修復核取方塊欄位篩選未生效的問題。([#8103](https://github.com/nocobase/nocobase/pull/8103)) by @gchust

- **[流程引擎]**
  - 修復：使用整數型別作為列舉選項時轉換不正確 ([#8138](https://github.com/nocobase/nocobase/pull/8138)) by @chenos

  - 修復當省略 `useModel` 時，透過從 `createModelOptions.use` 推斷，導致可切換子模型選單項目失敗的問題 ([#8105](https://github.com/nocobase/nocobase/pull/8105)) by @zhangzhonghe

- **[伺服器]** 修復匯入資料後，觸發的工作流程未加入處理佇列的問題，確保工作流程在匯入後立即按預期執行 ([#8121](https://github.com/nocobase/nocobase/pull/8121)) by @mytharcher

- **[通知：電子郵件]** 修復電子郵件通知連線限制 ([#8119](https://github.com/nocobase/nocobase/pull/8119)) by @jiannx

- **[集合欄位：公式]** 修復公式欄位在篩選動作與篩選表單區塊中無法輸入值的問題。([#8102](https://github.com/nocobase/nocobase/pull/8102)) by @gchust

- **[多空間]** 修復在系統集合中建立其他欄位的問題 by @jiannx
