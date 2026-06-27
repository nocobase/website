---
title: "NocoBase v1.3.34-beta：篩選表單欄位配置改進"
description: "v1.3.34-beta 版本發布說明"
---

### 🎉 新功能

- **[測試]** 篩選表單中的關聯欄位支援設定是否允許多選 ([#5451](https://github.com/nocobase/nocobase/pull/5451)) - 作者：@zhangzhonghe

- **[客戶端]** 新增名為「父層物件」的變數 ([#5449](https://github.com/nocobase/nocobase/pull/5449)) - 作者：@zhangzhonghe
參考資料：[父層物件](https://docs.nocobase.com/handbook/ui/variables#parent-object)

### 🐛 錯誤修復

- **[客戶端]**
  - 修正 URL 搜尋參數變數未被解析的問題 ([#5454](https://github.com/nocobase/nocobase/pull/5454)) - 作者：@zhangzhonghe

  - 修正巢狀子表格中選取帶有資料範圍的關聯資料時，資料被清除的錯誤 ([#5441](https://github.com/nocobase/nocobase/pull/5441)) - 作者：@katherinehhh

  - 修正表格列選取時的背景顏色 ([#5445](https://github.com/nocobase/nocobase/pull/5445)) - 作者：@mytharcher

- **[區塊：地圖]** 移除表格欄位中地圖欄位的縮放層級設定 ([#5457](https://github.com/nocobase/nocobase/pull/5457)) - 作者：@katherinehhh

- **[檔案管理]** 修正唯讀欄位中呼叫儲存規則鉤子的問題 ([#5447](https://github.com/nocobase/nocobase/pull/5447)) - 作者：@mytharcher

- **[資料來源：主要]** 修正因元件變更導致 e2e 測試失敗的問題 ([#5437](https://github.com/nocobase/nocobase/pull/5437)) - 作者：@mytharcher
