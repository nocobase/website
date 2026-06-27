---
title: "NocoBase v1.7.0-beta.2：支援在聯動規則中配置可選欄位選項"
description: "v1.7.0-beta.2 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 表格區塊支援隱藏序號列（預設顯示）([#6416](https://github.com/nocobase/nocobase/pull/6416)) by @katherinehhh

  - 支援在聯動規則中設定可選欄位選項 ([#6338](https://github.com/nocobase/nocobase/pull/6338)) by @katherinehhh

  - 支援在聯動規則中為時間欄位設定日期範圍（最小值/最大值）([#6356](https://github.com/nocobase/nocobase/pull/6356)) by @katherinehhh

- **[區塊：操作面板]** 支援操作面板中操作標題的自動換行 ([#6433](https://github.com/nocobase/nocobase/pull/6433)) by @katherinehhh

### 🐛 問題修復

- **[客戶端]**
  - 子表格頁面大小變更後新增資料時頁碼不正確 ([#6437](https://github.com/nocobase/nocobase/pull/6437)) by @katherinehhh

  - Logo 樣式與先前不一致 ([#6444](https://github.com/nocobase/nocobase/pull/6444)) by @zhangzhonghe

  - 刪除子表格記錄時，多選欄位值變更與選項遺失 ([#6405](https://github.com/nocobase/nocobase/pull/6405)) by @katherinehhh

  - 日期欄位範圍選擇排除最大值 ([#6418](https://github.com/nocobase/nocobase/pull/6418)) by @katherinehhh

  - 使用 '$anyOf' 運算子時，聯動規則失效 ([#6415](https://github.com/nocobase/nocobase/pull/6415)) by @zhangzhonghe

  - 透過連結按鈕開啟的彈出視窗中資料未更新 ([#6411](https://github.com/nocobase/nocobase/pull/6411)) by @zhangzhonghe

- **[操作：批次編輯]** 修復批次編輯提交時無法觸發工作流程 ([#6440](https://github.com/nocobase/nocobase/pull/6440)) by @mytharcher

- **[資料視覺化]** 新增自訂篩選欄位時出現已移除的欄位 ([#6450](https://github.com/nocobase/nocobase/pull/6450)) by @2013xile

- **[資料來源管理器]** 角色管理中切換資料來源時未載入對應的資料表 ([#6431](https://github.com/nocobase/nocobase/pull/6431)) by @katherinehhh

- **[操作：自訂請求]** 自訂請求的伺服器端權限驗證錯誤 ([#6438](https://github.com/nocobase/nocobase/pull/6438)) by @katherinehhh

- **[檔案管理器]** 修復檔案管理器的若干問題 ([#6436](https://github.com/nocobase/nocobase/pull/6436)) by @mytharcher

- **[通知：應用內訊息]**
  - 避免錯誤的接收者設定查詢所有使用者 ([#6424](https://github.com/nocobase/nocobase/pull/6424)) by @sheldon66

  - 區分應用內訊息列表背景色與訊息卡片，以增強視覺層次與可讀性。([#6417](https://github.com/nocobase/nocobase/pull/6417)) by @sheldon66

- **[工作流程：人工節點]**
  - 將遷移的版本限制變更為 `<1.7.0` ([#6430](https://github.com/nocobase/nocobase/pull/6430)) by @mytharcher

  - 修復遷移遺漏資料表前綴與綱要邏輯的問題 ([#6425](https://github.com/nocobase/nocobase/pull/6425)) by @mytharcher
