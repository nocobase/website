---
title: "NocoBase v2.0.50：支援唯讀文字欄位的「顯示複製按鈕」選項"
description: "v2.0.50 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 為關聯區塊新增關聯與解除關聯操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) - @katherinehhh

- **[文字複製]** 唯讀文字欄位支援「顯示複製按鈕」選項 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) - @katherinehhh

### 🚀 改進

- **[未定義]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) - @Molunerfinn

- **[客戶端]** 允許為序號欄位指派欄位值 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) - @mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 修復 v2 流程表單中資料表欄位驗證訊息未翻譯的問題 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) - @jiannx

- **[客戶端]**
  - 修復表單區塊中的「隱藏（保留值）」欄位，使其在 UI 編輯器模式下保持可見，並恢復在欄位指派中為其指派值的支援 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) - @jiannx

  - 修復當檔案中繼資料遺失時，AttachmentURL 欄位下載檔名不正確的問題 ([#9382](https://github.com/nocobase/nocobase/pull/9382)) - @mytharcher

  - 修復 v2 表格批次工作流程觸發器，使分頁切換後行選取狀態保持一致，返回後可再次選取行 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) - @jiannx

  - 修復篩選表單無法收合的問題 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) - @zhangzhonghe

  - 修復 v1 子表格連動規則錯誤變更必填欄位樣式的問題 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) - @zhangzhonghe

  - 修復網格卡片區塊在更新與重新整理後資料渲染不正確的問題 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) - @katherinehhh

  - 修復行動裝置上子表格中的必填選項欄位在首次選取時未正確驗證的問題 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) - @katherinehhh

  - 修復切換快取頁面後 URL 查詢參數變數失效的問題 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) - @zhangzhonghe

  - 修復 v2 中 DividerItem 適配主題的問題 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) - @katherinehhh

  - 修復 v2 子表格中關聯選擇欄位隱藏快速建立選項的問題 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) - @katherinehhh

  - 修復表單值變更後連動規則未重新執行的問題 ([#9357](https://github.com/nocobase/nocobase/pull/9357)) - @gchust

  - 修復使用自訂多選篩選器過濾純量欄位時的錯誤 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) - @zhangzhonghe

- **[伺服器端]** 在檔案系統操作前驗證外掛套件名稱 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) - @chenos

- **[資料來源管理器]** 防止在外部資料來源的自訂範圍權限中編輯與刪除所有記錄 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) - @katherinehhh

- **[資料來源：主要]** 修復啟用資料表前綴時，匯入的資料庫表格使用了錯誤的前綴表名 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) - @2013xile

- **[通知：應用內訊息]** 修復收到即時通知後應用內訊息列表未重新整理的問題 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) - @mytharcher

- **[區塊：看板]** 修復 v1 看板區塊中長文字欄位無法自動換行的問題 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) - @katherinehhh

- **[集合欄位：公式]** 修復 v2 子表格中的公式欄位未觸發自動計算的問題 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) - @katherinehhh
