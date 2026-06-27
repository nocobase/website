---
title: "NocoBase v1.6.0-alpha.18: Dukungan Pembatasan IP"
description: "Catatan Rilis v1.6.0-alpha.18"
---

### 🎉 Fitur Baru

- **[Klien WEB]** Mendukung konfigurasi izin untuk tab halaman dan menambahkan halaman manajemen rute ([#5955](https://github.com/nocobase/nocobase/pull/5955)) oleh @zhangzhonghe
Referensi: [Rute](https://docs.nocobase.com/handbook/routes)
- **[Pembatasan IP]** Mendukung pembatasan IP. oleh @sheldon66
Referensi: [Pembatasan IP](https://docs.nocobase.com/handbook/IP-restriction)
### 🚀 Peningkatan

- **[server]**
  - memindahkan AesEncryptor ke inti ([#6132](https://github.com/nocobase/nocobase/pull/6132)) oleh @chenos

  - 1. Menambahkan middleware server untuk mengekstrak alamat IP klien.<br />2. Memperbaiki masalah reload tak terbatas saat IP diblokir.<br />3. Menambahkan header HTTP `X-Forwarded-For` di proxy untuk mengaktifkan penerusan untuk debugging lokal. ([#6069](https://github.com/nocobase/nocobase/pull/6069)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[Autentikasi]** Memperbarui aturan migrasi untuk token yang diterbitkan dan konfigurasi kebijakan token. ([#6107](https://github.com/nocobase/nocobase/pull/6107)) oleh @sheldon66
