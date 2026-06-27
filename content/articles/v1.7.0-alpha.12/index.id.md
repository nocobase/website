---
title: "NocoBase v1.7.0-alpha.12: Memperbarui dependensi dan menghapus dukungan SQLite"
description: "Catatan Rilis v1.7.0-alpha.12"
---

### 🚀 Peningkatan

- **[cli]** Mengoptimalkan logika internal dari perintah `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) oleh @chenos

- **[create-nocobase-app]** Memutakhirkan dependensi dan menghapus dukungan SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) oleh @chenos

- **[Mobile]** Mengoptimalkan kecepatan pembukaan popup pemilih tanggal di perangkat seluler ([#6735](https://github.com/nocobase/nocobase/pull/6735)) oleh @zhangzhonghe

- **[Blok: template]** mendukung konversi blok template menjadi blok normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) oleh @gchust

- **[Manajer file]** Mengekspos API utilitas ([#6705](https://github.com/nocobase/nocobase/pull/6705)) oleh @mytharcher

- **[Editor tema]** Mengizinkan pengaturan lebar sidebar dalam konfigurasi tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) oleh @chenos

- **[Workflow]** Menambahkan tipe tanggal ke dalam kumpulan tipe variabel ([#6717](https://github.com/nocobase/nocobase/pull/6717)) oleh @mytharcher

- **[Cetak template]** Mengganti kontrol aksi sumber data dengan kontrol akses berbasis peran klien. oleh @sheldon66

### 🐛 Perbaikan Bug

- **[client]**
  - masalah tampilan dengan aturan tautan pada data asosiasi multi-level ([#6755](https://github.com/nocobase/nocobase/pull/6755)) oleh @katherinehhh

  - aturan tautan tombol 'Tambah Anak' pada tabel pohon kehilangan 'rekaman saat ini' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) oleh @katherinehhh

  - Masalah penyegaran blok data setelah pengiriman berhasil ([#6748](https://github.com/nocobase/nocobase/pull/6748)) oleh @zhangzhonghe

  - Masalah tombol ciutkan di menu kiri yang terhalang oleh jendela pop-up workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) oleh @zhangzhonghe

  - Masalah ikon navigasi atas di perangkat seluler yang sulit dihapus ([#6734](https://github.com/nocobase/nocobase/pull/6734)) oleh @zhangzhonghe

  - tampilan nilai yang salah untuk "Aktifkan kolom indeks" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) oleh @katherinehhh

  - kondisi bidang tanggal waktu tidak berfungsi dalam aturan tautan ([#6728](https://github.com/nocobase/nocobase/pull/6728)) oleh @katherinehhh

  - batasan opsi aksi yang hilang saat membuka kembali aturan tautan ([#6723](https://github.com/nocobase/nocobase/pull/6723)) oleh @katherinehhh

  - Bidang wajib yang disembunyikan oleh aturan tautan tidak boleh memengaruhi pengiriman formulir ([#6709](https://github.com/nocobase/nocobase/pull/6709)) oleh @zhangzhonghe

  - filter yang hilang untuk data yang sudah diasosiasikan saat menambahkan data asosiasi ([#6750](https://github.com/nocobase/nocobase/pull/6750)) oleh @katherinehhh

- **[server]** appVersion yang dihasilkan secara tidak benar oleh create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) oleh @chenos

- **[cli]** Memperbarui package.json secara otomatis saat upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) oleh @chenos

- **[build]** Memperbaiki kesalahan yang muncul pada perintah tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) oleh @mytharcher

- **[Blok: Gantt]** blok diagram gantt yang tumpang tindih bulan di header kalender untuk tampilan bulan ([#6753](https://github.com/nocobase/nocobase/pull/6753)) oleh @katherinehhh

- **[Aksi: Impor rekaman]** Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) oleh @aaaaaajie

- **[Blok: template]** blok template tidak dapat digunakan di lingkungan mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) oleh @gchust

- **[Workflow]** Memperbaiki kesalahan yang muncul saat menjalankan event terjadwal di subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) oleh @mytharcher

- **[Workflow: Aksi event kustom]** Mendukung eksekusi dalam mode beberapa rekaman oleh @mytharcher

- **[Aksi: Ekspor rekaman Pro]**
  - Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. oleh @aaaaaajie

  - tombol ekspor pro kehilangan parameter filter setelah mengurutkan kolom tabel oleh @katherinehhh

- **[Penyimpanan file: S3(Pro)]**
  - Memperbaiki data respons dari file yang diunggah oleh @mytharcher

  - Menambahkan logika pembuatan multer untuk unggahan sisi server oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki bidang asosiasi pramuat untuk rekaman oleh @mytharcher
