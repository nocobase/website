---
title: "NocoBase v2.1.0-beta.12：為 AI 員工新增基於 LLM 的網路搜尋工具"
description: "v2.1.0-beta.12 版本發布說明"
---

### 🎉 新功能

- **[客戶端]**
  - 在事件流程中新增 JS 變數 ([#8938](https://github.com/nocobase/nocobase/pull/8938)) - @jiannx

  - 新增 JS 項目操作 ([#8911](https://github.com/nocobase/nocobase/pull/8911)) - @jiannx

- **[AI 員工]** 為 AI 員工新增基於 LLM 的網路搜尋工具 ([#9032](https://github.com/nocobase/nocobase/pull/9032)) - @cgyrock

### 🚀 改進

- **[未定義]**
  - 在 README 中新增目錄 ([#8878](https://github.com/nocobase/nocobase/pull/8878)) - @gaston98765

  - 透過靜默處理 LibreOffice 和 Oracle Instant Client 的解壓縮指令，減少伺服器啟動時的日誌噪音 ([#8984](https://github.com/nocobase/nocobase/pull/8984)) - @Rishabh1925

- **[客戶端]**
  - 支援透過 runjs 設定欄位樣式 ([#8933](https://github.com/nocobase/nocobase/pull/8933)) - @jiannx

  - 優化表單操作的水平佈局 ([#8869](https://github.com/nocobase/nocobase/pull/8869)) - @jiannx

- **[工作流：JavaScript]** 為 JavaScript 節點新增 `isolated-vm` 作為預設的 JavaScript 執行引擎 ([#8973](https://github.com/nocobase/nocobase/pull/8973)) - @mytharcher
參考：[JavaScript 節點](https://docs.nocobase.com/cn/workflow/nodes/javascript)
- **[工作流]**
  - 將啟用開關尺寸改為小型 ([#9010](https://github.com/nocobase/nocobase/pull/9010)) - @mytharcher

  - 為頁面大小參數新增變數 ([#8951](https://github.com/nocobase/nocobase/pull/8951)) - @mytharcher

- **[AI 員工]** 最佳化 deepseek 在處理不支援檔案類型時的提示詞 ([#9003](https://github.com/nocobase/nocobase/pull/9003)) - @cgyrock

- **[操作：自訂請求]** 為自訂請求新增操作模型 ([#8890](https://github.com/nocobase/nocobase/pull/8890)) - @jiannx

- **[集合欄位：中國行政區劃]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) - @jiannx

- **[工作流：子流程]** 新增防禦性邏輯，避免工作流在發生異常時卡住 - @mytharcher

- **[工作流：審批]** 修復載入審批記錄列表時，JSON 欄位導致的效能問題 - @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修復批量編輯操作會錯誤顯示未儲存變更確認訊息的問題 ([#9054](https://github.com/nocobase/nocobase/pull/9054)) - @gchust

  - 修復透過彈窗子表格建立記錄後提交表單時，會錯誤顯示二次確認彈窗的問題 ([#9035](https://github.com/nocobase/nocobase/pull/9035)) - @gchust

  - 修復 ctx.request 無法覆蓋 Authorization 標頭的問題 ([#8850](https://github.com/nocobase/nocobase/pull/8850)) - @gchust

  - 子表單關聯欄位儲存失敗 ([#9004](https://github.com/nocobase/nocobase/pull/9004)) - @jiannx

  - 欄位的子表單未顯示資料 ([#9008](https://github.com/nocobase/nocobase/pull/9008)) - @jiannx

  - 修復表格中關聯欄位的複製內容在首次渲染時顯示不正確的問題 ([#9007](https://github.com/nocobase/nocobase/pull/9007)) - @jiannx

  - 修復修改表單資料後關閉多層彈窗時，出現錯誤二次確認訊息的問題 ([#8944](https://github.com/nocobase/nocobase/pull/8944)) - @gchust

  - 修復變數表達式中的空格導致標籤不顯示的問題 ([#8988](https://github.com/nocobase/nocobase/pull/8988)) - @mytharcher

  - 修復在彈窗中為樹狀表格新增子節點時的異常 ([#8872](https://github.com/nocobase/nocobase/pull/8872)) - @jiannx

- **[資料來源管理器]** 修復從資料庫同步欄位後，部分欄位類型未正確更新的問題 ([#9046](https://github.com/nocobase/nocobase/pull/9046)) - @2013xile

- **[伺服器]**
  - 新增服務檢查，避免非服務中的實例更新應用狀態 ([#8959](https://github.com/nocobase/nocobase/pull/8959)) - @mytharcher

  - 避免在應用停止後處理同步訊息 ([#8940](https://github.com/nocobase/nocobase/pull/8940)) - @mytharcher

  - 將 Pub-Sub 的關閉時機改為 `beforeStop`，以避免在資料庫關閉後發送或處理訊息 ([#8934](https://github.com/nocobase/nocobase/pull/8934)) - @mytharcher

- **[流程引擎]**
  - 修復彈窗中設定選單被裁剪的問題 ([#9005](https://github.com/nocobase/nocobase/pull/9005)) - @gchust

  - 修復配置狀態下 UI 元件寬度過小時無法選取選單項目的問題 ([#8954](https://github.com/nocobase/nocobase/pull/8954)) - @gchust

  - 為設定表單項目和明細項目新增 JS 程式碼片段 ([#8974](https://github.com/nocobase/nocobase/pull/8974)) - @jiannx

  - 刪除表單欄位時，將狀態同步至欄位配置 ([#8857](https://github.com/nocobase/nocobase/pull/8857)) - @jiannx

- **[資料庫]** 當任何 appends 參數無效時，使用警告而非錯誤 ([#8923](https://github.com/nocobase/nocobase/pull/8923)) - @mytharcher

- **[資源管理器]** 修復外部資料來源無法正確載入的問題 ([#8929](https://github.com/nocobase/nocobase/pull/8929)) - @2013xile

- **[AI 員工]**
  - 修復在配置了 APP_PUBLIC_PATH 的子路徑存取下，AI 員工文件上傳失敗的問題 ([#9034](https://github.com/nocobase/nocobase/pull/9034)) - @cgyrock

  - 修復在 dashscope 上使用 deepseek 或 minmax 模型時的問題 ([#9033](https://github.com/nocobase/nocobase/pull/9033)) - @cgyrock

  - 修復中止 AI 員工推理會導致服務崩潰的問題 ([#9031](https://github.com/nocobase/nocobase/pull/9031)) - @cgyrock

  - 修復使用 Qwen LLM 時網路搜尋行為異常的問題 ([#9012](https://github.com/nocobase/nocobase/pull/9012)) - @cgyrock

  - 為 AI 對話 API 新增所有權驗證 ([#8993](https://github.com/nocobase/nocobase/pull/8993)) - @cgyrock

  - 調整 AI 對話中工具卡片元件之間的間距 ([#8965](https://github.com/nocobase/nocobase/pull/8965)) - @cgyrock

- **[工作流：HTTP 請求節點]** 清理工作流請求節點結果以避免暴露請求配置，預設新節點僅返回回應資料，並為失敗請求新增除錯日誌 ([#9024](https://github.com/nocobase/nocobase/pull/9024)) - @mytharcher

- **[集合欄位：排序]** 修復(field-sort)：防止 scopeKey 屬性為 undefined 時崩潰 ([#9019](https://github.com/nocobase/nocobase/pull/9019)) - @gaston98765

- **[區塊：網格卡片]** 修復網格卡片刷新時按鈕未重新整理的問題 ([#9021](https://github.com/nocobase/nocobase/pull/9021)) - @jiannx

- **[通知：應用內訊息]** 修復應用內訊息更新的操作白名單，以防止非擁有者進行未授權更新 ([#9001](https://github.com/nocobase/nocobase/pull/9001)) - @mytharcher

- **[工作流：SQL 節點]** 修復 SQL 節點的安全性問題 ([#8989](https://github.com/nocobase/nocobase/pull/8989)) - @mytharcher

- **[資料視覺化]**
  - 使用基於變數的篩選器時，圖表在初始渲染時無法正確解析變數值 ([#8964](https://github.com/nocobase/nocobase/pull/8964)) - @2013xile

  - 修復啟用空間插件後，根角色圖表資料統計異常的問題 ([#8969](https://github.com/nocobase/nocobase/pull/8969)) - @jiannx

- **[操作：匯入記錄]** 修復開啟 plugin-space 後匯入失敗的問題 ([#8968](https://github.com/nocobase/nocobase/pull/8968)) - @jiannx

- **[工作流：JavaScript]** 修復安全性問題 ([#8967](https://github.com/nocobase/nocobase/pull/8967)) - @mytharcher

- **[操作：匯出記錄]** 限制多層關聯欄位的匯入和匯出配置 ([#8893](https://github.com/nocobase/nocobase/pull/8893)) - @jiannx

- **[自訂變數]** 跳過 auth 通知 ([#8942](https://github.com/nocobase/nocobase/pull/8942)) - @chenos

- **[本地化]** 防止在權限拒絕時發送 localizationTexts:missing 請求 ([#8903](https://github.com/nocobase/nocobase/pull/8903)) - @chenos

- **[認證]** 修復 acl 以支援自訂狀態篩選參數 ([#8918](https://github.com/nocobase/nocobase/pull/8918)) - @jiannx

- **[流程引擎]** 移除從 uiSchema 儲存庫複製的舊事件，以避免觸發時拋出錯誤 ([#8957](https://github.com/nocobase/nocobase/pull/8957)) - @mytharcher

- **[操作：匯入記錄 Pro]**
  - 限制多層關聯欄位的匯入和匯出配置 - @jiannx

  - 修復未勾選「觸發工作流」選項時功能不生效的問題 - @mytharcher

- **[資料來源：外部 Oracle]** 修復載入 Oracle 外部資料來源時發生的錯誤 - @2013xile

- **[工作流：審批]**
  - 修復舊版遷移的版本限制，以避免在最新版本部署啟動時拋出錯誤 - @mytharcher

  - 為已刪除的工作流新增容錯處理，以避免任務列表載入錯誤 - @mytharcher

  - 修復 v2 審批表單返回按鈕中的翻譯、節點選擇和返回目標問題 - @zhangzhonghe

  - 為無 `latestRound` 的情況新增容錯處理 - @mytharcher

- **[郵件管理器]**
  - 修復使用範本時簽名被覆蓋的問題 - @jiannx

  - 郵件發送後未顯示關閉確認 - @jiannx
