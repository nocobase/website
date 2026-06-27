---
title: "NocoBase v1.6.0-beta.16: bidang waktu mendukung format waktu"
description: "Catatan Rilis v1.6.0-beta.16"
---

### 🎉 Fitur Baru

- **[client]** Bidang waktu mendukung format waktu ([#6329](https://github.com/nocobase/nocobase/pull/6329)) oleh @katherinehhh

### 🚀 Peningkatan

- **[server]** Upgrade koa ke 2.15.4; upgrade @koa/cors ke 5.0.0 ([#6334](https://github.com/nocobase/nocobase/pull/6334)) oleh @2013xile

- **[Workflow]** Muat hasil job secara lambat untuk performa yang lebih baik ([#6344](https://github.com/nocobase/nocobase/pull/6344)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[auth]** Hindari memperbarui token selama otorisasi WebSocket. ([#6342](https://github.com/nocobase/nocobase/pull/6342)) oleh @sheldon66

- **[client]**
  - Halaman dengan favicon kustom sempat menampilkan favicon NocoBase secara singkat saat memuat ([#6337](https://github.com/nocobase/nocobase/pull/6337)) oleh @zhangzhonghe

  - Tombol tambah baru muncul saat hover dalam mode baca-saja bidang asosiasi ([#6322](https://github.com/nocobase/nocobase/pull/6322)) oleh @katherinehhh

- **[devtools]** Pastikan header X-Forwarded-For hanya diatur jika req.ip tidak undefined. ([#6320](https://github.com/nocobase/nocobase/pull/6320)) oleh @sheldon66

- **[Blok: Peta]** Pengaturan konfigurasi untuk bidang peta hilang/tidak terlihat ([#6336](https://github.com/nocobase/nocobase/pull/6336)) oleh @zhangzhonghe

- **[Mobile]** Kesalahan halaman: Tidak dapat membaca properti dari null (membaca 'match') ([#6335](https://github.com/nocobase/nocobase/pull/6335)) oleh @zhangzhonghe

- **[Pengguna]** UI kesalahan muncul singkat saat tabel manajemen izin pengguna dimuat pertama kali ([#6324](https://github.com/nocobase/nocobase/pull/6324)) oleh @zhangzhonghe

- **[Blok: Panel aksi]** Mengatur tinggi panel aksi tidak valid ([#6321](https://github.com/nocobase/nocobase/pull/6321)) oleh @zhangzhonghe

- **[Aksi: Impor catatan Pro]** Deteksi duplikat catatan pada tombol impor blok asosiasi tidak menampilkan data di dropdown bidang oleh @katherinehhh

- **[Aksi: Ekspor catatan Pro]** Hapus opsi 'tambah blok' di pengaturan tombol lampiran ekspor oleh @katherinehhh

- **[Workflow: Aksi kustom]** Perbaiki migrasi untuk tombol lama yang terikat dengan workflow aksi kustom oleh @mytharcher

- **[Merek kustom]** Halaman dengan favicon kustom sempat menampilkan favicon NocoBase secara singkat saat memuat oleh @zhangzhonghe

- **[Cetak template]** Gagal memulihkan dari lokal ketika plugin cetak template dan manajer cadangan diaktifkan bersamaan oleh @gchust

- **[Workflow: Persetujuan]**
  - Perbaiki error yang disebabkan oleh `.toJSON()` oleh @mytharcher

  - Perbaiki migrasi tidak berjalan karena nomor versi oleh @mytharcher

  - Perbaiki migrasi untuk blok lama oleh @mytharcher
