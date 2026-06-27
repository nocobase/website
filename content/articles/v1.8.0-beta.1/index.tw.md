---
title: "NocoBase v1.8.0-beta.1：新增工作流程分類管理"
description: "v1.8.0-beta.1 版本發行說明"
---

### 🎉 新功能

- **[未分類]** 為單行文字欄位新增「輸入複製按鈕」外掛 ([#6894](https://github.com/nocobase/nocobase/pull/6894)) - 感謝 @kerwin612

- **[工作流程]** 新增工作流程分類管理 ([#6965](https://github.com/nocobase/nocobase/pull/6965)) - 感謝 @mytharcher

### 🚀 改進

- **[客戶端]** 支援設定選單連結是否在新視窗開啟 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) - 感謝 @katherinehhh

- **[動作：匯入記錄 Pro]** 優化 xlsx 匯入效能 - 感謝 @aaaaaajie

- **[驗證：OIDC]** 透過電子郵件比對使用者時忽略大小寫 - 感謝 @2013xile

- **[工作流程：審批]** 從工作流程外掛匯入工作流程集合以避免重複 - 感謝 @mytharcher

### 🐛 錯誤修復

- **[客戶端]**
  - 欄位與動作需重新整理頁面後才生效 ([#6977](https://github.com/nocobase/nocobase/pull/6977)) - 感謝 @zhangzhonghe

  - 修復因重複 API 請求導致區塊模板中欄位未顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) - 感謝 @zhangzhonghe

  - 修復在彈出視窗中建立的區塊其集合不正確的問題 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) - 感謝 @zhangzhonghe

  - 為關聯欄位設定預設值時無法選取變數 ([#6974](https://github.com/nocobase/nocobase/pull/6974)) - 感謝 @zhangzhonghe

  - 修復在易讀模式下單行文字欄位值顯示為陣列的問題 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) - 感謝 @zhangzhonghe

  - 無法在角色資料表範圍中展開來自外部資料來源的關聯集合欄位 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) - 感謝 @katherinehhh

  - 修復「溢位內容省略」選項對關聯欄位無效的問題 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) - 感謝 @zhangzhonghe

  - 修復子頁面中篩選表單預設值無效的問題 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) - 感謝 @zhangzhonghe

  - 新增資料時，選取關聯欄位彈出視窗在首次輸入時關閉的問題 ([#6971](https://github.com/nocobase/nocobase/pull/6971)) - 感謝 @katherinehhh

  - 子表格中的關聯欄位在迭代變數值為空時觸發請求 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) - 感謝 @katherinehhh

  - 修復篩選按鈕下拉清單中的欄位順序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) - 感謝 @zhangzhonghe

  - 摺疊面板時表單驗證規則資料遺失 ([#6949](https://github.com/nocobase/nocobase/pull/6949)) - 感謝 @katherinehhh

  - 透過聯動規則更新多選下拉選項時，已選取值被重設 ([#6953](https://github.com/nocobase/nocobase/pull/6953)) - 感謝 @katherinehhh

  - 子表格聯動變數在清除時擷取關聯資料，而非使用表單值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) - 感謝 @katherinehhh

  - 以每頁 200 筆資料分頁關聯欄位下拉資料 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) - 感謝 @katherinehhh

  - 從「介於」切換回「是」後日期選擇器未重新整理 ([#6956](https://github.com/nocobase/nocobase/pull/6956)) - 感謝 @katherinehhh

  - 拖曳表格行時高亮位置不正確 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) - 感謝 @chenos

- **[驗證]** 過期 Token 清理導致的效能問題 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) - 感謝 @2013xile

- **[工作流程]** 修復篩選工作流程時拋出的錯誤 ([#6978](https://github.com/nocobase/nocobase/pull/6978)) - 感謝 @mytharcher

- **[檔案管理]** 修復阿里雲 OSS 逾時設定 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) - 感謝 @mytharcher

- **[主題編輯器]** 隱藏主題切換選項並修復彈出視窗樣式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) - 感謝 @zhangzhonghe

- **[工作流程：自訂動作事件]** 修復工作台初始化器遺漏的問題 - 感謝 @mytharcher

- **[驗證：OIDC]** 登入按鈕文字未在地化 - 感謝 @2013xile

- **[工作流程：審批]** 修復審批人範圍查詢使用關聯條件時出錯的問題 - 感謝 @mytharcher
