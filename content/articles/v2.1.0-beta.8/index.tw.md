---
title: "NocoBase v2.1.0-beta.8：支援觸發工作流程按鈕以配置成功後流程"
description: "v2.1.0-beta.8 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援觸發工作流程按鈕以設定成功後流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) @mytharcher

- **[集合欄位：代碼]** 代碼欄位支援 2.0 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) @jiannx

- **[工作流程：自訂動作事件]** 支援自訂上下文資料，用於將變數傳遞給子流程中的自訂動作觸發器 ([#8758](https://github.com/nocobase/nocobase/pull/8758)) @mytharcher

### 🚀 改進

- **[客戶端]** 當編輯表單區塊或詳情區塊沒有可用資料時，顯示提示訊息。([#8790](https://github.com/nocobase/nocobase/pull/8790)) @gchust

- **[流程引擎]** 修正新 runjs 程式碼在執行前會解析變數表達式的問題。([#8762](https://github.com/nocobase/nocobase/pull/8762)) @gchust

- **[工作流程]** 在新增選單中顯示所有節點類型，即使某些類型不可用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) @mytharcher

- **[動作：自訂請求]** 事件串流支援自訂請求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) @jiannx

- **[AI：知識庫]** 重構知識庫文件載入邏輯。 @cgyrock

- **[Redis 鎖定適配器]** 因主儲存庫中 LockManager API 變更而重構 @mytharcher

- **[備份管理器]** 為跨叢集節點的排程備份添加鎖定 @mytharcher

- **[遷移管理器]** 改進遷移檢查、支援 SQL 下載、日誌格式化以及執行過程可視性 @cgyrock

### 🐛 錯誤修復

- **[客戶端]**
  - 子表單與子表格資料因權限檢查而未顯示 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) @chenos

  - 修正 v2 篩選表單摺疊按鈕在排序欄位後失效的問題 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) @zhangzhonghe

  - 修正篩選表單欄位值中的自訂欄位無法渲染正確值輸入類型的問題 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) @zhangzhonghe

  - 修正參考模板 (v1) 管理頁面缺少篩選和重新整理動作的問題。([#8833](https://github.com/nocobase/nocobase/pull/8833)) @gchust

  - 修正 SQL 集合的詳情區塊在載入資料時發生錯誤的問題。([#8817](https://github.com/nocobase/nocobase/pull/8817)) @gchust

  - 修正詳情區塊中的欄位連結規則在初始渲染時未生效的問題。([#8813](https://github.com/nocobase/nocobase/pull/8813)) @gchust

  - 修正 v2 子頁面上返回按鈕的樣式問題 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) @zhangzhonghe

  - V2 區塊現在僅顯示目前資料來源支援的動作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) @zhangzhonghe

  - 修正設定模式下對連結隱藏必填欄位的驗證 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) @zhangzhonghe

  - 修正設計模式下頁籤被裁剪並確保最小頁籤寬度 ([#8771](https://github.com/nocobase/nocobase/pull/8771)) @zhangzhonghe

  - 修正子表格欄位隱藏切換和連續刪除欄位時 UI 更新延遲的問題 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) @zhangzhonghe

  - 禁止為多對多（陣列）關聯記錄新增區塊以防止錯誤。([#8779](https://github.com/nocobase/nocobase/pull/8779)) @gchust

  - 修正彈出連結導航在檢視關閉後被還原的問題 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) @zhangzhonghe

  - 修正透過關聯欄位彈出視窗編輯資料後，原始資料區塊未重新整理的問題。([#8782](https://github.com/nocobase/nocobase/pull/8782)) @gchust

  - 修正更新記錄表單中出現兩個必填驗證的問題 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) @jiannx

- **[伺服器]** 修正非資料庫資料來源的資料查詢錯誤問題 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) @cgyrock

- **[鎖定管理器]** 修正鎖定管理器的競爭條件問題 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) @mytharcher

- **[資料庫]**
  - 修正集合檢視模板中缺少「簡單分頁」選項的問題。([#8778](https://github.com/nocobase/nocobase/pull/8778)) @cgyrock

  - 數值欄位的精度驗證規則未生效 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) @2013xile

- **[未定義]** 修正升級後，系統提示找不到 plugin-block-reference 的問題。([#8757](https://github.com/nocobase/nocobase/pull/8757)) @gchust

- **[存取控制]**
  - 使用 collection.filterTargetKey 替代 Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) @chenos

  - 修正 Restful API 資料來源資料修改錯誤。([#8788](https://github.com/nocobase/nocobase/pull/8788)) @cgyrock

- **[UI 模板]**
  - 修正將詳情區塊儲存為模板後，關聯記錄無法正確載入的問題。([#8827](https://github.com/nocobase/nocobase/pull/8827)) @gchust

  - 修正動作面板參考區塊的渲染錯誤。([#8818](https://github.com/nocobase/nocobase/pull/8818)) @gchust

  - 修正表格區塊中的參考區塊事件流程無法設定行點擊事件流程的問題。([#8814](https://github.com/nocobase/nocobase/pull/8814)) @gchust

  - 修正詳情區塊和編輯表單區塊重複使用目前記錄區塊模板可能導致資料無法正確載入的問題。([#8775](https://github.com/nocobase/nocobase/pull/8775)) @gchust

  - 修正模板區塊事件流程中對 props 的修改未生效的問題。([#8765](https://github.com/nocobase/nocobase/pull/8765)) @gchust

- **[Office 檔案預覽器]** 將模態框高度調整為合適值，以顯示更多檔案內容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) @mytharcher

- **[動作：匯出記錄]**
  - 修正匯出的 Excel 中 belongsToArray 欄位為空的問題 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) @cgyrock

  - 修正 Excel 檔案中數值類型欄位顯示為字串的問題 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) @cgyrock

- **[區塊：列表]** 修正列表區塊欄位無法使用目前記錄變數的問題。([#8784](https://github.com/nocobase/nocobase/pull/8784)) @gchust

- **[資料來源：主資料庫]**
  - 更新 JSON 欄位的預設值未生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) @2013xile

  - 欄位同步錯誤 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) @2013xile

- **[工作流程]** 修正核准節點中拖曳區塊時，節點拖曳佔位符顯示錯誤的問題 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) @mytharcher

- **[AI 員工]**
  - 修正使用 deepseek 推理模型時的工具呼叫錯誤。([#8741](https://github.com/nocobase/nocobase/pull/8741)) @cgyrock

  - 修正 dashscope/deepseek/kimi 無法讀取上傳文件檔案的問題。([#8732](https://github.com/nocobase/nocobase/pull/8732)) @cgyrock

- **[多空間]** 修正使用主鍵建立資料時的空間權限錯誤 @jiannx

- **[工作流程：核准]**
  - 修正核准處理詳情中未翻譯的標籤 @zhangzhonghe

  - 修正受指派者未遵循節點中設定的順序的問題 @mytharcher

- **[遷移管理器]**
  - 修正因記錄遷移錯誤異常中包含的過大 SQL 語句而導致的潛在程序凍結 @cgyrock

  - 修正建置錯誤 @mytharcher

  - 修正缺少遷移描述並將目前時間設為預設值 @cgyrock

  - 將暫存目錄調整至 storage 中，以支援叢集模式下的使用 @mytharcher
