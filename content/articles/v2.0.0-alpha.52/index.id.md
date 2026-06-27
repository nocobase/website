---
title: "NocoBase v2.0.0-alpha.52: menambahkan dukungan untuk pengaturan tambah/pilih/lepaskan di subform ke-banyak"
description: "Catatan Rilis v2.0.0-alpha.52"
---

### 🎉 Fitur Baru

- **[client]** menambahkan dukungan untuk pengaturan tambah/pilih/lepaskan kait di subform to-many ([#8099](https://github.com/nocobase/nocobase/pull/8099)) oleh @katherinehhh

- **[Sumber Data: REST API]** menambahkan opsi `error message transformer` dalam konfigurasi sumber data restful api oleh @cgyrock

### 🚀 Peningkatan

- **[auth]** Memperbaiki [CVE-2025-13877](https://www.cve.org/CVERecord?id=CVE-2025-13877) ([#8128](https://github.com/nocobase/nocobase/pull/8128)) oleh @2013xile

- **[Aksi: Impor catatan]**
  - mengizinkan pemilihan ID untuk bidang impor ([#8133](https://github.com/nocobase/nocobase/pull/8133)) oleh @katherinehhh

  - mengizinkan pemilihan ID untuk bidang impor ([#8132](https://github.com/nocobase/nocobase/pull/8132)) oleh @katherinehhh

- **[Alur Kerja: Persetujuan]** Mengubah API untuk mendapatkan satu item persetujuan, dan menyederhanakan kode oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - memperbaiki pencegahan status nonaktif anak dari memblokir pemilihan bidang relasi ([#8131](https://github.com/nocobase/nocobase/pull/8131)) oleh @katherinehhh

  - Memperbaiki masalah di mana komponen `RemoteSelect` salah memuat rekaman saat nilai adalah null ([#8137](https://github.com/nocobase/nocobase/pull/8137)) oleh @mytharcher

  - Memperbaiki masalah di mana lebar komponen UI tidak konsisten saat memilih "Masa Lalu" atau "Berikutnya" untuk bidang filter tanggal. ([#8130](https://github.com/nocobase/nocobase/pull/8130)) oleh @gchust

  - Memperbaiki masalah di mana label bidang default di blok formulir filter tidak dapat diterjemahkan dengan benar dalam beberapa bahasa. ([#8135](https://github.com/nocobase/nocobase/pull/8135)) oleh @gchust

  - Memperbaiki masalah di mana gaya judul dan deskripsi blok JS tidak konsisten dengan blok lainnya. ([#8115](https://github.com/nocobase/nocobase/pull/8115)) oleh @gchust

  - memperbaiki subtable bersarang di subform tidak menampilkan data ([#8117](https://github.com/nocobase/nocobase/pull/8117)) oleh @katherinehhh

  - memperbaiki masalah pemutusan baris tooltip bidang teks panjang ([#8122](https://github.com/nocobase/nocobase/pull/8122)) oleh @katherinehhh

  - Memperbaiki masalah di mana data yang dapat dipilih untuk bidang asosiasi di blok formulir filter tidak benar. ([#8109](https://github.com/nocobase/nocobase/pull/8109)) oleh @gchust

  - Memperbaiki masalah di mana opsi yang dapat dipilih tidak sepenuhnya terdaftar saat menggunakan operator "adalah salah satu dari" atau "bukan salah satu dari" untuk pemfilteran bidang berbasis opsi. ([#8118](https://github.com/nocobase/nocobase/pull/8118)) oleh @gchust

  - Memperbaiki masalah di mana konfigurasi bidang kustom di filter formulir tidak diisi sebelumnya dengan benar dan beberapa pengaturan tidak berlaku. ([#8106](https://github.com/nocobase/nocobase/pull/8106)) oleh @gchust

  - Memperbaiki masalah di mana membersihkan nilai filter waktu antara dan memicu filter lagi menyebabkan kesalahan. ([#8110](https://github.com/nocobase/nocobase/pull/8110)) oleh @gchust

  - Memperbaiki masalah di mana nilai bidang angka tidak diisi sebelumnya dengan benar di aksi filter. ([#8104](https://github.com/nocobase/nocobase/pull/8104)) oleh @gchust

  - Memperbaiki masalah di mana beberapa operator bidang di formulir filter gagal memfilter data dengan benar. ([#8100](https://github.com/nocobase/nocobase/pull/8100)) oleh @gchust

  - Memperbaiki masalah di mana pemfilteran pada bidang Checkbox tidak berlaku. ([#8103](https://github.com/nocobase/nocobase/pull/8103)) oleh @gchust

- **[flow-engine]**
  - perbaikan: konversi yang salah saat menggunakan tipe integer sebagai opsi enum ([#8138](https://github.com/nocobase/nocobase/pull/8138)) oleh @chenos

  - Memperbaiki item menu sub-model yang dapat dialihkan gagal saat `useModel` dihilangkan dengan menyimpulkannya dari `createModelOptions.use` ([#8105](https://github.com/nocobase/nocobase/pull/8105)) oleh @zhangzhonghe

- **[server]** Memperbaiki masalah di mana alur kerja yang dipicu tidak ditambahkan ke antrian pemrosesan setelah mengimpor data, memastikan bahwa alur kerja berjalan seperti yang diharapkan segera setelah impor ([#8121](https://github.com/nocobase/nocobase/pull/8121)) oleh @mytharcher

- **[Notifikasi: Email]** memperbaiki batasan koneksi notifikasi email ([#8119](https://github.com/nocobase/nocobase/pull/8119)) oleh @jiannx

- **[Bidang Koleksi: Formula]** Memperbaiki masalah di mana bidang formula di aksi filter dan blok formulir filter tidak dapat mengetik nilai input. ([#8102](https://github.com/nocobase/nocobase/pull/8102)) oleh @gchust

- **[Multi-ruang]** Memperbaiki pembuatan bidang lain di koleksi sistem oleh @jiannx
