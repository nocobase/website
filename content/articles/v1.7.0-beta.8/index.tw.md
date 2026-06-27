---
title: "NocoBase v1.7.0-beta.8：支援連結按鈕 URL 中的環境變數"
description: "v1.7.0-beta.8 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援欄位樣式設定，包含字型大小、字型粗細與字型樣式 ([#6489](https://github.com/nocobase/nocobase/pull/6489)) - 感謝 @katherinehhh

- **[變數與機密]** 支援在連結按鈕 URL 中使用環境變數 ([#6494](https://github.com/nocobase/nocobase/pull/6494)) - 感謝 @katherinehhh

### 🚀 改進

- **[客戶端]** 支援篩選按鈕中選取欄位的模糊比對 ([#6496](https://github.com/nocobase/nocobase/pull/6496)) - 感謝 @katherinehhh

- **[工作流：郵件發送節點]** 新增安全欄位設定說明 ([#6510](https://github.com/nocobase/nocobase/pull/6510)) - 感謝 @sheldon66

- **[WEB 客戶端]** 清除快取時新增二次確認提示 ([#6505](https://github.com/nocobase/nocobase/pull/6505)) - 感謝 @katherinehhh

- **[通知：電子郵件]** 新增安全欄位設定說明 ([#6501](https://github.com/nocobase/nocobase/pull/6501)) - 感謝 @sheldon66

- **[郵件管理員]** 支援重新授權，並在發送郵件時自動選取帳號 - 感謝 @jiannx

### 🐛 錯誤修復

- **[伺服器]** 升級指令可能導致工作流程錯誤 ([#6524](https://github.com/nocobase/nocobase/pull/6524)) - 感謝 @gchust

- **[客戶端]**
  - 表單中子表格的高度會隨表單高度一同設定 ([#6518](https://github.com/nocobase/nocobase/pull/6518)) - 感謝 @katherinehhh

  - 中文語系下時間欄位提交錯誤（無效的 time 類型輸入語法）([#6511](https://github.com/nocobase/nocobase/pull/6511)) - 感謝 @katherinehhh

  - 操作按鈕透明度導致懸停時設定顯示異常 ([#6529](https://github.com/nocobase/nocobase/pull/6529)) - 感謝 @katherinehhh

- **[認證]**
  - 修剪認證器選項 ([#6527](https://github.com/nocobase/nocobase/pull/6527)) - 感謝 @2013xile

  - 缺少 X-Authenticator ([#6526](https://github.com/nocobase/nocobase/pull/6526)) - 感謝 @chenos

- **[區塊：地圖]**
  - 地圖區塊金鑰管理問題，因不可見字元導致請求失敗 ([#6521](https://github.com/nocobase/nocobase/pull/6521)) - 感謝 @katherinehhh

  - 地圖管理中機密金鑰欄位未觸發驗證 ([#6509](https://github.com/nocobase/nocobase/pull/6509)) - 感謝 @katherinehhh

- **[檔案管理員]** 無法存取儲存在 COS 中的檔案 ([#6512](https://github.com/nocobase/nocobase/pull/6512)) - 感謝 @chenos

- **[操作：匯出記錄 Pro]** 無法匯出附件 - 感謝 @chenos

- **[備份管理員]** 還原可能導致工作流程執行錯誤 - 感謝 @gchust

- **[企業微信]** 擷取通知設定時解析環境變數與機密 - 感謝 @2013xile

- **[工作流：審核]**
  - 修正工作刪除時流程表格錯誤 - 感謝 @mytharcher

  - 修正新增查詢節點結果時拋出的錯誤 - 感謝 @mytharcher

  - 修正空值使用者導致的崩潰 - 感謝 @mytharcher
