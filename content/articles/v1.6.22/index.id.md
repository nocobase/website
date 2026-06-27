---
title: "NocoBase v1.6.22: Memperbarui dependensi dan menghapus dukungan SQLite"
description: "Catatan Rilis v1.6.22"
---

### 🚀 Peningkatan

- **[create-nocobase-app]** Memutakhirkan dependensi dan menghapus dukungan SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) oleh @chenos

- **[Manajer Berkas]** Mengekspos API utilitas ([#6705](https://github.com/nocobase/nocobase/pull/6705)) oleh @mytharcher

- **[Alur Kerja]** Menambahkan tipe tanggal ke kumpulan tipe variabel ([#6717](https://github.com/nocobase/nocobase/pull/6717)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Masalah ikon navigasi atas di perangkat seluler yang sulit dihapus ([#6734](https://github.com/nocobase/nocobase/pull/6734)) oleh @zhangzhonghe

  - Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter yang kosong ([#6634](https://github.com/nocobase/nocobase/pull/6634)) oleh @zhangzhonghe

  - Masalah peralihan pemilih di bidang tanggal pada tombol filter ([#6695](https://github.com/nocobase/nocobase/pull/6695)) oleh @katherinehhh

  - Masalah tombol ciutkan di menu kiri yang terhalang oleh jendela pop-up alur kerja ([#6733](https://github.com/nocobase/nocobase/pull/6733)) oleh @zhangzhonghe

  - Batasan opsi tindakan yang hilang saat membuka kembali aturan tautan ([#6723](https://github.com/nocobase/nocobase/pull/6723)) oleh @katherinehhh

  - Tombol ekspor ditampilkan tanpa izin ekspor ([#6689](https://github.com/nocobase/nocobase/pull/6689)) oleh @katherinehhh

  - Bidang wajib yang disembunyikan oleh aturan tautan tidak boleh memengaruhi pengiriman formulir ([#6709](https://github.com/nocobase/nocobase/pull/6709)) oleh @zhangzhonghe

- **[server]** appVersion yang dihasilkan secara tidak benar oleh create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) oleh @chenos

- **[build]** Memperbaiki kesalahan yang muncul di perintah tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) oleh @mytharcher

- **[Alur Kerja]** Memperbaiki kesalahan yang muncul saat menjalankan event terjadwal di subalur ([#6721](https://github.com/nocobase/nocobase/pull/6721)) oleh @mytharcher

- **[Alur Kerja: Event aksi kustom]** Mendukung eksekusi dalam mode banyak rekaman oleh @mytharcher

- **[Penyimpanan berkas: S3(Pro)]** Menambahkan logika pembuatan multer untuk unggahan sisi server oleh @mytharcher
