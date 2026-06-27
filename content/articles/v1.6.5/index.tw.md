---
title: "NocoBase v1.6.5：簡化檔案 URL 生成邏輯與 API"
description: "v1.6.5 版本發行說明"
---

### 🚀 功能改進

- **[檔案管理]** 簡化檔案 URL 生成邏輯與 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) - @mytharcher

- **[檔案儲存：S3(Pro)]** 改用更簡單的方式產生檔案 URL - @mytharcher

- **[備份管理]** 允許在相同版本的預發行版與正式版之間還原備份 - @gchust

### 🐛 錯誤修復

- **[客戶端]**
  - 提交時富文字欄位未清除資料 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) - @katherinehhh

  - 頁面右上角圖示顏色未隨主題變更 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) - @zhangzhonghe

  - 點擊篩選表單的重設按鈕無法清除網格卡片區塊的篩選條件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) - @zhangzhonghe

- **[工作流：人工節點]**
  - 修正遷移 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) - @mytharcher

  - 變更遷移名稱以確保可重新執行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) - @mytharcher

  - 修正篩選器中的工作流標題欄位 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) - @mytharcher

  - 修正當 id 欄位不存在時的遷移錯誤 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) - @chenos

  - 避免從欄位同步集合 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) - @mytharcher

- **[工作流：聚合節點]** 修正對空結果進行四捨五入的問題 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) - @mytharcher

- **[工作流]** 工作流刪除後不計入任務數量 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) - @mytharcher

- **[備份管理]** 缺少預設備份設定時無法啟動伺服器 - @gchust

- **[工作流：審批]**
  - 修正流程表單中的檔案關聯欄位錯誤 - @mytharcher

  - 修正基於鉤子的任務計數 - @mytharcher
