---
title: "NocoBase v2.0.0-alpha.25：優化 AI 編碼體驗"
description: "v2.0.0-alpha.25 版本發行說明"
---

### 🚀 改進項目

- **[伺服器]** 新增閘道日誌 ([#7683](https://github.com/nocobase/nocobase/pull/7683)) by @2013xile

- **[流程引擎]** 支援在流程步驟定義中定義變數上下文 ([#7674](https://github.com/nocobase/nocobase/pull/7674)) by @gchust

- **[資料視覺化]**
  - 在設定圖表選項前，新增執行查詢的提示 ([#7685](https://github.com/nocobase/nocobase/pull/7685)) by @heziqiang

  - 點擊全域預覽按鈕時重新整理圖表資料 ([#7678](https://github.com/nocobase/nocobase/pull/7678)) by @heziqiang

- **[AI 員工]** 優化 AI 編碼體驗，包括使用 AI 員工進行程式碼審查、診斷與修復。 ([#7679](https://github.com/nocobase/nocobase/pull/7679)) by @cgyrock

- **[資料來源管理器]** 調整欄位類型與介面的欄位順序，並在進行修改時新增確認步驟。 ([#7680](https://github.com/nocobase/nocobase/pull/7680)) by @2013xile

- **[工作流]** 完成更新記錄動作按鈕的綁定工作流設定 ([#7668](https://github.com/nocobase/nocobase/pull/7668)) by @mytharcher

- **[多應用管理器（已棄用）]** 改善應用程式管理員 ([#7661](https://github.com/nocobase/nocobase/pull/7661)) by @chenos

### 🐛 錯誤修復

- **[客戶端]**
  - 解決使用者無法為唯讀模式顯示的欄位設定預設值的問題。這確保了當欄位不可編輯時，欄位設定能更順暢。 ([#7689](https://github.com/nocobase/nocobase/pull/7689)) by @gchust

  - 修復子表單聯動規則的已知問題 ([#7698](https://github.com/nocobase/nocobase/pull/7698)) by @zhangzhonghe

  - JS 區塊欄位選單無法在篩選表單區塊中載入 ([#7690](https://github.com/nocobase/nocobase/pull/7690)) by @gchust

- **[流程引擎]** 在編輯表單內編輯關聯欄位的資料範圍時，當前彈出記錄的上下文選擇不正確 ([#7675](https://github.com/nocobase/nocobase/pull/7675)) by @gchust

- **[工作流：人工節點]** 修正在工作流停用後，人工任務消失的問題 ([#7687](https://github.com/nocobase/nocobase/pull/7687)) by @mytharcher

- **[AI 員工]** 修正在選取具有關聯 API 資源的區塊時，未能擷取對應資料的問題。 ([#7688](https://github.com/nocobase/nocobase/pull/7688)) by @cgyrock

- **[工作流]** 修正刪除開始分支的節點後，分支內保留的第一個節點鍵值被錯誤更改為新值的問題 ([#7665](https://github.com/nocobase/nocobase/pull/7665)) by @mytharcher

- **[集合欄位：中國行政區劃]** 當城市與區域名稱相同時，資料匯入失敗 ([#7673](https://github.com/nocobase/nocobase/pull/7673)) by @2013xile

- **[檔案管理器]** 修正 `.msg` 檔案無法正常上傳的問題 ([#7662](https://github.com/nocobase/nocobase/pull/7662)) by @mytharcher

- **[流程引擎]** 無法在聯動設定欄位動作中解析變數 ([#7684](https://github.com/nocobase/nocobase/pull/7684)) by @gchust

- **[資料視覺化]** 初始化時使用 sql:runById API 擷取查詢資料 ([#7677](https://github.com/nocobase/nocobase/pull/7677)) by @heziqiang

- **[工作流：審批]** 修正審批完成通知中狀態文字的翻譯問題，當使用者未設定語言偏好時，使用系統預設語言進行翻譯 by @mytharcher
