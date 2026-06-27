---
title: "每週更新｜看板插件新增 client-v2 支援"
description: "這是 NocoBase 從 2026 年 5 月 14 日至 5 月 21 日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.55](https://www.nocobase.com/en/blog/v2.0.55)

*發布日期：2026-05-18*

### 🚀 改進

- **[AI 員工]** 儲存至向量資料庫時，若資料表名稱重複則提示 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[AI：知識庫]** 儲存至向量資料庫時，若資料表名稱重複則提示 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在動作按鈕事件流程中無法解析當前彈窗記錄變數的問題。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  - 修正表單提交時子表單中 JS 欄位值未正確設定的問題。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
- **[檔案管理器]** 修復檔案管理器 `tx-cos` 上傳缺少檔案大小元資料的問題。([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[資料來源：主資料庫]** 修復同步欄位後，欄位選項被寫入 schema 的問題 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[WEB 客戶端]** 移除選單後清除區塊資料。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
- **[AI 員工]** 修復 AI 員工 OSS 檔案讀取錯誤 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[動作：匯入記錄]** 修復匯入日期類欄位記錄時顯示錯誤日期的問題 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[動作：匯出記錄 Pro]** 修復從附件 URL 欄位匯出附件時拋出錯誤的問題 by @mytharcher
- **[動作：匯入記錄 Pro]** 修復 Pro 版 xlsx 匯入的時區處理問題 by @mytharcher

### [v2.0.53](https://www.nocobase.com/en/blog/v2.0.53)

*發布日期：2026-05-14*

### 🚀 改進

- **[流程引擎]** 關閉含有未儲存資料的事件流程配置頁面時，新增未儲存變更確認訊息。([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在表格中防止對關聯欄位開啟快速編輯 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - 修正子表格中僅顯示的關聯欄位在重新整理後不顯示或無法點擊的問題。([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - 修正 v2 資料區塊中的多選欄位應顯示選項標籤而非值 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
- **[區塊：多步驟表單]** 修復在 v1 步驟表單區塊中啟用全高時的滾動條問題 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.35](https://www.nocobase.com/en/blog/v2.1.0-beta.35)

*發布日期：2026-05-20*

### 🚀 改進

- **[客戶端]** 在 v1 和 v2 應用程式之間共享條件評估 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
- **[本地化]** 改進了 Lina 本地化翻譯任務，包含翻譯範圍、參考語言設定和快速編輯 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[工作流：審批]** 使用時間軸卡片改進相關審批 by @zhangzhonghe

### 🐛 錯誤修復

- **[未定義]** 對齊 nginx 配置路徑 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
- **[cli-v1]** 修復 create-nocobase-app 的開發啟動，透過重複使用打包的應用程式外殼同時啟用本地插件開發。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
- **[客戶端]**

  - 修復選單徽章在其值為 0 時仍顯示圓點的問題 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
  - 修復篩選表單無法使用當前表單變數的問題 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
- **[認證]** 防止當 WebSocket 認證令牌引用的驗證器其認證類型插件已卸載或缺失時，伺服器崩潰。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[日曆]**

  - 修復日曆「更多」項目無法完全顯示的問題 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
  - 修正日曆「更多事件」覆蓋層中事件項目的游標樣式 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
- **[授權設定]** 解析符號連結的捆綁依賴 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos

### [v2.1.0-beta.34](https://www.nocobase.com/en/blog/v2.1.0-beta.34)

*發布日期：2026-05-19*

### 🎉 新功能

- **[區塊：看板]** 為看板插件新增 client-v2 支援 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 改進

- **[cli]** 透過將設定和管理工作流程遷移至 Inquirer 來改善 NocoBase CLI 提示體驗，並修復相關的安裝、技能和 Docker 執行時問題。([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
- **[AI 員工]** 儲存至向量資料庫時，若資料表名稱重複則提示 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[通知管理器]** 更改佇列策略以優化發送效能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[工作流：自訂動作事件]** 將 block-workbench 和 workflow-custom-action-trigger 插件遷移至 client v2，包括它們的動作模型和 QR 碼掃描流程。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
- **[認證]** 在 client-v2 中實作驗證器設定頁面，並提供可重複使用的 client-v2 表格、變數輸入和表單原語。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[AI：知識庫]** 儲存至向量資料庫時，若資料表名稱重複則提示 by @cgyrock
- **[認證：SAML 2.0]** 為 CAS 和 SAML 認證插件新增 client-v2 入口，使其能與 v2 登入頁面和驗證器設定搭配使用。 by @Molunerfinn

### 🐛 錯誤修復

- **[client-v2]**

  - 修復看板插件 v2 路由因客戶端未提供 dnd-kit 依賴而無法載入的問題。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
  - 共享的 v2 表格元件現在預設顯示頁面大小選擇器，與 v1 行為一致。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
- **[客戶端]**

  - 修正表單提交時子表單中 JS 欄位值未正確設定的問題。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
  - 修正在動作按鈕事件流程中無法解析當前彈窗記錄變數的問題。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
- **[流程引擎]** 修正瀏覽器控制台中錯誤的錯誤訊息。([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
- **[AI 員工]**

  - 修復 AI 員工節點中操作者角色權限未生效的問題 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - 修復 AI 員工 OSS 檔案讀取錯誤 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[API 文件]** 修正集合 API 文件，使查詢參數不再互相干擾 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[資料來源：主資料庫]** 修復同步欄位後，欄位選項被寫入 schema 的問題 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[工作流：JavaScript]** 修復生產建置中工作流 JavaScript QuickJS 執行時套件載入問題。([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
- **[WEB 客戶端]** 移除選單後清除區塊資料。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust
- **[動作：匯入記錄]** 修復匯入日期類欄位記錄時顯示錯誤日期的問題 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[動作：匯入記錄 Pro]** 修復 Pro 版 xlsx 匯入的時區處理問題 by @mytharcher
- **[認證：SAML 2.0]** 修復 SAML 自動重定向攔截器導致應用程式外殼閃爍並在每次導航時雙重開啟抽屜的問題。 by @Molunerfinn
- **[動作：匯出記錄 Pro]** 修復從附件 URL 欄位匯出附件時拋出錯誤的問題 by @mytharcher

### [v2.1.0-beta.33](https://www.nocobase.com/en/blog/v2.1.0-beta.33)

*發布日期：2026-05-15*

### 🎉 新功能

- **[區塊：Markdown]** 為 Markdown 區塊新增 client v2 支援 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[區塊：列表]** 列表區塊支援 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx
- **[日曆]** 為日曆插件新增 client v2 支援。([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
- **[區塊：樹]** 為樹狀篩選區塊新增 client-v2 支援。([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx

### 🚀 改進

- **[流程引擎]** 關閉含有未儲存資料的事件流程配置頁面時，新增未儲存變更確認訊息。([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
- **[資料來源管理器]** 優化資料建模 API，支援使用 AI 建立評論集合、配置外部資料來源的關聯欄位以及設定欄位驗證規則 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[區塊：網格卡片]** 更新網格卡片插件以支援 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[區塊：iframe]** 為 iframe 區塊新增 v2 支援。([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx
- **[AI 員工]** AI 員工並行對話互動與效能優化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 為表單提交動作新增「提交成功後」設定。([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
  - 修正在表格中防止對關聯欄位開啟快速編輯 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - 修正子表格中僅顯示的關聯欄位在重新整理後不顯示或無法點擊的問題。([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - 修正無法移除舊版預設值設定的問題。([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - 修正 v2 資料區塊中的多選欄位應顯示選項標籤而非值 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
- **[client-v2]**

  - 修復表格區塊中關聯欄位的標題欄位選項列表為空的問題 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
  - 在 v2 佈局中篩選 v1 選單後保留空群組 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
- **[流程引擎]** 修正子模型選單中不穩定的關聯欄位子選單 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
- **[檔案管理器]** 修復檔案管理器 `tx-cos` 上傳缺少檔案大小元資料的問題。([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[AI 員工]** 修復 plugin-ai 載入錯誤 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
- **[區塊：多步驟表單]** 修復在 v1 步驟表單區塊中啟用全高時的滾動條問題 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
- **[工作流：Webhook]** 修復建立回應節點時被 `statusCode` 配置驗證攔截的問題 by @mytharcher
- **[集合欄位：簽名]** 解決行動裝置上簽名框顯示問題 by @chenzhizdt

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.39](https://www.nocobase.com/en/blog/v2.1.0-alpha.39)

*發布日期：2026-05-20*

### 🎉 新功能

- **[區塊：看板]** 為看板插件新增 client-v2 支援 ([#9475](https://github.com/nocobase/nocobase/pull/9475)) by @jiannx

### 🚀 改進

- **[客戶端]** 在 v1 和 v2 應用程式之間共享條件評估 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) by @zhangzhonghe
- **[本地化]** 改進了 Lina 本地化翻譯任務，包含翻譯範圍、參考語言設定和快速編輯 ([#9521](https://github.com/nocobase/nocobase/pull/9521)) by @2013xile
- **[AI 員工]** 儲存至向量資料庫時，若資料表名稱重複則提示 ([#9497](https://github.com/nocobase/nocobase/pull/9497)) by @cgyrock
- **[通知管理器]** 更改佇列策略以優化發送效能 ([#9407](https://github.com/nocobase/nocobase/pull/9407)) by @mytharcher
- **[工作流：自訂動作事件]** 將 block-workbench 和 workflow-custom-action-trigger 插件遷移至 client v2，包括它們的動作模型和 QR 碼掃描流程。([#9494](https://github.com/nocobase/nocobase/pull/9494)) by @jiannx
- **[認證]** 在 client-v2 中實作驗證器設定頁面，並提供可重複使用的 client-v2 表格、變數輸入和表單原語。([#9457](https://github.com/nocobase/nocobase/pull/9457)) by @Molunerfinn
- **[AI：知識庫]** 儲存至向量資料庫時，若資料表名稱重複則提示 by @cgyrock
- **[認證：SAML 2.0]** 為 CAS 和 SAML 認證插件新增 client-v2 入口，使其能與 v2 登入頁面和驗證器設定搭配使用。 by @Molunerfinn
- **[工作流：審批]** 使用時間軸卡片改進相關審批 by @zhangzhonghe

### 🐛 錯誤修復

- **[未定義]** 對齊 nginx 配置路徑 ([#9528](https://github.com/nocobase/nocobase/pull/9528)) by @chenos
- **[cli-v1]** 修復 create-nocobase-app 的開發啟動，透過重複使用打包的應用程式外殼同時啟用本地插件開發。([#9471](https://github.com/nocobase/nocobase/pull/9471)) by @Molunerfinn
- **[客戶端]**

  - 修復篩選表單無法使用當前表單變數的問題 ([#9474](https://github.com/nocobase/nocobase/pull/9474)) by @zhangzhonghe
  - 修復選單徽章在其值為 0 時仍顯示圓點的問題 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) by @zhangzhonghe
- **[client-v2]**

  - 共享的 v2 表格元件現在預設顯示頁面大小選擇器，與 v1 行為一致。([#9512](https://github.com/nocobase/nocobase/pull/9512)) by @Molunerfinn
  - 修復看板插件 v2 路由因客戶端未提供 dnd-kit 依賴而無法載入的問題。([#9516](https://github.com/nocobase/nocobase/pull/9516)) by @jiannx
- **[日曆]**

  - 修正日曆「更多事件」覆蓋層中事件項目的游標樣式 ([#9519](https://github.com/nocobase/nocobase/pull/9519)) by @jiannx
  - 修復日曆「更多」項目無法完全顯示的問題 ([#9492](https://github.com/nocobase/nocobase/pull/9492)) by @zhangzhonghe
- **[授權設定]** 解析符號連結的捆綁依賴 ([#9518](https://github.com/nocobase/nocobase/pull/9518)) by @chenos
- **[AI 員工]**

  - 修復 AI 員工節點中操作者角色權限未生效的問題 ([#9513](https://github.com/nocobase/nocobase/pull/9513)) by @cgyrock
  - 修復 AI 員工 OSS 檔案讀取錯誤 ([#9493](https://github.com/nocobase/nocobase/pull/9493)) by @cgyrock
- **[認證]** 防止當 WebSocket 認證令牌引用的驗證器其認證類型插件已卸載或缺失時，伺服器崩潰。([#9514](https://github.com/nocobase/nocobase/pull/9514)) by @Molunerfinn
- **[API 文件]** 修正集合 API 文件，使查詢參數不再互相干擾 ([#9442](https://github.com/nocobase/nocobase/pull/9442)) by @jiannx
- **[資料來源：主資料庫]** 修復同步欄位後，欄位選項被寫入 schema 的問題 ([#9505](https://github.com/nocobase/nocobase/pull/9505)) by @2013xile
- **[認證：SAML 2.0]** 修復 SAML 自動重定向攔截器導致應用程式外殼閃爍並在每次導航時雙重開啟抽屜的問題。 by @Molunerfinn

### [v2.1.0-alpha.38](https://www.nocobase.com/en/blog/v2.1.0-alpha.38)

*發布日期：2026-05-18*

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在動作按鈕事件流程中無法解析當前彈窗記錄變數的問題。([#9495](https://github.com/nocobase/nocobase/pull/9495)) by @gchust
  - 修正表單提交時子表單中 JS 欄位值未正確設定的問題。([#9496](https://github.com/nocobase/nocobase/pull/9496)) by @gchust
- **[流程引擎]** 修正瀏覽器控制台中錯誤的錯誤訊息。([#9502](https://github.com/nocobase/nocobase/pull/9502)) by @gchust
- **[工作流：JavaScript]** 修復生產建置中工作流 JavaScript QuickJS 執行時套件載入問題。([#9503](https://github.com/nocobase/nocobase/pull/9503)) by @mytharcher
- **[動作：匯入記錄]** 修復匯入日期類欄位記錄時顯示錯誤日期的問題 ([#9463](https://github.com/nocobase/nocobase/pull/9463)) by @mytharcher
- **[動作：匯入記錄 Pro]** 修復 Pro 版 xlsx 匯入的時區處理問題 by @mytharcher
- **[動作：匯出記錄 Pro]** 修復從附件 URL 欄位匯出附件時拋出錯誤的問題 by @mytharcher

### [v2.1.0-alpha.37](https://www.nocobase.com/en/blog/v2.1.0-alpha.37)

*發布日期：2026-05-17*

### 🐛 錯誤修復

- **[WEB 客戶端]** 移除選單後清除區塊資料。([#9459](https://github.com/nocobase/nocobase/pull/9459)) by @gchust

### [v2.1.0-alpha.36](https://www.nocobase.com/en/blog/v2.1.0-alpha.36)

*發布日期：2026-05-16*

### 🎉 新功能

- **[區塊：Markdown]** 為 Markdown 區塊新增 client v2 支援 ([#9487](https://github.com/nocobase/nocobase/pull/9487)) by @jiannx
- **[區塊：列表]** 列表區塊支援 client-v2 ([#9486](https://github.com/nocobase/nocobase/pull/9486)) by @jiannx

### 🚀 改進

- **[流程引擎]** 關閉含有未儲存資料的事件流程配置頁面時，新增未儲存變更確認訊息。([#9449](https://github.com/nocobase/nocobase/pull/9449)) by @gchust
- **[cli]** 透過將設定和管理工作流程遷移至 Inquirer 來改善 NocoBase CLI 提示體驗，並修復相關的安裝、技能和 Docker 執行時問題。([#9452](https://github.com/nocobase/nocobase/pull/9452)) by @chenos
- **[資料來源管理器]** 優化資料建模 API，支援使用 AI 建立評論集合、配置外部資料來源的關聯欄位以及設定欄位驗證規則 ([#9480](https://github.com/nocobase/nocobase/pull/9480)) by @2013xile
- **[區塊：網格卡片]** 更新網格卡片插件以支援 client v2 ([#9484](https://github.com/nocobase/nocobase/pull/9484)) by @jiannx
- **[區塊：iframe]** 為 iframe 區塊新增 v2 支援。([#9485](https://github.com/nocobase/nocobase/pull/9485)) by @jiannx

### 🐛 錯誤修復

- **[客戶端]**

  - 修正子表格中僅顯示的關聯欄位在重新整理後不顯示或無法點擊的問題。([#9453](https://github.com/nocobase/nocobase/pull/9453)) by @jiannx
  - 為表單提交動作新增「提交成功後」設定。([#9414](https://github.com/nocobase/nocobase/pull/9414)) by @jiannx
- **[client-v2]** 修復表格區塊中關聯欄位的標題欄位選項列表為空的問題 ([#9490](https://github.com/nocobase/nocobase/pull/9490)) by @katherinehhh
- **[流程引擎]** 修正子模型選單中不穩定的關聯欄位子選單 ([#9417](https://github.com/nocobase/nocobase/pull/9417)) by @jiannx
- **[檔案管理器]** 修復檔案管理器 `tx-cos` 上傳缺少檔案大小元資料的問題。([#9499](https://github.com/nocobase/nocobase/pull/9499)) by @mytharcher
- **[集合欄位：簽名]** 解決行動裝置上簽名框顯示問題 by @chenzhizdt

### [v2.1.0-alpha.35](https://www.nocobase.com/en/blog/v2.1.0-alpha.35)

*發布日期：2026-05-14*

### 🎉 新功能

- **[未定義]** 新增 AI 員工「本地化工程師 Lina」，協助進行本地化翻譯任務 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  參考：[本地化管理](https://docs.nocobase.com/system-management/localization)<br>[Lina：本地化工程師](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻譯本地化條目](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[日曆]** 為日曆插件新增 client v2 支援。([#9464](https://github.com/nocobase/nocobase/pull/9464)) by @jiannx
- **[區塊：樹]** 為樹狀篩選區塊新增 client-v2 支援。([#9466](https://github.com/nocobase/nocobase/pull/9466)) by @jiannx
- **[檔案儲存：S3(Pro)]** 支援在 v2 檔案管理器中透過 S3 Pro 儲存上傳檔案。 by @Molunerfinn

### 🚀 改進

- **[建置]** 新增回歸測試覆蓋，以確保 `deleteServerFiles` 不會在 Windows 和 POSIX 路徑下移除 `client` 和 `client-v2` 的建置產物。([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
- **[客戶端]** 在一對多表格區塊的關聯選擇對話框中排除已關聯的記錄 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[AI 員工]** AI 員工並行對話互動與效能優化 ([#9462](https://github.com/nocobase/nocobase/pull/9462)) by @cgyrock
- **[檔案管理器]** 第三方儲存插件現在可以在 v2 檔案管理器設定頁面上註冊自己的儲存類型表單。([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[AI：知識庫]** 知識庫的唯一識別碼可在建立時配置 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修正在表格中防止對關聯欄位開啟快速編輯 ([#9469](https://github.com/nocobase/nocobase/pull/9469)) by @katherinehhh
  - 修正 v2 資料區塊中的多選欄位應顯示選項標籤而非值 ([#9472](https://github.com/nocobase/nocobase/pull/9472)) by @katherinehhh
  - 修復當篩選表單有預設值時重複請求表格資料的問題 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - 修正無法移除舊版預設值設定的問題。([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - 修正無法為關聯的選擇欄位選擇選項的問題。([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - 修復提交後系統設定顯示為空的問題 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - 修正在表格區塊事件流程中取消選取行資料時，目標區塊資料範圍設定錯誤的問題。([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - 修正在 v2 表格區塊中更改關聯欄位的標題欄位時出錯的問題 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  - 修正 V2 聯動規則以支援設定欄位的可選選項 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
- **[client-v2]**

  - 在 v2 佈局中篩選 v1 選單後保留空群組 ([#9478](https://github.com/nocobase/nocobase/pull/9478)) by @zhangzhonghe
  - 修復插件啟用對話框後頁面變空白的問題 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - 修復在生產建置中，當 v1 管理頁面引用 v2 插件模組時崩潰的問題。([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
- **[cli-v1]** 修復由 create-nocobase-app 建立的應用程式中，因 app-dev 客戶端路徑解析導致的開發啟動失敗問題。([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[伺服器]** 修復（檔案管理器）：強制下載本地/公開儲存中的活動內容檔案 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[AI 員工]**

  - 修復 plugin-ai 載入錯誤 ([#9483](https://github.com/nocobase/nocobase/pull/9483)) by @cgyrock
  - 修復 Ollama 測試飛行需要輸入金鑰的問題 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[區塊：多步驟表單]** 修復在 v1 步驟表單區塊中啟用全高時的滾動條問題 ([#9468](https://github.com/nocobase/nocobase/pull/9468)) by @katherinehhh
- **[部門]** 修復使用者與權限設定中「新增使用者」和「新增部門」按鈕的翻譯衝突 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[工作流]** 修復：恢復 FlowModel 工作流綁定對話框中操作和自訂動作事件的輔助文字 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[區塊：Markdown]** 修復 v2 Markdown 區塊報錯的問題 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[工作流：Webhook]** 修復建立回應節點時被 `statusCode` 配置驗證攔截的問題 by @mytharcher
- **[工作流：審批]**

  - 修復行動裝置上的審批表單佈局 by @zhangzhonghe
  - 修復委派審批任務時重複的審批記錄索引。 by @mytharcher
- **[備份管理器]** 修復當找不到檔案時備份會失敗並報錯的問題。 by @gchust
