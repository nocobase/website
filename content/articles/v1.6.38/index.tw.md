---
title: "NocoBase v1.6.38：錯誤修復"
description: "v1.6.38 版本發行說明"
---

### 🐛 錯誤修復

- **[客戶端]**
  - 修復彈出視窗中建立的區塊集合不正確的問題 ([#6961](https://github.com/nocobase/nocobase/pull/6961))，作者：@zhangzhonghe

  - 修復子頁面中篩選表單預設值無效的問題 ([#6960](https://github.com/nocobase/nocobase/pull/6960))，作者：@zhangzhonghe

  - 無法在角色資料表範圍中展開來自外部資料來源的關聯集合欄位 ([#6958](https://github.com/nocobase/nocobase/pull/6958))，作者：@katherinehhh

  - 修復「溢位內容省略號」選項對關聯欄位無效的問題 ([#6967](https://github.com/nocobase/nocobase/pull/6967))，作者：@zhangzhonghe

  - 修復在簡易閱讀模式下，單行文字欄位值顯示為陣列的問題 ([#6968](https://github.com/nocobase/nocobase/pull/6968))，作者：@zhangzhonghe

- **[認證]** 因過期令牌清理導致的效能問題 ([#6981](https://github.com/nocobase/nocobase/pull/6981))，作者：@2013xile

- **[檔案管理]** 修復阿里雲 OSS 逾時設定 ([#6970](https://github.com/nocobase/nocobase/pull/6970))，作者：@mytharcher

- **[工作流：自訂操作事件]** 修復工作檯初始化器遺漏的問題，作者：@mytharcher

- **[認證：OIDC]** 登入按鈕文字未在地化，作者：@2013xile
