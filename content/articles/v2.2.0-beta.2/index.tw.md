---
title: "NocoBase v2.2.0-beta.2：為 AI 知識庫新增外部向量儲存配置表單"
description: "v2.2.0-beta.2 版本發布說明"
---

### 🎉 新功能

- **[AI 員工]** 為 AI 知識庫新增外部向量儲存配置表單。([#9723](https://github.com/nocobase/nocobase/pull/9723)) by @cgyrock
- **[AI：知識庫]** 為 AI 知識庫新增外部向量儲存配置表單。by @cgyrock
- **[郵件管理員]** 將郵件管理員客戶端遷移至 v2。by @jiannx

### 🚀 改進

- **[cli]**

  - 優化不同版本號格式的相容性檢查。([#9763](https://github.com/nocobase/nocobase/pull/9763)) by @chenos
  - 新增支援將技能更新至指定版本。([#9760](https://github.com/nocobase/nocobase/pull/9760)) by @chenos
  - 改善初始化設定提示的用詞。([#9750](https://github.com/nocobase/nocobase/pull/9750)) by @chenos
- **[undefined]**

  - 在 AI Builder 總覽頁面新增版本控制對話場景。([#9748](https://github.com/nocobase/nocobase/pull/9748)) by @Molunerfinn
    參考：[AI Builder 快速入門](https://docs.nocobase.com/en/ai-builder)
  - 改善版本控制文件，新增 AI Builder 中自動儲存版本的說明。([#9745](https://github.com/nocobase/nocobase/pull/9745)) by @cgyrock
    參考：[版本控制](docs/docs/en/ops-management/version-control/index.md)
- **[工作流]** 改善工作流元資料編輯體驗，支援在詳細資訊彈窗中編輯描述，並在複製工作流時自動填入來源工作流元資料。([#9766](https://github.com/nocobase/nocobase/pull/9766)) by @mytharcher
- **[動作：匯入記錄]** 改善匯入與非同步任務錯誤詳細資訊對話框，使較長的錯誤訊息能完整顯示而不破壞版面。([#9746](https://github.com/nocobase/nocobase/pull/9746)) by @katherinehhh
- **[翻譯測試工具]** 為翻譯測試工具新增 client-v2 設定頁面。([#9744](https://github.com/nocobase/nocobase/pull/9744)) by @jiannx
- **[動作：匯入記錄 Pro]** 改善匯入對話框，使較長的錯誤訊息能完整顯示，並可直接從 v2 設定選單中選擇處理模式。by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 修正水平子表單中欄位過窄導致資料無法顯示的問題。([#9755](https://github.com/nocobase/nocobase/pull/9755)) by @zhangzhonghe
- **[client-v2]** 修正登入後 v2 頁面可能持續載入的問題。([#9738](https://github.com/nocobase/nocobase/pull/9738)) by @zhangzhonghe
- **[cli]** 為 nb 執行環境新增 Node.js 版本檢測。([#9749](https://github.com/nocobase/nocobase/pull/9749)) by @chenos
- **[動作：匯入記錄]** 將上傳的匯入檔案改為磁碟儲存，以減少大量資料匯入時的記憶體壓力。([#9739](https://github.com/nocobase/nocobase/pull/9739)) by @mytharcher
- **[非同步任務管理員]** 修正非同步任務工作者日誌中錯誤的請求 ID。([#9686](https://github.com/nocobase/nocobase/pull/9686)) by @2013xile
- **[工作流]**

  - 修正工作流逾時處理，使已中止的執行及其待處理任務能原子化更新。([#9768](https://github.com/nocobase/nocobase/pull/9768)) by @mytharcher
  - 修正工作流節點變更後，工作流「最後更新者」欄位未更新的問題。([#9769](https://github.com/nocobase/nocobase/pull/9769)) by @mytharcher
- **[資料來源管理員]**

  - 修正 v1 外部資料來源「配置欄位」頁面因重複重新渲染導致的空白欄位編輯抽屜。([#9759](https://github.com/nocobase/nocobase/pull/9759)) by @katherinehhh
  - 修正 v1 資料來源管理員中刪除當前集合分類後，「所有集合」標籤頁可能變為空白的問題。([#9757](https://github.com/nocobase/nocobase/pull/9757)) by @katherinehhh
- **[備份管理員]** 修正備份還原時可能接受不安全的 PostgreSQL schema 名稱的安全性問題。([#9758](https://github.com/nocobase/nocobase/pull/9758)) by @2013xile
- **[工作流：SQL 節點]** 修正部分 beta 版本使用者 SQL 工作流舊版範本變數遷移被跳過的問題。([#9762](https://github.com/nocobase/nocobase/pull/9762)) by @mytharcher
- **[區塊：看板]** 修正行事曆及其他彈出視窗的 URL 支援。([#9751](https://github.com/nocobase/nocobase/pull/9751)) by @jiannx
- **[AI 員工]**

  - 修正貼入 AI 員工對話框的附件無法移除的問題。([#9753](https://github.com/nocobase/nocobase/pull/9753)) by @cgyrock
  - 修正工作流 LLM 節點中訊息配置遺失的問題。([#9743](https://github.com/nocobase/nocobase/pull/9743)) by @cgyrock
- **[檔案管理員]** 修正切換至 pdf.js 後，部分 PDF 預覽缺少中文/CID 字型文字的問題。([#9737](https://github.com/nocobase/nocobase/pull/9737)) by @mytharcher
- **[API 文件]** 修正 API 文件插件宣告檔案的建置失敗問題。([#9752](https://github.com/nocobase/nocobase/pull/9752)) by @katherinehhh
- **[動作：匯入記錄 Pro]** 避免 Pro 匯入在建立非同步任務前，於請求節點中解析大型檔案。by @mytharcher
- **[版本控制]** 調整版本控制頂部快捷入口的位置，使其在舊版與 v2 管理後台佈局中均顯示於 UI 編輯器旁。by @cgyrock
- **[工作流：審批]** 修正 v2 審批表單中未顯示相關資料的問題。by @zhangzhonghe
