---
title: "NocoBase v1.8.15: Optimalkan kinerja saat mengganti tab popup"
description: "Catatan Rilis v1.8.15"
---

### 🚀 Peningkatan

- **[klien]**

  - Menambahkan dukungan variabel tanggal "kemarin lusa" ([#7359](https://github.com/nocobase/nocobase/pull/7359)) oleh @katherinehhh
  - Mengoptimalkan kinerja saat mengganti tab popup ([#7353](https://github.com/nocobase/nocobase/pull/7353)) oleh @zhangzhonghe
- **[Alur Kerja]**

  - Memperbaiki kasus uji yang tidak stabil ([#7349](https://github.com/nocobase/nocobase/pull/7349)) oleh @mytharcher
  - Judul alur kerja di kartu tugas tidak lagi ditampilkan dengan garis coret, meskipun versi yang sesuai dinonaktifkan ([#7339](https://github.com/nocobase/nocobase/pull/7339)) oleh @mytharcher
- **[Penampil Berkas Office]** Menambahkan dukungan untuk pratinjau berkas `.odt` ([#7347](https://github.com/nocobase/nocobase/pull/7347)) oleh @mytharcher
- **[Manajer Cadangan]** meningkatkan kinerja untuk operasi cadangan basis data mysql oleh @gchust

### 🐛 Perbaikan Bug

- **[klien]**

  - Memperbaiki masalah tata letak formulir multi-kolom yang tidak berubah menjadi tata letak satu kolom di perangkat seluler ([#7355](https://github.com/nocobase/nocobase/pull/7355)) oleh @zhangzhonghe
  - Memperbaiki kesalahan penghapusan koleksi massal ([#7345](https://github.com/nocobase/nocobase/pull/7345)) oleh @aaaaaajie
  - Memperbaiki masalah di mana cakupan data yang disimpan sebelumnya tidak dipilih secara otomatis saat mengonfigurasi izin secara individual. ([#7288](https://github.com/nocobase/nocobase/pull/7288)) oleh @aaaaaajie
- **[Alur Kerja]**

  - Memperbarui menu "Tambah Node" dan memperbaiki masalah kinerja rendering kanvas alur kerja yang ditimbulkannya ([#7363](https://github.com/nocobase/nocobase/pull/7363)) oleh @mytharcher
  - Memperbaiki masalah kondisi filter yang salah saat mengambil satu item tugas ([#7366](https://github.com/nocobase/nocobase/pull/7366)) oleh @mytharcher
  - Memperbaiki masalah pencocokan kata kunci di pemilihan bidang ([#7356](https://github.com/nocobase/nocobase/pull/7356)) oleh @mytharcher
  - Menghindari kesalahan yang disebabkan oleh publikasi ke antrian peristiwa saat berhenti ([#7348](https://github.com/nocobase/nocobase/pull/7348)) oleh @mytharcher
- **[Notifikasi: Pesan dalam aplikasi]** Memperbaiki masalah di mana pesan dalam situs diterima tetapi tidak ditampilkan di popup ([#7364](https://github.com/nocobase/nocobase/pull/7364)) oleh @mytharcher
- **[Seluler]** Memperbaiki masalah di mana pemilih tanggal di perangkat seluler ditampilkan secara tidak benar saat batas rentang tanggal diterapkan ([#7362](https://github.com/nocobase/nocobase/pull/7362)) oleh @katherinehhh
- **[Manajer Berkas]** Menambahkan bidang `storageId` ke koleksi berkas untuk mendukung konfigurasi izin ([#7351](https://github.com/nocobase/nocobase/pull/7351)) oleh @mytharcher
- **[Alur Kerja: Node Paralel]** Memperbaiki penangguhan node paralel setelah dilanjutkan di MySQL ([#7346](https://github.com/nocobase/nocobase/pull/7346)) oleh @mytharcher
- **[Alur Kerja: CC]** Memperbaiki blok yang tidak dapat dihapus ([#7338](https://github.com/nocobase/nocobase/pull/7338)) oleh @mytharcher
- **[Penampil Berkas Office]** Mendukung berkas `.docx`, `.xlsx`, dan `.pptx` dengan hanya URL untuk dipratinjau ([#7336](https://github.com/nocobase/nocobase/pull/7336)) oleh @mytharcher
- **[Visualisasi Data]** masalah variabel tanggal di nilai default bidang tanggal di blok filter bagan ([#7291](https://github.com/nocobase/nocobase/pull/7291)) oleh @katherinehhh
- **[Alur Kerja: Persetujuan]**

  - Memperbaiki aturan tautan yang tidak berfungsi di blok detail asli persetujuan oleh @mytharcher
  - Memperbaiki pembaruan asosiasi saat mengirim draf oleh @mytharcher
