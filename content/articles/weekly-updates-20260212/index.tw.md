---
title: "每週更新｜支援可配置區塊高度"
description: "這是 NocoBase 從 2026 年 2 月 6 日至 2 月 12 日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.46](https://www.nocobase.com/en/blog/v1.9.46)

*發布日期：2026-02-11*

### 🐛 錯誤修復

- **[client]** 修復關聯欄位切換模式時，欄位元件選項未即時更新的問題 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
- **[資料視覺化：ECharts]** 修復 ECharts 拼寫錯誤 by @heziqiang
- **[工作流：審批]**

  - 修復「我的申請」詳情彈窗中缺少值的問題 by @mytharcher
  - 修復在「儲存前執行」模式下執行時拋出錯誤的問題 by @mytharcher

### [v1.9.45](https://www.nocobase.com/en/blog/v1.9.45)

*發布日期：2026-02-09*

### 🐛 錯誤修復

- **[欄位元件：遮罩]** 修復遮罩欄位設定彈窗無法正確載入所有使用者角色的問題。 by @gchust
- **[工作流：審批]** 修復載入詳細記錄時使用了錯誤的 ID by @mytharcher

### [v1.9.44](https://www.nocobase.com/en/blog/v1.9.44)

*發布日期：2026-02-08*

### 🎉 新功能

- **[工作流：審批]** 為審批 API 新增 ACL 控制 by @mytharcher

### [v1.9.43](https://www.nocobase.com/en/blog/v1.9.43)

*發布日期：2026-02-06*

### 🎉 新功能

- **[認證：釘釘]** 允許使用 `unionId` 綁定使用者 by @2013xile

### 🚀 改進

- **[集合欄位：Markdown(Vditor)]** 在元件設定中新增了設定預設編輯模式的配置選項。 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038

### 🐛 錯誤修復

- **[操作：匯入記錄]** 修復匯入操作的漏洞 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.23](https://www.nocobase.com/en/blog/v2.0.0-beta.23)

*發布日期：2026-02-12*

### 🎉 新功能

- **[區塊：卡片]** 支援可配置的區塊高度 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
- **[操作：批次編輯]** 批次編輯 2.0 ([#8526](https://github.com/nocobase/nocobase/pull/8526)) by @jiannx

### 🚀 改進

- **[client]**

  - 表格 2.0 支援拖放排序 ([#8540](https://github.com/nocobase/nocobase/pull/8540)) by @jiannx
  - 將欄位指派和預設值設定移至表單層級配置。 ([#8596](https://github.com/nocobase/nocobase/pull/8596)) by @chenos
- **[本地化]** 自動建立缺失的 i18n 鍵 ([#8588](https://github.com/nocobase/nocobase/pull/8588)) by @jiannx

### 🐛 錯誤修復

- **[client]**

  - 修復當標題欄位是外鍵時，關聯下拉選單中過濾資料不正確的問題 ([#8619](https://github.com/nocobase/nocobase/pull/8619)) by @katherinehhh
  - 修復在編輯表單中提交後，已清除的關聯附件欄位未儲存的問題 ([#8616](https://github.com/nocobase/nocobase/pull/8616)) by @katherinehhh
  - 修復關聯欄位切換模式時，欄位元件選項未即時更新的問題 ([#8611](https://github.com/nocobase/nocobase/pull/8611)) by @katherinehhh
  - 修復在 JS 欄位編輯器中點擊「執行」後，表格列未重新渲染的問題。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  - 修復編輯後無法恢復記錄選擇器欄位元件中已選資料的問題 ([#8610](https://github.com/nocobase/nocobase/pull/8610)) by @katherinehhh
- **[檔案管理]** 修復檔案欄位元件在禁用狀態下仍可開啟選擇器對話框的問題 ([#8617](https://github.com/nocobase/nocobase/pull/8617)) by @katherinehhh
- **[資料視覺化：ECharts]** 修復 ECharts 拼寫錯誤 by @heziqiang
- **[工作流：審批]**

  - 修復「我的申請」詳情彈窗中缺少值的問題 by @mytharcher
  - 修復在「儲存前執行」模式下執行時拋出錯誤的問題 by @mytharcher

### [v2.0.0-beta.22](https://www.nocobase.com/en/blog/v2.0.0-beta.22)

*發布日期：2026-02-10*

### 🎉 新功能

- **[client]** 支援為頁面、頁面頁籤、彈窗和彈窗頁籤配置瀏覽器頁籤標題 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
- **[工作流：審批]** 為審批 API 新增 ACL 控制 by @mytharcher

### 🚀 改進

- **[client]** 在篩選表單中為關聯欄位使用獨立的欄位模型 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
- **[工作流：抄送]** 重構工作流抄送外掛以支援 FlowModel 架構，並保持 v1/v2 相容性 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]**

  - 修復 JS 模型中「ctx.sql」執行上下文不正確的問題。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
  - 修復 JS 模型中無法建立 Blob 物件的問題。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
- **[欄位元件：遮罩]** 修復遮罩欄位設定彈窗無法正確載入所有使用者角色的問題。 by @gchust
- **[工作流：審批]** 修復載入詳細記錄時使用了錯誤的 ID by @mytharcher

### [v2.0.0-beta.21](https://www.nocobase.com/en/blog/v2.0.0-beta.21)

*發布日期：2026-02-07*

### 🎉 新功能

- **[client]** 支援在表單區塊中配置關聯集合欄位的欄位 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
- **[操作：複製記錄]** 新增 2.0 複製操作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
- **[工作流]** 支援在工作流畫布上透過拖放複製、貼上和移動節點 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 改進

- **[流程引擎]** 改進 JS 模型程式碼編輯器中的自動完成和程式碼提示。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
- **[工作流：審批]** 移除對 JS 欄位的支援 by @zhangzhonghe

### 🐛 錯誤修復

- **[client]**

  - 修復非配置模式下潛在的「read hidden」渲染錯誤。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  - 修復在編輯表單中切換為唯讀檢視後，子表格（內聯編輯）仍顯示編輯模式列的問題 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
- **[流程引擎]** 修復在「複製」模式下使用區塊模板時，點擊區塊中的某個操作按鈕導致彈窗為空的問題。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
- **[區塊：地圖]** 修復地圖區塊中重複的「另存為模板」配置選項 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-beta.20](https://www.nocobase.com/en/blog/v2.0.0-beta.20)

*發布日期：2026-02-05*

### 🎉 新功能

- **[client]** 支援配置資料載入模式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]** 修復在配置了 createModelOptions 的彈窗子表格編輯中，列刪除操作不起作用的問題 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
- **[郵件管理]**

  - 為管理功能新增篩選器 by @jiannx
  - 修復多個使用者之間同一信箱的郵件問題並最佳化效能 by @jiannx
  - 修復對話鏈 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.71](https://www.nocobase.com/en/blog/v2.0.0-alpha.71)

*發布日期：2026-02-10*

### 🎉 新功能

- **[client]**

  - 支援為頁面、頁面頁籤、彈窗和彈窗頁籤配置瀏覽器頁籤標題 ([#8590](https://github.com/nocobase/nocobase/pull/8590)) by @zhangzhonghe
  - 支援在表單區塊中配置關聯集合欄位的欄位 ([#8578](https://github.com/nocobase/nocobase/pull/8578)) by @katherinehhh
- **[區塊：卡片]** 支援可配置的區塊高度 ([#8583](https://github.com/nocobase/nocobase/pull/8583)) by @katherinehhh
- **[操作：複製記錄]** 新增 2.0 複製操作 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) by @katherinehhh
- **[工作流：審批]** 為審批 API 新增 ACL 控制 by @mytharcher

### 🚀 改進

- **[client]** 在篩選表單中為關聯欄位使用獨立的欄位模型 ([#8511](https://github.com/nocobase/nocobase/pull/8511)) by @zhangzhonghe
- **[工作流：抄送]** 重構工作流抄送外掛以支援 FlowModel 架構，並保持 v1/v2 相容性 ([#8405](https://github.com/nocobase/nocobase/pull/8405)) by @zhangzhonghe

### 🐛 錯誤修復

- **[流程引擎]**

  - 修復 JS 模型中「ctx.sql」執行上下文不正確的問題。 ([#8602](https://github.com/nocobase/nocobase/pull/8602)) by @gchust
  - 修復 JS 模型中無法建立 Blob 物件的問題。 ([#8603](https://github.com/nocobase/nocobase/pull/8603)) by @gchust
- **[client]**

  - 修復在 JS 欄位編輯器中點擊「執行」後，表格列未重新渲染的問題。 ([#8608](https://github.com/nocobase/nocobase/pull/8608)) by @gchust
  - 修復非配置模式下潛在的「read hidden」渲染錯誤。 ([#8591](https://github.com/nocobase/nocobase/pull/8591)) by @gchust
  - 修復在編輯表單中切換為唯讀檢視後，子表格（內聯編輯）仍顯示編輯模式列的問題 ([#8589](https://github.com/nocobase/nocobase/pull/8589)) by @katherinehhh
- **[流程引擎]** 修復在「複製」模式下使用區塊模板時，點擊區塊中的某個操作按鈕導致彈窗為空的問題。 ([#8581](https://github.com/nocobase/nocobase/pull/8581)) by @gchust
- **[欄位元件：遮罩]** 修復遮罩欄位設定彈窗無法正確載入所有使用者角色的問題。 by @gchust
- **[工作流：審批]** 修復載入詳細記錄時使用了錯誤的 ID by @mytharcher

### [v2.0.0-alpha.70](https://www.nocobase.com/en/blog/v2.0.0-alpha.70)

*發布日期：2026-02-06*

### 🎉 新功能

- **[工作流]** 支援在工作流畫布上透過拖放複製、貼上和移動節點 ([#8559](https://github.com/nocobase/nocobase/pull/8559)) by @mytharcher

### 🚀 改進

- **[工作流：審批]** 移除對 JS 欄位的支援 by @zhangzhonghe

### 🐛 錯誤修復

- **[區塊：地圖]** 修復地圖區塊中重複的「另存為模板」配置選項 ([#8584](https://github.com/nocobase/nocobase/pull/8584)) by @katherinehhh

### [v2.0.0-alpha.69](https://www.nocobase.com/en/blog/v2.0.0-alpha.69)

*發布日期：2026-02-05*

### 🎉 新功能

- **[client]** 支援配置資料載入模式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) by @zhangzhonghe
- **[流程引擎]** 支援 env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) by @chenos
- **[認證：釘釘]** 允許使用 `unionId` 綁定使用者 by @2013xile

### 🚀 改進

- **[流程引擎]** 改進 JS 模型程式碼編輯器中的自動完成和程式碼提示。 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) by @gchust
- **[client]**

  - 將內聯可編輯子表格中的列寬設定調整為下拉選擇 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) by @katherinehhh
  - 支援為 `ResourceActionProvider` 停用冗餘的預設附加參數 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) by @2013xile
- **[acl]** acl 新增 generalFixedParams 方法 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) by @jiannx
- **[集合欄位：Markdown(Vditor)]** 在元件設定中新增了設定預設編輯模式的配置選項。 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) by @Cyx649312038
- **[工作流]** 變更工作流子頁面的路由路徑，使所有工作流頁面位於 `/admin/settings/workflow` 前綴下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) by @mytharcher
- **[AI：知識庫]** 最佳化建置輸出以減少 plugin-ai-knowledge-base 的套件大小。 by @cgyrock
- **[多空間]** 多空間權限控制存取 acl by @jiannx
- **[認證：釘釘]** 使用 `userid` 作為使用者關聯的預設鍵，同時保持與依賴手機號碼的現有認證器的相容性 by @2013xile

### 🐛 錯誤修復

- **[client]**

  - 修復啟用樹狀表格後需要重新整理頁面才能新增子記錄的問題 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) by @katherinehhh
  - 修復網格佈局中的空白區域問題 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) by @zhangzhonghe
  - 修復子表格（內聯編輯）中列寬未更新；多行文字輸入未隨列寬調整大小的問題 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) by @katherinehhh
  - 修復在編輯表單中使用關聯記錄選擇器的「快速建立」覆蓋了現有表單資料的問題。 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) by @gchust
  - 修復：對非樹狀集合隱藏「啟用樹狀表格」和「預設展開所有行」 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) by @katherinehhh
  - 修復在「建立新」操作彈窗中錯誤顯示「表單（新增）」選單的問題。 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) by @gchust
  - 修復 nanoid 欄位在建立提交後未重新產生預設值的問題 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) by @katherinehhh
  - 修復跨彈窗重新整理目標區塊時事件流未能應用的問題。 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) by @gchust
  - 修復與篩選相關的已知問題 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) by @zhangzhonghe
  - 修復提交表單後導致資料區塊重複重新整理的問題。 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) by @gchust
  - 修復首次開啟和關閉彈窗後頁面資料被錯誤重新整理的問題。 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) by @gchust
  - 修復無法在多層對多子表單欄位的聯動規則中使用表單變數指派值的問題。 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) by @gchust
  - 修復為級聯選擇器欄位模型設定預設值時顯示不正確的問題 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) by @katherinehhh
  - 修復跨多層彈窗和跨區塊變更後資料未重新整理的問題。 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) by @gchust
- **[流程引擎]**

  - 修復在配置了 createModelOptions 的彈窗子表格編輯中，列刪除操作不起作用的問題 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) by @katherinehhh
  - 修復切換頁面後提交表單未重新整理頁面的問題。 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) by @gchust
  - 修復 JS 區塊中無法正確匯入某些第三方庫的問題。 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) by @gchust
  - 修復 runjs 中因錯誤分類為 AMD 模組而導致某些 ESM 庫載入不正確的問題。 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) by @gchust
  - 修復外部資料來源中 filterTargetKey 為單元素陣列時的 FilterByTK 問題 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) by @katherinehhh
  - 修復在配置了 createModelOptions 的彈窗子表格編輯中，列刪除操作不起作用的問題 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) by @katherinehhh
- **[集合欄位：附件(URL)]** 修復附件 URL 欄位檔名顯示配置在編輯表單中不起作用的問題 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) by @katherinehhh
- **[AI 員工]**

  - 修復 LLM 節點發送訊息失敗的問題 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) by @2013xile
  - 修復建置後系統無法啟動的問題 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) by @cgyrock
  - 修復 AI 資料建模期間自動呼叫工具時發生的異常 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) by @cgyrock
- **[UI 模板]** 修復重新開啟並提交已儲存的關聯欄位「新增」表單彈窗模板時出錯的問題。 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) by @gchust
- **[操作：匯入記錄]** 修復匯入操作的漏洞 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) by @mytharcher
- **[檔案管理]** 保護本地儲存的檔案路徑，避免存取路徑超出文件根目錄 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) by @mytharcher
- **[工作流]** 為集合記錄選擇元件新增容錯處理，避免集合被刪除時拋出錯誤 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) by @mytharcher
- **[工作流：自訂操作事件]** 修復觸發自訂工作流時參數和負載不正確的問題 by @mytharcher
- **[多空間]**

  - 移除空間欄位的 read-pretty 屬性 by @jiannx
  - 新增遷移腳本以移除空間欄位中的 x-ready-pretty by @jiannx
- **[AI：知識庫]** 修復建置後系統無法啟動的問題 by @cgyrock
- **[操作：匯入記錄 Pro]** 修復匯入結果中的計數數字和訊息翻譯 by @mytharcher
- **[工作流：子流程]** 修復工作流連結的路徑 by @mytharcher
- **[模板列印]** 修復模板列印操作配置中的欄位列表顯示問題 by @katherinehhh
- **[工作流：審批]**

  - 修復 JSON 欄位在列表載入時導致的效能問題 (MySQL) by @mytharcher
  - 為已刪除的工作流新增容錯處理，避免任務列表載入錯誤 by @mytharcher
  - 修復當審批人群組工作流被停用時，為使用者新增角色拋出錯誤的問題 by @mytharcher
- **[郵件管理]** 選取文字時正文未摺疊。修復下載附件失敗 by @jiannx
- **[企業微信]** 修復缺少手機號碼時使用者無法自動註冊的問題 by @2013xile
