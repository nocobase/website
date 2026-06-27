---
title: "已移除：Users 插件中已棄用的認證 API"
description: "了解 NocoBase Users 插件中已棄用認證 API 的移除。此更新以新的 Auth 插件取代舊 API，提升安全性與功能。了解變更內容、新端點以及如何順利轉換。對於在 NocoBase 中管理使用者認證的開發者而言，這是必讀資訊。"
---

在 6 月發佈的 v0.10 版本中，User 插件（`@nocobase/plugin-users`）中的使用者認證功能已由 Auth 插件（`@nocobase/plugin-auth`）取代。User 插件提供的認證相關 API（如登入和註冊）已被棄用。更多詳情請參閱 [NocoBase 0.10：第二季新功能#登入/註冊 API 變更](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes)。

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

User 插件中的認證相關 API 現已移除，詳情請參閱 [PR-3122](https://github.com/nocobase/nocobase/pull/3122)。
