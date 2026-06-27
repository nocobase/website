---
title: "已移除：用户插件中弃用的认证API"
description: "了解NocoBase用户插件中弃用认证API的移除情况。本次更新用新的Auth插件替换了旧API，提升了安全性和功能性。了解变更内容、新端点以及如何平稳过渡。对于在NocoBase中管理用户认证的开发者来说，这是必读内容。"
---

Trong phiên bản v0.10 phát hành vào tháng 6, chức năng xác thực người dùng trong plugin User (`@nocobase/plugin-users`) đã được thay thế bởi plugin Auth (`@nocobase/plugin-auth`). Các API liên quan đến xác thực, như đăng nhập và đăng ký, do plugin User cung cấp đã bị loại bỏ. Để biết thêm chi tiết, tham khảo [NocoBase 0.10: Các tính năng mới trong quý 2#thay đổi api đăng nhập/đăng ký](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes).

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

Các API liên quan đến xác thực trong plugin user hiện đã bị xóa, như được chi tiết trong [PR-3122](https://github.com/nocobase/nocobase/pull/3122).
