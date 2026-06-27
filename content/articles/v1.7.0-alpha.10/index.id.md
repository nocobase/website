---
title: "NocoBase v1.7.0-alpha.10: Dukungan konfigurasi variabel setelah pengiriman"
description: "Catatan Rilis v1.7.0-alpha.10"
---

### 🎉 Fitur Baru

- **[client]** Mendukung konfigurasi variabel setelah pengiriman, memungkinkan pengalihan dengan ID data saat ini ([#6465](https://github.com/nocobase/nocobase/pull/6465)) oleh @katherinehhh

- **[Bidang Koleksi: Markdown(Vditor)]** Vditor mendukung S3 Pro ([#6441](https://github.com/nocobase/nocobase/pull/6441)) oleh @zhangzhonghe

### 🚀 Peningkatan

- **[client]**
  - Hanya mendukung pratinjau file teks biasa ([#6563](https://github.com/nocobase/nocobase/pull/6563)) oleh @mytharcher

  - Optimalkan pesan error 502 ([#6547](https://github.com/nocobase/nocobase/pull/6547)) oleh @chenos

  - Batasi aksi yang tersedia untuk properti bidang yang berbeda dalam aturan tautan ([#6548](https://github.com/nocobase/nocobase/pull/6548)) oleh @katherinehhh

- **[Workflow]** Pisahkan kolom yang dieksekusi ke tabel statistik ([#6534](https://github.com/nocobase/nocobase/pull/6534)) oleh @mytharcher

- **[Mobile]** Sesuaikan gaya pop-up notifikasi untuk perangkat seluler ([#6557](https://github.com/nocobase/nocobase/pull/6557)) oleh @zhangzhonghe

- **[Bidang Koleksi: Urutan]** Mendukung pengaturan urutan sebagai bidang judul untuk blok kalender ([#6562](https://github.com/nocobase/nocobase/pull/6562)) oleh @katherinehhh

- **[Manajer Berkas]** Sesuaikan API `getFileData` penyimpanan ([#6553](https://github.com/nocobase/nocobase/pull/6553)) oleh @mytharcher

- **[Kontrol akses]** Optimalkan urutan dan gaya peralihan peran ([#6555](https://github.com/nocobase/nocobase/pull/6555)) oleh @aaaaaajie

- **[Formulir publik]** Atur judul halaman formulir publik ke judul yang dikonfigurasi saat pembuatan ([#6538](https://github.com/nocobase/nocobase/pull/6538)) oleh @katherinehhh

- **[Workflow: Aksi kustom]** Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Mendukung untuk melewati validator dalam pengaturan oleh @mytharcher

  - Pisahkan kolom yang dieksekusi ke tabel statistik oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Browser versi lama akan menampilkan halaman kosong ([#6571](https://github.com/nocobase/nocobase/pull/6571)) oleh @zhangzhonghe

  - Tidak dapat membuka modal lain di dalam modal ([#6535](https://github.com/nocobase/nocobase/pull/6535)) oleh @zhangzhonghe

  - Opsi 'Konten overflow elipsis' memerlukan penyegaran halaman agar status toggle berlaku ([#6520](https://github.com/nocobase/nocobase/pull/6520)) oleh @zhangzhonghe

  - Masalah dengan tampilan bidang tanggal dalam pemfilteran rentang data ([#6564](https://github.com/nocobase/nocobase/pull/6564)) oleh @katherinehhh

  - Menu atas halaman menampilkan kosong ([#6551](https://github.com/nocobase/nocobase/pull/6551)) oleh @zhangzhonghe

  - Aksi simpan sebagai template akan gagal jika mengandung bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust

  - Tidak dapat menggunakan variabel 'Pengguna Saat Ini' saat menambahkan halaman tautan ([#6536](https://github.com/nocobase/nocobase/pull/6536)) oleh @zhangzhonghe

  - Penugasan bidang dengan nilai null tidak efektif ([#6549](https://github.com/nocobase/nocobase/pull/6549)) oleh @katherinehhh

  - Aksi simpan sebagai template akan gagal jika mengandung bidang asosiasi ([#6543](https://github.com/nocobase/nocobase/pull/6543)) oleh @gchust

  - Hapus opsi 'Izinkan pemilihan ganda' dari bidang dropdown pilih tunggal di formulir filter ([#6515](https://github.com/nocobase/nocobase/pull/6515)) oleh @zhangzhonghe

  - Tautan rentang data bidang relasional tidak efektif ([#6530](https://github.com/nocobase/nocobase/pull/6530)) oleh @zhangzhonghe

  - Error perintah `yarn doc` ([#6540](https://github.com/nocobase/nocobase/pull/6540)) oleh @gchust

  - Masalah seret dan lepas tombol baris tabel ([#6544](https://github.com/nocobase/nocobase/pull/6544)) oleh @katherinehhh

- **[Mobile]** Sesuaikan ukuran font yang ditampilkan di ponsel menjadi 14px ([#6570](https://github.com/nocobase/nocobase/pull/6570)) oleh @zhangzhonghe

- **[Workflow]**
  - Perbaiki error yang muncul saat mengonfigurasi opsi hapus otomatis ([#6560](https://github.com/nocobase/nocobase/pull/6560)) oleh @mytharcher

  - Pastikan kunci workflow dibuat sebelum disimpan ([#6567](https://github.com/nocobase/nocobase/pull/6567)) oleh @mytharcher

- **[Variabel dan rahasia]** Tombol filter ikon hilang, jumlah filter tidak ditampilkan, dan data tidak disegarkan setelah memfilter saat berpindah halaman ([#6568](https://github.com/nocobase/nocobase/pull/6568)) oleh @katherinehhh

- **[Formulir publik]** Masalah dengan judul halaman formulir publik yang menampilkan 'Memuat...' ([#6569](https://github.com/nocobase/nocobase/pull/6569)) oleh @katherinehhh

- **[Dokumentasi API]** Halaman dokumentasi API tidak dapat digulir ([#6566](https://github.com/nocobase/nocobase/pull/6566)) oleh @zhangzhonghe

- **[Workflow: Aksi pasca-tindakan]** Beberapa catatan dalam aksi massal harus memicu beberapa kali ([#6559](https://github.com/nocobase/nocobase/pull/6559)) oleh @mytharcher

- **[Blok: template]**
  - Menu simpan sebagai template duplikat di blok detail ([#6558](https://github.com/nocobase/nocobase/pull/6558)) oleh @gchust

  - Aturan tautan blok formulir belum disinkronkan dengan benar dari template ([#6550](https://github.com/nocobase/nocobase/pull/6550)) oleh @gchust

- **[Otentikasi]** Masalah lokalisasi untuk bidang halaman pendaftaran ([#6556](https://github.com/nocobase/nocobase/pull/6556)) oleh @2013xile

- **[Aksi: Permintaan kustom]** Tidak dapat mengunduh file yang dikodekan UTF-8 ([#6541](https://github.com/nocobase/nocobase/pull/6541)) oleh @2013xile

- **[Koleksi: Pohon]** Masalah migrasi untuk plugin-collection-tree ([#6537](https://github.com/nocobase/nocobase/pull/6537)) oleh @2013xile

- **[Blok: Formulir multi-langkah]** tombol kirim memiliki warna yang sama dalam keadaan default dan disorot oleh @jiannx

- **[Workflow: Persetujuan]** Perbaiki nilai formulir persetujuan untuk dikirim oleh @mytharcher
