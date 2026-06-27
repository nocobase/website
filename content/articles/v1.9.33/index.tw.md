---
title: "NocoBase v1.9.33：支援檔案重新命名方法配置"
description: "v1.9.33 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援應用程式進入維護狀態時，由外掛定義的維護元件 ([#8252](https://github.com/nocobase/nocobase/pull/8252)) - @cgyrock

- **[檔案管理]** 支援檔案重新命名方式的設定 ([#8231](https://github.com/nocobase/nocobase/pull/8231)) - @JAVA-LW

- **[檔案儲存：S3(Pro)]** 為 S3 Pro 儲存新增重新命名模式選項 - @mytharcher

### 🚀 改進

- **[遷移管理]** 改善遷移檢查、支援 SQL 下載、日誌格式化及執行過程可視性 - @cgyrock

### 🐛 錯誤修復

- **[資料庫]**
  - 查詢多對多關聯時納入中間表範圍 ([#8277](https://github.com/nocobase/nocobase/pull/8277)) - @2013xile

  - 修正 `OptionsParser` 中的物件 `appends`，並增加參數的 `arrayLimit` ([#8328](https://github.com/nocobase/nocobase/pull/8328)) - @mytharcher

- **[客戶端]** 修正多對多欄位在篩選表單區塊設定中拋出錯誤的問題 ([#8282](https://github.com/nocobase/nocobase/pull/8282)) - @mytharcher

- **[非同步任務管理]** 修正取消背景任務的語言問題 ([#8245](https://github.com/nocobase/nocobase/pull/8245)) - @mytharcher

- **[檔案管理]** 修正上傳大於 5MB 檔案至 AWS S3 時拋出錯誤的問題 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) - @mytharcher

- **[工作流程]** 修正重新整理外部資料來源後資料庫事件失效的問題 ([#8207](https://github.com/nocobase/nocobase/pull/8207)) - @cgyrock

- **[集合：樹]** 批次建立樹狀集合節點後更新路徑 ([#8267](https://github.com/nocobase/nocobase/pull/8267)) - @2013xile

- **[資料來源：外部 PostgreSQL]** 修正重新整理外部資料來源後資料庫事件失效的問題 - @cgyrock

- **[資料來源：外部 Oracle]** 修正重新整理外部資料來源後資料庫事件失效的問題 - @cgyrock
