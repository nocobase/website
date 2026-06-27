---
title: "NocoBase v1.8.13: Menambahkan opsi konfigurasi terkait tanda tangan"
description: "Catatan Rilis v1.8.13"
---

### 🎉 Fitur Baru

- **[Auth: SAML 2.0]** Menambahkan opsi konfigurasi terkait tanda tangan oleh @2013xile

### 🚀 Peningkatan

- **[Workflow: JavaScript]** Mengubah cache menjadi cache aplikasi untuk menghindari bug dalam mode kluster oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki tooltip yang menampilkan [object Object] saat dihover di panel aksi ([#7322](https://github.com/nocobase/nocobase/pull/7322)) oleh @katherinehhh

  - Saat menggunakan variabel untuk mengatur nilai default kolom di formulir filter, jika nilai variabel kosong, kotak input akan menampilkan string variabel asli ([#7335](https://github.com/nocobase/nocobase/pull/7335)) oleh @zhangzhonghe

- **[Collection: Tree]** Memperbaiki logika sinkronisasi jalur dari koleksi pohon ([#7330](https://github.com/nocobase/nocobase/pull/7330)) oleh @ChimingLiu
