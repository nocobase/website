---
title: "NocoBase v1.5.0：為日期欄位元件新增日期限制範圍"
description: "v1.5.0 版本發行說明"
---

### 🎉 新功能

- **[客戶端]**
  - 為日期欄位元件新增日期限制範圍 ([#5852](https://github.com/nocobase/nocobase/pull/5852)) - @Cyx649312038

  - 支援在子表格中設定新增與選擇按鈕的文字、圖示與類型 ([#5778](https://github.com/nocobase/nocobase/pull/5778)) - @katherinehhh

  - 支援在唯讀欄位上啟用連結開啟彈窗 ([#5747](https://github.com/nocobase/nocobase/pull/5747)) - @katherinehhh

  - 在關聯區塊中支援關聯與取消關聯操作 ([#5695](https://github.com/nocobase/nocobase/pull/5695)) - @katherinehhh

- **[伺服器端]** 新增稽核管理器 ([#5601](https://github.com/nocobase/nocobase/pull/5601)) - @chenzhizdt

- **[工作流程]**
  - 新增隨機字元模式 ([#5959](https://github.com/nocobase/nocobase/pull/5959)) - @kennnnnnnnnn

  - 為工作流程新增堆疊限制設定 ([#6077](https://github.com/nocobase/nocobase/pull/6077)) - @citlalinda

  - 支援手動觸發工作流程 ([#5664](https://github.com/nocobase/nocobase/pull/5664)) - @mytharcher

- **[行動端]** 新增全域開關，控制行動端所有返回按鈕（預設啟用）([#5868](https://github.com/nocobase/nocobase/pull/5868)) - @katherinehhh

- **[日曆]** 日曆插件新增事件開啟模式 ([#5808](https://github.com/nocobase/nocobase/pull/5808)) - @Cyx649312038

- **[集合：樹]** 允許在樹狀表格區塊中篩選子節點 ([#4770](https://github.com/nocobase/nocobase/pull/4770)) - @jimmy201602

- **[工作流程：前置操作事件]** 支援手動觸發工作流程 - @mytharcher

- **[Redis 發布/訂閱適配器]** 新增 Redis 同步適配器插件 - @mytharcher

### 🚀 改進

- **[客戶端]**
  - 從關聯按鈕中移除聯動規則 ([#6016](https://github.com/nocobase/nocobase/pull/6016)) - @katherinehhh

  - 移除表格行骨架元件 ([#5751](https://github.com/nocobase/nocobase/pull/5751)) - @zhangzhonghe

  - 優化 useMenuSearch 中的遞迴邏輯以提升效能 ([#5784](https://github.com/nocobase/nocobase/pull/5784)) - @katherinehhh

  - 從表格中移除 Formily 元件，以提升切換表格分頁時的效能 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) - @zhangzhonghe

  - 提升頁面渲染效能並支援頁面保持活動功能 ([#5515](https://github.com/nocobase/nocobase/pull/5515)) - @zhangzhonghe

  - 實現前端元件的按需載入 ([#5647](https://github.com/nocobase/nocobase/pull/5647)) - @gchust

- **[通知：電子郵件]** 在 package.json 中為通知插件新增首頁連結。([#6150](https://github.com/nocobase/nocobase/pull/6150)) - @sheldon66

- **[工作流程：循環節點]** 修正樣式 ([#6095](https://github.com/nocobase/nocobase/pull/6095)) - @mytharcher

- **[檔案管理器]** 支援其他儲存插件 ([#6096](https://github.com/nocobase/nocobase/pull/6096)) - @jiannx
參考：[檔案儲存：S3 (Pro)](https://docs.nocobase.com/handbook/file-manager/storage/s3-pro)
- **[工作流程：測試套件]** 調整工作流程畫布樣式，使內容更緊湊 ([#6088](https://github.com/nocobase/nocobase/pull/6088)) - @mytharcher

- **[工作流程]** 將 API 名稱更改為更合理的名稱 ([#6082](https://github.com/nocobase/nocobase/pull/6082)) - @mytharcher

- **[資料視覺化]** 為圖表查詢新增偏移參數 ([#5911](https://github.com/nocobase/nocobase/pull/5911)) - @Albert-mah

- **[行動端]** 為行動端適配時間與日期範圍選擇器元件 ([#5863](https://github.com/nocobase/nocobase/pull/5863)) - @katherinehhh

- **[認證]** 優化取得稽核操作元資料的邏輯。([#5814](https://github.com/nocobase/nocobase/pull/5814)) - @chenzhizdt

- **[公開表單]** 優化操作面板與公開表單元件以適配行動端 ([#5788](https://github.com/nocobase/nocobase/pull/5788)) - @katherinehhh

- **[集合欄位：排序]** 新增插件描述 ([#5720](https://github.com/nocobase/nocobase/pull/5720)) - @mytharcher

- **[工作流程：自訂操作事件]** 更改手動執行的 API - @mytharcher

- **[工作流程：JSON 計算]**
  - 更改 JSON-query 節點名稱與分組 - @mytharcher

  - 為節點新增圖示 - @mytharcher

- **[嵌入 NocoBase]** 提升頁面渲染效能 - @zhangzhonghe

- **[備份管理器]** 改善還原失敗的錯誤訊息 - @gchust

### 🐛 錯誤修復

- **[客戶端]**
  - 按鈕的聯動規則因順序問題無法正常運作 ([#6147](https://github.com/nocobase/nocobase/pull/6147)) - @zhangzhonghe

  - 刪除區塊或欄位後出現佈局異常 ([#6139](https://github.com/nocobase/nocobase/pull/6139)) - @zhangzhonghe

  - 修復篩選按鈕中不可篩選欄位的設定影響其他使用相同集合的表格 ([#6121](https://github.com/nocobase/nocobase/pull/6121)) - @katherinehhh

  - 子詳細資訊中關聯欄位的資料未顯示 ([#6117](https://github.com/nocobase/nocobase/pull/6117)) - @zhangzhonghe

  - 修復切換頁面後「資料載入模式」失效的問題 ([#6115](https://github.com/nocobase/nocobase/pull/6115)) - @zhangzhonghe

  - 修復切換頁面後關聯欄位預設值未重新整理的問題 ([#6114](https://github.com/nocobase/nocobase/pull/6114)) - @zhangzhonghe

  - 修復在簡潔閱讀模式下關聯欄位預設值不生效的問題 ([#6066](https://github.com/nocobase/nocobase/pull/6066)) - @zhangzhonghe

  - 修復工作流程手動節點中表單按鈕的欄位指派無效的問題 ([#6054](https://github.com/nocobase/nocobase/pull/6054)) - @zhangzhonghe

  - 修復欄位啟用連結模態框中缺少當前彈窗變數的問題 ([#6045](https://github.com/nocobase/nocobase/pull/6045)) - @katherinehhh

  - 在認證檢查請求完成後繼續渲染頁面 ([#6020](https://github.com/nocobase/nocobase/pull/6020)) - @2013xile

  - 修復表格行無法拖曳排序的問題 ([#6013](https://github.com/nocobase/nocobase/pull/6013)) - @zhangzhonghe

  - 修復在 iOS 上空子表格顯示一行空資料的問題 ([#5990](https://github.com/nocobase/nocobase/pull/5990)) - @zhangzhonghe

  - 修復點擊關聯欄位未開啟彈窗對話框的問題 ([#5972](https://github.com/nocobase/nocobase/pull/5972)) - @zhangzhonghe

  - 修復篩選表單/操作中的日期範圍選擇器在設定 showTime 時未顯示時間選擇器的問題 ([#5956](https://github.com/nocobase/nocobase/pull/5956)) - @katherinehhh

  - 修復第三方插件中表格儲存格顯示異常的問題 ([#5934](https://github.com/nocobase/nocobase/pull/5934)) - @zhangzhonghe

  - 修復區塊模板管理頁面中刪除按鈕被停用的問題 ([#5922](https://github.com/nocobase/nocobase/pull/5922)) - @zhangzhonghe

  - 修復表單聯動規則依賴子表格欄位值時失敗的問題 ([#5876](https://github.com/nocobase/nocobase/pull/5876)) - @zhangzhonghe

  - 修復子表格分頁後資料未變更的問題 ([#5856](https://github.com/nocobase/nocobase/pull/5856)) - @zhangzhonghe

  - 修復切換頁面後瀏覽器分頁標題未更新的問題 ([#5857](https://github.com/nocobase/nocobase/pull/5857)) - @zhangzhonghe

  - 修復在資料來源管理頁面重新整理頁面會跳轉到首頁的問題 ([#5855](https://github.com/nocobase/nocobase/pull/5855)) - @zhangzhonghe

  - 修復參考模板中的關聯欄位有時不顯示資料的問題 ([#5848](https://github.com/nocobase/nocobase/pull/5848)) - @zhangzhonghe

  - 修復使用者管理表格中角色資料未顯示的問題 ([#5846](https://github.com/nocobase/nocobase/pull/5846)) - @zhangzhonghe

  - 修復新增「自訂請求」按鈕後未立即顯示的問題 ([#5845](https://github.com/nocobase/nocobase/pull/5845)) - @zhangzhonghe

  - 修復在彈窗中新增的區塊在重新開啟彈窗時未顯示的問題 ([#5838](https://github.com/nocobase/nocobase/pull/5838)) - @zhangzhonghe

  - 防止隱藏頁面影響與其他頁面的互動 ([#5836](https://github.com/nocobase/nocobase/pull/5836)) - @zhangzhonghe

  - 修復在詳細資訊區塊中變更關聯欄位值後未立即重新整理的問題 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) - @zhangzhonghe

  - 修復在子表單中新增欄位後未顯示的問題 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) - @zhangzhonghe

  - 修復首次開啟「啟用連結」時點擊連結未開啟彈窗的問題 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) - @zhangzhonghe

  - 修復行動端登入後跳轉到桌面頁面的問題 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) - @zhangzhonghe

  - 修復設定操作按鈕應靠左對齊 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) - @katherinehhh

  - 防止關閉彈窗時多次呼叫 API ([#5804](https://github.com/nocobase/nocobase/pull/5804)) - @zhangzhonghe

  - 修復變數無法在第三方資料來源區塊中正常使用的問題 ([#5782](https://github.com/nocobase/nocobase/pull/5782)) - @zhangzhonghe

  - 修復區塊模板中關聯欄位值為空的問題。修復使用變數的區塊資料範圍在第三方資料來源中無法正常運作的問題 ([#5777](https://github.com/nocobase/nocobase/pull/5777)) - @zhangzhonghe

  - 修復元件的動態屬性在延遲載入時無法運作的問題 ([#5776](https://github.com/nocobase/nocobase/pull/5776)) - @gchust

  - 修正在開發環境中動態載入鉤子時 React 的警告訊息 ([#5758](https://github.com/nocobase/nocobase/pull/5758)) - @gchust

- **[建置]**
  - 修正在設定 `APP_PUBLIC_PATH` 環境變數後載入失敗的問題 ([#5924](https://github.com/nocobase/nocobase/pull/5924)) - @gchust

  - 修正在插件建置後前端 js 檔案快取不正確的問題 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) - @gchust

  - 修正在 create-nocobase-app 後執行 `yarn dev` 導致錯誤的問題 ([#5708](https://github.com/nocobase/nocobase/pull/5708)) - @gchust

- **[伺服器端]** 為 ACL 設定預設可用操作 ([#5847](https://github.com/nocobase/nocobase/pull/5847)) - @chenos

- **[公開表單]** 無法在公開表單的「子表單（彈出）」中新增欄位 ([#6157](https://github.com/nocobase/nocobase/pull/6157)) - @gchust

- **[集合：SQL]** 修正在設定 `DB_TABLE_PREFIX` 時篩選 SQL 集合拋出錯誤的問題 ([#6156](https://github.com/nocobase/nocobase/pull/6156)) - @2013xile

- **[工作流程]**
  - 為「移動」操作新增測試案例以觸發工作流程 ([#6145](https://github.com/nocobase/nocobase/pull/6145)) - @mytharcher

  - 修正在手動執行工作流程時，非同步節點恢復時拋出錯誤的問題 ([#5877](https://github.com/nocobase/nocobase/pull/5877)) - @mytharcher

- **[使用者資料同步]**
  - 修復任務清單中未顯示「重試」按鈕的問題 ([#6079](https://github.com/nocobase/nocobase/pull/6079)) - @2013xile

  - 修復同步與任務按鈕的顯示問題。([#5896](https://github.com/nocobase/nocobase/pull/5896)) - @2013xile

- **[驗證]** 修正在驗證設定頁面開啟編輯抽屜時表單欄位為空的問題 ([#5949](https://github.com/nocobase/nocobase/pull/5949)) - @chenos

- **[資料來源：主要]** 修復篩選表單區塊中系統欄位無法編輯的問題 ([#5885](https://github.com/nocobase/nocobase/pull/5885)) - @zhangzhonghe

- **[資料視覺化]**
  - 修復圖表區塊的初始高度 ([#5879](https://github.com/nocobase/nocobase/pull/5879)) - @2013xile

  - 修復圖表區塊的篩選欄位元件未渲染的問題 ([#5769](https://github.com/nocobase/nocobase/pull/5769)) - @2013xile

- **[行動端]**
  - 修復子頁面中日曆元件的行動端適配問題 ([#5859](https://github.com/nocobase/nocobase/pull/5859)) - @katherinehhh

  - 修復行動端篩選操作中缺少日期輸入欄位的問題 ([#5779](https://github.com/nocobase/nocobase/pull/5779)) - @katherinehhh

- **[工作流程：自訂操作事件]**
  - 修復自訂操作觸發器的測試案例 - @mytharcher

  - 修復在 SQLite 上測試案例失敗的問題 - @mytharcher

- **[工作流程：前置操作事件]** 修復請求攔截器的測試案例 - @mytharcher

- **[工作流程：回應訊息]** 修復使用了錯誤的參數名稱 - @mytharcher
