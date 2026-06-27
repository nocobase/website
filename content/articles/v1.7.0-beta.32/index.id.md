---
title: "NocoBase v1.7.0-beta.32: Bidang teks satu baris mendukung memasukkan beberapa kata kunci untuk penyaringan"
description: "Catatan Rilis v1.7.0-beta.32"
---

### 🎉 Fitur Baru

- **[client]** Kolom teks satu baris mendukung input beberapa kata kunci untuk pemfilteran ([#6685](https://github.com/nocobase/nocobase/pull/6685)) oleh @zhangzhonghe
  Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Filter multi-kata kunci]** Kolom teks satu baris mendukung input beberapa kata kunci untuk pemfilteran oleh @zhangzhonghe
  Referensi: [Filter multi-kata kunci](https://docs.nocobase.com/handbook/multi-keyword-filter)
- **[Cetak template]** Menambahkan dukungan untuk pencetakan massal pada cetak template. oleh @sheldon66

### 🚀 Peningkatan

- **[Workflow]** Menambahkan semua kunci lokal en-US yang terlewat ([#6885](https://github.com/nocobase/nocobase/pull/6885)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**

  - komponen kaskade di modal tidak memuat data asosiasi pada awalnya ([#6886](https://github.com/nocobase/nocobase/pull/6886)) oleh @katherinehhh
  - data asosiasi tidak dikirimkan saat mengekspos kolom asosiasi di subForm ([#6883](https://github.com/nocobase/nocobase/pull/6883)) oleh @katherinehhh
  - kolom urut yang dapat diseret tidak menampilkan opsi yang tersedia dengan benar ([#6875](https://github.com/nocobase/nocobase/pull/6875)) oleh @katherinehhh
  - variabel formulir saat ini hilang dalam lingkup data tabel pemilih data ([#6882](https://github.com/nocobase/nocobase/pull/6882)) oleh @katherinehhh
  - tabel pilih rekaman asosiasi tidak memfilter rekaman yang sudah diasosiasikan ([#6874](https://github.com/nocobase/nocobase/pull/6874)) oleh @katherinehhh
- **[database]** menangani sel string kosong selama impor kolom untuk mencegah kesalahan ([#6880](https://github.com/nocobase/nocobase/pull/6880)) oleh @aaaaaajie
- **[Workflow: Node manual]** Memperbaiki kesalahan render saat menampilkan item yang belum diproses ([#6879](https://github.com/nocobase/nocobase/pull/6879)) oleh @mytharcher
- **[Manajer file]** Memperbaiki tipe ([#6873](https://github.com/nocobase/nocobase/pull/6873)) oleh @mytharcher
- **[Blok: Panel aksi]** Membaca nama dasar rute dari pemindai untuk beradaptasi dengan lingkungan desktop. ([#6877](https://github.com/nocobase/nocobase/pull/6877)) oleh @sheldon66
- **[Integrasi AI]** Konten tidak ditampilkan saat beralih antara halaman konfigurasi layanan LLM dan konfigurasi validasi ([#6887](https://github.com/nocobase/nocobase/pull/6887)) oleh @2013xile
- **[Workflow]** Memperbaiki batas tumpukan yang bekerja tidak benar untuk event koleksi ([#6876](https://github.com/nocobase/nocobase/pull/6876)) oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki lingkup penugasan delegasi dan menambahkan ke penugasan lain oleh @mytharcher
- **[Manajer cadangan]** Memperbaiki kesalahan tipe saat build oleh @mytharcher
