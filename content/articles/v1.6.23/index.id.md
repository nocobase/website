---
title: "NocoBase v1.6.23: Optimalkan logika internal perintah `nocobase upgrade`"
description: "Catatan Rilis v1.6.23"
---

### 🚀 Peningkatan

- **[cli]** Mengoptimalkan logika internal dari perintah `nocobase upgrade` ([#6754](https://github.com/nocobase/nocobase/pull/6754)) oleh @chenos

- **[Cetak template]** Mengganti kontrol aksi sumber data dengan kontrol akses berbasis peran klien. oleh @sheldon66

### 🐛 Perbaikan Bug

- **[cli]** Memperbarui package.json secara otomatis saat upgrade ([#6747](https://github.com/nocobase/nocobase/pull/6747)) oleh @chenos

- **[client]**
  - Filter yang hilang untuk data yang sudah terasosiasi saat menambahkan data asosiasi ([#6750](https://github.com/nocobase/nocobase/pull/6750)) oleh @katherinehhh

  - Aturan tautan tombol 'Tambah Anak' pada tabel pohon kehilangan 'rekaman saat ini' ([#6752](https://github.com/nocobase/nocobase/pull/6752)) oleh @katherinehhh

- **[Aksi: Impor rekaman]** Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. ([#6677](https://github.com/nocobase/nocobase/pull/6677)) oleh @aaaaaajie

- **[Blok: Gantt]** Blok diagram gantt yang tumpang tindih antar bulan di header kalender untuk tampilan bulan ([#6753](https://github.com/nocobase/nocobase/pull/6753)) oleh @katherinehhh

- **[Aksi: Ekspor rekaman Pro]**
  - Tombol ekspor pro kehilangan parameter filter setelah mengurutkan kolom tabel oleh @katherinehhh

  - Memperbaiki pengecualian impor dan ekspor yang terjadi saat mengatur izin bidang. oleh @aaaaaajie

- **[Penyimpanan berkas: S3(Pro)]** Memperbaiki data respons dari berkas yang diunggah oleh @mytharcher

- **[Alur kerja: Persetujuan]** Memperbaiki bidang asosiasi pramuat untuk rekaman oleh @mytharcher
