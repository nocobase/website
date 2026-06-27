---
title: "NocoBase v1.7.0-alpha.15：支援自訂聚合變數"
description: "v1.7.0-alpha.15 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援自訂聚合變數 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
參考：[自訂變數](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[工具]** 支援日期欄位篩選中的自訂偏移量 ([#6854](https://github.com/nocobase/nocobase/pull/6854)) by @katherinehhh

- **[集合欄位：程式碼]** 為程式碼編輯器欄位新增高度設定 by @mytharcher

- **[動作：匯入記錄 Pro]**
  - 支援在匯入設定中透過多個欄位定義唯一記錄 by @aaaaaajie

  - 支援在匯入設定中覆寫空白儲存格及忽略它們的設定 by @aaaaaajie

- **[自訂變數]** 支援自訂聚合變數 by @zhangzhonghe
參考：[自訂變數](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[電子郵件管理員]**
  - 支援將郵件標記為待辦事項並新增備註 by @jiannx

  - 支援標籤與合併設定 by @jiannx

### 🚀 改進

- **[客戶端]** 調整日期篩選選項內容顯示 ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh

- **[未定義]** 將 CI 的 Node 版本升級至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

- **[日曆]** 支援在日曆區塊中設定可配置的重新整理按鈕 ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh

- **[動作：匯入記錄]**
  - 最佳化 xlsx 匯入效能 ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie

  - 最佳化 xlsx 匯入效能 ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie

- **[動作：匯出記錄]** 匯出至 XLSX 的效能最佳化 ([#6729](https://github.com/nocobase/nocobase/pull/6729)) by @aaaaaajie

- **[區塊：iframe]** 改善日期變數指派邏輯 ([#6828](https://github.com/nocobase/nocobase/pull/6828)) by @katherinehhh

- **[工作流程：自訂動作事件]** 根據 zh-CN 鍵值修正 en-US 語系 by @mytharcher

- **[動作：匯出記錄 Pro]** 匯出至 XLSX 的效能最佳化 by @aaaaaajie

- **[工作流程：審核]** 支援在工作流程任務中心執行所有待辦事項 by @mytharcher

- **[電子郵件管理員]** 實作結構後發送郵件並支援 AI by @jiannx

### 🐛 錯誤修復

- **[資料庫]** 修正 uuid 或 nanoid 自動生成在多對多關聯中無法運作的問題 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie

- **[客戶端]**
  - 連結規則中 noneOf 條件檢查失敗 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh

  - 區塊高度設定未即時套用 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh

  - 連結規則中的巢狀條件變數未正確渲染 ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh

  - 日期範圍限制中日期變數解析錯誤 ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh

  - 連結規則中對多關聯欄位的空值檢查錯誤 ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh

  - 新增關聯欄位時因無效樣式格式導致的渲染錯誤 ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh

  - 子表格內連結規則缺少當前物件變數 ([#6907](https://github.com/nocobase/nocobase/pull/6907)) by @katherinehhh

- **[未定義]** 因 commander 套件需求而使用 Node 20 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher

- **[資料來源管理員]** 解決拖曳排序無法運作的問題 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos

- **[API 文件]** 在 req.headers 中補上遺漏的子應用資訊 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos

- **[通知：應用內訊息]** 解決應用內訊息中「全部標為已讀」動作可能影響其他使用者資料的問題 ([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66

- **[動作：匯出記錄]** 修正巢狀關聯無法正確匯出的問題 ([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie

- **[集合欄位：Markdown(Vditor)]** Markdown (Vditor) 欄位未適應主題 ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh

- **[集合：樹狀]** 避免路徑更新時錯誤更新相似路徑前綴 ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile

- **[工作流程：郵件節點]** 處理未定義的「收件人」欄位並改善電子郵件收件者處理 ([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66

- **[驗證]** 修正錯誤的英文命名：「verificators」→「verifiers」([#6834](https://github.com/nocobase/nocobase/pull/6834)) by @2013xile

- **[檔案管理員]**
  - 修正客戶端集合注入與上傳參數 ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher

  - 修正預覽匹配規則 ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher

- **[工作流程：自訂動作事件]**
  - 避免因外掛載入順序導致的錯誤 by @mytharcher

  - 修正錯誤處理器無法透過類別匹配的問題 by @mytharcher

  - 修正按鈕在點擊數次後執行不正確的問題 by @mytharcher

- **[多關鍵字篩選]** 移除每個關鍵字兩側的空白字元 by @zhangzhonghe

- **[雙因素驗證 (2FA)]** 啟用 2FA 時需要配置驗證器 by @2013xile

- **[檔案儲存：S3(Pro)]**
  - 修正重複的上傳參數 by @mytharcher

  - 修正預覽網址與上傳參數 by @mytharcher

- **[範本列印]** 增強 useFieldsTree 中的 hasChildren 邏輯，加入 uiSchema 列舉檢查 by @sheldon66

- **[區塊：多步驟表單]** 修正型別 by @mytharcher

- **[工作流程：審核]**
  - 修正語系 by @mytharcher

  - 修正提交審核流程前的附加資料與資料計算 by @mytharcher

  - 修正關聯附加資料計算 by @mytharcher

  - 修正 ViewAction 的錯誤記錄 ID by @mytharcher

- **[電子郵件管理員]**
  - 修正 mailMessageNotes 與 mailMessageLabels 集合的 API 權限 by @jiannx

  - 修正新增備註模態框錯誤 by @jiannx

  - 修正：移除動作欄位 by @jiannx
