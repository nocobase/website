---
title: "Pembaruan Mingguan NocoBase: Mendukung Impor dan Ekspor Data dalam Jumlah Besar"
description: "Pembaruan minggu ini meliputi: mendukung impor dan ekspor data dalam jumlah besar, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/tags/release-notes).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara pendahuluan. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Cocok untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.4.18](https://www.nocobase.com/en/blog/v1.4.18)

*Tanggal rilis: 2025-01-06*

#### 🚀 Peningkatan

- **[Workflow: test kit]** Memperbaiki presisi bidang tanggal di koleksi uji ([#5983](https://github.com/nocobase/nocobase/pull/5983)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki masalah scrollbar saat mengatur tinggi penuh untuk blok data di subhalaman ([#5989](https://github.com/nocobase/nocobase/pull/5989)) oleh @katherinehhh
  - Memperbaiki masalah perataan saat tombol kolom tindakan disembunyikan ([#5987](https://github.com/nocobase/nocobase/pull/5987)) oleh @katherinehhh
  - Memperbaiki masalah dengan penghapusan batch bidang sistem dan umum di manajer koleksi ([#5988](https://github.com/nocobase/nocobase/pull/5988)) oleh @katherinehhh
  - Memperbaiki masalah di mana variabel 'URL search params' tidak berfungsi di halaman seluler ([#5968](https://github.com/nocobase/nocobase/pull/5968)) oleh @Cyx649312038
- **[server]** Memperbaiki potensi crash aplikasi selama pemulihan cadangan ([#5981](https://github.com/nocobase/nocobase/pull/5981)) oleh @gchust
- **[Mobile]** Memperbaiki masalah tombol bawah yang terhalang di perangkat seluler ([#5991](https://github.com/nocobase/nocobase/pull/5991)) oleh @zhangzhonghe
- **[Visualisasi data]** Memperbaiki masalah di mana "variabel popup saat ini" yang digunakan pada grafik di subhalaman menjadi kosong setelah menyegarkan halaman ([#5984](https://github.com/nocobase/nocobase/pull/5984)) oleh @2013xile
- **[Blok: Kanban]** Memperbaiki bidang koleksi induk tidak dimuat di kanban ([#5985](https://github.com/nocobase/nocobase/pull/5985)) oleh @katherinehhh

### [v1.4.19](https://www.nocobase.com/en/blog/v1.4.19)

*Tanggal rilis: 2025-01-06*

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki pemilih rentang tanggal di formulir filter/tindakan tidak menampilkan pemilih waktu saat showTime diatur ([#5994](https://github.com/nocobase/nocobase/pull/5994)) oleh @katherinehhh

### [v1.4.20](https://www.nocobase.com/en/blog/v1.4.20)

*Tanggal rilis: 2025-01-09*

#### 🎉 Fitur Baru

- **[client]** Menambahkan metode app.getHref() ([#6019](https://github.com/nocobase/nocobase/pull/6019)) oleh @chenos

#### 🚀 Peningkatan

- **[client]**

  - Mengizinkan mengurutkan alur kerja saat mengikat ke tombol tindakan ([#6017](https://github.com/nocobase/nocobase/pull/6017)) oleh @mytharcher
  - Mengubah tautan referensi evaluator ke situs dokumen ([#6021](https://github.com/nocobase/nocobase/pull/6021)) oleh @mytharcher
  - Mendukung maxTagCount: 'responsive' di komponen dropdown multi-pilih ([#6007](https://github.com/nocobase/nocobase/pull/6007)) oleh @katherinehhh
  - Mengatur waktu akhir default untuk komponen rentang waktu di blok filter menjadi 23:59:59" ([#6012](https://github.com/nocobase/nocobase/pull/6012)) oleh @katherinehhh
- **[Tindakan: Edit batch]** Memfaktorkan ulang tombol kirim formulir edit massal: menghapus penugasan bidang dan aturan tautan ([#6008](https://github.com/nocobase/nocobase/pull/6008)) oleh @katherinehhh

#### 🐛 Perbaikan Bug

- **[client]**

  - Memperbaiki validasi wajib tidak berfungsi setelah menghapus data di editor teks kaya ([#6006](https://github.com/nocobase/nocobase/pull/6006)) oleh @katherinehhh
  - Memperbaiki masalah ketidaksejajaran saat tombol kolom tindakan disembunyikan ([#6014](https://github.com/nocobase/nocobase/pull/6014)) oleh @katherinehhh
  - Memperbaiki masalah tombol Buat Koleksi saat mengklik tab Koleksi di halaman REST API ([#5992](https://github.com/nocobase/nocobase/pull/5992)) oleh @katherinehhh
  - Memperbaiki masalah di mana targetKey tidak dapat memilih bidang NanoID di satu-ke-banyak ([#5999](https://github.com/nocobase/nocobase/pull/5999)) oleh @katherinehhh
  - Memperbaiki gaya tombol pengaturan di tema kompak ([#6001](https://github.com/nocobase/nocobase/pull/6001)) oleh @katherinehhh
  - Memperbaiki gaya komponen daftar ([#5998](https://github.com/nocobase/nocobase/pull/5998)) oleh @mytharcher
  - Memperbaiki masalah di mana header yang disertakan dalam permintaan klien ditimpa ([#6009](https://github.com/nocobase/nocobase/pull/6009)) oleh @2013xile
  - Memperbaiki foreignKey, targetKey, dan sourceKey harus mendukung pemfilteran berdasarkan karakter Cina ([#5997](https://github.com/nocobase/nocobase/pull/5997)) oleh @katherinehhh
- **[Tindakan: Impor catatan]** memperbaiki impor dengan asosiasi belongs to many yang menggunakan target key berbeda ([#6024](https://github.com/nocobase/nocobase/pull/6024)) oleh @chareice
- **[Blok: Peta]** Memperbaiki bidang peta di blok detail harus dirender sebagai blok peta ([#6010](https://github.com/nocobase/nocobase/pull/6010)) oleh @katherinehhh
- **[Sematkan NocoBase]** Token untuk sematan bertentangan dengan auth oleh @chenos

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### v1.5.0-beta.20

*Tanggal rilis: 2024-12-31*

#### 🎉 Fitur Baru

- **[[Tindakan: Impor catatan(Pro)](https://docs.nocobase.com/handbook/action-import-pro)]**: Tingkatkan kemampuan impor data dengan dukungan untuk impor asinkron, impor catatan jutaan baris, identifikasi dan pemrosesan data duplikat, pembaruan data, dan pemicu alur kerja.
- **[[Tindakan: Ekspor catatan(Pro)](https://docs.nocobase.com/handbook/action-export-pro)]**: Tingkatkan kemampuan ekspor data dengan dukungan untuk ekspor asinkron, ekspor catatan jutaan baris, dan ekspor lampiran.

### [v1.5.0-beta.22](https://www.nocobase.com/en/blog/v1.5.0-beta.22)

*Tanggal rilis: 2025-01-04*

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana sub-tabel kosong menampilkan satu baris data kosong di iOS ([#5990](https://github.com/nocobase/nocobase/pull/5990)) oleh @zhangzhonghe

### [v1.5.0-beta.26](https://www.nocobase.com/en/blog/v1.5.0-beta.26)

*Tanggal rilis: 2025-01-08*

#### 🐛 Perbaikan Bug

- **[client]** Memperbaiki masalah di mana baris tabel tidak dapat diseret dan diurutkan ([#6013](https://github.com/nocobase/nocobase/pull/6013)) oleh @zhangzhonghe

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.6.0-alpha.8](https://www.nocobase.com/en/blog/v1.6.0-alpha.8)

*Tanggal rilis: 2025-01-02*

#### 🎉 Fitur Baru

- **[Workflow: Node manual]** Menambahkan entri global tetap untuk semua jenis todo alur kerja ([#5858](https://github.com/nocobase/nocobase/pull/5858)) oleh @mytharcher
- **[Kebijakan kata sandi]** Menambahkan plugin baru: Kebijakan kata sandi, digunakan untuk mengatur aturan kata sandi dan kebijakan penguncian masuk untuk semua pengguna oleh @2013xile
  Referensi: [Kebijakan kata sandi dan penguncian pengguna](https://docs.nocobase.com/handbook/password-policy)

#### 🚀 Peningkatan

- **[client]** Menambahkan kata kunci filter "Keamanan" untuk manajer plugin ([#5977](https://github.com/nocobase/nocobase/pull/5977)) oleh @2013xile
- **[Workflow: Acara tindakan kustom]** Mengubah API eksekusi manual oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Workflow]** Memperbaiki `onChange` tidak berfungsi di komponen `WorkflowVariableWrapper` ([#5964](https://github.com/nocobase/nocobase/pull/5964)) oleh @mytharcher

### [v1.6.0-alpha.9](https://www.nocobase.com/en/blog/v1.6.0-alpha.9)

*Tanggal rilis: 2025-01-06*

#### 🚀 Peningkatan

- **[Mobile]** Mendukung tampilan nomor halaman saat ini untuk tabel di perangkat seluler ([#5946](https://github.com/nocobase/nocobase/pull/5946)) oleh @katherinehhh
- **[Manajer file]** dukungan untuk plugin penyimpanan lainnya ([#5930](https://github.com/nocobase/nocobase/pull/5930)) oleh @jiannx

### [v1.6.0-alpha.10](https://www.nocobase.com/en/blog/v1.6.0-alpha.10)

*Tanggal rilis: 2025-01-08*

#### 🎉 Fitur Baru

- **[Variabel lingkungan]** Mendukung konfigurasi variabel lingkungan dinamis dan rahasia ([#5966](https://github.com/nocobase/nocobase/pull/5966)) oleh @katherinehhh

#### 🚀 Peningkatan

- **[client]** menambahkan lebih banyak ikon ke IconPicker ([#5996](https://github.com/nocobase/nocobase/pull/5996)) oleh @katherinehhh
- **[Bidang koleksi: Lampiran(URL)]** Memfilter koleksi file yang terkait dengan plugin-file-storage-s3-pro. oleh @jiannx

#### 🐛 Perbaikan Bug

- **[Bidang koleksi: Lampiran(URL)]** Memperbaiki API yang diubah di hook komponen oleh @mytharcher

## Tentang NocoBase

NocoBase adalah platform tanpa kode, sumber terbuka, dan pribadi yang menawarkan kendali penuh dan skalabilitas tak terbatas. Ini memberdayakan tim untuk beradaptasi dengan cepat terhadap perubahan sambil secara signifikan mengurangi biaya. Hindari pengembangan bertahun-tahun dan investasi besar dengan menerapkan NocoBase dalam hitungan menit.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FhOM2MyzHn9I&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DhOM2MyzHn9I&image=http%3A%2F%2Fi.ytimg.com%2Fvi%2FhOM2MyzHn9I%2Fhqdefault.jpg&key=a19fcc184b9711e1b4764040d3dc5c07&type=text%2Fhtml&schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="" class="dc n pc cp bh" scrolling="no"></iframe>

Temukan NocoBase dalam 3 Menit!

## 👇 Dapatkan NocoBase

[**Beranda**](https://www.nocobase.com/)

[**Demo**](https://demo.nocobase.com/new)

[**Dokumentasi**](https://docs.nocobase.com/)

[**GitHub**](https://github.com/nocobase/nocobase)
