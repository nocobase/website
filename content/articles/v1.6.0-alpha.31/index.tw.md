---
title: "NocoBase v1.6.0-alpha.31：相容於歷史按鈕存取控制設定"
description: "v1.6.0-alpha.31 版本發行說明"
---

### 🎉 新功能

- **[client]** 相容於歷史按鈕存取控制設定 ([#6376](https://github.com/nocobase/nocobase/pull/6376)) by @katherinehhh

- **[工作流：回應訊息]** 支援在動作觸發器中使用 by @mytharcher

### 🚀 改進

- **[認證：API 金鑰]** 為 API 金鑰認證新增 Token 安全配置測試。([#6361](https://github.com/nocobase/nocobase/pull/6361)) by @sheldon66

- **[工作流：人工節點]** 調整工作流任務中心 UI ([#6272](https://github.com/nocobase/nocobase/pull/6272)) by @mytharcher

### 🐛 錯誤修復

- **[server]** 執行 `yarn start` 指令後瀏覽器快取不正確 ([#6394](https://github.com/nocobase/nocobase/pull/6394)) by @gchust

- **[client]**
  - FormDrawer 主題上下文問題 ([#6403](https://github.com/nocobase/nocobase/pull/6403)) by @katherinehhh

  - 使用 '$anyOf' 運算子時，聯動規則無效 ([#6400](https://github.com/nocobase/nocobase/pull/6400)) by @zhangzhonghe

- **[auth]** 處理不存在的使用者時回傳 401 錯誤並更新語言訊息 ([#6381](https://github.com/nocobase/nocobase/pull/6381)) by @sheldon66

- **[區塊：範本]** 頁面資料區塊中未顯示「另存為範本」選項 ([#6398](https://github.com/nocobase/nocobase/pull/6398)) by @gchust

- **[工作流：人工節點]** 避免唯一鍵衝突 ([#6407](https://github.com/nocobase/nocobase/pull/6407)) by @mytharcher

- **[資料來源管理器]** 編輯外部資料來源中的欄位時發生錯誤 ([#6402](https://github.com/nocobase/nocobase/pull/6402)) by @katherinehhh

- **[主題編輯器]** 連續切換主題多次後切換失敗 ([#6387](https://github.com/nocobase/nocobase/pull/6387)) by @katherinehhh

- **[WEB client]** 切換角色後頁面空白 ([#6388](https://github.com/nocobase/nocobase/pull/6388)) by @aaaaaajie

- **[工作流：審批]**
  - 避免錯誤的受指派者配置查詢所有使用者 by @mytharcher

  - 修正新增受指派者時的排序參數 by @mytharcher

- **[WeCom]** 修正登入提示連結及釘釘登入錯誤 by @chenzhizdt
