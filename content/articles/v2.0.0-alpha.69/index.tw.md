---
title: "NocoBase v2.0.0-alpha.69：支援 env.ESM_CDN_BASE_URL"
description: "v2.0.0-alpha.69 版本發行說明"
---

### 🎉 新功能

- **[client]** 支援設定資料載入模式 ([#8551](https://github.com/nocobase/nocobase/pull/8551)) @zhangzhonghe

- **[flow-engine]** 支援 env.ESM_CDN_BASE_URL ([#8529](https://github.com/nocobase/nocobase/pull/8529)) @chenos

- **[Auth: DingTalk]** 允許使用 `unionId` 綁定使用者 @2013xile

### 🚀 改進

- **[flow-engine]** 改善 JS 模型程式碼編輯器中的自動完成與程式碼提示 ([#8575](https://github.com/nocobase/nocobase/pull/8575)) @gchust

- **[client]**
  - 在內聯可編輯子表格中，將欄位寬度設定調整為下拉選單 ([#8561](https://github.com/nocobase/nocobase/pull/8561)) @katherinehhh

  - 支援為 `ResourceActionProvider` 停用多餘的預設附加參數 ([#8527](https://github.com/nocobase/nocobase/pull/8527)) @2013xile

- **[acl]** acl 新增 generalFixedParams 方法 ([#8363](https://github.com/nocobase/nocobase/pull/8363)) @jiannx

- **[Collection field: Markdown(Vditor)]** 在元件設定中新增了設定預設編輯模式的配置選項 ([#8408](https://github.com/nocobase/nocobase/pull/8408)) @Cyx649312038

- **[Workflow]** 變更工作流程子頁面的路由路徑，使所有工作流程頁面位於 `/admin/settings/workflow` 前綴下 ([#8519](https://github.com/nocobase/nocobase/pull/8519)) @mytharcher

- **[AI: Knowledge base]** 優化建置輸出，以減少 plugin-ai-knowledge-base 的套件大小 @cgyrock

- **[Multi-space]** 多空間權限控制存取 acl @jiannx

- **[Auth: DingTalk]** 使用 `userid` 作為使用者關聯的預設鍵，同時保持與依賴手機號碼的現有驗證器相容 @2013xile

### 🐛 錯誤修復

- **[client]**
  - 修復啟用樹狀表格後，需要重新整理頁面才能新增子記錄的問題 ([#8574](https://github.com/nocobase/nocobase/pull/8574)) @katherinehhh

  - 修復 Grid 佈局中的空白區域問題 ([#8535](https://github.com/nocobase/nocobase/pull/8535)) @zhangzhonghe

  - 修復子表格（內聯編輯）中欄位寬度未更新；多行文字輸入未隨欄位寬度調整大小的問題 ([#8573](https://github.com/nocobase/nocobase/pull/8573)) @katherinehhh

  - 修復在編輯表單中使用關聯記錄選擇器的「快速建立」功能時，覆蓋了現有表單資料的問題 ([#8567](https://github.com/nocobase/nocobase/pull/8567)) @gchust

  - 修復：對非樹狀集合隱藏「啟用樹狀表格」和「預設展開所有行」選項 ([#8566](https://github.com/nocobase/nocobase/pull/8566)) @katherinehhh

  - 修復在「建立新」動作彈出視窗中，錯誤顯示「表單（新增）」選單的問題 ([#8562](https://github.com/nocobase/nocobase/pull/8562)) @gchust

  - 修復 nanoid 欄位在建立提交後未重新產生預設值的問題 ([#8538](https://github.com/nocobase/nocobase/pull/8538)) @katherinehhh

  - 修復跨彈出視窗重新整理目標區塊時，事件流程未能套用的問題 ([#8541](https://github.com/nocobase/nocobase/pull/8541)) @gchust

  - 修復與篩選相關的已知問題 ([#8514](https://github.com/nocobase/nocobase/pull/8514)) @zhangzhonghe

  - 修復提交表單後導致資料區塊重複重新整理的問題 ([#8531](https://github.com/nocobase/nocobase/pull/8531)) @gchust

  - 修復首次開啟和關閉彈出視窗後，頁面資料被錯誤重新整理的問題 ([#8548](https://github.com/nocobase/nocobase/pull/8548)) @gchust

  - 修復在多層級一對多子表單欄位的聯動規則中，無法使用表單變數指派值的問題 ([#8518](https://github.com/nocobase/nocobase/pull/8518)) @gchust

  - 修復為級聯選擇器欄位模型設定預設值時顯示不正確的問題 ([#8537](https://github.com/nocobase/nocobase/pull/8537)) @katherinehhh

  - 修復跨多層級彈出視窗及跨區塊變更後，資料未重新整理的問題 ([#8471](https://github.com/nocobase/nocobase/pull/8471)) @gchust

- **[flow-engine]**
  - 修復在彈出子表格編輯中，當配置了 createModelOptions 時，欄位刪除動作無法運作的問題 ([#8576](https://github.com/nocobase/nocobase/pull/8576)) @katherinehhh

  - 修復切換頁面後提交表單，頁面未重新整理的問題 ([#8554](https://github.com/nocobase/nocobase/pull/8554)) @gchust

  - 修復在 JS 區塊中無法正確匯入某些第三方函式庫的問題 ([#8545](https://github.com/nocobase/nocobase/pull/8545)) @gchust

  - 修復 runjs 中因某些 ESM 函式庫被錯誤歸類為 AMD 模組而導致載入不正確的問題 ([#8536](https://github.com/nocobase/nocobase/pull/8536)) @gchust

  - 修復外部資料來源中，當 filterTargetKey 為單元素陣列時的 FilterByTK 問題 ([#8522](https://github.com/nocobase/nocobase/pull/8522)) @katherinehhh

  - 修復在彈出子表格編輯中，當配置了 createModelOptions 時，欄位刪除動作無法運作的問題 ([#8560](https://github.com/nocobase/nocobase/pull/8560)) @katherinehhh

- **[Collection field: Attachment(URL)]** 修復附件 URL 欄位的檔案名稱顯示配置在編輯表單中無法運作的問題 ([#8571](https://github.com/nocobase/nocobase/pull/8571)) @katherinehhh

- **[AI employees]**
  - 修復 LLM 節點無法發送訊息的問題 ([#8569](https://github.com/nocobase/nocobase/pull/8569)) @2013xile

  - 修復建置後系統無法啟動的問題 ([#8523](https://github.com/nocobase/nocobase/pull/8523)) @cgyrock

  - 修復在 AI 資料建模過程中，工具被自動呼叫時發生的異常 ([#8532](https://github.com/nocobase/nocobase/pull/8532)) @cgyrock

- **[UI templates]** 修復為關聯欄位「新增」表單重新開啟並提交已儲存的彈出範本時發生的錯誤 ([#8564](https://github.com/nocobase/nocobase/pull/8564)) @gchust

- **[Action: Import records]** 修復匯入動作的漏洞 ([#8544](https://github.com/nocobase/nocobase/pull/8544)) @mytharcher

- **[File manager]** 確保本地儲存的檔案路徑安全，避免存取路徑超出文件根目錄 ([#8539](https://github.com/nocobase/nocobase/pull/8539)) @mytharcher

- **[Workflow]** 為集合記錄選擇元件增加容錯機制，避免在集合被刪除時拋出錯誤 ([#8528](https://github.com/nocobase/nocobase/pull/8528)) @mytharcher

- **[Workflow: Custom action event]** 修復觸發自訂工作流程時，參數與負載不正確的問題 @mytharcher

- **[Multi-space]**
  - 移除空間欄位的 read-pretty 屬性 @jiannx

  - 新增遷移腳本以移除空間欄位中的 x-ready-pretty @jiannx

- **[AI: Knowledge base]** 修復建置後系統無法啟動的問題 @cgyrock

- **[Action: Import records Pro]** 修復匯入結果中的計數數字與訊息翻譯 @mytharcher

- **[Workflow: Subflow]** 修復工作流程連結的路由路徑 @mytharcher

- **[Template print]** 修復範本列印動作配置中的欄位列表顯示問題 @katherinehhh

- **[Workflow: Approval]**
  - 修復 MySQL 中列表載入時因 JSON 欄位導致的效能問題 @mytharcher

  - 在工作流程被刪除時增加容錯機制，避免任務列表載入錯誤 @mytharcher

  - 修復當目標群眾工作流程被停用時，為使用者新增角色會拋出錯誤的問題 @mytharcher

- **[Email manager]** 選取文字時，內容無法摺疊。修復下載附件失敗的問題 @jiannx

- **[WeCom]** 修復當缺少手機號碼時，使用者無法自動註冊的問題 @2013xile
