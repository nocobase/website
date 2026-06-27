---
title: "Pembaruan Mingguan NocoBase: Optimasi dan Perbaikan Bug"
description: "Pembaruan minggu ini menghadirkan kinerja peralihan tab popup yang dioptimalkan, perbaikan bug, dan lainnya."
---

Ringkasan log pembaruan produk mingguan, dan rilis terbaru dapat dilihat di [blog kami](https://www.nocobase.com/en/blog/timeline).

**NocoBase saat ini diperbarui dengan tiga cabang: `main`, `next`, dan `develop`.**

![version.png](https://static-docs.nocobase.com/ba5f04e27e99c625cb3822da5df07860.png)

* `main`: Versi paling stabil hingga saat ini, direkomendasikan untuk instalasi;
* `next`: Versi beta, berisi fitur baru yang akan datang dan telah diuji secara awal. Mungkin ada beberapa masalah yang diketahui atau tidak diketahui. Terutama untuk pengguna uji untuk mengumpulkan umpan balik dan mengoptimalkan fungsi lebih lanjut. Ideal untuk pengguna uji yang ingin merasakan fitur baru lebih awal dan memberikan umpan balik;
* `develop`: Versi alfa, berisi kode fitur terbaru, mungkin tidak lengkap atau tidak stabil, terutama untuk pengembangan internal dan iterasi cepat. Cocok untuk pengguna teknis yang tertarik dengan produk mutakhir, tetapi dengan potensi masalah dan fungsi yang tidak lengkap. Tidak untuk penggunaan produksi.

## main

![main.png](https://static-docs.nocobase.com/47a3c71734c1d0f908b51f9ebd53c0ac.png)

### [v1.8.15](https://www.nocobase.com/en/blog/v1.8.15)

*Tanggal rilis: 2025-08-12*

#### 🚀 Peningkatan

- **[klien]**

  - menambahkan dukungan variabel tanggal "kemarin lusa" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) oleh @katherinehhh
  - Mengoptimalkan kinerja saat mengganti tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Memperbaiki kasus uji yang tidak stabil ([#7349](https://github.com/nocobase/nocobase/pull/7349)) oleh @mytharcher
  - Judul alur kerja di kartu tugas tidak akan lagi ditampilkan dengan garis coret, meskipun versi yang sesuai dinonaktifkan ([#7339](https://github.com/nocobase/nocobase/pull/7339)) oleh @mytharcher
- **[Pratinjau File Office]** Menambahkan dukungan untuk pratinjau file `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) oleh @mytharcher
- **[Manajer Cadangan]** meningkatkan kinerja untuk operasi pencadangan database mysql oleh @gchust

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana tata letak formulir multi-kolom tidak berubah menjadi tata letak satu kolom di perangkat seluler ([#7355](https://github.com/nocobase/nocobase/pull/7355)) oleh @zhangzhonghe
  - Memperbaiki kesalahan penghapusan massal koleksi ([#7345](https://github.com/nocobase/nocobase/pull/7345)) oleh @aaaaaajie
  - Memperbaiki masalah di mana cakupan data yang disimpan sebelumnya tidak dipilih sebelumnya saat mengonfigurasi izin secara individual. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) oleh @aaaaaajie
- **[Alur Kerja]**

  - Memperbarui menu "Tambah Node" dan memperbaiki masalah kinerja rendering kanvas alur kerja yang disebabkannya ([#7363](https://github.com/nocobase/nocobase/pull/7363)) oleh @mytharcher
  - Memperbaiki masalah kondisi filter yang salah saat mengambil satu item tugas ([#7366](https://github.com/nocobase/nocobase/pull/7366)) oleh @mytharcher
  - Memperbaiki masalah pencocokan kata kunci di pemilih bidang ([#7356](https://github.com/nocobase/nocobase/pull/7356)) oleh @mytharcher
  - Menghindari kesalahan yang disebabkan oleh publikasi ke antrian peristiwa saat berhenti ([#7348](https://github.com/nocobase/nocobase/pull/7348)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana pesan dalam situs diterima tetapi tidak ditampilkan di popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) oleh @mytharcher
- **[Seluler]** Menyelesaikan masalah di mana pemilih tanggal di perangkat seluler ditampilkan secara tidak benar saat batas rentang tanggal diterapkan ([#7362](https://github.com/nocobase/nocobase/pull/7362)) oleh @katherinehhh
- **[Manajer File]** Menambahkan bidang `storageId` ke koleksi file untuk mendukung konfigurasi izin ([#7351](https://github.com/nocobase/nocobase/pull/7351)) oleh @mytharcher
- **[Alur Kerja: Node Paralel]** Memperbaiki penangguhan node paralel setelah dilanjutkan di bawah MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) oleh @mytharcher
- **[Alur Kerja: CC]** Memperbaiki blok yang tidak dapat dihapus ([#7338](https://github.com/nocobase/nocobase/pull/7338)) oleh @mytharcher
- **[Pratinjau File Office]** Mendukung file `.docx`, `.xlsx`, dan `.pptx` dengan hanya URL untuk dipratinjau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) oleh @mytharcher
- **[Visualisasi Data]** masalah variabel tanggal di nilai default bidang tanggal di blok filter bagan ([#7291](https://github.com/nocobase/nocobase/pull/7291)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki aturan tautan yang tidak berfungsi di blok detail asli persetujuan oleh @mytharcher
  - Memperbaiki pembaruan asosiasi saat mengirim draf oleh @mytharcher

## develop

![develop.png](https://static-docs.nocobase.com/7fcdd9456a17286d8a439eee52bcb8d2.png)

### [v1.9.0-alpha.10](https://www.nocobase.com/en/blog/v1.9.0-alpha.10)

*Tanggal rilis: 2025-08-09*

#### 🐛 Perbaikan Bug

- **[Manajer Email]** editor kaya mendukung pemisah baris lunak oleh @jiannx

### [v1.9.0-alpha.9](https://www.nocobase.com/en/blog/v1.9.0-alpha.9)

*Tanggal rilis: 2025-08-09*

#### 🚀 Peningkatan

- **[Alur Kerja]** Memperbaiki kasus uji yang tidak stabil ([#7349](https://github.com/nocobase/nocobase/pull/7349)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]** Memperbaiki masalah di mana tata letak formulir multi-kolom tidak berubah menjadi tata letak satu kolom di perangkat seluler ([#7355](https://github.com/nocobase/nocobase/pull/7355)) oleh @zhangzhonghe
- **[Alur Kerja]** Memperbaiki masalah pencocokan kata kunci di pemilih bidang ([#7356](https://github.com/nocobase/nocobase/pull/7356)) oleh @mytharcher

### [v1.9.0-alpha.8](https://www.nocobase.com/en/blog/v1.9.0-alpha.8)

*Tanggal rilis: 2025-08-08*

#### 🚀 Peningkatan

- **[klien]** Mengoptimalkan kinerja saat mengganti tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) oleh @zhangzhonghe
- **[Pratinjau File Office]** Menambahkan dukungan untuk pratinjau file `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) oleh @mytharcher

#### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah di mana cakupan data yang disimpan sebelumnya tidak dipilih sebelumnya saat mengonfigurasi izin secara individual ([#7288](https://github.com/nocobase/nocobase/pull/7288)) oleh @aaaaaajie
  - Memperbaiki kesalahan penghapusan massal koleksi ([#7345](https://github.com/nocobase/nocobase/pull/7345)) oleh @aaaaaajie
- **[Alur Kerja]** Menghindari kesalahan yang disebabkan oleh publikasi ke antrian peristiwa saat berhenti ([#7348](https://github.com/nocobase/nocobase/pull/7348)) oleh @mytharcher
- **[Alur Kerja: Node Paralel]** Memperbaiki penangguhan node paralel setelah dilanjutkan di bawah MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) oleh @mytharcher
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki pembaruan asosiasi saat mengirim draf oleh @mytharcher
  - Memperbaiki aturan tautan yang tidak berfungsi di blok detail asli persetujuan oleh @mytharcher
