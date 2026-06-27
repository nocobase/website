---
title: "NocoBase v1.7.0-beta.27：支援在二次確認標題與內容中使用變數"
description: "v1.7.0-beta.27 版本發行說明"
---

### 🎉 新功能

- **[客戶端]** 支援在二次確認標題與內容中使用變數 ([#6787](https://github.com/nocobase/nocobase/pull/6787)) - 作者 @katherinehhh

- **[範本列印]**
  - 文件範本支援動態圖片與條碼渲染。 - 作者 @sheldon66

  - 功能：範本列印支援 `{ label, value }` 選擇選項。 - 作者 @sheldon66

- **[區塊：樹狀]** 篩選樹狀區塊支援聯動規則 - 作者 @katherinehhh

- **[資料視覺化：ECharts]** 長條圖新增「Y 軸反向」設定 - 作者 @2013xile

### 🚀 改進

- **[客戶端]** 優化子表格新增按鈕樣式，並將分頁器對齊至同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) - 作者 @katherinehhh

- **[檔案管理]** 新增 OSS 超時選項，預設為 10 分鐘 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) - 作者 @mytharcher

- **[密碼策略]** 將預設密碼到期時間改為永不到期 - 作者 @2013xile

### 🐛 錯誤修復

- **[資料庫]**
  - 修正測試案例 ([#6811](https://github.com/nocobase/nocobase/pull/6811)) - 作者 @mytharcher

  - 避免資料型別非字串時拋出錯誤 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) - 作者 @mytharcher

- **[客戶端]**
  - 變數選擇需要非同步載入時，最後選取的選單會遺失 ([#6802](https://github.com/nocobase/nocobase/pull/6802)) - 作者 @gchust

  - 修復一對多欄位的子欄位無法在篩選表單中作為篩選選項的問題 ([#6809](https://github.com/nocobase/nocobase/pull/6809)) - 作者 @zhangzhonghe

  - 子表格中子表單（彈窗）內配置聯動規則的問題 ([#6803](https://github.com/nocobase/nocobase/pull/6803)) - 作者 @katherinehhh

  - 表單欄位違反驗證規則時顯示多條錯誤訊息 ([#6805](https://github.com/nocobase/nocobase/pull/6805)) - 作者 @katherinehhh

  - 關聯欄位在顯示關聯集合的欄位時未提交資料 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) - 作者 @katherinehhh

  - 子表格中子表單（彈窗）聯動規則缺少欄位屬性設定 ([#6800](https://github.com/nocobase/nocobase/pull/6800)) - 作者 @katherinehhh

- **[認證]** 禁止變更認證器名稱 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) - 作者 @2013xile

- **[動作：自訂請求]** 自訂請求回應設為變數時顯示不正確 ([#6793](https://github.com/nocobase/nocobase/pull/6793)) - 作者 @katherinehhh
