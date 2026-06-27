---
title: "每週更新｜更新AI聊天框用戶提示"
description: "這是NocoBase從2026年3月6日至3月12日的功能更新與改進摘要。"
---

總結每週產品更新日誌，最新版本可查看[我們的部落格](https://www.nocobase.com/en/blog/timeline)。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要供測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題和功能不完整的情況。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.15](https://www.nocobase.com/en/blog/v2.0.15)

*發布日期：2026-03-12*

### 🐛 錯誤修復

- **[郵件管理]** 調整回覆與全部回覆的收件人，修復表格欄位新增失敗等其他問題 by @jiannx
- **[遷移管理]** 修復自訂規則中無法選擇系統資料表的問題 by @cgyrock

### [v2.0.14](https://www.nocobase.com/en/blog/v2.0.14)

*發布日期：2026-03-12*

### 🚀 改進

- **[遷移管理]** 改進遷移檢查、支援 SQL 下載、日誌格式化及執行流程可視化 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修復篩選表單欄位值中自訂欄位無法渲染正確值輸入類型的問題 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  - 修復 v2 篩選表單折疊按鈕在排序欄位後停止運作的問題 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  - 修復參考模板 (v1) 管理頁面缺少篩選和重新整理操作的問題。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  - 子表單與子表格因權限檢查導致資料未顯示 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
- **[存取控制]** 使用 collection.filterTargetKey 替代 Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
- **[UI 模板]**

  - 修復操作面板參考區塊的渲染錯誤。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  - 修復將詳情區塊儲存為模板後，關聯記錄無法正確載入的問題。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
- **[工作流：審批]**

  - 修復審批人未遵循節點中配置順序的問題 by @mytharcher
  - 修復審批處理詳情中未翻譯的標籤 by @zhangzhonghe
- **[遷移管理]**

  - 修復建置錯誤 by @mytharcher
  - 修復缺少遷移描述並將目前時間設為預設值 by @cgyrock
  - 修復因記錄遷移錯誤異常中包含過大 SQL 語句可能導致的程序凍結問題 by @cgyrock
  - 將臨時目錄調整至 storage 中，以支援叢集模式下的使用 by @mytharcher

### [v2.0.13](https://www.nocobase.com/en/blog/v2.0.13)

*發布日期：2026-03-10*

### 🎉 新功能

- **[客戶端]** 支援觸發工作流按鈕配置成功後流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher

### 🚀 改進

- **[工作流]** 在新增選單中顯示所有節點類型，即使不可用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher
- **[AI：知識庫]** 重構知識庫文件載入邏輯。 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 修復 SQL 集合的詳情區塊在載入資料時發生錯誤的問題。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust
  - 修復詳情區塊中的欄位聯動規則在初始渲染時未生效的問題。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust
- **[Office 文件預覽器]** 將模態框高度調整為合適值，以顯示更多文件內容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher
- **[UI 模板]** 修復表格區塊中的參考區塊事件流無法配置行點擊事件流的問題。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust

### [v2.0.12](https://www.nocobase.com/en/blog/v2.0.12)

*發布日期：2026-03-09*

### 🚀 改進

- **[Redis 鎖適配器]** 因主倉庫中 LockManager API 變更而重構 by @mytharcher
- **[備份管理器]** 為跨叢集節點的排程備份添加鎖 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - V2 區塊現在僅顯示目前資料來源支援的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  - 修復 v2 子頁面上返回按鈕的樣式問題 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
- **[鎖管理器]** 修復鎖管理器的競爭條件問題 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
- **[伺服器端]** 修復非資料庫資料來源資料查詢中的錯誤問題 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
- **[存取控制]** 修復 Restful API 資料來源資料修改錯誤。 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
- **[操作：匯出記錄]** 修復匯出的 Excel 中 belongsToArray 欄位為空的問題 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock

### [v2.0.11](https://www.nocobase.com/en/blog/v2.0.11)

*發布日期：2026-03-06*

### 🎉 新功能

- **[工作流：自訂操作事件]** 支援自訂上下文資料，用於將變數傳遞給子流程中的自訂操作觸發器 ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher

### 🚀 改進

- **[客戶端]** 當編輯表單區塊或詳情區塊無可用資料時顯示提示訊息。 ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust
- **[流程引擎]** 修復新的 runjs 程式碼在執行前會解析變數表達式的問題。 ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust

### 🐛 錯誤修復

- **[客戶端]**

  - 修復檢視關閉後彈出連結導航被還原的問題 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe
  - 禁止為多對多（陣列）關聯記錄新增區塊以防止錯誤。 ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust
  - 修復在關聯欄位彈出視窗中編輯資料後，原始資料區塊未重新整理的問題。 ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust
  - 修復設計模式下頁籤裁剪問題，確保最小頁籤寬度 ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe
  - 修復配置模式下對聯動隱藏必填欄位的驗證 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe
  - 修復子表格欄位隱藏切換和連續刪除欄位時的 UI 更新延遲 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe
  - 修復更新記錄表單中出現兩次必填驗證的問題 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx
- **[資料庫]**

  - 修復集合檢視模板中缺少「簡單分頁」選項的問題。 ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock
  - 數字欄位的精度驗證規則未生效 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile
- **[未定義]** 修復升級後系統提示找不到 plugin-block-reference 的問題。 ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust
- **[操作：匯出記錄]** 修復 Excel 檔案中數字類型欄位顯示為字串的問題 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock
- **[區塊：列表]** 修復列表區塊欄位無法使用目前記錄變數的問題。 ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust
- **[工作流]** 修復在審批節點中拖曳區塊時節點拖曳佔位符顯示不正確的問題 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher
- **[UI 模板]**

  - 修復將目前記錄區塊模板重複用於詳情區塊和編輯表單區塊可能導致資料無法正確載入的問題。 ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust
  - 修復在模板區塊的事件流中對 props 所做的更改未生效的問題。 ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust
- **[資料來源：主]**

  - 更新 JSON 欄位的預設值未生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile
  - 欄位同步錯誤 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile
- **[AI 員工]**

  - 修復 dashscope/deepseek/kimi 無法讀取上傳文件文件的問題。 ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock
  - 修復使用 deepseek 推理模型時的工具呼叫錯誤。 ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock
- **[多空間]** 修復使用主鍵建立資料時的空間權限錯誤 by @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.8](https://www.nocobase.com/en/blog/v2.1.0-beta.7)

*發布日期：2026-03-12*

### 🎉 新功能

- **[客戶端]** 支援觸發工作流按鈕配置成功後流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher
- **[集合欄位：程式碼]** field-code 支援 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx
- **[工作流：自訂操作事件]** 支援自訂上下文資料，用於將變數傳遞給子流程中的自訂操作觸發器 ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher

### 🚀 改進

- **[客戶端]** 當編輯表單區塊或詳情區塊無可用資料時顯示提示訊息。 ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust
- **[流程引擎]** 修復新的 runjs 程式碼在執行前會解析變數表達式的問題。 ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust
- **[工作流]** 在新增選單中顯示所有節點類型，即使不可用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher
- **[操作：自訂請求]** 事件串流支援自訂請求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx
- **[AI：知識庫]** 重構知識庫文件載入邏輯。 by @cgyrock
- **[Redis 鎖適配器]** 因主倉庫中 LockManager API 變更而重構 by @mytharcher
- **[備份管理器]** 為跨叢集節點的排程備份添加鎖 by @mytharcher
- **[遷移管理]** 改進遷移檢查、支援 SQL 下載、日誌格式化及執行流程可視化 by @cgyrock

### 🐛 錯誤修復

- **[客戶端]**

  - 子表單與子表格因權限檢查導致資料未顯示 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
  - 修復 v2 篩選表單折疊按鈕在排序欄位後停止運作的問題 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  - 修復篩選表單欄位值中自訂欄位無法渲染正確值輸入類型的問題 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  - 修復參考模板 (v1) 管理頁面缺少篩選和重新整理操作的問題。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  - 修復 SQL 集合的詳情區塊在載入資料時發生錯誤的問題。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust
  - 修復詳情區塊中的欄位聯動規則在初始渲染時未生效的問題。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust
  - 修復 v2 子頁面上返回按鈕的樣式問題 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
  - V2 區塊現在僅顯示目前資料來源支援的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  - 修復配置模式下對聯動隱藏必填欄位的驗證 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe
  - 修復設計模式下頁籤裁剪問題，確保最小頁籤寬度 ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe
  - 修復子表格欄位隱藏切換和連續刪除欄位時的 UI 更新延遲 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe
  - 禁止為多對多（陣列）關聯記錄新增區塊以防止錯誤。 ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust
  - 修復檢視關閉後彈出連結導航被還原的問題 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe
  - 修復在關聯欄位彈出視窗中編輯資料後，原始資料區塊未重新整理的問題。 ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust
  - 修復更新記錄表單中出現兩次必填驗證的問題 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx
- **[伺服器端]** 修復非資料庫資料來源資料查詢中的錯誤問題 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
- **[鎖管理器]** 修復鎖管理器的競爭條件問題 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
- **[資料庫]**

  - 修復集合檢視模板中缺少「簡單分頁」選項的問題。 ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock
  - 數字欄位的精度驗證規則未生效 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile
- **[未定義]** 修復升級後系統提示找不到 plugin-block-reference 的問題。 ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust
- **[存取控制]**

  - 使用 collection.filterTargetKey 替代 Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
  - 修復 Restful API 資料來源資料修改錯誤。 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
- **[UI 模板]**

  - 修復將詳情區塊儲存為模板後，關聯記錄無法正確載入的問題。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
  - 修復操作面板參考區塊的渲染錯誤。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  - 修復表格區塊中的參考區塊事件流無法配置行點擊事件流的問題。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust
  - 修復將目前記錄區塊模板重複用於詳情區塊和編輯表單區塊可能導致資料無法正確載入的問題。 ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust
  - 修復在模板區塊的事件流中對 props 所做的更改未生效的問題。 ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust
- **[Office 文件預覽器]** 將模態框高度調整為合適值，以顯示更多文件內容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher
- **[操作：匯出記錄]**

  - 修復匯出的 Excel 中 belongsToArray 欄位為空的問題 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock
  - 修復 Excel 檔案中數字類型欄位顯示為字串的問題 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock
- **[區塊：列表]** 修復列表區塊欄位無法使用目前記錄變數的問題。 ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust
- **[資料來源：主]**

  - 更新 JSON 欄位的預設值未生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile
  - 欄位同步錯誤 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile
- **[工作流]** 修復在審批節點中拖曳區塊時節點拖曳佔位符顯示不正確的問題 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher
- **[AI 員工]**

  - 修復使用 deepseek 推理模型時的工具呼叫錯誤。 ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock
  - 修復 dashscope/deepseek/kimi 無法讀取上傳文件文件的問題。 ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock
- **[多空間]** 修復使用主鍵建立資料時的空間權限錯誤 by @jiannx
- **[工作流：審批]**

  - 修復審批處理詳情中未翻譯的標籤 by @zhangzhonghe
  - 修復審批人未遵循節點中配置順序的問題 by @mytharcher
- **[遷移管理]**

  - 修復因記錄遷移錯誤異常中包含過大 SQL 語句可能導致的程序凍結問題 by @cgyrock
  - 修復建置錯誤 by @mytharcher
  - 修復缺少遷移描述並將目前時間設為預設值 by @cgyrock
  - 將臨時目錄調整至 storage 中，以支援叢集模式下的使用 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.8](https://www.nocobase.com/en/blog/v2.1.0-alpha.7)

*發布日期：2026-03-12*

### 🎉 新功能

- **[客戶端]** 支援觸發工作流按鈕配置成功後流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) by @mytharcher
- **[集合欄位：程式碼]** field-code 支援 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) by @jiannx
- **[工作流：自訂操作事件]** 支援自訂上下文資料，用於將變數傳遞給子流程中的自訂操作觸發器 ([#8758](https://github.com/nocobase/nocobase/pull/8758)) by @mytharcher
- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) by @heziqiang

### 🚀 改進

- **[客戶端]**

  - 當編輯表單區塊或詳情區塊無可用資料時顯示提示訊息。 ([#8790](https://github.com/nocobase/nocobase/pull/8790)) by @gchust
  - 重構管理員佈局設定和應用程式以模擬主機架構，並加入 v1 v2 相容性保護 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) by @zhangzhonghe
  - 支援表格的彙總配置 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) by @chenos
- **[流程引擎]** 修復新的 runjs 程式碼在執行前會解析變數表達式的問題。 ([#8762](https://github.com/nocobase/nocobase/pull/8762)) by @gchust
- **[工作流]** 在新增選單中顯示所有節點類型，即使不可用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) by @mytharcher
- **[操作：自訂請求]** 事件串流支援自訂請求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) by @jiannx
- **[AI 員工]** 更新 AI 聊天框用戶提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) by @heziqiang
- **[嵌入 NocoBase]** 提供 sanitize API 以過濾操作中的關聯值 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) by @mytharcher
- **[AI：知識庫]** 重構知識庫文件載入邏輯。 by @cgyrock
- **[Redis 鎖適配器]** 因主倉庫中 LockManager API 變更而重構 by @mytharcher
- **[備份管理器]** 為跨叢集節點的排程備份添加鎖 by @mytharcher
- **[遷移管理]** 改進遷移檢查、支援 SQL 下載、日誌格式化及執行流程可視化 by @cgyrock

### 🐛 錯誤修復

- **[未定義]** 修復升級後系統提示找不到 plugin-block-reference 的問題。 ([#8757](https://github.com/nocobase/nocobase/pull/8757)) by @gchust
- **[客戶端]**

  - 子表單與子表格因權限檢查導致資料未顯示 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) by @chenos
  - 修復 v2 篩選表單折疊按鈕在排序欄位後停止運作的問題 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) by @zhangzhonghe
  - 修復篩選表單欄位值中自訂欄位無法渲染正確值輸入類型的問題 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) by @zhangzhonghe
  - 修復參考模板 (v1) 管理頁面缺少篩選和重新整理操作的問題。 ([#8833](https://github.com/nocobase/nocobase/pull/8833)) by @gchust
  - 修復 SQL 集合的詳情區塊在載入資料時發生錯誤的問題。 ([#8817](https://github.com/nocobase/nocobase/pull/8817)) by @gchust
  - 修復詳情區塊中的欄位聯動規則在初始渲染時未生效的問題。 ([#8813](https://github.com/nocobase/nocobase/pull/8813)) by @gchust
  - V2 區塊現在僅顯示目前資料來源支援的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) by @zhangzhonghe
  - 修復 v2 子頁面上返回按鈕的樣式問題 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) by @zhangzhonghe
  - 修復檢視關閉後彈出連結導航被還原的問題 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) by @zhangzhonghe
  - 修復配置模式下對聯動隱藏必填欄位的驗證 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) by @zhangzhonghe
  - 修復設計模式下頁籤裁剪問題，確保最小頁籤寬度 ([#8771](https://github.com/nocobase/nocobase/pull/8771)) by @zhangzhonghe
  - 修復子表格欄位隱藏切換和連續刪除欄位時的 UI 更新延遲 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) by @zhangzhonghe
  - 修復在關聯欄位彈出視窗中編輯資料後，原始資料區塊未重新整理的問題。 ([#8782](https://github.com/nocobase/nocobase/pull/8782)) by @gchust
  - 禁止為多對多（陣列）關聯記錄新增區塊以防止錯誤。 ([#8779](https://github.com/nocobase/nocobase/pull/8779)) by @gchust
  - 修復切換選單時資料區塊未重新整理的問題。 ([#8735](https://github.com/nocobase/nocobase/pull/8735)) by @gchust
  - 修復 CollectionField 元件在 DefaultValue 元件中未渲染的問題 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) by @mytharcher
  - 修復更新記錄表單中出現兩次必填驗證的問題 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) by @jiannx
- **[伺服器端]**

  - 修復非資料庫資料來源資料查詢中的錯誤問題 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) by @cgyrock
  - 透過為資源附加雜湊值來解決快取問題 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) by @chenos
- **[鎖管理器]** 修復鎖管理器的競爭條件問題 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) by @mytharcher
- **[資料庫]**

  - 修復集合檢視模板中缺少「簡單分頁」選項的問題。 ([#8778](https://github.com/nocobase/nocobase/pull/8778)) by @cgyrock
  - 數字欄位的精度驗證規則未生效 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) by @2013xile
  - 修復 v2 中欄位自訂正則檢查失敗的問題 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) by @jiannx
- **[流程引擎]** 修復 ctx.exit 無法終止使用者自訂事件流程執行的問題。 ([#8737](https://github.com/nocobase/nocobase/pull/8737)) by @gchust
- **[存取控制]**

  - 使用 collection.filterTargetKey 替代 Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) by @chenos
  - 修復 Restful API 資料來源資料修改錯誤。 ([#8788](https://github.com/nocobase/nocobase/pull/8788)) by @cgyrock
  - 設定 ACL 元資料時使用的資料庫實例不正確 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) by @2013xile
- **[UI 模板]**

  - 修復將詳情區塊儲存為模板後，關聯記錄無法正確載入的問題。 ([#8827](https://github.com/nocobase/nocobase/pull/8827)) by @gchust
  - 修復操作面板參考區塊的渲染錯誤。 ([#8818](https://github.com/nocobase/nocobase/pull/8818)) by @gchust
  - 修復表格區塊中的參考區塊事件流無法配置行點擊事件流的問題。 ([#8814](https://github.com/nocobase/nocobase/pull/8814)) by @gchust
  - 修復將目前記錄區塊模板重複用於詳情區塊和編輯表單區塊可能導致資料無法正確載入的問題。 ([#8775](https://github.com/nocobase/nocobase/pull/8775)) by @gchust
  - 修復在模板區塊的事件流中對 props 所做的更改未生效的問題。 ([#8765](https://github.com/nocobase/nocobase/pull/8765)) by @gchust
- **[Office 文件預覽器]** 將模態框高度調整為合適值，以顯示更多文件內容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) by @mytharcher
- **[操作：匯出記錄]**

  - 修復匯出的 Excel 中 belongsToArray 欄位為空的問題 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) by @cgyrock
  - 修復 Excel 檔案中數字類型欄位顯示為字串的問題 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) by @cgyrock
- **[工作流]** 修復在審批節點中拖曳區塊時節點拖曳佔位符顯示不正確的問題 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) by @mytharcher
- **[區塊：列表]** 修復列表區塊欄位無法使用目前記錄變數的問題。 ([#8784](https://github.com/nocobase/nocobase/pull/8784)) by @gchust
- **[資料來源：主]**

  - 更新 JSON 欄位的預設值未生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) by @2013xile
  - 欄位同步錯誤 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) by @2013xile
- **[AI 員工]**

  - 修復 dashscope/deepseek/kimi 無法讀取上傳文件文件的問題。 ([#8732](https://github.com/nocobase/nocobase/pull/8732)) by @cgyrock
  - 修復使用 deepseek 推理模型時的工具呼叫錯誤。 ([#8741](https://github.com/nocobase/nocobase/pull/8741)) by @cgyrock
  - 修復啟用知識庫時 AI 員工聊天錯誤 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) by @cgyrock
  - 修復 AI 資料來源配置渲染問題。 ([#8731](https://github.com/nocobase/nocobase/pull/8731)) by @cgyrock
  - 解決 AI 訊息渲染長度為 0 的問題 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) by @heziqiang
- **[流程引擎]** 修復 sql destroy 錯誤 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) by @chenos
- **[工作流：自訂操作事件]** 修復自訂操作工作流作為子流程執行時掛起的問題 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) by @mytharcher
- **[工作流：JavaScript]** 修復測試案例在 Windows 上無法通過的問題 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) by @mytharcher
- **[資料視覺化]** 修復圖表插件條目文字的 i18n 問題 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) by @heziqiang
- **[多空間]** 修復使用主鍵建立資料時的空間權限錯誤 by @jiannx
- **[模板列印]** 修復 ACL API 變更但插件未適配的問題 by @mytharcher
- **[工作流：審批]**

  - 修復審批人未遵循節點中配置順序的問題 by @mytharcher
  - 修復因按類型篩選節點導致查詢結果未顯示的問題 by @mytharcher
  - 修復 appends 參數被 ACL 過濾的問題 by @mytharcher
  - 修復 ACL 問題：當用戶無權限時，不應建立或更新關聯值 by @mytharcher
  - 新增遺漏的參數，以避免提交新審批時關聯未更新 by @mytharcher
  - 修復審批處理詳情中未翻譯的標籤 by @zhangzhonghe
  - 修復因新增或委派時 `dataAfter` 值缺失導致的錯誤 by @mytharcher
  - 清理審批操作中的關聯值，以避免超出權限的資料操作 by @mytharcher
  - 修復手動執行審批工作流時拋出錯誤的問題 by @mytharcher
  - 清理審批操作中的關聯值，以避免超出權限的資料操作 by @mytharcher
- **[郵件管理]** 修復圖片內容 ID 格式解析 by @jiannx
- **[遷移管理]**

  - 修復缺少遷移描述並將目前時間設為預設值 by @cgyrock
  - 修復建置錯誤 by @mytharcher
  - 將臨時目錄調整至 storage 中，以支援叢集模式下的使用 by @mytharcher
  - 修復因記錄遷移錯誤異常中包含過大 SQL 語句可能導致的程序凍結問題 by @cgyrock
