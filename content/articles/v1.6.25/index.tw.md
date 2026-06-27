---
title: "NocoBase v1.6.25：為授權套件新增發布 CI"
description: "v1.6.25 版本發布說明"
---

### 🎉 新功能

- **[undefined]** 為授權套件新增發布 CI ([#6786](https://github.com/nocobase/nocobase/pull/6786)) by @jiannx

- **[資料視覺化：ECharts]** 為長條圖新增「Y 軸反向」設定 by @2013xile

### 🚀 改進

- **[utils]** 增加篩選按鈕欄位清單的高度，並對欄位進行排序/分類 ([#6779](https://github.com/nocobase/nocobase/pull/6779)) by @zhangzhonghe

- **[client]** 優化子表格新增按鈕樣式，並將分頁器對齊在同一行 ([#6790](https://github.com/nocobase/nocobase/pull/6790)) by @katherinehhh

- **[檔案管理]** 新增 OSS 逾時選項，預設為 10 分鐘 ([#6795](https://github.com/nocobase/nocobase/pull/6795)) by @mytharcher

- **[密碼策略]** 將預設密碼到期時間改為永不到期 by @2013xile

- **[企業微信]** 更新使用者信箱時，優先使用企業信箱而非個人信箱 by @2013xile

### 🐛 錯誤修復

- **[client]**
  - 在折疊區塊中，點擊關聯欄位搜尋框的清除按鈕不應刪除資料範圍 ([#6782](https://github.com/nocobase/nocobase/pull/6782)) by @zhangzhonghe

  - 當顯示來自關聯集合的欄位時，關聯欄位未提交資料 ([#6798](https://github.com/nocobase/nocobase/pull/6798)) by @katherinehhh

  - 禁止將選單移動到頁面頁籤的前方或後方 ([#6777](https://github.com/nocobase/nocobase/pull/6777)) by @zhangzhonghe

  - 表格區塊在篩選時顯示重複資料 ([#6792](https://github.com/nocobase/nocobase/pull/6792)) by @zhangzhonghe

  - 在篩選表單中，切換欄位運算子後重新整理頁面會導致錯誤 ([#6781](https://github.com/nocobase/nocobase/pull/6781)) by @zhangzhonghe

- **[database]**
  - 避免資料型別非字串時拋出錯誤 ([#6797](https://github.com/nocobase/nocobase/pull/6797)) by @mytharcher

  - 為 SQL 集合與檢視集合新增 unavailableActions ([#6765](https://github.com/nocobase/nocobase/pull/6765)) by @katherinehhh

- **[create-nocobase-app]** 暫時透過降級至 2.5.6 來修復 MariaDB 問題 ([#6762](https://github.com/nocobase/nocobase/pull/6762)) by @chenos

- **[認證]** 禁止變更驗證器名稱 ([#6808](https://github.com/nocobase/nocobase/pull/6808)) by @2013xile

- **[範本列印]** 修正：更正權限驗證邏輯以防止未授權操作。 by @sheldon66

- **[檔案儲存：S3(Pro)]** 存取 URL 到期無效 by @jiannx

- **[區塊：樹]** 透過外鍵連接後，點擊觸發篩選導致篩選條件為空 by @zhangzhonghe
