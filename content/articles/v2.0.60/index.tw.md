---
title: "NocoBase v2.0.60：改進了 LLM Base URL 欄位，使其在建立和編輯表單中可以使用全域範圍變數"
description: "v2.0.60 版本發布說明"
---

### 🚀 改進

- **[AI 員工]** 改進了 LLM 基礎 URL 欄位，使其在建立和編輯表單中可以使用全域範圍變數。([#9615](https://github.com/nocobase/nocobase/pull/9615))，作者 @cgyrock

### 🐛 錯誤修復

- **[客戶端]** 修正頂部導覽列中徽章的寬度 ([#9607](https://github.com/nocobase/nocobase/pull/9607))，作者 @zhangzhonghe
- **[AI 員工]** 修正當引用的表格區塊被移除後，AI 快捷按鈕取得空白區塊上下文的問題。([#9617](https://github.com/nocobase/nocobase/pull/9617))，作者 @cgyrock
- **[遷移管理員]** 修正 PostgreSQL 遷移差異，使當本地欄位變成繼承欄位時，不會刪除子繼承欄位。作者 @hongboji
