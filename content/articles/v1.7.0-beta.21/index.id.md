---
title: "NocoBase v1.7.0-beta.21: Memperbarui dependensi dan menghapus dukungan SQLite"
description: "Catatan Rilis v1.7.0-beta.21"
---

### 🚀 Peningkatan

- **[create-nocobase-app]** Memperbarui dependensi dan menghapus dukungan SQLite ([#6708](https://github.com/nocobase/nocobase/pull/6708)) oleh @chenos

- **[Mobile]** Mengoptimalkan kecepatan pembukaan popup pemilih tanggal di perangkat seluler ([#6735](https://github.com/nocobase/nocobase/pull/6735)) oleh @zhangzhonghe

- **[Blok: template]** Mendukung konversi blok template menjadi blok normal ([#6662](https://github.com/nocobase/nocobase/pull/6662)) oleh @gchust

- **[Editor tema]** Mengizinkan pengaturan lebar sidebar dalam konfigurasi tema ([#6720](https://github.com/nocobase/nocobase/pull/6720)) oleh @chenos

- **[Manajer file]** Mengekspos API utilitas ([#6705](https://github.com/nocobase/nocobase/pull/6705)) oleh @mytharcher

- **[Workflow]** Menambahkan tipe tanggal ke dalam kumpulan tipe variabel ([#6717](https://github.com/nocobase/nocobase/pull/6717)) oleh @mytharcher

- **[Cetak template]** Mengganti kontrol aksi sumber data dengan kontrol akses berbasis peran klien. oleh @sheldon66

### 🐛 Perbaikan Bug

- **[klien]**
  - Masalah penyegaran blok data setelah pengiriman berhasil ([#6748](https://github.com/nocobase/nocobase/pull/6748)) oleh @zhangzhonghe

  - Filter untuk data yang sudah terasosiasi hilang saat menambahkan data asosiasi ([#6750](https://github.com/nocobase/nocobase/pull/6750)) oleh @katherinehhh

  - Masalah tombol collapse di menu kiri yang terhalang oleh jendela pop-up workflow ([#6733](https://github.com/nocobase/nocobase/pull/6733)) oleh @zhangzhonghe

  - Aturan tautan tombol 'Tambah Anak' di tabel pohon kehilangan 'rekaman saat ini' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) oleh @katherinehhh

  - Kondisi bidang tanggal waktu tidak berfungsi dalam aturan tautan ([#6728](https://github.com/nocobase/nocobase/pull/6728)) oleh @katherinehhh

  - Masalah ikon navigasi atas di perangkat seluler yang sulit dihapus ([#6734](https://github.com/nocobase/nocobase/pull/6734)) oleh @zhangzhonghe

  - Tampilan nilai yang salah untuk "Aktifkan kolom indeks" ([#6724](https://github.com/nocobase/nocobase/pull/6724)) oleh @katherinehhh

  - Bidang wajib yang disembunyikan oleh aturan tautan seharusnya tidak mempengaruhi pengiriman formulir ([#6709](https://github.com/nocobase/nocobase/pull/6709)) oleh @zhangzhonghe

  - Konversi variabel dalam kondisi aturan tautan sub-tabel/sub-formulir ([#6702](https://github.com/nocobase/nocobase/pull/6702)) oleh @katherinehhh

  - Tombol ekspor muncul tanpa izin ekspor ([#6689](https://github.com/nocobase/nocobase/pull/6689)) oleh @katherinehhh

  - Batasan opsi aksi hilang saat membuka kembali aturan tautan ([#6723](https://github.com/nocobase/nocobase/pull/6723)) oleh @katherinehhh

  - Masalah peralihan pemilih di bidang tanggal tombol filter ([#6695](https://github.com/nocobase/nocobase/pull/6695)) oleh @katherinehhh

  - Setelah terhubung melalui kunci asing, mengklik untuk memicu pemfilteran menghasilkan kondisi filter kosong ([#6634](https://github.com/nocobase/nocobase/pull/6634)) oleh @zhangzhonghe

- **[cli]** Memperbarui package.json secara otomatis saat upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) oleh @chenos

- **[server]** appVersion yang dihasilkan secara tidak benar oleh create-migration ([#6740](https://github.com/nocobase/nocobase/pull/6740)) oleh @chenos

- **[build]** Memperbaiki error yang muncul pada perintah tar ([#6722](https://github.com/nocobase/nocobase/pull/6722)) oleh @mytharcher

- **[Blok: Gantt]** Bulan yang tumpang tindih di header kalender untuk tampilan bulan pada blok diagram gantt ([#6753](https://github.com/nocobase/nocobase/pull/6753)) oleh @katherinehhh

- **[Aksi: Impor rekaman]** Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) oleh @aaaaaajie

- **[Blok: template]** Template blok tidak dapat digunakan di lingkungan mysql ([#6726](https://github.com/nocobase/nocobase/pull/6726)) oleh @gchust

- **[Workflow]** Memperbaiki error yang muncul saat menjalankan event terjadwal di subflow ([#6721](https://github.com/nocobase/nocobase/pull/6721)) oleh @mytharcher

- **[Visualisasi data]** Opsi bidang enum kosong di blok filter ([#6706](https://github.com/nocobase/nocobase/pull/6706)) oleh @2013xile

- **[Aksi: Permintaan kustom]** Memastikan data permintaan kustom harus berupa JSON ([#6701](https://github.com/nocobase/nocobase/pull/6701)) oleh @chenos

- **[Aksi: Ekspor rekaman Pro]**
  - Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. oleh @aaaaaajie

  - Tombol ekspor pro kehilangan parameter filter setelah mengurutkan kolom tabel oleh @katherinehhh

- **[Workflow: Aksi event kustom]** Mendukung eksekusi dalam mode beberapa rekaman oleh @mytharcher

- **[Penyimpanan file: S3(Pro)]**
  - Menambahkan logika pembuatan multer untuk unggahan sisi server oleh @mytharcher

  - Memperbaiki data respons dari file yang diunggah oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki preload bidang asosiasi untuk rekaman oleh @mytharcher
