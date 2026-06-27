---
title: "NocoBase v2.0.0-alpha.55：在獲取應用維護訊息時，若缺少應用實例導致錯誤，增加容錯機制"
description: "v2.0.0-alpha.55 版本發行說明"
---

### 🚀 改進

- **[伺服器]** 在擷取應用程式維護訊息時，若缺少應用程式實例導致錯誤，新增容錯機制 ([#8196](https://github.com/nocobase/nocobase/pull/8196)) by @2013xile

- **[區塊：列表]** 為表格、列表和網格卡片區塊新增連結按鈕 ([#8194](https://github.com/nocobase/nocobase/pull/8194)) by @katherinehhh

### 🐛 錯誤修復

- **[客戶端]** 修正勾選篩選條件中的「否」時，仍套用「是」篩選條件的問題。([#8170](https://github.com/nocobase/nocobase/pull/8170)) by @gchust

- **[遷移管理工具]** 修正遺失遷移描述的問題，並將目前時間設為預設值 by @cgyrock
