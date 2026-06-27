---
title: "NocoBase v2.1.0-alpha.15：新增樹狀篩選區塊"
description: "v2.1.0-alpha.15 版本發行說明"
---

### 🎉 新功能

- **[區塊：樹]** 新增樹狀篩選區塊 ([#9016](https://github.com/nocobase/nocobase/pull/9016)) by @jiannx

- **[認證：API 金鑰]** 新增 `pm list` 和 `generate-api-key` 指令 ([#9076](https://github.com/nocobase/nocobase/pull/9076)) by @chenos

- **[AI 員工]**
  - 為 AI 員工新增資料查詢工具與業務分析報告工具 ([#9040](https://github.com/nocobase/nocobase/pull/9040)) by @2013xile

  - 為 AI 員工新增基於 LLM 的網路搜尋工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) by @cgyrock

- **[遷移管理員]** 支援遷移指令 by @chenos

- **[電子郵件管理員]** Gmail 支援使用別名發送電子郵件 by @jiannx

### 🐛 錯誤修復

- **[流程引擎]** 修復在表格區塊中無法新增來自外部資料來源的多對一欄位問題 ([#9068](https://github.com/nocobase/nocobase/pull/9068)) by @jiannx

- **[客戶端]**
  - 修復子表格新增多對多欄位錯誤 ([#9070](https://github.com/nocobase/nocobase/pull/9070)) by @jiannx

  - 修復從子表格的選擇按鈕開啟記錄選取彈窗時，無法正確解析父項目變數值的問題。 ([#8996](https://github.com/nocobase/nocobase/pull/8996)) by @gchust

  - 修復批次編輯操作會錯誤顯示未儲存變更確認訊息的問題 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) by @gchust

  - 修復透過彈窗子表格建立記錄後提交表單時，會錯誤顯示二次確認彈窗的問題。 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) by @gchust

  - 修復 ctx.request 無法覆蓋 Authorization 標頭的問題。 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) by @gchust

- **[資料來源管理員]** 修復從資料庫同步欄位後，部分欄位類型未正確更新的問題 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) by @2013xile

- **[通知管理員]** 優化工作流程情境下的應用內通知發送效能 ([#9066](https://github.com/nocobase/nocobase/pull/9066)) by @mytharcher

- **[集合欄位：程式碼]** 修正程式碼欄位的 UI 介面 ([#9061](https://github.com/nocobase/nocobase/pull/9061)) by @2013xile

- **[工作流程：HTTP 請求節點]** 清理工作流程請求節點結果以避免暴露請求配置，預設新節點僅返回回應資料，並為失敗請求新增除錯日誌。 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) by @mytharcher

- **[AI 員工]**
  - 修復中止 AI 員工推理會導致服務崩潰的問題 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) by @cgyrock

  - 修復在配置了 APP_PUBLIC_PATH 的子路徑存取下，AI 員工文件上傳失敗的問題。 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) by @cgyrock

  - 修復在 dashscope 上使用 deepseek 或 minmax 模型時的問題 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) by @cgyrock
