---
title: "NocoBase v2.1.0-beta.48: Menambahkan dukungan klien v2 untuk tindakan bilah atas manajer tugas asinkron"
description: "Catatan Rilis v2.1.0-beta.48"
---

### 🎉 Fitur Baru

- **[client-v2]** Dukungan input scan untuk bidang teks ([#9599](https://github.com/nocobase/nocobase/pull/9599)) oleh @katherinehhh
- **[Pengelola tugas asinkron]** Menambahkan dukungan klien v2 untuk aksi bilah atas pengelola tugas asinkron. ([#9707](https://github.com/nocobase/nocobase/pull/9707)) oleh @jiannx
- **[Pengelola cadangan]** Menambahkan dukungan runtime klien v2 untuk plugin pengelola cadangan. ([#9712](https://github.com/nocobase/nocobase/pull/9712)) oleh @katherinehhh
- **[Sumber data: NocoBase Eksternal]** Menambahkan plugin sumber data: NocoBase eksternal oleh @2013xile

### 🚀 Peningkatan

- **[client-v2]** Menambahkan dukungan untuk menonaktifkan pemilihan ganda di bidang asosiasi pilih popup v2. ([#9730](https://github.com/nocobase/nocobase/pull/9730)) oleh @katherinehhh
- **[Pengelola file]** Menambahkan dukungan `subPath` unggahan internal untuk pengelola file. ([#9731](https://github.com/nocobase/nocobase/pull/9731)) oleh @mytharcher
- **[Variabel dan rahasia]** Variabel lingkungan (`$env`) kini dapat dipilih oleh pemilih variabel berbasis flow-engine di runtime v1. ([#9728](https://github.com/nocobase/nocobase/pull/9728)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki bidang kata sandi yang tidak di-hash selama pembaruan massal. ([#9736](https://github.com/nocobase/nocobase/pull/9736)) oleh @mytharcher
- **[client]** Memperbaiki aksi baris sub-tabel popup yang menyembunyikan seluruh bidang sub-tabel saat aksi disembunyikan oleh aturan tautan ([#9717](https://github.com/nocobase/nocobase/pull/9717)) oleh @katherinehhh
- **[Karyawan AI]** Meningkatkan prompt kueri data karyawan AI untuk memuat keterampilan yang diperlukan sebelum menggunakan alat kueri. ([#9725](https://github.com/nocobase/nocobase/pull/9725)) oleh @cgyrock
- **[Pengelola sumber data]** Memperbaiki tampilan bidang judul yang basi saat membuka kembali laci konfigurasi bidang sumber data v2 setelah mengubah bidang judul. ([#9720](https://github.com/nocobase/nocobase/pull/9720)) oleh @katherinehhh
- **[Blok: Peta]**

  - Memperbaiki bidang geometri peta yang hilang dari menu tambah bidang pengelola sumber data v2 setelah mengaktifkan plugin peta. ([#9715](https://github.com/nocobase/nocobase/pull/9715)) oleh @katherinehhh
  - Memperbaiki masalah DrawingManager yang tidak tersedia di blok Google Maps v1 ([#9735](https://github.com/nocobase/nocobase/pull/9735)) oleh @katherinehhh
- **[Kalender]** Memperbaiki masalah di mana blok Detail dan Edit tidak dapat ditambahkan di laci detail blok kalender v2 ([#9729](https://github.com/nocobase/nocobase/pull/9729)) oleh @jiannx
