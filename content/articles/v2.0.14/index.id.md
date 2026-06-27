---
title: "NocoBase v2.0.14: Peningkatan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi"
description: "Catatan Rilis v2.0.14"
---

### 🚀 Peningkatan

- **[Manajer migrasi]** Peningkatan pemeriksaan migrasi, dukungan unduhan SQL, pemformatan log, dan visibilitas proses eksekusi oleh @cgyrock

### 🐛 Perbaikan Bug

- **[klien]**
  - Memperbaiki masalah di mana bidang kustom dalam nilai Bidang formulir Filter tidak dapat merender tipe input nilai yang benar ([#8823](https://github.com/nocobase/nocobase/pull/8823)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana tombol ciutkan formulir filter v2 berhenti berfungsi setelah mengurutkan bidang ([#8843](https://github.com/nocobase/nocobase/pull/8843)) oleh @zhangzhonghe

  - Memperbaiki masalah di mana halaman manajemen templat referensi (v1) kehilangan aksi filter dan segarkan. ([#8833](https://github.com/nocobase/nocobase/pull/8833)) oleh @gchust

  - Data sub form & sub tabel tidak ditampilkan karena pemeriksaan izin ([#8846](https://github.com/nocobase/nocobase/pull/8846)) oleh @chenos

- **[Kontrol akses]** menggunakan collection.filterTargetKey sebagai pengganti Model.primaryKeyField ([#8853](https://github.com/nocobase/nocobase/pull/8853)) oleh @chenos

- **[Templat UI]**
  - Memperbaiki kesalahan render untuk blok referensi panel aksi. ([#8818](https://github.com/nocobase/nocobase/pull/8818)) oleh @gchust

  - Memperbaiki masalah di mana catatan asosiasi tidak dapat dimuat dengan benar setelah menyimpan blok detail sebagai templat. ([#8827](https://github.com/nocobase/nocobase/pull/8827)) oleh @gchust

- **[Alur Kerja: Persetujuan]**
  - Memperbaiki masalah di mana penerima tugas tidak mengikuti urutan yang dikonfigurasi di node oleh @mytharcher

  - Memperbaiki label yang tidak diterjemahkan dalam detail pemrosesan persetujuan oleh @zhangzhonghe

- **[Manajer migrasi]**
  - Memperbaiki kesalahan build oleh @mytharcher

  - Memperbaiki deskripsi migrasi yang hilang dan menetapkan waktu saat ini sebagai default oleh @cgyrock

  - Memperbaiki potensi pembekuan proses yang disebabkan oleh pencatatan pernyataan SQL yang sangat besar yang disertakan dalam pengecualian kesalahan migrasi oleh @cgyrock

  - Menyesuaikan direktori sementara ke dalam penyimpanan, untuk mendukung penggunaan di bawah mode kluster oleh @mytharcher
