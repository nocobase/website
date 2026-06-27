---
title: "NocoBase v2.1.0-alpha.2: Menambahkan kontrol ACL untuk API persetujuan"
description: "Catatan Rilis v2.1.0-alpha.2"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Menambahkan kontrol ACL untuk API persetujuan oleh @mytharcher
- **[Auth: DingTalk]** Memungkinkan untuk mengikat pengguna dengan `unionId` oleh @2013xile

### 🚀 Peningkatan

- **[AI: Basis Pengetahuan]** Mengoptimalkan output build untuk mengurangi ukuran paket plugin-ai-knowledge-base. oleh @cgyrock
- **[Multi-ruang]** Kontrol izin akses multi-ruang pada acl oleh @jiannx
- **[Aksi: Ekspor rekaman Pro]** Meningkatkan cakupan data aksi ekspor berdasarkan rekaman yang dipilih atau filter sumber daya oleh @katherinehhh
- **[Workflow: Persetujuan]**

  - Menghapus dukungan untuk bidang JS oleh @zhangzhonghe
  - Menyederhanakan parameter dalam kueri, dan meningkatkan kinerja oleh @mytharcher
  - Menerapkan kontrol akses untuk API guna mencegah operasi data yang tidak sah oleh @mytharcher
  - Menambahkan logika perbaikan untuk sinkronisasi audiens setelah migrasi oleh @mytharcher
- **[Auth: DingTalk]** Menggunakan `userid` sebagai kunci default untuk asosiasi pengguna, sambil mempertahankan kompatibilitas dengan autentikator yang ada yang bergantung pada ponsel oleh @2013xile

### 🐛 Perbaikan Bug

- **[Multi-ruang]**

  - menambahkan skrip migrasi untuk menghapus x-ready-pretty di bidang ruang oleh @jiannx
  - Ruang terkait saat menambahkan data terkait oleh @jiannx
  - Warna pemilih ruang mengikuti tema oleh @jiannx
  - menghapus atribut read-pretty untuk bidang ruang oleh @jiannx
- **[Komponen bidang: masker]** Memperbaiki masalah di mana popup pengaturan bidang masker tidak dapat memuat semua peran pengguna dengan benar. oleh @gchust
- **[Aksi: Impor rekaman Pro]**

  - Memperbaiki masalah di mana workflow yang dipicu oleh impor asinkron tertunda untuk dieksekusi oleh @mytharcher
  - Memperbaiki angka hitungan dalam hasil impor dan terjemahan pesan oleh @mytharcher
- **[AI: Basis Pengetahuan]** Memperbaiki masalah di mana sistem tidak dapat dimulai setelah pembangunan oleh @cgyrock
- **[Sumber data: REST API]** Menambahkan toleransi kesalahan untuk konteks permintaan, untuk menghindari kesalahan yang muncul ketika metode tidak ada dalam konteks oleh @mytharcher
- **[Workflow: Acara aksi kustom]** Memperbaiki masalah di mana parameter dan payload tidak benar saat memicu workflow kustom oleh @mytharcher
- **[Aksi: Ekspor rekaman Pro]** Memperbaiki kesalahan ketika sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock
- **[Workflow: Webhook]**

  - Memperbaiki masalah di mana kesalahan 404 muncul saat memposting ke URL webhook di sub-aplikasi oleh @mytharcher
  - Memperbaiki masalah di mana data body hilang ketika parsing body tidak dikonfigurasi oleh @mytharcher
- **[Workflow: Subflow]** Memperbaiki jalur rute dari tautan workflow oleh @mytharcher
- **[Cetak template]**

  - memperbaiki masalah tampilan daftar bidang dalam konfigurasi aksi cetak template oleh @katherinehhh
  - memperbaiki bidang dengan kunci yang sama menyebabkan kesalahan rendering oleh @jiannx
  - Memperbaiki masalah pop-up template konfigurasi yang terhalang oleh @zhangzhonghe
  - menghapus tombol footer dari konfigurasi template cetak oleh @katherinehhh
  - Memperbaiki logika izin tombol cetak yang salah ketika peran digabungkan. oleh @jiannx
  - mendukung bidang ruang oleh @jiannx
  - menampilkan bidang ruang di versi 2.0 oleh @jiannx
- **[Penyimpanan file: S3(Pro)]** Memperbaiki masalah di mana mode penggantian nama file tidak berfungsi oleh @mytharcher
- **[Visualisasi data: ECharts]** Memperbaiki kesalahan ejaan ECharts oleh @heziqiang
- **[Workflow: Persetujuan]**

  - Memperbaiki masalah di mana kesalahan muncul saat menyetujui rekaman yang telah dihapus oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat mengeksekusi pada mode sebelum simpan oleh @mytharcher
  - Memperbaiki masalah di mana data persetujuan tidak ditampilkan di popup detail rekaman jika mode workflow diatur ke "Sebelum simpan" oleh @mytharcher
  - Menambahkan toleransi kesalahan pada workflow yang dihapus, untuk menghindari kesalahan muat di daftar tugas oleh @mytharcher
  - Memperbaiki masalah di mana nilai hilang dari popup detail "Aplikasi saya" oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul di popup rekaman persetujuan 1.x oleh @mytharcher
  - Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON dalam pemuatan daftar (MySQL) oleh @mytharcher
  - Memperbaiki id yang salah untuk memuat rekaman detail oleh @mytharcher
  - Memperbaiki masalah di mana konkurensi menyebabkan eksekusi dilanjutkan berulang kali oleh @mytharcher
  - Memperbaiki kesalahan build yang disebabkan oleh dependensi yang terlewat oleh @mytharcher
  - Memperbaiki masalah di mana rekaman yang salah dimuat karena parameter yang salah oleh @mytharcher
  - Memperbaiki masalah di mana mengembalikan persetujuan ke node sebelumnya tetapi kembali ke awal oleh @mytharcher
  - Memperbaiki kesalahan yang muncul saat menambahkan peran ke pengguna jika workflow audiens dinonaktifkan oleh @mytharcher
  - Memperbaiki blok nilai yang tidak ditampilkan karena komponen `ValueBlock.Result` hilang oleh @mytharcher
  - Memperbaiki masalah di mana bidang tidak ditampilkan di kartu tugas persetujuan oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher
- **[Manajer email]**

  - memperbaiki rantai percakapan oleh @jiannx
  - Memperbaiki tautan balasan Outlook yang kadang terputus oleh @jiannx
  - body tidak menciut saat teks dipilih. memperbaiki unduhan lampiran gagal oleh @jiannx
  - Memperbaiki masalah email di kotak surat yang sama antara beberapa pengguna dan mengoptimalkan kinerja oleh @jiannx
  - menambahkan filter ke manajemen oleh @jiannx
  - menampilkan tombol balas semua dan cakupan data mendukung pemfilteran pesan anak. oleh @jiannx
  - Memperbaiki masalah di mana popup konfigurasi email terhalang oleh @zhangzhonghe
- **[WeCom]** Memperbaiki masalah di mana pengguna tidak dapat didaftarkan secara otomatis ketika ponsel hilang oleh @2013xile
- **[Manajer migrasi]** Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock
