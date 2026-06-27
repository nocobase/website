---
title: "NocoBase v2.0.52: menambahkan variabel bahasa pengguna saat ini di v2"
description: "Catatan Rilis v2.0.52"
---

### 🎉 Fitur Baru

- **[klien]**
  - menambahkan variabel bahasa pengguna saat ini di v2 ([#9405](https://github.com/nocobase/nocobase/pull/9405)) oleh @katherinehhh

  - menambahkan opsi batas rentang tanggal untuk bidang tanggal di formulir v2 ([#9400](https://github.com/nocobase/nocobase/pull/9400)) oleh @katherinehhh

### 🚀 Peningkatan

- **[klien]** mengecualikan rekaman yang sudah terkait di dialog pemilihan asosiasi blok tabel satu-ke-banyak ([#9448](https://github.com/nocobase/nocobase/pull/9448)) oleh @katherinehhh

- **[Departemen]** mengoptimalkan gaya daftar departemen dengan menambahkan ikon dan menyesuaikan jarak ([#9435](https://github.com/nocobase/nocobase/pull/9435)) oleh @katherinehhh

- **[AI: Basis Pengetahuan]** Pengidentifikasi unik untuk basis pengetahuan dapat dikonfigurasi saat pembuatan oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana pengaturan nilai default lama tidak dapat dihapus. ([#9470](https://github.com/nocobase/nocobase/pull/9470)) oleh @gchust

  - Memperbaiki masalah di mana tidak dapat memilih opsi untuk bidang pilihan asosiasi. ([#9088](https://github.com/nocobase/nocobase/pull/9088)) oleh @gchust

  - Memperbaiki masalah di mana lingkup data blok target diatur secara salah saat membatalkan pilihan data baris dalam alur peristiwa blok tabel. ([#9443](https://github.com/nocobase/nocobase/pull/9443)) oleh @gchust

  - Memperbaiki permintaan tabel duplikat ketika formulir filter memiliki nilai default ([#9423](https://github.com/nocobase/nocobase/pull/9423)) oleh @zhangzhonghe

  - Memperbaiki aturan tautan V2 untuk mendukung pengaturan opsi yang dapat dipilih untuk bidang ([#9399](https://github.com/nocobase/nocobase/pull/9399)) oleh @jiannx

  - memperbaiki kesalahan saat mengubah bidang judul bidang asosiasi di blok tabel v2 ([#9451](https://github.com/nocobase/nocobase/pull/9451)) oleh @katherinehhh

  - Memperbaiki masalah intermiten di mana aturan tautan tombol aksi gagal berlaku. ([#9430](https://github.com/nocobase/nocobase/pull/9430)) oleh @gchust

  - menyembunyikan komponen subtabel untuk bidang asosiasi ke-banyak di subtabel v2 ([#9438](https://github.com/nocobase/nocobase/pull/9438)) oleh @katherinehhh

- **[server]** perbaiki(file-manager): paksa unduh file konten aktif di penyimpanan lokal/publik ([#9437](https://github.com/nocobase/nocobase/pull/9437)) oleh @mytharcher

- **[Karyawan AI]** Memperbaiki uji terbang Ollama yang memerlukan input kunci ([#9450](https://github.com/nocobase/nocobase/pull/9450)) oleh @cgyrock

- **[Manajer koleksi grafik]** perbaiki tata letak otomatis antarmuka grafis yang memunculkan kesalahan filter aksi pembaruan ([#9421](https://github.com/nocobase/nocobase/pull/9421)) oleh @katherinehhh

- **[Alur Kerja]** perbaiki: mengembalikan teks bantuan di dialog pengikatan alur kerja FlowModel untuk peristiwa aksi operasi dan kustom ([#9447](https://github.com/nocobase/nocobase/pull/9447)) oleh @mytharcher

- **[Departemen]** perbaiki konflik terjemahan antara tombol tambah pengguna dan tambah departemen di pengaturan Pengguna & Izin ([#9456](https://github.com/nocobase/nocobase/pull/9456)) oleh @katherinehhh

- **[Bidang koleksi: Markdown(Vditor)]** perbaiki tooltip bidang markdown yang tersembunyi di tata letak formulir horizontal ([#9420](https://github.com/nocobase/nocobase/pull/9420)) oleh @katherinehhh

- **[Klien WEB]** Perbaiki pemfilteran tipe rute saat menggunakan label yang diterjemahkan ([#9425](https://github.com/nocobase/nocobase/pull/9425)) oleh @zhangzhonghe

- **[Alur Kerja: Persetujuan]**
  - Perbaiki masalah di mana bidang JS muncul di pengaturan proses persetujuan oleh @zhangzhonghe

  - Perbaiki tata letak formulir persetujuan pada perangkat seluler oleh @zhangzhonghe

  - Perbaiki indeks rekaman persetujuan duplikat saat mendelegasikan tugas persetujuan. oleh @mytharcher

- **[Manajer cadangan]** Memperbaiki masalah di mana pencadangan akan gagal dengan kesalahan ketika file tidak dapat ditemukan. oleh @gchust
