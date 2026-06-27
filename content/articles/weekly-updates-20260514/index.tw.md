---
title: "每週更新｜AI員工支援多對話並行處理"
description: "這是NocoBase在2026年5月7日至5月14日期間的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.52](https://www.nocobase.com/en/blog/v2.0.52)

*發布日期：2026-05-13*

### 🎉 新功能

- **[client]**
  - 在 v2 中新增當前使用者語言變數 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  - 為 v2 表單中的日期欄位新增日期範圍限制選項 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh

### 🚀 改進

- **[client]** 在一對多表格區塊的關聯選擇對話框中排除已關聯的記錄 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[部門]** 透過新增圖示和調整間距來優化部門列表樣式 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh
- **[AI：知識庫]** 知識庫的唯一標識符可在建立時進行配置 by @cgyrock

### 🐛 錯誤修復

- **[client]**

  - 修復無法移除舊版預設值設定的問題。([#9470](https://github.com/nocobase/nocobase/pull/9470)) by @gchust
  - 修復無法為關聯的選擇欄位選擇選項的問題。([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - 修復在表格區塊事件流程中取消選擇行資料時，目標區塊資料範圍設定錯誤的問題。([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - 修復當篩選表單有預設值時，表格重複發送請求的問題 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - 修復 V2 聯動規則支援為欄位設定可選選項 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
  - 修復在 v2 表格區塊中更改關聯欄位標題欄位時的錯誤 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
  - 修復操作按鈕聯動規則偶爾失效的問題。([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  - 在 v2 子表格中隱藏對多關聯欄位的子表格元件 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
- **[server]** 修復(檔案管理器)：強制下載本地/公共儲存中的活動內容檔案 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[AI 員工]** 修復 Ollama 測試飛行需要輸入金鑰的問題 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[圖形化集合管理器]** 修復圖形介面自動佈局拋出更新動作篩選器錯誤 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[工作流]** 修復：恢復 FlowModel 工作流綁定對話框中操作和自定義動作事件的輔助文字 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[部門]** 修復使用者與權限設定中「新增使用者」和「新增部門」按鈕的翻譯衝突 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[集合欄位：Markdown(Vditor)]** 修復 markdown 欄位工具提示在水平表單佈局中被隱藏的問題 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[WEB 客戶端]** 修復使用翻譯標籤時的路由類型篩選 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[工作流：審批]**

  - 修復 JS 欄位出現在審批流程設定中的問題 by @zhangzhonghe
  - 修復行動裝置上的審批表單佈局 by @zhangzhonghe
  - 修復委派審批任務時審批記錄索引重複的問題。 by @mytharcher
- **[備份管理器]** 修復當找不到檔案時，備份會因錯誤而失敗的問題。 by @gchust

### [v2.0.51](https://www.nocobase.com/en/blog/v2.0.51)

*發布日期：2026-05-10*

### 🚀 改進

- **[工作流：審批]** 修復審批表單的必填驗證行為 by @zhangzhonghe

### 🐛 錯誤修復

- **[client]**

  - 修復 JS 欄位設為唯讀後無法再編輯 JS 程式碼的問題。([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - 修復欄位聯動規則中子表格欄位賦值不生效的問題。([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  - 修復 v2 頁面頁籤在儲存設定後未立即同步的問題 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - 修復建立表單中關聯欄位的預設值彈窗顯示不正確的問題。([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
- **[密碼策略]** 修復服務重啟後永久鎖定的使用者可以登入的問題 by @2013xile
- **[動作：匯入記錄 Pro]** 修復日期欄位的重複檢查始終失敗的問題 by @mytharcher
- **[工作流：審批]** 修復在審批工作流配置中選擇記錄抽屜被遮擋的問題 by @zhangzhonghe

### [v2.0.50](https://www.nocobase.com/en/blog/v2.0.50)

*發布日期：2026-05-09*

### 🎉 新功能

- **[client]** 為關聯區塊新增關聯和取消關聯操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[文字複製]** 支援唯讀文字欄位的「顯示複製按鈕」選項 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 改進

- **[undefined]** 在 pk 中跳過已發布的版本 ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
- **[client]** 允許為序號欄位指派欄位值 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher

### 🐛 錯誤修復

- **[流程引擎]** 修復 v2 流程表單中未翻譯的資料表欄位驗證訊息 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[client]**

  - 修復表單區塊中的「隱藏（保留值）」欄位，使其在 UI 編輯器模式下保持可見，並恢復在欄位指派中為其賦值輸入的支援 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - 修復當檔案元資料遺失時，AttachmentURL 欄位下載檔名不正確的問題。([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - 修復 v2 表格批次工作流觸發器，使行選擇在頁籤間重新導向後保持一致，並且返回後可以再次選擇行 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  - 修復篩選表單無法折疊的問題 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - 修復 v1 子表格聯動規則錯誤更改必填欄位樣式的問題 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - 修復更新和重新整理後網格卡片區塊中資料渲染不正確的問題 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  - 修復在行動裝置上首次選擇時，子表格中的必填選項欄位未正確驗證的問題 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - 修復切換快取頁面後 URL 查詢參數變數失效的問題 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  - 修復在 v2 中使 DividerItem 適配主題 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - 修復在 v2 子表格中隱藏關聯選擇欄位的快速建立選項 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - 修復表單值更改後聯動規則未重新執行的問題。([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - 修復使用自訂多選篩選器篩選純量欄位時的錯誤 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
- **[server]** 在檔案系統操作前驗證外掛套件名稱 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[資料來源管理器]** 防止在外部資料來源的自訂範圍權限中編輯和刪除所有記錄 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[資料來源：主要]** 修復啟用資料表前綴時，匯入的資料庫表格使用了錯誤的前綴表名 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[通知：應用內訊息]** 修復收到即時通知後應用內訊息列表未重新整理的問題 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[區塊：看板]** 修復 v1 看板區塊中長文字欄位防止單詞換行的問題 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
- **[集合欄位：公式]** 修復 v2 子表格中的公式欄位未觸發自動計算的問題 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.32](https://www.nocobase.com/en/blog/v2.1.0-beta.32)

*發布日期：2026-05-13*

### 🎉 新功能

- **[undefined]** 新增 AI 員工「本地化工程師 Lina」，協助處理本地化翻譯任務 ([#9434](https://github.com/nocobase/nocobase/pull/9434)) by @2013xile
  參考：[本地化管理](https://docs.nocobase.com/system-management/localization)<br>[Lina：本地化工程師](https://docs.nocobase.com/ai-employees/built-in/lina)<br>[使用 Lina 和本地 HY-MT1.5-1.8B 翻譯本地化條目](https://docs.nocobase.com/ai-employees/scenarios/localization-hy-mt)
- **[檔案儲存：S3(Pro)]** 支援在 v2 檔案管理器中透過 S3 Pro 儲存上傳檔案。 by @Molunerfinn

### 🚀 改進

- **[建置]** 新增回歸覆蓋，以防止 `deleteServerFiles` 在 Windows 和 POSIX 路徑下移除 `client` 和 `client-v2` 建置產物。([#9318](https://github.com/nocobase/nocobase/pull/9318)) by @Molunerfinn
- **[client]** 在一對多表格區塊的關聯選擇對話框中排除已關聯的記錄 ([#9448](https://github.com/nocobase/nocobase/pull/9448)) by @katherinehhh
- **[檔案管理器]** 第三方儲存外掛現在可以在 v2 檔案管理器設定頁面上註冊自己的儲存類型表單。([#9439](https://github.com/nocobase/nocobase/pull/9439)) by @Molunerfinn
- **[AI：知識庫]** 知識庫的唯一標識符可在建立時進行配置 by @cgyrock

### 🐛 錯誤修復

- **[client]**

  - 修復無法為關聯的選擇欄位選擇選項的問題。([#9088](https://github.com/nocobase/nocobase/pull/9088)) by @gchust
  - 修復提交後系統設定顯示為空的問題 ([#9458](https://github.com/nocobase/nocobase/pull/9458)) by @zhangzhonghe
  - 修復當篩選表單有預設值時，表格重複發送請求的問題 ([#9423](https://github.com/nocobase/nocobase/pull/9423)) by @zhangzhonghe
  - 修復在表格區塊事件流程中取消選擇行資料時，目標區塊資料範圍設定錯誤的問題。([#9443](https://github.com/nocobase/nocobase/pull/9443)) by @gchust
  - 修復 V2 聯動規則支援為欄位設定可選選項 ([#9399](https://github.com/nocobase/nocobase/pull/9399)) by @jiannx
  - 修復在 v2 表格區塊中更改關聯欄位標題欄位時的錯誤 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) by @katherinehhh
- **[client-v2]**

  - 修復在外掛啟用對話框後頁面變空白的問題 ([#9455](https://github.com/nocobase/nocobase/pull/9455)) by @zhangzhonghe
  - 修復在生產建置中，v1 管理頁面引用 v2 外掛模組時崩潰的問題。([#9460](https://github.com/nocobase/nocobase/pull/9460)) by @Molunerfinn
- **[cli-v1]** 修復由 create-nocobase-app 建立的應用程式中，因 app-dev 客戶端路徑解析導致的開發啟動失敗。([#9465](https://github.com/nocobase/nocobase/pull/9465)) by @Molunerfinn
- **[server]** 修復(檔案管理器)：強制下載本地/公共儲存中的活動內容檔案 ([#9437](https://github.com/nocobase/nocobase/pull/9437)) by @mytharcher
- **[部門]** 修復使用者與權限設定中「新增使用者」和「新增部門」按鈕的翻譯衝突 ([#9456](https://github.com/nocobase/nocobase/pull/9456)) by @katherinehhh
- **[區塊：Markdown]** 修復 v2 Markdown 區塊報錯的問題 ([#9440](https://github.com/nocobase/nocobase/pull/9440)) by @zhangzhonghe
- **[工作流]** 修復：恢復 FlowModel 工作流綁定對話框中操作和自定義動作事件的輔助文字 ([#9447](https://github.com/nocobase/nocobase/pull/9447)) by @mytharcher
- **[AI 員工]** 修復 Ollama 測試飛行需要輸入金鑰的問題 ([#9450](https://github.com/nocobase/nocobase/pull/9450)) by @cgyrock
- **[工作流：審批]**

  - 修復委派審批任務時審批記錄索引重複的問題。 by @mytharcher
  - 修復行動裝置上的審批表單佈局 by @zhangzhonghe
- **[備份管理器]** 修復當找不到檔案時，備份會因錯誤而失敗的問題。 by @gchust

### [v2.1.0-beta.30](https://www.nocobase.com/en/blog/v2.1.0-beta.30)

*發布日期：2026-05-12*

### 🎉 新功能

- **[client]**
  - 為頁面選單項目新增聯動規則支援 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe
  - 在 v2 中新增當前使用者語言變數 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh

### 🚀 改進

- **[client-v2]** 在 v2 佈局中過濾掉 v1 選單，僅顯示 v2 選單 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
- **[undefined]** 支援在 nb cli 中設定會話範圍的當前環境 ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos
- **[AI 員工]** AI 員工支援並行處理多個對話 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock
- **[部門]** 透過新增圖示和調整間距來優化部門列表樣式 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 錯誤修復

- **[建置]** 修復當 v1 客戶端程式碼匯入另一個外掛的 `/client-v2` 入口時，外掛建置失敗的問題。([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[client]**

  - 在 v2 子表格中隱藏對多關聯欄位的子表格元件 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
  - 修復操作按鈕聯動規則偶爾失效的問題。([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
- **[圖形化集合管理器]** 修復圖形介面自動佈局拋出更新動作篩選器錯誤 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[區塊：樹]** 改進了樹狀篩選區塊設定，並修復了不支援的關聯、標題欄位回退和搜尋重置行為。([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-beta.29](https://www.nocobase.com/en/blog/v2.1.0-beta.29)

*發布日期：2026-05-10*

### 🎉 新功能

- **[client]** 為 v2 表單中的日期欄位新增日期範圍限制選項 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
- **[流程引擎]** 將 `plugin-environment-variables` 遷移至 client-v2，包含基於 React 的設定頁面和全域註冊的 `$env` 執行時期變數；為 `plugin-file-manager` 新增 client-v2 入口，包含基於 React 的儲存配置頁面和基於 FlowModel 的上傳欄位、上傳動作和預覽。([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🐛 錯誤修復

- **[client]**

  - 修復 JS 欄位設為唯讀後無法再編輯 JS 程式碼的問題。([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - 修復 v2 頁面頁籤在儲存設定後未立即同步的問題 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - 修復欄位聯動規則中子表格欄位賦值不生效的問題。([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
  - 修復建立表單中關聯欄位的預設值彈窗顯示不正確的問題。([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
- **[集合欄位：Markdown(Vditor)]** 修復 markdown 欄位工具提示在水平表單佈局中被隱藏的問題 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[行動裝置（已棄用）]** 修復行動裝置訊息彈窗無法關閉或滾動的問題 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[WEB 客戶端]** 修復使用翻譯標籤時的路由類型篩選 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[工作流：審批]** 修復 JS 欄位出現在審批流程設定中的問題 by @zhangzhonghe

### [v2.1.0-beta.27](https://www.nocobase.com/en/blog/v2.1.0-beta.27)

*發布日期：2026-05-09*

### 🎉 新功能

- **[server]** AI 員工可以使用 Bash 命令搜尋捆綁的文件 ([#9269](https://github.com/nocobase/nocobase/pull/9269)) by @2013xile
- **[AI 員工]** 工作流 AI 員工節點支援從附件欄位載入檔案。([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
- **[文字複製]** 支援唯讀文字欄位的「顯示複製按鈕」選項 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh

### 🚀 改進

- **[client]** 允許為序號欄位指派欄位值 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
- **[區塊：看板]** 改進了 v2 詳細資訊欄位間距的一致性，並使看板卡片和欄位間距更好地適配主題設定。([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
- **[AI 員工]** 改進了 Nathan 的 RunJS 編輯工具，並減少了長時間 AI 聊天對話期間的延遲 ([#9311](https://github.com/nocobase/nocobase/pull/9311)) by @2013xile
- **[工作流：審批]** 修復審批表單的必填驗證行為 by @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]** 修復 v2 流程表單中未翻譯的資料表欄位驗證訊息 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[client]**

  - 修復篩選表單無法折疊的問題 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - 修復使用自訂多選篩選器篩選純量欄位時的錯誤 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  - 修復當檔案元資料遺失時，AttachmentURL 欄位下載檔名不正確的問題。([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - 修復在 v2 中使 DividerItem 適配主題 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - 修復 v1 子表格聯動規則錯誤更改必填欄位樣式的問題 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - 修復表單區塊中的「隱藏（保留值）」欄位，使其在 UI 編輯器模式下保持可見，並恢復在欄位指派中為其賦值輸入的支援 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - 修復 v2 表格批次工作流觸發器，使行選擇在頁籤間重新導向後保持一致，並且返回後可以再次選擇行 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
- **[client-v2]**

  - 修復在欄位設定中選擇關聯欄位時的錯誤。([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - 修復應用程式啟動後 404 頁面閃現的問題 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
- **[server]** 修復子應用程式 OAuth 發現請求被路由為主應用程式請求的問題 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
- **[資料來源：主要]** 修復啟用資料表前綴時，匯入的資料庫表格使用了錯誤的前綴表名 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[通知：應用內訊息]** 修復收到即時通知後應用內訊息列表未重新整理的問題 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[資料來源管理器]** 防止在外部資料來源的自訂範圍權限中編輯和刪除所有記錄 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[AI：MCP 伺服器]** 修復 MCP 伺服器打包，使其包含執行時期依賴 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
- **[流程引擎]** 修復 AI 生成的區塊無法從參考模板轉換回重複模板的問題。([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[動作：匯入記錄 Pro]** 修復日期欄位的重複檢查始終失敗的問題 by @mytharcher
- **[密碼策略]** 修復服務重啟後永久鎖定的使用者可以登入的問題 by @2013xile
- **[工作流：審批]** 修復在審批工作流配置中選擇記錄抽屜被遮擋的問題 by @zhangzhonghe
- **[備份管理器]** 修復 pg schema 適配 by @Andrew1989Y

### [v2.1.0-beta.26](https://www.nocobase.com/en/blog/v2.1.0-beta.26)

*發布日期：2026-05-08*

### 🎉 新功能

- **[client]** 為關聯區塊新增關聯和取消關聯操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[資料視覺化]** 為區塊外掛新增 client-v2 支援 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 改進

- **[undefined]** 在 pk 中跳過已發布的版本 ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 錯誤修復

- **[client-v2]**

  - 修復某些 v2 頁面無法載入遠端外掛的問題 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
  - 修復 v2 頁面區塊拖曳佔位符和放置位置問題 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
- **[client]**

  - 修復表單值更改後聯動規則未重新執行的問題。([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - 修復在行動裝置上首次選擇時，子表格中的必填選項欄位未正確驗證的問題 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - 修復在 v2 子表格中隱藏關聯選擇欄位的快速建立選項 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - 修復切換快取頁面後 URL 查詢參數變數失效的問題 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
  - 修復更新和重新整理後網格卡片區塊中資料渲染不正確的問題 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
- **[server]** 在檔案系統操作前驗證外掛套件名稱 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[undefined]** 修復翻譯文件中的死連結，並在文件建置中預設啟用死連結檢測。([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
- **[AI 員工]**

  - 修復工作流中 AI 員工節點讀取關聯欄位附件錯誤 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - 修復工具指派後工作流 AI 員工節點未正確結束的問題。([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
- **[區塊：看板]**

  - 改進了看板卡片緊湊樣式，並優化了快速建立彈出模板選擇。([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - 修復 v1 看板區塊中長文字欄位防止單詞換行的問題 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
  - 修正在彈出或二級頁面上下文中，看板關聯區塊使用未解析的執行時期資源參數的問題。([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx
- **[動作：自訂請求]** 升級 koa 至 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[集合欄位：公式]** 修復 v2 子表格中的公式欄位未觸發自動計算的問題 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
- **[電子郵件管理器]** 修復郵件身份標題顯示 by @jiannx

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.34](https://www.nocobase.com/en/blog/v2.1.0-alpha.34)

*發布日期：2026-05-12*

### 🚀 改進

- **[AI 員工]** AI 員工支援並行處理多個對話 ([#9344](https://github.com/nocobase/nocobase/pull/9344)) by @cgyrock

### [v2.1.0-alpha.33](https://www.nocobase.com/en/blog/v2.1.0-alpha.33)

*發布日期：2026-05-11*

### 🎉 新功能

- **[client]**
  - 在 v2 中新增當前使用者語言變數 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) by @katherinehhh
  - 為頁面選單項目新增聯動規則支援 ([#9304](https://github.com/nocobase/nocobase/pull/9304)) by @zhangzhonghe

### 🚀 改進

- **[client-v2]** 在 v2 佈局中過濾掉 v1 選單，僅顯示 v2 選單 ([#9427](https://github.com/nocobase/nocobase/pull/9427)) by @zhangzhonghe
- **[部門]** 透過新增圖示和調整間距來優化部門列表樣式 ([#9435](https://github.com/nocobase/nocobase/pull/9435)) by @katherinehhh

### 🐛 錯誤修復

- **[建置]** 修復當 v1 客戶端程式碼匯入另一個外掛的 `/client-v2` 入口時，外掛建置失敗的問題。([#9436](https://github.com/nocobase/nocobase/pull/9436)) by @Molunerfinn
- **[client]**

  - 修復操作按鈕聯動規則偶爾失效的問題。([#9430](https://github.com/nocobase/nocobase/pull/9430)) by @gchust
  - 在 v2 子表格中隱藏對多關聯欄位的子表格元件 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) by @katherinehhh
- **[圖形化集合管理器]** 修復圖形介面自動佈局拋出更新動作篩選器錯誤 ([#9421](https://github.com/nocobase/nocobase/pull/9421)) by @katherinehhh
- **[區塊：樹]** 改進了樹狀篩選區塊設定，並修復了不支援的關聯、標題欄位回退和搜尋重置行為。([#9426](https://github.com/nocobase/nocobase/pull/9426)) by @jiannx

### [v2.1.0-alpha.32](https://www.nocobase.com/en/blog/v2.1.0-alpha.32)

*發布日期：2026-05-10*

### 🎉 新功能

- **[client]** 為 v2 表單中的日期欄位新增日期範圍限制選項 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) by @katherinehhh
- **[流程引擎]** 將 `plugin-environment-variables` 遷移至 client-v2，包含基於 React 的設定頁面和全域註冊的 `$env` 執行時期變數；為 `plugin-file-manager` 新增 client-v2 入口，包含基於 React 的儲存配置頁面和基於 FlowModel 的上傳欄位、上傳動作和預覽。([#9413](https://github.com/nocobase/nocobase/pull/9413)) by @Molunerfinn

### 🚀 改進

- **[undefined]** 支援在 nb cli 中設定會話範圍的當前環境 ([#9415](https://github.com/nocobase/nocobase/pull/9415)) by @chenos

### 🐛 錯誤修復

- **[client]**

  - 修復建立表單中關聯欄位的預設值彈窗顯示不正確的問題。([#9408](https://github.com/nocobase/nocobase/pull/9408)) by @gchust
  - 修復 JS 欄位設為唯讀後無法再編輯 JS 程式碼的問題。([#9404](https://github.com/nocobase/nocobase/pull/9404)) by @gchust
  - 修復 v2 頁面頁籤在儲存設定後未立即同步的問題 ([#9396](https://github.com/nocobase/nocobase/pull/9396)) by @zhangzhonghe
  - 修復欄位聯動規則中子表格欄位賦值不生效的問題。([#9412](https://github.com/nocobase/nocobase/pull/9412)) by @gchust
- **[集合欄位：Markdown(Vditor)]** 修復 markdown 欄位工具提示在水平表單佈局中被隱藏的問題 ([#9420](https://github.com/nocobase/nocobase/pull/9420)) by @katherinehhh
- **[WEB 客戶端]** 修復使用翻譯標籤時的路由類型篩選 ([#9425](https://github.com/nocobase/nocobase/pull/9425)) by @zhangzhonghe
- **[行動裝置（已棄用）]** 修復行動裝置訊息彈窗無法關閉或滾動的問題 ([#9424](https://github.com/nocobase/nocobase/pull/9424)) by @zhangzhonghe
- **[工作流：審批]** 修復 JS 欄位出現在審批流程設定中的問題 by @zhangzhonghe

### [v2.1.0-alpha.31](https://www.nocobase.com/en/blog/v2.1.0-alpha.30)

*發布日期：2026-05-09*

### 🎉 新功能

- **[client]** 為關聯區塊新增關聯和取消關聯操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh
- **[文字複製]** 支援唯讀文字欄位的「顯示複製按鈕」選項 ([#9394](https://github.com/nocobase/nocobase/pull/9394)) by @katherinehhh
- **[AI 員工]** 工作流 AI 員工節點支援從附件欄位載入檔案。([#9402](https://github.com/nocobase/nocobase/pull/9402)) by @cgyrock
- **[資料視覺化]** 為區塊外掛新增 client-v2 支援 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 改進

- **[client]** 允許為序號欄位指派欄位值 ([#9397](https://github.com/nocobase/nocobase/pull/9397)) by @mytharcher
- **[undefined]** 在 pk 中跳過已發布的版本 ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn
- **[區塊：看板]** 改進了 v2 詳細資訊欄位間距的一致性，並使看板卡片和欄位間距更好地適配主題設定。([#9390](https://github.com/nocobase/nocobase/pull/9390)) by @jiannx
- **[工作流：審批]** 修復審批表單的必填驗證行為 by @zhangzhonghe

### 🐛 錯誤修復

- **[client]**

  - 修復篩選表單無法折疊的問題 ([#9386](https://github.com/nocobase/nocobase/pull/9386)) by @zhangzhonghe
  - 修復 v2 表格批次工作流觸發器，使行選擇在頁籤間重新導向後保持一致，並且返回後可以再次選擇行 ([#9388](https://github.com/nocobase/nocobase/pull/9388)) by @jiannx
  - 修復表單區塊中的「隱藏（保留值）」欄位，使其在 UI 編輯器模式下保持可見，並恢復在欄位指派中為其賦值輸入的支援 ([#9373](https://github.com/nocobase/nocobase/pull/9373)) by @jiannx
  - 修復在 v2 中使 DividerItem 適配主題 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) by @katherinehhh
  - 修復當檔案元資料遺失時，AttachmentURL 欄位下載檔名不正確的問題。([#9382](https://github.com/nocobase/nocobase/pull/9382)) by @mytharcher
  - 修復使用自訂多選篩選器篩選純量欄位時的錯誤 ([#9387](https://github.com/nocobase/nocobase/pull/9387)) by @zhangzhonghe
  - 修復表單值更改後聯動規則未重新執行的問題。([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust
  - 修復 v1 子表格聯動規則錯誤更改必填欄位樣式的問題 ([#9364](https://github.com/nocobase/nocobase/pull/9364)) by @zhangzhonghe
  - 修復更新和重新整理後網格卡片區塊中資料渲染不正確的問題 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh
  - 修復在行動裝置上首次選擇時，子表格中的必填選項欄位未正確驗證的問題 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh
  - 修復在 v2 子表格中隱藏關聯選擇欄位的快速建立選項 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh
  - 修復切換快取頁面後 URL 查詢參數變數失效的問題 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe
- **[流程引擎]** 修復 v2 流程表單中未翻譯的資料表欄位驗證訊息 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) by @jiannx
- **[server]**

  - 修復子應用程式 OAuth 發現請求被路由為主應用程式請求的問題 ([#9383](https://github.com/nocobase/nocobase/pull/9383)) by @2013xile
  - 在檔案系統操作前驗證外掛套件名稱 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos
- **[client-v2]**

  - 修復在欄位設定中選擇關聯欄位時的錯誤。([#9379](https://github.com/nocobase/nocobase/pull/9379)) by @gchust
  - 修復應用程式啟動後 404 頁面閃現的問題 ([#9365](https://github.com/nocobase/nocobase/pull/9365)) by @zhangzhonghe
  - 修復 v2 頁面區塊拖曳佔位符和放置位置問題 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe
  - 修復某些 v2 頁面無法載入遠端外掛的問題 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe
- **[undefined]** 修復翻譯文件中的死連結，並在文件建置中預設啟用死連結檢測。([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn
- **[通知：應用內訊息]** 修復收到即時通知後應用內訊息列表未重新整理的問題 ([#9409](https://github.com/nocobase/nocobase/pull/9409)) by @mytharcher
- **[資料來源管理器]** 防止在外部資料來源的自訂範圍權限中編輯和刪除所有記錄 ([#9395](https://github.com/nocobase/nocobase/pull/9395)) by @katherinehhh
- **[AI：MCP 伺服器]** 修復 MCP 伺服器打包，使其包含執行時期依賴 ([#9401](https://github.com/nocobase/nocobase/pull/9401)) by @2013xile
- **[資料來源：主要]** 修復啟用資料表前綴時，匯入的資料庫表格使用了錯誤的前綴表名 ([#9403](https://github.com/nocobase/nocobase/pull/9403)) by @2013xile
- **[流程引擎]** 修復 AI 生成的區塊無法從參考模板轉換回重複模板的問題。([#9392](https://github.com/nocobase/nocobase/pull/9392)) by @gchust
- **[AI 員工]**

  - 修復工作流中 AI 員工節點讀取關聯欄位附件錯誤 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock
  - 修復工具指派後工作流 AI 員工節點未正確結束的問題。([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock
- **[動作：自訂請求]** 升級 koa 至 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos
- **[區塊：看板]**

  - 改進了看板卡片緊湊樣式，並優化了快速建立彈出模板選擇。([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx
  - 修復 v1 看板區塊中長文字欄位防止單詞換行的問題 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh
- **[集合欄位：公式]** 修復 v2 子表格中的公式欄位未觸發自動計算的問題 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh
- **[動作：匯入記錄 Pro]** 修復日期欄位的重複檢查始終失敗的問題 by @mytharcher
- **[密碼策略]** 修復服務重啟後永久鎖定的使用者可以登入的問題 by @2013xile
- **[工作流：審批]** 修復在審批工作流配置中選擇記錄抽屜被遮擋的問題 by @zhangzhonghe
- **[電子郵件管理器]** 修復郵件身份標題顯示 by @jiannx
- **[備份管理器]** 修復 pg schema 適配 by @Andrew1989Y
