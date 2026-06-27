---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: Perbaikan dan Peningkatan Alur Kerja, optimalisasi fungsi seret dan lepas, dan lainnya."
---

Ringkaskan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.27](https://www.nocobase.com/en/blog/v1.8.27)

*Tanggal rilis: 2025-10-02*

### 🚀 Peningkatan

- **[klien]** Mendukung rotasi gambar saat pratinjau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) oleh @mytharcher
- **[Alur Kerja]** Memisahkan logika terkait pengiriman ke dalam dispatcher mandiri ([#7535](https://github.com/nocobase/nocobase/pull/7535)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana submenu sidebar tidak dapat disorot dengan benar ([#7520](https://github.com/nocobase/nocobase/pull/7520)) oleh @duannyuuu
- **[Alur Kerja: Node perulangan]** Memperbaiki masalah di mana proses secara tidak benar melanjutkan ke item berikutnya bahkan ketika kondisi node perulangan tidak terpenuhi ([#7521](https://github.com/nocobase/nocobase/pull/7521)) oleh @mytharcher
- **[Alur Kerja]**
  - Memperbaiki masalah eksekusi duplikat karena penanganan antrian yang tidak tepat ([#7533](https://github.com/nocobase/nocobase/pull/7533)) oleh @mytharcher
  - Memperbaiki masalah di mana kondisi daftar alur kerja tidak benar saat memuat konteks bidang terkait dalam konfigurasi alur kerja terikat ([#7516](https://github.com/nocobase/nocobase/pull/7516)) oleh @mytharcher
  - Memperbaiki masalah di mana tugas terjadwal berdasarkan bidang tanggal tidak terpicu setelah dimulai ([#7524](https://github.com/nocobase/nocobase/pull/7524)) oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.9.0-beta.11](https://www.nocobase.com/en/blog/v1.9.0-beta.11)

*Tanggal rilis: 2025-10-09*

### 🚀 Peningkatan

* **[server]** Menambahkan penanganan siklus hidup shutdown yang baik untuk aplikasi ([#7536](https://github.com/nocobase/nocobase/pull/7536)) oleh @mytharcher
* **[Alur Kerja: Node perulangan]** Mendukung pembatasan jumlah maksimum siklus untuk node perulangan melalui variabel lingkungan ([#7543](https://github.com/nocobase/nocobase/pull/7543)) oleh @mytharcher
* **[Alur Kerja]** Mendukung pembatasan jumlah maksimum node dalam alur kerja melalui variabel lingkungan ([#7542](https://github.com/nocobase/nocobase/pull/7542)) oleh @mytharcher
* **[Alur Kerja: Persetujuan]** Menambahkan tombol cetak ke popup detail di blok persetujuan kustom oleh @mytharcher

### 🐛 Perbaikan Bug

* **[Manajer Email]** pengecualian otorisasi ulang oleh @jiannx

### [v1.9.0-beta.10](https://www.nocobase.com/en/blog/v1.9.0-beta.10)

*Tanggal rilis: 2025-10-09*

### 🐛 Perbaikan Bug

* **[klien]** Memperbaiki masalah di mana properti dinamis yang hilang di komponen `AssignedField` menyebabkan kesalahan unggah file di node "Buat catatan" atau "Perbarui catatan" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) oleh @mytharcher
* **[Formulir publik]** Memperbaiki masalah di mana aturan unggah untuk bidang file di formulir publik tidak benar ([#7553](https://github.com/nocobase/nocobase/pull/7553)) oleh @mytharcher

### [v1.9.0-beta.9](https://www.nocobase.com/en/blog/v1.9.0-beta.9)

*Tanggal rilis: 2025-09-30*

### 🎉 Fitur Baru

* **[klien]**
  * Blok tabel mendukung penambahan tombol 'Pengaturan kolom' untuk mengonfigurasi urutan dan visibilitas kolom ([#7204](https://github.com/nocobase/nocobase/pull/7204)) oleh @kerwin612
  * Mendukung aturan validasi bidang ([#7297](https://github.com/nocobase/nocobase/pull/7297)) oleh @aaaaaajie
* **[Sumber data: Utama]**
  * Mendukung pembacaan tabel dari sumber data utama ([#7238](https://github.com/nocobase/nocobase/pull/7238)) oleh @aaaaaajie
  * Mendukung menampilkan tabel yang ditentukan plugin di sumber data utama. ([#7187](https://github.com/nocobase/nocobase/pull/7187)) oleh @aaaaaajie

### 🚀 Peningkatan

* **[klien]** Mendukung rotasi gambar saat pratinjau ([#7523](https://github.com/nocobase/nocobase/pull/7523)) oleh @mytharcher
* **[snowflake-id]** Mengubah ID tabel sistem dengan kunci utama auto-increment tetapi tanpa pengidentifikasi unik menjadi ID mirip Snowflake 53-bit ([#7465](https://github.com/nocobase/nocobase/pull/7465)) oleh @2013xile
* **[Alur Kerja]** Memisahkan logika terkait pengiriman ke dalam dispatcher mandiri ([#7535](https://github.com/nocobase/nocobase/pull/7535)) oleh @mytharcher
* **[Adaptor antrian RabbitMQ]** meningkatkan penanganan koneksi RabbitMQ dan logika pemrosesan pesan oleh @sdp-ncd
* **[Manajer Email]**
  * mendukung sinkronisasi batch oleh @jiannx
  * editor kaya mendukung pengubahan ukuran gambar oleh @jiannx

### 🐛 Perbaikan Bug

* **[klien]**
  * Memperbaiki masalah di mana tombol "Pengaturan kolom" memuat kolom dari tabel di dalam dialog modal ([#7385](https://github.com/nocobase/nocobase/pull/7385)) oleh @kerwin612
  * Memperbaiki masalah di mana submenu sidebar tidak dapat disorot dengan benar ([#7520](https://github.com/nocobase/nocobase/pull/7520)) oleh @duannyuuu
* **[Alur Kerja]**
  * Memperbaiki masalah eksekusi duplikat karena penanganan antrian yang tidak tepat ([#7533](https://github.com/nocobase/nocobase/pull/7533)) oleh @mytharcher
  * Memperbaiki masalah di mana kondisi daftar alur kerja tidak benar saat memuat konteks bidang terkait dalam konfigurasi alur kerja terikat ([#7516](https://github.com/nocobase/nocobase/pull/7516)) oleh @mytharcher
  * Memperbaiki masalah di mana tugas terjadwal berdasarkan bidang tanggal tidak terpicu setelah dimulai ([#7524](https://github.com/nocobase/nocobase/pull/7524)) oleh @mytharcher
* **[Alur Kerja: Node perulangan]** Memperbaiki masalah di mana proses secara tidak benar melanjutkan ke item berikutnya bahkan ketika kondisi node perulangan tidak terpenuhi ([#7521](https://github.com/nocobase/nocobase/pull/7521)) oleh @mytharcher
* **[Manajer Email]**
  * Subjek email sampah oleh @jiannx
  * subjek sampah oleh @jiannx
  * editor kaya mendukung pemisahan baris lunak oleh @jiannx
  * Mendukung email yang sama untuk banyak orang oleh @jiannx
  * kinerja optimal daftar pesan email oleh @jiannx
  * setelah memilih baris, atur "Dibaca" dan "Belum dibaca" oleh @jiannx
  * tambahkan bidang rawId untuk optimalisasi kinerja oleh @jiannx
  * atribut ref di html menyebabkan pengecualian rendering oleh @jiannx
  * konten submail tidak dapat difilter oleh @jiannx
  * dukung sinkronisasi ulang oleh @jiannx
  * Bedakan secara manual antara meneruskan dan membalas oleh @jiannx

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v2.0.0-alpha.5](https://www.nocobase.com/en/blog/v2.0.0-alpha.5)

*Tanggal rilis: 2025-10-10*

### 🐛 Perbaikan Bug

- **[server]** Kesalahan migrasi kunci utama ([#7563](https://github.com/nocobase/nocobase/pull/7563)) oleh @2013xile
- **[klien]**

  - Memperbaiki masalah tidak menyegarkan data setelah mengirimkan formulir ([#7560](https://github.com/nocobase/nocobase/pull/7560)) oleh @zhangzhonghe
  - Memperbaiki masalah di mana properti dinamis yang hilang di komponen `AssignedField` menyebabkan kesalahan unggah file di node "Buat catatan" atau "Perbarui catatan" ([#7556](https://github.com/nocobase/nocobase/pull/7556)) oleh @mytharcher
- **[Kalender]** memperbaiki masalah kueri data yang disebabkan oleh pengidentifikasi unik di blok kalender ([#7562](https://github.com/nocobase/nocobase/pull/7562)) oleh @katherinehhh
- **[Blok: template (usang)]** Memperbaiki masalah di mana permintaan yang tidak perlu untuk template blok dipicu saat membuka atau menutup modal ([#7561](https://github.com/nocobase/nocobase/pull/7561)) oleh @gchust
- **[Formulir publik]** Memperbaiki masalah di mana aturan unggah untuk bidang file di formulir publik tidak benar ([#7553](https://github.com/nocobase/nocobase/pull/7553)) oleh @mytharcher
- **[Manajer multi-aplikasi (usang)]** Memperbaiki validasi port sebelum migrasi data multi-aplikasi ([#7540](https://github.com/nocobase/nocobase/pull/7540)) oleh @jiannx

### [v2.0.0-alpha.4](https://www.nocobase.com/en/blog/v2.0.0-alpha.4)

*Tanggal rilis: 2025-10-05*

### 🚀 Peningkatan

* **[mesin-alur]** Mengoptimalkan fungsionalitas seret dan lepas ([#7526](https://github.com/nocobase/nocobase/pull/7526)) oleh @zhangzhonghe
* **[Alur Kerja: Node perulangan]** Mendukung pembatasan jumlah maksimum siklus untuk node perulangan melalui variabel lingkungan ([#7543](https://github.com/nocobase/nocobase/pull/7543)) oleh @mytharcher
* **[Alur Kerja]** Mendukung pembatasan jumlah maksimum node dalam alur kerja melalui variabel lingkungan ([#7542](https://github.com/nocobase/nocobase/pull/7542)) oleh @mytharcher
* **[Alur Kerja: Persetujuan]** Menambahkan tombol cetak ke popup detail di blok persetujuan kustom oleh @mytharcher

### 🐛 Perbaikan Bug

* **[klien]** Memperbaiki masalah di mana tindakan "Jalankan" di editor kode tidak berfungsi, memastikan pengguna sekarang dapat menjalankan kode dengan benar. ([#7547](https://github.com/nocobase/nocobase/pull/7547)) oleh @gchust
* **[Karyawan AI]** Memperbaiki kesalahan pada halaman konfigurasi izin karyawan ai ([#7548](https://github.com/nocobase/nocobase/pull/7548)) oleh @2013xile
* **[Alur Kerja]** Memperbaiki masalah di mana menambahkan alur kerja dalam konfigurasi tombol alur kerja terikat menyebabkan aplikasi membeku setelah diklik ([#7541](https://github.com/nocobase/nocobase/pull/7541)) oleh @mytharcher
* **[Manajer Email]** pengecualian otorisasi ulang oleh @jiannx

### [v1.9.0-alpha.17](https://www.nocobase.com/en/blog/v1.9.0-alpha.17)

*Tanggal rilis: 2025-09-30*

### 🚀 Peningkatan

* **[Alur Kerja]** Memisahkan logika terkait pengiriman ke dalam dispatcher mandiri ([#7535](https://github.com/nocobase/nocobase/pull/7535)) oleh @mytharcher

### 🐛 Perbaikan Bug

* **[Alur Kerja]**
  * Memperbaiki masalah eksekusi duplikat karena penanganan antrian yang tidak tepat ([#7533](https://github.com/nocobase/nocobase/pull/7533)) oleh @mytharcher
  * Memperbaiki masalah di mana tugas terjadwal berdasarkan bidang tanggal tidak terpicu setelah dimulai ([#7524](https://github.com/nocobase/nocobase/pull/7524)) oleh @mytharcher

### [v2.0.0-alpha.1](https://www.nocobase.com/en/blog/v2.0.0-alpha.1)

*Tanggal rilis: 2025-09-30

### 🚀 Peningkatan

- **[server]** Menambahkan penanganan siklus hidup shutdown yang baik untuk aplikasi ([#7536](https://github.com/nocobase/nocobase/pull/7536)) oleh @mytharcher
