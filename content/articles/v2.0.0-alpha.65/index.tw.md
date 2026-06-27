---
title: "NocoBase v2.0.0-alpha.65：為基礎任務管理器添加進程級並發控制"
description: "v2.0.0-alpha.65 版本發布說明"
---

### 🎉 新功能

- **[測試]** 為基礎任務管理器新增進程級並發控制 ([#8343](https://github.com/nocobase/nocobase/pull/8343)) - 貢獻者：@cgyrock

### 🚀 改進

- **[客戶端]**
  - 富文本編輯器支援字型大小調整、圖片大小調整及軟換行 ([#8401](https://github.com/nocobase/nocobase/pull/8401)) - 貢獻者：@jiannx

  - 支援指定事件流程的執行時機 ([#8340](https://github.com/nocobase/nocobase/pull/8340)) - 貢獻者：@gchust

  - 透過改用原生 webkit CSS 實現文字省略，提升外掛管理員列表的渲染效能 ([#8391](https://github.com/nocobase/nocobase/pull/8391)) - 貢獻者：@mytharcher

- **[求值器]** 更新 math.js 版本以支援更多函數 ([#8411](https://github.com/nocobase/nocobase/pull/8411)) - 貢獻者：@mytharcher

- **[CLI]** 支援透過環境變數設定 CDN 基礎 URL ([#8384](https://github.com/nocobase/nocobase/pull/8384)) - 貢獻者：@chenos

- **[流程引擎]** 為 GridModel 新增 `rowOrder` 以確保行順序一致 ([#8371](https://github.com/nocobase/nocobase/pull/8371)) - 貢獻者：@zhangzhonghe

- **[流程引擎]** 支援解析當前表單記錄中未新增至編輯表單的欄位值 ([#8436](https://github.com/nocobase/nocobase/pull/8436)) - 貢獻者：@gchust

- **[AI 員工]**
  - 優化 AI 入口按鈕 ([#8414](https://github.com/nocobase/nocobase/pull/8414)) - 貢獻者：@heziqiang

  - 將工作流程呼叫器的結果變更為 `execution.output`，透過明確使用輸出節點可使結果保持穩定 ([#8423](https://github.com/nocobase/nocobase/pull/8423)) - 貢獻者：@mytharcher

  - 在入口列表中隱藏建構器 AI。<br/> 優化 LLM 整合流程。<br/> 更新關於 AI 模型 gemini-3 的文件。 ([#8409](https://github.com/nocobase/nocobase/pull/8409)) - 貢獻者：@heziqiang

  - 支援 Anthropic 和 Claude-4.5 ([#8389](https://github.com/nocobase/nocobase/pull/8389)) - 貢獻者：@heziqiang

- **[通知：應用內訊息]** 修正向大量使用者發送應用內訊息時的效能問題 ([#8402](https://github.com/nocobase/nocobase/pull/8402)) - 貢獻者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正快捷鍵模態框高度超過視口高度的問題 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) - 貢獻者：@zhangzhonghe

  - 修正表格行按鈕聯動規則影響彈出表單內按鈕狀態的問題 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) - 貢獻者：@zhangzhonghe

  - 修正切換頁面時表格操作欄狀態被污染的問題 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) - 貢獻者：@gchust

  - 為操作結構描述增加容錯處理，避免點擊操作按鈕時頁面崩潰 ([#8420](https://github.com/nocobase/nocobase/pull/8420)) - 貢獻者：@mytharcher

  - 修正當關聯欄位在建立表單中設為唯讀模式時，標題欄位未更新的問題 ([#8413](https://github.com/nocobase/nocobase/pull/8413)) - 貢獻者：@katherinehhh

  - 數字組件不顯示值 ([#8410](https://github.com/nocobase/nocobase/pull/8410)) - 貢獻者：@chenos

  - 修正設定附件 URL 後，再將表單項目切換為其他欄位時，標題欄位設定消失的問題 ([#8418](https://github.com/nocobase/nocobase/pull/8418)) - 貢獻者：@katherinehhh

  - 修正提交按鈕在啟用確認功能時，跳過必填驗證無效的問題 ([#8400](https://github.com/nocobase/nocobase/pull/8400)) - 貢獻者：@katherinehhh

  - 修正網格卡片區塊中的佈局設定未生效的問題 ([#8399](https://github.com/nocobase/nocobase/pull/8399)) - 貢獻者：@katherinehhh

  - 修正建立表單提交成功後，級聯選擇資料未清除的問題 ([#8403](https://github.com/nocobase/nocobase/pull/8403)) - 貢獻者：@katherinehhh

  - 修正數字欄位輸入中文字元時阻止賦值的問題 ([#8397](https://github.com/nocobase/nocobase/pull/8397)) - 貢獻者：@katherinehhh

  - 解決一對一關聯欄位的檔案選擇彈出視窗中出現提交按鈕的問題 ([#8398](https://github.com/nocobase/nocobase/pull/8398)) - 貢獻者：@katherinehhh

  - 修正可選 targetKey 的精煉邏輯 ([#8333](https://github.com/nocobase/nocobase/pull/8333)) - 貢獻者：@katherinehhh

- **[流程引擎]** 修正透過按鈕點擊開啟彈出視窗時，動態事件流程步驟執行兩次的問題 ([#8435](https://github.com/nocobase/nocobase/pull/8435)) - 貢獻者：@gchust

- **[流程引擎]** 修正當 filterByTk 為陣列時變數解析錯誤的問題 ([#8412](https://github.com/nocobase/nocobase/pull/8412)) - 貢獻者：@gchust

- **[檔案管理員]** 修正上傳至 S3 儲存空間的檔案 URL 生成錯誤的問題 ([#8392](https://github.com/nocobase/nocobase/pull/8392)) - 貢獻者：@mytharcher

- **[集合欄位：多對多（陣列）]** 修正關聯查詢中附加二級多對多（陣列）關聯時出現的錯誤 ([#8406](https://github.com/nocobase/nocobase/pull/8406)) - 貢獻者：@cgyrock

- **[工作流程]**
  - 修正重複節點中結構描述 ID 未更新的問題 ([#8396](https://github.com/nocobase/nocobase/pull/8396)) - 貢獻者：@mytharcher

  - 為工作的雪花 ID 新增實例 ID，以避免叢集模式下 ID 衝突的問題 ([#8382](https://github.com/nocobase/nocobase/pull/8382)) - 貢獻者：@mytharcher

- **[區塊：範本（已棄用）]** 修正無法存取繼承範本（v1）編輯頁面的問題 ([#8376](https://github.com/nocobase/nocobase/pull/8376)) - 貢獻者：@gchust

- **[資料來源：REST API]** 為請求上下文增加容錯處理，避免方法不在上下文中時拋出錯誤 - 貢獻者：@mytharcher

- **[多空間]**
  - 新增關聯資料時的相關空間 - 貢獻者：@jiannx

  - 空間選擇器顏色跟隨主題 - 貢獻者：@jiannx

- **[範本列印]**
  - 修正被遮蔽的配置範本彈出視窗問題 - 貢獻者：@zhangzhonghe

  - 支援空間欄位 - 貢獻者：@jiannx

  - 在 2.0 版本中顯示空間欄位 - 貢獻者：@jiannx

- **[檔案儲存：S3（專業版）]** 修正檔案重新命名模式不起作用的問題 - 貢獻者：@mytharcher

- **[工作流程：審批]**
  - 修正因參數錯誤導致載入不正確記錄的問題 - 貢獻者：@mytharcher

  - 修正因缺少 `ValueBlock.Result` 元件導致值區塊不顯示的問題 - 貢獻者：@mytharcher

- **[電子郵件管理員]**
  - 修正對話鏈 - 貢獻者：@jiannx

  - 管理頁面添加篩選 - 貢獻者：@jiannx
