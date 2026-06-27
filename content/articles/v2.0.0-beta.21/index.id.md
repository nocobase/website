---
title: "NocoBase v2.0.0-beta.21: mendukung konfigurasi bidang dari bidang koleksi asosiasi di blok formulir"
description: "Catatan Rilis v2.0.0-beta.21"
---

### 🎉 Fitur Baru

- **[client]** mendukung konfigurasi bidang koleksi asosiasi di blok formulir ([#8578](https://github.com/nocobase/nocobase/pull/8578)) oleh @katherinehhh

- **[Aksi: Duplikat rekaman]** menambahkan aksi duplikat 2.0 ([#8580](https://github.com/nocobase/nocobase/pull/8580)) oleh @katherinehhh

- **[Workflow]** Mendukung penyalinan, penempelan, dan pemindahan node dengan drag and drop di kanvas workflow ([#8559](https://github.com/nocobase/nocobase/pull/8559)) oleh @mytharcher

### 🚀 Peningkatan

- **[flow-engine]** Meningkatkan pelengkapan otomatis dan petunjuk kode di editor kode model JS. ([#8575](https://github.com/nocobase/nocobase/pull/8575)) oleh @gchust

- **[Workflow: Persetujuan]** Menghapus dukungan untuk bidang JS oleh @zhangzhonghe

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki potensi kesalahan render "baca tersembunyi" dalam mode non-konfigurasi. ([#8591](https://github.com/nocobase/nocobase/pull/8591)) oleh @gchust

  - memperbaiki sub-tabel (edit inline) yang masih menampilkan kolom mode edit setelah beralih ke tampilan hanya-baca di formulir edit ([#8589](https://github.com/nocobase/nocobase/pull/8589)) oleh @katherinehhh

- **[Flow engine]** Memperbaiki masalah di mana penggunaan template blok dalam mode "Duplikat" menyebabkan popup kosong jika mengklik tombol aksi dari blok tersebut. ([#8581](https://github.com/nocobase/nocobase/pull/8581)) oleh @gchust

- **[Blok: Peta]** Memperbaiki opsi konfigurasi 'Simpan sebagai template' yang duplikat di blok peta ([#8584](https://github.com/nocobase/nocobase/pull/8584)) oleh @katherinehhh
