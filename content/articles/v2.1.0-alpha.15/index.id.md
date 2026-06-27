---
title: "NocoBase v2.1.0-alpha.15: Menambahkan blok filter pohon"
description: "Catatan Rilis v2.1.0-alpha.15"
---

### 🎉 Fitur Baru

- **[Blok: Pohon]** Menambahkan blok filter pohon ([#9016](https://github.com/nocobase/nocobase/pull/9016)) oleh @jiannx

- **[Auth: Kunci API]** menambahkan perintah `pm list` dan `generate-api-key` ([#9076](https://github.com/nocobase/nocobase/pull/9076)) oleh @chenos

- **[Karyawan AI]**
  - Menambahkan alat kueri data dan alat laporan analisis bisnis untuk karyawan AI ([#9040](https://github.com/nocobase/nocobase/pull/9040)) oleh @2013xile

  - Menambahkan alat pencarian web berbasis LLM untuk karyawan AI ([#9032](https://github.com/nocobase/nocobase/pull/9032)) oleh @cgyrock

- **[Manajer migrasi]** mendukung perintah migrasi oleh @chenos

- **[Manajer email]** gmail mendukung pengiriman email dengan alias oleh @jiannx

### 🐛 Perbaikan Bug

- **[flow-engine]** Memperbaiki masalah di mana field many-to-one dari sumber data eksternal tidak dapat ditambahkan di blok tabel ([#9068](https://github.com/nocobase/nocobase/pull/9068)) oleh @jiannx

- **[client]**
  - memperbaiki kesalahan sub-tabel saat menambahkan field many-to-many ([#9070](https://github.com/nocobase/nocobase/pull/9070)) oleh @jiannx

  - Memperbaiki masalah di mana popup pengambilan data dari tombol pilihan sub-tabel tidak dapat menyelesaikan nilai variabel item induk dengan benar. ([#8996](https://github.com/nocobase/nocobase/pull/8996)) oleh @gchust

  - Memperbaiki masalah di mana pesan konfirmasi perubahan yang belum disimpan yang salah muncul untuk aksi edit massal ([#9054](https://github.com/nocobase/nocobase/pull/9054)) oleh @gchust

  - Memperbaiki masalah di mana popup konfirmasi sekunder yang salah muncul saat mengirimkan formulir setelah membuat data melalui sub-tabel popup. ([#9035](https://github.com/nocobase/nocobase/pull/9035)) oleh @gchust

  - Memperbaiki masalah di mana ctx.request tidak dapat menimpa header Authorization. ([#8850](https://github.com/nocobase/nocobase/pull/8850)) oleh @gchust

- **[data-source-manager]** Memperbaiki masalah di mana beberapa tipe field tidak diperbarui dengan benar setelah sinkronisasi field dari basis data ([#9046](https://github.com/nocobase/nocobase/pull/9046)) oleh @2013xile

- **[Manajer notifikasi]** Mengoptimalkan kinerja pengiriman notifikasi dalam aplikasi pada skenario alur kerja ([#9066](https://github.com/nocobase/nocobase/pull/9066)) oleh @mytharcher

- **[Field koleksi: Kode]** Memperbaiki antarmuka UI dari field kode ([#9061](https://github.com/nocobase/nocobase/pull/9061)) oleh @2013xile

- **[Node permintaan HTTP alur kerja]** Membersihkan hasil node permintaan alur kerja untuk menghindari paparan konfigurasi permintaan, mengatur default node baru untuk hanya mengembalikan data respons, dan menambahkan log debugging untuk permintaan yang gagal. ([#9024](https://github.com/nocobase/nocobase/pull/9024)) oleh @mytharcher

- **[Karyawan AI]**
  - Memperbaiki masalah di mana membatalkan penalaran karyawan AI akan menyebabkan layanan crash ([#9031](https://github.com/nocobase/nocobase/pull/9031)) oleh @cgyrock

  - Memperbaiki kegagalan unggah dokumen karyawan AI pada akses subpath dengan APP_PUBLIC_PATH yang dikonfigurasi. ([#9034](https://github.com/nocobase/nocobase/pull/9034)) oleh @cgyrock

  - Memperbaiki masalah saat menggunakan model deepseek atau minmax di dashscope ([#9033](https://github.com/nocobase/nocobase/pull/9033)) oleh @cgyrock
