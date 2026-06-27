---
title: "NocoBase v2.1.0-beta.36：主題編輯器現已可在 v2 介面中使用"
description: "v2.1.0-beta.36 版本發行說明"
---

### 🎉 新功能

- **[cli]** 新增備份建立與還原指令 ([#9541](https://github.com/nocobase/nocobase/pull/9541)) by @chenos
- **[備份管理員]** 開源備份管理員插件 ([#9550](https://github.com/nocobase/nocobase/pull/9550)) by @chenos
- **[主題編輯器]** 主題編輯器現已可在 v2 介面中使用 ([#9530](https://github.com/nocobase/nocobase/pull/9530)) by @zhangzhonghe
- **[雙因素驗證 (2FA)]** 現在可從 v2 客戶端進行 TOTP 與雙因素驗證的綁定、驗證及設定。 by @Molunerfinn

### 🚀 改進

- **[client]** 優化動作按鈕顯示設定 ([#9510](https://github.com/nocobase/nocobase/pull/9510)) by @katherinehhh
- **[流程引擎]** V2 欄位設定選單現已支援搜尋欄位 ([#9489](https://github.com/nocobase/nocobase/pull/9489)) by @zhangzhonghe
- **[cli]** 改善環境驗證流程 ([#9546](https://github.com/nocobase/nocobase/pull/9546)) by @chenos
- **[undefined]**

  - 為 Pull Request 新增相依性安全審查 ([#9523](https://github.com/nocobase/nocobase/pull/9523)) by @zhangzhonghe
- **[驗證]** 為驗證插件新增 v2 客戶端（管理員設定頁面、使用者中心入口、簡訊 OTP 表單）。 ([#9515](https://github.com/nocobase/nocobase/pull/9515)) by @Molunerfinn
- **[認證]** 自訂品牌設定現已可在 v2 客戶端中正確運作 ([#9543](https://github.com/nocobase/nocobase/pull/9543)) by @zhangzhonghe
- **[區塊：地圖]** 為地圖插件新增 v2 客戶端支援。 ([#9511](https://github.com/nocobase/nocobase/pull/9511)) by @jiannx
- **[自訂品牌]** 自訂品牌設定現已可在 v2 客戶端中使用 by @zhangzhonghe
- **[AI：知識庫]** 啟用 AI 知識庫的向量儲存修改功能 by @cgyrock
- **[工作流：審批]** 為審批指令新增 `async` 標記，以適應工作流畫布中新的節點建立 API by @mytharcher

### 🐛 錯誤修復

- **[client]**

  - 修正在資料範圍連動中，當依賴的關聯欄位變更時清除已選值 ([#9551](https://github.com/nocobase/nocobase/pull/9551)) by @katherinehhh
  - 修正開發模式下載入內建儲存插件時，依賴於本地來源插件具名匯出的問題。 ([#9548](https://github.com/nocobase/nocobase/pull/9548)) by @Molunerfinn
  - 修正子表單中 JS 欄位選單狀態不正確的問題。 ([#9507](https://github.com/nocobase/nocobase/pull/9507)) by @gchust
  - 修正縮小的 v2 區塊在離開編輯模式後變為全寬的問題 ([#9529](https://github.com/nocobase/nocobase/pull/9529)) by @zhangzhonghe
- **[client-v2]** 修正 dnd-kit 相依性註冊不一致的問題。 ([#9544](https://github.com/nocobase/nocobase/pull/9544)) by @jiannx
- **[流程引擎]** 修正 v2 表單中外部資料來源欄位的多重選取問題 ([#9542](https://github.com/nocobase/nocobase/pull/9542)) by @katherinehhh
- **[區塊：iframe]** 修正 iframe 內容未填滿設定的區塊高度的問題 ([#9540](https://github.com/nocobase/nocobase/pull/9540)) by @katherinehhh
- **[AI 員工]**

  - 修正 AI 員工存取唯讀知識庫時的錯誤 ([#9539](https://github.com/nocobase/nocobase/pull/9539)) by @cgyrock
  - 修正當串流工具事件被分割時，AI 工具呼叫卡片未立即顯示的問題 ([#9534](https://github.com/nocobase/nocobase/pull/9534)) by @2013xile
  - 修正 AI 員工存取唯讀知識庫時的錯誤 ([#9538](https://github.com/nocobase/nocobase/pull/9538)) by @cgyrock
- **[動作：匯出記錄]** 改善包含大量關聯欄位時的欄位設定效能 ([#9524](https://github.com/nocobase/nocobase/pull/9524)) by @katherinehhh
- **[動作：批次更新]** 修正批次更新動作在更新失敗後重設載入狀態的問題 ([#9509](https://github.com/nocobase/nocobase/pull/9509)) by @katherinehhh
- **[工作流]** 為手動工作流執行新增載入狀態。 ([#9533](https://github.com/nocobase/nocobase/pull/9533)) by @mytharcher
- **[本地化]** 修正 AI 翻譯任務中內建本地化參考翻譯的問題 ([#9531](https://github.com/nocobase/nocobase/pull/9531)) by @2013xile
- **[遷移管理員]** 修正使用 OceanBase 時遷移檔案建立失敗的問題 by @2013xile
- **[檔案儲存：S3(Pro)]** 修正 S3 Pro 端點處理方式，使伺服器上傳與 URL 預覽不會重複 bucket 主機。 by @mytharcher
