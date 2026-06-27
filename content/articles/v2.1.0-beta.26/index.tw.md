---
title: "NocoBase v2.1.0-beta.26：為關聯區塊新增關聯與解除關聯操作"
description: "v2.1.0-beta.26 版本發行說明"
---

### 🎉 新功能

- **[client]** 為關聯區塊新增關聯與解除關聯操作 ([#9366](https://github.com/nocobase/nocobase/pull/9366)) by @katherinehhh

- **[資料視覺化]** 為區塊插件新增 client-v2 支援 ([#9297](https://github.com/nocobase/nocobase/pull/9297)) by @zhangzhonghe

### 🚀 改進

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) by @Molunerfinn

### 🐛 錯誤修復

- **[client-v2]**
  - 修復部分 v2 頁面無法載入遠端插件的問題 ([#9369](https://github.com/nocobase/nocobase/pull/9369)) by @zhangzhonghe

  - 修復 v2 頁面區塊拖曳佔位符與放置位置的問題 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) by @zhangzhonghe

- **[client]**
  - 修復表單值變更後，聯動規則未重新執行的問題。([#9357](https://github.com/nocobase/nocobase/pull/9357)) by @gchust

  - 修復行動裝置子表格中必填選項欄位在首次選擇時未正確驗證的問題 ([#9352](https://github.com/nocobase/nocobase/pull/9352)) by @katherinehhh

  - 修復 v2 子表格中關聯選擇欄位隱藏快速建立選項的問題 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) by @katherinehhh

  - 修復切換快取頁面後，URL 查詢參數變數失效的問題 ([#9263](https://github.com/nocobase/nocobase/pull/9263)) by @zhangzhonghe

  - 修復網格卡片區塊在更新與重新整理後資料渲染不正確的問題 ([#9351](https://github.com/nocobase/nocobase/pull/9351)) by @katherinehhh

- **[server]** 在檔案系統操作前驗證插件套件名稱 ([#9367](https://github.com/nocobase/nocobase/pull/9367)) by @chenos

- **[undefined]** 修復翻譯文件中的失效連結，並在文件建置中預設啟用失效連結檢測。([#9371](https://github.com/nocobase/nocobase/pull/9371)) by @Molunerfinn

- **[AI 員工]**
  - 修復工作流程中 AI 員工節點讀取關聯欄位附件時的錯誤 ([#9377](https://github.com/nocobase/nocobase/pull/9377)) by @cgyrock

  - 修復工作流程 AI 員工節點在工具指派後未正確結束的問題。([#9381](https://github.com/nocobase/nocobase/pull/9381)) by @cgyrock

- **[區塊：看板]**
  - 改進看板卡片緊湊樣式，並優化快速建立彈出視窗的範本選擇。([#9370](https://github.com/nocobase/nocobase/pull/9370)) by @jiannx

  - 修復 v1 看板區塊中長文字欄位單詞換行的問題 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) by @katherinehhh

  - 修正在彈出視窗或次要頁面情境下，看板關聯區塊使用未解析的執行時期資源參數的問題。([#9350](https://github.com/nocobase/nocobase/pull/9350)) by @jiannx

- **[操作：自訂請求]** 升級 koa 至 v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) by @chenos

- **[集合欄位：公式]** 修復 v2 子表格中公式欄位未觸發自動計算的問題 ([#9354](https://github.com/nocobase/nocobase/pull/9354)) by @katherinehhh

- **[電子郵件管理員]** 修復郵件身分標題顯示問題 by @jiannx
