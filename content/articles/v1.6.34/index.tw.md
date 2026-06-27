---
title: "NocoBase v1.6.34：支援在匯入設定時透過多個欄位定義唯一記錄"
description: "v1.6.34 版本發行說明"
---

### 🎉 新功能

- **[動作：匯入記錄 Pro]**
  - 支援在匯入設定時，透過多個欄位定義唯一記錄，由 @aaaaaajie 提供

  - 支援在匯入設定時，設定覆蓋空白儲存格及忽略空白儲存格，由 @aaaaaajie 提供

### 🚀 改進

- **[未定義]** 將 CI 的 Node 版本升級至 20（[#6927](https://github.com/nocobase/nocobase/pull/6927)），由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]**
  - 連結規則中的 noneOf 條件檢查失敗（[#6934](https://github.com/nocobase/nocobase/pull/6934)），由 @katherinehhh 提供

  - 區塊高度設定未即時套用（[#6904](https://github.com/nocobase/nocobase/pull/6904)），由 @katherinehhh 提供

- **[未定義]** 因 commander 套件需求而使用 Node 20（[#6924](https://github.com/nocobase/nocobase/pull/6924)），由 @mytharcher 提供

- **[資料庫]** 修復 uuid 或 nanoid 自動產生在多重關聯中無法運作的問題（[#6912](https://github.com/nocobase/nocobase/pull/6912)），由 @aaaaaajie 提供

- **[動作：匯出記錄]** 修復巢狀關聯無法正確匯出的問題（[#6917](https://github.com/nocobase/nocobase/pull/6917)），由 @aaaaaajie 提供

- **[資料來源管理器]** 解決拖曳排序無法運作的問題（[#6937](https://github.com/nocobase/nocobase/pull/6937)），由 @chenos 提供

- **[API 文件]** 在 req.headers 中補上遺漏的子應用程式資訊（[#6933](https://github.com/nocobase/nocobase/pull/6933)），由 @chenos 提供

- **[通知：應用程式內訊息]** 解決應用程式內訊息中「全部標為已讀」動作可能影響其他使用者資料的問題（[#6926](https://github.com/nocobase/nocobase/pull/6926)），由 @sheldon66 提供

- **[工作流程：自訂動作事件]** 避免因外掛載入順序導致的錯誤，由 @mytharcher 提供

- **[檔案儲存：S3(Pro)]**
  - 修正預覽網址與上傳參數，由 @mytharcher 提供

  - 修正重複的上傳參數，由 @mytharcher 提供

- **[區塊：多步驟表單]** 修正型別，由 @mytharcher 提供

- **[工作流程：審核]**
  - 修正 ViewAction 的記錄 ID 不正確，由 @mytharcher 提供

  - 修正提交審核流程前的 appends 與資料計算，由 @mytharcher 提供
