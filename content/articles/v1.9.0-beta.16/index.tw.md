---
title: "NocoBase v1.9.0-beta.16：支援「資料儲存前」觸發模式"
description: "v1.9.0-beta.16 版本發行說明"
---

### 🎉 新功能

- **[工作流：審批]** 支援「資料儲存前」的觸發模式，作者：@mytharcher

### 🚀 改進

- **[伺服器]** 新增閘道日誌 ([#7683](https://github.com/nocobase/nocobase/pull/7683))，作者：@2013xile

- **[工作流：通知節點]** 為通知節點新增 `ignoreFail` 選項，允許在通知發送失敗時繼續執行工作流 ([#7736](https://github.com/nocobase/nocobase/pull/7736))，作者：@mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 修正在動作面板中 QR 碼掃描連動規則配置的問題 ([#7693](https://github.com/nocobase/nocobase/pull/7693))，作者：@katherinehhh

  - 修正 iframe 區塊在模態框內連動規則失效的問題 ([#7694](https://github.com/nocobase/nocobase/pull/7694))，作者：@katherinehhh

- **[資料庫]** 跳過 MySQL JSON 欄位的預設值同步 ([#7696](https://github.com/nocobase/nocobase/pull/7696))，作者：@2013xile

- **[工作流]**
  - 修正服務拆分模式下，記憶體中待處理佇列處理不當導致部分工作流無法執行的問題 ([#7692](https://github.com/nocobase/nocobase/pull/7692))，作者：@mytharcher

  - 修正使用延遲建立時執行狀態的值 ([#7721](https://github.com/nocobase/nocobase/pull/7721))，作者：@mytharcher

  - 修正刪除開始分支的節點後，分支內保留的第一個節點鍵值被錯誤更改為新值的問題 ([#7665](https://github.com/nocobase/nocobase/pull/7665))，作者：@mytharcher

- **[存取控制]** 修正 `resourceManager` 的中介軟體順序 ([#7728](https://github.com/nocobase/nocobase/pull/7728))，作者：@2013xile

- **[檔案管理]** 修正 `.msg` 檔案無法正常上傳的問題 ([#7662](https://github.com/nocobase/nocobase/pull/7662))，作者：@mytharcher

- **[工作流：人工節點]** 修正工作流停用後人工任務消失的問題 ([#7687](https://github.com/nocobase/nocobase/pull/7687))，作者：@mytharcher

- **[集合欄位：中國行政區劃]** 當城市與區域名稱相同時資料匯入失敗 ([#7673](https://github.com/nocobase/nocobase/pull/7673))，作者：@2013xile

- **[工作流：審批]**
  - 修正審批完成通知中狀態文字的翻譯問題，當使用者未設定語言偏好時，使用系統預設語言進行翻譯，作者：@mytharcher

  - 修正語言區域設定，作者：@mytharcher
