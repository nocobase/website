---
title: "NocoBase v2.0.50: mendukung opsi \"Tampilkan tombol salin\" untuk bidang teks hanya-baca"
description: "Catatan Rilis v2.0.50"
---

### 🎉 Fitur Baru

- **[client]** Menambahkan tindakan asosiasi dan disosiasi pada blok asosiasi ([#9366](https://github.com/nocobase/nocobase/pull/9366)) oleh @katherinehhh

- **[Salin teks]** Mendukung opsi "Tampilkan tombol salin" untuk bidang teks hanya-baca ([#9394](https://github.com/nocobase/nocobase/pull/9394)) oleh @katherinehhh

### 🚀 Peningkatan

- **[undefined]** - ([#9374](https://github.com/nocobase/nocobase/pull/9374)) oleh @Molunerfinn

- **[client]** Mengizinkan penetapan nilai bidang untuk bidang urutan ([#9397](https://github.com/nocobase/nocobase/pull/9397)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki pesan validasi bidang tabel data yang tidak diterjemahkan di formulir alur v2 ([#9393](https://github.com/nocobase/nocobase/pull/9393)) oleh @jiannx

- **[client]**
  - Memperbaiki bidang `Tersembunyi (nilai cadangan)` di blok formulir agar tetap terlihat dalam mode Editor UI, dan mengembalikan dukungan input nilai untuk menetapkannya di Penetapan bidang ([#9373](https://github.com/nocobase/nocobase/pull/9373)) oleh @jiannx

  - Memperbaiki nama file unduhan yang salah untuk bidang AttachmentURL ketika metadata file hilang. ([#9382](https://github.com/nocobase/nocobase/pull/9382)) oleh @mytharcher

  - Memperbaiki pemicu alur kerja massal tabel v2 agar pemilihan baris tetap konsisten setelah mengarahkan ulang antar tab dan baris dapat dipilih kembali setelah kembali ([#9388](https://github.com/nocobase/nocobase/pull/9388)) oleh @jiannx

  - Memperbaiki formulir filter yang tidak bisa diciutkan ([#9386](https://github.com/nocobase/nocobase/pull/9386)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana aturan tautan sub-tabel v1 salah mengubah gaya bidang wajib ([#9364](https://github.com/nocobase/nocobase/pull/9364)) oleh @zhangzhonghe

  - Memperbaiki rendering data yang salah di blok kartu grid setelah pembaruan dan penyegaran ([#9351](https://github.com/nocobase/nocobase/pull/9351)) oleh @katherinehhh

  - Memperbaiki bidang opsi wajib di sub-tabel tidak divalidasi dengan benar pada pemilihan pertama di perangkat seluler ([#9352](https://github.com/nocobase/nocobase/pull/9352)) oleh @katherinehhh

  - Memperbaiki masalah di mana variabel parameter kueri URL menjadi tidak valid setelah beralih halaman yang di-cache ([#9263](https://github.com/nocobase/nocobase/pull/9263)) oleh @zhangzhonghe

  - Memperbaiki adaptasi DividerItem ke tema di v2 ([#9372](https://github.com/nocobase/nocobase/pull/9372)) oleh @katherinehhh

  - Memperbaiki opsi buat cepat yang disembunyikan untuk bidang pilih asosiasi di sub-tabel v2 ([#9358](https://github.com/nocobase/nocobase/pull/9358)) oleh @katherinehhh

  - Memperbaiki aturan tautan yang tidak dijalankan ulang setelah nilai formulir berubah. ([#9357](https://github.com/nocobase/nocobase/pull/9357)) oleh @gchust

  - Memperbaiki kesalahan saat memfilter bidang skalar dengan filter multi-pilih kustom ([#9387](https://github.com/nocobase/nocobase/pull/9387)) oleh @zhangzhonghe

- **[server]** Memvalidasi nama paket plugin sebelum operasi sistem file ([#9367](https://github.com/nocobase/nocobase/pull/9367)) oleh @chenos

- **[Manajer sumber data]** Mencegah pengeditan dan penghapusan semua rekaman dalam izin lingkup kustom untuk sumber data eksternal ([#9395](https://github.com/nocobase/nocobase/pull/9395)) oleh @katherinehhh

- **[Sumber data: Utama]** Memperbaiki tabel basis data yang diimpor menggunakan nama tabel berprefiks yang salah ketika prefiks tabel diaktifkan ([#9403](https://github.com/nocobase/nocobase/pull/9403)) oleh @2013xile

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana daftar pesan dalam aplikasi tidak diperbarui setelah menerima notifikasi waktu nyata ([#9409](https://github.com/nocobase/nocobase/pull/9409)) oleh @mytharcher

- **[Blok: Kanban]** Memperbaiki pencegahan pembungkusan kata tunggal di bidang teks panjang blok kanban v1 ([#9356](https://github.com/nocobase/nocobase/pull/9356)) oleh @katherinehhh

- **[Bidang koleksi: Formula]** Memperbaiki bidang formula di sub-tabel v2 yang tidak terpicu untuk kalkulasi otomatis ([#9354](https://github.com/nocobase/nocobase/pull/9354)) oleh @katherinehhh
