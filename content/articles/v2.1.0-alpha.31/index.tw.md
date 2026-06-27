---
title: "NocoBase v2.1.0-alpha.31：為關聯區塊新增關聯與解除關聯操作"
description: "v2.1.0-alpha.31 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 為關聯區塊新增關聯與解除關聯操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) - 作者：@katherinehhh

- **[文字複製]** 唯讀文字欄位支援「顯示複製按鈕」選項 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) - 作者：@katherinehhh

- **[AI 員工]** 工作流程 AI 員工節點支援從附件欄位載入檔案。 ([#9402](https://github.com/nocobase/nocobase/pull/9402)) - 作者：@cgyrock

- **[資料視覺化]** 為區塊插件新增 client-v2 支援 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) - 作者：@zhangzhonghe

### 🚀 改進

- **[客戶端]** 允許為序號欄位指派欄位值 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) - 作者：@mytharcher

- **[未定義]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) - 作者：@Molunerfinn

- **[區塊：看板]** 改善 v2 詳細欄位間距一致性，並讓看板卡片與欄位間距更適配主題設定。 ([#9390](https://github.com/nocobase/nocobase/pull/9390)) - 作者：@jiannx

- **[工作流程：審批]** 修正審批表單的必填驗證行為 - 作者：@zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修正篩選表單無法收合的問題 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) - 作者：@zhangzhonghe

  - 修正 v2 表格批次工作流程觸發，使行選取在分頁切換後保持一致，並能在返回後再次選取行 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) - 作者：@jiannx

  - 修正表單區塊中的「隱藏（保留值）」欄位，使其在 UI 編輯器模式下保持可見，並恢復在欄位指派中為其指派值的輸入支援 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) - 作者：@jiannx

  - 修正 v2 中 DividerItem 對主題的適配 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) - 作者：@katherinehhh

  - 修正當檔案中繼資料遺失時，AttachmentURL 欄位下載檔名不正確的問題。 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) - 作者：@mytharcher

  - 修正使用自訂多選篩選器過濾純量欄位時的錯誤 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) - 作者：@zhangzhonghe

  - 修正表單值變更後，聯動規則未重新執行的問題。 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) - 作者：@gchust

  - 修正 v1 子表格聯動規則錯誤地變更必填欄位樣式的問題 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) - 作者：@zhangzhonghe

  - 修正網格卡片區塊在更新與重新整理後資料渲染不正確的問題 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) - 作者：@katherinehhh

  - 修正行動裝置上子表格中的必填選項欄位在首次選取時未正確驗證的問題 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) - 作者：@katherinehhh

  - 修正 v2 子表格中關聯選擇欄位隱藏快速建立選項的問題 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) - 作者：@katherinehhh

  - 修正切換快取頁面後，URL 查詢參數變數失效的問題 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) - 作者：@zhangzhonghe

- **[流程引擎]** 修正 v2 流程表單中未翻譯的資料表欄位驗證訊息 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) - 作者：@jiannx

- **[伺服器端]**
  - 修正子應用程式的 OAuth 發現請求被路由為主應用程式請求的問題 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) - 作者：@2013xile

  - 在檔案系統操作前驗證插件套件名稱 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) - 作者：@chenos

- **[client-v2]**
  - 修正欄位設定中選取關聯欄位時的錯誤。 ([#9379](https://github.com/nocobase/nocobase/pull/9379)) - 作者：@gchust

  - 修正應用程式啟動後 404 頁面閃現的問題 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) - 作者：@zhangzhonghe

  - 修正 v2 頁面區塊拖曳佔位符與放置位置的問題 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) - 作者：@zhangzhonghe

  - 修正部分 v2 頁面無法載入遠端插件的問題 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) - 作者：@zhangzhonghe

- **[未定義]** 修正翻譯文件中的失效連結，並在文件建置中預設啟用失效連結檢測。 ([#9371](https://github.com/nocobase/nocobase/pull/9371)) - 作者：@Molunerfinn

- **[通知：應用內訊息]** 修正接收即時通知後，應用內訊息列表未重新整理的問題 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) - 作者：@mytharcher

- **[資料來源管理器]** 防止在外部資料來源的自訂範圍權限中編輯與刪除所有記錄 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) - 作者：@katherinehhh

- **[AI：MCP 伺服器]** 修正 MCP 伺服器打包，使其包含執行時期依賴 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) - 作者：@2013xile

- **[資料來源：主要]** 修正啟用資料表前綴時，匯入的資料庫表格使用了錯誤的前綴表名 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) - 作者：@2013xile

- **[流程引擎]** 修正 AI 產生的區塊無法從參考範本轉換回重複範本的問題。 ([#9392](https://github.com/nocobase/nocobase/pull/9392)) - 作者：@gchust

- **[AI 員工]**
  - 修正工作流程中 AI 員工節點讀取關聯欄位附件時的錯誤 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) - 作者：@cgyrock

  - 修正工作流程 AI 員工節點在工具指派後未正確結束的問題。 ([#9381](https://github.com/nocobase/nocobase/pull/9381)) - 作者：@cgyrock

- **[動作：自訂請求]** 升級 koa 至 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) - 作者：@chenos

- **[區塊：看板]**
  - 改善看板卡片緊湊樣式，並優化快速建立彈出視窗的範本選取。 ([#9370](https://github.com/nocobase/nocobase/pull/9370)) - 作者：@jiannx

  - 修正 v1 看板區塊中長文字欄位防止單詞換行的問題 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) - 作者：@katherinehhh

- **[集合欄位：公式]** 修正 v2 子表格中的公式欄位未觸發自動計算的問題 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) - 作者：@katherinehhh

- **[動作：匯入記錄 Pro]** 修正日期欄位的重複檢查始終失敗的問題 - 作者：@mytharcher

- **[密碼政策]** 修正服務重啟後，被永久鎖定的使用者仍可登入的問題 - 作者：@2013xile

- **[工作流程：審批]** 修正審批工作流程設定中，選取記錄抽屜被遮擋的問題 - 作者：@zhangzhonghe

- **[電子郵件管理器]** 修正郵件身分標題顯示 - 作者：@jiannx

- **[備份管理器]** 修正 pg schema 適配 - 作者：@Andrew1989Y
