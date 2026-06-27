---
title: "NocoBase v1.7.0-beta.5：支援內聯表格操作僅圖示模式"
description: "v1.7.0-beta.5 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援內聯表格操作僅顯示圖示模式，懸停時顯示操作名稱 ([#6451](https://github.com/nocobase/nocobase/pull/6451)) by @katherinehhh

### 🚀 改進

- **[檔案管理]** 簡化檔案 URL 生成邏輯與 API ([#6472](https://github.com/nocobase/nocobase/pull/6472)) by @mytharcher

- **[檔案儲存：S3(Pro)]**
  - 將「存取 URL 基礎」文字改為「基礎 URL」 by @zhangzhonghe

  - 改為更簡單的方式生成檔案 URL by @mytharcher

- **[備份管理]** 允許在同一個版本的預發行版與正式版之間還原備份 by @gchust

### 🐛 錯誤修復

- **[客戶端]**
  - 頁面右上角圖示的顏色未隨主題變化 ([#6482](https://github.com/nocobase/nocobase/pull/6482)) by @zhangzhonghe

  - 提交時富文字欄位未清除資料 ([#6486](https://github.com/nocobase/nocobase/pull/6486)) by @katherinehhh

  - 點擊篩選表單的重設按鈕無法清除網格卡片區塊的篩選條件 ([#6475](https://github.com/nocobase/nocobase/pull/6475)) by @zhangzhonghe

- **[工作流：人工節點]**
  - 修復遷移 ([#6484](https://github.com/nocobase/nocobase/pull/6484)) by @mytharcher

  - 變更遷移名稱以確保重新執行 ([#6487](https://github.com/nocobase/nocobase/pull/6487)) by @mytharcher

  - 修復篩選中的工作流標題欄位 ([#6480](https://github.com/nocobase/nocobase/pull/6480)) by @mytharcher

  - 避免從欄位同步的集合 ([#6478](https://github.com/nocobase/nocobase/pull/6478)) by @mytharcher

  - 修復當 id 欄位不存在時的遷移錯誤 ([#6470](https://github.com/nocobase/nocobase/pull/6470)) by @chenos

- **[工作流]** 工作流刪除時不計入任務數量 ([#6474](https://github.com/nocobase/nocobase/pull/6474)) by @mytharcher

- **[工作流：聚合節點]** 修復對空結果進行四捨五入 ([#6473](https://github.com/nocobase/nocobase/pull/6473)) by @mytharcher

- **[嵌入 NocoBase]** 頁面顯示空白 by @zhangzhonghe

- **[備份管理]** 缺少預設備份設定時無法啟動伺服器 by @gchust

- **[工作流：審批]**
  - 修復流程表單中的檔案關聯欄位錯誤 by @mytharcher

  - 修復基於鉤子的任務計數 by @mytharcher
