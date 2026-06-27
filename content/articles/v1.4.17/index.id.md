---
title: "NocoBase v1.4.17: Mendukung penggunaan variabel \"Catatan tabel yang dipilih\" di bidang array m2m"
description: "Catatan Rilis v1.4.17"
---

### 🎉 Fitur Baru

- **[client]** Mendukung penggunaan variabel "Record tabel terpilih" di field array m2m ([#5974](https://github.com/nocobase/nocobase/pull/5974)) oleh @2013xile

### 🚀 Peningkatan

- **[undefined]** Mengaktifkan plugin tema secara default ([#5957](https://github.com/nocobase/nocobase/pull/5957)) oleh @zhangzhonghe

- **[Sumber data: Utama]** Menambahkan validasi konflik nama untuk mencegah pengguna membuat Koleksi dengan nama yang sama dengan Koleksi sistem ([#5962](https://github.com/nocobase/nocobase/pull/5962)) oleh @chareice

- **[Workflow]** Menghindari penyalahgunaan variabel rentang tanggal di sebagian besar tempat kecuali komponen filter ([#5954](https://github.com/nocobase/nocobase/pull/5954)) oleh @mytharcher

### 🐛 Perbaikan Bug

- **[database]**
  - Memperbaiki masalah pada aksi destroy di mana filterByTk dengan parameter filter tidak dapat menghapus data ([#5976](https://github.com/nocobase/nocobase/pull/5976)) oleh @chareice

  - Metode firstOrCreate dan updateOrCreate dari repositori kehilangan konteks ([#5973](https://github.com/nocobase/nocobase/pull/5973)) oleh @chenos

- **[client]**
  - Memperbaiki masalah saat menambahkan field relasi satu-ke-satu di formulir ([#5975](https://github.com/nocobase/nocobase/pull/5975)) oleh @katherinehhh

  - Memperbaiki masalah penugasan field di sub-tabel saat memilih ulang data setelah menghapus data ([#5958](https://github.com/nocobase/nocobase/pull/5958)) oleh @katherinehhh

  - Memperbaiki error blok tabel yang disebabkan oleh data yang mengandung field bernama 'children' ([#5951](https://github.com/nocobase/nocobase/pull/5951)) oleh @zhangzhonghe

- **[Sumber data: Utama]** Memperbaiki masalah dukungan lawas dengan field unixTimestamp. ([#5967](https://github.com/nocobase/nocobase/pull/5967)) oleh @chareice

- **[Workflow]** Memperbaiki blok sub-detail yang memunculkan error di konfigurasi UI node manual ([#5953](https://github.com/nocobase/nocobase/pull/5953)) oleh @mytharcher
