---
title: "NocoBase v2.0.0-beta.11: Editor teks kaya mendukung penyesuaian ukuran font, penyesuaian ukuran gambar, dan pemisah baris lunak"
description: "Catatan Rilis v2.0.0-beta.11"
---

### 🚀 Peningkatan

- **[evaluator]** Memperbarui versi math.js untuk mendukung lebih banyak fungsi ([#8411](https://github.com/nocobase/nocobase/pull/8411)) oleh @mytharcher

- **[klien]** Editor teks kaya mendukung penyesuaian ukuran font, penyesuaian ukuran gambar, dan pemisah baris lunak ([#8401](https://github.com/nocobase/nocobase/pull/8401)) oleh @jiannx

- **[AI employees]** Mengubah hasil pemanggil alur kerja menjadi `execution.output`, dengan secara eksplisit menggunakan node output, hasilnya bisa stabil ([#8423](https://github.com/nocobase/nocobase/pull/8423)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[klien]**
  - Menambahkan toleransi kesalahan untuk skema aksi, untuk menghindari kerusakan halaman saat mengklik tombol aksi ([#8420](https://github.com/nocobase/nocobase/pull/8420)) oleh @mytharcher

  - Memperbaiki pengaturan bidang judul yang hilang setelah mengatur URL lampiran dan kemudian mengubah ke bidang lain di item formulir ([#8418](https://github.com/nocobase/nocobase/pull/8418)) oleh @katherinehhh

  - Memperbaiki bidang judul i tidak diperbarui ketika bidang asosiasi diatur ke mode hanya-baca di formulir pembuatan ([#8413](https://github.com/nocobase/nocobase/pull/8413)) oleh @katherinehhh

- **[Mesin alur]** Memperbaiki masalah di mana resolusi variabel salah ketika filterByTk adalah sebuah array. ([#8412](https://github.com/nocobase/nocobase/pull/8412)) oleh @gchust

- **[Cetak template]** mendukung bidang spasi oleh @jiannx
