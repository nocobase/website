---
title: "NocoBase v1.8.0-beta.11: Dukungan permintaan `multipart/form-data`"
description: "Catatan Rilis v1.8.0-beta.11"
---

### 🎉 Fitur Baru

- **[Workflow: Node permintaan HTTP]** Mendukung permintaan `multipart/form-data` ([#7087](https://github.com/nocobase/nocobase/pull/7087)) oleh @shushu992

### 🚀 Peningkatan

- **[Workflow]**
  - Optimalkan gaya seluler ([#7040](https://github.com/nocobase/nocobase/pull/7040)) oleh @mytharcher

  - Sesuaikan API dari `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) oleh @mytharcher

- **[Formulir publik]** Optimalkan kinerja komponen tanggal di formulir publik ([#7117](https://github.com/nocobase/nocobase/pull/7117)) oleh @zhangzhonghe

- **[Workflow: Event pra-tindakan]** Sesuaikan API variabel oleh @mytharcher

- **[Workflow: Persetujuan]** Sesuaikan API variabel oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Batasan rentang yang salah pada bidang tanggal dengan waktu ([#7107](https://github.com/nocobase/nocobase/pull/7107)) oleh @katherinehhh

  - Ketika variabel parameter kueri URL kosong, kondisi lingkup data tidak dihapus ([#7104](https://github.com/nocobase/nocobase/pull/7104)) oleh @zhangzhonghe

- **[Workflow]**
  - Perbaiki parameter pemuatan rekaman di tugas ([#7123](https://github.com/nocobase/nocobase/pull/7123)) oleh @mytharcher

  - Perbaiki pemeriksaan yang salah pada angka integer besar ([#7099](https://github.com/nocobase/nocobase/pull/7099)) oleh @mytharcher

  - Perbaiki statistik yang terhapus secara berantai oleh versi workflow non-saat ini ([#7103](https://github.com/nocobase/nocobase/pull/7103)) oleh @mytharcher

- **[Seluler]** Perbaiki masalah z-index popup seluler ([#7110](https://github.com/nocobase/nocobase/pull/7110)) oleh @zhangzhonghe

- **[Klien WEB]** Perbaiki masalah di mana blok di bawah halaman tidak ditampilkan setelah mengatur izin menu peran ([#7112](https://github.com/nocobase/nocobase/pull/7112)) oleh @aaaaaajie

- **[Kalender]** Masalah bidang tanggal di formulir buat cepat blok kalender ([#7106](https://github.com/nocobase/nocobase/pull/7106)) oleh @katherinehhh

- **[Aksi: Impor rekaman]** Selesaikan masalah kegagalan login setelah impor massal nama pengguna dan kata sandi ([#7076](https://github.com/nocobase/nocobase/pull/7076)) oleh @aaaaaajie

- **[Workflow: Persetujuan]**
  - Perbaiki kesalahan yang muncul ketika koleksi terkait persetujuan dihapus oleh @mytharcher

  - Perbaiki gaya seluler oleh @mytharcher

  - Perbaiki nama variabel pemohon di pemicu oleh @mytharcher

  - Hanya peserta yang dapat melihat (mendapatkan) detail persetujuan oleh @mytharcher

  - Perbaiki API variabel lama yang memunculkan kesalahan oleh @mytharcher
