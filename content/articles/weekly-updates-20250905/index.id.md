---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: optimasi kueri hitungan API daftar, dukungan alur kerja untuk menguji node notifikasi, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji coba untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji coba yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.23](https://www.nocobase.com/en/blog/v1.8.23)

*Tanggal rilis: 2025-09-03*

#### 🚀 Peningkatan

- **[database]** Mengoptimalkan kueri hitungan daftar API untuk mengurangi konsumsi sumber daya. ([#7453](https://github.com/nocobase/nocobase/pull/7453)) oleh @aaaaaajie
- **[Notifikasi: Pesan dalam aplikasi]** Mendukung konfigurasi penundaan penutupan otomatis untuk notifikasi pesan dalam aplikasi ([#7472](https://github.com/nocobase/nocobase/pull/7472)) oleh @mytharcher
- **[Alur kerja: node notifikasi]** Mendukung pengujian node notifikasi ([#7470](https://github.com/nocobase/nocobase/pull/7470)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - kesalahan render bidang asosiasi saat beralih ke komponen tag di blok formulir edit ([#7468](https://github.com/nocobase/nocobase/pull/7468)) oleh @katherinehhh
  - masalah batas waktu saat tanggal yang dipilih sama dengan minDate ([#7461](https://github.com/nocobase/nocobase/pull/7461)) oleh @katherinehhh
- **[Seluler]** bidang tanggal seluler tanpa zona waktu tidak menampilkan tanggal waktu dengan benar ([#7473](https://github.com/nocobase/nocobase/pull/7473)) oleh @katherinehhh
- **[Formulir publik]** nilai default bidang formulir publik tidak diterapkan saat menggunakan variabel ([#7467](https://github.com/nocobase/nocobase/pull/7467)) oleh @katherinehhh
- **[Aksi: Impor catatan]** Memperbaiki nomor baris yang salah ditampilkan saat data duplikat diimpor ([#7440](https://github.com/nocobase/nocobase/pull/7440)) oleh @aaaaaajie
- **[Koleksi: Pohon]** Hapus event basis data yang terkait dengan koleksi setelah menghapus koleksi pohon ([#7459](https://github.com/nocobase/nocobase/pull/7459)) oleh @2013xile
- **[Alur kerja: Event aksi kustom]** Memperbaiki masalah di mana event aksi kustom tidak dapat dijalankan secara manual segera setelah inisialisasi oleh @mytharcher
- **[Alur kerja: Subalur]** Memperbaiki masalah subproses yang dilanjutkan dan dieksekusi beberapa kali oleh @mytharcher
- **[Alur kerja: Persetujuan]** Untuk pengguna yang bukan penyetuju saat ini, tombol tampilan terkait di tabel alur proses tidak akan ditampilkan oleh @mytharcher
