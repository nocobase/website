---
title: "NocoBase v2.1.0-alpha.14：為 AI 員工新增呼叫子代理的功能"
description: "v2.1.0-alpha.14 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]** 為 AI 員工新增調用子代理的能力 ([#8935](https://github.com/nocobase/nocobase/pull/8935)) by @cgyrock

- **[AI: MCP 伺服器]** 提供通用的資料集合查詢 API，可透過 MCP 呼叫 ([#8985](https://github.com/nocobase/nocobase/pull/8985)) by @2013xile

### 🚀 改進

- **[未定義]**
  - 為 README 新增目錄 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) by @gaston98765

  - 透過靜默執行 LibreOffice 和 Oracle Instant Client 的解壓縮指令，減少伺服器啟動時的日誌雜訊 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) by @Rishabh1925

- **[流程引擎]** 為 UI 建置新增新的 API。([#8992](https://github.com/nocobase/nocobase/pull/8992)) by @gchust

- **[工作流程]** 將啟用開關尺寸改為小型 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) by @mytharcher

- **[AI 員工]** 最佳化 deepseek 在處理不支援檔案類型時的提示詞 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) by @cgyrock

- **[動作：自訂請求]** 為自訂請求新增動作模型 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) by @jiannx

- **[工作流程：JavaScript]** 新增 `isolated-vm` 作為 JavaScript 節點的預設 JavaScript 執行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) by @mytharcher
參考資料：[JavaScript 節點](https://docs.nocobase.com/cn/workflow/nodes/javascript)
### 🐛 錯誤修復

- **[伺服器]**
  - 新增服務中檢查，避免應用程式狀態被非服務中的實例更新 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) by @mytharcher

  - 支援透過主機名稱取得目標應用程式 ([#8978](https://github.com/nocobase/nocobase/pull/8978)) by @2013xile

- **[客戶端]**
  - 子表單關聯欄位儲存失敗 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) by @jiannx

  - 欄位的子表單未顯示資料 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) by @jiannx

  - 修正在表格中關聯欄位的複製內容在首次渲染時顯示不正確的問題。([#9007](https://github.com/nocobase/nocobase/pull/9007)) by @jiannx

  - 修正修改表單資料後關閉多層彈出視窗時，二次確認訊息不正確的問題。([#8944](https://github.com/nocobase/nocobase/pull/8944)) by @gchust

  - 修正變數表達式中的空格導致標籤不顯示的問題 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) by @mytharcher

- **[流程引擎]**
  - 修正彈出視窗中設定選單被裁剪的問題 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) by @gchust

  - 修正當配置狀態下的 UI 元件寬度過小時，無法選取選單項目的問題。([#8954](https://github.com/nocobase/nocobase/pull/8954)) by @gchust

  - 為設定表單項目和詳細項目新增 JS 片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) by @jiannx

- **[工作流程：郵件節點]** 修正變數欄位的驗證 ([#9047](https://github.com/nocobase/nocobase/pull/9047)) by @mytharcher

- **[集合欄位：排序]** 修正(field-sort)：防止 scopeKey 屬性為 undefined 時崩潰 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) by @gaston98765

- **[AI 員工]**
  - 修正 AI 員工無法使用技能的問題 ([#9023](https://github.com/nocobase/nocobase/pull/9023)) by @cgyrock

  - 修正停用 getSkill 工具後，LLM 仍嘗試載入技能的問題 ([#9013](https://github.com/nocobase/nocobase/pull/9013)) by @cgyrock

  - 修正使用通義千問 LLM 時網頁搜尋行為異常的問題 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) by @cgyrock

  - 為 AI 對話 API 新增所有權驗證 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) by @cgyrock

- **[區塊：GridCard]** 修正網格卡片刷新時按鈕未重新整理的問題 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) by @jiannx

- **[工作流程]**
  - 修正條件指令的驗證規則不正確 ([#9017](https://github.com/nocobase/nocobase/pull/9017)) by @mytharcher

  - 修正資料集合觸發器的模式無法設定為「建立或更新」的問題 ([#8980](https://github.com/nocobase/nocobase/pull/8980)) by @mytharcher

- **[通知：應用內訊息]** 修正應用內訊息更新的動作白名單，以防止非擁有者進行未經授權的更新。([#9001](https://github.com/nocobase/nocobase/pull/9001)) by @mytharcher

- **[資料來源管理器]** 最佳化 MCP 工具命名並減少冗餘的 API 回應，以避免過度消耗 AI 對話上下文 ([#9000](https://github.com/nocobase/nocobase/pull/9000)) by @2013xile

- **[工作流程：SQL 節點]** 修正 SQL 節點的安全性問題 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) by @mytharcher

- **[資料視覺化]** 使用基於變數的篩選器時，圖表在初始渲染時無法正確解析變數值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) by @2013xile

- **[工作流程：審批]**
  - 在工作流程被刪除時加入容錯機制，以避免任務列表載入錯誤 by @mytharcher

  - 為缺少 `latestRound` 的情況加入容錯機制 by @mytharcher

  - 修正舊版遷移的版本限制，以避免在最新版本部署啟動時拋出錯誤 by @mytharcher

- **[電子郵件管理器]** 電子郵件發送後未顯示關閉確認訊息 by @jiannx
