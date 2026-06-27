---
title: "Pembaruan Mingguan｜Menambahkan kemampuan SKILLS untuk karyawan AI"
description: "Ini adalah ringkasan pembaruan fitur dan peningkatan NocoBase dari 20 Maret hingga 26 Maret 2026."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v2.0.26](https://www.nocobase.com/en/blog/v2.0.26)

*Tanggal rilis: 25-03-2026*

### 🚀 Peningkatan

- **[klien]** Mengoptimalkan tata letak horizontal dari aksi formulir ([#8869](https://github.com/nocobase/nocobase/pull/8869)) oleh @jiannx

### 🐛 Perbaikan Bug

- **[mesin-alur]** Menyinkronkan status ke konfigurasi bidang saat bidang formulir dihapus ([#8857](https://github.com/nocobase/nocobase/pull/8857)) oleh @jiannx
- **[Variabel khusus]** lewati pemberitahuan auth ([#8942](https://github.com/nocobase/nocobase/pull/8942)) oleh @chenos

### [v2.0.25](https://www.nocobase.com/en/blog/v2.0.25)

*Tanggal rilis: 24-03-2026*

### 🚀 Peningkatan

- **[Alur Kerja: Persetujuan]** Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON saat memuat daftar catatan persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Mengubah waktu penutupan Pub-Sub menjadi `beforeStop`, untuk menghindari pesan terkirim atau ditangani setelah database ditutup ([#8934](https://github.com/nocobase/nocobase/pull/8934)) oleh @mytharcher
- **[Lokalisasi]** mencegah permintaan localizationTexts:missing saat izin ditolak ([#8903](https://github.com/nocobase/nocobase/pull/8903)) oleh @chenos
- **[Sumber data: Oracle Eksternal]** Memperbaiki kesalahan yang terjadi saat memuat sumber data Oracle eksternal oleh @2013xile

### [v2.0.24](https://www.nocobase.com/en/blog/v2.0.24)

*Tanggal rilis: 22-03-2026*

### 🐛 Perbaikan Bug

- **[resourcer]** Memperbaiki masalah di mana sumber data eksternal gagal dimuat dengan benar. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) oleh @2013xile
- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana opsi "Picu alur kerja" tidak berfungsi saat tidak dicentang oleh @mytharcher

### [v2.0.23](https://www.nocobase.com/en/blog/v2.0.23)

*Tanggal rilis: 21-03-2026*

### 🐛 Perbaikan Bug

- **[database]** Menggunakan peringatan alih-alih kesalahan ketika salah satu parameter appends tidak valid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki terjemahan, pemilihan node, dan masalah target kembali pada tombol kembali formulir persetujuan v2 oleh @zhangzhonghe

### [v2.0.22](https://www.nocobase.com/en/blog/v2.0.22)

*Tanggal rilis: 20-03-2026*

### 🐛 Perbaikan Bug

- **[Manajer migrasi]** Memperbaiki masalah di mana migrasi terputus karena kesalahan yang disebabkan oleh lingkungan target yang tidak memiliki tabel baru yang dibuat selama proses migrasi unggah. oleh @Andrew1989Y

### [v2.0.21](https://www.nocobase.com/en/blog/v2.0.21)

*Tanggal rilis: 20-03-2026*

### 🚀 Peningkatan

- **[Alur Kerja]** Menambahkan daftar filter eksekusi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menghindari konfigurasi UI pemberi persetujuan ketika tidak ada koleksi yang dikonfigurasi di pemicu oleh @mytharcher

### 🐛 Perbaikan Bug

- **[resourcer]** Mencegah array parameter `filterByTk` secara otomatis diubah menjadi objek ketika melebihi 100 item ([#8908](https://github.com/nocobase/nocobase/pull/8908)) oleh @2013xile
- **[klien]** memperbaiki masalah di mana non-administrator tidak dapat menghapus nilai bidang terkait ([#8904](https://github.com/nocobase/nocobase/pull/8904)) oleh @jiannx
- **[Aksi: Impor catatan Pro]**

  - Memperbaiki masalah di mana kesalahan muncul saat mengimpor dalam mode sinkron oleh @mytharcher
  - Memperbaiki masalah di mana kolom lebih dari ~30 menyebabkan kesalahan impor, karena aliran telah dibaca secara duplikat oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah konkurensi saat menambahkan penerima tugas oleh @mytharcher

### [v2.0.20](https://www.nocobase.com/en/blog/v2.0.20)

*Tanggal rilis: 19-03-2026*

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana peristiwa siklus hidup yang dikirim oleh pekerja menyebabkan aplikasi yang melayani berhenti ([#8906](https://github.com/nocobase/nocobase/pull/8906)) oleh @mytharcher
- **[Manajer sumber data]** Memperbaiki masalah bahwa koleksi yang dibuat oleh karyawan AI selalu kehilangan bidang `createBy` dan `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]** Memperbaiki impor lambat yang menyebabkan kesalahan SES oleh @mytharcher
- **[Cetak template]** Memperbaiki kesalahan pencetakan koleksi SQL oleh @jiannx
- **[Manajer email]** Memperbaiki kesalahan halaman ketika email tidak ada oleh @jiannx

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.1.0-beta.11](https://www.nocobase.com/en/blog/v2.1.0-beta.11)

*Tanggal rilis: 20-03-2026*

### 🚀 Peningkatan

- **[Alur Kerja]** Menambahkan daftar filter eksekusi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Menghindari konfigurasi UI pemberi persetujuan ketika tidak ada koleksi yang dikonfigurasi di pemicu oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana peristiwa siklus hidup yang dikirim oleh pekerja menyebabkan aplikasi yang melayani berhenti ([#8906](https://github.com/nocobase/nocobase/pull/8906)) oleh @mytharcher
- **[klien]** memperbaiki masalah di mana non-administrator tidak dapat menghapus nilai bidang terkait ([#8904](https://github.com/nocobase/nocobase/pull/8904)) oleh @jiannx
- **[resourcer]** Mencegah array parameter `filterByTk` secara otomatis diubah menjadi objek ketika melebihi 100 item ([#8908](https://github.com/nocobase/nocobase/pull/8908)) oleh @2013xile
- **[Aksi: Impor catatan Pro]**

  - Memperbaiki masalah di mana kesalahan muncul saat mengimpor dalam mode sinkron oleh @mytharcher
  - Memperbaiki masalah di mana kolom lebih dari ~30 menyebabkan kesalahan impor, karena aliran telah dibaca secara duplikat oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah konkurensi saat menambahkan penerima tugas oleh @mytharcher
- **[Manajer migrasi]** Memperbaiki masalah di mana migrasi terputus karena kesalahan yang disebabkan oleh lingkungan target yang tidak memiliki tabel baru yang dibuat selama proses migrasi unggah. oleh @Andrew1989Y

### [v2.1.0-beta.10](https://www.nocobase.com/en/blog/v2.1.0-beta.10)

*Tanggal rilis: 19-03-2026*

### 🎉 Fitur Baru

- **[Karyawan AI]**

  - Memungkinkan untuk menambahkan karyawan AI di popup sub-tabel ([#8873](https://github.com/nocobase/nocobase/pull/8873)) oleh @2013xile
  - Pembersihan terjadwal data titik pemeriksaan percakapan AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) oleh @cgyrock
- **[Pengawas aplikasi]** Mendukung pemfilteran dalam daftar aplikasi<br />Menambahkan dialog konfirmasi untuk tindakan mulai dan berhenti<br />Mengurutkan entri status aplikasi berdasarkan nama lingkungan oleh @2013xile

### 🚀 Peningkatan

- **[server]** meningkatkan logika pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) oleh @chenos
- **[tidak terdefinisi]** README ([#8866](https://github.com/nocobase/nocobase/pull/8866)) oleh @gaston98765
- **[klien]** Mendukung menampilkan pesan konfirmasi sebelum menutup popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) oleh @gchust
- **[Alur Kerja]** Memperbaiki masalah di mana shutdown yang anggun tidak menguras semua peristiwa ([#8894](https://github.com/nocobase/nocobase/pull/8894)) oleh @mytharcher
- **[Manajer tugas asinkron]** tugas asinkron ditambahkan untuk mendukung pekerja dalam mengirim pesan kesalahan ([#8849](https://github.com/nocobase/nocobase/pull/8849)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana popup "Pilih catatan" di sub-tabel gagal dimuat dengan benar saat dibuka untuk kedua kalinya. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) oleh @gchust
  - Memperbaiki masalah di mana nilai default dari beberapa bidang tidak berlaku setelah menyegarkan halaman. ([#8834](https://github.com/nocobase/nocobase/pull/8834)) oleh @gchust
- **[database]** Memperbaiki masalah validasi sisi server untuk bidang tanggal ([#8867](https://github.com/nocobase/nocobase/pull/8867)) oleh @2013xile
- **[Manajer sumber data]** Memperbaiki masalah bahwa koleksi yang dibuat oleh karyawan AI selalu kehilangan bidang `createBy` dan `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) oleh @cgyrock
- **[Karyawan AI]**

  - Memperbaiki masalah dengan URL yang ditentukan untuk layanan LLM tidak berpengaruh dalam panggilan model penyematan teks. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) oleh @cgyrock
  - Memperbaiki potensi kesalahan variabel tidak terdefinisi dalam skrip migrasi peningkatan plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) oleh @cgyrock
- **[Lokalisasi]** Pengecualian izin antarmuka localizationTexts:missing ([#8861](https://github.com/nocobase/nocobase/pull/8861)) oleh @jiannx
- **[Aksi: Impor catatan Pro]**

  - Memperbaiki peristiwa `beforeStop` pada sub aplikasi tidak dipicu oleh @mytharcher
  - Memperbaiki impor lambat yang menyebabkan kesalahan SES oleh @mytharcher
  - Memperbaiki masalah di mana tugas asinkron tidak berakhir setelah terjadi kesalahan dalam impor asinkron oleh @cgyrock
- **[AI: Basis pengetahuan]** Mencegah database vektor dan penyimpanan vektor yang digunakan agar tidak dihapus. oleh @cgyrock
- **[Cetak template]** Memperbaiki kesalahan pencetakan koleksi SQL oleh @jiannx
- **[Manajer email]** Memperbaiki kesalahan halaman ketika email tidak ada oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.1.0-alpha.11](https://www.nocobase.com/en/blog/v2.1.0-alpha.11)

*Tanggal rilis: 25-03-2026*

### 🎉 Fitur Baru

- **[klien]** menambahkan aksi item JS ([#8911](https://github.com/nocobase/nocobase/pull/8911)) oleh @jiannx
- **[Karyawan AI]** Menambahkan kemampuan SKILLS ke karyawan AI. ([#8797](https://github.com/nocobase/nocobase/pull/8797)) oleh @cgyrock
- **[Manajer sumber data]** Mendukung pemuatan sesuai permintaan alat MCP ([#8936](https://github.com/nocobase/nocobase/pull/8936)) oleh @2013xile

### 🚀 Peningkatan

- **[mesin-alur]** Meningkatkan validasi skema untuk api pembuatan ui. ([#8881](https://github.com/nocobase/nocobase/pull/8881)) oleh @gchust
- **[klien]** Mengoptimalkan tata letak horizontal dari aksi formulir ([#8869](https://github.com/nocobase/nocobase/pull/8869)) oleh @jiannx
- **[aplikasi]** Menambahkan alur kerja dev berbasis Rsbuild untuk client-v1 sambil menjaga pengembangan plugin lokal dan topologi `/v2/` saat ini tetap kompatibel ([#8902](https://github.com/nocobase/nocobase/pull/8902)) oleh @Molunerfinn
- **[Bidang koleksi: divisi administratif China]** field-china-region 2.0 ([#8831](https://github.com/nocobase/nocobase/pull/8831)) oleh @jiannx
- **[Alur Kerja]** Menambahkan validasi untuk semua pemicu dan node ([#8930](https://github.com/nocobase/nocobase/pull/8930)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah kinerja yang disebabkan oleh bidang JSON saat memuat daftar catatan persetujuan oleh @mytharcher

### 🐛 Perbaikan Bug

- **[mesin-alur]** Menyinkronkan status ke konfigurasi bidang saat bidang formulir dihapus ([#8857](https://github.com/nocobase/nocobase/pull/8857)) oleh @jiannx
- **[resourcer]** Memperbaiki masalah di mana sumber data eksternal gagal dimuat dengan benar. ([#8929](https://github.com/nocobase/nocobase/pull/8929)) oleh @2013xile
- **[database]** Menggunakan peringatan alih-alih kesalahan ketika salah satu parameter appends tidak valid ([#8923](https://github.com/nocobase/nocobase/pull/8923)) oleh @mytharcher
- **[server]** Mengubah waktu penutupan Pub-Sub menjadi `beforeStop`, untuk menghindari pesan terkirim atau ditangani setelah database ditutup ([#8934](https://github.com/nocobase/nocobase/pull/8934)) oleh @mytharcher
- **[Variabel khusus]** lewati pemberitahuan auth ([#8942](https://github.com/nocobase/nocobase/pull/8942)) oleh @chenos
- **[Karyawan AI]** Memperbaiki kasus uji yang gagal di modul ai dari paket inti. ([#8941](https://github.com/nocobase/nocobase/pull/8941)) oleh @cgyrock
- **[Lokalisasi]** mencegah permintaan localizationTexts:missing saat izin ditolak ([#8903](https://github.com/nocobase/nocobase/pull/8903)) oleh @chenos
- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana opsi "Picu alur kerja" tidak berfungsi saat tidak dicentang oleh @mytharcher
- **[Sumber data: Oracle Eksternal]** Memperbaiki kesalahan yang terjadi saat memuat sumber data Oracle eksternal oleh @2013xile
- **[Alur Kerja: Persetujuan]** Memperbaiki terjemahan, pemilihan node, dan masalah target kembali pada tombol kembali formulir persetujuan v2 oleh @zhangzhonghe

### [v2.1.0-alpha.10](https://www.nocobase.com/en/blog/v2.1.0-alpha.10)

*Tanggal rilis: 20-03-2026*

### 🎉 Fitur Baru

- **[IdP: OAuth]** Menambahkan plugin IdP: OAuth baru untuk memungkinkan layanan MCP mengautentikasi melalui OAuth ([#8896](https://github.com/nocobase/nocobase/pull/8896)) oleh @2013xile
- **[Karyawan AI]** Pembersihan terjadwal data titik pemeriksaan percakapan AI. ([#8855](https://github.com/nocobase/nocobase/pull/8855)) oleh @cgyrock
- **[Pengawas aplikasi]** Mendukung pemfilteran dalam daftar aplikasi<br />Menambahkan dialog konfirmasi untuk tindakan mulai dan berhenti<br />Mengurutkan entri status aplikasi berdasarkan nama lingkungan oleh @2013xile

### 🚀 Peningkatan

- **[server]** meningkatkan logika pm add ([#8875](https://github.com/nocobase/nocobase/pull/8875)) oleh @chenos
- **[klien]** Mendukung menampilkan pesan konfirmasi sebelum menutup popup. ([#8839](https://github.com/nocobase/nocobase/pull/8839)) oleh @gchust
- **[tidak terdefinisi]** Menambahkan entri client-v2 khusus dan membangunnya secara independen dengan rsbuild sambil menjaga v1 tetap tidak berubah. ([#8743](https://github.com/nocobase/nocobase/pull/8743)) oleh @Molunerfinn
- **[Alur Kerja]**

  - Memperbaiki masalah di mana shutdown yang anggun tidak menguras semua peristiwa ([#8894](https://github.com/nocobase/nocobase/pull/8894)) oleh @mytharcher
  - Menambahkan daftar filter eksekusi ([#8914](https://github.com/nocobase/nocobase/pull/8914)) oleh @mytharcher
- **[Manajer tugas asinkron]** tugas asinkron ditambahkan untuk mendukung pekerja dalam mengirim pesan kesalahan ([#8849](https://github.com/nocobase/nocobase/pull/8849)) oleh @cgyrock
- **[Alur Kerja: Persetujuan]** Menghindari konfigurasi UI pemberi persetujuan ketika tidak ada koleksi yang dikonfigurasi di pemicu oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - memperbaiki masalah di mana non-administrator tidak dapat menghapus nilai bidang terkait ([#8904](https://github.com/nocobase/nocobase/pull/8904)) oleh @jiannx
  - Memperbaiki masalah di mana popup "Pilih catatan" di sub-tabel gagal dimuat dengan benar saat dibuka untuk kedua kalinya. ([#8865](https://github.com/nocobase/nocobase/pull/8865)) oleh @gchust
- **[resourcer]** Mencegah array parameter `filterByTk` secara otomatis diubah menjadi objek ketika melebihi 100 item ([#8908](https://github.com/nocobase/nocobase/pull/8908)) oleh @2013xile
- **[server]** Memperbaiki masalah di mana peristiwa siklus hidup yang dikirim oleh pekerja menyebabkan aplikasi yang melayani berhenti ([#8906](https://github.com/nocobase/nocobase/pull/8906)) oleh @mytharcher
- **[Manajer sumber data]** Memperbaiki masalah bahwa koleksi yang dibuat oleh karyawan AI selalu kehilangan bidang `createBy` dan `updateBy` ([#8895](https://github.com/nocobase/nocobase/pull/8895)) oleh @cgyrock
- **[Karyawan AI]**

  - Memperbaiki masalah dengan URL yang ditentukan untuk layanan LLM tidak berpengaruh dalam panggilan model penyematan teks. ([#8892](https://github.com/nocobase/nocobase/pull/8892)) oleh @cgyrock
  - Memperbaiki potensi kesalahan variabel tidak terdefinisi dalam skrip migrasi peningkatan plugin AI. ([#8883](https://github.com/nocobase/nocobase/pull/8883)) oleh @cgyrock
- **[Aksi: Impor catatan Pro]**

  - Memperbaiki masalah di mana kolom lebih dari ~30 menyebabkan kesalahan impor, karena aliran telah dibaca secara duplikat oleh @mytharcher
  - Memperbaiki masalah di mana kesalahan muncul saat mengimpor dalam mode sinkron oleh @mytharcher
  - Memperbaiki peristiwa `beforeStop` pada sub aplikasi tidak dipicu oleh @mytharcher
  - Memperbaiki masalah di mana tugas asinkron tidak berakhir setelah terjadi kesalahan dalam impor asinkron oleh @cgyrock
  - Memperbaiki impor lambat yang menyebabkan kesalahan SES oleh @mytharcher
- **[Cetak template]** Memperbaiki kesalahan pencetakan koleksi SQL oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah konkurensi saat menambahkan penerima tugas oleh @mytharcher
- **[Manajer email]** Memperbaiki kesalahan halaman ketika email tidak ada oleh @jiannx
- **[Manajer migrasi]** Memperbaiki masalah di mana migrasi terputus karena kesalahan yang disebabkan oleh lingkungan target yang tidak memiliki tabel baru yang dibuat selama proses migrasi unggah. oleh @Andrew1989Y
