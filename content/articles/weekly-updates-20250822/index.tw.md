---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援在同一工作流程中的所有審批節點使用一致的任務標題、模板列印支援多對多陣列等。"
---

總結每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*發布日期：2025-08-19*

#### 🚀 改進

- **[工作流程]** 更新節點選擇選單，改為雙欄佈局顯示選項，以提高資訊密度，讓用戶一次查看更多選項 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
- **[授權設定]** 在授權設定中，每次複製最新的實例 ID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx

#### 🐛 錯誤修復

- **[客戶端]**

  - 在聯動規則的空值驗證中，將數字 0 視為空值 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - 修復連結按鈕文字斷行的問題 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
- **[行動端]** 行動端日期欄位顯示格式不正確 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
- **[Office 檔案預覽器]** 修復上傳檔案至附件 URL 欄位時拋出錯誤的問題 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
- **[工作流程]** 修復編輯工作流程分類時拋出錯誤且表單資料消失的問題 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
- **[工作流程：郵件節點]** 修復郵件節點可能無法正確恢復執行的問題 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[工作流程：自訂操作事件]** 成功對多筆記錄觸發操作後，清除已選取的行 by @mytharcher
- **[範本列印]** 多行資料中單選欄位的列印問題 by @jiannx
- **[工作流程：審批]** 修復在審批記錄中載入外部資料來源資料時出現 404 錯誤的問題 by @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*發布日期：2025-08-15*

#### 🎉 新功能

- **[工作流程：審批]** 支援在同一個工作流程中為所有審批節點使用一致的任務標題 by @mytharcher

#### 🚀 改進

- **[認證]** 成功登入後，從 URL 中移除 token 參數 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[範本列印]** 支援 m2m 陣列欄位 by @jiannx

#### 🐛 錯誤修復

- **[行動端]** 修復行動端審批對話框中表單提交資料不正確的問題 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
- **[工作流程]** 修復工作流程任務中心頁面標題的翻譯問題 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
- **[日曆]** 日曆事件項目的工具提示顯示 [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[通知：應用內訊息]** 修復翻譯問題 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
- **[檔案管理]** 移除檔案上傳大小限制的提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
- **[檔案儲存：S3(Pro)]**

  - 棄用有問題的參數 `attachmentField` by @mytharcher
  - 修復無法使用 IAM 認證方式上傳檔案的問題 by @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*發布日期：2025-08-14*

#### 🚀 改進

- **[通知：應用內訊息]** 移除透過 `console.log` 輸出的 SQL 日誌 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile

#### 🐛 錯誤修復

- **[伺服器]** 部分請求缺少 `ctx.action`，導致審計日誌中介軟體出錯 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[集合欄位：公式]** 修復因變數類型導致公式輸入無法通過驗證的問題 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[備份管理員]** 大型檔案備份可能在實際完成前就顯示「成功」 by @gchust
