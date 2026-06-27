---
title: "NocoBase 每週更新：優化與錯誤修復"
description: "本週更新包括：支援自訂聚合變數、日期欄位篩選中的自訂偏移量等。"
---

彙整每週產品更新日誌，最新版本可至[我們的部落格](https://www.nocobase.com/en/blog/timeline)查看。

**NocoBase 目前有三個分支進行更新：`main`、`next` 和 `develop`。**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`：截至目前最穩定的版本，建議安裝使用；
* `next`：Beta 版本，包含即將推出的新功能，並已進行初步測試。可能存在一些已知或未知的問題。主要提供給測試用戶收集回饋並進一步優化功能。適合想提前體驗新功能並提供回饋的測試用戶；
* `develop`：Alpha 版本，包含最新的功能程式碼，可能不完整或不穩定，主要用於內部開發和快速迭代。適合對產品前沿功能感興趣的技術用戶，但可能存在問題且功能不完整。不建議用於生產環境。

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*發布日期：2025-05-23*

#### 🚀 改進

- **[未定義]** 構建完整的 Docker 映像 ([#6898](https://github.com/nocobase/nocobase/pull/6898)) by @chenos
- **[客戶端]** 優化頁面隨著使用時間增長而變慢的問題 ([#6888](https://github.com/nocobase/nocobase/pull/6888)) by @zhangzhonghe
- **[日曆]** 支援在日曆區塊中配置可重新整理的按鈕 ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh
- **[工作流：自訂操作事件]** 根據 zh-CN 鍵值修正 en-US 語言包 by @mytharcher
- **[工作流：審批]** 支援在工作流任務中心處理所有待辦事項 by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 新增關聯欄位時，因無效的樣式格式導致渲染錯誤 ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh
  - 連結規則中對多對多關聯欄位的空值檢查不正確 ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh
- **[集合欄位：Markdown(Vditor)]** Markdown (Vditor) 欄位未適配主題 ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh
- **[集合：樹]** 避免在路徑更新期間錯誤更新相似的路徑前綴 ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile
- **[檔案管理]**

  - 修正預覽匹配規則 ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher
  - 修正客戶端集合注入與上傳參數 ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher
  - 修正非圖片檔案的預覽 URL ([#6889](https://github.com/nocobase/nocobase/pull/6889)) by @mytharcher
- **[工作流：郵件發送節點]** 處理未定義的 'to' 欄位並改進電子郵件收件人處理邏輯。([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66
- **[工作流：自訂操作事件]**

  - 修正按鈕在點擊幾次後執行不正確的問題 by @mytharcher
  - 修正錯誤處理程序無法透過類別匹配的問題 by @mytharcher
- **[工作流：審批]** 修正關聯附加計算 by @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*發布日期：2025-05-27*

#### 🎉 新功能

- **[操作：匯入記錄 Pro]**
  - 支援在匯入設定中透過多個欄位定義唯一記錄 by @aaaaaajie
  - 支援在匯入設定中設定覆蓋空白儲存格及忽略它們 by @aaaaaajie

#### 🚀 改進

- **[未定義]** 將 CI 的 Node 版本升級至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 連結規則中的 noneOf 條件檢查失敗 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh
  - 區塊高度設定未即時生效 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh
- **[未定義]** 因 commander 套件需求而使用 Node 20 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher
- **[資料庫]** 修正 uuid 或 nanoid 自動生成在多對多關聯中不起作用的問題 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie
- **[操作：匯出記錄]** 修正巢狀關聯無法正確匯出的問題。([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie
- **[資料來源管理器]** 解決拖曳排序無法運作的問題 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos
- **[API 文件]** 在 req.headers 中新增遺漏的子應用資訊 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos
- **[通知：應用內訊息]** 解決應用內訊息中「全部標記為已讀」操作可能影響其他用戶資料的問題。([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66
- **[工作流：自訂操作事件]** 避免因插件載入順序導致的錯誤 by @mytharcher
- **[檔案儲存：S3(Pro)]**

  - 修正預覽 URL 與上傳參數 by @mytharcher
  - 修正重複的上傳參數 by @mytharcher
- **[區塊：多步驟表單]** 修正型別 by @mytharcher
- **[工作流：審批]**

  - 修正 ViewAction 的記錄 ID 不正確 by @mytharcher
  - 修正提交審批流程前的附加與資料計算 by @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*發布日期：2025-05-28*

#### 🎉 新功能

- **[未定義]** 新增支援 Gitpod，可一鍵啟動開發環境並快速開始開發。([#6922](https://github.com/nocobase/nocobase/pull/6922)) by @kerwin612
- **[操作：匯入記錄 Pro]**

  - 支援在匯入設定中透過多個欄位定義唯一記錄 by @aaaaaajie
  - 支援在匯入設定中設定覆蓋空白儲存格及忽略它們 by @aaaaaajie
- **[集合欄位：程式碼]** 為程式碼編輯器欄位新增高度設定 by @mytharcher
- **[電子郵件管理]**

  - 支援將郵件標記為待辦事項並新增備註 by @jiannx
  - 支援標籤與合併設定 by @jiannx

#### 🚀 改進

- **[客戶端]**

  - 改善日期範圍篩選元件的樣式 ([#6939](https://github.com/nocobase/nocobase/pull/6939)) by @katherinehhh
  - 修正隱藏的表單控制項捕獲 Tab 鍵的問題，顯著提升表單操作效率 ([#6942](https://github.com/nocobase/nocobase/pull/6942)) by @kerwin612
  - 在顯示確認對話框前驗證必填欄位 ([#6931](https://github.com/nocobase/nocobase/pull/6931)) by @katherinehhh
  - 調整日期篩選選項內容顯示 ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh
- **[未定義]** 將 CI 的 Node 版本升級至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher

#### 🐛 錯誤修復

- **[客戶端]**

  - 表單標籤冒號可見性設定無效 ([#6947](https://github.com/nocobase/nocobase/pull/6947)) by @katherinehhh
  - 透過拖曳調整區塊大小無效 ([#6944](https://github.com/nocobase/nocobase/pull/6944)) by @chenos
  - 欄位指派元件的 i18n 無效 ([#6945](https://github.com/nocobase/nocobase/pull/6945)) by @katherinehhh
  - 連結規則中的 noneOf 條件檢查失敗 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh
  - 連結規則中的巢狀條件變數渲染不正確 ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh
  - 區塊高度設定未即時生效 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh
  - 修正錯誤彈窗中的複製按鈕複製出 [object Object] 的問題。([#6908](https://github.com/nocobase/nocobase/pull/6908)) by @kerwin612
  - 日期範圍限制中日期變數解析不正確 ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh
- **[資料庫]** 修正 uuid 或 nanoid 自動生成在多對多關聯中不起作用的問題 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie
- **[未定義]** 因 commander 套件需求而使用 Node 20 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher
- **[集合欄位：Markdown(Vditor)]** Markdown-Vditor 欄位元件在縮放後寬度異常 ([#6946](https://github.com/nocobase/nocobase/pull/6946)) by @katherinehhh
- **[API 文件]** 在 req.headers 中新增遺漏的子應用資訊 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos
- **[通知：應用內訊息]** 解決應用內訊息中「全部標記為已讀」操作可能影響其他用戶資料的問題。([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66
- **[資料來源管理器]** 解決拖曳排序無法運作的問題 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos
- **[操作：匯出記錄]** 修正巢狀關聯無法正確匯出的問題。([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie
- **[工作流：自訂操作事件]** 避免因插件載入順序導致的錯誤 by @mytharcher
- **[檔案儲存：S3(Pro)]**

  - 修正重複的上傳參數 by @mytharcher
  - 修正預覽 URL 與上傳參數 by @mytharcher
- **[區塊：多步驟表單]** 修正型別 by @mytharcher
- **[工作流：審批]**

  - 修正 ViewAction 的記錄 ID 不正確 by @mytharcher
  - 修正語言包 by @mytharcher
  - 修正提交審批流程前的附加與資料計算 by @mytharcher
- **[電子郵件管理]**

  - 修正：移除操作欄位 by @jiannx
  - 修正新增備註模態框錯誤 by @jiannx
  - 修正 mailMessageNotes 和 mailMessageLabels 集合的 API 權限 by @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*發布日期：2025-05-28*

#### 🎉 新功能

- **[客戶端]** 支援自訂聚合變數 ([#6916](https://github.com/nocobase/nocobase/pull/6916)) by @zhangzhonghe
  參考：[自訂變數](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[工具]** 支援日期欄位篩選中的自訂偏移量 ([#6854](https://github.com/nocobase/nocobase/pull/6854)) by @katherinehhh
- **[集合欄位：程式碼]** 為程式碼編輯器欄位新增高度設定 by @mytharcher
- **[操作：匯入記錄 Pro]**

  - 支援在匯入設定中透過多個欄位定義唯一記錄 by @aaaaaajie
  - 支援在匯入設定中設定覆蓋空白儲存格及忽略它們 by @aaaaaajie
- **[自訂變數]** 支援自訂聚合變數 by @zhangzhonghe
  參考：[自訂變數](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[電子郵件管理]**

  - 支援將郵件標記為待辦事項並新增備註 by @jiannx
  - 支援標籤與合併設定 by @jiannx

#### 🚀 改進

- **[客戶端]** 調整日期篩選選項內容顯示 ([#6928](https://github.com/nocobase/nocobase/pull/6928)) by @katherinehhh
- **[未定義]** 將 CI 的 Node 版本升級至 20 ([#6927](https://github.com/nocobase/nocobase/pull/6927)) by @mytharcher
- **[日曆]** 支援在日曆區塊中配置可重新整理的按鈕 ([#6920](https://github.com/nocobase/nocobase/pull/6920)) by @katherinehhh
- **[操作：匯入記錄]**

  - 優化 xlsx 匯入效能 ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie
  - 優化 xlsx 匯入效能 ([#6850](https://github.com/nocobase/nocobase/pull/6850)) by @aaaaaajie
- **[操作：匯出記錄]** 匯出至 XLSX 的效能優化 ([#6729](https://github.com/nocobase/nocobase/pull/6729)) by @aaaaaajie
- **[區塊：iframe]** 改善日期變數指派邏輯 ([#6828](https://github.com/nocobase/nocobase/pull/6828)) by @katherinehhh
- **[工作流：自訂操作事件]** 根據 zh-CN 鍵值修正 en-US 語言包 by @mytharcher
- **[操作：匯出記錄 Pro]** 匯出至 XLSX 的效能優化 by @aaaaaajie
- **[工作流：審批]** 支援在工作流任務中心處理所有待辦事項 by @mytharcher
- **[電子郵件管理]** 實作 schema 後發送郵件並支援 AI by @jiannx

#### 🐛 錯誤修復

- **[資料庫]** 修正 uuid 或 nanoid 自動生成在多對多關聯中不起作用的問題 ([#6912](https://github.com/nocobase/nocobase/pull/6912)) by @aaaaaajie
- **[客戶端]**

  - 連結規則中的 noneOf 條件檢查失敗 ([#6934](https://github.com/nocobase/nocobase/pull/6934)) by @katherinehhh
  - 區塊高度設定未即時生效 ([#6904](https://github.com/nocobase/nocobase/pull/6904)) by @katherinehhh
  - 連結規則中的巢狀條件變數渲染不正確 ([#6929](https://github.com/nocobase/nocobase/pull/6929)) by @katherinehhh
  - 日期範圍限制中日期變數解析不正確 ([#6930](https://github.com/nocobase/nocobase/pull/6930)) by @katherinehhh
  - 連結規則中對多對多關聯欄位的空值檢查不正確 ([#6905](https://github.com/nocobase/nocobase/pull/6905)) by @katherinehhh
  - 新增關聯欄位時，因無效的樣式格式導致渲染錯誤 ([#6903](https://github.com/nocobase/nocobase/pull/6903)) by @katherinehhh
  - 子表格內的連結規則中缺少當前物件變數 ([#6907](https://github.com/nocobase/nocobase/pull/6907)) by @katherinehhh
- **[未定義]** 因 commander 套件需求而使用 Node 20 ([#6924](https://github.com/nocobase/nocobase/pull/6924)) by @mytharcher
- **[資料來源管理器]** 解決拖曳排序無法運作的問題 ([#6937](https://github.com/nocobase/nocobase/pull/6937)) by @chenos
- **[API 文件]** 在 req.headers 中新增遺漏的子應用資訊 ([#6933](https://github.com/nocobase/nocobase/pull/6933)) by @chenos
- **[通知：應用內訊息]** 解決應用內訊息中「全部標記為已讀」操作可能影響其他用戶資料的問題。([#6926](https://github.com/nocobase/nocobase/pull/6926)) by @sheldon66
- **[操作：匯出記錄]** 修正巢狀關聯無法正確匯出的問題。([#6917](https://github.com/nocobase/nocobase/pull/6917)) by @aaaaaajie
- **[集合欄位：Markdown(Vditor)]** Markdown (Vditor) 欄位未適配主題 ([#6919](https://github.com/nocobase/nocobase/pull/6919)) by @katherinehhh
- **[集合：樹]** 避免在路徑更新期間錯誤更新相似的路徑前綴 ([#6913](https://github.com/nocobase/nocobase/pull/6913)) by @2013xile
- **[工作流：郵件發送節點]** 處理未定義的 'to' 欄位並改進電子郵件收件人處理邏輯。([#6915](https://github.com/nocobase/nocobase/pull/6915)) by @sheldon66
- **[驗證]** 修正不正確的英文命名：“verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) by @2013xile
- **[檔案管理]**

  - 修正客戶端集合注入與上傳參數 ([#6909](https://github.com/nocobase/nocobase/pull/6909)) by @mytharcher
  - 修正預覽匹配規則 ([#6902](https://github.com/nocobase/nocobase/pull/6902)) by @mytharcher
- **[工作流：自訂操作事件]**

  - 避免因插件載入順序導致的錯誤 by @mytharcher
  - 修正錯誤處理程序無法透過類別匹配的問題 by @mytharcher
  - 修正按鈕在點擊幾次後執行不正確的問題 by @mytharcher
- **[多關鍵字篩選]** 移除每個關鍵字兩側的空白字元 by @zhangzhonghe
- **[雙因素認證 (2FA)]** 啟用 2FA 時需要配置驗證器 by @2013xile
- **[檔案儲存：S3(Pro)]**

  - 修正重複的上傳參數 by @mytharcher
  - 修正預覽 URL 與上傳參數 by @mytharcher
- **[範本列印]** 增強 useFieldsTree 中的 hasChildren 邏輯，加入 uiSchema 枚舉檢查。by @sheldon66
- **[區塊：多步驟表單]** 修正型別 by @mytharcher
- **[工作流：審批]**

  - 修正語言包 by @mytharcher
  - 修正提交審批流程前的附加與資料計算 by @mytharcher
  - 修正關聯附加計算 by @mytharcher
  - 修正 ViewAction 的記錄 ID 不正確 by @mytharcher
- **[電子郵件管理]**

  - 修正 mailMessageNotes 和 mailMessageLabels 集合的 API 權限 by @jiannx
  - 修正新增備註模態框錯誤 by @jiannx
  - 修正：移除操作欄位 by @jiannx
