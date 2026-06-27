---
title: "NocoBase v2.0.0-alpha.39：為行動裝置適配元件"
description: "v2.0.0-alpha.39 版本發行說明"
---

### 🚀 改善

- **[客戶端]** 為行動裝置調整元件 ([#7870](https://github.com/nocobase/nocobase/pull/7870))，作者：@zhangzhonghe

### 🐛 錯誤修復

- **[客戶端]**
  - 修正預設 JS 欄位設定未使用顯示模式設定的問題。([#7862](https://github.com/nocobase/nocobase/pull/7862))，作者：@gchust

  - 修正因拖曳後刪除參照模板，導致重複模板未顯示的問題 ([#7847](https://github.com/nocobase/nocobase/pull/7847))，作者：@zhangzhonghe

  - 修正無法在篩選表單區塊模型中設定日期欄位預設值的問題。([#7853](https://github.com/nocobase/nocobase/pull/7853))，作者：@gchust

  - 修正審批表單的聯動規則無法運作的問題 ([#7858](https://github.com/nocobase/nocobase/pull/7858))，作者：@zhangzhonghe

  - 修正表格區塊中的快速編輯操作無法正確更新資料的問題。([#7845](https://github.com/nocobase/nocobase/pull/7845))，作者：@gchust

  - 修正富文字欄位無法輸入預設值，以及多選欄位預設值無法選擇多個選項的問題。([#7864](https://github.com/nocobase/nocobase/pull/7864))，作者：@gchust

- **[多應用管理員（已棄用）]** 子應用停止後，發布同步訊息通知其他節點停止對應的子應用 ([#7849](https://github.com/nocobase/nocobase/pull/7849))，作者：@2013xile

- **[工作流：審批]** 修正審批表單的聯動規則無法運作的問題，作者：@zhangzhonghe

- **[電子郵件管理員]** ShadowHtml 重新整理錯誤，作者：@jiannx
