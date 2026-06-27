---
title: "NocoBase v1.4.0-alpha.20241031134640: Tambahkan saluran notifikasi WeCom"
description: "Catatan Rilis v1.4.0-alpha.20241031134640"
---

### 🎉 Fitur Baru

- **[WeCom]** Menambahkan saluran notifikasi WeCom oleh @chenzhizdt

### 🚀 Peningkatan

- **[client]** Mengembalikan nilai default saat judul bidang dikosongkan ([#5549](https://github.com/nocobase/nocobase/pull/5549)) oleh @katherinehhh

- **[Manajer notifikasi]**
  - Menambahkan komponen UserSelect dan UserAddition untuk menyederhanakan pengembangan saluran notifikasi ([#5553](https://github.com/nocobase/nocobase/pull/5553)) oleh @2013xile

  - Menambahkan API untuk mendapatkan registri jenis saluran dari plugin notifikasi ([#5531](https://github.com/nocobase/nocobase/pull/5531)) oleh @mytharcher

  - Menyesuaikan nama registri jenis saluran plugin notifikasi ([#5532](https://github.com/nocobase/nocobase/pull/5532)) oleh @mytharcher

  - Menambahkan API plugin manajer notifikasi untuk mendapatkan semua jenis yang terdaftar ([#5529](https://github.com/nocobase/nocobase/pull/5529)) oleh @mytharcher

- **[Notifikasi: Pesan dalam aplikasi]** Meningkatkan UI pesan dalam aplikasi dan menambahkan beberapa log. ([#5550](https://github.com/nocobase/nocobase/pull/5550)) oleh @sheldon66

### 🐛 Perbaikan Bug

- **[database]**
  - Memperbaiki pembaruan opsi koleksi dengan kunci target filter ([#5558](https://github.com/nocobase/nocobase/pull/5558)) oleh @chareice

  - Memperbaiki nilai primaryKeyField yang salah di sequelize saat bekerja dengan beberapa kunci target filter ([#5556](https://github.com/nocobase/nocobase/pull/5556)) oleh @chareice

- **[client]**
  - Memperbaiki masalah di mana komponen kerangka di blok tabel tidak hilang ([#5548](https://github.com/nocobase/nocobase/pull/5548)) oleh @zhangzhonghe

  - Memperbaiki masalah pada aksi penghapusan, elipsis teks, dan tampilan data baru di sub-tabel ([#5523](https://github.com/nocobase/nocobase/pull/5523)) oleh @katherinehhh

- **[Manajer sumber data]** Memperbaiki penghapusan sumber data dalam status gagal ([#5554](https://github.com/nocobase/nocobase/pull/5554)) oleh @chareice

- **[Notifikasi: Email]**
  - Memperbaiki kueri untuk pengguna berdasarkan id di notifikasi email ([#5533](https://github.com/nocobase/nocobase/pull/5533)) oleh @mytharcher

  - Memperbaiki subjek yang terlewat di notifikasi email berdasarkan id pengguna ([#5534](https://github.com/nocobase/nocobase/pull/5534)) oleh @mytharcher

  - Memperbaiki jalur bidang reaksi di formulir dinamis notifikasi email ([#5527](https://github.com/nocobase/nocobase/pull/5527)) oleh @mytharcher

- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbaiki masalah di mana komponen pilih untuk bidang banyak ke banyak (array) hanya memiliki satu opsi ([#5544](https://github.com/nocobase/nocobase/pull/5544)) oleh @2013xile

- **[Manajer notifikasi]** Memperbaiki crash halaman akibat jenis saluran yang salah ([#5528](https://github.com/nocobase/nocobase/pull/5528)) oleh @mytharcher

- **[Workflow: Node SQL]** Memperbaiki sse yang menyebabkan "waitForLoadState('networkidle')" timeout ([#5524](https://github.com/nocobase/nocobase/pull/5524)) oleh @hongboji

- **[Komponen bidang: mask]** Memperbaiki data asli yang tidak dapat ditampilkan dengan klik jika komponen dalam status readonly oleh @gchust

- **[Workflow: Aksi event kustom]** Memperbaiki sse yang menyebabkan "waitForLoadState('networkidle')" timeout oleh @hongboji

- **[WeCom]** Memperbaiki masalah respons 404 tidak ditemukan saat masuk ke aplikasi dari workbench WeCom oleh @chenzhizdt
