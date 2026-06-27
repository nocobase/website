---
title: "NocoBase v1.7.0-beta.8: Dukungan variabel lingkungan di URL tombol tautan"
description: "Catatan Rilis v1.7.0-beta.8"
---

### 🎉 Fitur Baru

- **[client]** Dukungan pengaturan gaya bidang untuk ukuran font, ketebalan font, dan gaya font ([#6489](https://github.com/nocobase/nocobase/pull/6489)) oleh @katherinehhh

- **[Variabel dan rahasia]** dukungan variabel lingkungan di URL tombol tautan ([#6494](https://github.com/nocobase/nocobase/pull/6494)) oleh @katherinehhh

### 🚀 Peningkatan

- **[client]** dukungan pencocokan fuzzy untuk bidang yang dipilih di tombol filter ([#6496](https://github.com/nocobase/nocobase/pull/6496)) oleh @katherinehhh

- **[Workflow: node mailer]** Menambahkan deskripsi konfigurasi bidang secure. ([#6510](https://github.com/nocobase/nocobase/pull/6510)) oleh @sheldon66

- **[Klien WEB]** menambahkan prompt konfirmasi sekunder untuk Hapus Cache ([#6505](https://github.com/nocobase/nocobase/pull/6505)) oleh @katherinehhh

- **[Notifikasi: Email]** Menambahkan deskripsi konfigurasi bidang secure. ([#6501](https://github.com/nocobase/nocobase/pull/6501)) oleh @sheldon66

- **[Manajer Email]** dukungan otorisasi ulang & pilih akun secara otomatis saat mengirim email oleh @jiannx

### 🐛 Perbaikan Bug

- **[server]** Perintah upgrade dapat menyebabkan kesalahan alur kerja ([#6524](https://github.com/nocobase/nocobase/pull/6524)) oleh @gchust

- **[client]**
  - tinggi sub-tabel dalam formulir diatur bersamaan dengan tinggi formulir ([#6518](https://github.com/nocobase/nocobase/pull/6518)) oleh @katherinehhh

  - kesalahan pengiriman bidang waktu di lokal China (sintaks input tidak valid untuk tipe waktu) ([#6511](https://github.com/nocobase/nocobase/pull/6511)) oleh @katherinehhh

  - transparansi tombol aksi menyebabkan masalah tampilan pengaturan saat dihover ([#6529](https://github.com/nocobase/nocobase/pull/6529)) oleh @katherinehhh

- **[Autentikasi]**
  - Memotong opsi authenticator ([#6527](https://github.com/nocobase/nocobase/pull/6527)) oleh @2013xile

  - X-Authenticator hilang ([#6526](https://github.com/nocobase/nocobase/pull/6526)) oleh @chenos

- **[Blok: Peta]**
  - masalah manajemen kunci blok peta yang menyebabkan kegagalan permintaan karena karakter tak terlihat ([#6521](https://github.com/nocobase/nocobase/pull/6521)) oleh @katherinehhh

  - bidang kunci rahasia tidak memicu validasi dalam manajemen peta ([#6509](https://github.com/nocobase/nocobase/pull/6509)) oleh @katherinehhh

- **[Manajer Berkas]** Tidak dapat mengakses file yang disimpan di COS ([#6512](https://github.com/nocobase/nocobase/pull/6512)) oleh @chenos

- **[Aksi: Ekspor rekaman Pro]** Tidak dapat mengekspor lampiran oleh @chenos

- **[Manajer Cadangan]** Pemulihan dapat menyebabkan kesalahan eksekusi alur kerja oleh @gchust

- **[WeCom]** Selesaikan variabel lingkungan dan rahasia saat mengambil konfigurasi notifikasi. oleh @2013xile

- **[Workflow: Persetujuan]**
  - Perbaiki kesalahan tabel proses saat pekerjaan dihapus oleh @mytharcher

  - Perbaiki kesalahan yang muncul saat menambahkan hasil node kueri oleh @mytharcher

  - Perbaiki crash yang disebabkan oleh pengguna null oleh @mytharcher
