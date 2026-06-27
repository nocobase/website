---
title: "NocoBase v1.7.0-alpha.4：支援長文字欄位作為關聯欄位的標題欄位"
description: "v1.7.0-alpha.4 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 支援將長文字欄位設為關聯欄位的標題欄位 ([#6495](https://github.com/nocobase/nocobase/pull/6495)) - @katherinehhh

  - 支援欄位樣式設定，包含字型大小、字型粗細與字型樣式 ([#6489](https://github.com/nocobase/nocobase/pull/6489)) - @katherinehhh

- **[變數與機密]** 支援在連結按鈕 URL 中使用環境變數 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) - @katherinehhh

- **[工作流：彙總節點]** 支援設定彙總結果的小數位數 ([#6491](https://github.com/nocobase/nocobase/pull/6491)) - @mytharcher

### 🚀 改進

- **[客戶端]** 支援在篩選按鈕中對已選欄位進行模糊匹配 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) - @katherinehhh

- **[通知：電子郵件]** 新增安全欄位設定說明 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) - @sheldon66

- **[工作流：郵件發送節點]** 新增安全欄位設定說明 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) - @sheldon66

- **[日曆]** 日曆插件新增可選設定，用於啟用或停用快速建立事件 ([#6391](https://github.com/nocobase/nocobase/pull/6391)) - @Cyx649312038

- **[WEB 客戶端]** 清除快取時新增二次確認提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) - @katherinehhh

- **[電子郵件管理器]** 支援重新授權，並在發送郵件時自動選取帳號 - @jiannx

### 🐛 錯誤修復

- **[客戶端]**
  - 操作按鈕透明度導致懸停時設定顯示異常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) - @katherinehhh

  - 中文語系下時間欄位提交錯誤（時間類型的輸入語法無效） ([#6511](https://github.com/nocobase/nocobase/pull/6511)) - @katherinehhh

  - 表單中子表格的高度與表單高度連動 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) - @katherinehhh

  - 聯動規則中欄位預設隱藏且保留值功能失效 ([#6503](https://github.com/nocobase/nocobase/pull/6503)) - @katherinehhh

  - 新增子按鈕未顯示純圖示模式 ([#6504](https://github.com/nocobase/nocobase/pull/6504)) - @katherinehhh

- **[伺服器]** 升級指令可能導致工作流程錯誤 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) - @gchust

- **[工具函式]** 已知的「桌面響應式」錯誤 ([#6476](https://github.com/nocobase/nocobase/pull/6476)) - @zhangzhonghe

- **[求值器]** 將四捨五入的小數位數恢復為 9 ([#6492](https://github.com/nocobase/nocobase/pull/6492)) - @mytharcher

- **[認證]**
  - 修剪認證器選項 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) - @2013xile

  - 缺少 X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) - @chenos

- **[區塊：地圖]**
  - 地圖區塊金鑰管理問題，因不可見字元導致請求失敗 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) - @katherinehhh

  - 地圖管理中機密金鑰欄位未觸發驗證 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) - @katherinehhh

- **[檔案管理器]**
  - 無法存取儲存在 COS 中的檔案 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) - @chenos

  - 對 URL 進行編碼 ([#6497](https://github.com/nocobase/nocobase/pull/6497)) - @chenos

- **[WEB 客戶端]** 路由管理表格中的路徑與實際路徑不一致 ([#6483](https://github.com/nocobase/nocobase/pull/6483)) - @zhangzhonghe

- **[區塊：操作面板]** 行動端操作面板在因權限控制隱藏按鈕後出現版面問題 ([#6502](https://github.com/nocobase/nocobase/pull/6502)) - @katherinehhh

- **[資料來源：主要]** 無法建立 MySQL 檢視表 ([#6477](https://github.com/nocobase/nocobase/pull/6477)) - @aaaaaajie

- **[工作流]** 修復工作流刪除後的舊任務計數問題 ([#6493](https://github.com/nocobase/nocobase/pull/6493)) - @mytharcher

- **[操作：匯出記錄 Pro]** 無法匯出附件 - @chenos

- **[備份管理器]**
  - 從備份模板建立子應用時，上傳的檔案尚未還原 - @gchust

  - 還原可能導致工作流程執行錯誤 - @gchust

  - 因 GTID 集合重疊導致 MySQL 資料庫還原失敗 - @gchust

- **[企業微信]** 擷取通知設定時解析環境變數與機密 - @2013xile

- **[工作流：審批]**
  - 修復工作刪除時流程表格的錯誤 - @mytharcher

  - 將返回的審批更改為待辦事項 - @mytharcher

  - 修復新增查詢節點結果時拋出的錯誤 - @mytharcher

  - 修復流程表格中遺失的操作按鈕 - @mytharcher

  - 「申請新增」彈出對話框的樣式問題 - @zhangzhonghe
