---
title: "NocoBase v1.6.0-alpha.3：從表格中移除 Formily 元件"
description: "v1.6.0-alpha.3 版本發布說明"
---

### 🚀 功能改進

- **[client]** 移除表格中的 Formily 元件，以提升切換表格分頁時的效能 ([#5738](https://github.com/nocobase/nocobase/pull/5738)) - @zhangzhonghe

### 🐛 錯誤修復

- **[client]**
  - 修正在子表單中新增欄位後，欄位未顯示的問題 ([#5827](https://github.com/nocobase/nocobase/pull/5827)) - @zhangzhonghe

  - 修正詳細區塊中變更關聯欄位值後，未立即重新整理的問題 ([#5826](https://github.com/nocobase/nocobase/pull/5826)) - @zhangzhonghe

  - 修正首次啟用「啟用連結」時，點擊連結無法開啟彈窗的問題 ([#5812](https://github.com/nocobase/nocobase/pull/5812)) - @zhangzhonghe

  - 防止關閉彈窗時觸發多次 API 呼叫 ([#5804](https://github.com/nocobase/nocobase/pull/5804)) - @zhangzhonghe

  - 修正行動端登入時重新導向至桌面版頁面的問題 ([#5805](https://github.com/nocobase/nocobase/pull/5805)) - @zhangzhonghe

  - 修正「設定操作」按鈕應靠左對齊 ([#5798](https://github.com/nocobase/nocobase/pull/5798)) - @katherinehhh

- **[build]** 修正外掛建置後前端 JS 檔案快取不正確的問題 ([#5801](https://github.com/nocobase/nocobase/pull/5801)) - @gchust
