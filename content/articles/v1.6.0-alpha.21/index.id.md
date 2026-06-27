---
title: "NocoBase v1.6.0-alpha.21: perbaiki kesalahan aplikasi saat konfigurasi pembatasan IP tidak ada"
description: "Catatan Rilis v1.6.0-alpha.21"
---

### 🎉 Fitur Baru

- **[Pembatasan IP]** Memperbaiki error aplikasi saat konfigurasi pembatasan IP tidak ada. oleh @sheldon66

### 🐛 Perbaikan Bug

- **[auth]** Memperbarui logika middleware autentikasi klien untuk mencegah kegagalan pembaruan token akibat konkurensi. ([#6135](https://github.com/nocobase/nocobase/pull/6135)) oleh @sheldon66
