---
title: "NocoBase v1.9.0-alpha.12：支援欄位驗證規則"
description: "v1.9.0-alpha.12 版本發行說明"
---

### 🎉 新功能

- **[client]** 支援欄位驗證規則 ([#7297](https://github.com/nocobase/nocobase/pull/7297)) - 貢獻者 @aaaaaajie

- **[工作流：審批]**
  - 為通知配置新增內嵌範本類型 - 貢獻者 @mytharcher

  - 支援在同一工作流的所有審批節點中使用一致的工作標題 - 貢獻者 @mytharcher

### 🚀 改進

- **[database]** 優化 ACL Meta 查詢效能 ([#7400](https://github.com/nocobase/nocobase/pull/7400)) - 貢獻者 @aaaaaajie

- **[client]** 支援 Select 元件在唯讀模式下顯示以字串識別的圖示 ([#7420](https://github.com/nocobase/nocobase/pull/7420)) - 貢獻者 @mytharcher

- **[行動端]** 優化行動端彈出元件 ([#7414](https://github.com/nocobase/nocobase/pull/7414)) - 貢獻者 @zhangzhonghe

- **[工作流]** 更新節點選單，改為雙欄佈局顯示選項，以提高資訊密度，讓使用者一次能查看更多選項 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) - 貢獻者 @mytharcher

- **[授權設定]** 在授權設定中，每次複製最新的實例 ID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) - 貢獻者 @jiannx

- **[通知：應用內訊息]** 移除透過 `console.log` 輸出的 SQL 日誌 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) - 貢獻者 @2013xile

- **[認證]** 登入成功後，從 URL 中移除 token 參數 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) - 貢獻者 @2013xile

- **[範本列印]** 支援 m2m 陣列欄位 - 貢獻者 @jiannx

### 🐛 錯誤修復

- **[database]** 修復 PostgreSQL 外部資料表讀取包含其他 schema 中檢視表的問題 ([#7410](https://github.com/nocobase/nocobase/pull/7410)) - 貢獻者 @aaaaaajie

- **[client]**
  - 在聯動規則的空值驗證中，將數字 0 視為空值 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) - 貢獻者 @katherinehhh

  - 修復「欄位設定」按鈕從模態對話框內的表格載入欄位的問題 ([#7385](https://github.com/nocobase/nocobase/pull/7385)) - 貢獻者 @kerwin612

  - 修復連結按鈕文字斷行的問題 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) - 貢獻者 @mytharcher

- **[server]** 部分請求缺少 `ctx.action`，導致稽核日誌中介軟體出錯 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) - 貢獻者 @2013xile

- **[區塊：範本]** 解決郵件區塊放置在繼承範本區塊內時不可見的問題 ([#7430](https://github.com/nocobase/nocobase/pull/7430)) - 貢獻者 @gchust

- **[工作流：郵件節點]** 修復郵件節點可能無法正確恢復執行的問題 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) - 貢獻者 @mytharcher

- **[行動端]**
  - 行動端日期欄位顯示格式不正確 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) - 貢獻者 @katherinehhh

  - 修復行動端審批對話框中表單提交資料不正確的問題 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) - 貢獻者 @zhangzhonghe

- **[工作流]**
  - 修復編輯工作流分類時拋出錯誤且表單資料消失的問題 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) - 貢獻者 @mytharcher

  - 修復工作流任務中心頁面標題的翻譯問題 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) - 貢獻者 @mytharcher

- **[Office 檔案預覽器]** 修復上傳檔案至附件 URL 欄位時拋出錯誤的問題 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) - 貢獻者 @mytharcher

- **[通知：應用內訊息]** 修復翻譯問題 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) - 貢獻者 @mytharcher

- **[集合欄位：公式]** 修復因變數類型導致公式輸入無法通過驗證的問題 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) - 貢獻者 @mytharcher

- **[檔案管理]** 移除檔案上傳大小限制的提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) - 貢獻者 @mytharcher

- **[日曆]** 日曆事件項目的工具提示顯示 [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) - 貢獻者 @katherinehhh

- **[動作：匯入記錄 Pro]** 在匯入重複檢測期間，不允許指派關聯欄位。 - 貢獻者 @aaaaaajie

- **[工作流：自訂動作事件]** 成功對多筆記錄觸發動作後，清除已選取的行 - 貢獻者 @mytharcher

- **[範本列印]** 多行資料中單選欄位的列印問題 - 貢獻者 @jiannx

- **[檔案儲存：S3(Pro)]**
  - 棄用有問題的參數 `attachmentField` - 貢獻者 @mytharcher

  - 修復無法使用 IAM 認證方式上傳檔案的問題 - 貢獻者 @mytharcher

- **[工作流：審批]**
  - 修復在審批記錄中載入外部資料源資料時出現 404 錯誤的問題 - 貢獻者 @mytharcher

  - 修復會簽時使用者列表為空的問題 - 貢獻者 @mytharcher

- **[備份管理]** 大型檔案備份可能在實際完成前就顯示「成功」 - 貢獻者 @gchust

- **[遷移管理]** 在建立遷移檔案時，跳過最新版 pg_dump 產生的 `\restrict` 和 `\unrestrict` 指令，以解決還原錯誤。 - 貢獻者 @2013xile
