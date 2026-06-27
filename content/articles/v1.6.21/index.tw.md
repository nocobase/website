---
title: "NocoBase v1.6.21：為無延遲開啟的場景新增延遲 API"
description: "v1.6.21 版本發布說明"
---

### 🚀 改進

- **[client]** 為無延遲開啟的情境新增延遲 API ([#6681](https://github.com/nocobase/nocobase/pull/6681)) - @mytharcher

- **[create-nocobase-app]** 將部分相依套件升級至最新版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673)) - @chenos

### 🐛 錯誤修復

- **[client]**
  - 修正在審批節點配置中，滑鼠懸停在引用模板區塊時拋出的錯誤 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) - @mytharcher

  - 自訂關聯欄位未顯示欄位元件設定 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) - @katherinehhh

  - 修正上傳元件的語系設定 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) - @mytharcher

  - 延遲載入遺失的 UI 元件會導致渲染錯誤 ([#6683](https://github.com/nocobase/nocobase/pull/6683)) - @gchust

  - 將原生密碼元件新增至 HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) - @mytharcher

  - 繼承欄位顯示於目前集合的欄位指派清單中 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) - @katherinehhh

- **[database]** 修正 CI 建置錯誤 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) - @aaaaaajie

- **[build]** 當外掛相依於某些 AMD 函式庫時，建置輸出不正確 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) - @gchust

- **[Action: 匯入記錄]** 修正匯入 xlsx 時間欄位時的錯誤 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) - @aaaaaajie

- **[Workflow: 人工節點]** 修正人工任務狀態常數 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) - @mytharcher

- **[Block: iframe]** 當 iframe 區塊設定為全高時，出現垂直捲動條 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) - @katherinehhh

- **[Workflow: 自訂動作事件]** 修正測試案例 - @mytharcher

- **[備份管理員]** 嘗試使用密碼還原未加密備份時，發生逾時錯誤 - @gchust
