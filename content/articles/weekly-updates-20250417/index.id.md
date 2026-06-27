---
title: "Pembaruan Mingguan NocoBase: Beberapa Plugin Komersial Diubah Menjadi Sumber Terbuka"
description: "Pembaruan minggu ini meliputi: plugin komersial untuk departemen, URL lampiran, dan pesan respons alur kerja kini disediakan secara gratis."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.6.18](https://www.nocobase.com/en/blog/v1.6.18)

*Tanggal rilis: 2025-04-11*

#### 🚀 Peningkatan

- **[klien]**

  - Menambahkan API fallback tipe default untuk `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) oleh @mytharcher
  - Mengoptimalkan petunjuk untuk halaman yang belum dikonfigurasi ([#6641](https://github.com/nocobase/nocobase/pull/6641)) oleh @zhangzhonghe
- **[Workflow: Node tunda]** Mendukung penggunaan variabel untuk durasi ([#6621](https://github.com/nocobase/nocobase/pull/6621)) oleh @mytharcher
- **[Workflow: Event aksi kustom]** Menambahkan pengaturan penyegaran untuk tombol pemicu alur kerja oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - deskripsi sub-tabel tumpang tindih dengan tombol tambah baru ([#6646](https://github.com/nocobase/nocobase/pull/6646)) oleh @katherinehhh
  - garis bawah putus-putus yang disebabkan oleh tata letak formulir horizontal di modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) oleh @katherinehhh
- **[Penyimpanan file: S3(Pro)]** Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx
- **[Manajer email]** Memperbaiki await yang hilang untuk panggilan berikutnya. oleh @jiannx

### [v1.6.19](https://www.nocobase.com/en/blog/v1.6.19)

*Tanggal rilis: 2025-04-14*

#### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah gambar pratinjau yang terhalang ([#6651](https://github.com/nocobase/nocobase/pull/6651)) oleh @zhangzhonghe
  - Di blok formulir, nilai default dari konfigurasi bidang akan ditampilkan sebagai string variabel asli lalu menghilang ([#6649](https://github.com/nocobase/nocobase/pull/6649)) oleh @zhangzhonghe

### [v1.6.20](https://www.nocobase.com/en/blog/v1.6.20)

*Tanggal rilis: 2025-04-14*

#### 🎉 Fitur Baru

- **[Departemen]** Membuat plugin Departemen, URL Lampiran, dan pesan respons Alur Kerja gratis ([#6663](https://github.com/nocobase/nocobase/pull/6663)) oleh @chenos

#### 🐛 Perbaikan Bug

- **[klien]**

  - Formulir filter tidak boleh menampilkan petunjuk "Perubahan belum disimpan" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) oleh @zhangzhonghe
  - Opsi "izinkan banyak" tidak berfungsi untuk bidang relasi ([#6661](https://github.com/nocobase/nocobase/pull/6661)) oleh @katherinehhh
  - Di formulir filter, ketika tombol filter diklik, jika ada bidang yang belum lulus validasi, pemfilteran tetap dipicu ([#6659](https://github.com/nocobase/nocobase/pull/6659)) oleh @zhangzhonghe
  - Beralih ke menu grup tidak boleh melompat ke halaman yang sudah disembunyikan di menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) oleh @zhangzhonghe
- **[Penyimpanan file: S3(Pro)]**

  - Mengatur bahasa oleh @jiannx
  - Pengaturan baseurl dan publik individual, meningkatkan UX konfigurasi penyimpanan S3 pro oleh @jiannx
- **[Manajer migrasi]** opsi lewati cadangan otomatis menjadi tidak valid jika popup variabel lingkungan muncul selama migrasi oleh @gchust

## next

![next.png](https://static-docs.nocobase.com/8ed17a0f08cc585018f6de6c8b13947d.png)

### [v1.7.0-beta.15](https://www.nocobase.com/en/blog/v1.7.0-beta.15)

*Tanggal rilis: 2025-04-10*

#### 🚀 Peningkatan

- **[Workflow: Node tunda]** Mendukung penggunaan variabel untuk durasi ([#6621](https://github.com/nocobase/nocobase/pull/6621)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[Workflow]** Memperbaiki OOM saat membuat pekerjaan dengan id integer tidak aman ([#6637](https://github.com/nocobase/nocobase/pull/6637)) oleh @mytharcher
- **[Blok: template]** ketika template yang direferensikan yang digunakan oleh blok halaman telah dihapus, menyimpan sebagai template gagal ([#6638](https://github.com/nocobase/nocobase/pull/6638)) oleh @gchust

### [v1.7.0-beta.16](https://www.nocobase.com/en/blog/v1.7.0-beta.16)

*Tanggal rilis: 2025-04-12*

#### 🚀 Peningkatan

- **[klien]**

  - Menambahkan API fallback tipe default untuk `Variable.Input` ([#6644](https://github.com/nocobase/nocobase/pull/6644)) oleh @mytharcher
  - Mengoptimalkan petunjuk untuk halaman yang belum dikonfigurasi ([#6641](https://github.com/nocobase/nocobase/pull/6641)) oleh @zhangzhonghe
- **[Workflow: Event aksi kustom]** Menambahkan pengaturan penyegaran untuk tombol pemicu alur kerja oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - judul drawer edit node alur kerja menampilkan [object Object] ([#6648](https://github.com/nocobase/nocobase/pull/6648)) oleh @katherinehhh
  - deskripsi sub-tabel tumpang tindih dengan tombol tambah baru ([#6646](https://github.com/nocobase/nocobase/pull/6646)) oleh @katherinehhh
  - gaya input variabel yang salah ([#6645](https://github.com/nocobase/nocobase/pull/6645)) oleh @gchust
  - garis bawah putus-putus yang disebabkan oleh tata letak formulir horizontal di modal ([#6639](https://github.com/nocobase/nocobase/pull/6639)) oleh @katherinehhh
- **[Workflow]** Memperbaiki informasi statistik alur kerja yang tidak dimuat saat aplikasi dimulai ([#6642](https://github.com/nocobase/nocobase/pull/6642)) oleh @mytharcher

### [v1.7.0-beta.17](https://www.nocobase.com/en/blog/v1.7.0-beta.17)

*Tanggal rilis: 2025-04-15*

#### 🎉 Fitur Baru

- **[Departemen]** Membuat plugin Departemen, URL Lampiran, dan pesan respons Alur Kerja gratis ([#6663](https://github.com/nocobase/nocobase/pull/6663)) oleh @chenos
- **[Aksi: Pembaruan batch]** Mendukung penyegaran data di blok data lain setelah memperbarui data di blok ([#6591](https://github.com/nocobase/nocobase/pull/6591)) oleh @zhangzhonghe

#### 🚀 Peningkatan

- **[Workflow]** Mendukung URL popup tetap untuk tugas alur kerja ([#6640](https://github.com/nocobase/nocobase/pull/6640)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Beralih ke menu grup tidak boleh melompat ke halaman yang sudah disembunyikan di menu ([#6654](https://github.com/nocobase/nocobase/pull/6654)) oleh @zhangzhonghe
  - Formulir filter tidak boleh menampilkan petunjuk "Perubahan belum disimpan" ([#6657](https://github.com/nocobase/nocobase/pull/6657)) oleh @zhangzhonghe
  - Memperbaiki masalah gambar pratinjau yang terhalang ([#6651](https://github.com/nocobase/nocobase/pull/6651)) oleh @zhangzhonghe
  - Di formulir filter, ketika tombol filter diklik, jika ada bidang yang belum lulus validasi, pemfilteran tetap dipicu ([#6659](https://github.com/nocobase/nocobase/pull/6659)) oleh @zhangzhonghe
  - Opsi "izinkan banyak" tidak berfungsi untuk bidang relasi ([#6661](https://github.com/nocobase/nocobase/pull/6661)) oleh @katherinehhh
  - Di blok formulir, nilai default dari konfigurasi bidang akan ditampilkan sebagai string variabel asli lalu menghilang ([#6649](https://github.com/nocobase/nocobase/pull/6649)) oleh @zhangzhonghe
- **[Bidang koleksi: Lampiran(URL)]** hanya mengizinkan koleksi file dengan akses URL publik ([#6664](https://github.com/nocobase/nocobase/pull/6664)) oleh @katherinehhh
- **[Penyimpanan file: S3(Pro)]**

  - Pengaturan baseurl dan publik individual, meningkatkan UX konfigurasi penyimpanan S3 pro oleh @jiannx
  - Mengatur bahasa oleh @jiannx
- **[Workflow: Persetujuan]** Mendukung URL tetap untuk item persetujuan di pusat tugas oleh @mytharcher
- **[Manajer migrasi]** opsi lewati cadangan otomatis menjadi tidak valid jika popup variabel lingkungan muncul selama migrasi oleh @gchust

### [v1.7.0-beta.18](https://www.nocobase.com/en/blog/v1.7.0-beta.18)

*Tanggal rilis: 2025-04-16*

#### 🎉 Fitur Baru

- **[Bidang koleksi: Kode]** Menambahkan antarmuka kode oleh @mytharcher

#### 🚀 Peningkatan

- **[create-nocobase-app]** Meningkatkan beberapa dependensi ke versi terbaru ([#6673](https://github.com/nocobase/nocobase/pull/6673)) oleh @chenos

#### 🐛 Perbaikan Bug

- **[klien]**

  - bidang warisan ditampilkan di daftar penugasan bidang koleksi saat ini ([#6666](https://github.com/nocobase/nocobase/pull/6666)) oleh @katherinehhh
  - masalah gaya pada input variabel saat mengatur nilai default ([#6668](https://github.com/nocobase/nocobase/pull/6668)) oleh @katherinehhh
- **[build]** output build salah ketika plugin bergantung pada beberapa pustaka AMD ([#6665](https://github.com/nocobase/nocobase/pull/6665)) oleh @gchust
- **[Blok: iframe]** scrollbar vertikal muncul ketika blok iframe diatur ke tinggi penuh ([#6675](https://github.com/nocobase/nocobase/pull/6675)) oleh @katherinehhh
- **[Kontrol akses]** Memperbaiki kesalahan yang muncul saat menyerialkan model peran ke cache ([#6674](https://github.com/nocobase/nocobase/pull/6674)) oleh @mytharcher
- **[Workflow]** Memperbaiki kesalahan migrasi yang muncul dari MySQL ([#6667](https://github.com/nocobase/nocobase/pull/6667)) oleh @mytharcher
- **[Manajer email]** memperbaiki tidak bisa sinkron, tidak ada tampilan subjek dan bug kecil lainnya oleh @jiannx
