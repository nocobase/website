---
title: "NocoBase v1.8.0-alpha.5：支援透過掃描 QR Code 填寫輸入欄位"
description: "v1.8.0-alpha.5 版本發行說明"
---

### 🚀 功能改進

- **[客戶端]**
  - 支援透過掃描 QR Code 填寫輸入欄位 ([#6943](https://github.com/nocobase/nocobase/pull/6943)) @katherinehhh

  - 支援 Markdown 區塊內容的本地化 ([#6941](https://github.com/nocobase/nocobase/pull/6941)) @katherinehhh

  - 禁止將群組選單移動到自身內部 ([#7005](https://github.com/nocobase/nocobase/pull/7005)) @zhangzhonghe

- **[集合欄位：多對多（陣列）]** 修正資料表中顯示多對多（多）欄位時的權限相關錯誤。 ([#7028](https://github.com/nocobase/nocobase/pull/7028)) @aaaaaajie

- **[日曆]** 支援在日曆區塊中設定每週起始日 ([#7032](https://github.com/nocobase/nocobase/pull/7032)) @katherinehhh

- **[集合欄位：Markdown(Vditor)]** 支援 Markdown (Vditor) 預覽模式下點擊圖片放大 ([#7024](https://github.com/nocobase/nocobase/pull/7024)) @katherinehhh

### 🐛 錯誤修復

- **[客戶端]**
  - 二級彈窗表單中設定欄位時自動關閉的問題 ([#7052](https://github.com/nocobase/nocobase/pull/7052)) @katherinehhh

  - 修復因重複 API 請求導致區塊範本中欄位不顯示的問題 ([#6985](https://github.com/nocobase/nocobase/pull/6985)) @zhangzhonghe

  - 二級彈窗表單中設定欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) @katherinehhh

  - 篩選表單驗證規則導致篩選按鈕失效 ([#6975](https://github.com/nocobase/nocobase/pull/6975)) @zhangzhonghe

  - 二級彈窗表單中設定欄位時自動關閉的問題 ([#7042](https://github.com/nocobase/nocobase/pull/7042)) @katherinehhh

  - 篩選表單聯動規則中選擇欄位選項無效 ([#7035](https://github.com/nocobase/nocobase/pull/7035)) @katherinehhh

  - 無法使用聯動規則清除子表格的必填欄位指示 ([#7022](https://github.com/nocobase/nocobase/pull/7022)) @zhangzhonghe

  - 修復篩選區塊參數錯誤問題 ([#6966](https://github.com/nocobase/nocobase/pull/6966)) @zhangzhonghe

  - 修復目前使用者資料為空的問題 ([#7016](https://github.com/nocobase/nocobase/pull/7016)) @zhangzhonghe

  - 聯動規則中目前物件變數無效 ([#7008](https://github.com/nocobase/nocobase/pull/7008)) @zhangzhonghe

  - 解決區塊無法從外部資料來源讀取檢視資料的問題。 ([#7017](https://github.com/nocobase/nocobase/pull/7017)) @aaaaaajie

  - 為每個欄位使用獨立的變數作用域 ([#7012](https://github.com/nocobase/nocobase/pull/7012)) @mytharcher

- **[資料視覺化]**
  - 圖表篩選器中日期範圍欄位顯示不正確 ([#7051](https://github.com/nocobase/nocobase/pull/7051)) @katherinehhh

  - 圖表中的核取方塊群組欄位應顯示標籤而非原始值 ([#7033](https://github.com/nocobase/nocobase/pull/7033)) @2013xile

- **[動作：匯入記錄]**
  - 修正 xlsx 匯入，限制文字區域欄位不接受非字串格式資料 ([#7049](https://github.com/nocobase/nocobase/pull/7049)) @aaaaaajie

  - 修正在涉及關聯欄位時子表格匯入失敗的問題 ([#7039](https://github.com/nocobase/nocobase/pull/7039)) @aaaaaajie

  - 修正匯入 XLSX 樹狀表格資料時，批次編輯過程中發生的錯誤 ([#7013](https://github.com/nocobase/nocobase/pull/7013)) @aaaaaajie

- **[API 文件]** 非 NocoBase 官方插件無法顯示 API 文件 ([#7045](https://github.com/nocobase/nocobase/pull/7045)) @chenzhizdt

- **[工作流]**
  - 修復排程觸發器中 `toJSON()` 導致的錯誤 ([#7037](https://github.com/nocobase/nocobase/pull/7037)) @mytharcher

  - 修正在觸發器未正確設定時，手動執行操作拋出錯誤的問題 ([#7036](https://github.com/nocobase/nocobase/pull/7036)) @mytharcher

  - 修復工作流不存在時的 UI 錯誤 ([#7023](https://github.com/nocobase/nocobase/pull/7023)) @mytharcher

  - 修復在「建立或更新」模式下，當建立操作未變更欄位時，集合事件未觸發的問題 ([#7015](https://github.com/nocobase/nocobase/pull/7015)) @mytharcher

- **[行動端]** 優化行動端彈窗延遲問題 ([#7029](https://github.com/nocobase/nocobase/pull/7029)) @zhangzhonghe

- **[資料來源管理器]** 移除 possibleTypes 的資料庫依賴，強制採用 API 驅動配置 ([#7019](https://github.com/nocobase/nocobase/pull/7019)) @aaaaaajie

- **[動作：匯出記錄 Pro]** 修正在有條件下匯出附件時發生的錯誤。 @aaaaaajie
