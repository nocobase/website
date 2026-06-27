---
title: "NocoBase v1.7.0-beta.34：匯入功能增強"
description: "v1.7.0-beta.34 版本發行說明"
---

### 🎉 新功能

- **[未定義]** 新增 Gitpod 支援，可一鍵啟動開發環境，快速開始開發。([#6922](https://github.com/nocobase/nocobase/pull/6922)) 由 @kerwin612 提供
- **[操作：匯入記錄 Pro]**

  - 匯入設定時支援透過多個欄位定義唯一記錄，由 @aaaaaajie 提供
  - 匯入設定時支援覆蓋空白儲存格及忽略空白儲存格的設定，由 @aaaaaajie 提供
- **[集合欄位：程式碼]** 為程式碼編輯器欄位新增高度設定，由 @mytharcher 提供
- **[電子郵件管理員]**

  - 支援將電子郵件標記為待辦事項並新增備註，由 @jiannx 提供
  - 支援標籤與組合設定，由 @jiannx 提供

### 🚀 改進

- **[客戶端]**

  - 改善日期範圍篩選元件的樣式 ([#6939](https://github.com/nocobase/nocobase/pull/6939)) 由 @katherinehhh 提供
  - 修正隱藏表單控制項擷取 Tab 鍵的問題，顯著提升表單操作效率 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) 由 @kerwin612 提供
  - 在顯示確認對話框前驗證必填欄位 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) 由 @katherinehhh 提供
  - 調整日期篩選選項內容顯示 ([#6928](https://github.com/nocobase/nocobase/pull/6928)) 由 @katherinehhh 提供
- **[未定義]** 將 CI 的 Node 版本升級至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) 由 @mytharcher 提供

### 🐛 錯誤修復

- **[客戶端]**

  - 表單標籤冒號可見性設定無效 ([#6947](https://github.com/nocobase/nocobase/pull/6947)) 由 @katherinehhh 提供
  - 透過拖曳調整區塊大小無效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) 由 @chenos 提供
  - 欄位指派元件的 i18n 無效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) 由 @katherinehhh 提供
  - 連結規則中的 noneOf 條件檢查失敗 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) 由 @katherinehhh 提供
  - 連結規則中的巢狀條件變數渲染不正確 ([#6929](https://github.com/nocobase/nocobase/pull/6929)) 由 @katherinehhh 提供
  - 區塊高度設定未即時套用 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) 由 @katherinehhh 提供
  - 修正錯誤彈窗中的複製按鈕複製出 [object Object] 的問題。([#6908](https://github.com/nocobase/nocobase/pull/6908)) 由 @kerwin612 提供
  - 日期範圍限制中的日期變數解析不正確 ([#6930](https://github.com/nocobase/nocobase/pull/6930)) 由 @katherinehhh 提供
- **[資料庫]** 修正多對多關聯中 uuid 或 nanoid 自動產生無效的問題 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) 由 @aaaaaajie 提供
- **[未定義]** 因 commander 套件需求而使用 Node 20 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) 由 @mytharcher 提供
- **[集合欄位：Markdown(Vditor)]** markdown-vditor 欄位元件在縮放後的寬度問題 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) 由 @katherinehhh 提供
- **[API 文件]** 在 req.headers 中新增遺漏的子應用程式資訊 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) 由 @chenos 提供
- **[通知：應用程式內訊息]** 解決應用程式內訊息中「全部標記為已讀」動作可能影響其他使用者資料的問題。([#6926](https://github.com/nocobase/nocobase/pull/6926)) 由 @sheldon66 提供
- **[資料來源管理員]** 解決拖曳排序無效的問題 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) 由 @chenos 提供
- **[操作：匯出記錄]** 修正巢狀關聯無法正確匯出的問題。([#6917](https://github.com/nocobase/nocobase/pull/6917)) 由 @aaaaaajie 提供
- **[工作流程：自訂動作事件]** 避免因外掛載入順序導致的錯誤，由 @mytharcher 提供
- **[檔案儲存：S3(Pro)]**

  - 修正重複的上傳參數，由 @mytharcher 提供
  - 修正預覽網址與上傳參數，由 @mytharcher 提供
- **[區塊：多步驟表單]** 修正型別，由 @mytharcher 提供
- **[工作流程：審核]**

  - 修正 ViewAction 的記錄 ID 不正確，由 @mytharcher 提供
  - 修正語系，由 @mytharcher 提供
  - 修正提交審核流程前的 appends 與資料計算，由 @mytharcher 提供
- **[電子郵件管理員]**

  - 修正：移除動作欄位，由 @jiannx 提供
  - 修正新增備註模態框錯誤，由 @jiannx 提供
  - 修正 mailMessageNotes 與 mailMessageLabels 集合的 API 權限，由 @jiannx 提供
