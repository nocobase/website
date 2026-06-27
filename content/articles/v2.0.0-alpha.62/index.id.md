---
title: "NocoBase v2.0.0-alpha.62: Meningkatkan pemeriksaan izin saat memodifikasi bidang asosiasi bersarang"
description: "Catatan Rilis v2.0.0-alpha.62"
---

### 🚀 Peningkatan

- **[Kontrol akses]** Meningkatkan pemeriksaan izin saat memodifikasi field asosiasi bersarang ([#7856](https://github.com/nocobase/nocobase/pull/7856)) oleh @2013xile

### 🐛 Perbaikan Bug

- **[client]**
  - Memperbaiki logika refine untuk targetKey opsional ([#8333](https://github.com/nocobase/nocobase/pull/8333)) oleh @katherinehhh

  - Memperbaiki masalah di mana field asosiasi tidak benar pada komponen `FilterAction` ([#8295](https://github.com/nocobase/nocobase/pull/8295)) oleh @mytharcher

  - Memperbaiki parameter filter yang salah untuk field Select relasi di subtable yang dapat diedit ([#8335](https://github.com/nocobase/nocobase/pull/8335)) oleh @katherinehhh

- **[flow-engine]** Memperbaiki masalah di mana polusi state dapat terjadi saat membuka popup beberapa kali. ([#8327](https://github.com/nocobase/nocobase/pull/8327)) oleh @gchust

- **[database]** Memperbaiki objek `appends` di `OptionsParser`, dan meningkatkan `arrayLimit` untuk parameter ([#8328](https://github.com/nocobase/nocobase/pull/8328)) oleh @mytharcher

- **[Aksi: Impor rekaman]** Memperbaiki pesan error yang salah saat terjadi error batasan unik selama impor XLSX asinkron ([#8342](https://github.com/nocobase/nocobase/pull/8342)) oleh @cgyrock

- **[Sumber data: Utama]** Metadata koleksi tampilan harus menyertakan opsi field sumber ([#8337](https://github.com/nocobase/nocobase/pull/8337)) oleh @2013xile

- **[Aksi: Ekspor rekaman Pro]** Memperbaiki error saat sub-aplikasi menjalankan tugas impor/ekspor asinkron sementara aplikasi utama tidak mengaktifkan plugin impor/ekspor pro oleh @cgyrock

- **[Workflow: Persetujuan]** Memperbaiki masalah di mana field filter tidak berfungsi dengan benar di pusat tugas oleh @mytharcher

- **[Manajer email]** Menampilkan tombol balas semua dan cakupan data mendukung pemfilteran pesan anak. oleh @jiannx
