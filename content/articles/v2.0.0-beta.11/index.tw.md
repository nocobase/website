---
title: "NocoBase v2.0.0-beta.11：富文本編輯器支援字體大小調整、圖片大小調整與軟換行"
description: "v2.0.0-beta.11 版本發行說明"
---

### 🚀 改進項目

- **[評估器]** 更新 math.js 版本以支援更多函式 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) - 感謝 @mytharcher

- **[客戶端]** 富文字編輯器支援字型大小調整、圖片大小調整及軟換行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) - 感謝 @jiannx

- **[AI 員工]** 將工作流程呼叫器的結果變更為 `execution.output`，透過明確使用輸出節點可使結果保持穩定 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) - 感謝 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 為動作結構描述增加容錯機制，避免點擊動作按鈕時頁面崩潰 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) - 感謝 @mytharcher

  - 修正表單項目中設定附件 URL 後再切換為其他欄位時，標題欄位設定消失的問題 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) - 感謝 @katherinehhh

  - 修正建立表單中關聯欄位設為唯讀模式時，標題欄位未更新的問題 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) - 感謝 @katherinehhh

- **[流程引擎]** 修正當 filterByTk 為陣列時變數解析不正確的問題 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) - 感謝 @gchust

- **[範本列印]** 支援空格欄位 - 感謝 @jiannx
