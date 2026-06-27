---
title: "NocoBase v1.8.0-alpha.1：新增工作流程分類管理"
description: "v1.8.0-alpha.1 版本發行說明"
---

### 🎉 新功能

- **[未分類]**

  - 新增支援 Gitpod，可一鍵啟動開發環境，快速開始開發。([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612
  - 為單行文字欄位新增「輸入複製按鈕」插件 ([#6894](https://github.com/nocobase/nocobase/pull/6894)) by @kerwin612
- **[資料視覺化]** 圖表轉換配置支援乘除運算 ([#6788](https://github.com/nocobase/nocobase/pull/6788)) by @bugstark
- **[工作流程]** 新增工作流程分類管理 ([#6965](https://github.com/nocobase/nocobase/pull/6965)) by @mytharcher
- **[郵件管理]** 支援大量發送 by @jiannx

### 🚀 改進

- **[客戶端]**

  - 改善日期範圍篩選元件的樣式 ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh
  - 支援配置選單連結是否在新視窗開啟 ([#6918](https://github.com/nocobase/nocobase/pull/6918)) by @katherinehhh
  - 修正隱藏表單控制項會捕捉 Tab 鍵的問題，顯著提升表單操作效率 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 在顯示確認對話框前驗證必填欄位 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh
- **[公開表單]** 支援使用 URL 參數作為變數 ([#6973](https://github.com/nocobase/nocobase/pull/6973)) by @mytharcher
- **[動作：匯入記錄 Pro]** 優化 xlsx 匯入效能 by @aaaaaajie
- **[範本列印]** 新增更多日誌。by @sheldon66
- **[認證：OIDC]** 透過電子郵件比對使用者時忽略大小寫 by @2013xile
- **[工作流程：審批]** 從工作流程插件匯入工作流程集合以避免重複 by @mytharcher
- **[郵件管理]** 完成大量發送功能 by @jiannx

### 🐛 錯誤修復

- **[客戶端]**

  - 修正因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6957](https://github.com/nocobase/nocobase/pull/6957)) by @zhangzhonghe
  - 修正彈窗中建立的區塊集合不正確的問題 ([#6961](https://github.com/nocobase/nocobase/pull/6961)) by @zhangzhonghe
  - 修正單行文字欄位值在易讀模式下顯示為陣列的問題 ([#6968](https://github.com/nocobase/nocobase/pull/6968)) by @zhangzhonghe
  - 修正篩選按鈕下拉清單中的欄位順序 ([#6962](https://github.com/nocobase/nocobase/pull/6962)) by @zhangzhonghe
  - 欄位與動作需重新整理頁面後才生效 ([#6977](https://github.com/nocobase/nocobase/pull/6977)) by @zhangzhonghe
  - 修正「溢位內容省略」選項對關聯欄位無效的問題 ([#6967](https://github.com/nocobase/nocobase/pull/6967)) by @zhangzhonghe
  - 新增資料時，選擇關聯欄位彈窗在首次輸入時關閉的問題 ([#6971](https://github.com/nocobase/nocobase/pull/6971)) by @katherinehhh
  - 子表格中的關聯欄位在迭代變數為空值時觸發請求 ([#6969](https://github.com/nocobase/nocobase/pull/6969)) by @katherinehhh
  - 摺疊面板時表單驗證規則資料遺失 ([#6949](https://github.com/nocobase/nocobase/pull/6949)) by @katherinehhh
  - 修正子頁面中篩選表單預設值無效的問題 ([#6960](https://github.com/nocobase/nocobase/pull/6960)) by @zhangzhonghe
  - 欄位指派元件的 i18n 未生效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 在角色資料表範圍中無法展開外部資料來源的關聯集合欄位 ([#6958](https://github.com/nocobase/nocobase/pull/6958)) by @katherinehhh
  - 從「介於」切換回「是」後日期選擇器未重新整理 ([#6956](https://github.com/nocobase/nocobase/pull/6956)) by @katherinehhh
  - 子表格連結變數在清除時擷取關聯資料而非使用表單值 ([#6963](https://github.com/nocobase/nocobase/pull/6963)) by @katherinehhh
  - 透過連結規則更新多選下拉選項時，已選取值被重設 ([#6953](https://github.com/nocobase/nocobase/pull/6953)) by @katherinehhh
  - 拖曳表格行時高亮位置不正確 ([#6952](https://github.com/nocobase/nocobase/pull/6952)) by @chenos
  - 表單標籤冒號可見性設定未生效 ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh
  - 關聯欄位下拉資料以每頁 200 筆進行分頁 ([#6950](https://github.com/nocobase/nocobase/pull/6950)) by @katherinehhh
  - 修正錯誤彈窗中的複製按鈕複製出 [object Object] 的問題。([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
  - 為關聯欄位設定預設值時無法選擇變數 ([#6974](https://github.com/nocobase/nocobase/pull/6974)) by @zhangzhonghe
  - 透過拖曳調整區塊大小功能失效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
- **[工作流程：人工節點]** 修正使用外部資料來源時初始化器拋出錯誤 ([#6983](https://github.com/nocobase/nocobase/pull/6983)) by @mytharcher
- **[認證]** 過期 Token 清理導致的效能問題 ([#6981](https://github.com/nocobase/nocobase/pull/6981)) by @2013xile
- **[檔案管理]** 修正阿里雲 OSS 逾時配置 ([#6970](https://github.com/nocobase/nocobase/pull/6970)) by @mytharcher
- **[工作流程]** 修正篩選工作流程時拋出錯誤 ([#6978](https://github.com/nocobase/nocobase/pull/6978)) by @mytharcher
- **[主題編輯器]** 隱藏主題切換選項並修正彈窗樣式 ([#6964](https://github.com/nocobase/nocobase/pull/6964)) by @zhangzhonghe
- **[集合欄位：Markdown(Vditor)]** markdown-vditor 欄位元件在縮放後的寬度問題 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[工作流程：自訂動作事件]** 修正工作台遺漏的初始化器 by @mytharcher
- **[認證：OIDC]** 登入按鈕文字未本地化 by @2013xile
- **[工作流程：審批]** 修正審批人範圍使用關聯條件查詢時的錯誤 by @mytharcher
