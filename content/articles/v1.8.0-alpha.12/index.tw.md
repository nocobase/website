---
title: "NocoBase v1.8.0-alpha.12：支援從環境變數新增連線池選項"
description: "v1.8.0-alpha.12 版本發行說明"
---

### 🚀 功能改進

- **[資料庫]** 支援從環境變數新增連線池選項 ([#7133](https://github.com/nocobase/nocobase/pull/7133)) - @mytharcher

- **[工作流程]**
  - 透過排除 JSON 欄位來提升執行記錄列表的載入效能 ([#7138](https://github.com/nocobase/nocobase/pull/7138)) - @mytharcher

  - 為節點測試新增日誌 API ([#7129](https://github.com/nocobase/nocobase/pull/7129)) - @mytharcher

- **[工作流程：審批]** 將時間軸中的時間改為絕對時間 - @mytharcher

### 🐛 錯誤修復

- **[工具函式]** 使用「精確日期」變數過濾 DateOnly 或 Datetime（無時區）時的問題 ([#7113](https://github.com/nocobase/nocobase/pull/7113)) - @katherinehhh

- **[命令列介面]**
  - 下載插件時出現未定義錯誤 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) - @jiannx

  - 安裝插件時調整授權檔案的複製 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) - @jiannx

- **[客戶端]**
  - 基於 'x-acl-action' 設定的容錯處理 ([#7128](https://github.com/nocobase/nocobase/pull/7128)) - @mytharcher

  - 在關聯檢視中設定欄位顯示名稱無效 ([#7130](https://github.com/nocobase/nocobase/pull/7130)) - @aaaaaajie

  - 工作流程手動節點 UI 配置：聯動規則無法選取「目前表單」變數 ([#7125](https://github.com/nocobase/nocobase/pull/7125)) - @zhangzhonghe

- **[工作流程]** 修復循環引入導致的錯誤 ([#7134](https://github.com/nocobase/nocobase/pull/7134)) - @mytharcher

- **[商業插件]**
  - 開發模式下不顯示授權彈窗 - @jiannx

  - 暫時關閉授權驗證彈窗 - @jiannx

  - 調整授權驗證邏輯，支援泛域名匹配 - @jiannx

- **[密碼策略]** 支援永久鎖定使用者帳號 - @2013xile

- **[工作流程：子流程]** 修復叢集模式下的問題 - @mytharcher

- **[工作流程：審批]**
  - 新增表單佈局設定 - @mytharcher

  - 從過濾器中移除不可過濾的欄位 - @mytharcher
