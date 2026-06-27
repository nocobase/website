---
title: "NocoBase 每週更新：支援操作權限配置"
description: "本週更新包括：支援操作權限配置、時間欄位支援時間格式等。"
---

每週產品更新日誌摘要，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支正在更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要用於讓測試用戶收集回饋並進一步優化功能。適合想要提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.5.17](https://www.nocobase.com/en/blog/v1.5.17)

*發布日期：2025-02-27*

#### 🐛 錯誤修復

- **[客戶端]**

  - 在沒有評論集合的情況下建立評論區塊時發生錯誤 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - 點擊樹狀區塊節點時發生錯誤 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 點擊左側選單後，子頁面異常關閉 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 當表達式值為空時，不清除欄位值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
- **[集合欄位：序號]** 修復序號欄位在唯讀模式下未被停用的問題 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[檔案管理]** 修復繼承集合的遷移問題 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
- **[存取控制]** 在集合權限中使用多對多欄位作為資料範圍時，資料記錄不正確 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[區塊：看板]** 在彈出式看板區塊中使用彈出記錄變數時，資料過濾不正確 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[區塊：樹狀]** 點擊樹狀區塊節點時發生錯誤 by @zhangzhonghe

### [v1.5.18](https://www.nocobase.com/en/blog/v1.5.18)

*發布日期：2025-02-27*

#### 🐛 錯誤修復

- **[區塊：操作面板]** 設定操作面板的高度無效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe

### [v1.5.19](https://www.nocobase.com/en/blog/v1.5.19)

*發布日期：2025-03-01*

#### 🐛 錯誤修復

- **[客戶端]** 在關聯欄位唯讀模式下，懸停時出現「新增」按鈕 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[動作：匯出記錄 Pro]** 移除匯出附件按鈕設定中的「新增區塊」選項 by @katherinehhh
- **[動作：匯入記錄 Pro]** 關聯區塊匯入按鈕的重複記錄檢測在欄位下拉選單中未顯示資料 by @katherinehhh

### [v1.5.20](https://www.nocobase.com/en/blog/v1.5.20)

*發布日期：2025-03-03*

#### 🐛 錯誤修復

- **[客戶端]** 設有自訂 favicon 的頁面在載入期間會短暫閃現 NocoBase favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
- **[區塊：地圖]** 地圖欄位的配置設定遺失/不可見 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[自訂品牌]** 設有自訂 favicon 的頁面在載入期間會短暫閃現 NocoBase favicon by @zhangzhonghe
- **[範本列印]** 當同時啟用動作範本列印和備份管理員外掛時，從本機還原失敗 by @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.6.0-beta.15](https://www.nocobase.com/en/blog/v1.6.0-beta.15)

*發布日期：2025-02-27*

#### 🐛 錯誤修復

- **[客戶端]**

  - 在沒有評論集合的情況下建立評論區塊時發生錯誤 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - 拖曳選單後位置不正確 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
- **[工作流：自訂動作事件]** 修復建置錯誤 by @mytharcher

### [v1.6.0-beta.16](https://www.nocobase.com/en/blog/v1.6.0-beta.16)

*發布日期：2025-03-04*

#### 🎉 新功能

- **[客戶端]** 時間欄位支援時間格式 ([#6329](https://github.com/nocobase/nocobase/pull/6329)) by @katherinehhh

#### 🚀 改進

- **[伺服器]** 升級 koa 至 2.15.4；升級 @koa/cors 至 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) by @2013xile
- **[工作流]** 延遲載入工作結果以獲得更好的效能 ([#6344](https://github.com/nocobase/nocobase/pull/6344)) by @mytharcher

#### 🐛 錯誤修復

- **[認證]** 避免在 WebSocket 授權期間更新 Token。 ([#6342](https://github.com/nocobase/nocobase/pull/6342)) by @sheldon66
- **[客戶端]**

  - 設有自訂 favicon 的頁面在載入期間會短暫閃現 NocoBase favicon ([#6337](https://github.com/nocobase/nocobase/pull/6337)) by @zhangzhonghe
  - 在關聯欄位唯讀模式下，懸停時出現「新增」按鈕 ([#6322](https://github.com/nocobase/nocobase/pull/6322)) by @katherinehhh
- **[開發工具]** 確保僅在 req.ip 未定義時才設定 X-Forwarded-For 標頭。 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[區塊：地圖]** 地圖欄位的配置設定遺失/不可見 ([#6336](https://github.com/nocobase/nocobase/pull/6336)) by @zhangzhonghe
- **[行動端]** 頁面錯誤：無法讀取 null 的屬性（讀取 'match'） ([#6335](https://github.com/nocobase/nocobase/pull/6335)) by @zhangzhonghe
- **[使用者]** 使用者權限管理表格首次載入時，錯誤 UI 短暫閃現 ([#6324](https://github.com/nocobase/nocobase/pull/6324)) by @zhangzhonghe
- **[區塊：操作面板]** 設定操作面板的高度無效 ([#6321](https://github.com/nocobase/nocobase/pull/6321)) by @zhangzhonghe
- **[動作：匯入記錄 Pro]** 關聯區塊匯入按鈕的重複記錄檢測在欄位下拉選單中未顯示資料 by @katherinehhh
- **[動作：匯出記錄 Pro]** 移除匯出附件按鈕設定中的「新增區塊」選項 by @katherinehhh
- **[工作流：自訂動作事件]** 修復綁定了自訂動作工作流的舊版按鈕的遷移問題 by @mytharcher
- **[自訂品牌]** 設有自訂 favicon 的頁面在載入期間會短暫閃現 NocoBase favicon by @zhangzhonghe
- **[範本列印]** 當同時啟用動作範本列印和備份管理員外掛時，從本機還原失敗 by @gchust
- **[工作流：審批]**

  - 修復 `.toJSON()` 導致的錯誤 by @mytharcher
  - 修復因版本號導致遷移未執行的問題 by @mytharcher
  - 修復舊版區塊的遷移問題 by @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.29](https://www.nocobase.com/en/blog/v1.6.0-alpha.29)

*發布日期：2025-02-27*

#### 🎉 新功能

- **[客戶端]** 支援動作的權限配置 ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh
- **[區塊：範本]** 新增「區塊：範本」外掛，基於繼承機制為區塊提供範本支援。 ([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust
- **[工作流：自訂動作事件]** 觸發工作流動作支援存取控制 by @katherinehhh

#### 🚀 改進

- **[客戶端]**

  - 升級 React 類型定義 ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust
  - 使用者個人中心的擴展與改進 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh
- **[檔案管理]**

  - 增加 URL 長度至 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher
  - 新增後端程式碼以產生檔案預覽 URL ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx
  - 上傳時的檔案名稱將從隨機改為原始名稱加上隨機後綴。 ([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos
  - 新增後端程式碼以產生檔案預覽 URL ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx
  - 變更儲存類型 API 並新增外掛 API ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
  - 變更儲存類型 API 並新增外掛 API ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher
- **[區塊：操作面板]** 優化行動端樣式 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe
- **[工作流]** 在工作流畫布中隱藏節點卡片上的節點 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher
- **[檔案儲存：S3(Pro)]**

  - 根據主倉庫調整儲存 API by @mytharcher
  - 支援 thumbnailRule 選項配置 by @jiannx
- **[備份管理員]** 允許將備份還原到缺少某些外掛的應用程式 by @gchust

#### 🐛 錯誤修復

- **[開發工具]** 確保僅在 req.ip 未定義時才設定 X-Forwarded-For 標頭。 ([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66
- **[客戶端]**

  - 拖曳選單後位置不正確 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe
  - 在沒有評論集合的情況下建立評論區塊時發生錯誤 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh
  - 點擊樹狀區塊節點時發生錯誤 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe
  - 點擊左側選單後，子頁面異常關閉 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe
  - 當表達式值為空時，不清除欄位值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe
  - 富文字欄位元件無法完全清除 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh
  - 無法將頁面移動到群組中 ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe
  - 跳過 CurrentUserProvider 的認證錯誤。 ([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66
  - 修復逐個上傳時遺漏已上傳檔案的問題 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher
  - 修復郵件頻道配置表單輸入欄位中的 HTML 標籤字元。 ([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66
  - 修復上傳後遺漏檔案的問題 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher
  - 篩選表單欄位中的選擇器格式不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh
  - 在停用模式下正確顯示 `<Variable.TextArea />` 元件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher
- **[create-nocobase-app]** 執行 `create-nocobase-app` 後執行 `yarn dev` 時，Web 客戶端發生錯誤 ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust
- **[認證]** 當 Token 為 API 金鑰時跳過使用者認證檢查 ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66
- **[CLI]** 改進 nocobase upgrade 命令的內部邏輯 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos
- **[檔案管理]**

  - 修復繼承集合的遷移問題 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher
  - 修復遷移並新增測試案例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - 修復遷移並新增測試案例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher
  - 修復檔案集合的 `path` 欄位類型 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher
  - 升級 AWS SDK 版本以修復 MinIO 上傳錯誤 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher
- **[區塊：範本]** 存取公開表單時需要登入 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust
- **[存取控制]** 在集合權限中使用多對多欄位作為資料範圍時，資料記錄不正確 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile
- **[區塊：看板]** 在彈出式看板區塊中使用彈出記錄變數時，資料過濾不正確 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh
- **[集合欄位：序號]** 修復序號欄位在唯讀模式下未被停用的問題 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher
- **[工作流：測試套件]** 基於新功能修復 E2E 測試案例 ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher
- **[公開表單]** 在公開表單中跳過認證檢查 ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos
- **[認證]** 從 AdminProvider 中移除不必要的 NavigateIfNotSignIn 包裝。 ([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66
- **[工作流]**

  - 修復工作流畫布中的樣式細節 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher
  - 支援在變更密碼時觸發工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher
- **[工作流：自訂動作事件]**

  - 修復建置錯誤 by @mytharcher
  - 修復 E2E 測試案例 by @mytharcher
  - 修復觸發工作流初始化器 by @mytharcher
  - 修復建置錯誤 by @mytharcher
- **[工作流：動作前事件]** 修復來自回應訊息節點的錯誤訊息未顯示的問題 by @mytharcher
- **[工作流：JavaScript]** 支援 require NocoBase 模組 by @mytharcher
- **[郵件管理]** 公開 mailmessage 集合並修復模態框資料遺失 by @jiannx
- **[檔案儲存：S3(Pro)]**

  - 升級 AWS SDK 版本以修復 MinIO 上傳錯誤。 by @mytharcher
  - 將 forcePathStyleForAccess 的預設值設定為 virtual by @jiannx
- **[區塊：多步驟表單]** 拖曳後項目排序錯誤 by @jiannx
- **[區塊：樹狀]** 點擊樹狀區塊節點時發生錯誤 by @zhangzhonghe
- **[備份管理員]** 從本機還原操作對話框中的刪除圖示無效 by @gchust
- **[工作流：審批]**

  - 修復因版本號導致遷移未執行的問題 by @mytharcher
  - 基於新功能修復 E2E 測試案例 by @mytharcher

## 關於 NocoBase

NocoBase 是一個私有、開源、無程式碼的平台，提供完全控制權和無限的可擴展性。它使團隊能夠快速適應變化，同時顯著降低成本。無需數年開發和大量投資，幾分鐘內即可部署 NocoBase。

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

3 分鐘了解 NocoBase！

## 👇 取得 NocoBase

[**首頁**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**文件**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
