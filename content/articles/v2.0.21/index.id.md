---
title: "NocoBase v2.0.21: Tambahkan daftar eksekusi filter"
description: "Catatan Rilis v2.0.21"
---

### 🚀 Peningkatan

- **[Workflow]** Menambahkan daftar eksekusi filter ([#8914](https://github.com/nocobase/nocobase/pull/8914)) oleh @mytharcher

- **[Workflow: Persetujuan]** Menghindari konfigurasi UI pemberi persetujuan ketika tidak ada koleksi yang dikonfigurasi di pemicu oleh @mytharcher

### 🐛 Perbaikan Bug

- **[resourcer]** Mencegah array parameter `filterByTk` agar tidak secara otomatis dikonversi menjadi objek ketika melebihi 100 item ([#8908](https://github.com/nocobase/nocobase/pull/8908)) oleh @2013xile

- **[client]** Memperbaiki masalah di mana non-administrator tidak dapat menghapus nilai bidang terkait ([#8904](https://github.com/nocobase/nocobase/pull/8904)) oleh @jiannx

- **[Aksi: Impor Rekaman Pro]**
  - Memperbaiki masalah di mana kesalahan muncul saat mengimpor dalam mode sinkron oleh @mytharcher

  - Memperbaiki masalah di mana kolom lebih dari ~30 menyebabkan kesalahan impor, karena aliran telah dibaca secara duplikat oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki masalah konkurensi saat menambahkan penerima tugas oleh @mytharcher
