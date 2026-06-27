---
title: "NocoBase v1.8.32: Metode untuk Mengoptimalkan Pemuatan Sumber Daya yang Dilokalkan"
description: "Catatan Rilis v1.8.32"
---

### 🚀 Peningkatan

- **[server]** Mengoptimalkan metode pemuatan sumber daya l10n untuk mencegah pemblokiran event loop ([#7653](https://github.com/nocobase/nocobase/pull/7653)) oleh @2013xile

- **[cache]** Menghindari overhead kinerja yang disebabkan oleh kloning filter Bloom ([#7652](https://github.com/nocobase/nocobase/pull/7652)) oleh @2013xile

- **[Aksi: Impor rekaman]** Peningkatan pesan kesalahan saat header tabel hilang ([#7656](https://github.com/nocobase/nocobase/pull/7656)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki kesalahan saat membersihkan kolom tanggal di blok filter ([#7632](https://github.com/nocobase/nocobase/pull/7632)) oleh @katherinehhh

  - Mencegah pemutusan label kata di label formItem ([#7647](https://github.com/nocobase/nocobase/pull/7647)) oleh @katherinehhh

  - Memperbaiki nilai default subtable yang tidak berfungsi di drawer form edit ([#7631](https://github.com/nocobase/nocobase/pull/7631)) oleh @katherinehhh

- **[Kolom koleksi: divisi administratif China]** Impor data gagal saat kota dan area memiliki nama yang sama ([#7673](https://github.com/nocobase/nocobase/pull/7673)) oleh @2013xile

- **[Workflow]**
  - Memperbaiki masalah di mana, setelah menghapus node yang memulai percabangan, kunci dari node pertama yang dipertahankan dalam cabang berubah menjadi nilai baru secara tidak benar ([#7665](https://github.com/nocobase/nocobase/pull/7665)) oleh @mytharcher

  - Memperbaiki kesalahan logger yang muncul saat aplikasi berhenti ([#7639](https://github.com/nocobase/nocobase/pull/7639)) oleh @mytharcher

- **[Manajer file]** Memperbaiki masalah file `.msg` yang tidak dapat diunggah dengan benar ([#7662](https://github.com/nocobase/nocobase/pull/7662)) oleh @mytharcher

- **[Sumber data: Utama]** Memperbaiki masalah di mana metadata tidak disinkronkan di beberapa node setelah membuat kolom asosiasi terbalik ([#7628](https://github.com/nocobase/nocobase/pull/7628)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah terjemahan teks status dalam notifikasi penyelesaian persetujuan, menggunakan bahasa default sistem untuk terjemahan saat pengguna belum mengatur preferensi bahasa oleh @mytharcher

  - Memperbaiki masalah di mana jumlah tugas tidak diperbarui setelah menambahkan penanggung jawab oleh @mytharcher
