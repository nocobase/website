---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk variabel agregasi kustom, offset kustom dalam filter bidang tanggal, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.33](https://www.nocobase.com/en/blog/v1.6.33)

*Tanggal rilis: 2025-05-23*

#### 🚀 Peningkatan

- **[tidak ditentukan]** Membangun image docker lengkap ([#6898](https://github.com/nocobase/nocobase/pull/6898)) oleh @chenos
- **[klien]** Mengoptimalkan masalah halaman yang menjadi semakin lambat seiring penggunaan ([#6888](https://github.com/nocobase/nocobase/pull/6888)) oleh @zhangzhonghe
- **[Kalender]** mendukung tombol refresh yang dapat dikonfigurasi di blok kalender ([#6920](https://github.com/nocobase/nocobase/pull/6920)) oleh @katherinehhh
- **[Workflow: Acara aksi kustom]** Memperbaiki lokal en-US berdasarkan kunci zh-CN oleh @mytharcher
- **[Workflow: Persetujuan]** Mendukung untuk menyelesaikan semua tugas di pusat tugas workflow oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - kesalahan rendering yang disebabkan oleh format gaya yang tidak valid saat menambahkan bidang asosiasi ([#6903](https://github.com/nocobase/nocobase/pull/6903)) oleh @katherinehhh
  - pemeriksaan nilai kosong yang salah untuk bidang asosiasi toMany dalam aturan tautan ([#6905](https://github.com/nocobase/nocobase/pull/6905)) oleh @katherinehhh
- **[Bidang Koleksi: Markdown(Vditor)]** bidang markdown (Vditor) tidak menyesuaikan dengan tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) oleh @katherinehhh
- **[Koleksi: Pohon]** Menghindari pembaruan yang salah ke prefiks jalur serupa selama pembaruan jalur ([#6913](https://github.com/nocobase/nocobase/pull/6913)) oleh @2013xile
- **[Manajer file]**

  - Memperbaiki aturan kecocokan pratinjau ([#6902](https://github.com/nocobase/nocobase/pull/6902)) oleh @mytharcher
  - Memperbaiki injeksi koleksi klien dan parameter unggah ([#6909](https://github.com/nocobase/nocobase/pull/6909)) oleh @mytharcher
  - Memperbaiki URL pratinjau pada file non-gambar ([#6889](https://github.com/nocobase/nocobase/pull/6889)) oleh @mytharcher
- **[Workflow: node mailer]** Menangani bidang 'to' yang tidak terdefinisi dan meningkatkan pemrosesan penerima email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) oleh @sheldon66
- **[Workflow: Acara aksi kustom]**

  - Memperbaiki tombol yang berfungsi tidak benar setelah beberapa klik oleh @mytharcher
  - Memperbaiki penangan kesalahan yang tidak dapat dicocokkan oleh kelas oleh @mytharcher
- **[Workflow: Persetujuan]** Memperbaiki perhitungan appends asosiasi oleh @mytharcher

### [v1.6.34](https://www.nocobase.com/en/blog/v1.6.34)

*Tanggal rilis: 2025-05-27*

#### 🎉 Fitur Baru

- **[Aksi: Impor catatan Pro]**
  - Mendukung pendefinisian catatan unik dengan beberapa bidang saat mengatur impor oleh @aaaaaajie
  - Mendukung pengaturan untuk menimpa sel kosong dan mengabaikannya saat mengatur impor oleh @aaaaaajie

#### 🚀 Peningkatan

- **[tidak ditentukan]** Meningkatkan versi Node ke 20 untuk CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - pemeriksaan kondisi noneOf gagal dalam aturan tautan ([#6934](https://github.com/nocobase/nocobase/pull/6934)) oleh @katherinehhh
  - pengaturan tinggi blok tidak diterapkan secara real-time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) oleh @katherinehhh
- **[tidak ditentukan]** Menggunakan Node 20 karena persyaratan paket commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) oleh @mytharcher
- **[database]** Memperbaiki pembuatan otomatis uuid atau nanoid yang tidak berfungsi dalam asosiasi banyak-ke-banyak ([#6912](https://github.com/nocobase/nocobase/pull/6912)) oleh @aaaaaajie
- **[Aksi: Ekspor catatan]** Memperbaiki masalah di mana hubungan bersarang gagal diekspor dengan benar. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) oleh @aaaaaajie
- **[Manajer sumber data]** Menyelesaikan masalah dengan pengurutan seret dan lepas yang tidak berfungsi ([#6937](https://github.com/nocobase/nocobase/pull/6937)) oleh @chenos
- **[Dokumentasi API]** Menambahkan info sub-aplikasi yang hilang ke req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) oleh @chenos
- **[Notifikasi: Pesan dalam aplikasi]** Menyelesaikan masalah di mana aksi "tandai semua sebagai telah dibaca" dalam pesan dalam aplikasi dapat memengaruhi data pengguna lain. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) oleh @sheldon66
- **[Workflow: Acara aksi kustom]** Menghindari kesalahan yang disebabkan oleh urutan pemuatan plugin oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki url pratinjau dan parameter unggah oleh @mytharcher
  - Memperbaiki parameter unggah yang duplikat oleh @mytharcher
- **[Blok: Formulir multi-langkah]** Memperbaiki tipe oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki id catatan yang salah untuk ViewAction oleh @mytharcher
  - Memperbaiki appends dan perhitungan data sebelum mengirimkan proses persetujuan oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.34](https://www.nocobase.com/en/blog/v1.7.0-beta.34)

*Tanggal rilis: 2025-05-28*

#### 🎉 Fitur Baru

- **[tidak ditentukan]** Dukungan baru untuk Gitpod memungkinkan Anda memulai lingkungan pengembangan dengan satu klik dan segera memulai pengembangan. ([#6922](https://github.com/nocobase/nocobase/pull/6922)) oleh @kerwin612
- **[Aksi: Impor catatan Pro]**

  - Mendukung pendefinisian catatan unik dengan beberapa bidang saat mengatur impor oleh @aaaaaajie
  - Mendukung pengaturan untuk menimpa sel kosong dan mengabaikannya saat mengatur impor oleh @aaaaaajie
- **[Bidang Koleksi: Kode]** Menambahkan pengaturan tinggi untuk bidang editor kode oleh @mytharcher
- **[Manajer email]**

  - mendukung email ditandai sebagai todo dan menambahkan catatan oleh @jiannx
  - mendukung label dan pengaturan gabungan oleh @jiannx

#### 🚀 Peningkatan

- **[klien]**

  - meningkatkan gaya untuk komponen filter rentang tanggal ([#6939](https://github.com/nocobase/nocobase/pull/6939)) oleh @katherinehhh
  - Memperbaiki masalah di mana kontrol formulir yang tersembunyi menangkap tombol tab, secara signifikan meningkatkan efisiensi operasi formulir ([#6942](https://github.com/nocobase/nocobase/pull/6942)) oleh @kerwin612
  - memvalidasi bidang wajib sebelum menampilkan dialog konfirmasi ([#6931](https://github.com/nocobase/nocobase/pull/6931)) oleh @katherinehhh
  - menyesuaikan tampilan konten opsi filter tanggal ([#6928](https://github.com/nocobase/nocobase/pull/6928)) oleh @katherinehhh
- **[tidak ditentukan]** Meningkatkan versi Node ke 20 untuk CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - pengaturan visibilitas titik dua label formulir tidak berfungsi ([#6947](https://github.com/nocobase/nocobase/pull/6947)) oleh @katherinehhh
  - Mengubah ukuran blok dengan menyeret tidak berfungsi ([#6944](https://github.com/nocobase/nocobase/pull/6944)) oleh @chenos
  - i18n komponen penugasan bidang tidak berfungsi ([#6945](https://github.com/nocobase/nocobase/pull/6945)) oleh @katherinehhh
  - pemeriksaan kondisi noneOf gagal dalam aturan tautan ([#6934](https://github.com/nocobase/nocobase/pull/6934)) oleh @katherinehhh
  - variabel kondisi bersarang dalam aturan tautan tidak dirender dengan benar ([#6929](https://github.com/nocobase/nocobase/pull/6929)) oleh @katherinehhh
  - pengaturan tinggi blok tidak diterapkan secara real-time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) oleh @katherinehhh
  - Memperbaiki masalah dengan tombol salin di pop-up kesalahan yang menyalin sebagai [object Object]. ([#6908](https://github.com/nocobase/nocobase/pull/6908)) oleh @kerwin612
  - penguraian variabel tanggal yang salah dalam batas Rentang tanggal ([#6930](https://github.com/nocobase/nocobase/pull/6930)) oleh @katherinehhh
- **[database]** Memperbaiki pembuatan otomatis uuid atau nanoid yang tidak berfungsi dalam asosiasi banyak-ke-banyak ([#6912](https://github.com/nocobase/nocobase/pull/6912)) oleh @aaaaaajie
- **[tidak ditentukan]** Menggunakan Node 20 karena persyaratan paket commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) oleh @mytharcher
- **[Bidang Koleksi: Markdown(Vditor)]** masalah lebar komponen bidang markdown-vditor setelah memperbesar dan memperkecil ([#6946](https://github.com/nocobase/nocobase/pull/6946)) oleh @katherinehhh
- **[Dokumentasi API]** Menambahkan info sub-aplikasi yang hilang ke req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) oleh @chenos
- **[Notifikasi: Pesan dalam aplikasi]** Menyelesaikan masalah di mana aksi "tandai semua sebagai telah dibaca" dalam pesan dalam aplikasi dapat memengaruhi data pengguna lain. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) oleh @sheldon66
- **[Manajer sumber data]** Menyelesaikan masalah dengan pengurutan seret dan lepas yang tidak berfungsi ([#6937](https://github.com/nocobase/nocobase/pull/6937)) oleh @chenos
- **[Aksi: Ekspor catatan]** Memperbaiki masalah di mana hubungan bersarang gagal diekspor dengan benar. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) oleh @aaaaaajie
- **[Workflow: Acara aksi kustom]** Menghindari kesalahan yang disebabkan oleh urutan pemuatan plugin oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki parameter unggah yang duplikat oleh @mytharcher
  - Memperbaiki url pratinjau dan parameter unggah oleh @mytharcher
- **[Blok: Formulir multi-langkah]** Memperbaiki tipe oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki id catatan yang salah untuk ViewAction oleh @mytharcher
  - Memperbaiki lokal oleh @mytharcher
  - Memperbaiki appends dan perhitungan data sebelum mengirimkan proses persetujuan oleh @mytharcher
- **[Manajer email]**

  - perbaikan: hapus kolom aksi oleh @jiannx
  - perbaikan kesalahan modal tambah catatan oleh @jiannx
  - perbaikan izin api koleksi mailMessageNotes dan mailMessageLabels oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.7.0-alpha.15](https://www.nocobase.com/en/blog/v1.7.0-alpha.15)

*Tanggal rilis: 2025-05-28*

#### 🎉 Fitur Baru

- **[klien]** Mendukung variabel agregasi kustom ([#6916](https://github.com/nocobase/nocobase/pull/6916)) oleh @zhangzhonghe
  Referensi: [Variabel kustom](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[utils]** mendukung offset kustom dalam filter bidang tanggal ([#6854](https://github.com/nocobase/nocobase/pull/6854)) oleh @katherinehhh
- **[Bidang Koleksi: Kode]** Menambahkan pengaturan tinggi untuk bidang editor kode oleh @mytharcher
- **[Aksi: Impor catatan Pro]**

  - Mendukung pendefinisian catatan unik dengan beberapa bidang saat mengatur impor oleh @aaaaaajie
  - Mendukung pengaturan untuk menimpa sel kosong dan mengabaikannya saat mengatur impor oleh @aaaaaajie
- **[Variabel kustom]** Mendukung variabel agregasi kustom oleh @zhangzhonghe
  Referensi: [Variabel kustom](https://pr-383.docs-cn.nocobase.com/handbook/custom-variables)
- **[Manajer email]**

  - mendukung email ditandai sebagai todo dan menambahkan catatan oleh @jiannx
  - mendukung label dan pengaturan gabungan oleh @jiannx

#### 🚀 Peningkatan

- **[klien]** menyesuaikan tampilan konten opsi filter tanggal ([#6928](https://github.com/nocobase/nocobase/pull/6928)) oleh @katherinehhh
- **[tidak ditentukan]** Meningkatkan versi Node ke 20 untuk CI ([#6927](https://github.com/nocobase/nocobase/pull/6927)) oleh @mytharcher
- **[Kalender]** mendukung tombol refresh yang dapat dikonfigurasi di blok kalender ([#6920](https://github.com/nocobase/nocobase/pull/6920)) oleh @katherinehhh
- **[Aksi: Impor catatan]**

  - Mengoptimalkan kinerja impor xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) oleh @aaaaaajie
  - Mengoptimalkan kinerja impor xlsx ([#6850](https://github.com/nocobase/nocobase/pull/6850)) oleh @aaaaaajie
- **[Aksi: Ekspor catatan]** Optimasi kinerja untuk mengekspor ke XLSX ([#6729](https://github.com/nocobase/nocobase/pull/6729)) oleh @aaaaaajie
- **[Blok: iframe]** meningkatkan logika penugasan variabel tanggal ([#6828](https://github.com/nocobase/nocobase/pull/6828)) oleh @katherinehhh
- **[Workflow: Acara aksi kustom]** Memperbaiki lokal en-US berdasarkan kunci zh-CN oleh @mytharcher
- **[Aksi: Ekspor catatan Pro]** Optimasi kinerja untuk mengekspor ke XLSX oleh @aaaaaajie
- **[Workflow: Persetujuan]** Mendukung untuk menyelesaikan semua tugas di pusat tugas workflow oleh @mytharcher
- **[Manajer email]** implementasi skema kemudian kirim email dan dukung ai oleh @jiannx

#### 🐛 Perbaikan Bug

- **[database]** Memperbaiki pembuatan otomatis uuid atau nanoid yang tidak berfungsi dalam asosiasi banyak-ke-banyak ([#6912](https://github.com/nocobase/nocobase/pull/6912)) oleh @aaaaaajie
- **[klien]**

  - pemeriksaan kondisi noneOf gagal dalam aturan tautan ([#6934](https://github.com/nocobase/nocobase/pull/6934)) oleh @katherinehhh
  - pengaturan tinggi blok tidak diterapkan secara real-time ([#6904](https://github.com/nocobase/nocobase/pull/6904)) oleh @katherinehhh
  - variabel kondisi bersarang dalam aturan tautan tidak dirender dengan benar ([#6929](https://github.com/nocobase/nocobase/pull/6929)) oleh @katherinehhh
  - penguraian variabel tanggal yang salah dalam batas Rentang tanggal ([#6930](https://github.com/nocobase/nocobase/pull/6930)) oleh @katherinehhh
  - pemeriksaan nilai kosong yang salah untuk bidang asosiasi toMany dalam aturan tautan ([#6905](https://github.com/nocobase/nocobase/pull/6905)) oleh @katherinehhh
  - kesalahan rendering yang disebabkan oleh format gaya yang tidak valid saat menambahkan bidang asosiasi ([#6903](https://github.com/nocobase/nocobase/pull/6903)) oleh @katherinehhh
  - variabel objek saat ini yang hilang dalam aturan tautan di dalam sub-tabel ([#6907](https://github.com/nocobase/nocobase/pull/6907)) oleh @katherinehhh
- **[tidak ditentukan]** Menggunakan Node 20 karena persyaratan paket commander ([#6924](https://github.com/nocobase/nocobase/pull/6924)) oleh @mytharcher
- **[Manajer sumber data]** Menyelesaikan masalah dengan pengurutan seret dan lepas yang tidak berfungsi ([#6937](https://github.com/nocobase/nocobase/pull/6937)) oleh @chenos
- **[Dokumentasi API]** Menambahkan info sub-aplikasi yang hilang ke req.headers ([#6933](https://github.com/nocobase/nocobase/pull/6933)) oleh @chenos
- **[Notifikasi: Pesan dalam aplikasi]** Menyelesaikan masalah di mana aksi "tandai semua sebagai telah dibaca" dalam pesan dalam aplikasi dapat memengaruhi data pengguna lain. ([#6926](https://github.com/nocobase/nocobase/pull/6926)) oleh @sheldon66
- **[Aksi: Ekspor catatan]** Memperbaiki masalah di mana hubungan bersarang gagal diekspor dengan benar. ([#6917](https://github.com/nocobase/nocobase/pull/6917)) oleh @aaaaaajie
- **[Bidang Koleksi: Markdown(Vditor)]** bidang markdown (Vditor) tidak menyesuaikan dengan tema ([#6919](https://github.com/nocobase/nocobase/pull/6919)) oleh @katherinehhh
- **[Koleksi: Pohon]** Menghindari pembaruan yang salah ke prefiks jalur serupa selama pembaruan jalur ([#6913](https://github.com/nocobase/nocobase/pull/6913)) oleh @2013xile
- **[Workflow: node mailer]** Menangani bidang 'to' yang tidak terdefinisi dan meningkatkan pemrosesan penerima email. ([#6915](https://github.com/nocobase/nocobase/pull/6915)) oleh @sheldon66
- **[Verifikasi]** Memperbaiki penamaan bahasa Inggris yang salah: “verificators” → “verifiers” ([#6834](https://github.com/nocobase/nocobase/pull/6834)) oleh @2013xile
- **[Manajer file]**

  - Memperbaiki injeksi koleksi klien dan parameter unggah ([#6909](https://github.com/nocobase/nocobase/pull/6909)) oleh @mytharcher
  - Memperbaiki aturan kecocokan pratinjau ([#6902](https://github.com/nocobase/nocobase/pull/6902)) oleh @mytharcher
- **[Workflow: Acara aksi kustom]**

  - Menghindari kesalahan yang disebabkan oleh urutan pemuatan plugin oleh @mytharcher
  - Memperbaiki penangan kesalahan yang tidak dapat dicocokkan oleh kelas oleh @mytharcher
  - Memperbaiki tombol yang berfungsi tidak benar setelah beberapa klik oleh @mytharcher
- **[Filter multi-kata kunci]** Menghapus spasi dari kedua sisi setiap kata kunci oleh @zhangzhonghe
- **[Otentikasi dua faktor (2FA)]** Memerlukan verifikator untuk dikonfigurasi saat mengaktifkan 2FA oleh @2013xile
- **[Penyimpanan file: S3(Pro)]**

  - Memperbaiki parameter unggah yang duplikat oleh @mytharcher
  - Memperbaiki url pratinjau dan parameter unggah oleh @mytharcher
- **[Cetak template]** Meningkatkan logika hasChildren di useFieldsTree untuk menyertakan pemeriksaan enum uiSchema. oleh @sheldon66
- **[Blok: Formulir multi-langkah]** Memperbaiki tipe oleh @mytharcher
- **[Workflow: Persetujuan]**

  - Memperbaiki lokal oleh @mytharcher
  - Memperbaiki appends dan perhitungan data sebelum mengirimkan proses persetujuan oleh @mytharcher
  - Memperbaiki perhitungan appends asosiasi oleh @mytharcher
  - Memperbaiki id catatan yang salah untuk ViewAction oleh @mytharcher
- **[Manajer email]**

  - perbaikan izin api koleksi mailMessageNotes dan mailMessageLabels oleh @jiannx
  - perbaikan kesalahan modal tambah catatan oleh @jiannx
  - perbaikan: hapus kolom aksi oleh @jiannx
