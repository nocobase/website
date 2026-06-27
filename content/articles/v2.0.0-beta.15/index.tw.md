---
title: "NocoBase v2.0.0-beta.15：在 Microsoft 上新增更多可預覽的檔案類型"
description: "v2.0.0-beta.15 版本發布說明"
---

### 🚀 改進

- **[Office 檔案預覽器]** 在 Microsoft 上新增更多可預覽的檔案類型 ([#8500](https://github.com/nocobase/nocobase/pull/8500))，作者：@mytharcher

### 🐛 錯誤修復

- **[資料庫]** 修正重新載入集合後，使用 `empty` 運算子進行篩選時發生的錯誤 ([#8496](https://github.com/nocobase/nocobase/pull/8496))，作者：@2013xile

- **[範本列印]** 修正當角色為聯集時，列印按鈕權限邏輯不正確的問題。作者：@jiannx

- **[工作流程：審核]** 修正 1.x 版本審核記錄彈出視窗中拋出錯誤的問題，作者：@mytharcher

- **[遷移管理員]** 修正因記錄遷移錯誤例外中包含過大 SQL 語句，可能導致程序凍結的問題，作者：@cgyrock
