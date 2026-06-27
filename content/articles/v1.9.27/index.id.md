---
title: "NocoBase v1.9.27: Menambahkan toleransi kesalahan saat instance aplikasi yang hilang menyebabkan kesalahan saat mengambil pesan pemeliharaan aplikasi"
description: "Catatan Rilis v1.9.27"
---

### 🚀 Perbaikan

- **[server]** Menambahkan toleransi kesalahan ketika instance aplikasi yang hilang menyebabkan error saat mengambil pesan pemeliharaan aplikasi ([#8196](https://github.com/nocobase/nocobase/pull/8196)) oleh @2013xile

- **[Penanganan error]** Tidak mengekspos pesan error database mentah pada kesalahan sintaks SQL, untuk menghindari pengungkapan jenis database ([#8195](https://github.com/nocobase/nocobase/pull/8195)) oleh @2013xile

- **[Workflow]** Mendukung penggunaan konfigurasi lama untuk membuat workflow baru dalam duplikasi workflow ([#8165](https://github.com/nocobase/nocobase/pull/8165)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[Workflow]** Memperbaiki masalah di mana hanya satu catatan yang ditampilkan dalam daftar catatan untuk dieksekusi secara manual ([#8187](https://github.com/nocobase/nocobase/pull/8187)) oleh @mytharcher

- **[Koleksi: Hubungkan ke data asing (FDW)]** Memperbaiki error pemicu saat menghubungkan ke tabel dengan nama huruf kapital oleh @2013xile

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana status catatan persetujuan yang tidak terkait berubah secara tidak benar menjadi `UNPROCESSED` oleh tindakan menyetujui oleh @mytharcher
