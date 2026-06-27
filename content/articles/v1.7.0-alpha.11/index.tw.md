---
title: "NocoBase v1.7.0-alpha.11：支援在聯動規則條件的左側使用變數"
description: "v1.7.0-alpha.11 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援在聯動規則條件的左側使用變數 ([#6609](https://github.com/nocobase/nocobase/pull/6609)) by @katherinehhh

- **[部門]** 將部門、附件 URL 和工作流程回應訊息外掛設為免費 ([#6663](https://github.com/nocobase/nocobase/pull/6663)) by @chenos

- **[動作：批次更新]**
  - 支援在更新區塊資料後，重新整理其他資料區塊的資料 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

  - 支援在更新區塊資料後，重新整理其他資料區塊的資料 ([#6591](https://github.com/nocobase/nocobase/pull/6591)) by @zhangzhonghe

- **[UI Schema 儲存]** 為 UISchema 新增本地化模組，允許對 schema 標題和描述進行自訂翻譯 ([#6574](https://github.com/nocobase/nocobase/pull/6574)) by @chenos

- **[區塊：動作面板]** 新增 onScanSuccess 回呼函式，用於處理掃描成功並退出相機介面。 ([#6580](https://github.com/nocobase/nocobase/pull/6580)) by @sheldon66

- **[集合欄位：代碼]** 新增代碼介面 by @mytharcher

- **[工作流程：日期計算節點]** 新增 `changeTimezone` 函式，用於變更時區值以進行格式化 by @mytharcher

- **[範本列印]** 支援在文件範本中呈現動態圖片和條碼。 by @sheldon66

### 🚀 改進

- **[客戶端]**
  - 為無延遲開啟的場景新增延遲 API ([#6681](https://github.com/nocobase/nocobase/pull/6681)) by @mytharcher

  - 支援在自訂請求中選取表格記錄 ([#6647](https://github.com/nocobase/nocobase/pull/6647)) by @katherinehhh

  - 為 `Variable.Input` 新增預設類型回退 API ([#6644](https://github.com/nocobase/nocobase/pull/6644)) by @mytharcher

  - 最佳化未配置頁面的提示 ([#6641](https://github.com/nocobase/nocobase/pull/6641)) by @zhangzhonghe

  - 支援在篩選元件中搜尋欄位 ([#6627](https://github.com/nocobase/nocobase/pull/6627)) by @mytharcher

  - 為 `Input` 和 `Variable.TextArea` 新增 `trim` API ([#6624](https://github.com/nocobase/nocobase/pull/6624)) by @mytharcher

  - 根據裝置類型而非頁面寬度來決定是否顯示行動元件 ([#6611](https://github.com/nocobase/nocobase/pull/6611)) by @zhangzhonghe

  - 根據裝置類型而非頁面寬度來決定是否顯示行動版佈局 ([#6600](https://github.com/nocobase/nocobase/pull/6600)) by @zhangzhonghe

  - 支援根據佈局配置表單欄位標籤中冒號的可見性 ([#6561](https://github.com/nocobase/nocobase/pull/6561)) by @katherinehhh

- **[create-nocobase-app]** 將部分依賴項升級至最新版本 ([#6673](https://github.com/nocobase/nocobase/pull/6673)) by @chenos

- **[工具函式]** 為 dayjs 新增持續時間擴充 ([#6630](https://github.com/nocobase/nocobase/pull/6630)) by @mytharcher

- **[資料庫]**
  - 為文字欄位新增 trim 選項 ([#6603](https://github.com/nocobase/nocobase/pull/6603)) by @mytharcher

  - 為字串欄位新增 trim 選項 ([#6565](https://github.com/nocobase/nocobase/pull/6565)) by @mytharcher

- **[工作流程]**
  - 支援工作流程任務的固定彈出視窗 URL ([#6640](https://github.com/nocobase/nocobase/pull/6640)) by @mytharcher

  - 最佳化儲存任務邏輯 ([#6613](https://github.com/nocobase/nocobase/pull/6613)) by @mytharcher

  - 改善程式碼 ([#6589](https://github.com/nocobase/nocobase/pull/6589)) by @mytharcher

- **[工作流程：延遲節點]** 支援使用變數作為持續時間 ([#6621](https://github.com/nocobase/nocobase/pull/6621)) by @mytharcher

- **[錯誤處理器]** 支援在 AppError 元件中自訂標題。 ([#6409](https://github.com/nocobase/nocobase/pull/6409)) by @sheldon66

- **[檔案管理員]** 為儲存空間集合的文字欄位新增 trim 選項 ([#6604](https://github.com/nocobase/nocobase/pull/6604)) by @mytharcher

- **[非同步任務管理器]** 最佳化 Pro 中的匯入/匯出按鈕 ([#6531](https://github.com/nocobase/nocobase/pull/6531)) by @chenos

- **[工作流程：自訂動作事件]** 為觸發工作流程按鈕新增重新整理設定 by @mytharcher

- **[動作：匯出記錄 Pro]** 最佳化 Pro 中的匯入/匯出按鈕 by @katherinehhh

- **[IP 限制]** 更新 IP 限制訊息內容。 by @sheldon66

- **[檔案儲存：S3(Pro)]** 支援在儲存空間配置中使用全域變數 by @mytharcher

- **[備份管理員]** 允許從子應用程式備份還原主應用程式 by @gchust

- **[工作流程：審批]** 支援使用區塊範本作為審批流程表單 by @mytharcher

- **[遷移管理員]** 允許跳過遷移的自動備份和還原 by @gchust

### 🐛 錯誤修復

- **[客戶端]**
  - 篩選按鈕中日期欄位的選擇器切換問題 ([#6695](https://github.com/nocobase/nocobase/pull/6695)) by @katherinehhh

  - 子表格/子表單聯動規則條件中的變數轉換問題 ([#6702](https://github.com/nocobase/nocobase/pull/6702)) by @katherinehhh

  - 在沒有匯出權限的情況下顯示匯出按鈕 ([#6689](https://github.com/nocobase/nocobase/pull/6689)) by @katherinehhh

  - 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 ([#6634](https://github.com/nocobase/nocobase/pull/6634)) by @zhangzhonghe

  - 修正在工作流程的建立/更新節點中拋出的錯誤 ([#6696](https://github.com/nocobase/nocobase/pull/6696)) by @mytharcher

  - 修正滑鼠懸停在審批節點配置中被引用的範本區塊上時拋出的錯誤 ([#6691](https://github.com/nocobase/nocobase/pull/6691)) by @mytharcher

  - 自訂關聯欄位未顯示欄位元件設定 ([#6692](https://github.com/nocobase/nocobase/pull/6692)) by @katherinehhh

  - 聯動規則與舊資料的相容性 ([#6686](https://github.com/nocobase/nocobase/pull/6686)) by @katherinehhh

  - 延遲載入缺少 UI 元件會導致渲染錯誤 ([#6683](https://github.com/nocobase/nocobase/pull/6683)) by @gchust

  - 修正上傳元件的語系 ([#6682](https://github.com/nocobase/nocobase/pull/6682)) by @mytharcher

  - 將原生 Password 元件新增至 HoC Input ([#6679](https://github.com/nocobase/nocobase/pull/6679)) by @mytharcher

  - 工作流程中欄位說明顯示問題 ([#6680](https://github.com/nocobase/nocobase/pull/6680)) by @katherinehhh

  - 繼承的欄位顯示在當前集合的欄位指派清單中 ([#6666](https://github.com/nocobase/nocobase/pull/6666)) by @katherinehhh

  - 設定預設值時變數輸入的樣式問題 ([#6668](https://github.com/nocobase/nocobase/pull/6668)) by @katherinehhh

  - 切換到群組選單時不應跳轉到已在選單中隱藏的頁面 ([#6654](https://github.com/nocobase/nocobase/pull/6654)) by @zhangzhonghe

  - 篩選表單不應顯示「有未儲存的變更」提示 ([#6657](https://github.com/nocobase/nocobase/pull/6657)) by @zhangzhonghe

  - 在篩選表單中，點擊篩選按鈕時，如果存在未通過驗證的欄位，仍會觸發篩選 ([#6659](https://github.com/nocobase/nocobase/pull/6659)) by @zhangzhonghe

  - 關聯欄位的「允許多選」選項不起作用 ([#6661](https://github.com/nocobase/nocobase/pull/6661)) by @katherinehhh

  - 修正預覽圖片被遮擋的問題 ([#6651](https://github.com/nocobase/nocobase/pull/6651)) by @zhangzhonghe

  - 在表單區塊中，欄位配置的預設值會先顯示為原始變數字串然後消失 ([#6649](https://github.com/nocobase/nocobase/pull/6649)) by @zhangzhonghe

  - 不正確的變數輸入樣式 ([#6645](https://github.com/nocobase/nocobase/pull/6645)) by @gchust

  - 工作流程節點編輯抽屜標題顯示 [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) by @katherinehhh

  - 子表格說明與新增按鈕重疊 ([#6646](https://github.com/nocobase/nocobase/pull/6646)) by @katherinehhh

  - 模態框中水平表單佈局導致的虛線底線 ([#6639](https://github.com/nocobase/nocobase/pull/6639)) by @katherinehhh

  - 當條件清單為空時，使用「任一」條件的規則不生效 ([#6628](https://github.com/nocobase/nocobase/pull/6628)) by @katherinehhh

  - URL 參數包含中文字元時變數解析失敗 ([#6618](https://github.com/nocobase/nocobase/pull/6618)) by @katherinehhh

  - 區塊範本配置頁面標題與選單之間的空白區域 ([#6625](https://github.com/nocobase/nocobase/pull/6625)) by @gchust

  - 篩選表單中的關聯欄位在頁面重新整理後因未攜帶 x-data-source 而報錯 ([#6619](https://github.com/nocobase/nocobase/pull/6619)) by @zhangzhonghe

  - 樹狀集合中甘特圖區塊的資料問題 ([#6617](https://github.com/nocobase/nocobase/pull/6617)) by @katherinehhh

  - 欄位標籤顯示問題，防止被冒號截斷 ([#6599](https://github.com/nocobase/nocobase/pull/6599)) by @katherinehhh

  - x-disabled 屬性對表單欄位不生效 ([#6610](https://github.com/nocobase/nocobase/pull/6610)) by @katherinehhh

  - 修正當 `SchemaInitializerItem` 包含 `items` 時，`disabled` 屬性不起作用的問題 ([#6597](https://github.com/nocobase/nocobase/pull/6597)) by @mytharcher

  - 關聯欄位（選擇）在暴露關聯集合欄位時顯示 N/A ([#6582](https://github.com/nocobase/nocobase/pull/6582)) by @katherinehhh

  - 提交和重新整理按鈕未正確顯示僅圖示模式 ([#6592](https://github.com/nocobase/nocobase/pull/6592)) by @katherinehhh

  - 級聯問題：刪除並重新選取時出現「xxx 的值不能是陣列格式」([#6585](https://github.com/nocobase/nocobase/pull/6585)) by @katherinehhh

  - 同一表單中不同子表格內同名關聯欄位之間的聯動衝突 ([#6577](https://github.com/nocobase/nocobase/pull/6577)) by @katherinehhh

- **[資料庫]**
  - 修正 CI 建置錯誤 ([#6687](https://github.com/nocobase/nocobase/pull/6687)) by @aaaaaajie

  - 刪除一對多記錄時，同時傳遞了 `filter` 和 `filterByTk`，且 `filter` 包含關聯欄位時，`filterByTk` 被忽略 ([#6606](https://github.com/nocobase/nocobase/pull/6606)) by @2013xile

  - 避免在更新記錄時，當值未變更時「datetimeNoTz」欄位發生變更 ([#6588](https://github.com/nocobase/nocobase/pull/6588)) by @mytharcher

- **[建置]** 當外掛依賴某些 AMD 函式庫時，建置輸出不正確 ([#6665](https://github.com/nocobase/nocobase/pull/6665)) by @gchust

- **[資料視覺化]** 篩選區塊中列舉欄位選項為空 ([#6706](https://github.com/nocobase/nocobase/pull/6706)) by @2013xile

- **[動作：自訂請求]** 確保自訂請求資料必須為 JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) by @chenos

- **[工作流程：人工節點]**
  - 修正任務中心的 ACL 錯誤 ([#6693](https://github.com/nocobase/nocobase/pull/6693)) by @mytharcher

  - 修正人工任務狀態常數 ([#6676](https://github.com/nocobase/nocobase/pull/6676)) by @mytharcher

- **[動作：匯入記錄]** 修正匯入 xlsx 時間欄位時的錯誤 ([#6672](https://github.com/nocobase/nocobase/pull/6672)) by @aaaaaajie

- **[存取控制]**
  - 修正將角色模型序列化至快取時拋出的錯誤 ([#6674](https://github.com/nocobase/nocobase/pull/6674)) by @mytharcher

  - 修正角色聯合計算邏輯 ([#6605](https://github.com/nocobase/nocobase/pull/6605)) by @aaaaaajie

  - 登入期間當前角色指派不正確 ([#6581](https://github.com/nocobase/nocobase/pull/6581)) by @aaaaaajie

- **[區塊：iframe]** 當 iframe 區塊設定為全高時出現垂直捲動條 ([#6675](https://github.com/nocobase/nocobase/pull/6675)) by @katherinehhh

- **[工作流程]**
  - 修正從 MySQL 拋出的遷移錯誤 ([#6667](https://github.com/nocobase/nocobase/pull/6667)) by @mytharcher

  - 修正應用程式啟動時未載入工作流程的統計資訊 ([#6642](https://github.com/nocobase/nocobase/pull/6642)) by @mytharcher

  - 修正使用不安全的整數 ID 建立任務時的 OOM 問題 ([#6637](https://github.com/nocobase/nocobase/pull/6637)) by @mytharcher

  - 修正同步選項顯示不正確 ([#6595](https://github.com/nocobase/nocobase/pull/6595)) by @mytharcher

- **[集合欄位：附件(URL)]** 僅允許具有公開 URL 存取的檔案集合 ([#6664](https://github.com/nocobase/nocobase/pull/6664)) by @katherinehhh

- **[區塊：範本]**
  - 當頁面區塊使用的被引用範本已被刪除時，另存為範本失敗 ([#6638](https://github.com/nocobase/nocobase/pull/6638)) by @gchust

  - 從範本建立區塊後，修改和刪除範本與區塊中的相同欄位可能導致渲染錯誤 ([#6626](https://github.com/nocobase/nocobase/pull/6626)) by @gchust

- **[使用者]** 解析使用者個人資料表單 schema 的問題 ([#6635](https://github.com/nocobase/nocobase/pull/6635)) by @2013xile

- **[動作：匯出記錄]** 變更分頁後匯出資料時缺少篩選參數 ([#6633](https://github.com/nocobase/nocobase/pull/6633)) by @katherinehhh

- **[行動版]** 行動版上使用「包含」篩選的單選欄位不支援多選 ([#6629](https://github.com/nocobase/nocobase/pull/6629)) by @katherinehhh

- **[集合欄位：多對多（陣列）]** 使用多對多（陣列）欄位篩選關聯集合中欄位的問題 ([#6596](https://github.com/nocobase/nocobase/pull/6596)) by @2013xile

- **[公開表單]** 檢視權限包含 list 和 get ([#6607](https://github.com/nocobase/nocobase/pull/6607)) by @chenos

- **[認證]** `AuthProvider` 中的 token 指派 ([#6593](https://github.com/nocobase/nocobase/pull/6593)) by @2013xile

- **[日曆]** 週曆檢視中邊界日期缺少資料 ([#6587](https://github.com/nocobase/nocobase/pull/6587)) by @katherinehhh

- **[區塊：地圖]** 地圖管理驗證不應允許僅輸入空格 ([#6575](https://github.com/nocobase/nocobase/pull/6575)) by @katherinehhh

- **[動作：批次編輯]** 點擊批次編輯按鈕，配置彈出視窗，然後再次開啟，彈出視窗為空白 ([#6578](https://github.com/nocobase/nocobase/pull/6578)) by @zhangzhonghe

- **[工作流程：自訂動作事件]** 修正測試案例 by @mytharcher

- **[電子郵件管理員]**
  - 修正無法同步、無主旨顯示及其他小錯誤 by @jiannx

  - 修正電子郵件管理權限無法檢視郵件清單 by @jiannx

  - 修正缺少對下一次呼叫的 await。 by @jiannx

- **[檔案儲存：S3(Pro)]**
  - 修正缺少對下一次呼叫的 await。 by @jiannx

  - 個別的 baseurl 和公開設定，改善 S3 Pro 儲存配置 UX by @jiannx

  - 當上傳 Logo 至 S3 Pro 儲存（設為預設）時向使用者拋出錯誤 by @mytharcher

  - 整理語言 by @jiannx

- **[認證：OIDC]** 當回呼路徑為字串 'null' 時發生不正確的重新導向 by @2013xile

- **[區塊：多步驟表單]**
  - 提交按鈕在預設和突出顯示狀態下顏色相同 by @jiannx

  - 修正當欄位與其他欄位關聯時，表單重設無效的錯誤 by @jiannx

- **[備份管理員]** 嘗試使用密碼還原未加密的備份時發生逾時錯誤 by @gchust

- **[工作流程：審批]**
  - 修正任務中心的 ACL 錯誤 by @mytharcher

  - 支援任務中心中審批項目的固定 URL by @mytharcher

  - 修正當 `endOnReject` 配置為 `true` 時的分支模式 by @mytharcher

  - 修正遷移後 `updatedAt` 變更 by @mytharcher

  - 修正 schema 變更後審批節點配置不正確 by @mytharcher

  - 修正客戶端變數以在審批表單中使用 by @mytharcher

- **[遷移管理員]**
  - 在某些環境中遷移日誌建立時間顯示不正確 by @gchust

  - 如果在遷移期間出現環境變數彈出視窗，則跳過自動備份選項失效 by @gchust
