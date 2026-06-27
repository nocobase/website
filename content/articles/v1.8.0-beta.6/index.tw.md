---
title: "NocoBase v1.8.0-beta.6：新增環境變數以控制稽核日誌輸出方式"
description: "v1.8.0-beta.6 版本發布說明"
---

### 🎉 新功能

- **[稽核日誌]** 新增環境變數 `AUDIT_LOGGER_TRANSPORT` 以控制稽核日誌輸出方式，由 @2013xile 貢獻

### 🚀 改進

- **[客戶端]** 禁止將群組選單拖曳至自身內部 ([#7005](https://github.com/nocobase/nocobase/pull/7005))，由 @zhangzhonghe 貢獻

- **[日曆]** 支援在日曆區塊中設定每週起始日 ([#7032](https://github.com/nocobase/nocobase/pull/7032))，由 @katherinehhh 貢獻

- **[集合欄位：Markdown(Vditor)]** 支援在 Markdown (Vditor) 預覽模式下點擊圖片放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024))，由 @katherinehhh 貢獻

- **[集合欄位：多對多（陣列）]** 修正資料表中顯示多對多（多）欄位時的權限相關錯誤 ([#7028](https://github.com/nocobase/nocobase/pull/7028))，由 @aaaaaajie 貢獻

- **[留言]** 支援留言區塊的分頁功能，由 @katherinehhh 貢獻

### 🐛 錯誤修復

- **[客戶端]**
  - 修正二級彈出表單中設定欄位時的自動關閉問題 ([#7052](https://github.com/nocobase/nocobase/pull/7052))，由 @katherinehhh 貢獻

  - 修正連動規則導致無限迴圈的問題 ([#7050](https://github.com/nocobase/nocobase/pull/7050))，由 @zhangzhonghe 貢獻

  - 修正二級彈出表單中設定欄位時的自動關閉問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042))，由 @katherinehhh 貢獻

  - 修正上傳大小提示 ([#7057](https://github.com/nocobase/nocobase/pull/7057))，由 @mytharcher 貢獻

  - 修正：在 APIClient 中使用可選鏈結來安全拒絕請求，當處理器可能為 undefined 時 ([#7054](https://github.com/nocobase/nocobase/pull/7054))，由 @sheldon66 貢獻

  - 修正二級彈出表單中設定欄位時的自動關閉問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042))，由 @katherinehhh 貢獻

  - 修正因重複 API 請求導致區塊範本中欄位未顯示的問題 ([#6985](https://github.com/nocobase/nocobase/pull/6985))，由 @zhangzhonghe 貢獻

  - 修正篩選表單連動規則中選擇欄位選項無效的問題 ([#7035](https://github.com/nocobase/nocobase/pull/7035))，由 @katherinehhh 貢獻

  - 修正篩選表單驗證規則導致篩選按鈕失效的問題 ([#6975](https://github.com/nocobase/nocobase/pull/6975))，由 @zhangzhonghe 貢獻

  - 修正無法使用連動規則清除子表格必填欄位指示符的問題 ([#7022](https://github.com/nocobase/nocobase/pull/7022))，由 @zhangzhonghe 貢獻

  - 修正篩選區塊參數錯誤問題 ([#6966](https://github.com/nocobase/nocobase/pull/6966))，由 @zhangzhonghe 貢獻

  - 解決區塊無法從外部資料來源讀取檢視資料的問題 ([#7017](https://github.com/nocobase/nocobase/pull/7017))，由 @aaaaaajie 貢獻

  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012))，由 @mytharcher 貢獻

  - 修正連動規則中當前物件變數無效的問題 ([#7008](https://github.com/nocobase/nocobase/pull/7008))，由 @zhangzhonghe 貢獻

- **[資料庫]** 修正：在匯入 xlsx 時遺失建立者與更新者欄位 ([#7011](https://github.com/nocobase/nocobase/pull/7011))，由 @aaaaaajie 貢獻

- **[undefined]** 移除 possibleTypes 對資料庫的依賴，強制採用 API 驅動的配置，由 @aaaaaajie 貢獻

- **[動作：匯入記錄]**
  - 修正 xlsx 匯入，限制文字區域欄位僅接受非字串格式資料 ([#7049](https://github.com/nocobase/nocobase/pull/7049))，由 @aaaaaajie 貢獻

  - 修正涉及關聯欄位時子表格匯入失敗的問題 ([#7039](https://github.com/nocobase/nocobase/pull/7039))，由 @aaaaaajie 貢獻

  - 修正匯入 XLSX 樹狀表格資料時，批次編輯發生錯誤的問題 ([#7013](https://github.com/nocobase/nocobase/pull/7013))，由 @aaaaaajie 貢獻

- **[資料視覺化]**
  - 修正圖表篩選器中日期區間欄位顯示不正確 ([#7051](https://github.com/nocobase/nocobase/pull/7051))，由 @katherinehhh 貢獻

  - 圖表中的核取方塊群組欄位應顯示標籤而非原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033))，由 @2013xile 貢獻

- **[API 文件]** 非 NocoBase 官方插件無法顯示 API 文件 ([#7045](https://github.com/nocobase/nocobase/pull/7045))，由 @chenzhizdt 貢獻

- **[工作流]**
  - 修正排程觸發器中 `toJSON()` 導致的錯誤 ([#7037](https://github.com/nocobase/nocobase/pull/7037))，由 @mytharcher 貢獻

  - 修正當觸發器未正確配置時，手動執行操作拋出錯誤的問題 ([#7036](https://github.com/nocobase/nocobase/pull/7036))，由 @mytharcher 貢獻

  - 修正工作流不存在時的 UI 錯誤 ([#7023](https://github.com/nocobase/nocobase/pull/7023))，由 @mytharcher 貢獻

  - 修正集合事件在「建立或更新」模式下，當建立時未變更欄位則無法觸發的問題 ([#7015](https://github.com/nocobase/nocobase/pull/7015))，由 @mytharcher 貢獻

- **[資料來源管理器]** 移除 possibleTypes 對資料庫的依賴，強制採用 API 驅動的配置 ([#7019](https://github.com/nocobase/nocobase/pull/7019))，由 @aaaaaajie 貢獻

- **[行動端]** 優化行動端彈出視窗延遲問題 ([#7029](https://github.com/nocobase/nocobase/pull/7029))，由 @zhangzhonghe 貢獻

- **[動作：匯出記錄 Pro]** 修正帶條件匯出附件時發生的錯誤，由 @aaaaaajie 貢獻

- **[工作流：JavaScript]** 修正 require 相對路徑的問題，由 @mytharcher 貢獻

- **[範本列印]** 修正權限解析錯誤並新增資料未找到的檢查，由 @sheldon66 貢獻

- **[工作流：審批]**
  - 避免未定義欄位錯誤，由 @mytharcher 貢獻

  - 修正工作流被刪除時拋出的錯誤，由 @mytharcher 貢獻

  - 修正觸發變數，由 @mytharcher 貢獻

  - 從快照重新載入檔案關聯以避免 URL 過期，由 @mytharcher 貢獻

  - 修正重新整理詳細頁面時的 API 錯誤，由 @mytharcher 貢獻

- **[企業微信]** 在閘道中介軟體中新增回呼路徑檢查，由 @2013xile 貢獻
