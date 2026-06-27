---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam alur kerja yang sama, cetak template mendukung array many-to-many, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.18](https://www.nocobase.com/en/blog/v1.8.18)

*Tanggal rilis: 19-08-2025*

#### 🚀 Peningkatan

- **[Alur Kerja]** Memperbarui menu pemilihan node untuk menampilkan opsi dalam tata letak dua kolom guna meningkatkan kepadatan informasi dan memungkinkan pengguna melihat lebih banyak opsi sekaligus ([#7396](https://github.com/nocobase/nocobase/pull/7396)) oleh @mytharcher
- **[Pengaturan lisensi]** Di pengaturan lisensi, salin ID Instance terbaru setiap kali ([#7387](https://github.com/nocobase/nocobase/pull/7387)) oleh @jiannx

#### 🐛 Perbaikan Bug

- **[klien]**

  - memperlakukan angka 0 sebagai kosong selama validasi kosong aturan tautan ([#7404](https://github.com/nocobase/nocobase/pull/7404)) oleh @katherinehhh
  - Memperbaiki teks tombol tautan yang memutus baris ([#7406](https://github.com/nocobase/nocobase/pull/7406)) oleh @mytharcher
- **[Seluler]** format tampilan bidang tanggal yang salah di perangkat seluler ([#7412](https://github.com/nocobase/nocobase/pull/7412)) oleh @katherinehhh
- **[Penampil File Office]** Memperbaiki kesalahan yang muncul saat mengunggah file ke bidang URL lampiran ([#7405](https://github.com/nocobase/nocobase/pull/7405)) oleh @mytharcher
- **[Alur Kerja]** Memperbaiki kesalahan yang muncul dan data formulir yang hilang saat mengedit kategori alur kerja ([#7408](https://github.com/nocobase/nocobase/pull/7408)) oleh @mytharcher
- **[Alur Kerja: node pengirim surat]** Memperbaiki masalah di mana node email mungkin tidak melanjutkan eksekusi dengan benar ([#7409](https://github.com/nocobase/nocobase/pull/7409)) oleh @mytharcher
- **[Alur Kerja: Acara tindakan kustom]** Menghapus baris yang dipilih setelah berhasil memicu tindakan pada beberapa catatan oleh @mytharcher
- **[Cetak templat]** Pencetakan bidang pilih-radio dalam beberapa baris data oleh @jiannx
- **[Alur Kerja: Persetujuan]** Memperbaiki masalah di mana memuat data sumber data eksternal dalam catatan persetujuan menghasilkan kesalahan 404 oleh @mytharcher

### [v1.8.17](https://www.nocobase.com/en/blog/v1.8.17)

*Tanggal rilis: 15-08-2025*

#### 🎉 Fitur Baru

- **[Alur Kerja: Persetujuan]** Mendukung penggunaan judul tugas yang konsisten untuk semua node persetujuan dalam alur kerja yang sama oleh @mytharcher

#### 🚀 Peningkatan

- **[Otentikasi]** Menghapus parameter token dari URL setelah berhasil masuk ([#7386](https://github.com/nocobase/nocobase/pull/7386)) oleh @2013xile
- **[Cetak templat]** mendukung array bidang m2m oleh @jiannx

#### 🐛 Perbaikan Bug

- **[Seluler]** Memperbaiki masalah di mana data pengiriman formulir dalam dialog persetujuan seluler salah ([#7389](https://github.com/nocobase/nocobase/pull/7389)) oleh @zhangzhonghe
- **[Alur Kerja]** Memperbaiki terjemahan judul halaman di pusat tugas alur kerja ([#7392](https://github.com/nocobase/nocobase/pull/7392)) oleh @mytharcher
- **[Kalender]** tooltip item acara kalender menampilkan [object Object] ([#7372](https://github.com/nocobase/nocobase/pull/7372)) oleh @katherinehhh
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki terjemahan ([#7384](https://github.com/nocobase/nocobase/pull/7384)) oleh @mytharcher
- **[Manajer file]** Menghapus petunjuk untuk batas ukuran unggahan file ([#7391](https://github.com/nocobase/nocobase/pull/7391)) oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]**

  - Menghentikan penggunaan parameter bermasalah `attachmentField` oleh @mytharcher
  - Memperbaiki masalah di mana metode otentikasi IAM tidak dapat digunakan untuk mengunggah file oleh @mytharcher

### [v1.8.16](https://www.nocobase.com/en/blog/v1.8.16)

*Tanggal rilis: 14-08-2025*

#### 🚀 Peningkatan

- **[Notifikasi: Pesan dalam aplikasi]** Menghapus output log SQL melalui `console.log` ([#7368](https://github.com/nocobase/nocobase/pull/7368)) oleh @2013xile

#### 🐛 Perbaikan Bug

- **[server]** Beberapa permintaan kekurangan `ctx.action`, menyebabkan kesalahan di middleware log audit ([#7369](https://github.com/nocobase/nocobase/pull/7369)) oleh @2013xile
- **[Bidang koleksi: Rumus]** Memperbaiki masalah di mana input rumus tidak dapat melewati validasi karena tipe variabel ([#7373](https://github.com/nocobase/nocobase/pull/7373)) oleh @mytharcher
- **[Manajer cadangan]** pencadangan file besar dapat menampilkan "berhasil" sebelum benar-benar selesai oleh @gchust
