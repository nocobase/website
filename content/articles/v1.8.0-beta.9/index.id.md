---
title: "NocoBase v1.8.0-beta.9: Sembunyikan otomatis bilah aksi blok kartu grid saat kosong"
description: "Catatan Rilis v1.8.0-beta.9"
---

### 🚀 Peningkatan

- **[klien]**
  - Menyembunyikan bilah aksi blok kartu grid secara otomatis saat kosong ([#7069](https://github.com/nocobase/nocobase/pull/7069)) oleh @zhangzhonghe

  - Lebar kontainer logo menyesuaikan dengan jenis konten (168px tetap untuk gambar, lebar otomatis untuk teks) ([#7075](https://github.com/nocobase/nocobase/pull/7075)) oleh @Cyx649312038

- **[Verifikasi]** Menghapus opsi verifikator dari respons API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[klien]**
  - Pesan validasi wajib di sub-tabel tetap muncul saat berpindah halaman ([#7080](https://github.com/nocobase/nocobase/pull/7080)) oleh @katherinehhh

  - Kondisi gaya pada kolom sub-tabel tidak diterapkan dengan benar ([#7083](https://github.com/nocobase/nocobase/pull/7083)) oleh @katherinehhh

  - Titik desimal hilang setelah mengganti komponen jumlah dari mask ke inputNumer ([#7077](https://github.com/nocobase/nocobase/pull/7077)) oleh @katherinehhh

  - Variabel parameter kueri URL tidak berfungsi di nilai default bidang formulir publik ([#7084](https://github.com/nocobase/nocobase/pull/7084)) oleh @katherinehhh

  - Pemfilteran melalui bidang koleksi relasi di formulir filter tidak valid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) oleh @zhangzhonghe

  - Rendering Markdown (Vditor) yang salah di sub-tabel ([#7074](https://github.com/nocobase/nocobase/pull/7074)) oleh @katherinehhh

- **[database]** mendukung pembaruan asosiasi di updateOrCreate dan firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) oleh @chenos

- **[Bidang koleksi: Banyak ke banyak (array)]** Memperbarui bidang banyak ke banyak (array) memunculkan error saat bidang `updatedBy` ada ([#7089](https://github.com/nocobase/nocobase/pull/7089)) oleh @2013xile

- **[Bidang koleksi: Urutan]** Memperbaiki perhitungan urutan bigint berbasis string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) oleh @mytharcher

- **[Formulir publik]** Formulir publik: Memperbaiki masalah akses tidak sah saat pengiriman formulir ([#7085](https://github.com/nocobase/nocobase/pull/7085)) oleh @zhangzhonghe
