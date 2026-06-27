---
title: "NocoBase v1.7.14: Sembunyikan otomatis bilah aksi blok kartu grid saat kosong"
description: "Catatan Rilis v1.7.14"
---

### 🚀 Peningkatan

- **[klien]** Sembunyikan secara otomatis bilah aksi kartu grid saat kosong ([#7069](https://github.com/nocobase/nocobase/pull/7069)) oleh @zhangzhonghe

- **[Verifikasi]** Hapus opsi verifikator dari respons API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[database]** dukung pembaruan asosiasi di updateOrCreate dan firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) oleh @chenos

- **[klien]**
  - Variabel parameter kueri URL tidak berfungsi pada nilai default bidang formulir publik ([#7084](https://github.com/nocobase/nocobase/pull/7084)) oleh @katherinehhh

  - Kondisi gaya pada bidang kolom sub-tabel tidak diterapkan dengan benar ([#7083](https://github.com/nocobase/nocobase/pull/7083)) oleh @katherinehhh

  - Pemfilteran melalui bidang koleksi relasi di formulir filter tidak valid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) oleh @zhangzhonghe

- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbarui bidang banyak ke banyak (array) memunculkan kesalahan saat bidang `updatedBy` ada ([#7089](https://github.com/nocobase/nocobase/pull/7089)) oleh @2013xile

- **[Formulir publik]** Formulir publik: Perbaiki masalah akses tidak sah saat pengiriman formulir ([#7085](https://github.com/nocobase/nocobase/pull/7085)) oleh @zhangzhonghe
