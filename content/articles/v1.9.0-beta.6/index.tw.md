---
title: "NocoBase v1.9.0-beta.6：支援按環境和事件佇列拆分非同步任務服務"
description: "v1.9.0-beta.6 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 為 Input、TextArea、URL 及 InputNumber 元件新增「自動對焦」選項，啟用後在頁面初次渲染時會自動聚焦輸入欄位 ([#7320](https://github.com/nocobase/nocobase/pull/7320)) by @zhangzhonghe
- **[非同步任務管理器]** 支援依環境與事件佇列拆分非同步任務服務 ([#7241](https://github.com/nocobase/nocobase/pull/7241)) by @mytharcher
- **[Office 檔案預覽器]** 支援透過 Microsoft 即時預覽功能預覽 Office 檔案 ([#7300](https://github.com/nocobase/nocobase/pull/7300)) by @mytharcher
- **[認證：SAML 2.0]** 新增簽章相關設定選項 by @2013xile
- **[工作流：審批]**

  - 為通知設定新增內嵌範本類型 by @mytharcher
  - 支援在同一工作流的所有審批節點中使用一致的工作任務標題 by @mytharcher

### 🚀 改進

- **[資料庫]** 優化 ACL Meta 查詢效能 ([#7400](https://github.com/nocobase/nocobase/pull/7400)) by @aaaaaajie
- **[客戶端]**

  - 支援 Select 元件在唯讀模式下顯示由字串識別的圖示 ([#7420](https://github.com/nocobase/nocobase/pull/7420)) by @mytharcher
  - 新增「前天」日期變數支援 ([#7359](https://github.com/nocobase/nocobase/pull/7359)) by @katherinehhh
  - 優化切換彈出頁籤時的效能 ([#7353](https://github.com/nocobase/nocobase/pull/7353)) by @zhangzhonghe
  - 選取後不自動關閉選單 ([#7252](https://github.com/nocobase/nocobase/pull/7252)) by @kerwin612
- **[行動端]** 優化行動端彈出元件 ([#7414](https://github.com/nocobase/nocobase/pull/7414)) by @zhangzhonghe
- **[工作流]**

  - 更新節點選取選單，改以雙欄佈局顯示選項，提升資訊密度，讓使用者一次檢視更多選項 ([#7396](https://github.com/nocobase/nocobase/pull/7396)) by @mytharcher
  - 修正不穩定的測試案例 ([#7349](https://github.com/nocobase/nocobase/pull/7349)) by @mytharcher
  - 停用時顯示正常標題 ([#7339](https://github.com/nocobase/nocobase/pull/7339)) by @mytharcher
  - 準備執行時減少載入的工作數量 ([#7284](https://github.com/nocobase/nocobase/pull/7284)) by @mytharcher
- **[授權設定]** 在授權設定中，每次複製最新的實例 ID ([#7387](https://github.com/nocobase/nocobase/pull/7387)) by @jiannx
- **[認證]** 登入成功後從 URL 移除 token 參數 ([#7386](https://github.com/nocobase/nocobase/pull/7386)) by @2013xile
- **[通知：站內訊息]**

  - 移除透過 `console.log` 輸出的 SQL 日誌 ([#7368](https://github.com/nocobase/nocobase/pull/7368)) by @2013xile
  - 將站內訊息從 SSE 改為 WebSocket ([#7302](https://github.com/nocobase/nocobase/pull/7302)) by @mytharcher
- **[Office 檔案預覽器]** 新增支援預覽 `.odt` 檔案 ([#7347](https://github.com/nocobase/nocobase/pull/7347)) by @mytharcher
- **[動作：匯入記錄 Pro]** 支援依環境與事件佇列拆分匯入/匯出服務 by @mytharcher
- **[工作流：JavaScript]** 將快取改為應用程式快取，以避免叢集模式下的錯誤 by @mytharcher
- **[範本列印]** 支援 m2m 陣列欄位 by @jiannx
- **[備份管理員]** 提升 MySQL 資料庫備份操作的效能 by @gchust
- **[認證：釘釘]** 在釘釘客戶端中，將導航列標題設為空字串，而非顯示「載入中…」 by @2013xile
- **[遷移管理員]** 支援依環境與事件佇列拆分遷移服務 by @mytharcher

### 🐛 錯誤修復

- **[客戶端]**

  - 修正當附件 URL 欄位中的 URL 包含查詢參數時，圖示顯示不正確的問題 ([#7432](https://github.com/nocobase/nocobase/pull/7432)) by @mytharcher
  - 在聯動規則的空值驗證中，將數字 0 視為空值 ([#7404](https://github.com/nocobase/nocobase/pull/7404)) by @katherinehhh
  - 修正連結按鈕文字換行的問題 ([#7406](https://github.com/nocobase/nocobase/pull/7406)) by @mytharcher
  - 修正多欄表單佈局在行動裝置上無法轉換為單欄佈局的問題 ([#7355](https://github.com/nocobase/nocobase/pull/7355)) by @zhangzhonghe
  - 修正大量刪除資料集合時的錯誤 ([#7345](https://github.com/nocobase/nocobase/pull/7345)) by @aaaaaajie
  - 修正個別設定權限時，先前儲存的資料範圍未預先選取的問題 ([#7288](https://github.com/nocobase/nocobase/pull/7288)) by @aaaaaajie
  - 修正變數原始字串隨表單提交的問題 ([#7337](https://github.com/nocobase/nocobase/pull/7337)) by @zhangzhonghe
  - 在篩選表單中使用變數設定欄位預設值時，若變數值為空，輸入框將顯示原始變數字串 ([#7335](https://github.com/nocobase/nocobase/pull/7335)) by @zhangzhonghe
  - 修正滑鼠懸停在操作面板上時，工具提示顯示 [object Object] 的問題 ([#7322](https://github.com/nocobase/nocobase/pull/7322)) by @katherinehhh
  - 修正解析欄位預設值時的無限迴圈問題 ([#7301](https://github.com/nocobase/nocobase/pull/7301)) by @zhangzhonghe
  - 修正空 URL 的檔案預覽項目 ([#7315](https://github.com/nocobase/nocobase/pull/7315)) by @mytharcher
  - 修正樹狀表格無法展開的問題 ([#7309](https://github.com/nocobase/nocobase/pull/7309)) by @zhangzhonghe
  - 預覽時為本地檔案加上完整 URL ([#7314](https://github.com/nocobase/nocobase/pull/7314)) by @mytharcher
  - 修正表格行拖放排序的異常行為 ([#6959](https://github.com/nocobase/nocobase/pull/6959)) by @ChimingLiu
  - 篩選表單關聯欄位資料選取器彈出視窗中的日期欄位顯示問題 ([#7290](https://github.com/nocobase/nocobase/pull/7290)) by @katherinehhh
- **[資料庫]** 修正 Postgres 外部資料表讀取包含其他 schema 檢視表的問題 ([#7410](https://github.com/nocobase/nocobase/pull/7410)) by @aaaaaajie
- **[伺服器]** 部分請求缺少 `ctx.action`，導致審計日誌中介軟體出錯 ([#7369](https://github.com/nocobase/nocobase/pull/7369)) by @2013xile
- **[未定義]** 將新外掛新增至預設集 ([#7319](https://github.com/nocobase/nocobase/pull/7319)) by @mytharcher
- **[工具]** parseDate 的時區處理不正確 ([#7318](https://github.com/nocobase/nocobase/pull/7318)) by @katherinehhh
- **[區塊：範本]** 解決郵件區塊放置在繼承範本區塊內時無法顯示的問題 ([#7430](https://github.com/nocobase/nocobase/pull/7430)) by @gchust
- **[行動端]**

  - 行動裝置上日期欄位的顯示格式不正確 ([#7412](https://github.com/nocobase/nocobase/pull/7412)) by @katherinehhh
  - 修正行動審批對話框中表單提交資料不正確的問題 ([#7389](https://github.com/nocobase/nocobase/pull/7389)) by @zhangzhonghe
  - 解決行動裝置上日期選擇器在套用日期範圍限制時顯示不正確的問題 ([#7362](https://github.com/nocobase/nocobase/pull/7362)) by @katherinehhh
- **[工作流]**

  - 修正編輯工作流分類時拋出錯誤且表單資料消失的問題 ([#7408](https://github.com/nocobase/nocobase/pull/7408)) by @mytharcher
  - 修正工作流任務中心頁面標題的翻譯問題 ([#7392](https://github.com/nocobase/nocobase/pull/7392)) by @mytharcher
  - 重構「新增節點」選單，並修正其導致的工作流畫布渲染效能問題 ([#7363](https://github.com/nocobase/nocobase/pull/7363)) by @mytharcher
  - 修正擷取單一待辦事項時篩選條件不正確的問題 ([#7366](https://github.com/nocobase/nocobase/pull/7366)) by @mytharcher
  - 修正欄位選取中的關鍵字比對問題 ([#7356](https://github.com/nocobase/nocobase/pull/7356)) by @mytharcher
  - 避免在停止時因發佈至事件佇列而拋出錯誤 ([#7348](https://github.com/nocobase/nocobase/pull/7348)) by @mytharcher
  - 修正處理器退出時回傳 `undefined` 的問題 ([#7317](https://github.com/nocobase/nocobase/pull/7317)) by @mytharcher
  - 修正 MySQL 中儲存工作時的 BigInt ID 問題 ([#7292](https://github.com/nocobase/nocobase/pull/7292)) by @mytharcher
- **[工作流：郵件節點]** 修正郵件節點可能無法正確恢復執行的問題 ([#7409](https://github.com/nocobase/nocobase/pull/7409)) by @mytharcher
- **[Office 檔案預覽器]**

  - 修正上傳檔案至附件 URL 欄位時拋出錯誤的問題 ([#7405](https://github.com/nocobase/nocobase/pull/7405)) by @mytharcher
  - 支援僅有 URL 的 `.docx`、`.xlsx` 及 `.pptx` 檔案進行預覽 ([#7336](https://github.com/nocobase/nocobase/pull/7336)) by @mytharcher
- **[檔案管理員]**

  - 移除檔案上傳大小限制的提示 ([#7391](https://github.com/nocobase/nocobase/pull/7391)) by @mytharcher
  - 為檔案資料集合新增 `storageId` 欄位以支援權限設定 ([#7351](https://github.com/nocobase/nocobase/pull/7351)) by @mytharcher
  - 修正儲存欄位權限 ([#7316](https://github.com/nocobase/nocobase/pull/7316)) by @mytharcher
- **[通知：站內訊息]**

  - 修正翻譯 ([#7384](https://github.com/nocobase/nocobase/pull/7384)) by @mytharcher
  - 修正站內訊息已接收但未在彈出視窗中顯示的問題 ([#7364](https://github.com/nocobase/nocobase/pull/7364)) by @mytharcher
- **[日曆]** 日曆事件項目的工具提示顯示 [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) by @katherinehhh
- **[資料集合欄位：公式]** 修正因變數類型導致公式輸入無法通過驗證的問題 ([#7373](https://github.com/nocobase/nocobase/pull/7373)) by @mytharcher
- **[工作流：並行節點]** 修正 MySQL 下並行節點在恢復後暫停的問題 ([#7346](https://github.com/nocobase/nocobase/pull/7346)) by @mytharcher
- **[工作流：抄送]** 修正區塊無法移除的問題 ([#7338](https://github.com/nocobase/nocobase/pull/7338)) by @mytharcher
- **[資料視覺化]** 圖表篩選區塊中日期欄位預設值的日期變數問題 ([#7291](https://github.com/nocobase/nocobase/pull/7291)) by @katherinehhh
- **[資料集合：樹]** 修正樹狀資料集合的路徑同步邏輯 ([#7330](https://github.com/nocobase/nocobase/pull/7330)) by @ChimingLiu
- **[工作流：HTTP 請求節點]** 修正競爭條件錯誤 ([#7310](https://github.com/nocobase/nocobase/pull/7310)) by @mytharcher
- **[工作流：動態計算節點]** 修正舊版 API 導致的錯誤 ([#7321](https://github.com/nocobase/nocobase/pull/7321)) by @mytharcher
- **[動作：匯出記錄]** 修正匯出至 Excel 時巢狀關聯欄位的格式不正確 ([#7277](https://github.com/nocobase/nocobase/pull/7277)) by @aaaaaajie
- **[動作：匯入記錄 Pro]** 在匯入重複偵測期間不允許指派關聯欄位 by @aaaaaajie
- **[資料來源：外部 SQL Server]** 修正來自外部資料來源的 MSSQL datetime（無時區）欄位儲存格式不一致的問題 by @aaaaaajie
- **[工作流：自訂動作事件]** 成功對多筆記錄觸發動作後清除已選取的行 by @mytharcher
- **[工作流：子流程]** 修正流程暫停的問題 by @mytharcher
- **[範本列印]** 多行資料中單選欄位的列印問題 by @jiannx
- **[檔案儲存：S3(Pro)]**

  - 修正無法使用 IAM 認證方式上傳檔案的問題 by @mytharcher
  - 棄用有問題的參數 `attachmentField` by @mytharcher
- **[工作流：審批]**

  - 修正審批記錄中載入外部資料來源資料時出現 404 錯誤的問題 by @mytharcher
  - 為新增及委派的項目新增任務標題 by @mytharcher
  - 修正外部資料來源中受指派者選取拋出錯誤的問題 by @mytharcher
  - 修正會簽時使用者清單為空的問題 by @mytharcher
  - 修正提交草稿時更新關聯的問題 by @mytharcher
  - 修正聯動規則在審批原始詳情區塊中不生效的問題 by @mytharcher
- **[備份管理員]** 大型檔案備份可能在實際完成前顯示「成功」 by @gchust
- **[遷移管理員]** 在建立遷移檔案時，跳過最新版 pg_dump 產生的 `\restrict` 與 `\unrestrict` 指令，以解決還原錯誤。 by @2013xile
