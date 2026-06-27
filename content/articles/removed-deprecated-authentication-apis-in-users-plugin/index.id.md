---
title: "Dihapus: API autentikasi yang tidak digunakan lagi di plugin Users"
description: "Pelajari tentang penghapusan API autentikasi yang tidak digunakan lagi di plugin Users NocoBase. Pembaruan ini menggantikan API lama dengan plugin Auth baru, meningkatkan keamanan dan fungsionalitas. Pahami perubahan, endpoint baru, dan cara bertransisi dengan lancar. Bacaan penting bagi pengembang yang mengelola autentikasi pengguna di NocoBase."
---

Pada versi v0.10 yang dirilis pada bulan Juni, fungsionalitas autentikasi pengguna di plugin User (`@nocobase/plugin-users`) telah digantikan oleh plugin Auth (`@nocobase/plugin-auth`). API terkait autentikasi, seperti masuk dan daftar, yang disediakan oleh plugin User sudah tidak digunakan lagi. Untuk detail lebih lanjut, lihat [NocoBase 0.10: Fitur baru di kuartal kedua#perubahan api signin/signup](https://blog.nocobase.com/posts/release-v010#signinsignup-api-changes).

```
/api/users:signin -> /api/auth:signIn
/api/users:signup -> /api/auth:signUp
/api/users:signout -> /api/auth:signOut
/api/users:check -> /api/auth:check
```

API terkait autentikasi di plugin user kini telah dihapus, seperti yang dirinci di [PR-3122](https://github.com/nocobase/nocobase/pull/3122).
