---
title: "NocoBase v1.7.0-beta.32：單行文字欄位支援輸入多個關鍵字進行篩選"
description: "v1.7.0-beta.32 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 單行文字欄位支援輸入多個關鍵字進行篩選 ([#6685](https://github.com/nocobase/nocobase/pull/6685)) by @zhangzhonghe
  參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[多關鍵字篩選]** 單行文字欄位支援輸入多個關鍵字進行篩選 by @zhangzhonghe
  參考：[多關鍵字篩選](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[範本列印]** 在範本列印中新增支援批次列印功能。 by @sheldon66

### 🚀 改進

- **[工作流程]** 補齊所有遺漏的 en-US 語言包按鍵 ([#6885](https://github.com/nocobase/nocobase/pull/6885)) by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 彈窗中的級聯元件初始時未載入關聯資料 ([#6886](https://github.com/nocobase/nocobase/pull/6886)) by @katherinehhh
  - 在子表單中暴露關聯欄位時，關聯資料未提交 ([#6883](https://github.com/nocobase/nocobase/pull/6883)) by @katherinehhh
  - 可拖曳排序欄位未正確顯示可用選項 ([#6875](https://github.com/nocobase/nocobase/pull/6875)) by @katherinehhh
  - 資料選擇器表格的資料範圍中缺少當前表單變數 ([#6882](https://github.com/nocobase/nocobase/pull/6882)) by @katherinehhh
  - 關聯選擇記錄表格未過濾已關聯的記錄 ([#6874](https://github.com/nocobase/nocobase/pull/6874)) by @katherinehhh
- **[資料庫]** 處理欄位匯入時的空字串儲存格，以防止錯誤 ([#6880](https://github.com/nocobase/nocobase/pull/6880)) by @aaaaaajie
- **[工作流程：人工節點]** 修正顯示未處理項目時出現的渲染錯誤 ([#6879](https://github.com/nocobase/nocobase/pull/6879)) by @mytharcher
- **[檔案管理]** 修正型別 ([#6873](https://github.com/nocobase/nocobase/pull/6873)) by @mytharcher
- **[區塊：操作面板]** 從掃描器讀取路由基底名稱，以適應桌面環境。 ([#6877](https://github.com/nocobase/nocobase/pull/6877)) by @sheldon66
- **[AI 整合]** 在 LLM 服務配置與驗證配置頁面之間切換時，內容未顯示 ([#6887](https://github.com/nocobase/nocobase/pull/6887)) by @2013xile
- **[工作流程]** 修正集合事件的堆疊限制運作不正確的問題 ([#6876](https://github.com/nocobase/nocobase/pull/6876)) by @mytharcher
- **[工作流程：審批]** 修正委派與新增至其他審批人的審批人範圍 by @mytharcher
- **[備份管理]** 修正建置時的型別錯誤 by @mytharcher
