---
title: "NocoBase v1.8.0-alpha.9: Menambahkan variabel catatan persetujuan ke hasil node"
description: "Catatan Rilis v1.8.0-alpha.9"
---

### 🎉 Fitur Baru

- **[client]** Mendukung field BIT di SQL Server untuk sumber data eksternal. ([#7058](https://github.com/nocobase/nocobase/pull/7058)) oleh @aaaaaajie

- **[Sumber Data: SQL Server Eksternal]** Mendukung field BIT SQL Server di sumber data eksternal oleh @aaaaaajie

- **[Workflow: Persetujuan]** Menambahkan variabel catatan persetujuan ke hasil node oleh @mytharcher

### 🚀 Peningkatan

- **[client]** Menyembunyikan bilah aksi blok kartu grid secara otomatis saat kosong ([#7069](https://github.com/nocobase/nocobase/pull/7069)) oleh @zhangzhonghe

- **[Verifikasi]** Menghapus opsi verifikator dari respons API `verifiers:listByUser` ([#7090](https://github.com/nocobase/nocobase/pull/7090)) oleh @2013xile

- **[Workflow]** Menyesuaikan API `getCollectionFieldOptions` ([#7095](https://github.com/nocobase/nocobase/pull/7095)) oleh @mytharcher

- **[Workflow: Event pra-aksi]** Menyesuaikan API variabel oleh @mytharcher

- **[Workflow: Persetujuan]** Menyesuaikan API variabel oleh @mytharcher

### 🐛 Perbaikan Bug

- **[client]**
  - Fungsi perataan teks kolom tabel tidak berfungsi ([#7094](https://github.com/nocobase/nocobase/pull/7094)) oleh @zhangzhonghe

  - Tetapkan nilai field: Tidak dapat menghapus data untuk field relasi ([#7086](https://github.com/nocobase/nocobase/pull/7086)) oleh @zhangzhonghe

  - Menggunakan lingkup variabel independen untuk setiap field ([#7012](https://github.com/nocobase/nocobase/pull/7012)) oleh @mytharcher

  - Kondisi gaya pada field kolom sub-tabel tidak diterapkan dengan benar ([#7083](https://github.com/nocobase/nocobase/pull/7083)) oleh @katherinehhh

  - Pemfilteran melalui field koleksi relasi di form filter tidak valid ([#7070](https://github.com/nocobase/nocobase/pull/7070)) oleh @zhangzhonghe

  - Variabel parameter kueri URL tidak berfungsi di nilai default field form publik ([#7084](https://github.com/nocobase/nocobase/pull/7084)) oleh @katherinehhh

  - Pesan validasi wajib di sub-tabel tetap ada saat berpindah halaman ([#7080](https://github.com/nocobase/nocobase/pull/7080)) oleh @katherinehhh

  - Error saat mengklik tombol filter ([#7100](https://github.com/nocobase/nocobase/pull/7100)) oleh @zhangzhonghe

- **[database]** Mendukung pembaruan asosiasi di updateOrCreate dan firstOrCreate ([#7088](https://github.com/nocobase/nocobase/pull/7088)) oleh @chenos

- **[Workflow]**
  - Memperbaiki statistik yang terhapus secara berantai oleh versi workflow non-saat ini ([#7103](https://github.com/nocobase/nocobase/pull/7103)) oleh @mytharcher

  - Memperbaiki pemeriksaan yang salah dijalankan pada angka big integer ([#7099](https://github.com/nocobase/nocobase/pull/7099)) oleh @mytharcher

  - Memperbaiki pemeriksaan yang salah dijalankan pada angka big integer ([#7091](https://github.com/nocobase/nocobase/pull/7091)) oleh @mytharcher

- **[Aksi: Impor rekaman]** Menyelesaikan masalah gagal login setelah impor massal nama pengguna dan kata sandi ([#7076](https://github.com/nocobase/nocobase/pull/7076)) oleh @aaaaaajie

- **[Field koleksi: Banyak ke banyak (array)]** Memperbarui field banyak ke banyak (array) memunculkan error saat field `updatedBy` ada ([#7089](https://github.com/nocobase/nocobase/pull/7089)) oleh @2013xile

- **[Manajer file]** Memperbaiki field lampiran tidak dapat diperbarui dalam proses persetujuan ([#7093](https://github.com/nocobase/nocobase/pull/7093)) oleh @mytharcher

- **[Form publik]** Form publik: Memperbaiki masalah akses tidak sah pada pengiriman form ([#7085](https://github.com/nocobase/nocobase/pull/7085)) oleh @zhangzhonghe

- **[Field koleksi: Urutan]** Memperbaiki perhitungan urutan bigint berbasis string ([#7079](https://github.com/nocobase/nocobase/pull/7079)) oleh @mytharcher

- **[Workflow: Persetujuan]**
  - Menggunakan perbandingan alih-alih logika implisit untuk menghindari masalah tipe oleh @mytharcher

  - Hanya peserta yang dapat melihat (mendapatkan) detail persetujuan oleh @mytharcher

- **[Manajer email]** error penghapusan email oleh @jiannx
