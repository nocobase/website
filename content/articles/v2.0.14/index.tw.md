---
title: "NocoBase v2.0.14：改進遷移檢查、支援 SQL 下載、日誌格式化與執行流程可視化"
description: "v2.0.14 版本發行說明"
---

### 🚀 改進項目

- **[遷移管理器]** 改善遷移檢查、支援 SQL 下載、日誌格式與執行流程可視性，由 @cgyrock 貢獻

### 🐛 錯誤修復

- **[客戶端]**
  - 修復篩選表單欄位值中自訂欄位無法正確顯示對應輸入類型的問題 ([#8823](https://github.com/nocobase/nocobase/pull/8823))，由 @zhangzhonghe 貢獻

  - 修復在排序欄位後，v2 篩選表單摺疊按鈕失效的問題 ([#8843](https://github.com/nocobase/nocobase/pull/8843))，由 @zhangzhonghe 貢獻

  - 修復參考範本 (v1) 管理頁面缺少篩選與重新整理動作的問題 ([#8833](https://github.com/nocobase/nocobase/pull/8833))，由 @gchust 貢獻

  - 子表單與子表格因權限檢查導致資料無法顯示 ([#8846](https://github.com/nocobase/nocobase/pull/8846))，由 @chenos 貢獻

- **[存取控制]** 使用 collection.filterTargetKey 取代 Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853))，由 @chenos 貢獻

- **[UI 範本]**
  - 修復動作面板參考區塊的渲染錯誤 ([#8818](https://github.com/nocobase/nocobase/pull/8818))，由 @gchust 貢獻

  - 修復將詳細區塊儲存為範本後，關聯記錄無法正確載入的問題 ([#8827](https://github.com/nocobase/nocobase/pull/8827))，由 @gchust貢獻

- **[工作流：審批]**
  - 修復審批人未依節點設定的順序執行的問題，由 @mytharcher 貢獻

  - 修復審批處理詳情中未翻譯的標籤，由 @zhangzhonghe 貢獻

- **[遷移管理器]**
  - 修復建置錯誤，由 @mytharcher 貢獻

  - 修復遺失遷移描述，並將目前時間設為預設值，由 @cgyrock 貢獻

  - 修復因記錄遷移錯誤例外中包含過大 SQL 語句而可能導致的程序凍結，由 @cgyrock 貢獻

  - 將暫存目錄調整至 storage 中，以支援叢集模式下的使用，由 @mytharcher 貢獻
