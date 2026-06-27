---
title: "NocoBase v1.9.0-alpha.12: Dukungan aturan validasi bidang"
description: "Catatan Rilis v1.9.0-alpha.12"
---

### 🎉 Fitur Baru

- **[client]** Dukungan aturan validasi kolom ([#7297](https://github.com/nocobase/nocobase/pull/7297)) oleh @aaaaaajie

- **[Workflow: Persetujuan]**
  - Menambahkan tipe template inline untuk konfigurasi notifikasi oleh @mytharcher

  - Mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam workflow yang sama oleh @mytharcher

### 🚀 Peningkatan

- **[database]** Optimasi kinerja kueri ACL Meta ([#7400](https://github.com/nocobase/nocobase/pull/7400)) oleh @aaaaaajie

- **[client]** Mendukung penampilan ikon yang diidentifikasi oleh string di komponen Select saat dalam mode hanya-baca ([#7420](https://github.com/nocobase/nocobase/pull/7420)) oleh @mytharcher

- **[Mobile]** Optimasi komponen popup seluler ([#7414](https://github.com/nocobase/nocobase/pull/7414)) oleh @zhangzhonghe

- **[Workflow]** Memperbarui menu pemilihan node untuk menampilkan opsi dalam tata letak dua kolom guna meningkatkan kepadatan informasi dan memungkinkan pengguna melihat lebih banyak opsi sekaligus ([#7396](https://github.com/nocobase/nocobase/pull/7396)) oleh @mytharcher

- **[Pengaturan lisensi]** Di pengaturan lisensi, salin ID Instance terbaru setiap kali ([#7387](https://github.com/nocobase/nocobase/pull/7387)) oleh @jiannx

- **[Notifikasi: Pesan dalam aplikasi]** Hapus output log SQL melalui `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) oleh @2013xile

- **[Autentikasi]** Menghapus parameter token dari URL setelah berhasil masuk ([#7386](https://github.com/nocobase/nocobase/pull/7386)) oleh @2013xile

- **[Cetak template]** mendukung array field m2m oleh @jiannx

### 🐛 Perbaikan Bug

- **[database]** Memperbaiki masalah di mana tabel eksternal Postgres membaca tampilan dari skema lain ([#7410](https://github.com/nocobase/nocobase/pull/7410)) oleh @aaaaaajie

- **[client]**
  - memperlakukan angka 0 sebagai kosong selama validasi kosong aturan tautan ([#7404](https://github.com/nocobase/nocobase/pull/7404)) oleh @katherinehhh

  - Memperbaiki masalah di mana tombol "Pengaturan kolom" memuat kolom dari tabel di dalam dialog modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) oleh @kerwin612

  - Memperbaiki teks tombol tautan yang memutus baris ([#7406](https://github.com/nocobase/nocobase/pull/7406)) oleh @mytharcher

- **[server]** Beberapa permintaan kekurangan `ctx.action`, menyebabkan kesalahan di middleware log audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) oleh @2013xile

- **[Blok: template]** Memperbaiki masalah di mana blok email tidak terlihat saat ditempatkan di dalam blok template yang diwarisi ([#7430](https://github.com/nocobase/nocobase/pull/7430)) oleh @gchust

- **[Workflow: node email]** Memperbaiki masalah di mana node email mungkin tidak melanjutkan eksekusi dengan benar ([#7409](https://github.com/nocobase/nocobase/pull/7409)) oleh @mytharcher

- **[Mobile]**
  - format tampilan field tanggal yang salah di perangkat seluler ([#7412](https://github.com/nocobase/nocobase/pull/7412)) oleh @katherinehhh

  - Memperbaiki masalah di mana data pengiriman formulir di dialog persetujuan seluler salah ([#7389](https://github.com/nocobase/nocobase/pull/7389)) oleh @zhangzhonghe

- **[Workflow]**
  - Memperbaiki kesalahan yang muncul dan data formulir yang hilang saat mengedit kategori workflow ([#7408](https://github.com/nocobase/nocobase/pull/7408)) oleh @mytharcher

  - Memperbaiki terjemahan judul halaman di pusat tugas workflow ([#7392](https://github.com/nocobase/nocobase/pull/7392)) oleh @mytharcher

- **[Penampil File Office]** Memperbaiki kesalahan yang muncul saat mengunggah file ke field URL lampiran ([#7405](https://github.com/nocobase/nocobase/pull/7405)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki terjemahan ([#7384](https://github.com/nocobase/nocobase/pull/7384)) oleh @mytharcher

- **[Field koleksi: Formula]** Memperbaiki masalah di mana input formula tidak dapat melewati validasi karena tipe variabel ([#7373](https://github.com/nocobase/nocobase/pull/7373)) oleh @mytharcher

- **[Manajer file]** Hapus petunjuk untuk batas ukuran unggahan file ([#7391](https://github.com/nocobase/nocobase/pull/7391)) oleh @mytharcher

- **[Kalender]** tooltip item acara kalender menampilkan [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) oleh @katherinehhh

- **[Aksi: Impor catatan Pro]** Melarang penugasan field relasi selama deteksi duplikat impor. oleh @aaaaaajie

- **[Workflow: Acara aksi kustom]** Hapus baris yang dipilih setelah berhasil memicu aksi pada beberapa catatan oleh @mytharcher

- **[Cetak template]** Pencetakan field pilih-radio dalam beberapa baris data oleh @jiannx

- **[Penyimpanan file: S3(Pro)]**
  - Hentikan penggunaan parameter bermasalah `attachmentField` oleh @mytharcher

  - Memperbaiki masalah di mana metode autentikasi IAM tidak dapat digunakan untuk mengunggah file oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Memperbaiki masalah di mana memuat data sumber data eksternal dalam catatan persetujuan menghasilkan kesalahan 404 oleh @mytharcher

  - Memperbaiki masalah di mana daftar pengguna kosong selama penandatanganan bersama oleh @mytharcher

- **[Manajer cadangan]** pencadangan file besar dapat menampilkan "berhasil" sebelum benar-benar selesai oleh @gchust

- **[Manajer migrasi]** Lewati perintah `\restrict` dan `\unrestrict` yang dihasilkan oleh pg_dump terbaru saat membuat file migrasi untuk mengatasi kesalahan pemulihan. oleh @2013xile
