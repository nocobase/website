---
title: "NocoBase v1.6.33：建構完整的 Docker 映像檔"
description: "v1.6.33 版本發行說明"
---

### 🚀 改進項目

- **[undefined]** 建置完整的 Docker 映像檔 ([#6898](https://github.com/nocobase/nocobase/pull/6898))，作者：@chenos

- **[client]** 優化頁面隨著使用時間增長而變慢的問題 ([#6888](https://github.com/nocobase/nocobase/pull/6888))，作者：@zhangzhonghe

- **[Calendar]** 支援在日曆區塊中設定可重新整理的按鈕 ([#6920](https://github.com/nocobase/nocobase/pull/6920))，作者：@katherinehhh

- **[Workflow: Custom action event]** 根據簡體中文鍵值修正英文語系，作者：@mytharcher

- **[Workflow: Approval]** 支援在工作流程任務中心執行所有待辦事項，作者：@mytharcher

### 🐛 錯誤修復

- **[client]**
  - 新增關聯欄位時，因無效的樣式格式導致渲染錯誤 ([#6903](https://github.com/nocobase/nocobase/pull/6903))，作者：@katherinehhh

  - 在聯動規則中，對多關聯欄位的空值檢查不正確 ([#6905](https://github.com/nocobase/nocobase/pull/6905))，作者：@katherinehhh

- **[Collection field: Markdown(Vditor)]** Markdown (Vditor) 欄位未適應主題 ([#6919](https://github.com/nocobase/nocobase/pull/6919))，作者：@katherinehhh

- **[Collection: Tree]** 避免在路徑更新期間錯誤更新相似的路徑前綴 ([#6913](https://github.com/nocobase/nocobase/pull/6913))，作者：@2013xile

- **[File manager]**
  - 修正預覽匹配規則 ([#6902](https://github.com/nocobase/nocobase/pull/6902))，作者：@mytharcher

  - 修正客戶端集合注入與上傳參數 ([#6909](https://github.com/nocobase/nocobase/pull/6909))，作者：@mytharcher

  - 修正非圖片檔案的預覽網址 ([#6889](https://github.com/nocobase/nocobase/pull/6889))，作者：@mytharcher

- **[Workflow: mailer node]** 處理未定義的 'to' 欄位並改善電子郵件收件者處理 ([#6915](https://github.com/nocobase/nocobase/pull/6915))，作者：@sheldon66

- **[Workflow: Custom action event]**
  - 修正按鈕在點擊幾次後執行不正確的問題，作者：@mytharcher

  - 修正錯誤處理器無法透過類別匹配的問題，作者：@mytharcher

- **[Workflow: Approval]** 修正關聯附加計算，作者：@mytharcher
