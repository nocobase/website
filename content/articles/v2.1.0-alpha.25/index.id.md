---
title: "NocoBase v2.1.0-alpha.25: Dukungan untuk menghapus persetujuan draf"
description: "Catatan Rilis v2.1.0-alpha.25"
---

### 🎉 Fitur Baru

- **[Workflow: Persetujuan]** Dukungan untuk menghapus draf persetujuan oleh @mytharcher

### 🚀 Peningkatan

- **[undefined]** Memperbarui dokumentasi AI untuk mewajibkan NocoBase >= 2.1.0-beta.20 dan merekomendasikan versi beta terbaru. ([#9252](https://github.com/nocobase/nocobase/pull/9252)) oleh @Molunerfinn

- **[Karyawan AI]** Memperbarui konfigurasi tugas pintasan karyawan AI untuk menggunakan komponen pengaturan keterampilan yang sama dengan konfigurasi simpul karyawan AI di alur kerja ([#9246](https://github.com/nocobase/nocobase/pull/9246)) oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana nilai default tidak diterapkan saat menambahkan ulang catatan setelah dihapus dari sub-tabel. ([#9192](https://github.com/nocobase/nocobase/pull/9192)) oleh @gchust

  - Memfilter blok opsional yang tidak penting di kotak pop-up pemilihan bidang terkait ([#9224](https://github.com/nocobase/nocobase/pull/9224)) oleh @jiannx

- **[Aksi: Impor catatan]** Memperbaiki masalah di mana impor xlsx gagal dan memunculkan kesalahan tidak ada header yang cocok ([#9253](https://github.com/nocobase/nocobase/pull/9253)) oleh @mytharcher

- **[Pengaturan lisensi]** Memperbarui pesan sukses penyimpanan lisensi ([#9251](https://github.com/nocobase/nocobase/pull/9251)) oleh @jiannx

- **[Karyawan AI]** Memperbaiki masalah di mana variabel dalam prompt sistem karyawan AI tidak berfungsi ([#9256](https://github.com/nocobase/nocobase/pull/9256)) oleh @cgyrock

- **[IdP: OAuth]** Memperbaiki kegagalan masuk CLI OAuth dan membatasi pendaftaran dinamis hanya ke URL callback lokal ([#9248](https://github.com/nocobase/nocobase/pull/9248)) oleh @2013xile

- **[AI: Basis pengetahuan]** Memperbaiki masalah di mana penghapusan dokumen basis pengetahuan tidak menghapus data vektor terkait oleh @cgyrock

- **[Aksi: Impor catatan Pro]** Memperbaiki masalah di mana impor xlsx gagal dan memunculkan kesalahan tidak ada header yang cocok oleh @mytharcher
