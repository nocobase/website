---
title: "NocoBase v1.7.0-alpha.15: Dukungan variabel agregasi kustom"
description: "Catatan Rilis v1.7.0-alpha.15"
---

### 🎉 Fitur Baru

- **[client]** Dukungan variabel agregasi kustom ([#6916](https://github.com/nocobase/nocobase/pull/6916)) oleh @zhangzhonghe
Referensi: [Variabel kustom](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** dukungan offset kustom dalam filter bidang tanggal ([#6854](https://github.com/nocobase/nocobase/pull/6854)) oleh @katherinehhh

- **[Bidang koleksi: Kode]** Menambahkan pengaturan tinggi untuk bidang editor kode oleh @mytharcher

- **[Aksi: Impor catatan Pro]**
  - Mendukung penentuan catatan unik berdasarkan beberapa bidang saat pengaturan impor oleh @aaaaaajie

  - Mendukung pengaturan untuk menimpa sel kosong dan mengabaikannya saat pengaturan impor oleh @aaaaaajie

- **[Variabel kustom]** Dukungan variabel agregasi kustom oleh @zhangzhonghe
Referensi: [Variabel kustom](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Manajer email]**
  - mendukung email ditandai sebagai todo dan menambahkan catatan oleh @jiannx

  - mendukung label dan pengaturan gabungan oleh @jiannx

### 🚀 Peningkatan

- **[client]** menyesuaikan tampilan konten opsi filter tanggal ([#6928](https://github.com/nocobase/nocobase/pull/6928)) oleh @katherinehhh

- **[undefined]** Upgrade versi Node ke 20 untuk CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) oleh @mytharcher

- **[Kalender]** mendukung tombol refresh yang dapat dikonfigurasi di blok kalender ([#6920](https://github.com/nocobase/nocobase/pull/6920)) oleh @katherinehhh

- **[Aksi: Impor catatan]**
  - Optimalkan kinerja impor xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) oleh @aaaaaajie

  - Optimalkan kinerja impor xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) oleh @aaaaaajie

- **[Aksi: Ekspor catatan]** Optimasi kinerja untuk mengekspor ke XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) oleh @aaaaaajie

- **[Blok: iframe]** meningkatkan logika penugasan variabel tanggal ([#6828](https://github.com/nocobase/nocobase/pull/6828)) oleh @katherinehhh

- **[Workflow: Aksi kustom]** Memperbaiki lokal en-US berdasarkan kunci zh-CN oleh @mytharcher

- **[Aksi: Ekspor catatan Pro]** Optimasi kinerja untuk mengekspor ke XLSX oleh @aaaaaajie

- **[Workflow: Persetujuan]** Mendukung untuk melakukan semua todo di pusat tugas workflow oleh @mytharcher

- **[Manajer email]** implementasi skema kemudian kirim email dan dukung ai oleh @jiannx

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki pembuatan otomatis uuid atau nanoid yang tidak berfungsi pada asosiasi many-to-many ([#6912](https://github.com/nocobase/nocobase/pull/6912)) oleh @aaaaaajie

- **[client]**
  - Pemeriksaan kondisi noneOf gagal dalam aturan tautan ([#6934](https://github.com/nocobase/nocobase/pull/6934)) oleh @katherinehhh

  - Pengaturan tinggi blok tidak diterapkan secara real-time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) oleh @katherinehhh

  - Variabel kondisi bersarang dalam aturan tautan tidak dirender dengan benar ([#6929](https://github.com/nocobase/nocobase/pull/6929)) oleh @katherinehhh

  - Penguraian variabel tanggal yang salah dalam batas rentang Tanggal ([#6930](https://github.com/nocobase/nocobase/pull/6930)) oleh @katherinehhh

  - Pemeriksaan nilai kosong yang salah untuk bidang asosiasi toMany dalam aturan tautan ([#6905](https://github.com/nocobase/nocobase/pull/6905)) oleh @katherinehhh

  - Kesalahan rendering yang disebabkan oleh format gaya yang tidak valid saat menambahkan bidang asosiasi ([#6903](https://github.com/nocobase/nocobase/pull/6903)) oleh @katherinehhh

  - Variabel objek saat ini hilang dalam aturan tautan di dalam sub-tabel ([#6907](https://github.com/nocobase/nocobase/pull/6907)) oleh @katherinehhh

- **[undefined]** Gunakan Node 20 karena persyaratan paket commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) oleh @mytharcher

- **[Manajer sumber data]** Menyelesaikan masalah dengan pengurutan seret dan lepas yang tidak berfungsi ([#6937](https://github.com/nocobase/nocobase/pull/6937)) oleh @chenos

- **[Dokumentasi API]** Menambahkan info sub-aplikasi yang hilang ke req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) oleh @chenos

- **[Notifikasi: Pesan dalam aplikasi]** Menyelesaikan masalah di mana tindakan "tandai semua sebagai telah dibaca" dalam pesan dalam aplikasi dapat memengaruhi data pengguna lain. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) oleh @sheldon66

- **[Aksi: Ekspor catatan]** Memperbaiki masalah di mana hubungan bersarang gagal diekspor dengan benar. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) oleh @aaaaaajie

- **[Bidang koleksi: Markdown(Vditor)]** bidang markdown (Vditor) tidak menyesuaikan dengan tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) oleh @katherinehhh

- **[Koleksi: Pohon]** Menghindari pembaruan yang salah pada prefiks jalur serupa selama pembaruan jalur ([#6913](https://github.com/nocobase/nocobase/pull/6913)) oleh @2013xile

- **[Workflow: node mailer]** Menangani bidang 'to' yang tidak terdefinisi dan meningkatkan pemrosesan penerima email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) oleh @sheldon66

- **[Verifikasi]** Memperbaiki penamaan bahasa Inggris yang salah: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) oleh @2013xile

- **[Manajer file]**
  - Memperbaiki injeksi koleksi klien dan parameter unggah ([#6909](https://github.com/nocobase/nocobase/pull/6909)) oleh @mytharcher

  - Memperbaiki aturan pencocokan pratinjau ([#6902](https://github.com/nocobase/nocobase/pull/6902)) oleh @mytharcher

- **[Workflow: Aksi kustom]**
  - Menghindari kesalahan yang disebabkan oleh urutan pemuatan plugin oleh @mytharcher

  - Memperbaiki penangan kesalahan yang tidak dapat dicocokkan oleh kelas oleh @mytharcher

  - Memperbaiki tombol yang berfungsi tidak benar setelah beberapa klik oleh @mytharcher

- **[Filter multi-kata kunci]** Menghapus spasi dari kedua sisi setiap kata kunci oleh @zhangzhonghe

- **[Autentikasi dua faktor (2FA)]** Memerlukan verifikator untuk dikonfigurasi saat mengaktifkan 2FA oleh @2013xile

- **[Penyimpanan file: S3(Pro)]**
  - Memperbaiki parameter unggah duplikat oleh @mytharcher

  - Memperbaiki url pratinjau dan parameter unggah oleh @mytharcher

- **[Cetak template]** Meningkatkan logika hasChildren di useFieldsTree untuk menyertakan pemeriksaan enum uiSchema. oleh @sheldon66

- **[Blok: Formulir multi-langkah]** Memperbaiki tipe oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki lokal oleh @mytharcher

  - Memperbaiki appends dan perhitungan data sebelum mengirimkan proses persetujuan oleh @mytharcher

  - Memperbaiki perhitungan appends asosiasi oleh @mytharcher

  - Memperbaiki id catatan yang salah untuk ViewAction oleh @mytharcher

- **[Manajer email]**
  - memperbaiki izin api koleksi mailMessageNotes dan mailMessageLabels oleh @jiannx

  - memperbaiki kesalahan modal tambah catatan oleh @jiannx

  - perbaikan: hapus kolom aksi oleh @jiannx
