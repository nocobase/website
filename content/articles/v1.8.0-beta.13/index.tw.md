---
title: "NocoBase v1.8.0-beta.13：支援外部資料來源的 SQL Server BIT 欄位"
description: "v1.8.0-beta.13 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**

  - 支援外部資料來源中 SQL Server 的 BIT 欄位。([#7058](https://github.com/nocobase/nocobase/pull/7058)) by @aaaaaajie
  - 支援自訂聚合變數 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
    參考：[自訂變數](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[建置]** 支援商業授權 ([#6554](https://github.com/nocobase/nocobase/pull/6554)) by @jiannx
- **[資料來源管理器]** ✨ 支援從外部資料來源按需載入資料表 ([#6979](https://github.com/nocobase/nocobase/pull/6979)) by @aaaaaajie
- **[授權設定]** 新增授權設定，並在下載插件前驗證授權 ([#7026](https://github.com/nocobase/nocobase/pull/7026)) by @jiannx
- **[認證]** 支援「忘記密碼」功能 ([#6616](https://github.com/nocobase/nocobase/pull/6616)) by @zhangzhonghe
  參考：[忘記密碼](https://docs.nocobase.com/handbook/auth/user#forgot-password)
- **[動作：批次更新]** 支援在更新區塊資料後，重新整理其他資料區塊的資料 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe
- **[資料來源：外部 SQL Server]**

  - 新增外部資料來源中 SQL Server BIT 欄位的支援 by @aaaaaajie
  - 支援從外部資料來源按需載入資料表 by @aaaaaajie
- **[自訂變數]** 支援自訂聚合變數 by @zhangzhonghe
  參考：[自訂變數](https://docs-cn.nocobase.com/handbook/custom-variables)
- **[電子郵件管理器]**

  - 支援刪除電子郵件 by @jiannx
  - 支援電子郵件同步間隔設定 by @jiannx
  - 支援大量發送 by @jiannx

### 🚀 改進

- **[客戶端]**

  - 支援透過掃描 QR Code 填寫輸入欄位 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) by @katherinehhh
  - 根據裝置類型而非頁面寬度決定是否顯示行動端元件 ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe
  - 支援 Markdown 區塊內容的在地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) by @katherinehhh
  - 根據裝置類型而非頁面寬度決定是否顯示行動端佈局 ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe
- **[非同步任務管理器]** 改善匯出期間任務建立的效能 ([#7078](https://github.com/nocobase/nocobase/pull/7078)) by @aaaaaajie
- **[行動端]** 調整行動裝置的通知彈出視窗樣式 ([#6557](https://github.com/nocobase/nocobase/pull/6557)) by @zhangzhonghe
- **[電子郵件管理器]**

  - 支援在同一主題內分別回覆與轉寄電子郵件 by @jiannx
  - 實作 Schema 後發送電子郵件並支援 AI by @jiannx
  - 支援彈出視窗中的預設發送值、支援收件者模糊搜尋，並修正問題 by @jiannx
  - 完成大量發送功能 by @jiannx
  - 功能改進與問題修正 by @jiannx

### 🐛 錯誤修復

- **[cli]**

  - 調整安裝插件時的授權複製 ([#7135](https://github.com/nocobase/nocobase/pull/7135)) by @jiannx
  - 下載插件時出現 undefined 錯誤 ([#7143](https://github.com/nocobase/nocobase/pull/7143)) by @jiannx
- **[客戶端]**

  - 清除徽章值後，UI 未更新 ([#7055](https://github.com/nocobase/nocobase/pull/7055)) by @zhangzhonghe
  - 點擊篩選按鈕時發生錯誤 ([#7100](https://github.com/nocobase/nocobase/pull/7100)) by @zhangzhonghe
  - 修復目前使用者資料為空的問題 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) by @zhangzhonghe
  - 透過彈出連結開啟的頁面內容顯示不正確 ([#6990](https://github.com/nocobase/nocobase/pull/6990)) by @zhangzhonghe
  - 將其他 props 傳遞給 Variable.Input 元件。([#6670](https://github.com/nocobase/nocobase/pull/6670)) by @sheldon66
  - 若包含關聯欄位，另存為範本動作將失敗 ([#6543](https://github.com/nocobase/nocobase/pull/6543)) by @gchust
- **[資料庫]** 使字串欄位的 eq 運算子與數字類型相容 ([#7062](https://github.com/nocobase/nocobase/pull/7062)) by @chenos
- **[建置]** 修復 plugin-workflow-javascript 中的客戶端執行時期錯誤，process undefine 錯誤 ([#6859](https://github.com/nocobase/nocobase/pull/6859)) by @jiannx
- **[資料視覺化]** 表格分頁問題 ([#7151](https://github.com/nocobase/nocobase/pull/7151)) by @2013xile
- **[資料來源管理器]** 修復按需載入資料來源與資料表前綴設定組合導致「ConnectionManager.getConnection was called after the connection manager was closed」錯誤的問題。([#7150](https://github.com/nocobase/nocobase/pull/7150)) by @aaaaaajie
- **[plugin-service-platform]** 調整授權文字 by @jiannx
- **[自訂變數]** 清除徽章值後，UI 未更新 by @zhangzhonghe
- **[電子郵件管理器]**

  - 附件未顯示 by @jiannx
  - 電子郵件刪除錯誤 by @jiannx
  - 電子郵件刪除失敗 by @jiannx
  - 設定彈出視窗未顯示 by @jiannx
  - 回覆抽屜不可見 by @jiannx
  - 收件者模糊搜尋支援關聯欄位 by @jiannx
  - 在 mailmessagelabelsMailmessages 中新增「id」欄位 by @jiannx
  - 郵件模糊搜尋以建立唯一篩選條件 by @jiannx
  - 資料表「mailmessagelabels_mailmessages」的多個主鍵 by @jiannx
