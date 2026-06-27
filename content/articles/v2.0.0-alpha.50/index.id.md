---
title: "NocoBase v2.0.0-alpha.50: Dukungan pengaturan Multiple pada komponen unggah lampiran"
description: "Catatan Rilis v2.0.0-alpha.50"
---

### 🚀 Peningkatan

- **[klien]**

  - mendukung pengaturan Multiple pada komponen unggahan lampiran ([#8052](https://github.com/nocobase/nocobase/pull/8052)) oleh @katherinehhh
  - menampilkan opsi yang diciutkan saat dihover pada komponen Select ([#8029](https://github.com/nocobase/nocobase/pull/8029)) oleh @katherinehhh
  - menampilkan opsi yang diciutkan saat dihover pada komponen Select ([#8030](https://github.com/nocobase/nocobase/pull/8030)) oleh @katherinehhh
- **[Karyawan AI]** menambahkan kolom penyedia yang hilang pada formulir Tambah LLM ([#8049](https://github.com/nocobase/nocobase/pull/8049)) oleh @heziqiang
- **[Workflow]** Menambahkan konteks sumber data "utama" untuk UserSelect, guna menyediakan komponen yang lebih umum yang dapat digunakan di tempat lain ([#8010](https://github.com/nocobase/nocobase/pull/8010)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana N/A ditampilkan setelah menonaktifkan allowMultiple pada pemilihan record asosiasi many-to-many ([#8050](https://github.com/nocobase/nocobase/pull/8050)) oleh @katherinehhh
  - Memperbaiki masalah kedipan pada kotak pilihan dropdown aturan tautan ([#8018](https://github.com/nocobase/nocobase/pull/8018)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana mengalihkan field tanggal ke field waktu pada aksi filter menyebabkan kesalahan rendering. ([#8036](https://github.com/nocobase/nocobase/pull/8036)) oleh @gchust
  - Memperbaiki masalah di mana menu record saat ini muncul saat menambahkan blok komentar. ([#8039](https://github.com/nocobase/nocobase/pull/8039)) oleh @gchust
  - Memperbaiki kegagalan menghapus record pada blok pemilih record ([#8023](https://github.com/nocobase/nocobase/pull/8023)) oleh @katherinehhh
  - Memperbaiki masalah di mana gaya default field JS pada blok detail tidak tepat. ([#8031](https://github.com/nocobase/nocobase/pull/8031)) oleh @gchust
  - memperbaiki blok tabel pohon tidak dapat memperluas node anak ([#8011](https://github.com/nocobase/nocobase/pull/8011)) oleh @katherinehhh
  - memperbaiki drag kolom subtable tidak berfungsi ([#8026](https://github.com/nocobase/nocobase/pull/8026)) oleh @katherinehhh
  - memperbaiki lebar kolom subtable tidak diterapkan ([#8027](https://github.com/nocobase/nocobase/pull/8027)) oleh @katherinehhh
  - Menyelesaikan masalah yang menyebabkan kesalahan saat memuat data untuk field asosiasi di jendela popup, memastikan tampilan data dan fungsionalitas yang lebih lancar. ([#7985](https://github.com/nocobase/nocobase/pull/7985)) oleh @gchust
  - memperbaiki masalah gaya popover pada field tampilan markdown ([#8012](https://github.com/nocobase/nocobase/pull/8012)) oleh @katherinehhh
  - Memperbaiki masalah di mana judul default pada popup aksi edit dan buat baru tidak tepat. ([#8033](https://github.com/nocobase/nocobase/pull/8033)) oleh @gchust
  - Memperbaiki bug lazy load pada Variable.Input, yang dapat menyebabkan menu opsi variabel di-render ulang secara tidak tepat ([#8009](https://github.com/nocobase/nocobase/pull/8009)) oleh @mytharcher
  - Memperbaiki masalah di mana variabel record popup saat ini tidak dapat diselesaikan dengan benar di popup yang dibuka oleh field asosiasi. ([#8019](https://github.com/nocobase/nocobase/pull/8019)) oleh @gchust
- **[acl]** Memperbaiki masalah di mana meta info ACL tidak tepat ketika lingkup izin sumber data eksternal menggunakan variabel terkait pengguna saat ini ([#8013](https://github.com/nocobase/nocobase/pull/8013)) oleh @2013xile
- **[flow-engine]**

  - memperbaiki record komentar gagal disimpan setelah diedit ([#8035](https://github.com/nocobase/nocobase/pull/8035)) oleh @katherinehhh
  - Memperbaiki masalah di mana blok data tidak disegarkan saat menutup popup dengan mengklik tombol submit formulir di dalam popup. ([#8021](https://github.com/nocobase/nocobase/pull/8021)) oleh @gchust
- **[Editor Tema]** Mengaktifkan pengalih tema pada perangkat seluler ([#8046](https://github.com/nocobase/nocobase/pull/8046)) oleh @zhangzhonghe
- **[Manajer multi-aplikasi (usang)]** Pengaturan level log tidak diterapkan ke sub-aplikasi ([#8045](https://github.com/nocobase/nocobase/pull/8045)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki kesalahan saat memperbarui kata sandi untuk sumber data eksternal ([#8024](https://github.com/nocobase/nocobase/pull/8024)) oleh @cgyrock
- **[Aksi: Impor record]** Memperbaiki masalah di mana kesalahan muncul ketika field dalam xlsx yang diimpor memiliki nilai `null` ([#8037](https://github.com/nocobase/nocobase/pull/8037)) oleh @mytharcher
- **[Workflow]** Memperbaiki masalah di mana antrian ditutup sebelum pesan dipublikasikan ([#8003](https://github.com/nocobase/nocobase/pull/8003)) oleh @mytharcher
- **[Komentar]**

  - Memperbaiki kegagalan menghapus record di blok komentar oleh @katherinehhh
  - Memperbaiki tampilan peringatan ketika blok komentar digunakan pada koleksi non-komentar oleh @katherinehhh
- **[Multi-ruang]** Perangkat seluler mendukung perpindahan ruang oleh @jiannx
- **[Workflow: Subflow]** Memperbaiki masalah workflow yang dipilih menampilkan "N/A" ketika jumlah workflow lebih dari 200 oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki kesalahan yang muncul saat membuat blok informasi persetujuan oleh @mytharcher
  - Menambahkan migrasi untuk menghindari kesalahan record duplikat saat menambahkan indeks oleh @mytharcher
  - Memperbaiki masalah di mana aksi cetak tidak berfungsi ketika menyegarkan halaman dengan modal terbuka oleh @mytharcher
