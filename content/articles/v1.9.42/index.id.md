---
title: "NocoBase v1.9.42: Perbaiki masalah di mana pengguna tidak dapat terdaftar secara otomatis saat ponsel tidak ada"
description: "Catatan Rilis v1.9.42"
---

### 🚀 Perbaikan

- **[Auth: DingTalk]** Gunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan autentikator yang sudah ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[Workflow: Persetujuan]** Perbaiki masalah kinerja yang disebabkan oleh kolom JSON dalam pemuatan daftar (MySQL) oleh @mytharcher

- **[WeCom]** Perbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis saat ponsel tidak tersedia oleh @2013xile
