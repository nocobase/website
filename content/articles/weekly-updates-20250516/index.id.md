---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini meliputi: mengizinkan revisi lebih dari satu draf, menambahkan lebih banyak pengaturan ukuran bawaan untuk gambar status baca, dan perbaikan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.28](https://www.nocobase.com/en/blog/v1.6.28)

*Tanggal rilis: 2025-05-09*

#### 🐛 Perbaikan Bug

- **[database]** Impor gagal karena nilai bidang teks. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) oleh @aaaaaajie
- **[client]** Bidang yang disembunyikan masih ditampilkan ([#6844](https://github.com/nocobase/nocobase/pull/6844)) oleh @zhangzhonghe
- **[Aksi: Ekspor rekaman]** Perbaiki kesalahan mengekspor teks panjang. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) oleh @aaaaaajie
- **[Alur Kerja: Peristiwa pasca-tindakan]** Perbaiki variabel yang diubah pengguna tidak dapat diakses di templat Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) oleh @mytharcher
- **[Blok: Panel aksi]** Warna panel aksi salah dalam mode gelap ([#6842](https://github.com/nocobase/nocobase/pull/6842)) oleh @zhangzhonghe
- **[Aksi: Ekspor rekaman Pro]** Perbaiki kesalahan mengekspor teks panjang. oleh @aaaaaajie

### [v1.6.29](https://www.nocobase.com/en/blog/v1.6.29)

*Tanggal rilis: 2025-05-13*

#### 🚀 Peningkatan

- **[Alur Kerja]** Izinkan revisi lebih dari satu draf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Aksi: Ekspor rekaman]** Memperbaiki ekspor nilai kosong dalam asosiasi bersarang dan url lampiran ([#6845](https://github.com/nocobase/nocobase/pull/6845)) oleh @aaaaaajie
- **[Alur Kerja: Node manual]** Perbaiki jumlah statistik yang salah pada tugas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) oleh @mytharcher
- **[Alur Kerja: test kit]** Perbaiki kasus uji yang gagal karena plugin preset yang diperlukan ([#6839](https://github.com/nocobase/nocobase/pull/6839)) oleh @mytharcher
- **[Visualisasi data]** Perbaiki kesalahan saat memfilter bidang m2m bersarang ([#6855](https://github.com/nocobase/nocobase/pull/6855)) oleh @2013xile
- **[Alur Kerja: Subflow]** Perbaiki pemicu tidak terdefinisi yang menyebabkan halaman crash oleh @mytharcher
- **[Penyimpanan file: S3(Pro)]** kedaluwarsa url akses tidak valid oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki jumlah statistik yang salah pada tugas oleh @mytharcher

### [v1.6.30](https://www.nocobase.com/en/blog/v1.6.30)

*Tanggal rilis: 2025-05-15*

#### 🚀 Peningkatan

- **[client]** tambahkan lebih banyak pengaturan ukuran bawaan untuk gambar status baca ([#6868](https://github.com/nocobase/nocobase/pull/6868)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[Manajer file]**

  - Perbaiki tipe ([#6873](https://github.com/nocobase/nocobase/pull/6873)) oleh @mytharcher
  - Perbaiki membuat rekaman file tanpa izin kunci asing ([#6863](https://github.com/nocobase/nocobase/pull/6863)) oleh @mytharcher
- **[Aksi: Ekspor rekaman]** tingkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor ([#6861](https://github.com/nocobase/nocobase/pull/6861)) oleh @katherinehhh
- **[Visualisasi data]** Blok bagan tidak ditampilkan saat ditambahkan ke popup yang dipicu dari tindakan tingkat blok ([#6864](https://github.com/nocobase/nocobase/pull/6864)) oleh @2013xile
- **[Aksi: Ekspor rekaman Pro]** tingkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor pro oleh @katherinehhh
- **[Penyimpanan file: S3(Pro)]]** Ubah untuk menggunakan bidang koleksi untuk menemukan penyimpanan oleh @mytharcher
- **[Manajer cadangan]** Perbaiki kesalahan tipe dalam build oleh @mytharcher

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.31](https://www.nocobase.com/en/blog/v1.7.0-beta.31)

*Tanggal rilis: 2025-05-15*

#### 🎉 Fitur Baru

- **[client]** aturan tautan aksi mendukung variabel 'formulir saat ini' ([#6810](https://github.com/nocobase/nocobase/pull/6810)) oleh @katherinehhh
- **[tidak terdefinisi]** Tambahkan log plugin impor oleh @aaaaaajie
- **[Aksi: Impor rekaman]** Tambahkan log plugin impor ([#6841](https://github.com/nocobase/nocobase/pull/6841)) oleh @aaaaaajie

#### 🚀 Peningkatan

- **[client]** tambahkan lebih banyak pengaturan ukuran bawaan untuk gambar status baca ([#6868](https://github.com/nocobase/nocobase/pull/6868)) oleh @katherinehhh
- **[Bidang koleksi: Lampiran(URL)]** tambahkan lebih banyak ukuran bawaan ke bidang URL lampiran untuk status baca ([#6871](https://github.com/nocobase/nocobase/pull/6871)) oleh @katherinehhh
- **[Alur Kerja]** Izinkan revisi lebih dari satu draf ([#6851](https://github.com/nocobase/nocobase/pull/6851)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - masalah tautan tombol di blok detail ([#6867](https://github.com/nocobase/nocobase/pull/6867)) oleh @katherinehhh
  - hapus nilai sisi kanan saat operator berubah dalam aturan tautan ([#6862](https://github.com/nocobase/nocobase/pull/6862)) oleh @katherinehhh
  - evaluasi operator yang salah untuk variabel tanggal dalam kondisi tautan ([#6825](https://github.com/nocobase/nocobase/pull/6825)) oleh @katherinehhh
  - operator hilang saat beralih dalam aturan tautan ([#6857](https://github.com/nocobase/nocobase/pull/6857)) oleh @katherinehhh
  - ketidakcocokan penguraian variabel dengan data {{title}} di konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh
  - peningkatan gaya komponen nilai aturan tautan ([#6836](https://github.com/nocobase/nocobase/pull/6836)) oleh @katherinehhh
  - ketidakcocokan penguraian variabel dengan data {{title}} di konfirmasi sekunder ([#6838](https://github.com/nocobase/nocobase/pull/6838)) oleh @katherinehhh
  - Bidang yang disembunyikan masih ditampilkan ([#6844](https://github.com/nocobase/nocobase/pull/6844)) oleh @zhangzhonghe
- **[database]** Impor gagal karena nilai bidang teks. ([#6699](https://github.com/nocobase/nocobase/pull/6699)) oleh @aaaaaajie
- **[Visualisasi data]**

  - Blok bagan tidak ditampilkan saat ditambahkan ke popup yang dipicu dari tindakan tingkat blok ([#6864](https://github.com/nocobase/nocobase/pull/6864)) oleh @2013xile
  - Perbaiki kesalahan saat memfilter bidang m2m bersarang ([#6855](https://github.com/nocobase/nocobase/pull/6855)) oleh @2013xile
- **[Aksi: Ekspor rekaman]**

  - tingkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor ([#6861](https://github.com/nocobase/nocobase/pull/6861)) oleh @katherinehhh
  - Memperbaiki ekspor nilai kosong dalam asosiasi bersarang dan url lampiran ([#6845](https://github.com/nocobase/nocobase/pull/6845)) oleh @aaaaaajie
  - Perbaiki kesalahan mengekspor teks panjang. ([#6713](https://github.com/nocobase/nocobase/pull/6713)) oleh @aaaaaajie
- **[Manajer file]** Perbaiki membuat rekaman file tanpa izin kunci asing ([#6863](https://github.com/nocobase/nocobase/pull/6863)) oleh @mytharcher
- **[Alur Kerja]** Perbaiki navigasi kembali tidak berfungsi saat langsung membuka tautan popup di pusat tugas ([#6853](https://github.com/nocobase/nocobase/pull/6853)) oleh @mytharcher
- **[Aksi: Duplikat rekaman]** modal menutup pada klik input pertama saat mengedit data duplikat ([#6848](https://github.com/nocobase/nocobase/pull/6848)) oleh @katherinehhh
- **[Blok: template]** Setelah menyimpan sebagai template warisan, kesalahan saat membuka popup ([#6840](https://github.com/nocobase/nocobase/pull/6840)) oleh @gchust
- **[Alur Kerja: test kit]** Perbaiki kasus uji yang gagal karena plugin preset yang diperlukan ([#6839](https://github.com/nocobase/nocobase/pull/6839)) oleh @mytharcher
- **[Alur Kerja: Peristiwa pasca-tindakan]** Perbaiki variabel yang diubah pengguna tidak dapat diakses di templat Handlebars ([#6837](https://github.com/nocobase/nocobase/pull/6837)) oleh @mytharcher
- **[Alur Kerja: Node manual]** Perbaiki jumlah statistik yang salah pada tugas ([#6783](https://github.com/nocobase/nocobase/pull/6783)) oleh @mytharcher
- **[Blok: Panel aksi]** Warna panel aksi salah dalam mode gelap ([#6842](https://github.com/nocobase/nocobase/pull/6842)) oleh @zhangzhonghe
- **[Aksi: Ekspor rekaman Pro]**

  - tingkatkan kinerja saat menghapus bidang di pengaturan bidang impor/ekspor pro oleh @katherinehhh
  - Perbaiki kesalahan mengekspor teks panjang. oleh @aaaaaajie
- **[Alur Kerja: Subflow]** Perbaiki pemicu tidak terdefinisi yang menyebabkan halaman crash oleh @mytharcher
- **[Cetak template]**

  - Perbaiki masalah pemformat tidak ditemukan. oleh @sheldon66
  - Perbaiki pemformat tidak ditemukan oleh @sheldon66
- **[Penyimpanan file: S3(Pro)]**

  - Ubah untuk menggunakan bidang koleksi untuk menemukan penyimpanan oleh @mytharcher
  - kedaluwarsa url akses tidak valid oleh @jiannx
- **[Alur Kerja: Persetujuan]** Perbaiki jumlah statistik yang salah pada tugas oleh @mytharcher
