---
title: "NocoBase v2.1.0-beta.11: Tambahkan daftar eksekusi filter"
description: "Catatan Rilis v2.1.0-beta.11"
---

### 🚀 Peningkatan

- **[Workflow]** Menambahkan daftar eksekusi filter ([#8914](https://github.com/nocobase/nocobase/pull/8914)) oleh @mytharcher

- **[Workflow: Persetujuan]** Menghindari konfigurasi UI pemberi persetujuan ketika tidak ada koleksi yang dikonfigurasi di pemicu oleh @mytharcher

### 🐛 Perbaikan Bug

- **[server]** Memperbaiki masalah di mana event siklus hidup yang dikirim oleh worker menyebabkan aplikasi serving berhenti ([#8906](https://github.com/nocobase/nocobase/pull/8906)) oleh @mytharcher

- **[client]** Memperbaiki masalah di mana non-administrator tidak dapat menghapus nilai field terkait ([#8904](https://github.com/nocobase/nocobase/pull/8904)) oleh @jiannx

- **[resourcer]** Mencegah array parameter `filterByTk` secara otomatis dikonversi menjadi objek ketika melebihi 100 item ([#8908](https://github.com/nocobase/nocobase/pull/8908)) oleh @2013xile

- **[Aksi: Impor rekaman Pro]**
  - Memperbaiki masalah di mana error muncul saat mengimpor dalam mode sinkron oleh @mytharcher

  - Memperbaiki masalah di mana kolom lebih dari ~30 menyebabkan error impor, karena stream telah dibaca secara duplikat oleh @mytharcher

- **[Workflow: Persetujuan]** Memperbaiki masalah konkurensi saat menambahkan penerima tugas oleh @mytharcher

- **[Manajer migrasi]** Memperbaiki masalah di mana migrasi terhenti karena error yang disebabkan oleh lingkungan target yang tidak memiliki tabel baru yang dibuat selama proses migrasi unggah. oleh @Andrew1989Y
