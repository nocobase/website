---
title: "NocoBase v2.1.0-beta.26: menambahkan tindakan asosiasi dan disosiasi ke blok asosiasi"
description: "Catatan Rilis v2.1.0-beta.26"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan tindakan asosiasi dan disosiasi ke blok asosiasi ([#9366](https://github.com/nocobase/nocobase/pull/9366)) oleh @katherinehhh

- **[Visualisasi Data]** Menambahkan dukungan client-v2 untuk plugin blok ([#9297](https://github.com/nocobase/nocobase/pull/9297)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) oleh @Molunerfinn

### 🐛 Perbaikan Bug

- **[client-v2]**
  - Memperbaiki masalah di mana beberapa halaman v2 gagal memuat plugin jarak jauh ([#9369](https://github.com/nocobase/nocobase/pull/9369)) oleh @zhangzhonghe

  - Memperbaiki masalah placeholder seret dan posisi jatuh blok halaman v2 ([#9361](https://github.com/nocobase/nocobase/pull/9361)) oleh @zhangzhonghe

- **[client]**
  - Memperbaiki aturan keterkaitan yang tidak dijalankan ulang setelah nilai formulir berubah. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) oleh @gchust

  - Memperbaiki bidang opsi wajib di sub-tabel yang tidak divalidasi dengan benar pada pemilihan pertama di perangkat seluler ([#9352](https://github.com/nocobase/nocobase/pull/9352)) oleh @katherinehhh

  - Memperbaiki opsi sembunyikan pembuatan cepat untuk bidang pilih asosiasi di sub-tabel v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) oleh @katherinehhh

  - Memperbaiki masalah di mana variabel parameter kueri URL menjadi tidak valid setelah mengganti halaman yang di-cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) oleh @zhangzhonghe

  - Memperbaiki rendering data yang salah di blok kartu grid setelah pembaruan dan penyegaran ([#9351](https://github.com/nocobase/nocobase/pull/9351)) oleh @katherinehhh

- **[server]** memvalidasi nama paket plugin sebelum operasi sistem file ([#9367](https://github.com/nocobase/nocobase/pull/9367)) oleh @chenos

- **[undefined]** Memperbaiki tautan mati di dokumentasi terjemahan dan mengaktifkan deteksi tautan mati secara default di pembuatan dokumen. ([#9371](https://github.com/nocobase/nocobase/pull/9371)) oleh @Molunerfinn

- **[Karyawan AI]**
  - Memperbaiki kesalahan lampiran bidang asosiasi pembacaan simpul karyawan AI di alur kerja ([#9377](https://github.com/nocobase/nocobase/pull/9377)) oleh @cgyrock

  - Memperbaiki simpul karyawan AI alur kerja yang tidak berakhir dengan benar setelah penugasan alat. ([#9381](https://github.com/nocobase/nocobase/pull/9381)) oleh @cgyrock

- **[Blok: Kanban]**
  - Menyempurnakan gaya ringkas kartu Kanban dan meningkatkan pemilihan templat popup pembuatan cepat. ([#9370](https://github.com/nocobase/nocobase/pull/9370)) oleh @jiannx

  - Memperbaiki pencegahan pembungkusan kata tunggal di bidang teks panjang blok kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) oleh @katherinehhh

  - Memperbaiki blok terkait kanban yang menggunakan parameter sumber daya runtime yang belum terselesaikan dalam konteks popup atau halaman sekunder. ([#9350](https://github.com/nocobase/nocobase/pull/9350)) oleh @jiannx

- **[Aksi: Permintaan Kustom]** meningkatkan koa ke v3 ([#9368](https://github.com/nocobase/nocobase/pull/9368)) oleh @chenos

- **[Bidang Koleksi: Rumus]** memperbaiki bidang rumus di sub-tabel v2 yang tidak terpicu untuk kalkulasi otomatis ([#9354](https://github.com/nocobase/nocobase/pull/9354)) oleh @katherinehhh

- **[Manajer Email]** Memperbaiki tampilan judul identitas surat oleh @jiannx
