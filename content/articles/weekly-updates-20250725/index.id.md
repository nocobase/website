---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: dukungan untuk menampilkan tabel yang ditentukan plugin di sumber data utama, uji coba untuk node, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.10](https://www.nocobase.com/en/blog/v1.8.10)

*Tanggal rilis: 24-07-2025*

#### 🎉 Fitur Baru

* **[Auth: SAML 2.0]** Mendukung pengalihan otomatis ke URL SSO saat pengguna tidak diautentikasi oleh @2013xile
* **[server]** Mendukung konfigurasi batas ukuran body permintaan melalui variabel lingkungan ([#7273](https://github.com/nocobase/nocobase/pull/7273)) oleh @aaaaaajie
* **[Workflow: Node paralel]** Menambahkan mode "Semua terselesaikan" untuk node paralel ([#7263](https://github.com/nocobase/nocobase/pull/7263)) oleh @mytharcher
* **[Adaptor antrian Redis]** Menambahkan adaptor Redis untuk antrian acara oleh @mytharcher

#### 🚀 Peningkatan

* **[Workflow]** Menambahkan konstanta tipe json untuk variabel pengujian ([#7274](https://github.com/nocobase/nocobase/pull/7274)) oleh @mytharcher
* **[Integrasi AI]** Menghapus `await` untuk memanggil `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) oleh @mytharcher
* **[Workflow: Perhitungan JSON]** Membuat node kueri JSON dapat diuji oleh @mytharcher
* **[server]** Membuat antrian memori bersamaan tersedia saat item yang diproses tidak penuh ([#7267](https://github.com/nocobase/nocobase/pull/7267)) oleh @mytharcher
* **[database]** Secara otomatis mengaktifkan paginasi sederhana ketika kumpulan data melebihi ambang batas ([#7227](https://github.com/nocobase/nocobase/pull/7227)) oleh @aaaaaajie
* **[Workflow: Node manual]** storePopupContext mendukung penyimpanan konteks default ([#7264](https://github.com/nocobase/nocobase/pull/7264)) oleh @zhangzhonghe
* **[Adaptor antrian Redis]** Membuat antrian bersamaan tersedia saat item yang diproses tidak penuh untuk adaptor Redis oleh @mytharcher

#### 🐛 Perbaikan Bug

* **[client]**
  * pencarian fuzzy tidak berfungsi di bidang asosiasi pilih saat menggunakan formula sebagai bidang judul ([#7280](https://github.com/nocobase/nocobase/pull/7280)) oleh @katherinehhh
  * variabel objek saat ini hilang dalam aturan tautan sub-tabel ([#7266](https://github.com/nocobase/nocobase/pull/7266)) oleh @katherinehhh
  * Pengaturan bidang judul pemilih data tidak valid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) oleh @zhangzhonghe
  * Memperbaiki masalah di mana bidang Markdown tidak dirender dengan benar di tampilan detail. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) oleh @aaaaaajie
  * Setelah perubahan bidang, bidang asosiasi yang bergantung pada bidang ini belum menghapus nilainya ([#7262](https://github.com/nocobase/nocobase/pull/7262)) oleh @zhangzhonghe
  * masalah tampilan ketika variabel tanggal yang tidak digunakan lagi digunakan di bidang tanggal data historis ([#7253](https://github.com/nocobase/nocobase/pull/7253)) oleh @katherinehhh
* **[database]**
  * Menyelesaikan kegagalan paginasi sederhana otomatis yang disebabkan oleh konvensi penamaan tabel. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) oleh @aaaaaajie
  * Memperbaiki kegagalan saat mengekspor kumpulan data besar dari PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) oleh @aaaaaajie
  * Memperbaiki masalah di mana pengurutan kunci utama default menyebabkan kegagalan pemuatan daftar saat menggunakan sumber data eksternal MSSQL di blok tabel. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) oleh @aaaaaajie
* **[auth]** Memperbaiki masalah di mana `secret` kosong dalam konfigurasi sub-aplikasi mencegah masuk ([#7239](https://github.com/nocobase/nocobase/pull/7239)) oleh @2013xile
* **[Manajer sumber data]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi ([#7249](https://github.com/nocobase/nocobase/pull/7249)) oleh @aaaaaajie
* **[Aksi: Edit batch]** Tidak dapat melakukan edit massal dan pembaruan massal di pemilih data ([#7250](https://github.com/nocobase/nocobase/pull/7250)) oleh @zhangzhonghe
* **[Workflow]** Memperbaiki versi dependensi yang salah ([#7258](https://github.com/nocobase/nocobase/pull/7258)) oleh @mytharcher
* **[Sumber data: Oracle Eksternal]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi oleh @aaaaaajie
* **[Workflow: Persetujuan]** URL tombol Tautan mengarah ke popup di halaman saat ini, tetapi mengkliknya menunjukkan kesalahan 404 oleh @zhangzhonghe
* **[Manajer email]** koleksi hubungan pesan dan label tidak normal di bawah mysql oleh @jiannx

### [v1.8.7](https://www.nocobase.com/en/blog/v1.8.7)

*Tanggal rilis: 18-07-2025*

#### 🎉 Fitur Baru

- **[Workflow: node perhitungan tanggal]** Mendukung untuk menjalankan node uji coba oleh @mytharcher

#### 🚀 Peningkatan

- **[client]** Pemilih Warna: Menambahkan empat warna yang direkomendasikan ([#7226](https://github.com/nocobase/nocobase/pull/7226)) oleh @zhangzhonghe
- **[Workflow]** Membuat perbandingan kompatibel untuk nilai tanggal ([#7237](https://github.com/nocobase/nocobase/pull/7237)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**
  - aturan gaya tidak berfungsi pada kolom aksi tabel ([#7225](https://github.com/nocobase/nocobase/pull/7225)) oleh @katherinehhh
  - Saat menghapus menu, data terkait di tabel uiSchemas tidak dihapus ([#7232](https://github.com/nocobase/nocobase/pull/7232)) oleh @zhangzhonghe
  - Hindari bidang non-asosiasi untuk dipilih di appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) oleh @mytharcher
- **[Workflow: Subflow]** Memperbaiki kesalahan yang muncul ketika sinyal panggilan balik tiba tetapi eksekusi yang tertunda tidak ada di instance saat ini oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.5](https://www.nocobase.com/en/blog/v1.9.0-beta.5)

*Tanggal rilis: 24-07-2025*

#### 🎉 Fitur Baru

- **[server]** Mendukung konfigurasi batas ukuran body permintaan melalui variabel lingkungan ([#7273](https://github.com/nocobase/nocobase/pull/7273)) oleh @aaaaaajie
- **[Workflow: Node paralel]** Menambahkan mode "Semua terselesaikan" untuk node paralel ([#7263](https://github.com/nocobase/nocobase/pull/7263)) oleh @mytharcher
- **[Auth: SAML 2.0]** Mendukung pengalihan otomatis ke URL SSO saat pengguna tidak diautentikasi oleh @2013xile
- **[Adaptor antrian Redis]** Menambahkan adaptor Redis untuk antrian acara oleh @mytharcher
- **[Workflow: node perhitungan tanggal]** Mendukung untuk menjalankan node uji coba oleh @mytharcher

#### 🚀 Peningkatan

- **[server]** Membuat antrian memori bersamaan tersedia saat item yang diproses tidak penuh ([#7267](https://github.com/nocobase/nocobase/pull/7267)) oleh @mytharcher
- **[database]** Secara otomatis mengaktifkan paginasi sederhana ketika kumpulan data melebihi ambang batas ([#7227](https://github.com/nocobase/nocobase/pull/7227)) oleh @aaaaaajie
- **[client]** Pemilih Warna: Menambahkan empat warna yang direkomendasikan ([#7226](https://github.com/nocobase/nocobase/pull/7226)) oleh @zhangzhonghe
- **[Integrasi AI]** Menghapus `await` untuk memanggil `saveJob` ([#7275](https://github.com/nocobase/nocobase/pull/7275)) oleh @mytharcher
- **[Workflow: Node manual]** storePopupContext mendukung penyimpanan konteks default ([#7264](https://github.com/nocobase/nocobase/pull/7264)) oleh @zhangzhonghe
- **[Workflow]**
  - Menambahkan konstanta tipe json untuk variabel pengujian ([#7274](https://github.com/nocobase/nocobase/pull/7274)) oleh @mytharcher
  - Gunakan pencatatan alih-alih melempar kesalahan ketika eksekusi tidak boleh berjalan karena status ([#7217](https://github.com/nocobase/nocobase/pull/7217)) oleh @mytharcher
  - Membuat perbandingan kompatibel untuk nilai tanggal ([#7237](https://github.com/nocobase/nocobase/pull/7237)) oleh @mytharcher
- **[Bidang koleksi: Formula]** Menambahkan lebih banyak antarmuka yang dapat dihitung ([#7215](https://github.com/nocobase/nocobase/pull/7215)) oleh @mytharcher
- **[Adaptor antrian Redis]** Membuat antrian bersamaan tersedia saat item yang diproses tidak penuh untuk adaptor Redis oleh @mytharcher
- **[Workflow: Perhitungan JSON]** Membuat node kueri JSON dapat diuji oleh @mytharcher
- **[Workflow: Persetujuan]** Mendukung untuk menghapus persetujuan ketika data terkait dihapus oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**
  - pencarian fuzzy tidak berfungsi di bidang asosiasi pilih saat menggunakan formula sebagai bidang judul ([#7280](https://github.com/nocobase/nocobase/pull/7280)) oleh @katherinehhh
  - variabel objek saat ini hilang dalam aturan tautan sub-tabel ([#7266](https://github.com/nocobase/nocobase/pull/7266)) oleh @katherinehhh
  - Setelah perubahan bidang, bidang asosiasi yang bergantung pada bidang ini belum menghapus nilainya ([#7262](https://github.com/nocobase/nocobase/pull/7262)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana bidang Markdown tidak dirender dengan benar di tampilan detail. ([#7257](https://github.com/nocobase/nocobase/pull/7257)) oleh @aaaaaajie
  - Pengaturan bidang judul pemilih data tidak valid ([#7251](https://github.com/nocobase/nocobase/pull/7251)) oleh @zhangzhonghe
  - Hindari bidang non-asosiasi untuk dipilih di appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) oleh @mytharcher
  - Saat menghapus menu, data terkait di tabel uiSchemas tidak dihapus ([#7232](https://github.com/nocobase/nocobase/pull/7232)) oleh @zhangzhonghe
  - aturan gaya tidak berfungsi pada kolom aksi tabel ([#7225](https://github.com/nocobase/nocobase/pull/7225)) oleh @katherinehhh
  - masalah tampilan ketika variabel tanggal yang tidak digunakan lagi digunakan di bidang tanggal data historis ([#7253](https://github.com/nocobase/nocobase/pull/7253)) oleh @katherinehhh
  - masalah tampilan untuk bidang asosiasi dalam aturan tautan ([#7220](https://github.com/nocobase/nocobase/pull/7220)) oleh @katherinehhh
  - Memperbaiki kesalahan: Tidak dapat menyelesaikan 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) oleh @zhangzhonghe
- **[database]**
  - Menyelesaikan kegagalan paginasi sederhana otomatis yang disebabkan oleh konvensi penamaan tabel. ([#7256](https://github.com/nocobase/nocobase/pull/7256)) oleh @aaaaaajie
  - Memperbaiki masalah di mana pengurutan kunci utama default menyebabkan kegagalan pemuatan daftar saat menggunakan sumber data eksternal MSSQL di blok tabel. ([#7259](https://github.com/nocobase/nocobase/pull/7259)) oleh @aaaaaajie
  - Memperbaiki kegagalan saat mengekspor kumpulan data besar dari PostgreSQL ([#7228](https://github.com/nocobase/nocobase/pull/7228)) oleh @aaaaaajie
  - Memperbaiki kesalahan saat mengaktifkan paginasi sederhana untuk tabel sumber data eksternal ([#7222](https://github.com/nocobase/nocobase/pull/7222)) oleh @aaaaaajie
- **[auth]** Memperbaiki masalah di mana `secret` kosong dalam konfigurasi sub-aplikasi mencegah masuk ([#7239](https://github.com/nocobase/nocobase/pull/7239)) oleh @2013xile
- **[Workflow]** Memperbaiki versi dependensi yang salah ([#7258](https://github.com/nocobase/nocobase/pull/7258)) oleh @mytharcher
- **[Aksi: Edit batch]** Tidak dapat melakukan edit massal dan pembaruan massal di pemilih data ([#7250](https://github.com/nocobase/nocobase/pull/7250)) oleh @zhangzhonghe
- **[Manajer sumber data]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi ([#7249](https://github.com/nocobase/nocobase/pull/7249)) oleh @aaaaaajie
- **[Bidang koleksi: Urutkan]** pemilihan bidang urutkan hilang saat menduplikasi catatan ([#7116](https://github.com/nocobase/nocobase/pull/7116)) oleh @katherinehhh
- **[Sumber data: Oracle Eksternal]** Memperbaiki pelestarian atribut sumber data eksternal dalam konfigurasi koleksi oleh @aaaaaajie
- **[Workflow: Subflow]** Memperbaiki kesalahan yang muncul ketika sinyal panggilan balik tiba tetapi eksekusi yang tertunda tidak ada di instance saat ini oleh @mytharcher
- **[Workflow: Persetujuan]**
  - Memperbaiki beberapa tingkat asosiasi saat mengirimkan persetujuan oleh @mytharcher
  - URL tombol Tautan mengarah ke popup di halaman saat ini, tetapi mengkliknya menunjukkan kesalahan 404 oleh @zhangzhonghe
  - Memperbaiki asosiasi saat mengirimkan persetujuan oleh @mytharcher
  - Menambahkan toleransi kesalahan untuk persetujuan yang dihapus dalam daftar catatan oleh @mytharcher
  - Memperbaiki pengecualian saat menghapus catatan oleh @mytharcher
- **[Manajer email]** koleksi hubungan pesan dan label tidak normal di bawah mysql oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.3](https://www.nocobase.com/en/blog/v1.9.0-alpha.3)

*Tanggal rilis: 18-07-2025*

#### 🎉 Fitur Baru

- **[Sumber data: Utama]** Mendukung menampilkan tabel yang ditentukan plugin di sumber data utama. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) oleh @aaaaaajie
- **[Workflow: node perhitungan tanggal]** Mendukung untuk menjalankan node uji coba oleh @mytharcher

#### 🚀 Peningkatan

- **[client]** Pemilih Warna: Menambahkan empat warna yang direkomendasikan ([#7226](https://github.com/nocobase/nocobase/pull/7226)) oleh @zhangzhonghe
- **[Workflow]** Membuat perbandingan kompatibel untuk nilai tanggal ([#7237](https://github.com/nocobase/nocobase/pull/7237)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**
  - aturan gaya tidak berfungsi pada kolom aksi tabel ([#7225](https://github.com/nocobase/nocobase/pull/7225)) oleh @katherinehhh
  - Hindari bidang non-asosiasi untuk dipilih di appends ([#7231](https://github.com/nocobase/nocobase/pull/7231)) oleh @mytharcher
  - Memperbaiki kesalahan: Tidak dapat menyelesaikan 'react-device-detect ([#7224](https://github.com/nocobase/nocobase/pull/7224)) oleh @zhangzhonghe
  - Saat menghapus menu, data terkait di tabel uiSchemas tidak dihapus ([#7232](https://github.com/nocobase/nocobase/pull/7232)) oleh @zhangzhonghe
- **[database]** Memperbaiki kesalahan saat mengaktifkan paginasi sederhana untuk tabel sumber data eksternal ([#7222](https://github.com/nocobase/nocobase/pull/7222)) oleh @aaaaaajie
- **[Bidang koleksi: Urutkan]** pemilihan bidang urutkan hilang saat menduplikasi catatan ([#7116](https://github.com/nocobase/nocobase/pull/7116)) oleh @katherinehhh
- **[Workflow: Subflow]** Memperbaiki kesalahan yang muncul ketika sinyal panggilan balik tiba tetapi eksekusi yang tertunda tidak ada di instance saat ini oleh @mytharcher
- **[Workflow: Persetujuan]**
  - Memperbaiki beberapa tingkat asosiasi saat mengirimkan persetujuan oleh @mytharcher
  - Menambahkan toleransi kesalahan untuk persetujuan yang dihapus dalam daftar catatan oleh @mytharcher
- **[Manajer email]** kinerja optimal daftar pesan email oleh @jiannx
