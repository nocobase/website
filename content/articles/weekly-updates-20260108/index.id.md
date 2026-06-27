---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Dukungan komponen pemeliharaan yang ditentukan plugin saat aplikasi memasuki status pemeliharaan, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat diperiksa di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.9.33](https://www.nocobase.com/en/blog/v1.9.33)

*Tanggal rilis: 2026-01-04*

### 🎉 Fitur Baru

- **[klien]** Mendukung komponen pemeliharaan yang ditentukan plugin saat aplikasi memasuki status pemeliharaan ([#8252](https://github.com/nocobase/nocobase/pull/8252)) oleh @cgyrock
- **[Manajer file]** Mendukung konfigurasi metode penggantian nama file ([#8231](https://github.com/nocobase/nocobase/pull/8231)) oleh @JAVA-LW
- **[Penyimpanan file: S3(Pro)]** Menambahkan opsi mode ganti nama untuk penyimpanan S3 Pro oleh @mytharcher

### 🚀 Peningkatan

- **[Manajer migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[database]**

  - Sertakan scope through saat melakukan kueri relasi m2m ([#8277](https://github.com/nocobase/nocobase/pull/8277)) oleh @2013xile
  - Perbaiki `appends` objek di `OptionsParser`, dan tingkatkan `arrayLimit` untuk parameter ([#8328](https://github.com/nocobase/nocobase/pull/8328)) oleh @mytharcher
- **[klien]** Perbaiki masalah error yang muncul di pengaturan blok formulir filter dari bidang m2m ([#8282](https://github.com/nocobase/nocobase/pull/8282)) oleh @mytharcher
- **[Manajer tugas asinkron]** Perbaiki bahasa saat membatalkan tugas latar belakang ([#8245](https://github.com/nocobase/nocobase/pull/8245)) oleh @mytharcher
- **[Manajer file]** Perbaiki masalah error yang muncul saat mengunggah file lebih besar dari 5MB ke AWS S3 ([#8275](https://github.com/nocobase/nocobase/pull/8275)) oleh @mytharcher
- **[Alur kerja]** Perbaiki event database menjadi tidak valid setelah menyegarkan sumber data eksternal ([#8207](https://github.com/nocobase/nocobase/pull/8207)) oleh @cgyrock
- **[Koleksi: Pohon]** Perbarui jalur setelah membuat node koleksi pohon secara massal ([#8267](https://github.com/nocobase/nocobase/pull/8267)) oleh @2013xile
- **[Sumber data: PostgreSQL Eksternal]** Perbaiki event database menjadi tidak valid setelah menyegarkan sumber data eksternal oleh @cgyrock
- **[Sumber data: Oracle Eksternal]** Perbaiki event database menjadi tidak valid setelah menyegarkan sumber data eksternal oleh @cgyrock

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v2.0.0-beta.6](https://www.nocobase.com/en/blog/v2.0.0-beta.6)

*Tanggal rilis: 2026-01-07*

### 🚀 Peningkatan

- **[Alur kerja: Persetujuan]** Sederhanakan parameter dalam kueri, dan tingkatkan kinerja oleh @mytharcher

### 🐛 Perbaikan Bug

- **[sdk]** Tingkatkan implementasi berbagi token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) oleh @chenos
- **[klien]** perbaiki bidang asosiasi dari sumber data eksternal tidak memuat data asosiasi di blok formulir ([#8356](https://github.com/nocobase/nocobase/pull/8356)) oleh @katherinehhh
- **[Alur kerja: Node loop]** Perbaiki masalah di mana node yang gagal di cabang kondisi tidak dapat meneruskan status ke node cabang atas ([#8360](https://github.com/nocobase/nocobase/pull/8360)) oleh @mytharcher
- **[Kontrol akses]** Izinkan bidang asosiasi untuk berasosiasi menggunakan kunci target ([#8352](https://github.com/nocobase/nocobase/pull/8352)) oleh @2013xile
- **[Alur kerja: Webhook]** Perbaiki masalah di mana error 404 muncul saat posting ke URL webhook di sub-aplikasi oleh @mytharcher
- **[Manajer email]** Perbaiki tautan balasan Outlook yang kadang terputus oleh @jiannx

### [v2.0.0-beta.5](https://www.nocobase.com/en/blog/v2.0.0-beta.5)

*Tanggal rilis: 2026-01-06*

### 🚀 Peningkatan

- **[klien]** Ubah ukuran textarea secara otomatis di formulir tugas edit AI. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) oleh @heziqiang
- **[Alur kerja: Persetujuan]** Tambahkan logika perbaikan untuk audiens sinkron setelah migrasi oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah di mana izin bidang dan tindakan tidak dihitung ulang setelah paginasi di blok detail, daftar, dan formulir. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) oleh @gchust
- **[Alur kerja: Persetujuan]** Perbaiki error build yang disebabkan oleh dependensi yang terlewat oleh @mytharcher

### [v2.0.0-beta.4](https://www.nocobase.com/en/blog/v2.0.0-beta.4)

*Tanggal rilis: 2026-01-05*

### 🐛 Perbaikan Bug

- **[Tindakan: Impor catatan]** Perbaiki pesan error yang salah saat error batasan unik dipicu selama impor XLSX asinkron ([#8342](https://github.com/nocobase/nocobase/pull/8342)) oleh @cgyrock
- **[Tindakan: Ekspor catatan Pro]** Perbaiki error saat sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock
- **[Manajer email]** tampilkan tombol balas semua dan cakupan data mendukung pemfilteran pesan anak. oleh @jiannx

### [v2.0.0-beta.3](https://www.nocobase.com/en/blog/v2.0.0-beta.3)

*Tanggal rilis: 2026-01-05*

### 🚀 Peningkatan

- **[Kontrol akses]** Tingkatkan pemeriksaan izin saat memodifikasi bidang asosiasi bersarang ([#7856](https://github.com/nocobase/nocobase/pull/7856)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki masalah di mana bidang asosiasi tidak benar di komponen `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) oleh @mytharcher
- **[Sumber data: Utama]** Metadata koleksi tampilan harus menyertakan opsi bidang sumber ([#8337](https://github.com/nocobase/nocobase/pull/8337)) oleh @2013xile
- **[Alur kerja: Persetujuan]** Perbaiki masalah di mana bidang filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher

### [v2.0.0-beta.2](https://www.nocobase.com/en/blog/v2.0.0-beta.2)

*Tanggal rilis: 2026-01-04*

### 🐛 Perbaikan Bug

- **[flow-engine]** Perbaiki masalah di mana polusi status dapat terjadi saat membuka popup beberapa kali. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) oleh @gchust
- **[database]** Perbaiki `appends` objek di `OptionsParser`, dan tingkatkan `arrayLimit` untuk parameter ([#8328](https://github.com/nocobase/nocobase/pull/8328)) oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.63](https://www.nocobase.com/en/blog/v2.0.0-alpha.63)

*Tanggal rilis: 2026-01-07*

### 🚀 Peningkatan

- **[klien]**

  - cegah render ulang seluruh tabel saat memperbarui sel ([#8349](https://github.com/nocobase/nocobase/pull/8349)) oleh @katherinehhh
  - Ubah ukuran textarea secara otomatis di formulir tugas edit AI. ([#8350](https://github.com/nocobase/nocobase/pull/8350)) oleh @heziqiang
- **[Alur kerja: Persetujuan]**

  - Tambahkan logika perbaikan untuk audiens sinkron setelah migrasi oleh @mytharcher
  - Sederhanakan parameter dalam kueri, dan tingkatkan kinerja oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**

  - Perbaiki masalah di mana izin bidang dan tindakan tidak dihitung ulang setelah paginasi di blok detail, daftar, dan formulir. ([#8336](https://github.com/nocobase/nocobase/pull/8336)) oleh @gchust
  - perbaiki bidang asosiasi dari sumber data eksternal tidak memuat data asosiasi di blok formulir ([#8356](https://github.com/nocobase/nocobase/pull/8356)) oleh @katherinehhh
- **[sdk]** Tingkatkan implementasi berbagi token ([#8357](https://github.com/nocobase/nocobase/pull/8357)) oleh @chenos
- **[Kontrol akses]** Izinkan bidang asosiasi untuk berasosiasi menggunakan kunci target ([#8352](https://github.com/nocobase/nocobase/pull/8352)) oleh @2013xile
- **[Alur kerja: Node loop]** Perbaiki masalah di mana node yang gagal di cabang kondisi tidak dapat meneruskan status ke node cabang atas ([#8360](https://github.com/nocobase/nocobase/pull/8360)) oleh @mytharcher
- **[Alur kerja: Webhook]** Perbaiki masalah di mana error 404 muncul saat posting ke URL webhook di sub-aplikasi oleh @mytharcher
- **[Alur kerja: Persetujuan]** Perbaiki error build yang disebabkan oleh dependensi yang terlewat oleh @mytharcher
- **[Manajer email]** Perbaiki tautan balasan Outlook yang kadang terputus oleh @jiannx

### [v2.0.0-alpha.62](https://www.nocobase.com/en/blog/v2.0.0-alpha.62)

*Tanggal rilis: 2026-01-05*

### 🚀 Peningkatan

- **[Kontrol akses]** Tingkatkan pemeriksaan izin saat memodifikasi bidang asosiasi bersarang ([#7856](https://github.com/nocobase/nocobase/pull/7856)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**

  - perbaiki logika refine untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh
  - Perbaiki masalah di mana bidang asosiasi tidak benar di komponen `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) oleh @mytharcher
  - perbaiki parameter filter yang salah untuk bidang relasi Select di subtable yang dapat diedit ([#8335](https://github.com/nocobase/nocobase/pull/8335)) oleh @katherinehhh
- **[flow-engine]** Perbaiki masalah di mana polusi status dapat terjadi saat membuka popup beberapa kali. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) oleh @gchust
- **[database]** Perbaiki `appends` objek di `OptionsParser`, dan tingkatkan `arrayLimit` untuk parameter ([#8328](https://github.com/nocobase/nocobase/pull/8328)) oleh @mytharcher
- **[Tindakan: Impor catatan]** Perbaiki pesan error yang salah saat error batasan unik dipicu selama impor XLSX asinkron ([#8342](https://github.com/nocobase/nocobase/pull/8342)) oleh @cgyrock
- **[Sumber data: Utama]** Metadata koleksi tampilan harus menyertakan opsi bidang sumber ([#8337](https://github.com/nocobase/nocobase/pull/8337)) oleh @2013xile
- **[Tindakan: Ekspor catatan Pro]** Perbaiki error saat sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock
- **[Alur kerja: Persetujuan]** Perbaiki masalah di mana bidang filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher
- **[Manajer email]** tampilkan tombol balas semua dan cakupan data mendukung pemfilteran pesan anak. oleh @jiannx

### [v2.0.0-alpha.59](https://www.nocobase.com/en/blog/v2.0.0-alpha.59)

*Tanggal rilis: 2025-12-25*

### 🚀 Peningkatan

- **[flow-engine]**
  - Optimalkan masalah kinerja saat mengganti mode konfigurasi ([#8241](https://github.com/nocobase/nocobase/pull/8241)) oleh @zhangzhonghe
  - Dukung objek FormData di lingkungan runjs. ([#8263](https://github.com/nocobase/nocobase/pull/8263)) oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]** Perbaiki stack overflow yang disebabkan oleh loop tak terbatas dalam pemuatan lambat bidang asosiasi tampilan ([#8262](https://github.com/nocobase/nocobase/pull/8262)) oleh @zhangzhonghe
