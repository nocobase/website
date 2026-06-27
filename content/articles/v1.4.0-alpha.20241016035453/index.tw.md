---
title: "NocoBase v1.4.0-alpha.20241016035453：新增附件（URL）欄位"
description: "v1.4.0-alpha.20241016035453 版本發行說明"
---

### 🎉 新功能

- **[sdk]** 允許透過設定 `API_CLIENT_STORAGE_TYPE` 環境變數，將客戶端資訊儲存至 sessionStorage ([#5424](https://github.com/nocobase/nocobase/pull/5424)) by @2013xile
- **[集合欄位：附件(URL)]** 新增附件(URL)欄位 by @katherinehhh

### 🚀 改進

- **[client]**

  - 優化遠端除錯 ([#5394](https://github.com/nocobase/nocobase/pull/5394)) by @chenos
  - 當操作按鈕僅使用圖示時，將圖示置中的樣式優化 ([#5413](https://github.com/nocobase/nocobase/pull/5413)) by @katherinehhh
  - 更新記錄時自動關閉訊息彈窗 ([#5408](https://github.com/nocobase/nocobase/pull/5408)) by @katherinehhh
- **[工作流程：HTTP 請求節點]** 支援 SSE（伺服器推送事件）([#5418](https://github.com/nocobase/nocobase/pull/5418)) by @chenos

### 🐛 錯誤修復

- **[公開表單]** 修復在公開表單上點擊設定的問題 ([#5392](https://github.com/nocobase/nocobase/pull/5392)) by @katherinehhh
- **[client]**

  - 修復預設值輸入框中未顯示值的問題 ([#5400](https://github.com/nocobase/nocobase/pull/5400)) by @zhangzhonghe
  - 修復為子表格設定聯動規則時，找不到關聯欄位的錯誤 ([#5402](https://github.com/nocobase/nocobase/pull/5402)) by @zhangzhonghe
  - 修復當檔案類型預設不支援時，縮圖預覽錯誤的問題 ([#5401](https://github.com/nocobase/nocobase/pull/5401)) by @mytharcher
- **[本地化]** 修復發佈後本地化插件中的翻譯未生效的問題 ([#5416](https://github.com/nocobase/nocobase/pull/5416)) by @2013xile
