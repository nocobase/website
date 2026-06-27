---
title: "NocoBase v2.1.0-alpha.8：更新 AI 聊天框用戶提示"
description: "v2.1.0-alpha.8 版本發布說明"
---

### 🎉 新功能

- **[客戶端]** 支援觸發工作流程按鈕以設定成功後的流程 ([#8726](https://github.com/nocobase/nocobase/pull/8726)) - @mytharcher

- **[集合欄位：代碼]** 代碼欄位支援 2.0 版本 ([#8804](https://github.com/nocobase/nocobase/pull/8804)) - @jiannx

- **[工作流程：自訂操作事件]** 支援自訂上下文資料，以便將變數傳遞給子流程中的自訂操作觸發器 ([#8758](https://github.com/nocobase/nocobase/pull/8758)) - @mytharcher

- **[AI 員工]** 更新 AI 聊天框使用者提示 ([#8725](https://github.com/nocobase/nocobase/pull/8725)) - @heziqiang

### 🚀 改進

- **[客戶端]**
  - 當編輯表單區塊或詳情區塊無資料時，顯示提示訊息。([#8790](https://github.com/nocobase/nocobase/pull/8790)) - @gchust

  - 重構管理員佈局設定與應用程式，以符合主機架構模型，並加入 v1 v2 相容性保護 ([#8710](https://github.com/nocobase/nocobase/pull/8710)) - @zhangzhonghe

  - 支援表格的摘要設定 ([#8721](https://github.com/nocobase/nocobase/pull/8721)) - @chenos

- **[流程引擎]** 修正了新的 runjs 程式碼在執行前會解析變數表達式的問題。([#8762](https://github.com/nocobase/nocobase/pull/8762)) - @gchust

- **[工作流程]** 在新增選單中顯示所有節點類型，即使該類型不可用 ([#8828](https://github.com/nocobase/nocobase/pull/8828)) - @mytharcher

- **[操作：自訂請求]** 事件串流支援自訂請求 ([#8749](https://github.com/nocobase/nocobase/pull/8749)) - @jiannx

- **[AI 員工]** 更新 AI 聊天框使用者提示 ([#8717](https://github.com/nocobase/nocobase/pull/8717)) - @heziqiang

- **[嵌入 NocoBase]** 提供 sanitize API 以過濾操作中的關聯值 ([#8688](https://github.com/nocobase/nocobase/pull/8688)) - @mytharcher

- **[AI：知識庫]** 重構知識庫文件載入邏輯。 - @cgyrock

- **[Redis 鎖定適配器]** 因主儲存庫中 LockManager API 變更而重構 - @mytharcher

- **[備份管理器]** 為跨叢集節點的排程備份新增鎖定 - @mytharcher

- **[遷移管理器]** 改進了遷移檢查、SQL 下載支援、日誌格式化以及執行過程的可視性 - @cgyrock

### 🐛 錯誤修復

- **[未定義]** 修正了升級後系統提示找不到 plugin-block-reference 的問題。([#8757](https://github.com/nocobase/nocobase/pull/8757)) - @gchust

- **[客戶端]**
  - 子表單與子表格資料因權限檢查而未顯示 ([#8846](https://github.com/nocobase/nocobase/pull/8846)) - @chenos

  - 修正 v2 篩選表單摺疊按鈕在排序欄位後失效的問題 ([#8843](https://github.com/nocobase/nocobase/pull/8843)) - @zhangzhonghe

  - 修正篩選表單欄位值中自訂欄位無法渲染正確值輸入類型的問題 ([#8823](https://github.com/nocobase/nocobase/pull/8823)) - @zhangzhonghe

  - 修正了參考模板 (v1) 管理頁面缺少篩選和重新整理操作的問題。([#8833](https://github.com/nocobase/nocobase/pull/8833)) - @gchust

  - 修正了 SQL 集合的詳情區塊在載入資料時發生錯誤的問題。([#8817](https://github.com/nocobase/nocobase/pull/8817)) - @gchust

  - 修正了詳情區塊中的欄位聯動規則在初始渲染時未生效的問題。([#8813](https://github.com/nocobase/nocobase/pull/8813)) - @gchust

  - V2 區塊現在僅顯示目前資料來源支援的操作 ([#8803](https://github.com/nocobase/nocobase/pull/8803)) - @zhangzhonghe

  - 修正 v2 子頁面上返回按鈕的樣式問題 ([#8810](https://github.com/nocobase/nocobase/pull/8810)) - @zhangzhonghe

  - 修正彈出視窗連結導航在檢視關閉後被還原的問題 ([#8752](https://github.com/nocobase/nocobase/pull/8752)) - @zhangzhonghe

  - 修正設定模式下對聯動隱藏必填欄位的驗證 ([#8773](https://github.com/nocobase/nocobase/pull/8773)) - @zhangzhonghe

  - 修正設計模式下頁籤被裁剪的問題，並確保頁籤最小寬度 ([#8771](https://github.com/nocobase/nocobase/pull/8771)) - @zhangzhonghe

  - 修正子表格欄位隱藏切換和連續刪除欄位時 UI 更新延遲的問題 ([#8755](https://github.com/nocobase/nocobase/pull/8755)) - @zhangzhonghe

  - 修正了在關聯欄位彈出視窗中編輯資料後，原始資料區塊未重新整理的問題。([#8782](https://github.com/nocobase/nocobase/pull/8782)) - @gchust

  - 停用為多對多（陣列）關聯記錄新增區塊的功能，以防止錯誤。([#8779](https://github.com/nocobase/nocobase/pull/8779)) - @gchust

  - 修正了切換選單時資料區塊未重新整理的問題。([#8735](https://github.com/nocobase/nocobase/pull/8735)) - @gchust

  - 修正 CollectionField 元件在 DefaultValue 元件中未渲染的問題 ([#8744](https://github.com/nocobase/nocobase/pull/8744)) - @mytharcher

  - 修正更新記錄表單中出現兩次必填驗證的問題 ([#8761](https://github.com/nocobase/nocobase/pull/8761)) - @jiannx

- **[伺服器端]**
  - 修正了非資料庫資料來源的資料查詢錯誤問題 ([#8776](https://github.com/nocobase/nocobase/pull/8776)) - @cgyrock

  - 透過在資源檔案後附加雜湊值來解決快取問題 ([#8730](https://github.com/nocobase/nocobase/pull/8730)) - @chenos

- **[鎖定管理器]** 修正鎖定管理器的競爭條件問題 ([#8734](https://github.com/nocobase/nocobase/pull/8734)) - @mytharcher

- **[資料庫]**
  - 修正集合檢視模板中缺少「簡單分頁」選項的問題。([#8778](https://github.com/nocobase/nocobase/pull/8778)) - @cgyrock

  - 數字欄位的精度驗證規則未生效 ([#8768](https://github.com/nocobase/nocobase/pull/8768)) - @2013xile

  - 修正 v2 中欄位自訂正則檢查失敗的問題 ([#8729](https://github.com/nocobase/nocobase/pull/8729)) - @jiannx

- **[流程引擎]** 修正了 ctx.exit 無法終止使用者自訂事件流程執行的問題。([#8737](https://github.com/nocobase/nocobase/pull/8737)) - @gchust

- **[存取控制]**
  - 使用 collection.filterTargetKey 替代 Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) - @chenos

  - 修正了 Restful API 資料來源資料修改錯誤。([#8788](https://github.com/nocobase/nocobase/pull/8788)) - @cgyrock

  - 設定 ACL 元資料時使用的資料庫實例不正確 ([#8747](https://github.com/nocobase/nocobase/pull/8747)) - @2013xile

- **[UI 模板]**
  - 修正了將詳情區塊儲存為模板後，關聯記錄無法正確載入的問題。([#8827](https://github.com/nocobase/nocobase/pull/8827)) - @gchust

  - 修正了操作面板參考區塊的渲染錯誤。([#8818](https://github.com/nocobase/nocobase/pull/8818)) - @gchust

  - 修正了表格區塊中的參考區塊事件流程無法設定行點擊事件流程的問題。([#8814](https://github.com/nocobase/nocobase/pull/8814)) - @gchust

  - 修正了詳情區塊和編輯表單區塊重複使用目前記錄區塊模板可能導致資料無法正確載入的問題。([#8775](https://github.com/nocobase/nocobase/pull/8775)) - @gchust

  - 修正了在模板區塊的事件流程中對屬性所做的變更未生效的問題。([#8765](https://github.com/nocobase/nocobase/pull/8765)) - @gchust

- **[Office 檔案預覽器]** 將模態框高度更改為適當值，以顯示更多檔案內容 ([#8835](https://github.com/nocobase/nocobase/pull/8835)) - @mytharcher

- **[操作：匯出記錄]**
  - 修正了匯出的 Excel 中 belongsToArray 欄位為空的問題 ([#8787](https://github.com/nocobase/nocobase/pull/8787)) - @cgyrock

  - 修正了 Excel 檔案中數字類型欄位顯示為字串的問題 ([#8774](https://github.com/nocobase/nocobase/pull/8774)) - @cgyrock

- **[工作流程]** 修正核准節點中拖曳區塊時，節點拖曳佔位符顯示不正確的問題 ([#8763](https://github.com/nocobase/nocobase/pull/8763)) - @mytharcher

- **[區塊：列表]** 修正了列表區塊欄位無法使用目前記錄變數的問題。([#8784](https://github.com/nocobase/nocobase/pull/8784)) - @gchust

- **[資料來源：主要]**
  - 更新 JSON 欄位的預設值未生效 ([#8767](https://github.com/nocobase/nocobase/pull/8767)) - @2013xile

  - 欄位同步錯誤 ([#8766](https://github.com/nocobase/nocobase/pull/8766)) - @2013xile

- **[AI 員工]**
  - 修正了 dashscope/deepseek/kimi 無法讀取上傳文件檔案的問題。([#8732](https://github.com/nocobase/nocobase/pull/8732)) - @cgyrock

  - 修正了使用 deepseek 推理模型時的工具呼叫錯誤。([#8741](https://github.com/nocobase/nocobase/pull/8741)) - @cgyrock

  - 修正了啟用知識庫時 AI 員工聊天錯誤 ([#8746](https://github.com/nocobase/nocobase/pull/8746)) - @cgyrock

  - 修正了 AI 資料來源設定渲染問題。([#8731](https://github.com/nocobase/nocobase/pull/8731)) - @cgyrock

  - 解決 AI 訊息渲染長度為 0 的問題 ([#8723](https://github.com/nocobase/nocobase/pull/8723)) - @heziqiang

- **[流程引擎]** 修正 sql destroy 錯誤 ([#8745](https://github.com/nocobase/nocobase/pull/8745)) - @chenos

- **[工作流程：自訂操作事件]** 修正自訂操作工作流程作為子流程執行時掛起的問題 ([#8738](https://github.com/nocobase/nocobase/pull/8738)) - @mytharcher

- **[工作流程：JavaScript]** 修正測試案例在 Windows 上無法通過的問題 ([#8722](https://github.com/nocobase/nocobase/pull/8722)) - @mytharcher

- **[資料視覺化]** 修正圖表外掛程式入口文字的 i18n 問題 ([#8716](https://github.com/nocobase/nocobase/pull/8716)) - @heziqiang

- **[多空間]** 修正使用主鍵建立資料時的空間權限錯誤 - @jiannx

- **[模板列印]** 修正 ACL API 已變更但外掛程式未適配的問題 - @mytharcher

- **[工作流程：核准]**
  - 修正受指派者未遵循節點中設定的順序的問題 - @mytharcher

  - 修正因按類型篩選節點導致查詢結果不顯示的問題 - @mytharcher

  - 修正 appends 參數被 ACL 過濾的問題 - @mytharcher

  - 修正 ACL 問題：當使用者無權限時，不應建立或更新關聯值 - @mytharcher

  - 新增遺漏的參數，以避免提交新核准時關聯未更新 - @mytharcher

  - 修正核准處理詳情中未翻譯的標籤 - @zhangzhonghe

  - 修正因新增或委派時 `dataAfter` 值缺失而導致的錯誤 - @mytharcher

  - 清理核准操作中的關聯值，以避免任何超出權限的資料操作 - @mytharcher

  - 修正手動執行核准工作流程時拋出錯誤的問題 - @mytharcher

  - 清理核准操作中的關聯值，以避免任何超出權限的資料操作 - @mytharcher

- **[電子郵件管理器]** 修正圖片內容 ID 格式解析 - @jiannx

- **[遷移管理器]**
  - 修正遺失遷移描述並將目前時間設為預設值 - @cgyrock

  - 修正建置錯誤 - @mytharcher

  - 將臨時目錄調整至 storage 中，以支援叢集模式下的使用 - @mytharcher

  - 修正了因記錄遷移錯誤異常中包含的過大 SQL 語句而可能導致的程序凍結 - @cgyrock
