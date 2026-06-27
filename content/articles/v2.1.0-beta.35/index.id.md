---
title: "NocoBase v2.1.0-beta.35: Bagikan evaluasi kondisi antara aplikasi v1 dan v2"
description: "Catatan Rilis v2.1.0-beta.35"
---

### 🚀 Perbaikan

- **[client]** Membagi evaluasi kondisi antara aplikasi v1 dan v2 ([#9522](https://github.com/nocobase/nocobase/pull/9522)) oleh @zhangzhonghe

- **[Lokalisasi]** Peningkatan tugas terjemahan lokalisasi Lina dengan cakupan terjemahan, pengaturan bahasa referensi, dan pengeditan cepat ([#9521](https://github.com/nocobase/nocobase/pull/9521)) oleh @2013xile

- **[Workflow: Persetujuan]** Meningkatkan persetujuan terkait dengan kartu linimasa oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[undefined]** menyelaraskan jalur konfigurasi nginx ([#9528](https://github.com/nocobase/nocobase/pull/9528)) oleh @chenos

- **[cli-v1]** Memperbaiki startup pengembangan create-nocobase-app dengan menggunakan kembali shell aplikasi yang sudah dipaket sambil mengaktifkan pengembangan plugin lokal. ([#9471](https://github.com/nocobase/nocobase/pull/9471)) oleh @Molunerfinn

- **[client]**
  - Memperbaiki masalah di mana lencana menu masih menampilkan titik ketika nilainya 0 ([#9491](https://github.com/nocobase/nocobase/pull/9491)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana formulir filter tidak dapat menggunakan variabel formulir saat ini ([#9474](https://github.com/nocobase/nocobase/pull/9474)) oleh @zhangzhonghe

- **[Autentikasi]** Mencegah server crash ketika token auth WebSocket merujuk pada authenticator yang plugin tipe auth-nya telah dibongkar atau hilang. ([#9514](https://github.com/nocobase/nocobase/pull/9514)) oleh @Molunerfinn

- **[Kalender]**
  - Memperbaiki masalah di mana item lainnya di kalender tidak dapat ditampilkan sepenuhnya ([#9492](https://github.com/nocobase/nocobase/pull/9492)) oleh @zhangzhonghe

  - Memperbaiki gaya kursor untuk item acara di overlay acara lainnya di kalender ([#9519](https://github.com/nocobase/nocobase/pull/9519)) oleh @jiannx

- **[Pengaturan lisensi]** menyelesaikan bundled deps yang di-symlink ([#9518](https://github.com/nocobase/nocobase/pull/9518)) oleh @chenos
