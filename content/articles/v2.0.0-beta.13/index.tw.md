---
title: "NocoBase v2.0.0-beta.13：支援設定 CORS 來源白名單"
description: "v2.0.0-beta.13 版本發行說明"
---

### 🚀 改進

- **[伺服器]** 支援設定 CORS 來源白名單 ([#8454](https://github.com/nocobase/nocobase/pull/8454)) - 貢獻者：@2013xile

- **[動作：匯出記錄]** 根據選取的記錄或資源篩選器，改善匯出動作的資料範圍 ([#8442](https://github.com/nocobase/nocobase/pull/8442)) - 貢獻者：@katherinehhh

- **[動作：匯出記錄 Pro]** 根據選取的記錄或資源篩選器，改善匯出動作的資料範圍 - 貢獻者：@katherinehhh

### 🐛 錯誤修復

- **[客戶端]**
  - 修復「自訂變數」彈出視窗被遮擋的問題 ([#8463](https://github.com/nocobase/nocobase/pull/8463)) - 貢獻者：@zhangzhonghe

  - 修復在圖形化介面中編輯資料表時的問題 ([#8451](https://github.com/nocobase/nocobase/pull/8451)) - 貢獻者：@katherinehhh

  - 修復資料表欄位群組排序設定未生效的問題 ([#8453](https://github.com/nocobase/nocobase/pull/8453)) - 貢獻者：@katherinehhh

  - 修復快捷鍵模態框高度超出視窗高度的問題 ([#8437](https://github.com/nocobase/nocobase/pull/8437)) - 貢獻者：@zhangzhonghe

  - 修復表格列按鈕聯動規則影響彈出表單內按鈕狀態的問題 ([#8434](https://github.com/nocobase/nocobase/pull/8434)) - 貢獻者：@zhangzhonghe

  - 修復切換頁面時表格操作列狀態被污染的問題 ([#8438](https://github.com/nocobase/nocobase/pull/8438)) - 貢獻者：@gchust

  - 修復表格「欄位設定」按鈕無法使用的問題 ([#8441](https://github.com/nocobase/nocobase/pull/8441)) - 貢獻者：@zhangzhonghe

  - 修復檔案關聯欄位的選取器彈出視窗 z-index 不正確，且彈出視窗設定無法正確儲存的問題 ([#8446](https://github.com/nocobase/nocobase/pull/8446)) - 貢獻者：@gchust

- **[流程引擎]**
  - 修復 runjs 程式碼參數中的變數在執行前被解析的問題 ([#8445](https://github.com/nocobase/nocobase/pull/8445)) - 貢獻者：@gchust

  - 修復在資料選擇器的快速建立彈出視窗中無法選取彈出變數的問題 ([#8450](https://github.com/nocobase/nocobase/pull/8450)) - 貢獻者：@gchust

  - 修復重複點擊設定選單可能開啟多個設定彈出視窗的問題 ([#8448](https://github.com/nocobase/nocobase/pull/8448)) - 貢獻者：@gchust

- **[行動版（已棄用）]** 棄用的行動版外掛（自 2.0 版本起由 ui-layout 外掛取代）([#8456](https://github.com/nocobase/nocobase/pull/8456)) - 貢獻者：@chenos

- **[流程引擎]** 修復包含連字號的變數無法正確解析的問題 ([#8432](https://github.com/nocobase/nocobase/pull/8432)) - 貢獻者：@gchust

- **[電子郵件管理員]** 修復電子郵件設定彈出視窗被遮擋的問題 - 貢獻者：@zhangzhonghe
