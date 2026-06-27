---
title: "NocoBase v1.6.0-alpha.29：支援動作的權限配置"
description: "v1.6.0-alpha.29 版本發行說明"
---

### 🎉 新功能

- **[client]** 支援動作權限配置 ([#6254](https://github.com/nocobase/nocobase/pull/6254)) by @katherinehhh

- **[區塊：模板]** 新增「區塊：模板」插件，基於繼承機制為區塊提供模板支援。([#5920](https://github.com/nocobase/nocobase/pull/5920)) by @gchust

- **[工作流：自訂動作事件]** 觸發工作流動作支援存取控制 by @katherinehhh

### 🚀 改進

- **[client]**
  - 升級 React 類型定義 ([#6278](https://github.com/nocobase/nocobase/pull/6278)) by @gchust

  - 使用者個人中心的擴充與改進 ([#6213](https://github.com/nocobase/nocobase/pull/6213)) by @katherinehhh

- **[檔案管理]**
  - 將 URL 長度增加至 1024 ([#6275](https://github.com/nocobase/nocobase/pull/6275)) by @mytharcher

  - 新增後端程式碼以產生檔案預覽 URL ([#6281](https://github.com/nocobase/nocobase/pull/6281)) by @jiannx

  - 上傳時的檔案名稱將從隨機改為原始名稱加上隨機後綴。([#6217](https://github.com/nocobase/nocobase/pull/6217)) by @chenos

  - 新增後端程式碼以產生檔案預覽 URL ([#6223](https://github.com/nocobase/nocobase/pull/6223)) by @jiannx

  - 變更儲存類型 API 並新增插件 API ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher

  - 變更儲存類型 API 並新增插件 API ([#6246](https://github.com/nocobase/nocobase/pull/6246)) by @mytharcher

- **[區塊：動作面板]** 優化行動端樣式 ([#6270](https://github.com/nocobase/nocobase/pull/6270)) by @zhangzhonghe

- **[工作流]** 在工作流畫布中隱藏節點卡片上的節點 ID ([#6251](https://github.com/nocobase/nocobase/pull/6251)) by @mytharcher

- **[檔案儲存：S3(Pro)]**
  - 根據主倉庫調整儲存 API by @mytharcher

  - 支援 thumbnailRule 選項配置 by @jiannx

- **[備份管理]** 允許將備份還原到缺少某些插件的應用程式 by @gchust

### 🐛 錯誤修復

- **[devtools]** 確保僅在 req.ip 不為 undefined 時才設定 X-Forwarded-For 標頭。([#6320](https://github.com/nocobase/nocobase/pull/6320)) by @sheldon66

- **[client]**
  - 拖曳選單後位置不正確 ([#6315](https://github.com/nocobase/nocobase/pull/6315)) by @zhangzhonghe

  - 在沒有評論集合的情況下建立評論區塊時出錯 ([#6309](https://github.com/nocobase/nocobase/pull/6309)) by @katherinehhh

  - 點擊樹狀區塊節點時發生錯誤 ([#6314](https://github.com/nocobase/nocobase/pull/6314)) by @zhangzhonghe

  - 點擊左側選單後，子頁面異常關閉 ([#6305](https://github.com/nocobase/nocobase/pull/6305)) by @zhangzhonghe

  - 當表達式值為空時不清除欄位值 ([#6300](https://github.com/nocobase/nocobase/pull/6300)) by @zhangzhonghe

  - 富文字欄位元件無法完全清除 ([#6287](https://github.com/nocobase/nocobase/pull/6287)) by @katherinehhh

  - 無法將頁面移動到群組中 ([#6289](https://github.com/nocobase/nocobase/pull/6289)) by @zhangzhonghe

  - 跳過 CurrentUserProvider 的認證錯誤。([#6252](https://github.com/nocobase/nocobase/pull/6252)) by @sheldon66

  - 修復逐個上傳時遺漏已上傳檔案的問題 ([#6260](https://github.com/nocobase/nocobase/pull/6260)) by @mytharcher

  - 修復郵件頻道配置表單輸入欄位中的 HTML 標籤字元。([#6221](https://github.com/nocobase/nocobase/pull/6221)) by @sheldon66

  - 修復上傳後遺漏檔案的問題 ([#6247](https://github.com/nocobase/nocobase/pull/6247)) by @mytharcher

  - 篩選表單欄位中的選擇器格式不匹配 ([#6234](https://github.com/nocobase/nocobase/pull/6234)) by @katherinehhh

  - 在禁用模式下正確顯示 `<Variable.TextArea />` 元件 ([#6197](https://github.com/nocobase/nocobase/pull/6197)) by @mytharcher

- **[create-nocobase-app]** 執行 `create-nocobase-app` 後再執行 `yarn dev` 時，Web 用戶端發生錯誤 ([#6299](https://github.com/nocobase/nocobase/pull/6299)) by @gchust

- **[auth]** 當 token 為 API 金鑰時跳過使用者認證檢查 ([#6291](https://github.com/nocobase/nocobase/pull/6291)) by @sheldon66

- **[cli]** 改進 nocobase upgrade 命令的內部邏輯 ([#6280](https://github.com/nocobase/nocobase/pull/6280)) by @chenos

- **[檔案管理]**
  - 修復繼承集合的遷移 ([#6310](https://github.com/nocobase/nocobase/pull/6310)) by @mytharcher

  - 修復遷移並新增測試案例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

  - 修復遷移並新增測試案例 ([#6288](https://github.com/nocobase/nocobase/pull/6288)) by @mytharcher

  - 修復檔案集合的 `path` 欄位類型 ([#6294](https://github.com/nocobase/nocobase/pull/6294)) by @mytharcher

  - 升級 AWS SDK 版本以修復 MinIO 上傳錯誤 ([#6253](https://github.com/nocobase/nocobase/pull/6253)) by @mytharcher

- **[區塊：模板]** 存取公開表單時需要登入 ([#6258](https://github.com/nocobase/nocobase/pull/6258)) by @gchust

- **[存取控制]** 在集合權限中使用多對多欄位作為資料範圍時，資料記錄不正確 ([#6304](https://github.com/nocobase/nocobase/pull/6304)) by @2013xile

- **[區塊：看板]** 在彈出看板區塊中使用彈出記錄變數時，資料篩選不正確 ([#6290](https://github.com/nocobase/nocobase/pull/6290)) by @katherinehhh

- **[集合欄位：序號]** 修復序號欄位在唯讀模式下未停用的問題 ([#6274](https://github.com/nocobase/nocobase/pull/6274)) by @mytharcher

- **[工作流：測試套件]** 基於新功能修復 E2E 測試案例 ([#6296](https://github.com/nocobase/nocobase/pull/6296)) by @mytharcher

- **[公開表單]** 在公開表單中跳過認證檢查 ([#6284](https://github.com/nocobase/nocobase/pull/6284)) by @chenos

- **[認證]** 從 AdminProvider 中移除不必要的 NavigateIfNotSignIn 包裝。([#6268](https://github.com/nocobase/nocobase/pull/6268)) by @sheldon66

- **[工作流]**
  - 修復工作流畫布中的樣式細節 ([#6240](https://github.com/nocobase/nocobase/pull/6240)) by @mytharcher

  - 支援在變更密碼時觸發工作流 ([#6248](https://github.com/nocobase/nocobase/pull/6248)) by @mytharcher

- **[工作流：自訂動作事件]**
  - 修復建置錯誤 by @mytharcher

  - 修復 E2E 測試案例 by @mytharcher

  - 修復觸發工作流初始化器 by @mytharcher

  - 修復建置錯誤 by @mytharcher

- **[工作流：動作前事件]** 修復來自回應訊息節點的錯誤訊息未顯示的問題 by @mytharcher

- **[工作流：JavaScript]** 支援要求 NocoBase 模組 by @mytharcher

- **[郵件管理]** 公開 mailmessage 集合並修復模態框資料遺失 by @jiannx

- **[檔案儲存：S3(Pro)]**
  - 升級 AWS SDK 版本以修復 MinIO 上傳錯誤。by @mytharcher

  - 將 forcePathStyleForAccess 的預設值設定為 virtual by @jiannx

- **[區塊：多步驟表單]** 拖曳後項目排序錯誤 by @jiannx

- **[區塊：樹狀]** 點擊樹狀區塊節點時發生錯誤 by @zhangzhonghe

- **[備份管理]** 從本機操作對話框還原的刪除圖示無法運作 by @gchust

- **[工作流：審批]**
  - 修復因版本號導致遷移未執行的問題 by @mytharcher

  - 基於新功能修復 E2E 測試案例 by @mytharcher
