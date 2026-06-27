---
title: "NocoBase v2.1.0-beta.44: Memperbaiki masalah data bidang relasi yang dipilih tidak ditampilkan di perangkat seluler"
description: "Catatan Rilis v2.1.0-beta.44"
---

### 🚀 Peningkatan

- **[Workflow: Persetujuan]** Menyesuaikan aturan validasi untuk pemicu persetujuan dan konfigurasi node guna memastikan field terkait UI tersedia. oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah data field relasi yang dipilih tidak ditampilkan di perangkat seluler. ([#9665](https://github.com/nocobase/nocobase/pull/9665)) oleh @zhangzhonghe
- **[client-v2]**

  - Memperbaiki error penyimpanan aturan tautan menu. ([#9666](https://github.com/nocobase/nocobase/pull/9666)) oleh @zhangzhonghe
  - Memperbaiki jarak berlebihan di atas blok pada halaman v2. ([#9647](https://github.com/nocobase/nocobase/pull/9647)) oleh @zhangzhonghe
- **[flow-engine]** Memperbaiki masalah halaman macet saat mengatur nilai field untuk subform. ([#9598](https://github.com/nocobase/nocobase/pull/9598)) oleh @gchust
- **[Karyawan AI]**

  - Memperbaiki validasi URL dasar penyedia AI. ([#9667](https://github.com/nocobase/nocobase/pull/9667)) oleh @cgyrock
  - Memperbaiki error `ctx.get` di node workflow karyawan AI. ([#9661](https://github.com/nocobase/nocobase/pull/9661)) oleh @cgyrock
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki risiko injeksi SQL pada filter stempel waktu saluran notifikasi dalam aplikasi. ([#9630](https://github.com/nocobase/nocobase/pull/9630)) oleh @mytharcher
- **[Aksi: Duplikat rekaman]** Memperbaiki masalah status tombol tidak direset saat pengiriman duplikat rekaman gagal. ([#9676](https://github.com/nocobase/nocobase/pull/9676)) oleh @katherinehhh
- **[Kalender]** Memperbaiki masalah warna acara kalender tidak dirender dari field warna yang dikonfigurasi di halaman v2. ([#9677](https://github.com/nocobase/nocobase/pull/9677)) oleh @jiannx
- **[Flow engine]**

  - Memperbaiki masalah modifikasi blok setelah menduplikasi templatnya yang secara tidak sengaja dapat memengaruhi konten blok asli. ([#9664](https://github.com/nocobase/nocobase/pull/9664)) oleh @gchust
  - Memperbaiki masalah penyeretan tab popup untuk mengurutkan ulang tidak berfungsi. ([#9602](https://github.com/nocobase/nocobase/pull/9602)) oleh @gchust
