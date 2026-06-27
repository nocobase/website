---
title: "NocoBase v2.1.9：為欄位值設定新增覆蓋值選項"
description: "v2.1.9 版本發布說明"
---

### 🚀 改進

- **[client-v2]** 為欄位值設定新增覆寫值選項。([#9578](https://github.com/nocobase/nocobase/pull/9578)) @gchust

### 🐛 錯誤修復

- **[client-v2]**
  - 修復自訂操作工作流程觸發按鈕在額外的 `values` 屬性下或作為序列化字串發送自訂上下文 JSON 的問題。([#9815](https://github.com/nocobase/nocobase/pull/9815)) @mytharcher

  - 修復將關聯欄位值設定為固定值或預設值時無法生效的問題。([#9820](https://github.com/nocobase/nocobase/pull/9820)) @gchust

- **[auth]** 登入狀態回應中不再包含加密的密碼資料 ([#9836](https://github.com/nocobase/nocobase/pull/9836)) @2013xile

- **[app]** 在推斷插件公開路徑時忽略不相關的 currentScript ([#9839](https://github.com/nocobase/nocobase/pull/9839)) @chenos

- **[UI 模板]** 修復 ctx.openview 的預設上下文不正確的問題。([#9811](https://github.com/nocobase/nocobase/pull/9811)) @gchust
